#include <WiFi.h>
#include <PubSubClient.h>
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>
#include <DHT.h>
#include "time.h"
#include "credentials.h"

#define dhtPin D9
#define dhtType DHT22

DHT dht(dhtPin, dhtType);
WiFiClientSecure wifiClient;

const char* mqttServer[] = {"5fef5d8821b044b1afd39bd5b19388bc.s1.eu.hivemq.cloud", "9c500c1053df40c795c005da44aee8f0.s2.eu.hivemq.cloud" };
const int mqttPort = 8883;
const char* ntpServer = "kr.pool.ntp.org";
const long  gmtOffsetSeconds = 9 * 3600;
const int   daylightOffsetSeconds = 0;
String macAddress = WiFi.macAddress();
int photoResistor = A1;
int currentBrokerIndex = 0;

//root certificate
static const char *root_ca PROGMEM = R"EOF(
-----BEGIN CERTIFICATE-----
MIIFazCCA1OgAwIBAgIRAIIQz7DSQONZRGPgu2OCiwAwDQYJKoZIhvcNAQELBQAw
TzELMAkGA1UEBhMCVVMxKTAnBgNVBAoTIEludGVybmV0IFNlY3VyaXR5IFJlc2Vh
cmNoIEdyb3VwMRUwEwYDVQQDEwxJU1JHIFJvb3QgWDEwHhcNMTUwNjA0MTEwNDM4
WhcNMzUwNjA0MTEwNDM4WjBPMQswCQYDVQQGEwJVUzEpMCcGA1UEChMgSW50ZXJu
ZXQgU2VjdXJpdHkgUmVzZWFyY2ggR3JvdXAxFTATBgNVBAMTDElTUkcgUm9vdCBY
MTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAK3oJHP0FDfzm54rVygc
h77ct984kIxuPOZXoHj3dcKi/vVqbvYATyjb3miGbESTtrFj/RQSa78f0uoxmyF+
0TM8ukj13Xnfs7j/EvEhmkvBioZxaUpmZmyPfjxwv60pIgbz5MDmgK7iS4+3mX6U
A5/TR5d8mUgjU+g4rk8Kb4Mu0UlXjIB0ttov0DiNewNwIRt18jA8+o+u3dpjq+sW
T8KOEUt+zwvo/7V3LvSye0rgTBIlDHCNAymg4VMk7BPZ7hm/ELNKjD+Jo2FR3qyH
B5T0Y3HsLuJvW5iB4YlcNHlsdu87kGJ55tukmi8mxdAQ4Q7e2RCOFvu396j3x+UC
B5iPNgiV5+I3lg02dZ77DnKxHZu8A/lJBdiB3QW0KtZB6awBdpUKD9jf1b0SHzUv
KBds0pjBqAlkd25HN7rOrFleaJ1/ctaJxQZBKT5ZPt0m9STJEadao0xAH0ahmbWn
OlFuhjuefXKnEgV4We0+UXgVCwOPjdAvBbI+e0ocS3MFEvzG6uBQE3xDk3SzynTn
jh8BCNAw1FtxNrQHusEwMFxIt4I7mKZ9YIqioymCzLq9gwQbooMDQaHWBfEbwrbw
qHyGO0aoSCqI3Haadr8faqU9GY/rOPNk3sgrDQoo//fb4hVC1CLQJ13hef4Y53CI
rU7m2Ys6xt0nUW7/vGT1M0NPAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNV
HRMBAf8EBTADAQH/MB0GA1UdDgQWBBR5tFnme7bl5AFzgAiIyBpY9umbbjANBgkq
hkiG9w0BAQsFAAOCAgEAVR9YqbyyqFDQDLHYGmkgJykIrGF1XIpu+ILlaS/V9lZL
ubhzEFnTIZd+50xx+7LSYK05qAvqFyFWhfFQDlnrzuBZ6brJFe+GnY+EgPbk6ZGQ
3BebYhtF8GaV0nxvwuo77x/Py9auJ/GpsMiu/X1+mvoiBOv/2X/qkSsisRcOj/KK
NFtY2PwByVS5uCbMiogziUwthDyC3+6WVwW6LLv3xLfHTjuCvjHIInNzktHCgKQ5
ORAzI4JMPJ+GslWYHb4phowim57iaztXOoJwTdwJx4nLCgdNbOhdjsnvzqvHu7Ur
TkXWStAmzOVyyghqpZXjFaH3pO3JLF+l+/+sKAIuvtd7u+Nxe5AW0wdeRlN8NwdC
jNPElpzVmbUq4JUagEiuTDkHzsxHpFKVK7q4+63SM1N95R1NbdWhscdCb+ZAJzVc
oyi3B43njTOQ5yOf+1CceWxG1bQVs5ZufpsMljq4Ui0/1lvh+wjChP4kqKOJ2qxq
4RgqsahDYVvTH9w7jXbyLeiNdd8XM2w9U/t7y0Ff/9yi0GE44Za4rF2LN9d11TPA
mRGunUHBcnWEvgJBQl9nJEiU0Zsnvgc/ubhPgXRR4Xq37Z0j4r7g1SgEEzwxA57d
emyPxgcYxn/eR44/KJ4EBs+lVDR3veyJm+kXQ99b21/+jh5Xos1AnX5iItreGCc=
-----END CERTIFICATE-----
)EOF";

PubSubClient mqttClient(wifiClient);

struct sensorData {
    int illuminance;
    float humidityValue;
    float degreeCelsius;

};


void setup(void) {
  Serial.begin(115200);
  dht.begin();
  setupWifi();
  configTime(gmtOffsetSeconds, daylightOffsetSeconds, ntpServer);
  mqttClient.setServer(mqttServer[0], mqttPort);
  wifiClient.setInsecure();
  wifiClient.setCACert(root_ca);
  Serial.println("MQTT client initializing!");  
}

void setupWifi() {
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.print("Connecting to ");
  Serial.print(ssid);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());
}

void maintainConnection() {
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("Success connected to WiFi");
}

int mqttBrokerIndex = 0;
int mqttConnectAttempt = 0;
const int mqttBrokerCount = sizeof(mqttServer) / sizeof(mqttServer[0]);

void connectMqtt() {
  while (!mqttClient.connected()) {
    mqttConnectAttempt++;
    Serial.printf("MQTT connection try: %d회\n", mqttConnectAttempt);
    mqttClient.setServer(mqttServer[mqttBrokerIndex], mqttPort);

    if (mqttClient.connect("UniqueClientID", mqttUsername, mqttPassword)) {
      Serial.println("success to connect Mqtt");
      mqttConnectAttempt = 0;
      break;
    } else {
      Serial.printf("failed to connect rc=%d\n", mqttClient.state());
      if (mqttConnectAttempt >= 5) {
        Serial.println("change Mqtt broker");
        mqttConnectAttempt = 0;
        if (mqttBrokerIndex < mqttBrokerCount - 1) {
          mqttBrokerIndex++;
        } else {
          mqttBrokerIndex = 0;
        }
      } else {
        Serial.println("try again in 5 seconds...");
        delay(5000);
      }
    }
  }
}

void loop() {
  maintainConnection();
  connectMqtt();
  mqttClient.loop();
  char currentTime[20];
  getTimeString(currentTime, sizeof(currentTime));
  sensorData data = readSensorData();
  StaticJsonDocument<200> jsonDocument;
  createJsonMessage(macAddress, data, currentTime, jsonDocument);
  sendData(jsonDocument);
  printInSerial(data, currentTime);

  delay(5000);
}

//read sensor using dht22
sensorData readSensorData() {
  sensorData data;
  data.illuminance = analogRead(photoResistor);
  data.humidityValue = dht.readHumidity();
  data.degreeCelsius = dht.readTemperature();

  if (isnan(data.humidityValue) || isnan(data.degreeCelsius)) {
    Serial.println("Failed to read from DHT sensor!");
    return sensorData{};
  }

  return data;
}

void getTimeString(char* buffer, size_t bufferSize)
{
  struct tm timeinfo;
  if(!getLocalTime(&timeinfo)){
    Serial.println("failed to get time!");
    return;
  }
  strftime(buffer, bufferSize, "%H:%M:%S", &timeinfo);
}



//make data to json format
void createJsonMessage(String macAddress, sensorData sensorData, char* currentTime, StaticJsonDocument<200>& jsonDocument) {
  jsonDocument["macAddress"] = macAddress;
  jsonDocument["currentTime"] = currentTime;
  jsonDocument["illuminance"] = sensorData.illuminance;
  jsonDocument["humidity"] = sensorData.humidityValue;
  jsonDocument["temperatureCelsius"] = sensorData.degreeCelsius;
}

//send data to mqtt broker
void sendData(StaticJsonDocument<200>& jsonDocument) {
  char buffer[256];
  serializeJson(jsonDocument, buffer);
  mqttClient.publish("smartfarm/sensor", buffer);
}

void printInSerial(sensorData sensorData, char* currentTime) {
    Serial.print("Mac Address: ");
    Serial.println(macAddress);
    Serial.print("Current Time: ");
    Serial.println(currentTime);    
    Serial.print("Illuminance: ");
    Serial.println(sensorData.illuminance);
    Serial.print("Humidity: ");
    Serial.println(sensorData.humidityValue);
    Serial.print("Temperature Celsius: ");
    Serial.print(sensorData.degreeCelsius);
    Serial.println("C");
  
}


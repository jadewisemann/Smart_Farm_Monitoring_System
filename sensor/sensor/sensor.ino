#include <WiFi.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include <DHT.h>

#define dhtPin D9
#define dhtType DHT22

DHT dht(dhtPin, dhtType);
WiFiClient wifiClient;

const char* ssid = "AndroidHotspot06_A2_F1";
const char* password = "****";
const char* mqttServer = "broker.mqtt-dashboard.com";
const int mqttPort = 1883;
const int mqttWsPport = 9001;
const char* mqttUsername = "HyeonseoLee";
const char* mqttPassword = "****";

PubSubClient mqttClient(wifiClient);

int photoresistor = A1;

void setup(void) {
  Serial.begin(115200);
  dht.begin();

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.println("");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print("-> ");
  }

  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP addr: ");
  Serial.println(WiFi.localIP());
  
  mqttClient.setServer(mqttServer, mqttPort);

  Serial.println("MQTT client initializing!");
}

void loop(void) {
  if (!mqttClient.connected()) {
    Serial.print("Attempting MQTT connection...");
    if (mqttClient.connect("UniqueClientID", mqttUsername, mqttPassword)) {
      Serial.println("connected");
    } else {
      Serial.print("failed, rc=");
      Serial.print(mqttClient.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  } else {
    mqttClient.loop();

    //read sensor using dht22
    int illuminance = analogRead(photoresistor);
    float humidityValue = dht.readHumidity();
    float degreeCelsius = dht.readTemperature();
    float degreeFahrenheit = dht.readTemperature(true);

    // StaticJsonDocument<200> jsonDocument;
    // jsonDocument["illuminance"] = illuminance;
    // jsonDocument["humidity"] = humidityValue;
    // jsonDocument["temperatureCelsius"] = degreeCelsius;
    // jsonDocument["temperatureFahrenheit"] = degreeFahrenheit;
    // String jsonResponse;
    // serializeJson(jsonDocument, jsonResponse);

    //send data to mqtt broker
    mqttClient.publish("smartfarm/illuminance", String(illuminance).c_str());
    mqttClient.publish("smartfarm/humidity", String(humidityValue).c_str());
    mqttClient.publish("smartfarm/temperatureCelsius", String(degreeCelsius).c_str());
    mqttClient.publish("smartfarm/temperatureFahrenheit", String(degreeFahrenheit).c_str());


    Serial.print("illuminance: ");
    Serial.println(illuminance);
    Serial.print("humidity ");
    Serial.println(humidityValue);
    Serial.print("degreeCelsius: ");
    Serial.print(degreeCelsius);
    Serial.print("C (");
    Serial.print("degreeFahrenheit: ");
    Serial.print(degreeFahrenheit);
    Serial.println("F)");

    delay(5000);
  }
}

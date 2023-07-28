#include <WiFi.h>
#include <WiFiClient.h>
#include <WebServer.h>
#include <ArduinoJson.h> 
#include <DHT.h>

#define DHT_PIN D9
#define DHT_TYPE DHT22

DHT dht(DHT_PIN, DHT_TYPE);

const char* ssid = "AndroidHotspot06_A2_F1";
const char* password = "****";

WebServer server(80);  

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
  server.on("/", handleRootEvent);  
  server.begin();
  Serial.println("Web server started!");
}
void loop(void) {
  server.handleClient();  
  delay(5); 
}
void handleRootEvent() {
 
  String clientIp = server.client().remoteIP().toString();  
  int illuminance = analogRead(photoresistor);
  float humidityValue = dht.readHumidity();
  float degreeCelsius = dht.readTemperature();
  float degreeFahrenheit = dht.readTemperature(true);
  StaticJsonDocument<200> jsonDocument;  
  jsonDocument["illuminance"] = illuminance;
  jsonDocument["humidity"] = humidityValue;  
  jsonDocument["temperatureCelsius"] = degreeCelsius;
  jsonDocument["temperatureFahrenheit"] = degreeFahrenheit;
  String jsonResponse; 
  serializeJson(jsonDocument, jsonResponse);
  server.send(200, "application/json", jsonResponse); 
  Serial.print("client IP: ");
  Serial.println(clientIp);
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
}

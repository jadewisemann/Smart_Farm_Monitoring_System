#include <WiFi.h>
#include <WiFiClient.h>
#include <WebServer.h>
#include <ArduinoJson.h> 

const char* ssid = "AndroidHotspot06_A2_F1";
const char* password = "****";

WebServer server(80);  

int photoresistor = A1;
int temperatureSensor = A2; 

int Vo;
double R1 = 10000;
double logR2, R2, T, degreeCelsius;
double c1 = 1.009249522e-03, c2 = 2.378405444e-04, c3 = 2.019202697e-07;
double degreeFahrenheit = 0;
void setup(void) {
  Serial.begin(115200);  
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
  Vo = analogRead(temperatureSensor); 
  R2 = R1 * (4095.0 / (float)Vo - 1.0);
  logR2 = log(R2);
  T = (1.0 / (c1 + c2*logR2 + c3*logR2*logR2*logR2));
  degreeCelsius = T - 273.15;  
  degreeFahrenheit = (degreeCelsius * 9.0/5.0) + 32.0;  
  StaticJsonDocument<200> jsonDocument;  
  jsonDocument["illuminance"] = illuminance;
  jsonDocument["temperatureCelsius"] = degreeCelsius;
  jsonDocument["temperatureFahrenheit"] = degreeFahrenheit;
  String jsonResponse; 
  serializeJson(jsonDocument, jsonResponse);
  server.send(200, "application/json", jsonResponse); 
  Serial.print("client IP: ");
  Serial.println(clientIp);
  Serial.print("illuminance: ");
  Serial.println(illuminance);
  Serial.print("degreeCelsius: ");
  Serial.print(degreeCelsius);
  Serial.print("C (");
  Serial.print("degreeFahrenheit: ");
  Serial.print(degreeFahrenheit);
  Serial.println("F)");
}

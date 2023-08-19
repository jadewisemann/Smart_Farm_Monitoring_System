import time
import json
import base64
import paho.mqtt.client as mqtt
import ssl
import subprocess
from getmac import get_mac_address



macAddress = get_mac_address()

def onConnect(client, userdata, flags, rc):
    client.subscribe("smartfarm/images")


def takePhoto():
    fileName = f'{time.strftime("%Y%m%d-%H%M%S")}.jpg'
    subprocess.run(["libcamera-still", "-o", fileName])
    return fileName


def mqttSetup(username, password, brokerAddress, port):
    client = mqtt.Client()
    client.username_pw_set(username, password)
    client.tls_set("/etc/ssl/certs/ca-certificates.crt")
    client.connect(brokerAddress, port)
    return client


def main(username, password, brokerAddress, targetHour, targetMinute):
    mqttClient = mqttSetup(username, password, brokerAddress, 8883)
    mqttClient.onConnect = onConnect
    mqttClient.loop_start()

    while True:
        #TIme checking
        currentTime = time.localtime()
        currentHour = currentTime.tm_hour
        currentMinute = currentTime.tm_min

        if currentHour == targetHour and currentMinute == targetMinute:
            try:
                photoTaken = takePhoto()
                print(f"took picture: {photoTaken}")

                with open(photoTaken, "rb") as imageFile:
                    base64Image = base64.b64encode(imageFile.read()).decode('utf-8')
                data = {
                    'macAddress': macAddress,
                    'time': photoTaken,
                    'image': base64Image
                }
                message = json.dumps(data)

                topic = "smartfarm/images"
                mqttClient.publish(topic, message)
                print(message)

                # Capture cycle
                time.sleep(60 - time.time() % 60)

            except Exception as e:
                print(f"failed to take a picture: {e}")

        time.sleep(1)  


if __name__ == '__main__':
    main("HyeonseoLee", "****", "9c500c1053df40c795c005da44aee8f0.s2.eu.hivemq.cloud", 13, 57)
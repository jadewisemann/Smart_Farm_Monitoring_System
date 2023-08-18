import time
import os

def takePhoto():
    fileName = '/home/pi/Pictures/photo_' + time.strftime("%Y%m%d") + '.jpg'
    os.system(f"libcamera-still -o {fileName}")
    return fileName

def main():
    # Time setting
    targetHour = 14
    targetMinute = 22

    while True:
        # Time checking
        currentTime = time.localtime()
        currentHour = currentTime.tm_hour
        currentMinute = currentTime.tm_min

        if currentHour == targetHour and currentMinute == targetMinute:
            photoTaken = None
            try:
                photoTaken = takePhoto()
                print(f"took a picture: {photoTaken}")
            except:
                print("failed to take a picture")

            # For checking the time every minute
            time.sleep(60)
        else:
            time.sleep(60)

if __name__ == '__main__':
    main()

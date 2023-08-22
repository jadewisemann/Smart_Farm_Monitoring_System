// 랜덤 데이터 생성 함수
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getRandomHex = () => Math.floor(Math.random() * 16).toString(16);

const generateRandomMacAddress = () => {
    let macAddress = '';
    for (let i = 0; i < 6; i++) {
        macAddress += getRandomHex() + getRandomHex() + (i < 5 ? ':' : '');
    }
    return macAddress;
};

// 더미 농장 데이터 생성
const fruits = ['apple', 'banana', 'pear', 'peach', 'Guava', 'Melon', 'water melon'];
const macAddresses = Array(100).fill().map(() => generateRandomMacAddress());
export const dummyFarmData = {
    farmLabels: [],
    macAddresses: [],
};

for (let i = 0; i < 100; i++) {
    const labelIndex = i % fruits.length;
    const farmLabel = `${fruits[labelIndex]}`;
    dummyFarmData.farmLabels.push(farmLabel);
    dummyFarmData.macAddresses.push(macAddresses[i]);
}

// 더미 기기 데이터 생성
const generateRandomDate = () => {
    const start = new Date(2023, 0, 1);
    const end = new Date(2023, 11, 31);
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString();
};

export const dummyDeviceData = macAddresses.map((macAddress, index) => {
    const temperatureCelsius = getRandomNumber(-10, 50);
    const humidity = getRandomNumber(0, 100);
    const illuminance = getRandomNumber(0, 2000);
    const recordedAt = generateRandomDate();

    return {
        dataId: index,
        macAddress,
        temperatureCelsius,
        humidity,
        illuminance,
        recordedAt,
    };
});

console.log(dummyDeviceData);
console.log(dummyFarmData);

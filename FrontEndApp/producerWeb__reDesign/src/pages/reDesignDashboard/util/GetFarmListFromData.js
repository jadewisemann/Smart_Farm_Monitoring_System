export default function GetFarmListFromData() {
  const testData = {
    "farmLabels": ["farm1", "farm2","farm3","farm4", ],
    "macAddresses": ["d1", "d2","d3","d4", ]
  }
  const test = (data) => {
    console.log('Set(data.farmLabels).toArray()', Set(data.farmLabels).toArray())
  }
  test(testData)
  console.log(testData)
}

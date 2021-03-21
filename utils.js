function csvToJson(csvString) {
  console.log("implement logic here");

  const OUTPUT_DATA = [];

  let csv_data = csvString.split("\n"); // CSVDATA
  let first_Indexed_Str = csv_data.shift(); // firstIndexed_string
  let first_Indexed_Data = first_Indexed_Str.split(","); // firstIndexed_data

  csv_data.forEach((csvItem) => {
      
    const OBJ = {};
    let csv_value_Data = csvItem.split(","); // Getting the value

    first_Indexed_Data.forEach((item, idx) => {
      OBJ[item] = csv_value_Data[idx];
    });
    OUTPUT_DATA.push(OBJ);
  });
  return OUTPUT_DATA;
}

module.exports = csvToJson;

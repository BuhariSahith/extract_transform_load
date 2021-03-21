const fs = require("fs");
const csvToJson = require("./utils");

//use fs.readFile and fs.writeFile

// READING THE CAR.CSV FILE
fs.readFile("car.csv", "utf-8", (err, cars) => {
  let carJsonData = csvToJson(cars);

  // READIND THE CUSTOMER.CSV FILE
  fs.readFile("customer.csv", "utf-8", (err, customers) => {
    let customerJsonData = csvToJson(customers);

    const carCustomer_Data = [];

    customerJsonData.forEach((customer) => {
      let carCompanyData = carJsonData.find((car) => {
        return car.customerId == customer.id;
      });

      carCustomer_Data.push({
        id: customer.id,
        name: customer.name,
        age: customer.age,
        carCompany: carCompanyData.carCompany,
        carModel: carCompanyData.carModel,
      });
    });

    console.table(carCustomer_Data);


    // CREATING THE FILE AND WRITING DATA IN THE FILE
    fs.writeFileSync(
      "async_sync_carCustomer_Data",
      JSON.stringify(carCustomer_Data),
      (err) => {
        err ? console.log(err) : console.log("Data Uploaded in the  File ");
      }
    );
  });
});

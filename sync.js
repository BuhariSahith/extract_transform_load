const fs = require("fs");
const csvToJson = require("./utils");

// use fs.readFileSync and fs.writeFileSync

const cars = fs.readFileSync("car.csv", "utf-8");
const customers = fs.readFileSync("customer.csv", "utf-8");

let carData = csvToJson(cars);
let customerData = csvToJson(customers);

const carCustomer_Data = [];

customerData.forEach((customer) => {
  let carCompanyJson = carData.find((car) => {
    return car.customerId == customer.id;
  });

  carCustomer_Data.push({
    id: customer.id,
    name: customer.name,
    age: customer.age,
    carCompany: carCompanyJson.carCompany,
    carModel: carCompanyJson.carModel,
  });
});

console.log(carCustomer_Data);

fs.writeFileSync(
  "sync_car_customer_Data",
  JSON.stringify(carCustomer_Data)
);


/* 
[
    {
        id:1004,
        name:"john",
        age:34,
        carCompany:'ford',
        carName:'figo'
    }
]
 */
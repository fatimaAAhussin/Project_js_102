// Class Vehicle
class Vehicle {
  constructor(name, manufacturer, id) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.id = id;
  }
}

// Class Car
class Car extends Vehicle {
  constructor(name, manufacturer, id, type) {
    super(name, manufacturer, id);
    this.type = type;
  }
}

// Plane Class 
class Plane extends Vehicle {
  constructor(name, manufacturer, id, type) {
    super(name, manufacturer, id);
    this.type = type;
  }
}

// Employee class
class Employee {
  constructor(name, id, dateOfBirth) {
    this.name = name;
    this.id = id;
    this.dateOfBirth = dateOfBirth;
  }
}

// Driver Class
class Driver extends Employee {
  constructor(name, id, dateOfBirth, licenseID) {
    super(name, id, dateOfBirth);
    this.licenseID = licenseID;
  }
}

// Pilot Class
class Pilot extends Employee {
  constructor(name, id, dateOfBirth, licenseID) {
    super(name, id, dateOfBirth);
    this.licenseID = licenseID;
  }
}

// reservation class
class Reservation {
  constructor(reservationDate, employeeId, vehiclesId) {
    this.reservationDate = reservationDate;
    this.employeeId = employeeId;
    this.vehiclesId = vehiclesId;
  }
}

// Create three objects for Car
const cars = [
  new Car("Toyota Corolla", "Toyota", 1, "Gas"),
  new Car("Tesla Model 3", "Tesla", 2, "Electric"),
  new Car("BMW 3 Series", "BMW", 3, "Gas"),
];
// create two object for planes
const planes = [
  new Plane("Boeing 737", "Boeing", 4, "Passenger"),
  new Plane("Airbus A320", "Airbus", 5, "Passenger"),
];
// create employees array
const employees = [
  new Driver("John Doe", 1, "1990-01-01", "DL123"),
  new Pilot("Jane Smith", 2, "1985-05-15", "PL456"),
];

// reservation method
function reserve(employeeId, vehiclesId) {
  const employee = employees.find((employee) => employee.id === employeeId);
  const vehicle = [...cars, ...planes].find((vehicle) => vehicle.id === vehiclesId);

  if (!employee || !vehicle) {
    console.log("Employee or vehicle not found.");
    return;
  }

  if (employee instanceof Pilot && vehicle instanceof Car) {
    console.log("Plane can't be assigned to a driver.");
  } else {
    const reservation = new Reservation(new Date(), employeeId, vehiclesId);
    reservations.push(reservation);
  }
}

//create array to save all reservations 
const reservations = [];

// make resservation
reserve(1, 1);
reserve(2, 2);
reserve(2, 4);
// print the array elements using map function 
console.log(
  reservations.map((reservation) => `
    * Reserve date: ${reservation.reservationDate}
    * Employee ID: ${reservation.employeeId}
    * Vehicle ID: ${reservation.vehiclesId}
  `)
);

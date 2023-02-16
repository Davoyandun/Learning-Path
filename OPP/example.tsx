interface Vehicle {
  drive(distance: number): void;
  refuel(liters: number): void;
  getDistance(): number;
  getFuel(): number;
}

class Car implements Vehicle {
  private fuel: number;
  private distance: number;

  constructor(fuel: number) {
    this.fuel = fuel;
    this.distance = 0;
  }

  public drive(distance: number): void {
    const fuelNeeded = distance / 5;
    if (fuelNeeded > this.fuel) {
      throw new Error("Not enough fuel to drive that distance.");
    }
    this.fuel -= fuelNeeded;
    this.distance += distance;
  }

  public refuel(liters: number): void {
    this.fuel += liters;
  }

  public getDistance(): number {
    return this.distance;
  }

  public getFuel(): number {
    return this.fuel;
  }
}

class Truck implements Vehicle {
  private fuel: number;
  private distance: number;
  constructor(fuel: number) {
    this.fuel = fuel;
    this.distance = 0;
  }

  public drive(distance: number): void {
    const fuelNeeded = distance / 10;
    if (fuelNeeded > this.fuel) {
      throw new Error("Not enough fuel to drive that distance.");
    }
    this.fuel -= fuelNeeded;
    this.distance += distance;
  }

  public refuel(liters: number): void {
    this.fuel += liters;
  }

  public getDistance(): number {
    return this.distance;
  }

  public getFuel(): number {
    return this.fuel;
  }
}

class Driver {
  private name: string;
  private vehicle: Vehicle;

  constructor(name: string, vehicle: Vehicle) {
    this.name = name;
    this.vehicle = vehicle;
  }

  public drive(distance: number): void {
    this.vehicle.drive(distance);
  }

  public refuel(liters: number): void {
    this.vehicle.refuel(liters);
  }

  public getVehicle(): Vehicle {
    return this.vehicle;
  }

  public getName(): string {
    return this.name;
  }
}

const car = new Car(20);
const truck = new Truck(20);
const driver1 = new Driver("John", car);
const driver2 = new Driver("Jane", truck);

driver1.drive(100);

console.log(
  `${driver1.getName()} has driven ${driver1.getVehicle().getDistance()} km.`
);

driver1.refuel(10);
console.log(
  `${driver1.getName()}'s car has ${driver1
    .getVehicle()
    .getFuel()} liters of fuel.`
);


driver2.drive(250); // Not enough fuel to drive that distance.
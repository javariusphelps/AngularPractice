//interface

interface personOptions {
  firstName: string;
  lastName: string;
  Age: number;
  Phone: number;
  State: string;
  Zip: number;
  Occupation: string;
  hourlyWage: number;
}

//Class creation
class Person {
  private firstName: string;
  private lastName: string;
  private Age: number;
  private Phone: number;
  private State: string;
  private Zip: number;
  private Occupation: string;
  private hourlyWage: number;
  private Certs: string[];

  constructor(
    firstName: string,
    lastName: string,
    Age: number,
    Phone: number,
    State: string,
    Zip: number,
    Occupation: string,
    hourlyWage: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Age = Age;
    this.Phone = Phone;
    this.State = State;
    this.Zip = Zip;
    this.Occupation = Occupation;
    this.hourlyWage = hourlyWage;
  }
  //Getters and Setters
  getfirstName(): string {
    return this.firstName;
  }
  setfirstName(firstName: string): void {
    this.firstName = firstName;
  }
  getlastName(): string {
    return this.lastName;
  }
  setlastName(lastName: string): void {
    this.lastName = lastName;
  }
  getAge(): number {
    return this.Age;
  }
  setAge(Age: number): void {
    this.Age = Age;
  }
  getPhone(): number {
    return this.Phone;
  }
  setPhone(Phone: number): void {
    this.Phone = Phone;
  }
  getState(): string {
    return this.State;
  }
  setState(State: string): void {
    this.State = State;
  }
  getZip(): number {
    return this.Zip;
  }
  setZip(Zip: number): void {
    this.Zip = Zip;
  }
  getOccupation(): string {
    return this.Occupation;
  }
  setOccupation(Occupation: string): void {
    this.Occupation = Occupation;
  }
  gethourlyWage(): number {
    return this.hourlyWage;
  }
  sethourlyWage(hourlyWage: number): void {
    this.hourlyWage = hourlyWage;
  }
  getCerts(): string[] {
    return this.Certs;
  }
  setCerts(...Certs: string[]) {
    this.Certs = Certs;
    addCerts();
  }
  //methods
  getFullName(): string {
    return this.firstName + " " + this.lastName + " " + this.Age;
  }

  getLocation(): any {
    return this.State + " " + this.Zip;
  }

  getContactInfo(): string {
    return (
      this.firstName +
      " " +
      this.lastName +
      " " +
      this.Phone +
      " " +
      this.Occupation
    );
  }
  getWages(hoursWorked?: number): number {
    if (hoursWorked) {
      return this.hourlyWage * hoursWorked;
    } else {
      return this.hourlyWage * 40;
    }
  }
}
function addCerts(...certs: string[]): void {
  for (let cert in certs) {
    certs.push(cert);
  }
  this.certs = certs;
}

function sayHello(person: string): string {
  return "Hello" + " " + person;
}

var user = "Super Student";
var user1 = new Person(
  "Patience",
  "Kinnard",
  29,
  8435552637,
  "NC",
  28269,
  "Loans Officer",
  24
);
var user2 = new Person(
  "Richard",
  "Pindercush",
  22,
  8435524356,
  "NC",
  28269,
  "Bank Teller",
  16
);
var user3 = new Person(
  "Pat",
  "Beverly",
  30,
  8435534567,
  "NC",
  28269,
  "Accounts Manager",
  30
);
var user4 = new Person(
  "Jim",
  "Dean",
  26,
  84355348273,
  "NC",
  282526,
  "Accounts",
  30
);

var user5 = user3;

document.getElementById("para").innerHTML = sayHello(user);
document.getElementById("person1").innerHTML = user1.getFullName();
document.getElementById("person2").innerHTML = user2.getLocation();
document.getElementById("person3").innerHTML = user3.getContactInfo();
document.getElementById("wages").innerHTML = user4.getWages().toString();
user5.setCerts("MBA");
document.getElementById("certi").innerHTML = user5.getCerts().toString();

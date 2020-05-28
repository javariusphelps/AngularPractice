//interface
//Class creation
var Person = /** @class */ (function () {
    function Person(firstName, lastName, Age, Phone, State, Zip, Occupation, hourlyWage) {
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
    Person.prototype.getfirstName = function () {
        return this.firstName;
    };
    Person.prototype.setfirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.getlastName = function () {
        return this.lastName;
    };
    Person.prototype.setlastName = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.getAge = function () {
        return this.Age;
    };
    Person.prototype.setAge = function (Age) {
        this.Age = Age;
    };
    Person.prototype.getPhone = function () {
        return this.Phone;
    };
    Person.prototype.setPhone = function (Phone) {
        this.Phone = Phone;
    };
    Person.prototype.getState = function () {
        return this.State;
    };
    Person.prototype.setState = function (State) {
        this.State = State;
    };
    Person.prototype.getZip = function () {
        return this.Zip;
    };
    Person.prototype.setZip = function (Zip) {
        this.Zip = Zip;
    };
    Person.prototype.getOccupation = function () {
        return this.Occupation;
    };
    Person.prototype.setOccupation = function (Occupation) {
        this.Occupation = Occupation;
    };
    Person.prototype.gethourlyWage = function () {
        return this.hourlyWage;
    };
    Person.prototype.sethourlyWage = function (hourlyWage) {
        this.hourlyWage = hourlyWage;
    };
    Person.prototype.getCerts = function () {
        return this.Certs;
    };
    Person.prototype.setCerts = function () {
        var Certs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            Certs[_i] = arguments[_i];
        }
        this.Certs = Certs;
        addCerts();
    };
    //methods
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName + " " + this.Age;
    };
    Person.prototype.getLocation = function () {
        return this.State + " " + this.Zip;
    };
    Person.prototype.getContactInfo = function () {
        return (this.firstName +
            " " +
            this.lastName +
            " " +
            this.Phone +
            " " +
            this.Occupation);
    };
    Person.prototype.getWages = function (hoursWorked) {
        if (hoursWorked) {
            return this.hourlyWage * hoursWorked;
        }
        else {
            return this.hourlyWage * 40;
        }
    };
    return Person;
}());
function addCerts() {
    var certs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        certs[_i] = arguments[_i];
    }
    for (var cert in certs) {
        certs.push(cert);
    }
    this.certs = certs;
}
function sayHello(person) {
    return "Hello" + " " + person;
}
var user = "Super Student";
var user1 = new Person("Patience", "Kinnard", 29, 8435552637, "NC", 28269, "Loans Officer", 24);
var user2 = new Person("Richard", "Pindercush", 22, 8435524356, "NC", 28269, "Bank Teller", 16);
var user3 = new Person("Pat", "Beverly", 30, 8435534567, "NC", 28269, "Accounts Manager", 30);
var user4 = new Person("Jim", "Dean", 26, 84355348273, "NC", 282526, "Accounts", 30);
var user5 = user3;
document.getElementById("para").innerHTML = sayHello(user);
document.getElementById("person1").innerHTML = user1.getFullName();
document.getElementById("person2").innerHTML = user2.getLocation();
document.getElementById("person3").innerHTML = user3.getContactInfo();
document.getElementById("wages").innerHTML = user4.getWages().toString();
user5.setCerts("MBA");
document.getElementById("certi").innerHTML = user5.getCerts().toString();

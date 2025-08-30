//Classes and Objects

//A javascript object is an entity having state and behaviour

const student= {
    fullName:"Erika Mediratta",
    marks:94.4,
    printMarks : function()
    {
        console.log("marks =", this.marks);
    },
};

let arr=["apple","banana"];
let arrt=typeof(arr);
console.log(arrt);
//object

arr.push("orange");
console.log(arr);

const employee={
    caclTax(){
        console.log("Tax rate = 10%");
    },
};

const Em=
{
    salary: 50000,
    // calcTax()
    // {
    //     console.log("Tax rate is 20%");
    // },

};

//To set a prototype= functions of another object can be used 

Em.__proto__=employee;

// Em
// {salary: 50000}salary: 50000[[Prototype]]: ObjectcaclTax: ƒ caclTax()[[Prototype]]: Object


//Classes in JS

class Car{
  

    constructor(brand)
    {
        console.log("Creating a new object");
        this.brand=brand;
    }
    start()
    {
        console.log("start");
    }

    stop()
    {
        console.log("stop");
    }

    setBrand(Brand)
    {
        this.brand=this.brand;
    }
}
let fortuner=new Car();
//new is used to create a new object using classes
let lexus=new Car("toyota");
//Constructor

//Inheritance in JS 

//Passing down properties of parent to child class

//If child and Parent have same method, child's method will
//be used

class Parent{
    hello(){
        console.log("Hello");
    }
}

class Child extends Parent{

}

let obj =new Child();


class Person
{
    eat()
    {
        console.log("eat");
    }

    sleep()
    {
        console.log("sleep");
    }
}

class Engineer extends Person{

    constructor(branch)
    {   
        super();//to invoke parent class constructor
        this.branch=branch;
    }
    work()
    {
        console.log("Can work");
    }
}

let Erikaobj= new Engineer();

//Super Keyword

class User
{
    constructor(name,email)
    {
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log(" website data");
    }
}

let student1=new User("Erika","abc");
let student2=new User("Aman","def");

class Admin extends User{
    constructor(name,email)
    {
        super(name,email);
    }
    editData()
    {
        let Data="Some new value";
        console.log(Data);

    }
}

let Teacher1= new Admin("Admin","fgh");



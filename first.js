console.log("I am Erika");
name="Erika Mediratta";
console.log(name);
age=24;
console.log(age);
console.log('age=',age);
//Bool value
isfollow=true;
console.log(isfollow);

//Javascript is dyanimically typed
// that is we do not have to tell the type of the var
//at the time of runtime
//Case sensitive language

//let
let Fullname="Anisha Mediratta";
console.log(Fullname);


var age=86;
console.log(age);
// with var, we can re declare variables nut not with
//let
//with let we can update but not redeclare

//const
//cannont redeclare and cannot update

const pi=3.14
console.log(pi);

//Data types

let Myage=24; //numeric
console.log(typeof Myage);
let x;
console.log(typeof x); //undefined

console.log(typeof name); //string
console.log(typeof isfollow);//boolean
//null,bigint,symbols

const student=
{
    fullname:"Erika",
    cgpa:8.0,

};
console.log(student);
console.log(typeof student);//object, non primitive type

console.log(typeof student["cgpa"]);

//Operators
let a=5;
let b=2;
console.log("a+b =", a+b);
console.log("a**=", a**b);//a^b
//post and pre increment/decrement
//++a and a++

//Assignment operator 
let c='5';
let d=5;
console.log(c==d);
//true because this will only check the data
//stricter version ===
//will check both value and data type

console.log(c===d);
//false
console.log(c!==d);
//true

if(age>18)
{
    console.log("you can vote");
}
else
{
    console.log("You cannot vote");
}
//if else if else statement

//Ternary operator 
age >=18 ? console.log('adult'): console.log('not adult');

//alert -creates one time popup

//alert("Hello!");

//Prompt
//same as alert but also takes some input

// let num=prompt("Hello!");

// console.log(num);

//Loops
for(let i=0;i<5;i++)
{
    console.log(i);
}

//whi;e loop

let i=0;
while(i<=5)
{
    console.log(i);
    i++;
}

//Do while loop
i=20;
do
{
    console.log("Erika");
    i++;
}while(i<=10);

//For of loop
//For in loop

//For of loop - used for str and arr

let str='Erika';
for(let i of str)
{
    console.log(i);
    
}

//for in loop -for objects

const Erika=
{
    age:19,
    cgpa:7.2,

};

for(let key in Erika)
{
    console.log(Erika[key]);
}
//Prompt always take input as strings

//strings
console.log(str.length);
console.log(str[3]);

//Template literals are also strings 
//but with back commas

let output = `the cgpa of Erika is ${Erika.cgpa}`;
console.log(output);

//escape characters are calculated as one like /t
// is not 2 chars, its 1 only

//string built in methods

console.log(str.toUpperCase());
console.log(str.toLowerCase());
//they dont change original string but will create a new copy

str=str.toUpperCase();
//now the original string will be changed
//strings in js are immutable

let strnew="Erika Mediratta  ";

console.log(strnew.trim());
//remove leading white spaces

console.log(str.slice(1,3));
//1st char 2nd char 3rd wont be included

console.log(str.slice(1,));


//concat

console.log(str.concat(strnew));

//can be done using + operator as well

//replace method

console.log(str.replace('K','a'));

//find character

console.log(str.charAt(1));

//so values inside strings cannot be changed using
//indexes so we do by creating new string or replace method

// let userinput=prompt("Enter full name without spaces");

// console.log(userinput);
// console.log("@"+ userinput);


//Arrays


let marks=[1,2,3,4,5];
console.log(marks);
console.log(marks.length);
//can also be made of strings

console.log(typeof marks);
//array is of type object

console.log(marks[4]);

marks[2]=2;
console.log(marks);
//arrays are mutable unlike strings


//Looping over an array

for(let i=0;i<marks.length;i++)
{
    console.log(marks[i]);

}

//if done like console.log(marks[7]) will give undefined

//for of loop

let arr=[7,8,9];

for(let i of arr)
{
    console.log(i);
}

//Find average

let students=[85,97,44,37,76,60];
let sum=0;
for(let i of students)
{
    sum=sum+i;
}
let avg=sum/students.length;
console.log(avg);

//Template literal

console.log(`average marks are ${avg}`);

// update the array by decreasing 10% in each item 

let items=[250,645,300,900,50];

for(let i=0;i<items.length;i++)
{
   items[i]= items[i]-(0.10*items[i]);
}

for(let i of items)
{
    console.log(i);
}

//with for of loops, array index cannot be tracked 

//Array methods

//push() -add something at the end

let cal=[11,12,13,14,15];
console.log(cal);

cal.push(16); //update the original array
console.log(cal);

//pop
let deleted=cal.pop();
console.log(cal); //update the original array
console.log(deleted);


//tostring() creates a copy instead of updating original array 

console.log(cal.toString());

//concat - also creates a copy 
console.log(cal.concat(items));

//unshift -add to start

//slice()- also creates a new copy

console.log(cal.slice(1,3)); //same as done in strings

//splice()- update original array

//splice(startidx,delcount,newelement)

arr.splice(2,2,101,102);

console.log(arr);

//delete element

console.log(arr.splice(3,1));
console.log(arr);

//replace element

arr.splice(2,1,3);
console.log(arr);
//delete the 2nd index element and replace it with 3


//Functions in JS

//function functionname(){}
//function functionname(param1,param2){}

function myfunc() //defining
{
    console.log("JS");

}
myfunc(); //calling

function myfunc2(text,n)//parameter
{
    console.log(text);
    console.log(n);
}
myfunc2('Erika',19); //argument

function sum2(a,b) //a and b are local variables
{
    console.log(a+b);
}
sum2(1,2);

function sum3(a,b)
{
    let s=a+b;
    return s; //exited the function from this line 
}
console.log(sum3(1,5));

//Arrow functions


const arrowsum=(a,b)=>{
    console.log(a+b);
};

console.log(arrowsum(1,8));

console.log(arrowsum); // will give definition of the function

//return the number of vowels in the given string


function vowel(str)
{
    let count=0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]=='a'||str[i]=='e'|| str[i]=='i'||str[i]=='o'|| str[i]=='u')
        {
            count++;
        }
    }
    return count;
}

console.log(vowel('erika'));

//do the same with arrowfunctiom



//Functions can be passed as parameters as well in JS




//to uppercase can always be applied on a string so it 
//is called a method and not a function
//method is a function only but binded to specific data types


//Foreach loop in arrays

//arr.forEach(callBackFunction)

let myarr=[1,2,3,4,5];


//Higher order functions

//they use another function as parameter 

//Print squares of each value using foreach

myarr.forEach((num)=>{
    console.log(num*num);
});

//Array Methods

//Map creates a new array(copy)

myarr.map((val)=>
{
    console.log(val);
});

//Filter method- creates a new array of elements that give true for a condition/filter

let NewArr=myarr.filter((val)=>
{
    return val%2===0;
});

console.log(NewArr);


//Reduce method- input a lot of values, but output a single value
//and returns the single value


//sum example


const out=myarr.reduce((res,curr)=>
{
    return res+curr;
});

console.log(out);

//in start, res=first value of array, curr= second element 
//so res=1+2=3 now curr=3 and res=3 so now 3+=6 in res
//now cur=4 so res=6+4 res=10 and so on

//Find largest element

const larger=myarr.reduce((prev,curr)=>
{
    return prev>curr ? prev:curr;
});

console.log(larger);

//so in short when only one single value is to be returned from an array,
//use reduce

let n =prompt("Enter a number");

let numarr=[];
for(let i=1;i<=n;i++)
{
    numarr.push(i);
}
console.log(numarr);

//use reduce method to calculate sum of all numbers

let ans=numarr.reduce((prev,curr)=>
{
    return prev+curr;
});
console.log(ans);















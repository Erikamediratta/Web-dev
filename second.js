//Window object
// it is a browser's object-global object with a lot of properties

//DOM

//document object Model

//html code can be accessed inside js window
//converted to a window object and called document

//Dom manipulation

//access elements

//by id 

let heading=document.getElementById("heading");
console.log(heading);

//by class

let headings=document.getElementsByClassName("first");
console.log(headings);

//By tagname

let tags=document.getElementsByTagName("p");
console.log(tags);


//We'll use queryselector- give first element of whatever inside inverted commas be it id, class, tag , give first and if all are required use queryselectorall

let firstEl=document.querySelector("h2");
console.log(firstEl);
let allEl=document.querySelectorAll("h2");
console.log(allEl);
console.dir(allEl);

//Parent
//Child
//Sibling
//like body tag is parent , div tag and script tag are child ,
//and they are sibling to each other

let div=document.querySelector("div");
console.dir(div);

// div.innerText
// 'Fruits\nVeggies'

//div.innerHTML
// '\n        <ul>\n            <li> Fruits</li>\n            <li>Veggies</li>\n        </ul>\n   

// innerhtml shows all kinds of tags but inner text shows only text content


// innertext changes all the text inside html 
// suppose div.innertext="abcd"; sp div only contains abcd now ,no ul li

let headingtag=document.querySelector("h1");

// heading
// <h1 id=​"heading">​My heading​</h1>​
// heading.innerText="IamErika";
// 'IamErika'


// textcontent-shows textual content even for hidden elements

//Append to h3 using JS

//Hello js ,I am learning

let appendEl=document.querySelector("h3");
console.dir(appendEl.innerText);
appendEl.innerText=appendEl.innerText +", I am learning ";

// to change text, use innertext property

//getattribute(attr)

let divnew=document.querySelector("div");
console.log(divnew);

let valueid=div.getAttribute("id");
console.log(valueid);
let para=document.querySelector("p");
console.log(para.getAttribute("class"));

//setAttribute
// console.log(para.setAttribute("class","newclass"));

//style 

let divthree=document.querySelector("#box");

divthree.style.backgroundColor="green";

//How cam we insert elements

//first create it then add it

let newbutton=document.createElement("button");
newbutton.innerText="Click Me!";
console.log(newbutton);


//Add at end of node 

let divfour=document.querySelector("#box");
divfour.append(newbutton);

//At start of node 

divfour.prepend(newbutton);

//Before a node

divfour.before(newbutton);

//After a node

let paranew=document.querySelector(".para");
paranew.after(newbutton);

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>Hi,I am new</i>";

document.querySelector("body").prepend(newHeading);

//Delete element

let parap=document.querySelector("p");
parap.remove();

//Create a new Button, give it text,Touch me and a background color
//white

let NewB=document.createElement("Button");
NewB.innerText="Touch Me!";
NewB.style.color="white";
NewB.style.backgroundColor="Black";

document.querySelector("Body").prepend(NewB);

//classList

// para.classList.add("newClass");

// To add two classes to an element






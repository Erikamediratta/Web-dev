//Event Handling

let btn1=document.querySelector("button");
btn1.onclick=() =>{
    console.log("btn1 was clicked ");

};

let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log("Hello");
};
//Priority is for js event handling over inline event handling

//Event object

btn1.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
};

//Event listeners

btn1.addEventListener("click", ()=>
{
    console.log("Button 1 was clicked-handler 1 ");
});

btn1.addEventListener("click", ()=>
    {
        console.log("Button 1 was clicked -Handler 2");
    });

    //Both will work, this is the benefit of event listeners

    //Remove event listener

btn1.removeEventListener("click", ()=>
    {
        console.log("Button 1 was clicked-handler 1 ");
    });

    //Wont remove

    //so save handler 1 as const variable

    let var1= ()=>
        {
            console.log("Button 1 was clicked -Handler 2");
        };

        btn1.removeEventListener("click", var1);


    //create button , if clicked once, change to dark mode,
    //again clicked, back to light mode

    let modebtn=document.querySelector("#mode");
        let currMode="light";//dark
    modebtn.addEventListener("click", ()=>
    {
        console.log("You are trying to change the mode");
        if(currMode==="light")
        {
            currMode="dark";
            document.querySelector("body").style.backgroundColor="black";

        }
        else
        {
            currMode="light";
            document.querySelector("body").style.backgroundColor="white";
            document.querySelector("body").style.Color="black";

        }
        console.log(currMode);
    });
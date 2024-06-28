let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");
let winning=document.querySelector(".winning");
let losing=document.querySelector(".losing");
let CkReset=document.querySelector(".CkReset");

let point1= document.querySelector("#point1");
let point2=document.querySelector("#point2");

let resetGame=document.querySelector("button");


const arr =["rock","paper","scissor",
            "paper","scissor",
            "rock","paper",
            "rock","paper","scissor","paper","rock",
        "paper","paper","scissor","rock","scissor","paper","rock","rock"];

CkReset.style.display="none";

winning.style.display="none";
losing.style.display="none";

winning.classList.remove("hide");
losing.classList.remove("hide");          

const win=()=>{
    if(point1.innerText==5){
        winning.style.display = "initial";
        CkReset.style.display="initial";
        winning.classList.add("hide");


    }
    else if(point2.innerText==5){
        losing.style.display = "initial";
        CkReset.style.display="initial";
        losing.classList.add("hide");
    }
};

let i=0;

resetGame.addEventListener("click",()=>{
    CkReset.style.display="none";
    winning.style.display="none";
    losing.style.display="none";
    point1.innerText=0;
    point2.innerText=0;
    winning.classList.remove("hide");
    losing.classList.remove("hide");  
    i=0;
});

rock.addEventListener("click",()=>{
    if(arr[i]=="rock"){
        alert("Rock-no point");
    }
    else if(arr[i]=="scissor"){
        alert("Scissor- You got point");
        point1.innerText++;
    }
    else {
        point2.innerText++;
        alert("Paper - Comp got point");
    }
    i++;
    win();
});

paper.addEventListener("click",()=>{
    if(arr[i]=="paper"){
        alert("Paper- no point");
    }
    else if(arr[i]=="scissor"){
        alert("Scissor- Comp got point");
        point2.innerText++;
    }
    else {
        alert("Rock-You got point")
        point1.innerText++;
    }
    i++;
    win();

});

scissor.addEventListener("click",()=>{
    if(arr[i]=="scissor"){
        alert("Scissor-no point");
    }
    else if(arr[i]=="rock"){
        alert("Rock- Comp got point");
        point2.innerText++;
    }
    else{
        alert("Paper- You got point");
        point1.innerText++;
    }
    i++;
    win();
});



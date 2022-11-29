var choices=["rock","paper","scissors"];

function checkWin(choice){
    let computerChoice=choices[Math.round(Math.random()*(choices.length-1))];
    let win;

    document.getElementsByClassName("main")[0].style.display="none";
    document.getElementsByClassName("loading")[0].style.display="block";
    setTimeout(()=>{
        document.getElementsByClassName("main")[0].style.display="flex";
        document.getElementsByClassName("loading")[0].style.display="none"
    },1000)
    
    if (choice=="rock"){
        if (computerChoice=="rock") win="tie";
        else if (computerChoice=="paper") win="lose";
        else win="win";
    }
    else if (choice=="paper"){
        if (computerChoice=="paper") win="tie";
        else if (computerChoice=="scissors") win="lose";
        else win="win";
    }
    else {
        if (computerChoice=="scissors") win="tie";
        else if (computerChoice=="rock") win="lose";
        else win="win";
    }

    if (win=="win"){
        document.getElementsByTagName("h1")[0].textContent=`You win! Computer choice was ${computerChoice}.`
    }
    else if (win=="lose"){
        document.getElementsByTagName("h1")[0].textContent=`You lose! Computer choice was ${computerChoice}.`
    }
    else{
        document.getElementsByTagName("h1")[0].textContent=`It's a draw! Computer choice was ${computerChoice}.`
    }
}

document.getElementById("rock").addEventListener(
    "click",()=>{
        checkWin("rock")
    }
)
document.getElementById("paper").addEventListener(
    "click",()=>{
        checkWin("paper")
    }
)
document.getElementById("scissors").addEventListener(
    "click",()=>{
        checkWin("scissors")
    }
)
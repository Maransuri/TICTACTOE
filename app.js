let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let turnO=true;
let newgame=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
const winPatterns=[[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
       if(turnO){
        box.innerText="O";
        turnO=false;

       }
       else{
        box.innerText="X";
        turnO=true;

       }
       box.disabled=true;
     checkwinner();


       
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
        
    }

};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
   

   msg.innerText="Congratulations ,Winner is "+winner;
    msgContainer.classList.remove("hide");
    disableBoxes();
   

};
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");



}

function checkwinner() {
    for (let pattern of winPatterns) {
        let poval1 = boxes[pattern[0]].innerText;
        let poval2 = boxes[pattern[1]].innerText;
        let poval3 = boxes[pattern[2]].innerText;
        if (poval1 != "" && poval2 != "" && poval3 != "") {
            if (poval1 === poval2 && poval2 === poval3) {
                
                showWinner(poval1);

            }
        }
    }
}
resetbtn.addEventListener("click",resetGame);
newgame.addEventListener("click",resetGame);
let boxes= document.querySelectorAll(".box");

const win=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

let turnX=true;

let reset=document.getElementById("rst");
reset.addEventListener("click",()=>{
    boxes.forEach(box => {
        box.innerHTML="";
        box.disabled=false;
        turn();
        checkwinner();
    })
})

function turn(){
    if(turnX){
        document.getElementById("turn").innerHTML="Player X's turn";
    }
    else{
        document.getElementById("turn").innerHTML="Player O's turn";
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",function() 
    {
        if(turnX){
            box.innerHTML="X";
            turnX=false;
        }
        else{
            box.innerHTML="O";
            turnX=true;
        }
        box.disabled=true;
        turn();
        checkwinner();
    })
})
let xcount=0;
let ocount=0;
const checkwinner = () => {
    for (let i of win) {
        let v1 = boxes[i[0] - 1].innerHTML;
        let v2 = boxes[i[1] - 1].innerHTML;
        let v3 = boxes[i[2] - 1].innerHTML;
        if (v1 !== "" && v2 !== "" && v3 !== "") {
            if (v1 === v2 && v2 === v3) {
                let winner = v1;
                alert(`The winner is ${v1}`);
                if (v1 == "X") {
                    xcount += 1;
                    document.getElementById("xcount").innerText = xcount;
                } else if (v1 == "O") {
                    ocount += 1;
                    document.getElementById("ocount").innerText = ocount;
                }
                boxes.forEach(box => {
                    box.innerHTML = "";
                    box.disabled = false;
                }); 
                return;
                break; 
            }
        }
    }
}
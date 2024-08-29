document.getElementById("titale").style.color = "red";

const vijay = document.getElementsByClassName("sub");
vijay[0].style.backgroundColor = "red";


Array.from(document.getElementsByTagName("li")).forEach(li => {
    li.style.color = "blue";
    li.style.fontWeight = "bold";  
    li.style.marginBottom = "10px";
    li.style.fontSize = '40px';
});

function change  (){
    const vijay =document.getElementsByTagName('p');
    for(let i=0; i<vijay.length;i++){
        vijay[i].style.backgroundColor = "orange";
        vijay[i].style.color = "white";
        vijay[i].style.fontSize = "35px";

    }
}

document.querySelector('h3').style.fontSize ="50px"


const vard = document.querySelectorAll("span");
vard[1].style.backgroundColor = "red";
vard[1].style.color = "white";
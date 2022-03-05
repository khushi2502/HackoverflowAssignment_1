var content=document.querySelectorAll('.content');
var boxes=document.querySelectorAll('.box');
var values=document.querySelector('.rgb');
var colors=generateRandomColor(6);
var pickcolor=colors[Math.floor(Math.random()*6)];
values.textContent=pickcolor;

var playagain=document.querySelector('.new');
var statustext=document.querySelector('.status');
var easy=document.querySelector('.easy');
var hard=document.querySelector('.hard');
var boxcount=6;
statustext.textContent="Let's play";

easy.addEventListener('click',function(){
    document.querySelector(".hard").style.background = 'white';
    document.querySelector(".hard").style.color = 'rgb(230, 49, 49)';
    document.querySelector(".bg").style.background =' rgb(241, 107, 66)';
    colors=generateRandomColor(6);
    statustext.textContent="Let's play";
    boxcount=3;
    this.style.background='rgb(206, 60, 60)';
    this.style.color='white';
    colors=generateRandomColor(boxcount);
    pickcolor=colors[Math.floor(Math.random()*3)];
    values.textContent=pickcolor;
    for (var i = 0; i < boxes.length; i++) {
        if (colors[i]) {
            boxes[i].style.background = colors[i];
        } 
        else {
            boxes[i].style.display = "none";
        }
    }
});


hard.addEventListener("click", function() {
    document.querySelector(".easy").style.background ='white';
    document.querySelector(".easy").style.color = 'rgb(230, 49, 49)';
    document.querySelector(".bg").style.background =' rgb(241, 107, 66)';
    colors=generateRandomColor(6);
    statustext.textContent = "Let's Play!!";
    this.style.background = 'rgb(206, 60, 60)'
    this.style.color = "white"
    boxcount = 6;
    colors = generateRandomColor(boxcount);
    pickcolor = colors[Math.floor(Math.random() * 6)];
    values.textContent=pickcolor;
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.background = colors[i];
        boxes[i].style.display = "block";
    }
});


playagain.addEventListener("click", function() {
    statustext.textContent = "Let's Play!!";
    document.querySelector(".bg").style.background =' rgb(241, 107, 66)';
    colors = generateRandomColor(boxcount);
    pickcolor = colors[Math.floor(Math.random() * boxcount)];
    values.textContent = pickcolor;
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.background = colors[i];
    }
});


for (var i = 0; i < colors.length; i++) {
    boxes[i].style.background = colors[i];
    boxes[i].addEventListener('click', function() {
        var selectedColor = this.style.background;
        console.log(selectedColor);
        console.log(pickcolor);
        if (selectedColor === pickcolor) {
            win();

        } else {
            loose(this);
        }
    });
}


function win() {
    for (var i = 0; i < colors.length; i++) {
        boxes[i].style.background = pickcolor;
    }
    document.querySelector(".bg").style.background = pickcolor;
    statustext.textContent = "Correct🎉";
    document.querySelector(".status").style.color = 'green';
  

}

function loose(a) {
    console.log(a);
    a.style.background = "rgb(217, 230, 101)"
    statustext.textContent = "WRONG☹";
    document.querySelector(".status").style.color = 'red';
}


function generateRandomColor(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}


function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


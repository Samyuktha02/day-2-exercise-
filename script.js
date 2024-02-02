function myfunction(){
document.getElementById('demo1').innerHTML="welcome to our page"
}


// ---------------bulb--------------------------------

function bulbon(){
    document.getElementById('bulboff').src='images/pic_bulbon.gif'
}
    function bulboff(){
    document.getElementById('bulboff').src='images/pic_bulboff.gif'
}

// ---------------fontsize---------------------------------

function font(){
    document.getElementById('demo2').style.fontSize='35px'
}


// -----------------display-------------------------------

function display(){
    document.getElementById('demo3').style.display='block'
}


// -----------------sum-------------------------------

document.getElementById('demo4').innerHTML = 5 + 10;


// -------------------sum using let-----------------------------

let a,b,c;
a = 5;
b = 5;
c = a+b;
document.getElementById('demo5').innerHTML=c


// -------------------console-----------------------------

console.log(5 + 5);


// -------------------add and sub-----------------------------

function add() {
    let num1 = parseInt(document.getElementById('firstnum').value);
    let num2 = parseInt(document.getElementById('lastnum').value);

    document.getElementById('result').innerHTML = num1 + num2;
}
function sub() {
    let num1 = document.getElementById('firstnum').value
    let num2 = document.getElementById('lastnum').value

    document.getElementById('result').innerHTML = num1 - num2;
}
function mul() {
    let num1 = parseInt(document.getElementById('firstnum').value);
    let num2 = parseInt(document.getElementById('lastnum').value);

    document.getElementById('result').innerHTML = num1 * num2;
}
function div() {
    let num1 = parseInt(document.getElementById('firstnum').value);
    let num2 = parseInt(document.getElementById('lastnum').value);

    document.getElementById('result').innerHTML = num1 / num2;
}

// -------------------click-----------------------------

function changeimage(){
    var image = document.getElementById('imageid')
    if(image.src.match("rosebloom")){
        image.src = "images/rosebud.jpg";
    }
    else{
        image.src = "images/rosebloom.jpg"
    }
}
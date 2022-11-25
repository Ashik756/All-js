alert("hello");


var text =prompt("enter your name")

var len = text.length;
document.write("Number of character" + text.length +'<br>');



var textu =" dhyfg";
document.write("total" + textu.length);




var num1 = prompt("enter your name:");
var num2 = prompt("enter your friend name:");

var num = num1+num2;
document.write("total number:" + num.length);


var myName= prompt("Your name");
document.write(myName.charAt(5));


var text1 = "bangladesh";
// var text2= "is a buautiful country"
var text = text1. slice(0,3)
document.write(text);

var num1 = prompt("enter your first number");
// var num2 = prompt("enter your second number");





var num = prompt("enter number")

if (num % 2 == 0)
document.write("Even");

if (num % 2 !== 0)
document.write("odd");



var num = prompt("Enter your mark")

if (num >100)
document.write("not a valid number")
else if(num >=80 )
document.write("Tmi A+ paico");
else if(num >=70)
document.write("Tmi A paico");
else if(num >= 60)
document.write("Tmi A- paico");
else if(num >=50)
document.write("Tmi B paico");
else if(num >=40)
document.write("Tmi C paico");
else if (num >=33)
document.write("Tmi tane tune pass korco");
else
document.write("Tmi Fail");


var letter = prompt("Enter letter")
letter=letter.toLocaleLowerCase();

if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
    document.write("vowel")

else
    document.write("consonant")


for(x=1; x<=10; x=x+1)
{
    document.write("I love my country")
}

var sum = 0;

for ( var x=1; x<=8; x=x+1)
{
    // sum=sum+x;
}
document.write("sum=" +x); 

for( var i=1; i<=100; i=i+1 )
{
    document.write(" "+i)
}

for(var x=2; x<=15; x=x+1)
{
    document.write("x= "+ x ) 
}

var sum = 0;

for (x = 1; x <= 10; x = x + 1) {
    sum = sum + x;  
}
document.write(sum);

var name1, name2, name3, name4, name5;
name1="rohim"
name2="korim"
name3="salam"
name4="sokina"
name5="morjina"
//nothing

var names =new Array();
names[0]="anis"
names[1]="rohima"
names[2]="tipu"
names[3]="puti"
names[4]="tinku"

// document.write(names[3]);
names.push("sokins")
// document.write(names[5]);
names.pop("tipu");
document.write(names[4]);


var country1=["bangladesh","india"];
var country2=["pakistan", "dubai"]

var counrty = country1.concat(country2);
document.write(counrty);




var num = [10, 20, 30, 40, 50,212,45,78,.54654,5454];

for(var i=0; i<num.length; i++)
{
    document.write(num[i],',')
}


for (let i = 0; i < array.length; i++) {
    const element = array[i];

}

function squire(num1,num2){
    var result = num1*num2;
    document.write("result = "+ result+"<br>");
}
squire(2,8)








=>image slider<=//

var photos =["app.png", "coca.jpg", "project.png"];
var imgTag = document.getElementById("img");

var count = 0;

function next(){
    count++;
    if(count >= photos.length){
        count = 0;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }   
}


function prev(){
    count--;
    if(count < 0){
        count = 2;
        imgTag.src = photos[2];
    }
    else{
        imgTag.src = photos[count];
    }

}


var photos = ["coca.jpg", "app.png", "project.png"];
var imgTag = document.getElementById("img");

var count = 0;
function next() {
    count++
    if(count >= photos.length){
        count=0;
        imgTag.src=photos[count];
    }
    else{
        imgTag.src=photos[count];
    }
}
function prev(){
    count--
    if(count <0){
        count =2;
        imgTag.src = photos[2];
    }
    else{
        imgTag.src = photos[count];
    }
}

function callBack(a ,d) {
    const callBackResult = a * d
    return callBackResult;
}

function test(x, y, m ) {
    const resut = x * 111 - y + 765454 + m
    const final = callBack(10,resut)
    return final;
}


document.write("<br> total  " + test(3, 4, 10 ))



var input=prompt("Input, How much you want")
var i = input


var input=prompt("Input, How much you want")

for(i=1; i<=input; i++){
    document.write("  I love Bangladesh")
}


var input= prompt("Input");

if(input=="my"){
    document.write("you are right");
}
else if(input== "he is"){
    document.write("You are also right");
}
else{
    document.write("you are wrong")
}


var i = 1;

while(i<=50){
    document.write("rliutgh"+"<br/>");
    i=i+1;
}

var i=1;
var sum=0;

while(i<=10){
    sum=sum+i;
    i=i+1
}
document.write(sum)

var i = 1;
var sum = 0;

while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0) {
        document.write(i+"<br>")
        sum = sum + i;
    }
    i = i + 1;
}
document.write(sum)

 var i = 1;
 do{
    document.write(i+"<br>")
    i = i + 1;
 }while(i <= 100)


let x = prompt("Input 1st number");
let a = parseFloat(x);
let y = prompt("Input 2nd number");
let b= parseFloat(y);

let z = a+b;
if(z>15){
    document.write(0);
}

else if(z<10){
    document.write(z*5);
}
else{
    document.write(z);
}


var number= Number(prompt("Input here"));

var num= number > 0 ? "Positive" : number < 0 ?"Negative" :"zero"  ;

document.write(num)



function ashik(num1 , num2){
    var result = num1 + num2;
    return result;
}


var y = ashik(7,8);
console.log(y);

var sum=function sum(x,y){
document.write(x+y)
}
sum(2,3)

function btn() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;

    if (username == 'ashik' && email == "a@gmail.com" && password ==  123456) {
        document.write("login successfull");
    }
    else if (username == '' && email == "" && password == "" ) {
        document.write("Input someting");
    }
    else if (username !="ashik" && password != 123456){
        document.write("incorrect username and password");
    }
    else if (username !="ashik"){
        document.write("incorrect username");
    }
    else if (username !="ashik" && email !="a@gmail.com"){
        document.write("incorrect username and email");
    }
    else if (email !="a@gmail.com" && password != 123456){
        document.write("incorrect email and password");
    }
    else if (email !="a@gmail.com"){
        document.write("incorrect email");
    }
    else if (password != 123456){
        document.write("incorrect password");
    }



    else{document.write("all information are incorrect");}
}



function btn() {
    let amount = document.getElementById("tk").value;
    if (amount == 0) {
        document.write("none of theme");
    }
    else if(amount%2==0){
        document.write("Jor shonka");
    }
    else{ document.write("Bijor sonka");}

}




let num=[2,050,54,541,10,54,80]

num.sort(function(x, y){
    return x-y;
})
document.write(num)



//<<--Hight number-->>////

function highestRunScore(student){
    let highestScorer=[0][0];
    let highestScore=[0][1];

    for(var x=1;x>student.length;x++){
        if(highestScore<student[x][1]){
            highestScore=student[x][1];
            highestScore=student[x][0];
        }
    }
    return highestRunScore
}

let student=[
    ["anis",85]
    ["kalam",80]
    ["salam",83]
    ["sabbir",90]
    ["riad",96]
];

highest(student);



object//

function student(Name, Age, Class) {
    this.Name = Name;
    this.Age = Age;
    this.Class = Class

    this.display = function () {
        document.write(this.Name)
        document.write(this.Age)
        document.write(this.Class)
    }
}
let student1 = new student("Ashik", 18, 11)
let student2 = new student("Talha", 17, 9)
let student3 = new student("Rontu", 14, 7)
let student4 = new student("Asif", 16, 8)

student1.display()



let lost=0;
let own=0;

for (i = 0; i < 6; i++) {
    let number = parseFloat(prompt("Input a number 1 to 5 :"))

    let random = Math.floor(Math.random() * 4) + 1;

    if (number == random) {
        console.log("You are won");
        own++;
    }
    else {console.log("You are lost " + " and random number was " + random);
    lost++;
}

}
document.write("Number of won"+own+"<br2>");
document.write("Number of lost"+lost);




let x=document.querySelector("#y")

function btn1 (){
    x.src="owl.jpg"
}

function btn2 (){
    x.src="sdi.jpg"
}



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
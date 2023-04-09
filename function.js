function Hello(){

    console.log("Hello world");

}
//Hello();

function add(a,b){
    
    console.log(a+b);
}   
//add(10,7);

function timesTen(num){

    return num*10;
}
//console.log(timesTen(5));



//this function returns undefined
var sum=0;
function addTwo(){

    sum+=2 
}
//console.log(addTwo(12)) // returns undefined

var sum=0;
function addThree(){
    sum+=3;
    return sum;
}
//console.log(addThree())




function addNine(num){

    return num+=9
}
console.log(addNine(1))
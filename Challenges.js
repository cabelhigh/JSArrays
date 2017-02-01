/*Purpose: Grabs the max value of an array
  Signature: N/A
  Examples:
    [1,2,4] -> 4
    [-1,-2,-6] -> -1

  Arrays -- Data set; [1,2,3] if I want to get 2, what do I do? a[1] =2
  Variables -- var a = 1,2,3; var x = 3; var y = "auhsdad"; var z = true;
  Loops -- while(<if this is true, continue looping>);
  */

//Biggest Number
var a = [1,4,2];
var max = a[0];

a.forEach(function(element){
  if (max < element) max = element
});
  console.log(max);


  /*Smallest Number
    */
  var a = [1,4,2];
  var max = a[0];

  a.forEach(function(element){
    if (max > element) max = element
  });
    console.log(max);


//Sum numbers
var a = [100,2,30];
var sum = 0;

a.forEach(function(element){
  sum+=element;
})

console.log(sum);


/*
  Make a variable b4 you start looping
  Loop thru the Array
  Add each element in the array together
  Print the sum

  0+=1 //adds and changes the variable
  1+=2
  3+=3

*/
//Hieghest Index
var a = [1,4,2,5,6,309];
var max = a[0];
var maxindex = -1

a.forEach(function(element,index){
  if (max < element) {
    max = element;
    maxindex=index}
});
  console.log(maxindex);

var names = ["Joe","Emily","Sarah"];

for(var e=0; e<names.length; e++){
  console.log(names[e])
}

names.forEach(function(element) {
  console.log(element);
})

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var a = "Yup!, Fuhgeddaboudit, Maybe, Ask: what would your mother do?, Ask: what would an Australian do, Do the opposite, Your answer here.".split(",");

var question = prompt("Ask a question")

var randomNum = getRandomInt(0,6)
console.log(question + " " + a[randomNum])

//Asks for an index in a prompt
//Returns the element at that index

prompt("Enter a number between ")


//The Even One

var a = [1,2,3,4,3,6,7,8,2]
var b = []
a.forEach(function(element, index){
  if(index%2==1){
    b.push(element)
  }
})

console.log(b);


/*
  function blar {
...
...
  }

  function blurp {
  ...
  ...
  return something;
}
}

*/

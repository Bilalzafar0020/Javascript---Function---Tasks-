//   Task 1

function Factorial(){
 let num = document.querySelector("#factorial");
 
let result1 = document.querySelector("#factorialResult");
let num1 = num.value;

let result =  1;

if(num1 < 0){
    result = `Undefined Because Factorial is always Positive number`
}  else if(num1 == 0){
    result =1 
};

 
 let i =1;
while(i<=num1){
    result *= i;
    i++;
}

/*  using  for loop 

let result = 1;

for( let i=1; i<=num;i++){
    result *= i;
};  */ 

let sum = `Factorial of ${num1} is ${result}  `; 

result1.value=sum;

};


//  Task 2


function Vowels(){
    let values =document.querySelector("#vowelsInput");
    let value1 = values.value;
    
    let result = document.querySelector("#vowelsOutput");

let withOutVowel = value1.replace(/[aeiou]/gi, "");  // here g is global(will remove in all word 
// not in single word  ) (i  is for to remove capital+small all type of)


result.value=withOutVowel;

/*   second method

  for (var i = 0; i < value1.length; i++) {
    let currentChar = value1.charAt(i);
    if (currentChar.toLowerCase() !== "a" && currentChar.toLowerCase() !== "e" && currentChar.toLowerCase() !== "i" && currentChar.toLowerCase() !== "o" && currentChar.toLowerCase() !== "u") {
      result  += currentChar;
    }
  }  */ 


};


//   Task 3
function MaxValue(){
let numbers = document.querySelector("#maxI");

let numbers1 = numbers.value.split(",").map(Number); // we use map to convert string values to
//   Number


let result = document.querySelector("#maxO");

let maxValue = Math.max(...numbers1); // because Math required number not string and find the large
result.value = maxValue;
};


//  Task 4 ;

function capitalized (){
    let word = document.querySelector("#capitalizedI");

    let word1 = word.value;

let result =document.querySelector("#capitalizedO");

let capitalizion = word1.replace( /\b\w/g, function(l) { return l.toUpperCase() } );

result.value = capitalizion;

/*  second method
 let result = "";
    for (let i = 0; i < text.length; i++) {
        if (i === 0 || text[i - 1] === " ") {
            result += text[i].toUpperCase();
        } else {
            result += text[i];
        }
    }  */ 

};




//  Task 7  
function sort(){

let input = document.querySelector("#SortedI");

let input1 = input.value;

let result =document.querySelector("#SortedO");

let inputArray = input1.split(",")

let sortedArray = inputArray.sort( function (a ,b ){
    return a.localeCompare(b); 
}).join( " ");

result.value = sortedArray;
}
    


//  Task 8 

function prime(){
    let prime = document.querySelector("#PrimeI"); 
let prime1 =  parseInt(prime.value);

let result = document.querySelector("#PrimeO");

//  setting boolean condition
let correctPrime = true;

//  because 1 and 0 is consider as not prime and - is not positive integer
if(prime1 <2){
    correctPrime=false
}
  else{
    for(let i = 2 ; i <= Math.sqrt(prime1); i++  ){  // to to check all from all table 1 to root
        if (prime1 % i === 0) {
            correctPrime = false;
            break;
    }

  }

};

// if not dividable 
if (correctPrime=== true){
    result.value = `'${prime1}' Is A Prime Number`;
}
else {
    result.value = `'${prime1}' Is Not a Prime Number`;
}

};


//   Task 5 

function average(){

let numbers = document.querySelector("#inputNumbers");

// split to convert string values(because of .value numbers is string) to array of string
//  and map to convert each array of string to array of numbers

let numbers1 = numbers.value.split(',').map(Number); ;

let averagedNumbers = document.querySelector("#outputAverageNum");

// 0  to  keep track of the running sum of the numbers in the array.
let sum = 0;
for( let i =0 ; i < numbers1.length; i++){


//  This adds the current number to the running sum of all the numbers in the array.   
sum += numbers1[i]
};

// string to convert values to string 
let combine = String(sum/numbers1.length);


averagedNumbers.value = `Average is'${combine}'`;
};

 
  // Get the input value and remove any non-alphanumeric characters and convert it to lowercase
  const inputValue = input.value.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Reverse the input value and compare it with the original input value
  const reversedValue = inputValue.split('').reverse().join('');
  const isPalindrome = (inputValue === reversedValue);
  

//   Task 6 

function palindrome(){

let input = document.querySelector("#inputWord");


let ispalindrome = document.querySelector("#checkedWord");

  // Geting the input value and removing any non-alphanumeric characters and converting it to lowercase

   let inputValue = input.value.toLowerCase().replace(/[^a-z0-9]/g, '');// replace any character which is not a-z or 0-9


  // Reversing the input value and comparing it with the original input value

let reversedValue = inputValue.split( '').reverse().join( '');

let reversedValue1 = (inputValue === reversedValue);



if(reversedValue1){
    ispalindrome.value = `True `
}
else{
    ispalindrome.value = `False`
};

};










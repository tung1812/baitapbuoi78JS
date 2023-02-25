let arr = [];

// Input an array
document.getElementById("btn").onclick = function insert() {
    let arrNum = +document.getElementById("arrNum").value;
    if (Number.isInteger(arrNum) == false) {
        alert("Invalid")
    }
    else {
        arr.push(arrNum);
        let result = "";
        result = arr.join(", "); 
        document.getElementById("footer").innerHTML = result;
    }
}


//Positive integers sum
document.getElementById("btn1").onclick = function sumOfPositive() {
    let total = arr.reduce((total, value) => {
        return value > 0 ? total + value : total
    }, 0);
    document.getElementById("footer1").innerHTML = "The sum of the positive numbers in the array is:" + " " + total;
}

// Number of the positive integers
document.getElementById("btn2").onclick = function countOfPositive() {
    let numOfPositive = arr.reduce((count, value) => {
        return value > 0 ? count + 1 : count;
    }, 0);
    document.getElementById("footer1").innerHTML = "The number of the positive numbers in the array is:" + " " + numOfPositive;
}

// The smallest integer in the array
document.getElementById("btn3").onclick = function smallestNumber() {
    let small = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < small) {
            small = arr[i];
        }
    }
    document.getElementById("footer3").innerHTML = "The smallest number in the array is:" + " " + small;
}

// The smallest positive integer in the array
document.getElementById("btn4").onclick = function smallestPosNum() {
    let smallPos = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if ((smallPos == arr[0]) || ((arr[i] > 0) && (arr[i] < smallPos))) {
            smallPos = arr[i];
        }
    }
    document.getElementById("footer4").innerHTML = "The smallest positive number in the array is:" + " " + smallPos;
}


// The last index that contain an even integer in the array
document.getElementById("btn5").onclick = function lastEvenInteger() {
    let lastEven = -1;
    let result = "The last index that contain an even number in the array is:" + " ";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            lastEven = arr[i];
        }
    }
    result += lastEven;
    document.getElementById("footer5").innerHTML =  result;
}



// Swap the position of 2 specific element in the array
document.getElementById("btn6").onclick = function displaySwappedArray() {
    let firstIndex = +document.getElementById("firstIndex").value;
    let secondIndex = +document.getElementById("secondIndex").value;

    function swapElement (a, x, y) {
        if (a.length === 1) return a;
        a.splice(y, 1, a.splice(x, 1, a[y])[0]);
        return a;
    }

    let result = swapElement(arr, firstIndex, secondIndex).join(", ");
    document.getElementById("footer6").innerHTML =  result;
} 

// Sort the array in ascending order
document.getElementById("btn7").onclick = function ascendingSort() {
    let result = arr.sort(function(a, b) {
        return a - b;
      });
    document.getElementById("footer7").innerHTML = result;
}

// Find the first prime number in the array
function isPrime(num) {
    if(num < 2) return false;
  
    for (let k = 2; k < num; k++){
      if(num % k == 0){
        return false;
      }
    }
    return true;
}
document.getElementById("btn8").onclick = function firstPrimeNumber() {
    let firstPrime = -1;
    let result = "The first prime number in the array is:" + " ";

    for (let i = (arr.length - 1); i >= 0; i = i - 1) {
        if (isPrime(arr[i])) {
            firstPrime = arr[i];
        }
    }
    result += firstPrime;
    document.getElementById("footer8").innerHTML =  result;
}

// Input an array with real number elements and count the number of the integer in it
// Input the array
let realArr = [];
document.getElementById("btn9").onclick = function insertRealArr() {
    let realArrElement = +document.getElementById("realArrElement").value;
    realArr.push(realArrElement);
    let result = "";
    result = realArr.join(", "); 
    document.getElementById("display").innerHTML = result;
}

// Check if the element is an integer and count it
document.getElementById("btn10").onclick = function integerCount() {
    let count = 0;
    let result = "The number of the integer in this array is:" + " ";
    for (let i = 0; i < realArr.length; i++) {
        if (Number.isInteger(realArr[i])) {
            count++;
        }
    }
    result += count;
    document.getElementById("footer9").innerHTML = result;
}

// Count the positive and negative number in the array and compare them to find out which is bigger
// Count the positive number
function positiveNumberCount(arr) {
    let posCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            posCount++;
        }
    }
    return posCount;
}

// Count the negative number
function negativeNumberCount(arr) {
    let negCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negCount++;
        }
    }
    return negCount;
}

// Compare
document.getElementById("btn11").onclick = function negPosCompare() {
    let numOfPos = positiveNumberCount(arr);
    let numOfNeg = negativeNumberCount(arr);
    let result = "";
    if (numOfPos > numOfNeg) {
        result = "The number of positive number is bigger than the number of negative number in this array";
    }
    else if (numOfPos < numOfNeg) {
        result = "The number of negative number is bigger than the number of positive number in this array";
    }
    else {
        result = "The number of negative number is equal to the number of positive number in this array";
    }
    document.getElementById("footer10").innerHTML = result;
}

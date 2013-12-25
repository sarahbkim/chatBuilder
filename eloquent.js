var power = function(num, pow) { 
    var total = 1; 
    for(var i=pow; i > 0; i--){ 	
    total *= num;
	}
	return total;
}

//recursive method: 
function power(base, exp) { 
	if (exp ==0 )
		return 1; 
	else 
		return base * power(base, exp - 1); 
}

var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}

console.log(power(3, 2)); 

var currentNumber = 0; 
while (currentNumber <= 12) { 
	console.log((currentNumber)); 
	currentNumber = currentNumber + 2; 
} 

var line = ""; 
var counter = 0; 
while (counter < 10) { 
	line = line + "#"; 
	console.log(line); 
	counter +=1; 
};

var line = ""; 
for(var i=0; i < 10; i++){ 
	line = line + "#"; 
	console.log(line); 
	counter += 1; 
};

//var answer = prompt("What is the value of 2+2?"); 

/*if (answer == 4)
	alert("That's awesome!");
else if (answer == 3 || answer == 5)
	alert("Almost!"); 
else 
	alsert("You suck."); 

// a function called "add" 
function add(a, b) { 
	return a + b; 
}; 

*/ 

function abs(num) { 
	if(num < 0)
		return -num 
	else
		return num
}; 

console.log(abs(-1));
console.log(abs(2)); 
console.log(abs(0));


var variable = "top-level";
function parentFunction() {
  var variable = "local";
  function childFunction() {
    console.log(variable);
  }
  return childFunction;
}

var child = parentFunction();
child(); // => local  (this returns its internal function; phenomenon called 'close'

function makeAddFunction(amount) { 
	function add(number){ 
		return number + amount
	}
return add; 
}; 

var addTwo = makeAddFunction(2); // this captures 'amount' 
var addFive = makeAddFunction(5); 

console.log(addTwo(3)); // => 5, because when this is called, 3 is captured into number 
console.log(addFive(1)); 
console.log(addTwo(1) + addFive(1));  // => 9 


function findSequence(goal) {
  function find(start, history) {
    if (start == goal)
      return history;
    else if (start > goal)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

function greaterThan(num) { 
	return function(startNum) { 
		return startNum > num; 
	};
}


var greaterThanTen = greaterThan(10); 
console.log(greaterThanTen(9)); 

// objects: 
cats = { 
	sally: 1993, 
	molly: 3992, 
	tom: 1442 
}

cats.hasOwnProperty("sally"); // => true 
cats["todd"] = 1442; // => cats = { .... and todd: 1442}
delete cats["tom"]; // => cats is no more 'tom' :( 

function range(pos) { 
	var arr = []; 
	for(var i = 0; i < pos; i++ ){ 
		arr.push(i);  
		i += 1 ; 
	}
	return arr 
}

console.log(range(3)); 


startsWith = function(str1, str2) { 
	var str1_start = str1.slice(0, (str2.length ) )
	if (str1_start == str2)
		return true;
	else 
		return false 

}; 

console.log(startsWith("catepillar", "cat")); 


cats = function(para) { 
	var colon = para.indexOf(":"); 
	return para.slice(color + 2).split(", "); 
}; 

extractDate = function (sent) { 


}

function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

function sum(numbers) {
  var total = 0;
  forEach(numbers, function (number) {
    total += number;
  });
  return total;
}

console.log(sum[1, 2, 3, 4]); 


// reduce combines an array into a single value by repeatedly using
// a function that combines an elemnent of the array with a base value 
// similar to ruby's inject method!

function reduce(combine, base, array) {
  forEach(array, function (element) {
    base = combine(base, element);
  });
  return base;
}

function add(a, b) {
  return a + b;
}

function sum(numbers) {
  return reduce(add, 0, numbers);
}


// countZeroes - takes arr of nums and returns amount of zeros that occur
// use reduce 



function countZeros(arr) { 
	function counter(total, elem) { 
		return total + (elem === 0? 1 : 0); 
	}
	return reduce(counter, 0, arr); 
};


function count(test, arr) { 
	return reduce(function(total, elem) { 
		return total + (test(elem) ? 1 : 0 ); 
	}, 0, arr ); 
}; 

function equals(x) { 
	return function(elem) { return x === elem; };
}; 

function countZeroes(arr) { 
	return count(equals(0), arr); 
};

function map(func, array) {
  var result = [];
  forEach(array, function (element) {
    result.push(func(element));
  });
  return result;
}

console.log((map(Math.round, [0.01, 2, 9.89, Math.PI])));



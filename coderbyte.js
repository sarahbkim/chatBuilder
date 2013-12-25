
// Have the function LongestWord(sen) take the sen parameter being 
// passed and return the largest word in the string. If there are 
// two or more words that are the same length, return the first word
//  from the string with that length. Ignore punctuation and assume 
// sen will not be empty. 

function LongestWord(sen) { 
  var new_sen = sen.replace(/['";:,.\/?!\\-]/g, '');
  var arr = new_sen.split(' '); 
  var max = arr[0];  

for (var i=0; i < ((arr.length) - 1 ); i++){
    if (arr[i].length >= arr[i+1].length) { 
		max = arr[i]; 
	} else { 
		max = arr[i+1]; 
	}
};

return max; 

}; 


// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
console.log(LongestWord("Welcome to paraidos"));
console.log(LongestWord("this is some sort of sentence")); 
console.log(LongestWord("coderbyte"));
console.log(LongestWord("a beautiful sentence^&!")); 
console.log(LongestWord("letter after letter!!")); 
console.log(LongestWord("a confusing /:sentence:/[ this is not!!!!!!!~")); 
                            
/* Have the function LetterChanges(str) take the str parameter being passed and modify it 
using the following algorithm. Replace every letter in the string with the letter following
 it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new 
 string (a, e, i, o, u) and finally return this modified string. 
*/ 
 function LetterChanges(str) { 
    var words = str.split(' '); 
    var changed_words = []; 
    
    for(var i=0; i<words.length; i++){ 
        var letters = words[i].split(''); 
        var new_letters = [];
        for(var j=0; j<letters.length; j++){ 
            if(/[A-Za-z]/.test(letters[j]))
                new_letters.push(String.fromCharCode(letters[j].charCodeAt(0)+1));
            else{ 
                new_letters.push(letters[j]);
            }
        }
        changed_words.push(new_letters.join('')); 
    }
    
    return changed_words.map(capitalizeVowels).join(' ');
}
        
str = "hello world3***"; 
letterChanges(str); 




function capitalizeVowels(word) {
    var new_arr = []; 
    var arr = word.split(''); 
    for(var i=0; i < arr.length; i++){ 
        if(/[aeiou]/.test(arr[i])){
            new_arr.push((arr[i].toUpperCase()));
       } else {
            new_arr.push(arr[i]); }
    } 
    return new_arr.join('');     
}


function FirstReverse(str) { 
 return str.split('').reverse().join('')        
}
          

function FirstFactorial(num) { 
var fact = 1; 
  while (num > 0) { 
    fact *= num; 
    num -= 1; 
  } 
  return fact; 
         
}
   

function LongestWord(sen) { 
  var new_sen = sen.replace(/['";:,.\/?!\\-]/g, '');
  var arr = new_sen.split(' '); 
  var max = arr[0];

for (var i=0; i < ((arr.length) - 1 ); i++){
    if (arr[i].length >= arr[i+1].length) { 
    	max = arr[i]
	} else { 
		max = arr[i+1]; 
	}
}

return max; 

}

function LetterChanges(str) { 
    var words = str.split(' '); 
    var changed_words = []; 
    
    for(var i=0; i<words.length; i++){ 
        var letters = words[i].split(''); 
        var new_letters = [];
        for(var j=0; j<letters.length; j++){ 
            if(/[A-Za-z]/.test(letters[j]))
                new_letters.push(String.fromCharCode(letters[j].charCodeAt(0)+1));
            else{ 
                new_letters.push(letters[j]);
            }
        }
        changed_words.push(new_letters.join('')); 
    }
    
    return changed_words.map(capitalizeVowels).join(' ');
}

function capitalizeVowels(word) {
    var new_arr = []; 
    var arr = word.split(''); 
    for(var i=0; i < arr.length; i++){ 
        if(/[aeiou]/.test(arr[i])){
            new_arr.push((arr[i].toUpperCase()));
       } else {
            new_arr.push(arr[i]); }
    } 
    return new_arr.join('');     
}
     


function SimpleAdding(num) { 
  var arr = []; 
  for(var i=1; i<=num; i++) {
      arr.push(i);
  }

  var sum = arr.reduce( function(sum, x) { 
    return sum + x; }, 0); 

  
  return sum; 
         
}


function LetterCapitalize(str) { 
    
     return str.replace(/\w\S*/g, function(txt){
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });

  return str
  
     

         
}


function SimpleSymbols(str) { 
    if (isLetter(str[0]) || isLetter(str[(str.length-1)]))
        return false;
    else {
        for(var i=1; i<str.length-1; i++){ 
            var prev = i - 1; 
            var next = i + 1;  
            if(isLetter(str[i]) && str[prev] == "+" && str[next] == "+")
                return true; 
            else
                return false;  
        }
        return true;
        }
         
}

function isLetter(i) { 
    if (/[A-Za-z]/.test(i)) 
        return true; 
    else 
        return false; 
}

function CheckNums(num1,num2) { 
  if (num2 > num1)
    return true; 
  else if (num2 == num1)
    return "-1"; 
  else 
    return false; 
    return num1 + num2; 
         
}
  
function TimeConvert(num) { 
  var hours = Math.floor(num / 60) 
  var mins = num % 60 
    if(hours > 0)
      return hours + ":" + mins
    else
      return 0 + ":" + mins
  // code goes here  
  return num; 
         
}

function AlphabetSoup(str) { 
  var arr = str.split(''); 
  
  return arr.sort().join('');  
  
  // code goes here  

         
}

function ABCheck(str) { 
    var new_str = str.toLowerCase(); 
    
    for(var i=0; i < new_str.length-3; i++){
        if(new_str[i] == "a" && new_str.charAt(i+4) == "b") 
            return true;
    }
    return false; 
}
   
function VowelCount(str) { 
  var arr = str.split(''); 
  var vowels = 0; 
  
  for(var i=0; i < arr.length; i++){ 
      if(/[aeiou]/.test(arr[i])) 
            vowels += 1;
  }
  
  return vowels; 
}

VowelCount("hello"); 


/* Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored 
in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return 
"Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. 

An arithmetic sequence is one where the difference between each of the numbers is consistent, where as 
in a geometric sequence, each term after the first is multiplied by some constant or common ratio. 
Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. 
Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 

subtract i+1 from i // arithmetic sequence 2, 2, 2 ; 4, 6, 36
divide i+1 from i // geometric sequence 2, 3, 4 ; 3, 3, 3

Use the Parameter Testing feature in the box below to test your code with different arguments. */

function ArithGeo(arr) { 

  // code goes here  
  var dif = new Array();
  var val = "";
  var n = arr.length;
  for (var i=0;i<n-1;i++) {
    dif[i]=arr[i+1]-arr[i];
  }
  //CHECK FOR ARITH
  var arith = true;
  for (var i=0;i<n-2;i++) {
    if (dif[i]==dif[i+1]) {
      //ARITH
    } else {
      arith = false;
    }
  }
  if (arith==false) {
   //CHECK GEO
    var factor = new Array();
    for (var i=0;i<n-2;i++) {
      factor[i] = dif[i+1]/dif[i];
    }
    var geo = true;
    for (var i=0;i<n-3;i++) {
      if (factor[i]==factor[i+1]) {
        
      } else {
        geo = false;
      }
    }
    if (geo==false) {
      val = "-1";
    } else {
      val = "Geometric";
    }
  } else {
    val = "Arithmetic";
  }
  return val; 
         
}

/* Have the function LetterCountI(str) take the str parameter being 
passed and return the first word with the greatest number of repeated letters. 
For example: "Today, is the greatest day ever!" should return greatest because 
it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there
 are no words with repeating letters return -1. Words will be separated by spaces.

*/ 

function LetterCountI(str) { 
	var words = str.split(' ');  // creates an array of words 

	for(var i=0; i<words.length;i++){  // loops through each word in the string
		var word = str.split(''); 
		var reps = 0; 

		var repeats = 0; 
		for(var j=0; j<word.length;j++){  // loops through each letter in a word 
			if(word[j] == word[j+1])
				repeats += 1;
		}
		
		 if(repeats > reps) 
		 	return words[i];
		}
	return -1; 
	
	}
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCountI(readline());    










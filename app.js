/* Quick Question #1
What does the following code return? */

new Set([1,1,2,2,3,4]) // {1, 2, 3, 4}

/* Quick Question #2
What does the following code return? */

let setMap = [...new Set("referee")].join(""); // returns "ref"


/* Quick Question #1
What does the Map m look like after running the following code? */

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
console.log(m);

/* Map m is the following:
  Map(2) {Array(3) => true, Array(3) => false}
*/

/* 
  hasDuplicate
  Write a function called hasDuplicate which accepts an array and returns true or false if that array
  contains a duplicate
*/

  const hasDuplicate = arr => {
    return new Set(arr).size !== arr.length;
  }

  /* 
    vowelCount
    Write a function called vowelCount which accepts a string and returns a map where the keys are numbers 
    and the values are the count of the vowels in the string.
*/

function vowelCount(str) {
  const vowels = "aeiou";

  let vowelCountMap = new Map();

  for ( let char of str.toLowerCase() ) {
    if ( vowels.includes(char) ) {
      if ( vowelCountMap.has(char) ) {
        vowelCountMap.set( char, vowelCountMap.get( char ) + 1 );
      } else {
        vowelCountMap.set( char, 1 );
      }
    }
  }
    return vowelCountMap;
}
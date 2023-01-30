// Declare two sets of integers
var setA = [1, 2, 3, 4, 5];
var setB = [3, 4, 5, 6, 7];

// Initialize the sum variable
var sum = 0;

// Loop through each element in set A
for(var i = 0; i < setA.length; i++) {
  // Check if the current element in set A exists in set B
  for(var j = 0; j < setB.length; j++) {
    if(setA[i] === setB[j]) {
      // If it exists, add it to the sum
      sum += setA[i];
    }
  }
}

// Print the sum of overlapping elements
console.log("the sum of overlapping elemets is" +sum)
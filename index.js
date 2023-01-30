//adding ditinct elements from two sets basic method
// Declare two sets integers
var set1 = [3, 1, 7, 9];
var set2 = [2, 4, 1, 9, 3];

// Initialize the sum 
var sum = 0;

// Loop through set1 elements
for (var i = 0; i < set1.length; i++) {
  var isDifferent = true;
  for (var j = 0; j < set2.length; j++) {
    if (set1[i] === set2[j]) {
      isDifferent = false;
      break;
    }
  }
  if (isDifferent) {
    sum += set1[i];
  }
}

// Loop through set2 elements
for (var i = 0; i < set2.length; i++) {
  var isDifferent = true;
  for (var j = 0; j < set1.length; j++) {
    if (set2[i] === set1[j]) {
      isDifferent = false;
      break;
    }
  }
  if (isDifferent) {
    sum += set2[i];
  }
}

console.log("The sum of all distinct elements is: " + sum);

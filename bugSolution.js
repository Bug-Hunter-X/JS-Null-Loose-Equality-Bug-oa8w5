function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return 0; // Handle null or undefined values
  }

  //Explicit Type conversion if the input is not a number
  a = Number(a);
  b = Number(b);
  if(isNaN(a) || isNaN(b)) return 0;

  return a + b; 
} 
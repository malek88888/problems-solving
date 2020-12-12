console.log('Problem Solving Q: 19');

/* Is Subset Of */

/*  
Make an array method that can return whether or not a context array is a subset of an input array.
To simplify the problem, you can assume that both arrays will contain only strings
*/

Array.prototype.isSubsetOf = function (array) {
  // YOUR CODE HERE
  let boolean=false
  for (i = 0; i < this.length; i++) {
    if((array.indexOf(this[i]) > -1) ){
      boolean =true
      console.log(boolean);
    }else{
      boolean =false
      console.log(boolean);

    }
  }
}

/* 
Examples:
[].isSubsetOf([1, 2, 2]) // => true
['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox', 'cat']) // => true
['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox']) // => false
*/
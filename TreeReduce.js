Tree Reduce - Trees

/**
 * ============== About Reduce Method =====================
 *  The reduce() method executes a callback
 * on each value in a collection. It passes an accumulator 
 * and the value of the current value to the callback 
 * and updates the accumulator with the returned value 
 * resulting in a single output value.
 * 
 * Here are two examples of how the reduce method works on an array:
 * 
 * ---Example #1---
 * var arr = [2, 3, 4]
 * 
 * var cb = function (accumulator, currentValue){
 * return accumulator + (currentValue*2)
 * }
 * 
 *  arr.reduce(cb, 1) //19
 * // 1+(2*2) >>> 5+(3*2) >>> 11+(4*2) >>> 19
 * 
 * 
 * ---Example #2---
 * var arr = [2, 3, 4]
 * 
 * var cb = function (accumulator, currentValue){
 * return accumulator + currentValue
 * }
 * 
 * arr.reduce(cb) //16 
 * // 2+(3*2) >>> 8+(4*2) >>> 16
 * 
 * 
 *  ================== Prompt =========================
 * 
 * Implement a `reduce` method for this Tree class,
 * in the ES6 pseudo-classical instantiation style.
 *
 * Add any other methods or properties necessary to
 * make the example code produce the desired output
 * and run without errors.
 * 
 * The `reduce` method should accept two arguments:
 * 1. (required) a callback function which will produce
 *    the accumulated result
 * 2. (optional) a starting value for the accumulation
 *
 * Make sure you do not modify the original tree.
 *
 * 
 * 
 * 
 */


  var Tree = function (value) {
    this.value = value;
    this.children = [];
  };

  // TODO: COMPLETE THESE METHODS
  Tree.prototype.addChild = function (value) {
      var child = new Tree(value)
      this.children.push(child)
      return child
  };

  Tree.prototype.reduce = function (callback, accumulator) {
    
     
  };

  // // Example setup:
  
  //   var root = new Tree(0),
  //   child1 = root.addChild(1),
  //   child2 = child1.addChild(2),
  //   child3 = root.addChild(3),
  //   child4 = child3.addChild(4),
  //   child5 = child3.addChild(5),
  //   child6 = root.addChild(6);
  
  // // Example usage:
  
  // root.reduce(function (result, currentValue) {
  //   return result + " " + currentValue + ",";
  // }, "Values, depth-first: ");
  // // => "Values, depth-first: 0, 1, 2, 3, 4, 5, 6,"
  
  // root.reduce(function (result, currentValue) {
  //   return result + currentValue;
  // }); // => 21

  // root.reduce(function (result, currentValue) {
  //   return result + currentValue;
  // }, 10); // => 31




// Write your solution here!
 const drivers = ["Milo", "Otis", "Garfield"];

 // Adds new object to end of array
 // Mutates original array
 function destructivelyAppendDriver (name) {
    drivers.push(name);
  }

  // Adds new object to beginning of array
  // Mutates original array
  function destructivelyPrependDriver (name) {
    drivers.unshift(name);
  }
  
  // Removes last object from array
  // Mutates original array
  function destructivelyRemoveLastDriver () {
    drivers.pop();
  }
  
  // Removes first object from array
  // Mutates original array
  function destructivelyRemoveFirstDriver () {
    drivers.shift();
  }

  // "return" will literally return the value; we are adding our argument to the END of the array here.
  // The "spread operator" = `...`
  // The spread operator allows us to spread out the contents of an existing Array into a new Array, adding new elements but preserving the original

  // `...` is ADDING elements of original array

  // DOES NOT mutate original array; returns a new one
  function appendDriver (name) {
    return [...drivers, name];
  }

  // See info about spread operator above
  function prependDriver (name) {
    return [name, ...drivers];
  }
  

  // To remove elements from an Array nondestructively (without manipulating the original Array), we can use the .slice() method
  // Just as the name implies, the .slice() method returns a portion, or slice, of an Array
  // If we don't provide any arguments, .slice() will return a copy of the original Array with all elements intact
  
  // DOES NOT mutate original array; returns a new one
  function removeFirstDriver () {
    return drivers.slice(1);
  }
  
  // Arrays are indexed beginning at 0; hence, `arrayName.length - 1`
  function removeLastDriver () {
    return drivers.slice(0, drivers.length - 1);
  }

  // We can provide two arguments to .slice(), the index where the slice should BEGIN and the index before which it should END
  // Second argument will NOT be included in the slice
  // `arrayName.length - 1` gives us the index number of the LAST item in the array, as array indexing begins at 0
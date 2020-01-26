function getCandiesEaten(children, candies) {
  if (children !== undefined && candies !== undefined) {
    if (typeof children === "number" && typeof candies === "number") {
      // Happy path for valid data
      if (candies >= children) {
        return Math.floor(candies / children);
      }
      // Error handling for invalid data (candies < children)
      return "There are less candies than children";
    }
    // Error handling for illegal data type (inputs are not a number)
    return "Invalid data type.  Data type should be a number";
  }
  // Error handling for no data (no input given)
  return "Please make sure both candies and children are given";
}

// Happy path for valid data
console.log(getCandiesEaten(3, 10));
// No data given
console.log(getCandiesEaten());
// Illegal data type given
console.log(getCandiesEaten("3", "10"));
// Invalid data given
console.log(getCandiesEaten(10, 3));

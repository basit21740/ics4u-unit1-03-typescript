/*
 * This is Microwave Program
 *
 * @author  Abdul Basit Butt
 * @version 1.0
 * @since   2022-02-19
 */

import promptSync from "prompt-sync"
const prompt = promptSync()


const subHeatingTime = 60.0
const soupHeatingTime = 105.0
const pizzaHeatingTime = 45.0

const userInput = prompt("What food item would you like to heat up? (soup, sub or pizza): ");

// Quantity

const quantityInputString = prompt("How many items would you like to heat up? ")
const quantityInput = parseFloat(quantityInputString);

// empty Check
try {
  if (quantityInput  <= 3 && quantityInput  >= 1) {
    if (userInput == "pizza") {
      // Output time for cooking pizzas
      const cookingTime0 = pizzaHeatingTime
        + (0.5 * pizzaHeatingTime * (quantityInput - 1));
      console.log("The food will be cooked in", cookingTime0, "seconds.");
    } else if (userInput == "sub") {
      // Output time for cooking subs
      const cookingTime1 = subHeatingTime
        + (0.5 * subHeatingTime * (quantityInput - 1));
      console.log("The food will be cooked in", cookingTime1, "seconds.");
    } else if (userInput == "soup") {
      // Output time for cooking cups of soup
      const cookingTime2 = soupHeatingTime
        + (0.5 * soupHeatingTime * (quantityInput - 1));
      console.log("The food will be cooked in", cookingTime2, "seconds.");
    } else {
      // Output if input is not one of the three foods
      console.log("ERROR: Invalid Input");
    }
  } else {
    console.log("ERROR: Invalid Input");
  }
  console.log("\nDone.");
}
finally { "" }


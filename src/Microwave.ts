/*
 * This is Microwave Program
 *
 * @author  Abdul Basit Butt
 * @version 1.0
 * @since   2022-02-19
 */

import promptSync from "prompt-sync"
const prompt = promptSync()
// Constants
const pizzaCookingTime = 0.75
const subCookingTime = 1
const soupCookingTime = 1.75
try {
    // Input
    console.log("Enter the food you would like cooked (pizza, sub or soup: ", function saveInput(foodChosen : any) {
        var foodChosenUpperCase = foodChosen.toUpperCase()
        console.log();
        console.log("Enter how many items you would like to be cooked: ", function saveInput(numberOfItems: any) {
            console.log()
            // Process and outputs
            if (numberOfItems <= 3 && numberOfItems >= 1) {
                if (foodChosenUpperCase == "PIZZA") {
                    // Output time for cooking pizzas
                    var cookingTime0 = pizzaCookingTime
                        + (0.5 * pizzaCookingTime * (numberOfItems - 1))
                    console.log("The food will be cooked in", cookingTime0, "minutes.")
                }
                else if (foodChosenUpperCase == "SUB") {
                    // Output time for cooking subs
                    var cookingTime1 = subCookingTime
                        + (0.5 * subCookingTime * (numberOfItems - 1))
                    console.log("The food will be cooked in", cookingTime1, "minutes.")
                }
                else if (foodChosenUpperCase == "SOUP") {
                    // Output time for cooking cups of soup
                    var cookingTime2 = soupCookingTime
                        + (0.5 * soupCookingTime * (numberOfItems - 1))
                    console.log("The food will be cooked in", cookingTime2, "minutes.")
                }
                else {
                    // Output if input is not one of the three foods
                    console.log("ERROR: Invalid Input")
                }
            }
            else {
                console.log("ERROR: Invalid Input")
            }
            console.log()
        })
    })
    // Catches and tells the user that an improper input was entered
}
catch (err) {
    console.log("ERROR: Invalid Input")
}

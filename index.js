// Follow the instructions for each section below.

// The functions you will be writing will all be modifying the array groceryList below.
// Leave it alone.
let groceryList = ["Milk", "Oreos"];

// Part 1 - Modularizing
// In this section, you will use the existing code and turn them into functions.
// Make sure to leave the console logs as part of the function.
// What each function returns will be specified.
// Test your functions as you go.
// Remember to name your functions appropriately, identify the input(s) (if any), and return what's specified.

//////////////////////////////////////////////////////////////////////
// 1. Create a function that adds an item to the list.
// Return the new item.
function addItem(item){
  groceryList.push(item);
  console.log("Item added:" + item);
  return item;
}
// Code to modularize:
let item = "Animal Crackers";
groceryList.push(item);
console.log("Item added: " + item);

//////////////////////////////////////////////////////////////////////
// 2. Create a function that removes the last item from the list.
// Return the removed item.
function removeLast(){
  console.log("Item removed:" + groceryList.pop());
  return removeLast;
};
// Code to modularize:
let itemToRemove = groceryList[groceryList.length - 1];
groceryList.pop();
console.log("Item removed: " + itemToRemove);

//////////////////////////////////////////////////////////////////////
// 3. Create a function that updates a specific item in the list.
// Return the updated item.
function updateItem(index, update){
  let old = groceryList[index];
  groceryList[index] = update;
 console.log("Updated item from: " + groceryList[index] + " to " + update);
 return updateItem;
};
// Code to modularize:
let indexToUpdate = 0;
let newItem = "Bananas";
let oldItem = groceryList[indexToUpdate];
groceryList[indexToUpdate] = newItem;
console.log("Item updated from " + oldItem + " to " + newItem);

//////////////////////////////////////////////////////////////////////
// 4. Create a function that shows the current grocery list.
// Returns the grocery list array.
function showList(){
  if(groceryList.length === 0){
    console.log("The grocery list is empty");
  }else{
    console.log ("Grocery List: " + groceryList);
  };
  return groceryList;
};

// Code to modularize:
if (groceryList.length === 0) {
  console.log("The grocery list is empty.");
} else {
  console.log("Grocery List: " + groceryList);
}

//////////////////////////////////////////////////////////////////////

// Part 2 - Add new features
// Now that you've modularized the existing code, it's time to add two new features.

//////////////////////////////////////////////////////////////////////
// 1. Write a function that logs how many items you have left in the list.
// It should log the following "The grocery list has x item(s).", with x being how many items are left.
// Returns the grocery list length.
function showCount(groceryList){
  return groceryList.length;
};
//////////////////////////////////////////////////////////////////////
// 2. Write a function that clears the whole grocery list.
// It should log the following "The grocery list is now empty."
// Returns the empty grocery list.
function clearList(groceryList){
  groceryList = [];
  return groceryList;
};
//////////////////////////////////////////////////////////////////////
// Part 3 - Calling Functions
// You want to create a charcuterie board so now it's time to call the functions you wrote in Part 1 and Part 2.
// Your goal is to achieve the console output below by calling your functions.
// Remember that your functions should've already included console logs, therefore you are only calling your functions NOT logging them below.

/*
// The grocery list is cleared
// Item added: Gouda Cheese
// Item added: Brie Cheese
// Item added: Swiss Cheese
// Item removed: Swiss Cheese
// Item added: Green Grapes
// Grocery List: Gouda Cheese, Brie Cheese, Green Grapes
// Item added: Prosciutto
// Item added: Chorizo
// Item added: Multigrain Crackers
// Item updated from Chorizo to Jamon
// The grocery list has 6 item(s)
// Item added: Pita Chips
// Grocery List: Gouda Cheese, Brie Cheese, Green Grapes, Prosciutto, Jamon, Multigrain Crackers, Pita Chips
*/

// Call 1: Clear the grocery list
clearList();
// Call 2: Add Gouda Cheese
addItem("Gouda Cheese");
// Call 3: Add Brie Cheese
addItem("Brie Cheese");
// Call 4: Add Swiss Cheese
addItem("Swiss CHeese");
// Call 5: Remove Swiss Cheese
removeLast();
// Call 6: Add Green Grapes
addItem("Green Grapes");
// Call 7: Show the list
showList();
// Call 8: Add Prosciutto
addItem("Prosciutto");
// Call 9: Add Chorizo
addItem("Chorizo");
// Call 10: Add Multigrain Crackers
addItem("Multigrain Crackers");
// Call 11: Update Chorizo to Jamon
updateItem(5, "Jamon");
// Call 12: Show the count of items
showCount;
// Call 13: Add Pita Chips
addItem("Pita Chips");
// Call 14: Show the final list
showList();
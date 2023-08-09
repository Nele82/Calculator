# Pocket-like calculator

## Overview

This is a basic calculator application with HTML, JavaScript, and a model-view-controller (MVC) structure. Users can input numbers and perform various calculations using it. 

## MVC architecture

As it's more or less known, the MVC architecture is used to build applications that are easier to test and maintain. As I mentioned in some of my other projects, there are 3x main components in the MVC architecture:

Model -- which represents the application's data
View -- which represents the user interface
Controller -- which represents the working logic of the application

With this in mind, the next paragraph will provide more detailed information about the MVC architecture implementation.

## How the code works ?

At first glance, one can't help but noticing that all MVC components are objects. Here's an overview of how the code works:

- Model (model): This object represents the data and state of the calculator.

addDigit: Holds the current digit being entered.
digit: Holds the accumulated digits for the current number.
operand: Holds the selected operation (e.g., '+', '-', 'X', '÷', '^').

- View (view): This object handles the user interface interactions and displays.

Various DOM elements are selected and stored as properties.
The listen function sets up event listeners for numbers, operations, calculations, and other actions.

- Controller (controller): This object contains the logic to manipulate the model and update the view.

addNumber: Appends a digit to the current number.
getDigit: Formats a number for display, including thousands separators and decimal points.
displayNumber: Updates the UI to show the current calculations and results.
basicCalc: Performs basic calculations using the stored operand and numbers.
addCalc: Handles additional calculations like percentage or square root.
selectCalc: Sets the selected operand and prepares for the next number input.
clearAll: Clears all data and resets the calculator.
removeAdigit: Removes the last digit from the current number.
Initialization (controller.start): The listen function from the view is called to set up event listeners.

I surely hope I made the code easier to understand. 

Enjoy!!!

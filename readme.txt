How the code works:

The code targets assignment expressions. It detects any assignment expression whose right hand side is a proper (ordered) sublist of the left hand side.
There's a function that extracts the properties into an ordered list.
Then those two lists are compared against each other. If the right list is a proper sublist of the left an error is shown.

Instructions:

put the input code in the "inputcode.js" file.

run "npm install"

run "node file1.js"
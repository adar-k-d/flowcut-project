# FlowCut
FlowCut is an application which groups together the shortcuts in your desktop under categories. This helps to declutter the desktop and make finding your required shortcut faster.

## STAGE 1 : PRELIMINARY
* Create a window with a transparent background, and make it non scalable. 
* Add a button to it, with appropriate padding. On click, print the message “Hello World” in the center of the window.


## STAGE 2 : BASIC FUNCTIONALITY
* Find out all the shortcuts in the desktop, and store their paths in a text file. Each filetype has its own text file.
* UI with a movable button, with a grid menu that is positioned relative to the button's position.
* When program is ran, hide the icons in the desktop.
### Current Limitations:
* The desktop context menu is inacessible due to electron occupying the whole screen.
* The buttons are complely static, ie, no dynamic groups
* The button can be dragged, but it has a delay as it follows the cursor

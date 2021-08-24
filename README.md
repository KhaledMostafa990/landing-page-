# Landing Page Project

## Instructions

The project has starter code some HTML and CSS styling to display a static version of the Landing Page project.

I'll need to convert this project from a static project to an interactive one.
This will require modifying the HTML and CSS files, but by JavaScript file.

landing page project are the first exam in Web Dev professional track nanodegree
by Udacity, eg FWD, itida.

the project are usful to practice on what we learn before through the nanodegree.
the landing also requier from us research to get some methods we are not learning yet.

##### requirments

## 1- add new section to html (not require javascript)

at first I declared a variables which I needs, and by the time I will add any helper function as I need

## 2- add list item and append it to unorder list on html

I build the nav list items and add it to navgation then styling it.
by use forEach method to loop over the sections and creates the items by use "data-nav" attrbuite in sections.

## -3 when click to any list item on navgation it should scroll to thier section (without "href${id}")

and through the loop over sections I used "addEvenListener" and "scrollInTo" methods to finsh it.

## 4- if any section in viewport through scrolling or not it should have class active-state.

by using for loop with getBoundingClientRect(), to defind which section in viewport through iterations, to add active class to every section near to top of viewport, and use event listener to do that through scrolling.

###### addtions (not required)

## 5- Add an active state to navigation items when a section is in the viewport.

set background color in css to class to make it as active state .
by using nested forEach loop on sections to get viewport and loop through the list items with viewport data on the section and use conditions to add/remove the active state to item in viewport.

## -6 build a button on fixed postions for scroll to the top of docuemnt

simply I created div and span , and style it's by ".cssText" property,
next to "scrollTo" method, to scroll in the top of document ,and hide it if you in top of document.

## -7 Hide fixed navigation bar while scrolling (it should still be present on page load).

by using event listener on scrolling I create a hidden class and toggle on it.

# final project link

https://khaledmostafa990.github.io/landing-page-udacirt-project/

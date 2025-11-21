var studentNames = []
var studentNames2 = new Array()
var strings = ["Ali", "Sara", "Ayesha"]
var numbers = [1, 2, 3, 4]
var booleans = [true, false, true]
var mixed = ["Ali", 20, true]

var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

for (var i = 0; i < educationQualifications.length; i++) {
    document.write(educationQualifications[i] + "<br>");
}
var students = ["Ali", "Sara", "Ahmed"];    
var scores = [400, 350, 480];                

var totalMarks = 500;
document.write("Score of " + students[0] + " is " + scores[0] + ". Percentage: " + (scores[0] / totalMarks * 100) + "%<br>");
document.write("Score of " + students[1] + " is " + scores[1] + ". Percentage: " + (scores[1] / totalMarks * 100) + "%<br>");
document.write("Score of " + students[2] + " is " + scores[2] + ". Percentage: " + (scores[2] / totalMarks * 100) + "%<br>");

var colors = ["Red", "Blue", "Green"];
document.write("Original Colors: " + colors + "<br><br>");


var a = prompt("Which color do you want to add at the beginning?");
colors.unshift(a);
document.write("After adding at beginning: " + colors + "<br><br>");


var b = prompt("Which color do you want to add at the end?");
colors.push(b);
document.write("After adding at end: " + colors + "<br><br>");



colors.unshift("Pink", "Yellow");
document.write("After adding two colors at beginning: " + colors + "<br><br>");


colors.shift();
document.write("After deleting first color: " + colors + "<br><br>");



colors.pop();
document.write("After deleting last color: " + colors + "<br><br>");


var indexAdd = prompt("At which index do you want to add a color?");
var colorAdd = prompt("Which color do you want to add?");
colors.splice(indexAdd, 0, colorAdd);
document.write("After adding color at index: " + colors + "<br><br>");


var indexDel = prompt("At which index do you want to delete color(s)?");
var delCount = prompt("How many colors do you want to delete?");
colors.splice(indexDel, delCount);
document.write("After deleting color(s): " + colors + "<br><br>");

var scores = [320, 230, 480, 120];   

document.write("Scores of Students: " + scores + "<br>");

scores.sort(); 

document.write("Ordered Scores of Students: " + scores + "<br>" );

var cities = [ "karachi" , "lahore" , "quetta" , "punjab" , "sakar"]

var selectedcities = cities.slice (0,3)

document.write(" cities list: " + "<br>" + cities + "<br>")
document.write( " selected cities: " + "<br>" + selectedcities +"<br>" )

var arr = ["This ", " is ", " my ", " cat"];

var singleString = arr.join(""); 

document.write(singleString + "<br>");

var devices =[ "mouse","keyboard","moniter" ] 
document.write( "devices:" + devices + "<br>" )
document.write("out:" + "<br>" + "mouse:" + "<br>" )
document.write("out:" + "<br>" + "keyboard:" + "<br>" )
document.write("out:" + "<br>" + "moniter:" + "<br>" )
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>"); 

for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}

document.write("</select>");


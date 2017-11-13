"use strict";
var root = document.documentElement; //easy access for root document elements

//Global variables for initial colour value
var neonlightcolor = "hsl(180, 100%, 50%)";

//Generates all the rainbow colours for the colour slider selector
function colorgenerator() {
    let colours = [],
        i;
    for (i = 0; i < 372; i++){
        colours[i] = 'hsl(' + i + ', 100%, 50%)';
        if (i > 359) {
            colours[i] = 'hsl(0, 100%, 100%)';
        }
    }
    colours = colours.toString();
    //console.log(colours);
    root.style.setProperty("--colours", colours);
}

//Apply the selected colour to Set Colout Button
var outputColourValue; // Global variable to be used on Colour selection;
function pickcolour() {
    var rainbowValue = document.getElementById("rainbow").value,
        colourname = document.getElementById("colourname"),
        setcolour = document.getElementById("setcolour"),
        outputColour;
    if (rainbowValue <= 360) {
        outputColour = 'hsl(' + rainbowValue + ', 100%, 50%)';
    } else {
        outputColour = 'hsl(0, 100%, 100%)';
    }
    setcolour.style.backgroundColor = outputColour;
    outputColourValue = Number(rainbowValue);
    colourname.innerHTML = outputColour;
}

//Apply the selected colour to background
function setcolour() {
    if ( Number.isNaN(outputColourValue) ) {
        setINITIALcolour();
    } else {
        if (outputColourValue > 360  && outputColourValue < 368) {
            neonlightcolor = '#fff';
        } else {
            neonlightcolor = 'hsl(' + outputColourValue + ', 100%, 50%)';
        }
    }
    root.style.setProperty("--neonlightcolor", neonlightcolor);
}

//Reset to Initial colour value
function setINITIALcolour() {
    neonlightcolor = "#222222";
    root.style.setProperty("--neonlightcolor", neonlightcolor);
}

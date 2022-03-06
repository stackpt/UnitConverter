let meter = 20;
let foot = 3.2808;
let lengthCalc1 = meter * foot; 
let lengthCalc2 = 0.3048 * meter;
let liters = 20;
let gallon = 0.2641;
let volumeCalc = liters * gallon;
let volumeCalc2 = 3.7854 * liters;
let kilograms = 20;
let pounds= 2.2046;
let massCalc = kilograms * pounds; 
let massCalc2 = 0.4535 * kilograms;



let meters = document.getElementById("meters");
meters.textContent = meter + " meters = " + lengthCalc1 + " feet | " + meter + " feet = " + lengthCalc2 + " meters" 

let volume = document.getElementById("liters");
volume.textContent = liters + " liters = " + volumeCalc + " gallons  | " + meter + " gallons  = " + volumeCalc2 + " liters" 

let mass = document.getElementById("kilos");
mass.textContent = kilograms + " kilos = " + massCalc + " pounds | " + kilograms + " pounds = " + massCalc2 + " kilos"
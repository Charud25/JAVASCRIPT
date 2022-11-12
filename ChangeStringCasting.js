var name = prompt("What is your name");

//slicing first character from entire string

var firstName = name.slice(0,1);

//changing the first letter to uppercase

var uppercaseFirstname = firstName.toUpperCase();

//isolating rest of the name

var restOfname = name.slice(1,name.length);

//adding both things now

var capatalisedName = uppercaseFirstname + restOfname ;

alert("Hello "+ capatalisedName + " !");


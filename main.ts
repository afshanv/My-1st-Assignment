  //////////////////////////////////////////////My Assignment
 //////////////////////////QUESTIONS:

 //////Question:1//////

 //instaling  Node.js, TypeScript and VS Code 

 ////// Question:2//////

// Store the person's name in a variable
 var personname ='fiza';
 var message ='would you like to learn some python today';
 console.log(personname + " " + message);

 ////// Question:3//////

 var personName = "fiza farooq";
 console.log("Lowercase:", personName.toLowerCase());
 console.log("Uppercase:", personName.toUpperCase());
 var titleCase = personName
     .toLowerCase()
     .split(' ')
     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
     .join(' ');
 console.log("Titlecase:", titleCase);

 //////Question:4//////
 var famousQuote = "A person who never made a mistake never tried anything new.";
 var author  = "Albert Einstein.";
 console.log(`${author} once said, "${famousQuote}"`);

 //////Question:5////

 var famous_person  = "Albert Einstein";
 var famous_Quote = "A person who never made a mistake never tried anything new.";
 var message = `${famous_person} once said, "${famousQuote}"`;
 console.log(message);

 //////Question:6////

 var personNameWithWhitespace = "\t \n John Doe \n \t";
 console.log("Name with Whitespace:", personNameWithWhitespace);
 var strippedName = personNameWithWhitespace.trim();
 console.log("Stripped Name:", strippedName);

 //////Question:7//////

// Addition to get 8
 var additionResult = 5 + 3;
 console.log("Addition:", additionResult);
 //Subtraction to get 8
 var subtractionResult= 10 - 2;
 console.log("Subtraction:", subtractionResult);
 //Multiplication to get 8
 var multiplicationResult = 4 * 2;
 console.log("Multiplication:", multiplicationResult);
 //Division to get 8
 var divisionResult = 16 / 2;
 console.log("Division:", divisionResult);

 //////Question:8//////

 console.log(5 + 3);
 console.log(10 - 2);
 console.log(4 * 2);
 console.log(16 / 2);

 //////Question:9//////

 var favoriteNumber = 7;
 var message = `My favorite number is ${favoriteNumber}.`;
 console.log(message);

 //////Question:10//////

       //program 1
 //Store your favorite number in a variable
 var favoriteNumber = 7;
 //Create a message revealing your favorite number
 var message = `My favorite number is ${favoriteNumber}.`;
 //Print the message
 console.log(message);

       //program 2
 //Addition to get 8
 var additionResult = 5 + 3;
 console.log("Addition:", additionResult);
 //Subtraction to get 8
 var subtractionResult= 10 - 2;
 console.log("Subtraction:", subtractionResult);
 //Multiplication to get 8
 var multiplicationResult = 4 * 2;
 console.log("Multiplication:", multiplicationResult);
 //Division to get 8
 var divisionResult = 16 / 2;
 console.log("Division:", divisionResult);

 ////////Question:11//////

 //Store the names of your friends in an array
 var names  = ["dua", "fatima", "laiba", "anoosha"];
 //Print each person's name by accessing each element in the list
 console.log("Friend 1:", names[0]);
 console.log("Friend 2:", names[1]);
 console.log("Friend 3:", names[2]);
 console.log("Friend 4:", names[3]);

 //////Question:12//////

//Store the names of your friends in an array
 var names = ["dua", "fatima", "laiba", "anoosha"];
 //Print a personalized message to each person
 names.forEach((name, index) => {
     console.log(`Hello ${name}, have a great day!`);
 });

 //////Question:13//////

 var favoriteTransportation = ["Tesla Model 3", "Harley-Davidson Street Glide", "Yamaha YZF-R6"];
 favoriteTransportation.forEach((transportation, index) => {
     console.log(`I would like to own a ${transportation}.`);
 });

 //////Question:14//////

 var guestList = ["Leonardo da Vinci", "Marie Curie", "Martin Luther King Jr."];
 guestList.forEach((guest, index) => {
     console.log(`Dear ${guest}, you are invited to join me for dinner. It would be an honor to have you at the table.`);
 });

 //////Question:15//////

 // Store the original guest list
 var originalGuestList = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];
 // Print the original invitations
 originalGuestList.forEach((guest, index) => {
     console.log(`Dear ${guest}, you are invited to join me for dinner. It would be an honor to have you at the table.`);
 });
 // Identify the guest who can't make it
 var guestWhoCantMakeIt = "Albert Einstein";
 // Replace the guest who can't make it with a new invitation
 var replacementGuest = "Marie Curie";
 var updatedGuestList = originalGuestList.map(guest => (guest === guestWhoCantMakeIt ? replacementGuest : guest));
 // Print the updated invitations
 updatedGuestList.forEach((guest, index) => {
     console.log(`Dear ${guest}, you are invited to join me for dinner. It would be an honor to have you at the table.`);
 });
 //Print the name of the guest who can't make it
 console.log(`${guestWhoCantMakeIt} regrets that they can't make it to dinner.`);

 ///////Question:16///////

 // Store the original guest list
 var originalGuestList = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];
 // Print the original invitations
 originalGuestList.forEach((guest, index) => {
     console.log(`Dear ${guest}, you are invited to join me for dinner. It would be an honor to have you at the table.`);
 });
 // Identify the guest who can't make it
 var guestWhoCantMakeIt = "Albert Einstein";
 // Replace the guest who can't make it with a new invitation
 var replacementGuest = "Marie Curie";
 var updatedGuestList = originalGuestList.map(guest => (guest === guestWhoCantMakeIt ? replacementGuest : guest));
 // Print the updated invitations
 updatedGuestList.forEach((guest, index) => {
     console.log(`Dear ${guest}, you are invited to join me for dinner. It would be an honor to have you at the table.`);
 });
 // Print the name of the guest who can't make it
 console.log(`${guestWhoCantMakeIt} regrets that they can't make it to dinner.`);
 // Inform that a bigger dinner table is found
 console.log("Good news! We found a bigger dinner table.");
 // Add new guests to the list
 var newGuests = ["Isaac Newton", "Marie Skłodowska Curie", "Newton"];
 updatedGuestList.unshift(newGuests[0]); // Add to the beginning
 updatedGuestList.splice(Math.floor(updatedGuestList.length / 2), 0, newGuests[1]); // Add to the middle
 updatedGuestList.push(newGuests[2]); // Add to the end
 // Print new invitations for the expanded guest list
 updatedGuestList.forEach((guest, index) => {
     console.log(`Dear ${guest}, you are invited to join me for dinner. It would be an honor to have you at the table.`);
 });

  //////Question: 17//////

 // Store the original guest list
 var originalGuestList = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];
 // Print the original invitations
 originalGuestList.forEach((guest, index) => {
     console.log(`Dear ${guest}, you are invited to join me for dinner. It would be an honor to have you at the table.`);
 });
 // Identify the guest who can't make it
 var guestWhoCantMakeIt = "Albert Einstein";
 // Replace the guest who can't make it with a new invitation
 var replacementGuest  = "Marie Curie";
 var updatedGuestList = originalGuestList.map(guest => (guest === guestWhoCantMakeIt ? replacementGuest : guest));
 // Print the updated invitations
 updatedGuestList.forEach((guest, index) => {
     console.log(`Dear ${guest}, you are invited to join me for dinner. It would be an honor to have you at the table.`);
 });
 // Print the name of the guest who can't make it
 console.log(`${guestWhoCantMakeIt} regrets that they can't make it to dinner.`);
 // Inform that a bigger dinner table is found
 console.log("Good news! We found a bigger dinner table.");
 // Add new guests to the list
 var newGuests = ["Isaac Newton", "Marie Skłodowska Curie", "Mahatma Gandhi"];
 updatedGuestList.unshift(newGuests[0]); // Add to the beginning
 updatedGuestList.splice(Math.floor(updatedGuestList.length / 2), 0, newGuests[1]); // Add to the middle
 updatedGuestList.push(newGuests[2]); // Add to the end
 // Print new invitations for the expanded guest list
 updatedGuestList.forEach((guest, index) => {
     console.log(`Dear ${guest}, you are invited to join me for dinner. It would be an honor to have you at the table.`);
 });
 // Inform that only two people can be invited
 console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people.");
 // Remove guests until only two names remain
 while (updatedGuestList.length > 2) {
     var removedGuest= updatedGuestList.pop();
     if (removedGuest) {
         console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
     }
 }
 // Print messages to the two people still on the list
 updatedGuestList.forEach((guest, index) => {
     console.log(`Dear ${guest}, you are still invited to join me for dinner. See you there!`);
 });
 // Remove the last two names from the list, making it empty
 updatedGuestList.splice(0, updatedGuestList.length);
 // Print the empty list
 console.log("Updated Guest List:", updatedGuestList);

 //////// Question: 18///////
 // Store the locations in an array
 var placesToVisit = ["Saudia Arab", "Paris", "Turkey", "Singapore", "Korea"];
 // Print the array in its original order
 console.log("Original Order:", placesToVisit);
 // Print the array in alphabetical order without modifying the actual list
 console.log("Alphabetical Order:", [...placesToVisit].sort());
 // Show that the array is still in its original order
 console.log("Original Order After Sorting:", placesToVisit);
 // Print the array in reverse alphabetical order without changing the order of the original list
 console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());
 // Show that the array is still in its original order
 console.log("Original Order After Reversing:", placesToVisit);
 // Reverse the order of the list
 placesToVisit.reverse();
 // Print the array to show that its order has changed
 console.log("Reversed Order:", placesToVisit);
 // Reverse the order of the list again
 placesToVisit.reverse();
 // Print the list to show it’s back to its original order
 console.log("Original Order After Second Reversal:", placesToVisit);
 // Sort the array so it’s stored in alphabetical order
 placesToVisit.sort();
 // Print the array to show that its order has been changed
 console.log("Alphabetical Order After Sorting:", placesToVisit);
 // Sort to change the array so it’s stored in reverse alphabetical order
 placesToVisit.sort().reverse();
 // Print the list to show that its order has changed
 console.log("Reverse Alphabetical Order After Sorting:", placesToVisit);

 //////Question: 19//////

 //Assuming you have a guestList array with your guests
 var guestList = ["Leonardo da Vinci", "Marie Curie", "Martin Luther King Jr."];
 // Print a message indicating the number of people invited to dinner
 console.log(`Number of People Invited to Dinner: ${guestList.length}`);

 //////Question: 20//////

// Store items in an array
 var myArray = ["k2", "Jhelum River", "Pakistan", "Karachi", "Urdu"];
 // Print the array
 console.log("My Array:", myArray);

 //////Question: 21//////

 //Create objects with various items
 var mountain = { name: "Mount Everest", height: 8848 };
 var river = { name: "Amazon River", length: 6575 };
 var country = { name: "United States", population: 331002651 };
 var city = { name: "Tokyo", population: 37977000 };
 var language = { name: "English", speakers: 1130000000 };
 //Print the objects
 console.log("Mountain:", mountain);
 console.log("River:", river);
 console.log("Country:", country);
 console.log("City:", city);
 console.log("Language:", language);

 //////Question: 22//////

 //Create an array
 var theArray = [1, 2, 3, 4, 5];
 // Intentionally produce an index error
 console.log("Attempting to access an out-of-bounds index:", theArray[10]);
 // Correct the error by accessing a valid index
 console.log("Accessing a valid index:", myArray[2]);

 //////// Question: 23//////////
 var car = 'subaru';
 // Test 1
 console.log("Is car == 'subaru'? I predict True.");
 console.log(car == 'subaru');
 // Test 2
 console.log("\nIs car === 'subaru'? I predict True.");
 console.log(car === 'subaru');
 // Test 3
 console.log("\nIs car == 'honda'? I predict False.");
 console.log(car == 'honda');
 // Test 4
 console.log("\nIs car === 'honda'? I predict False.");
 console.log(car === 'honda');

 ////// Question: 24//////

 var string1 = 'hello';
 var string2 = 'world';
 var number1 = 5;
 var number2 = 10;
 var array  = ['apple', 'banana', 'orange'];
 // Tests for equality and inequality with strings
 console.log("Equality Test for strings: 'hello' == 'world'? I predict False.");
 console.log(string1 == string2);
 console.log("\nInequality Test for strings: 'hello' != 'world'? I predict True.");
 console.log(string1 != string2);
 // Tests using the lower case function
 console.log("\nLowercase Test: Is 'Hello' lowercase? I predict False.");
 console.log(string1.toLowerCase() == 'hello');
 // Numerical tests
 console.log("\nNumerical Equality Test: 5 == 10 / 2? I predict True.");
 console.log(number1 == number2 / 2);
 console.log("\nGreater Than Test: 10 > 5? I predict True.");
 console.log(number2 > number1);
 console.log("\nLess Than Test: 5 < 10? I predict True.");
 console.log(number1 < number2);
 console.log("\nGreater Than or Equal To Test: 5 >= 5? I predict True.");
 console.log(number1 >= number1);
 console.log("\nLess Than or Equal To Test: 10 <= 5? I predict False.");
 console.log(number2 <= number1);
 // Tests using "and" and "or" operators
 console.log("\nLogical AND Test: Is 5 < 10 and 10 > 2? I predict True.");
 console.log(number1 < number2 && number2 > 2);
 console.log("\nLogical OR Test: Is 5 > 10 or 10 > 2? I predict True.");
 console.log(number1 > number2 || number2 > 2);
 // Test whether an item is in an array
 var fruitToCheck = 'banana';
console.log(`\nString Inclusion Test: Does '${array.join(', ')}' contain '${fruitToCheck}'? I predict True.`);
console.log(array.join(', ').includes(fruitToCheck));

var fruitToCheckNotIn = 'grape';
console.log(`\nString Exclusion Test: Does '${array.join(', ')}' not contain '${fruitToCheckNotIn}'? I predict True.`);
console.log(!array.join(', ').includes(fruitToCheckNotIn));

//////Question: 25//////

// version 1
var alien_color = 'green';

// If statement to test whether the alien's color is green
if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
}
// version 2
var alien_color = 'red';

// If statement to test whether the alien's color is green
if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Clobal Variable for writePassword Function//
var passLength;
var upperCase;
var lowerCase;
var numberConfirm;
var characterConfirm;
var newArray;


//Arrays for password selection//
    
    //upper and lowe case characters//
    var characterUp =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    
    var characterlow = ['a','b','c','d','e','f','g','h','i','j','k','k','l','m','n','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    //numeric characters//
    var numeric = [0,1,2,3,4,5,6,7,8,9];
    
    //special characters//
    var specialCharacter = ['\~','\!','\@','\$','\%','\^','\&','\*','\=','\+'];

            //Checks that arrays are working//
           
            console.log(numeric);
            console.log(specialCharacter);



//Password Length Function//
function lengthInput (){
    
    //Prompts User for Password Length
    var x =window.prompt('Your password can contain between 8-128 characters: How long do you want your password?', '8-128');
    //Turns Password Length from String to Num//
    pL = parseInt(x);

    //Confirms Type of Int//
    console.log(typeof pL);

    //Verifying parameters of password length//

    if(pL >= 8 || pL >= 128){
            
            console.log(pL);
            console.log(typeof pL);
            passLength = pL;
            console.log(passLength);
            console.log(typeof passLength);


    }else if (pL < 8 || pL > 128){
        alert("You need to choose a number between 8-128. Press Generate passwork again to try again");
    }
}


function CapsChar(){

    var n =confirm("Would you like upper case characters in your password?");

    console.log(n);
    console.log(typeof n);

    upperCase= n;

    console.log(numberConfirm);
    console.log(typeof numberConfirm);


}

function LowChar(){

    var n = confirm("Would you like lower case characters in your password?");

    console.log(n);
    console.log(typeof n);

    lowerCase= n;



}



//Numbers in Password Function//

function numberInclude(){

    var n =confirm("Would you like to include numbers in your password?");

    console.log(n);
    console.log(typeof n);

    numberConfirm = n;

    console.log(numberConfirm);
    console.log(typeof numberConfirm);


}


//Special Characters in Password Function//
function characterInclude(){

    var s =confirm("Would you like to include special characters in your password?");

    console.log(s);
    console.log(typeof s);

    characterConfirm = s;

    console.log(characterConfirm);
    console.log(typeof characterConfirm);


}


// Write password to the #password input//

function userPasswordOptions() {
    // event.preventDefault();

    //Length of Password//
     lengthInput();
     console.log(passLength);
     CapsChar();

     LowChar();
    //Number Included or Not//
     numberInclude();
     console.log(numberConfirm);
    //Special Char. Included or Not//
    characterInclude();
    console.log(characterConfirm);

    var passwordOptions = {
        length: passLength,
        numbers: numberConfirm,
        specialChars: characterConfirm,
        upperCase: upperCase,
        lowerCase: lowerCase
    }

    //if statement needs to check if all variables are false 

    if(numberConfirm == true && characterConfirm ==true){
        //perform funtion//
        console.log("number is true, character is true");
        
    }else if (numberConfirm ==true && characterConfirm == false){
        //perform function//
        newArray = characterUplow[Math.floor(Math.random() * characterUplow.length)];
        console.log(newArray);

        console.log("number is true, character is false");

    }else if (numberConfirm ==false && characterConfirm == true){

        //perform function//
        console.log("number is false, character is true");
    }

    return passwordOptions;

           
            

//   

    //I want to produce a password//

    //I want to identify arrays to be used//

    //I want to select at random one item from each array and put them into a new array//

    //I want to then select a item from each specified array and push them into new array 'n' times until new array is equal to passLength//

    //I want to take the new array and print text into aria-label box//



}

function generatePassword(){

    var userOptions = userPasswordOptions();

    //create an empty array to store password results
    var finalPass = [];

    var chosenChars = [];

    if(userOptions.numbers){
        chosenChars.push(random(numeric))
    }

    if(userOptions.specialChars){
        chosenChars.push(random(specialCharacter))
    }
    console.log(chosenChars);

    //add if statements for upper case and lower case chars

    //then loop through the userOptions.legnth

    //in the loop we need to randomize the chosenChars array and push them into the final pass array

    //last we need to return the final pass array and convert into a string **google how to turn an array into a string with javascript
}

function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function random(a){
    var b = Math.floor(Math.random() * a.length);
    return a[b];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
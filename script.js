// Assignment Code
var generateBtn = document.querySelector("#generate");

//Clobal Variable for writePassword Function//
var passLength;
var upperCase;
var lowerCase;
var numberConfirm;
var characterConfirm;
var newArray;
var length;


//Arrays for password selection//
    
    //upper and lowe case characters//
    var characterUp =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    
    var characterLow = ['a','b','c','d','e','f','g','h','i','j','k','k','l','m','n','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
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
        return;
    }
}


function CapsChar(){

    if (passLength >= 8 || passLength <= 128){

    var n =confirm("Would you like upper case characters in your password?");

    console.log(n);
    console.log(typeof n);

    upperCase= n;

    console.log(upperCase);
    console.log(typeof upperCase);
    }else{

    }
    return;

}

function LowChar(){
    if (passLength >= 8 || passLength <= 128){
    var n = confirm("Would you like lower case characters in your password?");

    console.log(n);
    console.log(typeof n);

    lowerCase= n;
    }else{

    }
    return;
}


//Numbers in Password Function//

function numberInclude(){
    if (passLength >= 8 || passLength <= 128){
    var n =confirm("Would you like to include numbers in your password?");

    console.log(n);
    console.log(typeof n);

    numberConfirm = n;

    console.log(numberConfirm);
    console.log(typeof numberConfirm);
    }else{

    }return;

}


//Special Characters in Password Function//
function characterInclude(){
    if (passLength >= 8 || passLength <= 128){
    var s =confirm("Would you like to include special characters in your password?");

    console.log(s);
    console.log(typeof s);

    characterConfirm = s;

    console.log(characterConfirm);
    console.log(typeof characterConfirm);
    }else{

    }return;

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
    if (numberConfirm == false && characterConfirm == false && characterConfirm == false && upperCase == false && lowerCase == false){
        alert("You must choose at least one of the specified options to receive a password");
     }

    return passwordOptions;

}

function generatePassword(){

    var userOptions = userPasswordOptions();
    //create an empty array to store password results
    var finalPass = [];

    var chosenChars = [];
    var selectedArray = [];

    //input one of each selected password item//
    console.log(userOptions.length);

    do{
            
            if(userOptions.numbers){
                if (chosenChars.length < userOptions.length){
                chosenChars.push(random(numeric));
            }
            }

            if(userOptions.specialChars){
                if (chosenChars.length < userOptions.length){
                chosenChars.push(random(specialCharacter));
                }
            }
      

            if(userOptions.upperCase){
                if(chosenChars.length < userOptions.length){

                chosenChars.push(random(characterUp));
                }
            }

            if(userOptions.lowerCase){
                if (chosenChars.length < userOptions.length){

                chosenChars.push(random(characterLow))
                }
            }
        }while(chosenChars.length < userOptions.length);
            console.log(chosenChars);




    // var finalPass = userOptions;

    // console.log(finalPass);
    
    //then loop through the userOptions.length

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
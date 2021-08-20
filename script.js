// Assignment Code
var generateBtn = document.querySelector("#generate");

//Clobal Variable for writePassword Function//
var passLength = '';
var numberConfirm = '';
var characterConfirm = '';


//Arrays for password selection//
    
    //upper and lowe case characters//
    var characterUplow = ['a','b','c','d','e','f','g','h','i','j','k','k','l','m','n','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
    //numeric characters//
    var numeric = [0,1,2,3,4,5,6,7,8,9];
    
    //special characters//
    var specialCharacter = ['\~','\!','\@','\$','\%','\^','\&','\*','\=','\+'];

            //Checks that arrays are working//
            console.log(characterUplow);
            console.log(numeric);
            console.log(specialCharacter);



//Password Length Function//
function lengthInput (){
    
    //Prompts User for Password Length
    var x = window.prompt('Your password can contain between 8-128 characters: How long do you want your password?', '8-128');
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


//Numbers in Password Function//

function numberInclude(){

    var n =window.confirm("Would you like to include numbers in your password?");

    console.log(n);
    console.log(typeof n);

    numberConfirm = n;

    console.log(numberConfirm);
    console.log(typeof numberConfirm);


}


//Special Characters in Password Function//
function characterInclude(){

    var s =window.confirm("Would you like to include special characters in your password?");

    console.log(s);
    console.log(typeof s);

    characterConfirm = s;

    console.log(characterConfirm);
    console.log(typeof characterConfirm);


}


// Write password to the #password input//

function writePassword(event) {
    event.preventDefault();

    //Length of Password//
     lengthInput();
    //Number Included or Not//
     numberInclude();
    //Special Char. Included or Not//
    characterInclude();
           
            

  var password = generatePassword();

    //I want to produce a password//

    //I want to identify arrays to be used//

    //I want to select at random one item from each array and put them into a new array//

    //I want to then select a item from each specified array and push them into new array 'n' times until new array is equal to passLength//

    //I want to take the new array and print text into aria-label box//


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
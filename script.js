// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength = '';

//I want to declare the constant values I will be working with//
    
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


//When generateBtn clicked I want to prompt the user asking how long they want their passord//
    //min 8, max128//

        //I want to store this number and turn it into the length of an array with a variable name pswdLength//



// User is promted and confirms/ rejects upper and lower case//

    //Confirming stores Bool as true//
    //Rejecting stores Bool as false//

        // I want to store this Bool//

            // True or false will determine if the upper/lowercase array will apply//

//User is prompted and confirms/rejects numeric characters//

    //Confirming stores Bool as true//
    //Rejecting stores Bool as false//

        //I want to store this Bool//

            //True or false will determine if the numeric characters array will apply//



//User is prompted and confirms/rejects special characters//

    //Confirming stores Bool as true//
    //Rejecting stores Bool as false//

        //I want to store this Bool//

            //True or False will determine if the special characters will apply//


// Confirm all selected parameters//

//Combine all applicaple arrays together//

//Randomly select from arrays until specified length given by user is reached//




// Write password to the #password input//

function writePassword(event) {
    event.preventDefault();

    //Length of Password//

        //When generateBtn clicked I want to prompt the user asking how long they want their passord//
            var x = window.prompt('Your password can contain between 8-128 characters: How long do you want your password?', '8-128');
            pL = parseInt(x);
            console.log(typeof pL);
            //min 8, max128//

                //Creating Array to specified length

                if(pL >= 8 || pL >= 128){
                         
                        console.log(pL);
                        console.log(typeof pL);
                        passLength = pL;
                        console.log(passLength);
                        console.log(typeof passLength);


                }else if (pL < 8 || pL > 128){
                    alert("You need to choose a number between 8-128. Press Generate passwork again to try again");
                }
            
                        

                //I want to store this number and turn it into the length of an array with a variable name pswdLength//

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
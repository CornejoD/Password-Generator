// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword()
{
  var numChar = window.prompt("How many characters would you like in your password: ");
  var incSpecial = window.confirm("Would you like to use numbers/special characters");

  var letterOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split('');
  var numbersOptions = "0123456789!#$%&'*,-.?@^_~".split('');

  function randomIndex(max)
  {
      return (Math.floor(random() * max) + 1);
  }

  if(incSpecial == true)
  {
    combinedOptions = letterOptions.concat(numbersOptions)

    var password = "";

    for (var i = 0; i <= numChar; i++)
    {
        var j = randomIndex(combinedOptions.length);
        password += combinedOptions[j];
    }
    return password;
  }
  else 
  {
    var password = "";

    for (var i = 0; i <= numChar; i++)
    {
        var j = randomIndex(letterOptions.length);
        password += letterOptions[j];
    }
    return password;
  }
}

function validateSyntax() {
    let input = document.getElementById('petInput').value;
    const regex = /^pet_[a-zA-Z0-9]+$/; //  Validation logic 
    let result = ''; 

   const resultElement = document.getElementById("result")
   result = regex.test(input) ? "Valid Syntax" : "Invalid Syntax";  // Validation logic 

   console.log(result); //Tested my Input using the console log 
 
   document.getElementById('result').innerText = result;
}



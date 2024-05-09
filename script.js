function validateSyntax() {
    let input = document.getElementById('petInput').value;
    const regex = /^pet_[a-zA-Z0-9]+$/; //  Validation logic 
    let result = ''; 

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
 
            document.getElementById('result').innerText = result;
}



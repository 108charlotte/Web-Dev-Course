function greetName() {
    // like css, we have to include semicolons after each line
    // this line assigns the form value for the input "name" to the variable "name" which is constant, meaning it cannot be redefined/changed
    const name = document.getElementById("name").value; 

    greeting = document.getElementById("greeting"); 
    message = "Hello " + name + "!"; 

    greeting.innerText = message; 
}
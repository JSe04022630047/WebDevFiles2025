let nameInput = document.getElementById('name-input') as HTMLInputElement;
let greetingButton = document.getElementById('greet-button') as HTMLButtonElement;
let resultOutput = document.getElementById('result-output') as HTMLParagraphElement;

// function that is used to greet people? why do we need this?

if (nameInput && greetingButton && resultOutput) {
  greetingButton.addEventListener("click", ()=> {
    let name: string = nameInput.value;
    if (name){
      resultOutput.textContent = `Hello, ${name}`;
    } else {
      resultOutput.textContent = `Please input your name`
    }
  });
} else {
  console.error("Element not found.");
}
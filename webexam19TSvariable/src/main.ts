//import './style.css'

const myName: string = "John Doe";
let myAge: number = 22;
const isHappy: boolean = true;

document.querySelector<HTMLDivElement>('#output')!.innerHTML = `
  <div class="container p-8 w-1/2 bg-red-500 rounded mx-auto text-white">
    <h1 class="text-3xl font-bold text-center">Basic Variables </h1>
    <div class="container flex justify-center flex-col">
      <p>Name: ${myName}</p>
      <p>Age: ${myAge}</p>
      <p>IsHappy: ${isHappy ? 'Yes' : 'no'}</p>
    </div>
    </div>
`

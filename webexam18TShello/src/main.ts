
let myName: string = "John Doe"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>My name is ${myName}</h1>    
  </div>
`

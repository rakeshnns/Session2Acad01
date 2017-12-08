//Function.ts for Assignment1 of Session2

function submit(){

  //Input value from HTML page  
  let name = (<HTMLInputElement>document.getElementById("Ename")).value;
  let age = parseInt((<HTMLInputElement>document.getElementById("Eage")).value);

//Fatarrow function having one sting and number para and return value is of string
let result = (name:string, age:number) :string => `Name entered is ${name} and Age is ${age}`;


//Populating back to the HTML document.
let el:HTMLElement = document.getElementById('Result');
el.innerHTML = result(name,age);

}
/*End of main Function*/
//Function.ts for Assignment1 of Session2
function submit() {
    var name = document.getElementById("Ename").value;
    var age = parseInt(document.getElementById("Eage").value);
    /*function Returnf(name:string, age:number):{Name:string; Age:number}{
           return{Name:name, Age:age};
    }*/
    var result = function (name, age) { return "Name entered is " + name + " and Age is " + age; };
    var el = document.getElementById('Result');
    el.innerHTML = result(name, age);
}
/*End of main Function*/ 

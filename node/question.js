<<<<<<< HEAD
let str= `string`;
for (var i = 0; i < str.length; i++){
  console.log(str[(str.length -1) - i])
}
=======
var rl = require('readline');
var input = rl.createInterface(process.stdin, process.stdout)


var Person = {
  name : '',
  age : 0
}


input.question(`what is your name? `, function(name){
  Person.name=name
  console.log(`Hi ${Person.name}`)
  input.setPrompt(`How old are you`)
  Person.age=input.prompt()

  console.log(`you are ${Person.age}`)
  //input.close()
})
>>>>>>> abada368a8b6c3941fc666a846ecd5f2f365018c

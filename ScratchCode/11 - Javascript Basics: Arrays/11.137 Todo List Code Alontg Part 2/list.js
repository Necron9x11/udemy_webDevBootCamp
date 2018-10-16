let todos = ["Buy New Turtle"];

window.setTimeout(function() {
  let input = prompt("What would you like to do?");

  while(input !== "quit"){
    //handle input
    if(input === "list") {
        console.log(todos);
    } else if(input === "new") {
      //ask for new list
      var newTodo = prompt("Enter new todo");
      //add to todos array
      todos.push(newTodo);
    }

    //ask again for new input
    input = prompt("What would you like to do?");
  }
  console.log("OK, YOU QUIT THE APP")

}, 500);

//
// 'use strict';
//
// let todo = [];
// let isActive = true;
//
// function add() {
//     const value = prompt('Enter a new todo');
//     todo.push(value);
// }
//
// function list() {
//     console.log(todo);
// }
//
// function quit() {
//     todo = [];
//     isActive = false;
// }
//
// async function controller() {
//     while(isActive) {
//         const method = await prompt('What would you like to do?');
//
//         switch(method) {
//             case 'add' : add();  break;
//             case 'list': list(); break;
//             case 'quit': quit(); break;
//         }
//     }
// }
//
// window.onload = controller();
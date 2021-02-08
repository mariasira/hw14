const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');

xhr.send();

xhr.onload = function getToDos() {
    const jsonToDos = xhr.response;
    const toDos = JSON.parse(jsonToDos);
    toDos.map((toDo) => {
        console.log(toDo);
    });
    
    showToDos(toDos);
  }


function showToDos(toDos) {
    const div = document.querySelector('.list');
    const ul = document.createElement('ul');
    div.appendChild(ul);
    toDos.map((toDo) => {
       for (let i = 0; i < toDos.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = toDos[i].title;
        ul.appendChild(listItem);
        if (toDos[i].completed===false){
        listItem.classList.add('background-red');
        }
        listItem.classList.add('background-green');
        }
    })
}
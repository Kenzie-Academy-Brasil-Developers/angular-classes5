// #texto
// #conteudo

//Selecionei tudo que eu precisava!
const titleField = document.querySelector("#title"); //Campo de título
const contentField = document.querySelector("#content"); //Campo de conteúdo
const form = document.querySelector("#form"); //Formulário
const todoList = document.querySelector("#todo-list"); //Lista

function submit(e){
    e.preventDefault(); //Prevenir o comportamento padrão.

    const item = document.createElement('li'); // Criei um elemento li
 
    item.innerHTML = `
        <h3>${titleField.value}</h3>
        <p>${contentField.value}</p>   
    `; // Modelei com innerHTML

    todoList.appendChild(item); // Joguei o elemento dentro da lista

    titleField.value = ""; // Limpei o campo de título
    contentField.value = ""; //Limpei o campo de conteúdo
}

form.addEventListener("submit", submit); //Adicionei a função de submit ao formulário

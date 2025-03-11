//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const inputName = document.getElementById('amigo');
const nameList = document.querySelector('#listaAmigos');
const result = document.querySelector('#resultado');

adicionarAmigo = () => {
    if (inputName.value === '') {
        alert('Por favor, insira um nome válido!');
        return;
    }

    const name = inputName.value;
    if (name) {
        const li = document.createElement('li');
        li.textContent = name;
        nameList.appendChild(li);
        inputName.value = '';
    }
}

sortearAmigo = () => {
    if (nameList.children.length === 0) {
        alert('Por favor, insira os seus amigos!');
        return;      
    }

    if (nameList.children.length === 1) {
        alert('Por favor, insira mais de 1 amigo para sortear o amigo secreto!');
        return;      
    }

    const amigos = Array.from(nameList.children);
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    result.textContent = `O amigo secreto sorteado é: ${amigoSecreto.textContent}`;
    amigos.forEach(element => nameList.removeChild(element));
    inputName.value = '';
}
const idButaum = document.getElementById('butaumEnviar');
const tarefas = [
  {
    nome: 'Fazer café',
    id: '1',
  },
  {
    nome: 'Estudar',
    id: '2',
  },
  {
    nome: 'Fazer exercícios',
    id: '3',
  },
];

function geraTarefas() {
  for (let tarefa of tarefas) {
    addTarefa(tarefa);
  }
};
geraTarefas();

function addTarefa(frela) {
  const ul = document.getElementById('listaFrela');
  const li = document.createElement('li');
  const iEdit = document.createElement('i');
  const iDelete = document.createElement('i');
  const actions = document.createElement('div');

  iDelete.className = 'bx bx-trash';
  iEdit.className = 'bx bx-edit';

  iEdit.onclick = function () {
    modal.showModal();
    document.getElementById('id_EditTask').value = frela.id;
    document.getElementById('new_nameTask').value = frela.nome;
  };
  iDelete.onclick = function () {
    tarefas.splice(tarefas.indexOf(frela), 1);
    removerElemento();
  };

  li.id = frela.id;
  li.textContent = ' # ' + frela.id + ' → ' + frela.nome;
  actions.appendChild(iEdit);
  actions.appendChild(iDelete);
  li.appendChild(actions);
  ul.appendChild(li);
  
};

idButaum.addEventListener('click', (e) => {
  const ul = document.getElementById('listaFrela');
  const input = document.getElementById('idFrela');
  const nextID = tarefas.length + 1;
  e.preventDefault();

  tarefas.push({
    nome: input.value,
    id: nextID.toString(),
  });
  input.value = '';
  addTarefa(tarefas[tarefas.length - 1]);
});

/* Fim area de adição de tasks */

/* const idButaum2 = document.getElementById('butaumRemover'); */

function removeTask() {
  const inputRemover = parseInt(document.getElementById('idRemover').value, 10) - 1;
  const input = document.getElementById('idRemover');
  // Função parseInt para converter para número inteiro	
  if (inputRemover >= 0 && inputRemover < tarefas.length) {  // Validar IDs ao remover
    tarefas.splice(inputRemover, 1);
    input.value = '';
    atualizarIDs();
    removerElemento();
    
  } else {
    alert('ID inválido!');
    input.value = '';
  }
}

function atualizarIDs() {  // Mudança: Função nova para atualizar IDs após remoção
  tarefas.forEach((tarefa, index) => {
    tarefa.id = (index + 1).toString();
  });
}

function removerElemento() {
  const alvo = document.getElementById('listaFrela');
  alvo.innerHTML = '';
  geraTarefas();
};

/* idButaum2.addEventListener('click', (e) => {
  e.preventDefault();
  removeTask();
}); */

/* Fim area de remoção de tasks */
const edit_Task = document.querySelector("#editTask")
const save_editarTask = document.querySelector("#save_editTask")

edit_Task.onclick = function () {
  modal.showModal();
}

save_editarTask.onclick = function (e) {
  modal.close();
  e.preventDefault();
  const id_Edit = document.getElementById('id_EditTask').value;
  const name_Edit = document.getElementById('new_nameTask').value;
  const input = document.getElementById('id_EditTask');
  const input2 = document.getElementById('new_nameTask');
  input.value = '';
  input2.value = '';

  alterarItem(tarefas, id_Edit, name_Edit);
}

function alterarItem(array, id, new_Name) {
  const tarefa = array.find(item => item.id === id);
  if (tarefa) {
    tarefa.nome = new_Name;
    removerElemento();
  }else{
    alert('Tarefa não encontrada!');
  }
  
}
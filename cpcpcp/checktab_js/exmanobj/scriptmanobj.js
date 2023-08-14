const tarefas = [];

 

function adicionarTarefa(descricao, autor, departamento, importancia) {

  const tarefa = {

    descricao,

    autor,

    departamento,

    importancia,

    valor: 0,

    duracao: 0,

    concluida: false

  };

 

  tarefas.push(tarefa);

  exibirTarefas();

}

 

function excluirTarefa(index) {

  tarefas.splice(index, 1);

  exibirTarefas();

}

 

function ordenarPorImportancia() {

  const tarefasOrdenadas = [...tarefas].sort((a, b) => a.importancia - b.importancia);

  const listaImportancia = tarefasOrdenadas.map(tarefa => tarefa.descricao);

  alert("Lista de Tarefas por Ordem de Importância:\n\n" + listaImportancia.join("\n"));

}

 

function exibirTarefas() {

  const tableBody = document.getElementById("tarefasTableBody");

  tableBody.innerHTML = "";

 

  tarefas.forEach((tarefa, index) => {

    const row = document.createElement("tr");

    row.innerHTML = `

      <td>${tarefa.descricao}</td>

      <td>${tarefa.autor}</td>

      <td>${tarefa.departamento}</td>

      <td>${tarefa.importancia}</td>

      <td>${tarefa.valor}</td>

      <td>${tarefa.duracao}</td>

      <td>${tarefa.concluida ? "Sim" : "Não"}</td>

      <td><button onclick="excluirTarefa(${index})">Excluir</button></td>

    `;

    tableBody.appendChild(row);

  });

}

 

document.getElementById("novaTarefaBtn").addEventListener("click", () => {

  const descricao = prompt("Digite a descrição da tarefa:");

  const autor = prompt("Digite o autor da tarefa:");

  const departamento = prompt("Digite o departamento da tarefa:");

  const importancia = prompt("Digite a importância da tarefa:");

 

  adicionarTarefa(descricao, autor, departamento, importancia);

});

 

document.getElementById("ordenarImportanciaBtn").addEventListener("click", () => {

  ordenarPorImportancia();

});

 

exibirTarefas();

 
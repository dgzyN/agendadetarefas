// Função para adicionar uma nova tarefa
function addTask() {
    const tasksDiv = document.getElementById("tasks");
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    // Campo de entrada para a descrição da tarefa
    const taskDescription = document.createElement("input");
    taskDescription.type = "text";
    taskDescription.placeholder = "Descrição da tarefa";
    
    // Campo de entrada para agendar horário
    const taskTime = document.createElement("input");
    taskTime.type = "time";

    // Caixa de seleção para marcar tarefa como feita
    const taskDone = document.createElement("input");
    taskDone.type = "checkbox";

    // Adiciona todos os elementos ao div da tarefa
    taskDiv.appendChild(taskDescription);
    taskDiv.appendChild(taskTime);
    taskDiv.appendChild(taskDone);

    // Adiciona a tarefa ao div de tarefas
    tasksDiv.appendChild(taskDiv);
}
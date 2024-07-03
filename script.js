$(document).ready(function() {
    $('#task-form').on('submit', function(event) {
        event.preventDefault(); // Evita o comportamento padrão de submissão do formulário

        var taskText = $('#task-input').val(); // Pega o valor do input
        if (taskText.trim() !== '') {
            var taskItem = $('<li></li>').text(taskText); // Cria um novo elemento <li> com o texto da tarefa
            $('#task-list').append(taskItem); // Adiciona o novo item à lista de tarefas
            $('#task-input').val(''); // Limpa o campo de input
        }
    });

    // Adiciona o efeito de linha em cima do texto ao clicar no item
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
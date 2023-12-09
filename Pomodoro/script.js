// Configuración reloj
const reloj = document.querySelector('#reloj');
let tiempo = 0.1 * 60;
let minutos;
let segundos;



// Configuración tareas
const lista = [];
const guardarBtn = document.querySelector('#guardar');
const tareaInput = document.querySelector('#tarea');
const tasks = document.querySelector('#tasks');

guardarBtn.addEventListener('click', e => {
    e.preventDefault();

    if (tareaInput.value === '') {
        alert('Ingresa el título de la tarea');
    } else {
        const newTask = {
            id: (Math.random() * 100).toString(36).slice(3),
            title: tareaInput.value,
            completed: false,
        };
        lista.push(newTask);
        ItemTask(lista);
        tareaInput.value = '';
    }
});

function ItemTask(lista) {
    tasks.innerHTML = '';

    const tareas = lista.map(item => {
        return (
            `
      ${item.title}
      <input type="button" value="Start" class="btn btn-success btnI" data-id="${item.id}">
      `
        );
    });

    tareas.forEach(element => {
        const div = document.createElement('div');
        div.classList = 'mb-2 d-flex justify-content-between align-items-center';
        div.innerHTML = element;
        tasks.appendChild(div);

        const startButton = div.querySelector('.btnI');
        const taskId = startButton.getAttribute('data-id');

        startButton.addEventListener('click', function () {
            startButton.value = 'En progreso......';
            startButton.classList='disabled bg-warning rounded-3 border-0'
            const task = lista.find(item => item.id === taskId);
            iniciarReloj(task, div);
        });
    });
}

function iniciarReloj(task, div) {
    let tiempo = 0.1 * 60; // Tiempo de la tarea en segundos

    const temporizador = setInterval(() => {
        minutos = parseInt(tiempo / 60);
        segundos = parseInt(tiempo % 60);
        tiempo--;

        if (minutos == 0 && segundos == 0) {
            clearInterval(temporizador);
            const alarma = new Audio('trabar-carro-alarma-auto-.mp3');
            alarma.play();
            div.innerHTML = ` 
            <div class="alert alert-info" role="alert">
                <strong>Tarea</strong> Terminada
            </div>`

            const index = lista.findIndex(item => item.id === task.id);
            if (index !== -1) {
                lista.splice(index, 1);
                setTimeout(()=>{div.innerHTML=''},2000)
            }
           

        }

        reloj.textContent = `${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
    }, 1000);
}
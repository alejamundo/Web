const inputEvento = document.querySelector('#inputEvento');
const inputDate = document.querySelector('#inputDate');
const listaEventos = document.querySelector('#listaEvent');
const btnSubmit = document.querySelector('#btnSubmit');
let htmlLista = [];
let lista = [];
//obtener data de localstore
const json = load();
const arr = JSON.parse(json);//paso a objeto la data
lista = arr ? [...arr] : [];//almaceno lada en la lista
renderLista(difDate())


btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    if (inputEvento.value !== '' && inputDate.value !== '') {

        if (difDate() > 0) {
            const newEvent = {
                id: (Math.random() * 100).toString(36).slice(3),
                evento: inputEvento.value,
                fecha: inputDate.value,
                dif: difDate(),
            }

            listaEventos.innerHTML = '';
            lista.push(newEvent);

            //Almacenar informacion en el local store 
            save(JSON.stringify(lista));//almaceno la lista en el local estore pasandola como strinf

            renderLista();
        } else {
            alert('Ingrese una fecha superios a la actual')
        }
    } else {
        alert('Debe ingresar un evento y fecha');
    }
});

function difDate() {
    const actualDate = new Date();
    const eventDate = new Date(inputDate.value);
    const diferencia = eventDate.getTime() - actualDate.getTime();//tiempo en milesgundos 
    const dias = Math.ceil(diferencia / (1000 * 3600 * 24));
    return dias;
}

function renderLista() {
    htmlLista = lista.map(item => {
        return (
            item = `
                <div class="d-flex justify-content-center align-items-center ">
                    <div class="px-3 d-flex flex-column justify-content-center align-items-center">
                        <h1> <i class="bi bi-calendar-heart fs-5"></i> ${item.dif}</h1>
                        <p>Dias faltantes</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center flex-column">
                    <h5>${item.evento}</h5>
                    <div class="d-flex">
                        <h5 class="m-2">${item.fecha}</h5>
                        <button class="btn btn-danger ddelete" data-id="${item.id}">Delete</button>
                    </div>
                </div>
            `
        );
    });


    htmlLista.forEach(element => {
        const divLista = document.createElement('div');
        divLista.classList = 'd-flex justify-content-around p-2';
        divLista.innerHTML = element;
        listaEventos.appendChild(divLista)
        inputDate.value = '';
        inputEvento.value = '';
    });
    document.querySelectorAll('.ddelete').forEach(btn => {
        btn.addEventListener('click', e => {
            const id = btn.getAttribute('data-id');
            const itemIndex = lista.findIndex(item => item.id === id); // Encuentra el índice del objeto a eliminar
            if (itemIndex !== -1) {
                lista.splice(itemIndex, 1); // Elimina el objeto de la matriz lista
                save(JSON.stringify(lista)); // Guarda la matriz actualizada en el almacenamiento local
                location.reload(true);
            };
        });
    });
}



//almacenar en local storage
function save(data) {
    localStorage.setItem('items', data);
}
function load() {
    return localStorage.getItem('items');
}
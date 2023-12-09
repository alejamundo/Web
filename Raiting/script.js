const ratingContainer = document.querySelector(".rating");
let currentValue = 0;
const limit = 10;

//creo 10 componentes
html = Array.from(Array(limit)).map((item, i) => {
    return `<div class="item item-${i}" data-pos="${i}"></div>`;
});

//los inserto al container
ratingContainer.innerHTML = html.join("");

document.querySelectorAll(".item").forEach((item) => {
    item.addEventListener("mouseover", (e) => {
        //optengo el id de cada elemneto
        const pos = item.getAttribute("data-pos");

        if (currentValue === parseInt(pos) + 1) {
            return;
        }
        document.querySelectorAll(".item").forEach((item) => {
            //recorro cada item y pregunto si ya tiene el color si si lo quito
            if (item.classList.contains("item-full")) {
                item.classList.remove("item-full");
            }
        });
        for (let i = 0; i <= pos; i++) {
            //seleciono cada elemnto
            const item = document.querySelector(`.item-${i}`);
            //si no tienen el color se lo pongo
            if (!item.classList.contains("item-full")) {
                item.classList.add("item-full");
            }
        }
        currentValue = parseInt(pos) + 1;
    });

    item.addEventListener("click", (e) => {
        const pos = item.getAttribute("data-pos");
        currentValue = parseInt(pos) + 1;
        console.log(currentValue);
    });
});
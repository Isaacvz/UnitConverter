// Selecting the tags

let amount = document.querySelector('.enter-the-amount');
let select1 = document.querySelector('.fSelect');
let select2 = document.querySelector('.sSelect');
let form = document.querySelector('form');
let btn = document.querySelector('.button');
let box2 = document.querySelector('.box2');
let r1 = document.querySelector('.r1');
let r2 = document.querySelector('.r2');

// Functions 

function toggle() {
    box2.classList.toggle('hide');
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const completeData = Object.fromEntries(formData.entries());

    const API_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:4000' 
  : 'https://unit-converter-abraham.vercel.app';
    
    fetch(`${API_URL}/api/convert`, {
        method: 'POST',
        body: JSON.stringify(completeData),
        headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            //const amount2 = data.amt
            //const amtFrom = data.aFrom
            //const amtTo = data.aTo
            //console.log("Datos recibidos del servidor correctamente Cantidad: ", amount2, " de: ", amtFrom, " para: ", amtTo);
            if(data.status === "success") {
                const msje = data.msj;
                const fin = data.final;
                console.log(msje);
                console.log(fin);
                r1.textContent = msje;
                r2.textContent = fin;
                box2.classList.remove('hide');
            } else {
                console.log(data);
                const msje = data.msj;
                const fin = data.final;
                console.log(msje);
                r1.textContent = msje;
                r2.textContent = fin;
                box2.classList.remove('hide');
            }
        })
        .catch(error => console.error("Error:", error));
});

function cambioLength() {
    amount.textContent = 'The Length to convert';
    select1.replaceChildren();
    select2.replaceChildren();
    let list = ["millimeter", "centimeter", "meter", "kilometer", "inch", "foot", "yard", "mile"];
    let i = 0;
    while(i < 8) {
        let optChild = document.createElement('option');
        optChild.textContent = list[i];
        select1.append(optChild);
        let clone = optChild.cloneNode(true);
        select2.append(clone);
        i++
    }
}

function cambioWeight() {
    amount.textContent = 'The Weight to convert';
    select1.replaceChildren();
    select2.replaceChildren();
    let list = ["milligram", "gram", "kilogram", "ounce", "pound"];
    let i = 0;
    while(i < 5) {
        let optChild = document.createElement('option');
        optChild.textContent = list[i];
        select1.append(optChild);
        let clone = optChild.cloneNode(true);
        select2.append(clone);
        i++
    }

}

function cambioTemperature() {
    amount.textContent = 'The Temperature to convert';
    select1.replaceChildren();
    select2.replaceChildren();
    let list = ["celsius", "fahrenheit", "kelvin"];
    let i = 0;
    while(i < 3) {
        let optChild = document.createElement('option');
        optChild.textContent = list[i];
        select1.append(optChild);
        let clone = optChild.cloneNode(true);
        select2.append(clone);
        i++
    }
}



 
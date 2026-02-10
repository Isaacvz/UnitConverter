// Selecting the tags

let amount = document.querySelector('.enter-the-amount');
let select1 = document.querySelector('.fSelect');
let select2 = document.querySelector('.sSelect');
let form = document.querySelector('form');

// Functions 

form.addEventListener('submit', async (event) => {

    event.preventDefault();

    const formData = new FormData(form);
    const completeData = Object.fromEntries(formData.entries());
    console.log(completeData);

    /*

    fetch('***', {
        method = 'POST',
        body: JSON.stringify(datosCompletos),
        heders: {
            'Content-Type': 'application/json'
        }
    });

    */
});

function cambioLength() {
    amount.textContent = 'The Length to convert';
    select1.replaceChildren();
    select2.replaceChildren();
    let list = ["milimeter", "centimeter", "meter", "kilometer", "inch", "foot", "yard", "mile"];
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
    let list = ["miligram", "gram", "kilogram", "ounce", "pound"];
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
    let list = ["Celsius", "Fahrenheit", "Kelvin"];
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


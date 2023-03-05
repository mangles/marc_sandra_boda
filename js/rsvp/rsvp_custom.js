const url = 'https://script.google.com/macros/s/AKfycbyZZiYyV17R1B-pMHaQKNj3SaGsEPSB8rlfnRZEKSh4t_-gUl14JlCUyT1t1H7nBCC0/exec';
const myForm = document.querySelector("#rsvpform");

let mainadaSelection = undefined;
let edatSelection = undefined;
const edat = document.querySelector("#edat");

edat.addEventListener('input', () => {
    edatSelection = edat.value
})

document.querySelector("#mainada").addEventListener('click', function (event) {
    if (event.target && event.target.matches("input[type='radio']")) {
        mainadaSelection = document.querySelector("input[name=mainada]:checked").value
        if (edatSelection <= 35 && mainadaSelection === '0') {
            document.querySelector("#section-dormir").style.display = 'block'
            document.querySelector("#section-paellada").style.display = 'block'
        }
    }
});

myForm.addEventListener('submit', submitter);

function submitter(e) {
    const name = document.querySelector("#inputname");
    const email = document.querySelector("#input-email-icon");
    const vindrasBoda = document.querySelector("input[name=vindrasBoda]:checked");
    const mainada = document.querySelector("input[name=mainada]:checked");
    const preferenciesAlimentaries = document.querySelector("#preferencies-alimentaries");
    const alergies = document.querySelector("#alergies");
    const dormir = document.querySelector("input[name=dormir]:checked");
    const paella = document.querySelector("input[name=paella]:checked");

    e.preventDefault()
    const messageObject = {
        nom: name.value,
        email: email.value,
        vindrasBoda: vindrasBoda.value,
        quantsSereu: 1,
        mainada: mainada.value,
        preferenciesAlimentaries: preferenciesAlimentaries.value,
        alergies: alergies?.value || "No",
        dormir: dormir?.value || "No",
        paella: paella?.value || "No"
    }
    sendEmail(messageObject)
}

function sendEmail(data) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(res => res.json()).then(json => {
        console.log(json)
    }).catch(e => console.log(e))

}

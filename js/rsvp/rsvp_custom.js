const url = 'https://script.google.com/macros/s/AKfycbx-jkAXf1aALG07n4k7sA0Av_2UFywJq9LEvAYiCu1aVQRKY0UanDqTfyk0655zHEGk/exec';
const myForm = document.querySelector("#rsvpform");
const name = document.querySelector("#inputname");
const email = document.querySelector("#input-email-icon");
const vindrasBoda = document.querySelector("#vindras-boda");
const quantsSereu = document.querySelector("#quants-sereu");
const preferenciesAlimentaries = document.querySelector("#input-select");
const alergies = document.querySelector("#alergies");
const altres = document.querySelector("#altres");

myForm.addEventListener('submit', submitter);

function submitter(e) {
    e.preventDefault()
    const messageObject = {
        name: name.value,
        email: email.value,
        vindrasBoda: vindrasBoda.value,
        quantsSereu: quantsSereu.value,
        preferenciesAlimentaries: preferenciesAlimentaries.value,
        alergies: alergies.value,
        altres: altres.value
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

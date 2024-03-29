const url = 'https://script.google.com/macros/s/AKfycbyZZiYyV17R1B-pMHaQKNj3SaGsEPSB8rlfnRZEKSh4t_-gUl14JlCUyT1t1H7nBCC0/exec';
const myForm = document.querySelector("#rsvpform");

let mainadaSelection = undefined;
let edatSelection = undefined;
const edat = document.querySelector("#edat");
const submitButton = document.getElementById("submitButton");

edat.addEventListener('input', () => {
    edatSelection = edat.value
})
submitButton.addEventListener("click", function() {
    let valid = true;
    $('[required]').each(function() {
        if ($(this).is(':invalid') || !$(this).val()) valid = false;
    })

    if (valid) {
        submitButton.style.backgroundColor = "rgba(7,132,145,0.55)";
        submitButton.style.borderColor = "rgba(7,132,145,0.55)";
        submitButton.value = "ENVIANT...";
    }
});

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
        preferenciesAlimentaries: preferenciesAlimentaries?.value,
        alergies: alergies?.value || "No",
        dormir: dormir?.value || "No",
        paella: paella?.value || "No"
    }
    sendEmail(messageObject)
}

async function sendEmail(data) {
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    }).then((response) => {
        response.json()
        if(response.status === 200) {
            submitButton.value = "Moltes gràcies!";
            submitButton.style.backgroundColor = "#66c468";
            submitButton.style.borderColor = "#66c468";
            myForm.reset()
        } else {
            submitButton.value = "Hi ha hagut algun error";
            submitButton.style.backgroundColor = "#e23737";
            submitButton.style.borderColor = "#e23737";
        }

    }).catch((error) => {
        submitButton.value = "Hi ha hagut algun error";
        submitButton.style.backgroundColor = "#e23737";
        submitButton.style.borderColor = "#e23737";
        console.error("Error:", error);
    });

}

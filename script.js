const USERS = [
    {
        "user": "Henrique",
        "role": "Administrator",
        "password": "formulario@dna2024"
    },
    {
        "user": "Willy",
        "role": "Administrator",
        "password": "willy@dna2024"
    },
    {
        "user": "Matheus Arouca",
        "role": "Director",
        "password": "arouca@dna2024"
    },
    {
        "user": "Iheleno",
        "role": "Director",
        "password": "iheleno@dna2024"
    },
    {
        "user": "Claudiovane",
        "role": "Salesman",
        "password": "claudiovane@dna2024"
    }
]

function login() {
    let password = localStorage.getItem("password");

    if (!password) {
        password = document.getElementById("password").value;
    }
    
    if (validateUser(password)) {
        document.getElementById("navbar").style.visibility = "visible";
        document.getElementById("form-container").style.visibility = "visible";
        document.getElementById("login-container").style.visibility = "hidden";
        document.getElementById("password").value = "";
    } else {
        if (password) {
            showMessage("Senha incorreta.", "error")
        }

        document.getElementById("navbar").style.visibility = "hidden";
        document.getElementById("form-container").style.visibility = "hidden";
        document.getElementById("login-container").style.visibility = "visible";
        document.getElementById("password").value = "";
    }
}

function logout() {
    document.getElementById("navbar").style.visibility = "hidden";
    document.getElementById("form-container").style.visibility = "hidden";
    document.getElementById("login-container").style.visibility = "visible";
    document.getElementById("password").value = "";
    localStorage.removeItem("user");
    localStorage.removeItem("password");
}

function validateUser(password) {
    for (let i = 0; i < USERS.length; i++) {
        if (USERS[i].password === password) {
            localStorage.setItem("user", USERS[i].user);
            localStorage.setItem("password", password);
            return true;
        }
    }
    
    return false;
}

function getUserRole(password) {
    for (let i = 0; i < USERS.length; i++) {
        if (USERS[i].password === password) {
            localStorage.setItem("user", USERS[i].user);
            localStorage.setItem("password", password);
            return true;
        }
    }

    return "";
}

function getFullAddress() {
    const cep = document.getElementById("cep").value.replace(/[^0-9]/g, '');

    if (cep.length === 8) {
        const url = `https://brasilapi.com.br/api/cep/v1/${cep}`;

        const response = fetch(url, {
            "method": "GET",
            "Access-Control-Allow-Origin": true
        })
            .then(response => response.json())
            .then(data => {
                if (data && data.street && data.neighborhood && data.city) {
                    document.getElementById("address").value = data.street;
                    document.getElementById("neighborhood").value = data.neighborhood;
                    document.getElementById("city").value = data.city;
                } else if (data && data.errors && data.errors.length && data.errors[data.errors.length - 1] && data.errors[data.errors.length - 1].message) {
                    showMessage(data.errors[data.errors.length - 1].message, "error")
                }
            })
            .catch(error => {
                showMessage(error.message, "error");
            });
    } else if (cep && cep.length) {
        console.log("O CEP deve ter 8 dígitos");
    }
}

function showMessage(message, type) {
    const errorMessageDiv = document.getElementById("error-message");
    errorMessageDiv.innerText = message;
    errorMessageDiv.style.display = 'block';
    errorMessageDiv.style.visibility = "visible";
    if (type === "error") {
        errorMessageDiv.style.backgroundColor = "rgb(200, 0, 0)";
    } else if (type === "success") {
        errorMessageDiv.style.backgroundColor = "rgb(0, 200, 0)";
    }
    setTimeout(() => {
        errorMessageDiv.style.display = 'none';
        errorMessageDiv.style.visibility = "hidden";
    }, 5000);
}

function hideErrorMessage() {
    const errorMessageDiv = document.getElementById("error-message");

    errorMessageDiv.style.display = 'none';
    errorMessageDiv.style.visibility = "hidden";
}

document.addEventListener('DOMContentLoaded', () => {
    const cepInput = document.getElementById('cep');

    cepInput.addEventListener('input', (event) => {
        let value = event.target.value.replace(/\D/g, '')

        if (value.length > 5 && value.length <= 8) {
            value = value.slice(0, 5) + '-' + value.slice(5, value.length);
        } else if (value.length > 8) {
            showMessage("CEP deve ter, no máximo, 8 dígitos.", "error");
            value = value.slice(0, 5) + '-' + value.slice(5, 8);
        }

        event.target.value = value;
    });
});

function formatCPF_CNPJ() {
    const input = document.getElementById("cpf-cnpj");
    let value = input.value.replace(/\D/g, '');

    if (value.length < 11) {
        input.value = value;
    }

    else if (value.length === 11) {
        value = value.slice(0, 3) + '.' + value.slice(3, 6) + '.' + value.slice(6, 9) + '-' + value.slice(9, 11);
        input.value = value;
    }

    else {
        input.value = value;

        if (value.length === 14) {
            value = value.slice(0, 2) + '.' + value.slice(2, 5) + '.' + value.slice(5, 8) + '/' + value.slice(8, 12) + '-' + value.slice(12, 14);
            input.value = value;
        } else if (value.length > 14) {
            value = value.slice(0, 14);
            value = value.slice(0, 2) + '.' + value.slice(2, 5) + '.' + value.slice(5, 8) + '/' + value.slice(8, 12) + '-' + value.slice(12, 14);
            input.value = value;
            showMessage("CNPJ deve ter, no máximo, 14 dígitos.", "error");
        }
    }
}

function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback);
}

function generateProxy() {
    if (fieldsFilled()) {
        const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
        
        const name = document.getElementById("name").value;
        const cpfCnpj = document.getElementById("cpf-cnpj").value;
        const cep = document.getElementById("cep").value;
        const address = document.getElementById("address").value;
        const number = document.getElementById("number").value;
        const complement = document.getElementById("complement").value;
        const neighborhood = document.getElementById("neighborhood").value;
        const city = document.getElementById("city").value;
        const date = String(new Date().getDate()).padStart(2, "0") + " de " + months[new Date().getMonth()] + " de " + new Date().getFullYear();

        const parameters = {
            name: name,
            cpfCnpj: cpfCnpj,
            address: address,
            number: number + (complement ? " " + complement : ""),
            complement: complement,
            neighborhood: neighborhood,
            city: city,
            cep: cep,
            date: date
        };

        loadFile(
            "Procuracao (Willy).docx",
            function (error, content) {
                if (error) {
                    throw error;
                }
                const zip = new PizZip(content);
                const doc = new window.docxtemplater(zip, {
                    paragraphLoop: true,
                    linebreaks: true,
                });

                doc.render(parameters);

                const blob = doc.getZip().generate({
                    type: "blob",
                    mimeType:
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    compression: "DEFLATE",
                });
                saveAs(blob, `Procuracao (Willy) - ${name}.docx`);
            }
        );

        loadFile(
            "Procuracao (Edson).docx",
            function (error, content) {
                if (error) {
                    throw error;
                }
                const zip = new PizZip(content);
                const doc = new window.docxtemplater(zip, {
                    paragraphLoop: true,
                    linebreaks: true,
                });

                doc.render(parameters);

                const blob = doc.getZip().generate({
                    type: "blob",
                    mimeType:
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    compression: "DEFLATE",
                });
                saveAs(blob, `Procuracao (Edson) - ${name}.docx`);
            }
        );
    } else {
        showMessage("Preencha todos os campos antes de prosseguir.", "error")
    }
};

function fieldsFilled() {
    const name = document.getElementById("name").value;
    const cpfCnpj = document.getElementById("cpf-cnpj").value;
    const cep = document.getElementById("cep").value;
    const address = document.getElementById("address").value;
    const number = document.getElementById("number").value;
    const neighborhood = document.getElementById("neighborhood").value;
    const city = document.getElementById("city").value;

    return name && cpfCnpj && cep && address && number && neighborhood && city;
}

function toggleDisjuntor() {
    var checkBox = document.getElementById('alteracao-carga');
    var disjuntorGroup = document.getElementById('disjuntor-group');
    if (checkBox.checked) {
        disjuntorGroup.classList.remove('d-none');
    } else {
        disjuntorGroup.classList.add('d-none');
    }
}
const USERS = [
    {
        "user": "Alexandre",
        "role": "Salesman",
        "password": "alexandre@dna2024"
    },
    {
        "user": "Burica",
        "role": "Salesman",
        "password": "burica@dna2024"
    },
    {
        "user": "Claudio",
        "role": "Salesman",
        "password": "claudio@dna2024"
    },
    {
        "user": "Claudinei",
        "role": "Salesman",
        "password": "claudinei@dna2024"
    },
    {
        "user": "Claudiovane",
        "role": "Salesman",
        "password": "claudiovane@dna2024"
    },
    {
        "user": "Diogenes",
        "role": "Salesman",
        "password": "diogenes@dna2024"
    },
    {
        "user": "Henrique",
        "role": "Administrator",
        "password": "123"
    },
    {
        "user": "Iheleno",
        "role": "Director",
        "password": "iheleno@dna2024"
    },
    {
        "user": "Jorge Luiz",
        "role": "Salesman",
        "password": "jorge_luiz@dna2024"
    },
    {
        "user": "Luciano",
        "role": "Salesman",
        "password": "luciano@dna2024"
    },
    {
        "user": "Matheus Arouca",
        "role": "Director",
        "password": "arouca@dna2024"
    },
    {
        "user": "Regis",
        "role": "Salesman",
        "password": "regis@dna2024"
    },
    {
        "user": "Reinaldo",
        "role": "Salesman",
        "password": "reinaldo@dna2024"
    },
    {
        "user": "Ronei",
        "role": "Salesman",
        "password": "ronei@dna2024"
    },
    {
        "user": "Walace",
        "role": "Salesman",
        "password": "walace@dna2024"
    },
    {
        "user": "Willy",
        "role": "Administrator",
        "password": "willy@dna2024"
    }
];

function login() {
    let password = localStorage.getItem("password");

    if (!password) {
        password = document.getElementById("password").value;
    }

    if (validateUser(password)) {
        document.getElementById("logout-btn").style.visibility = "visible";
        document.getElementById("form-container").style.visibility = "visible";
        document.getElementById("login-container").style.visibility = "hidden";
        document.getElementById("password").value = "";
        document.getElementById("logout-btn").style.visibility = "visible";
        controlVisibility();
    } else {
        if (password) {
            showMessage("Senha incorreta.", "error")
        }
        document.getElementById("logout-btn").style.visibility = "hidden";
        document.getElementById("form-container").style.visibility = "hidden";
        document.getElementById("login-container").style.visibility = "visible";
        document.getElementById("password").value = "";
    }

    controlVisibility();
}

function logout() {
    document.getElementById("logout-btn").style.visibility = "hidden";
    document.getElementById("form-container").style.visibility = "hidden";
    document.getElementById("login-container").style.visibility = "visible";
    document.getElementById("password").value = "";
    localStorage.removeItem("user");
    localStorage.removeItem("password");
    localStorage.removeItem("role");
    controlVisibility();
}

function validateUser(password) {
    for (let i = 0; i < USERS.length; i++) {
        if (USERS[i].password === password) {
            document.getElementById("salesman").value = USERS[i].user;
            localStorage.setItem("user", USERS[i].user);
            localStorage.setItem("password", password);
            localStorage.setItem("role", USERS[i].role);
            return true;
        }
    }

    return false;
}

function controlVisibility() {
    const role = localStorage.getItem("role");

    const allContainer = document.getElementById("all-container");

    const all = document.getElementById("todos");
    const proxy = document.getElementById("procuracao");
    const contract = document.getElementById("contrato");
    const changeProxy = document.getElementById("procuracao-troca");
    const checklist = document.getElementById("checklist");

    const proxyContainer = document.getElementsByClassName("proxy-container");
    const contractContainer = document.getElementsByClassName("contract-container");
    const changeProxyContainer = document.getElementsByClassName("change-proxy-container");
    const checklistContainer = document.getElementsByClassName("checklist-container");

    const proxyButton = document.getElementsByClassName("botao-procuracao");
    const contractButton = document.getElementsByClassName("botao-contrato");
    const changeProxyButton = document.getElementsByClassName("botao-procuracao-troca");
    const checklistButton = document.getElementsByClassName("botao-checklist");
    const allButton = document.getElementsByClassName("botao-todos-documentos");


    const allCheckbox = document.getElementById("todos");
    const proxyCheckbox = document.getElementById("procuracao");
    const contractCheckbox = document.getElementById("contrato");
    const changeProxyCheckbox = document.getElementById("procuracao-troca");
    const checklistCheckbox = document.getElementById("checklist");

    if (role === "Salesman") {
        allContainer.style.visibility = "hidden";
        allContainer.style.display = "none";

        all.checked = false;
        proxy.checked = true;
        contract.checked = true;
        checklist.checked = true;

        for (let i = 0; i < proxyContainer.length; i++) {
            proxyContainer[i].style.visibility = "visible";
            proxyContainer[i].style.display = "block";
        }

        for (let i = 0; i < contractContainer.length; i++) {
            contractContainer[i].style.visibility = "visible";
            contractContainer[i].style.display = "block";
        }

        if (changeProxyCheckbox.checked) {
            for (let i = 0; i < changeProxyContainer.length; i++) {
                changeProxyContainer[i].style.visibility = "visible";
                changeProxyContainer[i].style.display = "block";
            }
        } else {
            for (let i = 0; i < changeProxyContainer.length; i++) {
                changeProxyContainer[i].style.visibility = "hidden";
                changeProxyContainer[i].style.display = "none";
            }
        }

        for (let i = 0; i < checklistContainer.length; i++) {
            checklistContainer[i].style.visibility = "visible";
            checklistContainer[i].style.display = "block";
        }

        for (let i = 0; i < allButton.length; i++) {
            allButton[i].style.visibility = "visible";
            allButton[i].style.display = "block";
        }
    } else if (role === "Director" || role === "Administrator") {
        allContainer.style.visibility = "visible";
        allContainer.style.display = "block";

        if (allCheckbox.checked) {
            proxyCheckbox.checked = true;
            contractCheckbox.checked = true;
            changeProxy.checked = true;
            checklistCheckbox.checked = true;
        }

        if (proxyCheckbox.checked) {
            for (let i = 0; i < proxyContainer.length; i++) {
                proxyContainer[i].style.visibility = "visible";
                proxyContainer[i].style.display = "block";
            }
        } else {
            for (let i = 0; i < proxyContainer.length; i++) {
                proxyContainer[i].style.visibility = "hidden";
                proxyContainer[i].style.display = "none";
            }
        }

        if (contractCheckbox.checked) {
            for (let i = 0; i < contractContainer.length; i++) {
                contractContainer[i].style.visibility = "visible";
                contractContainer[i].style.display = "block";
            }
        } else {
            for (let i = 0; i < contractContainer.length; i++) {
                contractContainer[i].style.visibility = "hidden";
                contractContainer[i].style.display = "none";
            }
        }

        if (changeProxyCheckbox.checked) {
            for (let i = 0; i < changeProxyContainer.length; i++) {
                changeProxyContainer[i].style.visibility = "visible";
                changeProxyContainer[i].style.display = "block";
            }
        } else {
            for (let i = 0; i < changeProxyContainer.length; i++) {
                changeProxyContainer[i].style.visibility = "hidden";
                changeProxyContainer[i].style.display = "none";
            }
        }

        if (checklistCheckbox.checked) {
            for (let i = 0; i < checklistContainer.length; i++) {
                checklistContainer[i].style.visibility = "visible";
                checklistContainer[i].style.display = "block";
            }
        } else {
            for (let i = 0; i < contractContainer.length; i++) {
                checklistContainer[i].style.visibility = "hidden";
                checklistContainer[i].style.display = "none";
            }
        }

        const FIRST_CONDITION = proxyCheckbox.checked && contractCheckbox.checked;
        const SECOND_CONDITION = proxyCheckbox.checked && changeProxyCheckbox.checked;
        const THIRD_CONDITION = proxyCheckbox.checked && checklistCheckbox.checked;
        const FOURTH_CONDITION = contractCheckbox.checked && changeProxyCheckbox.checked;
        const FIFTH_CONDITION = contractCheckbox.checked && checklistCheckbox.checked;
        const SIXTH_CONDITION = changeProxyCheckbox.checked && checklistCheckbox.checked;

        if (FIRST_CONDITION || SECOND_CONDITION || THIRD_CONDITION || FOURTH_CONDITION || FIFTH_CONDITION || SIXTH_CONDITION) {
            for (let i = 0; i < allButton.length; i++) {
                allButton[i].style.visibility = "visible";
                allButton[i].style.display = "block";
            }

            for (let i = 0; i < proxyButton.length; i++) {
                proxyButton[i].style.visibility = "hidden";
                proxyButton[i].style.display = "none";
            }

            for (let i = 0; i < contractButton.length; i++) {
                contractButton[i].style.visibility = "hidden";
                contractButton[i].style.display = "none";
            }

            for (let i = 0; i < changeProxyButton.length; i++) {
                changeProxyButton[i].style.visibility = "hidden";
                changeProxyButton[i].style.display = "none";
            }

            for (let i = 0; i < checklistButton.length; i++) {
                checklistButton[i].style.visibility = "hidden";
                checklistButton[i].style.display = "none";
            }
        } else if (proxyCheckbox.checked && !contractCheckbox.checked && !changeProxyCheckbox.checked && !checklistCheckbox.checked) {
            for (let i = 0; i < proxyButton.length; i++) {
                proxyButton[i].style.visibility = "visible";
                proxyButton[i].style.display = "block";
                proxyButton[i].style.marginBottom = "0";
            }

            for (let i = 0; i < allButton.length; i++) {
                allButton[i].style.visibility = "hidden";
                allButton[i].style.display = "none";
            }
        } else if (!proxyCheckbox.checked && contractCheckbox.checked && !changeProxyCheckbox.checked && !checklistCheckbox.checked) {
            for (let i = 0; i < contractButton.length; i++) {
                contractButton[i].style.visibility = "visible";
                contractButton[i].style.display = "block";
                contractButton[i].style.marginBottom = "0";
            }

            for (let i = 0; i < allButton.length; i++) {
                allButton[i].style.visibility = "hidden";
                allButton[i].style.display = "none";
            }
        } else if (!proxyCheckbox.checked && !contractCheckbox.checked && changeProxyCheckbox.checked && !checklistCheckbox.checked) {
            for (let i = 0; i < changeProxyButton.length; i++) {
                changeProxyButton[i].style.visibility = "visible";
                changeProxyButton[i].style.display = "block";
                changeProxyButton[i].style.marginBottom = "0";
            }

            for (let i = 0; i < allButton.length; i++) {
                allButton[i].style.visibility = "hidden";
                allButton[i].style.display = "none";
            }
        } else if (!proxyCheckbox.checked && !contractCheckbox.checked && !changeProxyCheckbox.checked && checklistCheckbox.checked) {
            for (let i = 0; i < checklistButton.length; i++) {
                checklistButton[i].style.visibility = "visible";
                checklistButton[i].style.display = "block";
            }

            for (let i = 0; i < allButton.length; i++) {
                allButton[i].style.visibility = "hidden";
                allButton[i].style.display = "none";
            }
        } else {
            for (let i = 0; i < allButton.length; i++) {
                allButton[i].style.visibility = "hidden";
                allButton[i].style.display = "none";
            }

            for (let i = 0; i < proxyButton.length; i++) {
                proxyButton[i].style.visibility = "hidden";
                proxyButton[i].style.display = "none";
            }

            for (let i = 0; i < contractButton.length; i++) {
                contractButton[i].style.visibility = "hidden";
                contractButton[i].style.display = "none";
            }

            for (let i = 0; i < changeProxyButton.length; i++) {
                changeProxyButton[i].style.visibility = "hidden";
                changeProxyButton[i].style.display = "none";
            }

            for (let i = 0; i < checklistButton.length; i++) {
                checklistButton[i].style.visibility = "hidden";
                checklistButton[i].style.display = "none";
            }
        }
    } else {
        allContainer.style.visibility = "hidden";
        allContainer.style.display = "none";
        
        for (let i = 0; i < proxyContainer.length; i++) {
            proxyContainer[i].style.visibility = "hidden";
            proxyContainer[i].style.display = "none";
        }

        for (let i = 0; i < contractContainer.length; i++) {
            contractContainer[i].style.visibility = "hidden";
            contractContainer[i].style.display = "none";
        }
        
        for (let i = 0; i < changeProxyContainer.length; i++) {
            changeProxyContainer[i].style.visibility = "hidden";
            changeProxyContainer[i].style.display = "none";
        }

        for (let i = 0; i < checklistContainer.length; i++) {
            checklistContainer[i].style.visibility = "hidden";
            checklistContainer[i].style.display = "none";
        }

        for (let i = 0; i < allButton.length; i++) {
            allButton[i].style.visibility = "hidden";
            allButton[i].style.display = "none";
        }

        for (let i = 0; i < proxyButton.length; i++) {
            proxyButton[i].style.visibility = "hidden";
            proxyButton[i].style.display = "none";
        }

        for (let i = 0; i < contractButton.length; i++) {
            contractButton[i].style.visibility = "hidden";
            contractButton[i].style.display = "none";
        }

        for (let i = 0; i < changeProxyButton.length; i++) {
            changeProxyButton[i].style.visibility = "hidden";
            changeProxyButton[i].style.display = "none";
        }

        for (let i = 0; i < checklistButton.length; i++) {
            checklistButton[i].style.visibility = "hidden";
            checklistButton[i].style.display = "none";
        }
    }
}

function addInverter() {
    const inverter1 = document.getElementById("inverter-1");
    const inverter2 = document.getElementById("inverter-2");
    const inverter3 = document.getElementById("inverter-3");
    const inverter4 = document.getElementById("inverter-4");

    const FIRST_CONDITION = window.getComputedStyle(document.getElementById("inverter-2"), null).getPropertyValue('visibility') === "hidden";

    const SECOND_CONDITION = window.getComputedStyle(document.getElementById("inverter-2"), null).getPropertyValue('visibility') === "visible" &&
        window.getComputedStyle(document.getElementById("inverter-3"), null).getPropertyValue('visibility') === "hidden";

    const THIRD_CONDITION = window.getComputedStyle(document.getElementById("inverter-2"), null).getPropertyValue('visibility') === "visible" &&
        window.getComputedStyle(document.getElementById("inverter-3"), null).getPropertyValue('visibility') === "visible" &&
        window.getComputedStyle(document.getElementById("inverter-4"), null).getPropertyValue('visibility') === "hidden";

    if (FIRST_CONDITION) {
        inverter1.innerText = "Primeiro inversor";
        inverter2.style.visibility = "visible";
        inverter2.style.display = "block";
    } else if (SECOND_CONDITION) {
        inverter3.style.visibility = "visible";
        inverter3.style.display = "block";
    } else if (THIRD_CONDITION) {
        inverter4.style.visibility = "visible";
        inverter4.style.display = "block";
    }
}

function removeInverter() {
    const inverter1 = document.getElementById("inverter-1");
    const inverter2 = document.getElementById("inverter-2");
    const inverter3 = document.getElementById("inverter-3");
    const inverter4 = document.getElementById("inverter-4");

    const FIRST_CONDITION = window.getComputedStyle(document.getElementById("inverter-4"), null).getPropertyValue('visibility') === "visible";

    const SECOND_CONDITION = window.getComputedStyle(document.getElementById("inverter-4"), null).getPropertyValue('visibility') === "hidden" &&
        window.getComputedStyle(document.getElementById("inverter-3"), null).getPropertyValue('visibility') === "visible";

    const THIRD_CONDITION = window.getComputedStyle(document.getElementById("inverter-4"), null).getPropertyValue('visibility') === "hidden" &&
        window.getComputedStyle(document.getElementById("inverter-3"), null).getPropertyValue('visibility') === "hidden" &&
        window.getComputedStyle(document.getElementById("inverter-2"), null).getPropertyValue('visibility') === "visible";

    if (FIRST_CONDITION) {
        inverter4.style.visibility = "hidden";
        inverter4.style.display = "none";
    } else if (SECOND_CONDITION) {
        inverter3.style.visibility = "hidden";
        inverter3.style.display = "none";
    } else if (THIRD_CONDITION) {
        inverter1.innerText = "Inversor";
        inverter2.style.visibility = "hidden";
        inverter2.style.display = "none";
    }
}

function getUserRole(password) {
    for (let i = 0; i < USERS.length; i++) {
        if (USERS[i].password === password) {
            console.log(document.getElementById("salesman").value)
            localStorage.setItem("user", USERS[i].user);
            localStorage.setItem("password", password);
            return true;
        }
    }

    return "";
}

function getFullAddress() {
    const cep = document.getElementsByClassName("cep")[0].value.replace(/\D/g, '');

    if (cep.length === 8) {
        const url = `https://brasilapi.com.br/api/cep/v1/${cep}`;

        const address = document.getElementsByClassName("address");
        const neighborhood = document.getElementsByClassName("neighborhood");
        const city = document.getElementsByClassName("city");

        const response = fetch(url, {
            "method": "GET",
            "Access-Control-Allow-Origin": true
        })
            .then(response => response.json())
            .then(data => {
                if (data && data.street && data.neighborhood && data.city) {
                    for (let i = 0; i < address.length; i++) {
                        address[i].value = data.street;
                        neighborhood[i].value = data.neighborhood;
                        city[i].value = data.city;
                    }
                } else if (data && data.errors && data.errors.length && data.errors[data.errors.length - 1] && data.errors[data.errors.length - 1].message) {
                    showMessage(data.errors[data.errors.length - 1].message, "error")
                }
            })
            .catch(error => {
                showMessage(error.message, "error");
            });
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

function formatCEP(value) {
    value = value.replace(/\D/g, '');

    if (value.length > 5 && value.length <= 8) {
        value = value.slice(0, 5) + '-' + value.slice(5, value.length);
    } else if (value.length > 8) {
        showMessage("CEP deve ter, no máximo, 8 dígitos.", "error");
        value = value.slice(0, 5) + '-' + value.slice(5, 8);
    }

    fillCEP(value);
}

function formatCPF_CNPJ(value) {
    const inputs = document.getElementsByClassName("cpf-cnpj");

    value = value.replace(/\D/g, '');

    if (value.length === 11) {
        value = value.slice(0, 3) + '.' + value.slice(3, 6) + '.' + value.slice(6, 9) + '-' + value.slice(9, 11);
    }

    else {
        if (value.length === 14) {
            value = value.slice(0, 2) + '.' + value.slice(2, 5) + '.' + value.slice(5, 8) + '/' + value.slice(8, 12) + '-' + value.slice(12, 14);
        } else if (value.length > 14) {
            value = value.slice(0, 14);
            value = value.slice(0, 2) + '.' + value.slice(2, 5) + '.' + value.slice(5, 8) + '/' + value.slice(8, 12) + '-' + value.slice(12, 14);
            showMessage("CNPJ deve ter, no máximo, 14 dígitos.", "error");
        }
    }

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = value;
    }
}

function controlContractCheckboxes(checkboxChanged) {
    const ceramico = document.getElementById("telhado-ceramico");
    const metalico = document.getElementById("telhado-metalico");
    const laje = document.getElementById("laje");
    const solo = document.getElementById("solo");

    if (checkboxChanged === ceramico && ceramico.checked) {
        metalico.checked = false;
        laje.checked = false;
        solo.checked = false;
    } else if (checkboxChanged === metalico && metalico.checked) {
        ceramico.checked = false;
        laje.checked = false;
        solo.checked = false;
    } else if (checkboxChanged === laje && laje.checked) {
        ceramico.checked = false;
        metalico.checked = false;
        solo.checked = false;
    } else if (checkboxChanged === solo && solo.checked) {
        ceramico.checked = false;
        metalico.checked = false;
        laje.checked = false;
    }
}

function controlChecklistCheckboxes(checkboxChanged) {
    const trocaTitularidade = document.getElementById("troca-titularidade");
    const pessoaFisica = document.getElementById("pessoa-fisica");
    const pessoaJuridica = document.getElementById("pessoa-juridica");
    const urbano = document.getElementById("urbano");
    const rural = document.getElementById("rural");
    
    const semAumento = document.getElementById("sem-aumento-carga");
    const comAumento = document.getElementById("com-aumento-carga");
    const aumentoUsina = document.getElementById("aumento-usina");
    const ligacaoNova = document.getElementById("ligacao-nova");
    const individual = document.getElementById("instalacao-individual");
    const agrupamento = document.getElementById("agrupamento");
    const telhadoIndividual = document.getElementById("telhado-individual");
    const telhadoColetivo = document.getElementById("telhado-coletivo");
    const disjuntorSolicitado = document.getElementsByClassName("disjuntor-solicitado");
    const disjuntorGeral = document.getElementsByClassName("disjuntor-geral");
    const procuracaoTrocaTitularidade = document.getElementsByClassName("procuracao-troca-titularidade");
    const car = document.getElementsByClassName("car");
    const escritura = document.getElementsByClassName("escritura-imovel");
    const contratoSocial = document.getElementsByClassName("contrato-social");
    const cartaoCNPJ = document.getElementsByClassName("cartao-cnpj");
    const autorizacaoTelhado = document.getElementsByClassName("autorizacao-uso-telhado");
    const fotosAgrupamento = document.getElementsByClassName("fotos-todos-padroes");
    const fotosUsina = document.getElementsByClassName("fotos-inversor-usina");
    const quantidadeModulos = document.getElementsByClassName("quantidade-potencia-modulos");

    if (checkboxChanged === pessoaFisica && pessoaFisica.checked) {
        pessoaJuridica.checked = false;
    } else if (checkboxChanged === pessoaJuridica && pessoaJuridica.checked) {
        pessoaFisica.checked = false;
    }

    if (checkboxChanged === urbano && urbano.checked) {
        rural.checked = false;
    } else if (checkboxChanged === rural && rural.checked) {
        urbano.checked = false;
    }

    if (checkboxChanged === semAumento && semAumento.checked) {
        comAumento.checked = false;
        ligacaoNova.checked = false;
    } else if (checkboxChanged === comAumento && comAumento.checked) {
        semAumento.checked = false;
        ligacaoNova.checked = false;
    } else if (checkboxChanged === aumentoUsina && aumentoUsina.checked) {
        ligacaoNova.checked = false;
    } else if (checkboxChanged === ligacaoNova && ligacaoNova.checked) {
        semAumento.checked = false;
        comAumento.checked = false;
        aumentoUsina.checked = false;
    }

    if (checkboxChanged === individual && individual.checked) {
        agrupamento.checked = false;
    } else if (checkboxChanged === agrupamento && agrupamento.checked) {
        individual.checked = false;
    }

    if (checkboxChanged === individual && individual.checked) {
        agrupamento.checked = false;
    } else if (checkboxChanged === agrupamento && agrupamento.checked) {
        individual.checked = false;
    }

    if (checkboxChanged === telhadoIndividual && telhadoIndividual.checked) {
        telhadoColetivo.checked = false;
    } else if (checkboxChanged === telhadoColetivo && telhadoColetivo.checked) {
        telhadoIndividual.checked = false;
    }

    if (comAumento.checked) {
        for (let i = 0; i < disjuntorSolicitado.length; i++) {
            disjuntorSolicitado[i].style.visibility = "visible";
            disjuntorSolicitado[i].style.display = "block";
        }
    } else {
        for (let i = 0; i < disjuntorSolicitado.length; i++) {
            disjuntorSolicitado[i].style.visibility = "hidden";
            disjuntorSolicitado[i].style.display = "none";
        }
    }

    if (agrupamento.checked) {
        for (let i = 0; i < disjuntorGeral.length; i++) {
            disjuntorGeral[i].style.visibility = "visible";
            disjuntorGeral[i].style.display = "block";
        }

        for (let i = 0; i < fotosAgrupamento.length; i++) {
            fotosAgrupamento[i].style.visibility = "visible";
            fotosAgrupamento[i].style.display = "block";
        }
    } else {
        for (let i = 0; i < disjuntorGeral.length; i++) {
            disjuntorGeral[i].style.visibility = "hidden";
            disjuntorGeral[i].style.display = "none";
        }

        for (let i = 0; i < fotosAgrupamento.length; i++) {
            fotosAgrupamento[i].style.visibility = "hidden";
            fotosAgrupamento[i].style.display = "none";
        }
    }

    if (trocaTitularidade.checked) {
        for (let i = 0; i < procuracaoTrocaTitularidade.length; i++) {
            procuracaoTrocaTitularidade[i].style.visibility = "visible";
            procuracaoTrocaTitularidade[i].style.display = "block";
        }
    } else {
        for (let i = 0; i < procuracaoTrocaTitularidade.length; i++) {
            procuracaoTrocaTitularidade[i].style.visibility = "hidden";
            procuracaoTrocaTitularidade[i].style.display = "none";
        }
    }

    if (pessoaJuridica.checked) {
        for (let i = 0; i < cartaoCNPJ.length; i++) {
            cartaoCNPJ[i].style.visibility = "visible";
            cartaoCNPJ[i].style.display = "block";
        }

        for (let i = 0; i < contratoSocial.length; i++) {
            contratoSocial[i].style.visibility = "visible";
            contratoSocial[i].style.display = "block";
        }
    } else {
        for (let i = 0; i < cartaoCNPJ.length; i++) {
            cartaoCNPJ[i].style.visibility = "hidden";
            cartaoCNPJ[i].style.display = "none";
        }

        for (let i = 0; i < contratoSocial.length; i++) {
            contratoSocial[i].style.visibility = "hidden";
            contratoSocial[i].style.display = "none";
        }
    }

    if (rural.checked) {
        for (let i = 0; i < car.length; i++) {
            car[i].style.visibility = "visible";
            car[i].style.display = "block";
        }
    } else {
        for (let i = 0; i < car.length; i++) {
            car[i].style.visibility = "hidden";
            car[i].style.display = "none";
        }
    }

    if (aumentoUsina.checked) {
        for (let i = 0; i < quantidadeModulos.length; i++) {
            quantidadeModulos[i].style.visibility = "visible";
            quantidadeModulos[i].style.display = "block";
        }

        for (let i = 0; i < fotosUsina.length; i++) {
            fotosUsina[i].style.visibility = "visible";
            fotosUsina[i].style.display = "block";
        }
    } else {
        for (let i = 0; i < quantidadeModulos.length; i++) {
            quantidadeModulos[i].style.visibility = "hidden";
            quantidadeModulos[i].style.display = "none";
        }

        for (let i = 0; i < fotosUsina.length; i++) {
            fotosUsina[i].style.visibility = "hidden";
            fotosUsina[i].style.display = "none";
        }
    }

    if (ligacaoNova.checked || agrupamento.checked) {
        for (let i = 0; i < escritura.length; i++) {
            escritura[i].style.visibility = "visible";
            escritura[i].style.display = "block";
        }
    } else {
        for (let i = 0; i < escritura.length; i++) {
            escritura[i].style.visibility = "hidden";
            escritura[i].style.display = "none";
        }
    }

    if (telhadoColetivo.checked) {
        for (let i = 0; i < autorizacaoTelhado.length; i++) {
            autorizacaoTelhado[i].style.visibility = "visible";
            autorizacaoTelhado[i].style.display = "block";
        }
    } else {
        for (let i = 0; i < autorizacaoTelhado.length; i++) {
            autorizacaoTelhado[i].style.visibility = "hidden";
            autorizacaoTelhado[i].style.display = "none";
        }
    }
}

function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback);
}

function generateProxy() {
    if (fieldsFilled()) {
        const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

        const name = document.getElementsByClassName("name")[0].value;
        const cpfCnpj = document.getElementsByClassName("cpf-cnpj")[0].value;
        const cep = document.getElementsByClassName("cep")[0].value;
        const address = document.getElementsByClassName("address")[0].value;
        const number = document.getElementsByClassName("number")[0].value;
        const complement = document.getElementsByClassName("complement")[0].value;
        const neighborhood = document.getElementsByClassName("neighborhood")[0].value;
        const city = document.getElementsByClassName("city")[0].value;
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
        showMessage("Preencha todos os campos antes de prosseguir.", "error");
    }
};

function generateContract() {
    if (fieldsFilled()) {

    } else {
        showMessage("Preencha todos os campos antes de prosseguir.", "error");
    }
}

function generateChangeProxy() {
    if (fieldsFilled()) {

    } else {
        showMessage("Preencha todos os campos antes de prosseguir.", "error");
    }
}

function generateChecklist() {
    if (fieldsFilled()) {
        const container = document.getElementsByClassName('checklist-container')[0];
        const { jsPDF } = window.jspdf;
        
        // Calcula a escala baseada na largura da página A4 em pixels, subtraindo as margens
        const pdfWidth = 595.28 - 40; // Largura em pontos para uma página A4, menos 20px de margem de cada lado
        const containerWidth = container.scrollWidth + 60;
        const scale = pdfWidth / containerWidth; // Calcula a escala para caber no PDF
        
        const pdf = new jsPDF('p', 'pt', 'a4');
        
        // Estilo CSS adicional para forçar a fonte do Bootstrap no PDF e ajustar o fundo
        const customStyles = `
            .checklist-container {
                font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif !important;
                background-color: #f0f0f0 !important; /* Cor de fundo um pouco mais escura */
                padding: 20px; /* Adiciona padding para criar um contraste com o fundo do PDF */
                border-radius: 8px; /* Bordas arredondadas para um visual mais suave */
            }
            
            .subtitle {
                background-color: #f0f0f0 !important;
                font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif !important;
            }

            .header-title {
                font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif !important;
            }

            .botao-checklist {
                display: none;
            }

            .input-wrapper {
                border: 1px solid #aaaaaa; /* Borda da div */
            }
        `;
        
        // Estilo CSS adicional para remover setas das caixas de seleção no PDF
        const removeSelectArrowStyle = `
            select {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                background: none !important;
            }
        `;

        const name = document.getElementsByClassName("name")[0].value;

        pdf.html(container, {
            callback: function (doc) {
                doc.save(`Checklist - ${name}.pdf`);
            },
            x: 20, // Margem à esquerda
            y: 10, // Pequena margem no topo
            margin: [10, 20, 10, 20], // Margens: [topo, direita, inferior, esquerda]
            autoPaging: true,
            width: containerWidth,
            html2canvas: {
                scale: scale, // Ajuste de escala baseado na largura
                useCORS: true,
                scrollX: 0,
                scrollY: 0,
                onclone: (clonedDoc) => {
                    // Injeta os estilos CSS na cópia do documento
                    const style = clonedDoc.createElement('style');
                    style.innerHTML = customStyles + removeSelectArrowStyle;
                    clonedDoc.head.appendChild(style);
                }
            }
        });
        

    } else {
        showMessage("Preencha todos os campos antes de prosseguir.", "error")
    }
}

function generateDocuments() {
    if (fieldsFilled()) {
        const proxyVisibility = window.getComputedStyle(document.getElementsByClassName("proxy-container")[0], null).getPropertyValue('visibility');
        const contractVisibility = window.getComputedStyle(document.getElementsByClassName("contract-container")[0], null).getPropertyValue('visibility');
        const checklistVisibility = window.getComputedStyle(document.getElementsByClassName("checklist-container")[0], null).getPropertyValue('visibility');
        
        if (proxyVisibility === "visible") {
            generateProxy();
        }

        if (contractVisibility === "visible") {
            generateContract();
        }

        if (checklistVisibility === "visible") {
            generateChecklist();
        }
    } else {
        showMessage("Preencha todos os campos antes de prosseguir.", "error")
    }
}

function fieldsFilled() {
    const proxyVisibility = window.getComputedStyle(document.getElementsByClassName("proxy-container")[0], null).getPropertyValue('visibility');
    const contractVisibility = window.getComputedStyle(document.getElementsByClassName("contract-container")[0], null).getPropertyValue('visibility');
    const changeProxyVisibility = window.getComputedStyle(document.getElementsByClassName("change-proxy-container")[0], null).getPropertyValue('visibility');
    const checklistVisibility = window.getComputedStyle(document.getElementsByClassName("checklist-container")[0], null).getPropertyValue('visibility');

    const name = document.getElementsByClassName("name")[0].value;
    const cpfCnpj = document.getElementsByClassName("cpf-cnpj")[0].value;
    const instalation = document.getElementsByClassName("n-instalacao")[0].value;
    const cep = document.getElementsByClassName("cep")[0].value;
    const address = document.getElementsByClassName("address")[0].value;
    const number = document.getElementsByClassName("number")[0].value;
    const neighborhood = document.getElementsByClassName("neighborhood")[0].value;
    const city = document.getElementsByClassName("city")[0].value;

    let filledProxy = false;
    let filledContract = false;
    let filledChangeProxy = false;
    let filledChecklist = false;

    if (proxyVisibility === "visible") {

        filledProxy = name && cpfCnpj && instalation && cep && address && number && neighborhood && city;

        if (!name) {
            showRequiredMessageForClass("nome-required");
        }

        if (!cpfCnpj) {
            showRequiredMessageForClass("cpf-required");
        }

        if (!instalation) {
            showRequiredMessageForClass("n-instalacao-required");
        }

        if (!cep) {
            showRequiredMessageForClass("cep-required");
        }

        if (!address) {
            showRequiredMessageForClass("address-required");
        }

        if (!number) {
            showRequiredMessageForClass("number-required");
        }

        if (!neighborhood) {
            showRequiredMessageForClass("neighborhood-required");
        }

        if (!city) {
            showRequiredMessageForClass("city-required");
        }
    }

    if (changeProxyVisibility === "visible") {
        const oldOwner = document.getElementById("antigo-nome").value;
        const oldCpfCnpj = document.getElementById("antigo-cpf").value;

        filledChangeProxy = name && cpfCnpj && oldOwner && oldCpfCnpj && instalation && cep && address && number && neighborhood && city;

        if (!name) {
            showRequiredMessageForClass("nome-required");
        }

        if (!cpfCnpj) {
            showRequiredMessageForClass("cpf-required");
        }

        if (!oldOwner) {
            showRequiredMessageForID("antigo-nome-required");
        }

        if (!oldCpfCnpj) {
            showRequiredMessageForID("antigo-cpf-required");
        }

        if (!instalation) {
            showRequiredMessageForClass("n-instalacao-required");
        }

        if (!cep) {
            showRequiredMessageForClass("cep-required");
        }

        if (!address) {
            showRequiredMessageForClass("address-required");
        }

        if (!number) {
            showRequiredMessageForClass("number-required");
        }

        if (!neighborhood) {
            showRequiredMessageForClass("neighborhood-required");
        }

        if (!city) {
            showRequiredMessageForClass("city-required");
        }
    }

    if (contractVisibility === "visible") {
        const ceramico = document.getElementById("telhado-ceramico").checked;
        const metalico = document.getElementById("telhado-metalico").checked;
        const laje = document.getElementById("laje").checked;
        const solo = document.getElementById("solo").checked;

        const paymentValue = document.getElementById("value").value;
        const payment = document.getElementById("payment").value;
        const instalment = document.getElementById("instalment").value;

        const quantityModule = document.getElementById("quantity-module").value;
        const manufacturerModule = document.getElementById("manufacturer-module").value;
        const powerModule = document.getElementById("power-module").value;

        const quantityInverter1 = document.getElementById("quantity-inverter-1").value;
        const manufacturerInverter1 = document.getElementById("manufacturer-inverter-1").value;
        const powerInverter1 = document.getElementById("power-inverter-1").value;

        const quantityInverter2 = document.getElementById("quantity-inverter-2").value;
        const manufacturerInverter2 = document.getElementById("manufacturer-inverter-2").value;
        const powerInverter2 = document.getElementById("power-inverter-2").value;

        const quantityInverter3 = document.getElementById("quantity-inverter-3").value;
        const manufacturerInverter3 = document.getElementById("manufacturer-inverter-3").value;
        const powerInverter3 = document.getElementById("power-inverter-3").value;

        const quantityInverter4 = document.getElementById("quantity-inverter-4").value;
        const manufacturerInverter4 = document.getElementById("manufacturer-inverter-4").value;
        const powerInverter4 = document.getElementById("power-inverter-4").value;

        const FIRST_CONDITION = ceramico || metalico || laje || solo;
        
        const SECOND_CONDITION = window.getComputedStyle(document.getElementById("inverter-2"), null).getPropertyValue('visibility') === "hidden" ? true :
            (quantityInverter2 && manufacturerInverter2 !== "Selecione o fabricante" && powerInverter2 !== "Selecione a potência");

        const THIRD_CONDITION = window.getComputedStyle(document.getElementById("inverter-3"), null).getPropertyValue('visibility') === "hidden" ? true :
            (quantityInverter3 && manufacturerInverter3 !== "Selecione o fabricante" && powerInverter3 !== "Selecione a potência");

        const FOURTH_CONDITION = window.getComputedStyle(document.getElementById("inverter-4"), null).getPropertyValue('visibility') === "hidden" ? true :
            (quantityInverter4 && manufacturerInverter4 !== "Selecione o fabricante" && powerInverter4 !== "Selecione a potência");

        filledContract = FIRST_CONDITION && SECOND_CONDITION && THIRD_CONDITION && FOURTH_CONDITION &&
            name &&
            cpfCnpj &&
            instalation &&
            cep && address &&
            number &&
            neighborhood &&
            city
            paymentValue &&
            (payment !== "Selecione a forma") &&
            (instalment !== "Selecione a parcela") &&
            quantityModule &&
            (manufacturerModule !== "Selecione o fabricante") &&
            (powerModule !== "Selecione a potência") &&
            quantityInverter1 &&
            (manufacturerInverter1 !== "Selecione o fabricante") &&
            (powerInverter1 !== "Selecione a potência");

        if (!name) {
            showRequiredMessageForClass("nome-required");
        }

        if (!cpfCnpj) {
            showRequiredMessageForClass("cpf-required");
        }

        if (!instalation) {
            showRequiredMessageForClass("n-instalacao-required");
        }

        if (!cep) {
            showRequiredMessageForClass("cep-required");
        }

        if (!address) {
            showRequiredMessageForClass("address-required");
        }

        if (!number) {
            showRequiredMessageForClass("number-required");
        }

        if (!neighborhood) {
            showRequiredMessageForClass("neighborhood-required");
        }

        if (!city) {
            showRequiredMessageForClass("city-required");
        }

        if (!ceramico && !metalico && !laje && !solo) {
            showRequiredMessageForID("structure-required");
        }

        if (!paymentValue) {
            showRequiredMessageForID("value-required");
        }

        if (payment === "Selecione a forma") {
            showRequiredMessageForID("payment-required");
        }

        if (instalment === "Selecione a parcela") {
            showRequiredMessageForID("instalment-required");
        }

        if (!quantityModule) {
            showRequiredMessageForID("quantity-module-required");
        }

        if (manufacturerModule === "Selecione o fabricante") {
            showRequiredMessageForID("manufacturer-module-required");
        }

        if (powerModule === "Selecione a potência") {
            showRequiredMessageForID("power-module-required");
        }

        if (!quantityInverter1) {
            showRequiredMessageForID("quantity-inverter-1-required");
        }

        if (manufacturerInverter1 === "Selecione o fabricante") {
            showRequiredMessageForID("manufacturer-inverter-1-required");
        }

        if (powerInverter1 === "Selecione a potência") {
            showRequiredMessageForID("power-inverter-1-required");
        }

        if (!quantityInverter2) {
            showRequiredMessageForID("quantity-inverter-2-required");
        }

        if (manufacturerInverter2 === "Selecione o fabricante") {
            showRequiredMessageForID("manufacturer-inverter-2-required");
        }

        if (powerInverter2 === "Selecione a potência") {
            showRequiredMessageForID("power-inverter-2-required");
        }

        if (!quantityInverter3) {
            showRequiredMessageForID("quantity-inverter-3-required");
        }

        if (manufacturerInverter3 === "Selecione o fabricante") {
            showRequiredMessageForID("manufacturer-inverter-3-required");
        }

        if (powerInverter3 === "Selecione a potência") {
            showRequiredMessageForID("power-inverter-3-required");
        }

        if (!quantityInverter4) {
            showRequiredMessageForID("quantity-inverter-4-required");
        }

        if (manufacturerInverter4 === "Selecione o fabricante") {
            showRequiredMessageForID("manufacturer-inverter-4-required");
        }

        if (powerInverter4 === "Selecione a potência") {
            showRequiredMessageForID("power-inverter-4-required");
        }
    }

    if (checklistVisibility === "visible") {
        const trocaTitularidade = document.getElementById("troca-titularidade").checked;
        const pessoaFisica = document.getElementById("pessoa-fisica").checked;
        const pessoaJuridica = document.getElementById("pessoa-juridica").checked;
        const urbano = document.getElementById("urbano").checked;
        const rural = document.getElementById("rural").checked;
        const semAumento = document.getElementById("sem-aumento-carga").checked;
        const comAumento = document.getElementById("com-aumento-carga").checked;
        const aumentoUsina = document.getElementById("aumento-usina").checked;
        const ligacaoNova = document.getElementById("ligacao-nova").checked;
        const individual = document.getElementById("instalacao-individual").checked;
        const agrupamento = document.getElementById("agrupamento").checked;
        const telhadoIndividual = document.getElementById("telhado-individual").checked;
        const telhadoColetivo = document.getElementById("telhado-coletivo").checked;

        const coordenadas = document.getElementById("coordinates").value;
        const disjuntorAtual = document.getElementById("disjuntor-atual").value;
        const correnteAtual = document.getElementById("corrente-atual").value;
        const disjuntorSolicitado = document.getElementById("disjuntor-solicitado").value;
        const correnteSolicitado = document.getElementById("corrente-solicitado").value;
        const disjuntorGeral = document.getElementById("disjuntor-geral").value;
        const correnteGeral = document.getElementById("corrente-geral").value;

        const documento = document.getElementById("documento-oficial").checked;
        const procuracaoTroca = document.getElementById("procuracao-troca-titularidade").checked;
        const fatura = document.getElementById("fatura-cemig").checked;
        const coordenadasPadrao = document.getElementById("coordenadas-padrao").checked;
        const fotosPadrao = document.getElementById("fotos-padrao-disjuntor").checked;
        const car = document.getElementById("car").checked;
        const escritura = document.getElementById("escritura-imovel").checked;
        const contratoSocial = document.getElementById("contrato-social").checked;
        const cnpj = document.getElementById("cartao-cnpj").checked;
        const autorizacaoTelhado = document.getElementById("autorizacao-uso-telhado").checked;
        const fotosAgrupamento = document.getElementById("fotos-todos-padroes").checked;
        const fotosInversor = document.getElementById("fotos-inversor-usina").checked;
        const quantidadeModulos = document.getElementById("quantidade-potencia-modulos").checked;
        const procuracao = document.getElementById("procuracao-assinada").checked;
        const contrato = document.getElementById("contrato-assinado").checked;

        const FIRST_CONDITION = pessoaFisica || pessoaJuridica;
        const SECOND_CONDITION = urbano || rural;
        const THIRD_CONDITION = !ligacaoNova ? semAumento || comAumento : true;
        const FOURTH_CONDITION = individual || agrupamento;
        const FIFTH_CONDITION = telhadoIndividual || telhadoColetivo;
        const SIXTH_CONDITION = !trocaTitularidade ? true : procuracaoTroca;
        const SEVENTH_CONDITION = !pessoaJuridica ? true : cartaoCNPJ && contratoSocial;
        const EIGHTH_CONDITION = !rural ? true : car;
        const NINTH_CONDITION = !aumentoUsina ? true : fotosInversor && quantidadeModulos;
        const TENTH_CONDITION = !ligacaoNova ? true : escritura;
        const ELEVENTH_CONDITION = !agrupamento ? true : escritura && fotosAgrupamento && disjuntorGeral && correnteGeral;
        const TWELFTH_CONDITION = !telhadoColetivo ? true : autorizacaoTelhado;
        const THIRTEENTH_CONDITION = !comAumento ? true : disjuntorSolicitado && correnteSolicitado;

        filledChecklist = FIRST_CONDITION &&
            SECOND_CONDITION &&
            THIRD_CONDITION &&
            FOURTH_CONDITION &&
            FIFTH_CONDITION &&
            SIXTH_CONDITION &&
            SEVENTH_CONDITION &&
            EIGHTH_CONDITION &&
            NINTH_CONDITION &&
            TENTH_CONDITION &&
            ELEVENTH_CONDITION &&
            TWELFTH_CONDITION &&
            THIRTEENTH_CONDITION &&
            name &&
            coordenadas &&
            disjuntorAtual &&
            correnteAtual &&
            documento &&
            fatura &&
            coordenadasPadrao &&
            fotosPadrao &&
            procuracao &&
            contrato;

        if (!name) {
            showRequiredMessageForClass("nome-required");
        }
        if (!pessoaFisica && !pessoaJuridica) {
            showRequiredMessageForID("checkbox-1-required");
        }

        if (!urbano && !rural) {
            showRequiredMessageForID("checkbox-2-required");
        }

        if (!coordenadas) {
            showRequiredMessageForID("coordinates-required");
        }

        if (!semAumento && !comAumento && !ligacaoNova) {
            showRequiredMessageForID("checkbox-3-required");
        }

        if (!individual && !agrupamento) {
            showRequiredMessageForID("checkbox-4-required");
        }

        if (!telhadoIndividual && !telhadoColetivo) {
            showRequiredMessageForID("checkbox-5-required");
        }

        if (disjuntorAtual === "Selecione o número de fases") {
            showRequiredMessageForID("disjuntor-atual-required");
        }

        if (correnteAtual === "Selecione a corrente") {
            showRequiredMessageForID("corrente-atual-required");
        }

        if (disjuntorSolicitado === "Selecione o número de fases") {
            showRequiredMessageForID("disjuntor-solicitado-required");
        }

        if (correnteSolicitado === "Selecione a corrente") {
            showRequiredMessageForID("corrente-solicitado-required");
        }

        if (disjuntorGeral === "Selecione o número de fases") {
            showRequiredMessageForID("disjuntor-geral-required");
        }

        if (correnteGeral === "Selecione a corrente") {
            showRequiredMessageForID("corrente-geral-required");
        }

        if (!documento) {
            showRequiredMessageForID("documento-oficial-required");
        }

        if (!procuracaoTroca) {
            showRequiredMessageForID("procuracao-troca-titularidade-required");
        }

        if (!fatura) {
            showRequiredMessageForID("fatura-cemig-required");
        }

        if (!coordenadasPadrao) {
            showRequiredMessageForID("coordenadas-padrao-required");
        }

        if (!fotosPadrao) {
            showRequiredMessageForID("fotos-padrao-disjuntor-required");
        }

        if (!car) {
            showRequiredMessageForID("car-required");
        }

        if (!escritura) {
            showRequiredMessageForID("escritura-imovel-required");
        }

        if (!contratoSocial) {
            showRequiredMessageForID("contrato-social-required");
        }

        if (!cnpj) {
            showRequiredMessageForID("cartao-cnpj-required");
        }

        if (!autorizacaoTelhado) {
            showRequiredMessageForID("autorizacao-uso-telhado-required");
        }

        if (!fotosAgrupamento) {
            showRequiredMessageForID("fotos-todos-padroes-required");
        }

        if (!fotosInversor) {
            showRequiredMessageForID("fotos-inversor-usina-required");
        }

        if (!quantidadeModulos) {
            showRequiredMessageForID("quantidade-potencia-modulos-required");
        }

        if (!procuracao) {
            showRequiredMessageForID("procuracao-assinada-required");
        }

        if (!contrato) {
            showRequiredMessageForID("contrato-assinado-required");
        }
    }

    const PROXY_INVISIBLE_OR_FILLED = proxyVisibility === "hidden" ? true : filledProxy;
    const CONTRACT_INVISIBLE_OR_FILLED = contractVisibility === "hidden" ? true : filledContract;
    const CHANGE_PROXY_INVISIBLE_OR_FILLED = changeProxyVisibility === "hidden" ? true : filledChangeProxy;
    const CHECKLIST_INVISIBLE_OR_FILLED = checklistVisibility === "hidden" ? true : filledChecklist;

    return PROXY_INVISIBLE_OR_FILLED && CONTRACT_INVISIBLE_OR_FILLED && CHANGE_PROXY_INVISIBLE_OR_FILLED && CHECKLIST_INVISIBLE_OR_FILLED;
}

function fillClientName(name) {
    const inputs = document.getElementsByClassName("name");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = name;
    }
}

function fillInstalation(instalation) {
    const inputs = document.getElementsByClassName("n-instalacao");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = instalation;
    }
}

function fillCEP(cep) {
    const inputs = document.getElementsByClassName("cep");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = cep;
    }
}

function fillAddress(address) {
    const inputs = document.getElementsByClassName("address");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = address;
    }
}

function fillNumber(number) {
    const inputs = document.getElementsByClassName("number");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = number;
    }
}

function fillComplement(complement) {
    const inputs = document.getElementsByClassName("complement");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = complement;
    }
}

function fillNeighborhood(neighborhood) {
    const inputs = document.getElementsByClassName("neighborhood");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = neighborhood;
    }
}

function fillCity(city) {
    const inputs = document.getElementsByClassName("city");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = city;
    }
}

function showRequiredMessageForClass(inputName) {
    const inputs = document.getElementsByClassName(inputName);

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.visibility = "visible";
        inputs[i].style.display = "block";
    }

    setTimeout(() => {
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.visibility = "hidden";
            inputs[i].style.display = "none";
        }
    }, 15000);
}

function showRequiredMessageForID(inputName) {
    const input = document.getElementById(inputName);

    input.style.visibility = "visible";
    input.style.display = "block";

    setTimeout(() => {
        input.style.visibility = "hidden";
        input.style.display = "none";
    }, 15000);
}

function checkManufacturer(name) {
    const quantityContainer = "container-quantity-" + name;
    const manufacturerContainer = "container-manufacturer-" + name;
    const otherManufacturerContainer = "container-other-manufacturer-" + name;
    const powerContainer = "container-power-" + name;

    const manufacturer = document.getElementById("manufacturer-" + name);

    if (manufacturer.value === "outro") {
        document.getElementById(quantityContainer).className = "col-md-3";
        document.getElementById(manufacturerContainer).className = "col-md-3";
        document.getElementById(powerContainer).className = "col-md-3";
        
        document.getElementById(otherManufacturerContainer).style.visibility = "visible";
        document.getElementById(otherManufacturerContainer).style.display = "block";
    } else {
        document.getElementById(quantityContainer).className = "col-md-4";
        document.getElementById(manufacturerContainer).className = "col-md-4";
        document.getElementById(powerContainer).className = "col-md-4";
        
        document.getElementById(otherManufacturerContainer).style.visibility = "hidden";
        document.getElementById(otherManufacturerContainer).style.display = "none";
    }
    
}

function checkPayment() {
    const payment = document.getElementById("payment");

    if (payment.value === "outro") {
        document.getElementById("container-value").className = "col-md-3";
        document.getElementById("container-payment").className = "col-md-3";
        document.getElementById("container-instalment").className = "col-md-3";
        
        document.getElementById("container-other-payment").style.visibility = "visible";
        document.getElementById("container-other-payment").style.display = "block";
    } else {
        document.getElementById("container-value").className = "col-md-4";
        document.getElementById("container-payment").className = "col-md-4";
        document.getElementById("container-instalment").className = "col-md-4";
        
        document.getElementById("container-other-payment").style.visibility = "hidden";
        document.getElementById("container-other-payment").style.display = "none";
    }
    
}
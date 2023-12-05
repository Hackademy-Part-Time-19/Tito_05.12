function apriAddContatto() {
	document.getElementById("popupAggiungi").style.display = "flex";
}

function chiudiAddContatto() {
	document.getElementById("popupAggiungi").style.display = "none";
}

let indiceContatto = 0;

let contatti = [];

function aggiungiContatto() {
	let nome = document.getElementById("nome").value;
	let cognome = document.getElementById("cognome").value;
	let telefono = document.getElementById("telefono").value;

	if (!nome || !cognome || !telefono) {
		if (nome == "") {
			document.getElementById("nome").style.borderBottom = "2px solid red";
		}
		if (cognome == "") {
			document.getElementById("cognome").style.borderBottom = "2px solid red";
		}
		if (telefono == "") {
			document.getElementById("telefono").style.borderBottom = "2px solid red";
        }

        return;

    }
    
    let contatto = {
        nome: nome,
        cognome: cognome,
        telefono: telefono,
        indice: indiceContatto
    }

    contatti.push(contatto);


	document.getElementById("listaContatti").innerHTML += ` 
    <div class="containerInfoContatto" id= div-${indiceContatto}-contatto>
        <div class="infoContatto">
            <h3 id="nomeContatto-${indiceContatto}">${nome}</h3>
            <h3 id="cognomeContatto-${indiceContatto}">${cognome}</h3>
            <p id="telefonoContatto-${indiceContatto}">${telefono}</p>
        </div>
        <div class="containerBtnEditDelete">
            <span onClick="modificaContatto(${indiceContatto})" id="edit" class="material-symbols-outlined">
                edit
            </span>
            <span onClick="eliminaContatto(${indiceContatto})" id="delete" class="material-symbols-outlined">
                delete
            </span>
        </div>
    </div>
    <div class="containerInfoContattoNascosto" id= div-${indiceContatto}-modifica-contatto>
        <div class="infoContattoNascosto">
            <input style="  width: 130px;
            height: 25px;
            border-radius: 10px;
            text-align: center;
            background-color: #d9d9d9;
            border: none;
            outline: none;
            margin-left: 15px;" id="inputNomeContatto-${indiceContatto}" type="text" placeholder=${nome}></input>
            <input style="  width: 130px;
            height: 25px;
            border-radius: 10px;
            text-align: center;
            background-color: #d9d9d9;
            border: none;
            outline: none;
            margin-left: 15px;" id="inputCognomeContatto-${indiceContatto}" type="text" placeholder=${cognome}></input>
            <input style="  width: 130px;
            height: 25px;
            border-radius: 10px;
            text-align: center;
            background-color: #d9d9d9;
            border: none;
            outline: none;
            margin-left: 15px;" id="inputTelefonoContatto-${indiceContatto}" type="text" placeholder="${telefono}"></input>
        </div>
        <div class="containerBtnEditDeleteNascosto">
            <span onClick = "salvaModificaContatto(${indiceContatto})"id="check" class="material-symbols-outlined">
             check
            </span>
            <span onClick = "annullaModificaContatto(${indiceContatto})"id="cancel" class="material-symbols-outlined">
            cancel
           </span>
            <span onClick="modificaContatto(${indiceContatto})" id="edit" class="material-symbols-outlined">
                edit
            </span>
            <span onClick="eliminaContatto(${indiceContatto})" id="delete" class="material-symbols-outlined">
                delete
            </span>
        </div>
    </div>`;

	indiceContatto++;

	chiudiAddContatto();

	document.getElementById("nome").value = "";
	document.getElementById("cognome").value = "";
	document.getElementById("telefono").value = "";
}

function eliminaContatto(indice) {
	document.getElementById(`div-${indice}-contatto`).remove();
	document.getElementById(`div-${indice}-modifica-contatto`).remove();
}

function modificaContatto(indice) {

	document.getElementById(`div-${indice}-contatto`).style.display = "none";
	document.getElementById(`div-${indice}-modifica-contatto`).style.display =
		"flex";

	let nome = document.getElementById(`nomeContatto-${indice}`).innerText;
	let cognome = document.getElementById(`cognomeContatto-${indice}`).innerText;
	let telefono = document.getElementById(
		`telefonoContatto-${indice}`
	).innerText;

	document.getElementById(`inputNomeContatto-${indice}`).value = nome;

	document.getElementById(`inputCognomeContatto-${indice}`).value = cognome;

	document.getElementById(`inputTelefonoContatto-${indice}`).value = telefono;
}

function salvaModificaContatto(indice) {
    document.getElementById(`div-${indice}-contatto`).style.display = "flex";
    document.getElementById(`div-${indice}-modifica-contatto`).style.display =
        "none";
    
    let nome = document.getElementById(`inputNomeContatto-${indice}`).value;
    let cognome = document.getElementById(`inputCognomeContatto-${indice}`).value;
    let telefono = document.getElementById(`inputTelefonoContatto-${indice}`).value;

    document.getElementById(`nomeContatto-${indice}`).innerText = nome;
    document.getElementById(`cognomeContatto-${indice}`).innerText = cognome;
    document.getElementById(`telefonoContatto-${indice}`).innerText = telefono;

}

function annullaModificaContatto(indice) {
    document.getElementById(`div-${indice}-contatto`).style.display = "flex";
    document.getElementById(`div-${indice}-modifica-contatto`).style.display =
        "none";
}


function cercaContatto() {
    let inputRicerca = document.getElementById("inputRicerca").value;
    let input = inputRicerca.toUpperCase();

 
    let contattiFiltrati = contatti.filter((contatto) => {
        return contatto.nome.includes(input) || contatto.cognome.includes(input) || contatto.telefono.includes(input);
    });

    let listaIdContatti = contattiFiltrati.map((contatto) => {
        return contatto.indice;
    });

    for (let i = 0; i < contatti.length; i++) {
        if (!listaIdContatti.includes(contatti[i].indice)) {
            document.getElementById(`div-${contatti[i].indice}-contatto`).style.display = "none";

        }
        else {
            document.getElementById(`div-${contatti[i].indice}-contatto`).style.display = "flex";
        }
    }
}






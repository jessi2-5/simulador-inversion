



function simulador() {
    const campoNombre = document.getElementById('nombres').value;
    const campoTelefono = document.getElementById('telefono').value;
    const campoEmail = document.getElementById('email').value;
    const campoMonto = parseFloat(document.getElementById('inversion').value);
    const campoTiempo = parseInt(document.getElementById('tiempo').value);
    const conPre = document.getElementById('pre');
    const conPost = document.getElementById('post');
    const showTiempo = document.getElementById('tiempo-show');
    const showInteres = document.getElementById('interes-show');
    const showTotal = document.getElementById('total-show');
    const showGanancia = document.getElementById('ganancia-show');
    const showNombres = document.getElementById('nombres-show');
    const showEmail = document.getElementById('email-show');

  
    if (!campoNombre || !campoTelefono || !campoEmail || !campoMonto || !campoTiempo) {
        alert("complte todo");
        return;
    }

    
    
let tasaInteres = 0;

    switch (campoTiempo) {

        case 1:
            tasaInteres = 0.008; 
            showTiempo.innerText = "12 Meses";
            showInteres.innerText = "0.8%";
            break;
        case 2:

            tasaInteres = 0.013;
            showTiempo.innerText = "24 Meses";
            showInteres.innerText = "1.3%";
            break;
        case 3:
            
            tasaInteres = 0.017; 
            showTiempo.innerText = "36 Meses";
            showInteres.innerText = "1.7%";
            break;

        default:
            alert("Tiempo de Inversion");
            return;
    }


    const gananciaMensual = campoMonto * tasaInteres;
    const gananciaTotal = gananciaMensual * campoTiempo * 12; 
    const total = campoMonto + gananciaTotal;

    
    showTotal.innerText = total.toFixed(2);
    showGanancia.innerText = gananciaTotal.toFixed(2);
    showNombres.innerText = campoNombre;
    showEmail.innerText = campoEmail;


    conPost.classList.remove("disabled");
    conPre.classList.add("disabled");
}


const boton = document.getElementById("simulador-btn");
boton.addEventListener("click", simulador);




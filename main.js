const form = document.getElementById ('meuFormulario');

form.addEventListener('submit', function(e) {
    e.preventDefault();

const campoA = parseFloat (document.getElementById ('campoA').value);
const campoB = parseFloat (document.getElementById ('campoB').value);
const mensagemSucesso = "Tudo certo! O formulário é valido!"

if (campoB > campoA) 
    {alert (mensagemSucesso)
    
        document.getElementById ('campoA').value = ''
        document.getElementById ('campoB').value = ''
    }
else 
    {alert ("Atenção! O campo B deve ser maior que A")}

})

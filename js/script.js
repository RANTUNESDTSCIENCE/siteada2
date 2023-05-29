document.getElementById("BotaoEnviar").addEventListener("Click", ValidaFormulario)

function ValidaFormulario() {
  if(document.getElementById("nome").value != "" && 
  document.getElementById("email").value != "" && document.getElementById("Telefone").Value != ""){
  alert("Prontinho, você reberá as novidades por email!")
  }else{
    alert("Por favor preencha corretamente os campos nome e email!")
 }
}  
}




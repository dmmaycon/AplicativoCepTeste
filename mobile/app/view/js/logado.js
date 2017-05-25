function sair(){
	window.location.href = "index.html";
}


function consultaCep(){
	let cep = $('#cep').val();

	if(cep == "" || cep.length > 8 || cep.length < 8){
		alert("CEP INCORRETO!");
		window.location.href = "logado.html";
	}

    $.getJSON("https://viacep.com.br/ws/" + cep +"/json/", function(response){
  		$('#logr').val(response.logradouro);
        $('#bairro').val(response.bairro);
        $('#loc').val(response.localidade);
        $('#est').val(response.uf);
	})
}



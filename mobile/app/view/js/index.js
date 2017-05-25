function validaUsuario(){
	let usr = $('#usr').val();
	let psw = $('#psw').val();
	if(usr == "" || psw == ""){
		alert('Usuário ou senha em branco!');
	}else if(usr == "teste" && psw == "123456"){
		window.location.href = "logado.html";
		if(temRede() == false){
		alert("Algumas funcionalidades necessitam de internet! Parece você está desconectado!");
		}
	}else{
		alert('Senha ou Usuário incorretos!');
		$('#usr').val("");
		$('#psw').val("");
	}
}

function temRede(){
	let temRede = navigator.onLine;
	console.log("Tem rede: " + temRede);
	return temRede;
}




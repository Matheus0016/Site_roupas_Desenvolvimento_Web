	function logar() {
	    var emailLogin = document.getElementById("emailLogin").value;
	    var senhaLogin = document.getElementById("senhaLogin").value;

	    if (senhaLogin == "" || emailLogin == "") {
	        alert("Preencha todos os campos");
	    } else {
	        alert("Seja bem vindo " + emailLogin);

	    }
	}

	 function validar(){
                var email = document.getElementById("email").value;

                if(email==""){
                    alert ("Preencha o campo e-mail!");
                }else{
                    alert ("Seu e-mail foi encaminhado com sucesso!");
                }
            }

 function AddCarrinho(produto, qtd, valor, posicao)
    {
        localStorage.setItem("produto" + posicao, produto);
        localStorage.setItem("qtd" + posicao, qtd);
        valor = valor * qtd;
        localStorage.setItem("valor" + posicao, valor);
        alert("Produto adicionado ao carrinho!");
    }

      function frete() {
            var cep = document.getElementById("cep").value;
            if (cep == "") {
                alert("Preencha o campo com seu cep");

            } else {
                document.getElementById("cepRes1").innerHTML = "Entrega normal: R$22,47";
                document.getElementById("cepRes2").innerHTML = "Entrega Express: R$12,58";

            }


        }

       
            function validar(){
                var nome = document.getElementById("nome").value;
                var email = document.getElementById("email").value;
                var mensagens = document.getElementById("caixaMensagem").value;
                
            
                if(nome==""||email==""||caixaMensagem==""){
                    alert ("Preencha todos os campos!");
                }else{
                    alert(nome+ " "+"sua mensagem foi enviada com sucesso!");
                }
           
            }
    


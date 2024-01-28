/*

Objetivo 1 -  quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção  de plataforma

    Passo 1 - Pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele
    Passo 2 - Pegar o elemento do conteúdo que precisa ser mostrado
    Passo 3 - Pegar o clique do usuário no js
    Passo 4 - Quando o usuário clicar no botão, adicionar a clase ativo na listagem de plataformas dentro do botão pra que o conteúdo dele apareça

Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser  escondido

    Passo 1 - verificar se o botão já está aberto, se sim, odevemos remover a classe ativo pra que esconda ele novamente

*/

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {    
    
    elementoPlataformas.classList.toggle("ativo");

});




//tentar consertar BUGS_______(NÃO aparece o "O" quando a cpu joga, mas a CPU segue jogando "?!?!?!")
//_____________________(Se a cpu vence o "botao iniciar jogo" funciona para reiniciar a partida; Se o jogador ganha o botão NAO funciona)

var jogo=[]; //fica armazenado as jogada
var tabuleiro=[]; // o jogo que vc ve na tela
var quemJoga=0; //jogador e 1=cpu
var verifica; //se houve vencedor ou nao
var jogando=true;
var nivel=1;
var jogadaCpu=1;
var quemComeca=1;

function cpuJoga (){
    if(jogando){
        var linha, coluna;
        if(nivel==1){
            do{//math.round arredonda o valor sorteado pelo random, sorteia até o número 2 porque é o ºmax de linha e coluna no jogo
                linha=Math.round(Math.random()*2);
                coluna=Math.round(Math.random()*2);
            }while(jogo[linha][coluna]!="");
            jogo[linha][coluna]="O";
        }else if(nivel==2){
            //sera implementado o nivel 2
        }
        verifica=verificaVitoria();
        if(verifica!=""){
            alert(verifica+"venceu");
            jogando=false;
        }
        atualizaTabuleiro();
        quemJoga=0;
    }
}

function verificaVitoria(){
    var linha, coluna;
    for(linha=0;linha<3;linha++){
        if((jogo[linha][0]==jogo[linha][1])&&(jogo[linha][1]==jogo[linha][2])){
            return jogo[linha][0];
        }
    }
    for(coluna=0;coluna<3;coluna++){
        if((jogo[0][coluna]==jogo[1][coluna])&&(jogo[1][coluna]==jogo[2][coluna])){
            return jogo[0][coluna];
        }
    } 
    //checar as diagonais
    if((jogo[0][0]==jogo[1][1])&&(jogo[1][1]==jogo[2][2])){
        return jogo[0][0];
    }
    if((jogo[0][2]==jogo[1][1])&&(jogo[1][1]==jogo[2][0])){
        return jogo[0][2];
    } 
    return "";
}

function jogar (posicao) {
    if((jogando)&&(quemJoga==0)){
        switch(posicao){
            case 1:
                if(jogo[0][0] ==""){
                    jogo[0][0] ="X";
                    quemJoga = 1;
                }
            break;
            case 2:
                if (jogo[0][1] ==""){
                    jogo[0][1] ="X";
                    quemJoga = 1;
                }
            break;
            case 3:
                if (jogo[0][2] ==""){
                    jogo[0][2] ="X";
                    quemJoga = 1;
                }
            break;
            case 4:
                if (jogo[1][0] ==""){
                    jogo[1][0] ="X";
                    quemJoga = 1;
                }
             break;
            case 5:
                if (jogo[1][1] ==""){
                    jogo[1][1] ="X";
                    quemJoga = 1;
                }
            break;
            case 6:
                if (jogo[1][2] ==""){
                    jogo[1][2] ="X";
                    quemJoga = 1;
                }
            break;
            case 7:
                if (jogo[2][0] ==""){
                    jogo[2][0] ="X";
                    quemJoga = 1;
                }
             break;
            case 8:
                if (jogo[2][1] ==""){
                    jogo[2][1] ="X";
                    quemJoga = 1;
                }
            break;
            default://caso 9
                if (jogo[2][2] ==""){
                    jogo[2][2] ="X";
                    quemJoga = 1;
                }    
            break;  
        }
        if(quemJoga==1){
             atualizaTabuleiro();
             verifica=verificaVitoria();
             if(verifica!=""){
                alert(verifica+"venceu");
                jogando=false;
             }
             cpuJoga();
        }    
    }
}

function atualizaTabuleiro(){
    for(var linha=0;linha<3;linha++){
        for(var coluna =0;coluna<3;coluna++){
            if(jogo[linha][coluna] == "X"){
                tabuleiro[linha][coluna].innerHTML="X";
                tabuleiro[linha][coluna].style.cursor= "default";
            }else if(jogo[linha][coluna] == "O"){
                tabuleiro[linha][coluna.innerHTML = "O"];
                tabuleiro[linha][coluna].style.cursor = "default";
            }else {
                tabuleiro[linha][coluna].innerHTML ="";
                tabuleiro[linha][coluna].style.cursor="pointer";
            }
        }
    }
}

function inicia (){
    jogando = true;
    jogadaCpu = 1;
    jogo=[
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    tabuleiro = [
        [document.getElementById("posicao1"), document.getElementById("posicao2"), document.getElementById("posicao3")],
        [document.getElementById("posicao4"), document.getElementById("posicao5"), document.getElementById("posicao6")],
        [document.getElementById("posicao7"), document.getElementById("posicao8"), document.getElementById("posicao9")]
    ];
    atualizaTabuleiro();

}

window.addEventListener("load", inicia);

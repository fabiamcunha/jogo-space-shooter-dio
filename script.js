let order=[];//order do jogo aleatoriamente
let clickedOrder=[];//order dos nosso clicks
let score = 0;//erros

//0 =verde
//1 =vermelho
//2 =amarelo
//3 =azul

let blue = document.querySelector('.blue');
let red = document.querySelector('.red');
let green = document.querySelector('.green');
let yellow = document.querySelector('.yellow');

// gerar orderm das cores
let shuffOrder = () => {
    let colorOrder=Math.floor(Math.random()*4)
    order[order.length]=colorOrder;
    clickedOrder = [];
    //laço for que chama uma funcao toda vez que roda e guarda em uma  variavel 
    //e chama uma funcao que adicina uma classe toda vez o elemento e incrementado
    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor,Number(i)+1)
    }
}
//acenda a proxima cor
let lightColor = (element,number)=>{
    number=number*500;
    setTimeout(()=>{
        element.classList.add('selected')
    },number-250);
    setTimeout(()=>{
        element.classList.remove('selected');
    })
}
// verifica a ordem clicada e mesma da ordem gerada no jogo
let checkOrder = () => {
    for (i in clickedOrder){
       if(checkOrder[i] !=order[i]){
           gameOver();
           break;
       } 
    }
    if(clickedOrder.length==order.length){
        alert(`pontuação :${score}\nVocê acertou iniciando proximo nivel`);
        nextLevel()
    }
}
//funcao para click do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length]=color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250)
    
}
//função retorna a cor
let createColorElement = (color) => {
    if (color== 0){
        return green;
    }else if(color==1){
        return red;
    }else if(color==2){
        return yellow
    } else if(color==3){
        return blue
    }
}
//função para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffOrder();
}
//função game over
let gameOver = () => {
    alert (`Pontuação:${score}\nVocê perdeu\nClique em OK para iniciar um  novo jogo`);
    order=[];
    clickedOrder=[];

    playGame()
}
//iniciar jogo
let  playGame=()=>{
    alert('bem vindo ao genius!')
    score=0;
    nextLevel();
}
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


playGame()

const canvas = document.getElementById ("SnakeCanvas");
const gitd = canvas.getContext ("2d");
const box = 20;
let snake = [{x:10, y:10}];
let direction = "right";
let cumida = {};
let cumidaGoGoGo = 0;
let velocipeed = 150;

function drawSprites (){
    gitd.fillStyle = "beige";
    snake.forEach(segment => {
        gitd.fillRect (segment.x *box, segment.y *box, box, box);
        gitd.strokeStyle = "#f2f2f2";
        gitd.strokeRect (segment.x *box, segment.y *box, box, box);
    });
}

function functionDraw (){
    functionDrawBackground ();
    drawSprites ();
    movePiuPiu ();
    drawCumida ();
}

cumida = drawCantinhoDaCumida ();
let waitOrEnglishOrSpanish = setInterval (functionDraw, 150);

document.addEventListener ("keydown", e =>{
 switch (e.key)   {
    case "w":
        if (direction != "down") direction = "up";
        //console.log ("para cima");
        break;
    case "s":
        if (direction != "up") direction = "down";
        //console.log ("para baixo");
        break;
    case "a":
        if (direction != "right") direction = "left";
        //console.log ("para esquerda");
        break;
    case "d":
        if (direction != "left") direction = "right";
        //console.log ("para direita");
        break;
 }
})

function movePiuPiu (){
    const hsktkt = {x:snake [0].x, y:snake [0].y};
    switch (direction){
        case "up":
            hsktkt.y--;
            break;
        case "down":
            hsktkt.y++;
            break;
        case "left":
            hsktkt.x--;
            break;
        case "right":
            hsktkt.x++;
            break;
    }

    if (hsktkt.x < 0 || hsktkt.x >= canvas.width / box || hsktkt.y < 0 || hsktkt.y >= canvas.height / box){
        clearInterval (waitOrEnglishOrSpanish);
        alert ("!Você foi jogar no Vasco!");
        return;
    }
    if (snake.some (segment => segment.x === hsktkt.x && segment.y === hsktkt.y)){
        clearInterval (waitOrEnglishOrSpanish);
        alert ("!Você bateu as botas do Noel!");
        return;
    }

    if (hsktkt.x === cumida.x && hsktkt.y === cumida.y) {
        cumida = drawCantinhoDaCumida ();
        cumidaGoGoGo ++;
        if (cumidaGoGoGo%5 === 0){
            velocipeed *= 0.8;
            clearInterval (waitOrEnglishOrSpanish);
            waitOrEnglishOrSpanish = setInterval (functionDraw, velocipeed);
        }
    } else {
        snake.pop ();
    }

    //add nova hsktkt no piu piu;
    snake.unshift (hsktkt);
}
function functionDrawBackground (){
    gitd.clearRect (0, 0, canvas.width, canvas.height);
    for (let f = 0; f<canvas.width / box; f++){
        for (let d = 0; d<canvas.height / box; d++){
            gitd.fillStyle = (f + d) % 2 === 0 ? "#008000": "#006400";
            gitd.fillRect (f * box, d * box, box, box);
        }
    }
}

function drawCumida () {
    gitd.fillStyle = "red";
    gitd.fillRect (cumida.x * box, cumida.y * box, box, box);
}

function drawCantinhoDaCumida (){
    let cumidaNPodreX, cumidaNPodreY;
    do {
        cumidaNPodreX = Math.floor(Math.random() * (canvas.width / box));
        cumidaNPodreY = Math.floor(Math.random() * (canvas.height / box));
    } while (snake.some (segment => segment.x === cumidaNPodreX && segment.y === cumidaNPodreY));
    return {x:cumidaNPodreX, y:cumidaNPodreY}
}

function functionDrawCoreS (){
    gitd.fillStyle = "White";
    gitd.font = "30px Verdana";
    gitd.fillText ("Palitos: ${cumidaGoGoGo}.", 10, 30);
}


//oiabadaaaaaaaaaaaagdjskdlfjsdfkegosfsdofjslfgear5fzsdfhe9rg70rdpfrdpfg80k8fchgoi 

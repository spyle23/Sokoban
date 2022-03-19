/*--------------------création d'une interface----------------------------*/

let container;
let Case;
let board =[
    [0,0,0,0,5,5],
    [0,5,5,5,0,5],
    [0,2,3,5,2,5],
    [0,5,1,5,5,5],
    [0,5,3,5,5,5],
    [0,5,5,5,0,0]
];

const BLOCK = 0;
const PERSO = 1;
const CARTON = 2;
const CIBLE = 3;
const CARTONOK = 4;
const EMPTY = 5;
const PERSOCIBLE = 6;

let perso = {
    x : 3,          //x ici design la coordonnée ligne
    y : 2           // y la colonne
}


    
/*------------------création d'une classe interface pour gérer l'interface---------------------------------*/
class Interface{
    createDiv() {
         container = document.querySelector(".container");
         board.forEach(element => {
             element.forEach(value => {
                 Case  = document.createElement("div");
                 switch (value) {
                     case 0:
                         Case.classList.add("block");
                         break;
                    case 1:
                        Case.classList.add("personnage");
                        break;
                    case 2:
                        Case.classList.add("carton");
                        break;
                    case 3:
                        Case.classList.add("cible");
                        break;
                    case 4:
                        Case.classList.add("cartonOk");
                        break;
                    case 5:
                        Case.classList.add("empty");
                        break;
                    case 6:
                        Case.classList.add("persoCible");
                 }
                 container.appendChild(Case);
             })
         });
    }

    render() {
        let boxes = document.querySelector(".container").children;
        let len = [board.length, board[0].length];
        for (let i=0; i<len[0]; ++i) {
            for (let j=0; j<len[1]; ++j) {
                /*console.log(board[i][j]);*/
                switch (board[i][j]) {
                case BLOCK:
                    boxes[i*len[1]+j].className = "block";
                    break;
                case CARTON:
                    boxes[i*len[1]+j].className = "carton";
                    break;
                case CIBLE:
                    boxes[i*len[1]+j].className = "cible";
                    break;
                case EMPTY:
                    boxes[i*len[1]+j].className = "empty";
                    break;
                case PERSO:
                    boxes[i*len[1]+j].className = "personnage";
                    break;
                case PERSOCIBLE:
                    boxes[i*len[1]+j].className = "persoCible";
                    break;
                case CARTONOK:
                    boxes[i*len[1]+j].className = "cartionOk";
                    break;
                }
                
            }
        }
    }
};

let ui = new Interface;
ui.createDiv();

console.log(board.length);


/*------------------------partie logique--------------------------*/

document.addEventListener("keyup", function (e) {
    switch (e.key) {
        case "ArrowUp":
            if (perso.x > 0) {
                switch (board[perso.x - 1][perso.y]) {
                case CARTON:
                    if (perso.x > 1) {
                        let content = board[perso.x -2][perso.y];
                        if (content == EMPTY ) {
                            board[perso.x][perso.y] = EMPTY;
                            board[perso.x-1][perso.y] = PERSO;
                            board[perso.x-2][perso.y] = CARTON;
                            perso.x--;
                        }
                        else if(content == CIBLE){
                            board[perso.x][perso.y] = EMPTY;
                            board[perso.x-1][perso.y] = PERSO;
                            board[perso.x-2][perso.y] = CARTONOK;
                            perso.x--;
                        }
                    }
                    break;
                
                case BLOCK: break;
                
                case CIBLE:
                    board[perso.x][perso.y] = EMPTY;    
                    perso.x--;
                    board[perso.x][perso.y] = PERSOCIBLE;
                    break;
                default:
                    if (board[perso.x][perso.y]==PERSOCIBLE) {
                        board[perso.x][perso.y] = CIBLE;
                        perso.x--;
                        board[perso.x][perso.y] = PERSO;
                    }
                    else{
                        board[perso.x][perso.y] = EMPTY;
                        perso.x--;
                        board[perso.x][perso.y] = PERSO;
                    }
                    break;
                }
            }
            break;
        case "ArrowDown":   
            if (perso.x < 5) {
                switch (board[perso.x + 1][perso.y]) {
                case CARTON:
                    if (perso.x < 4) {
                        let content = board[perso.x +2][perso.y];
                        if (content == EMPTY ) {
                            board[perso.x][perso.y] = EMPTY;
                            board[perso.x+1][perso.y] = PERSO;
                            board[perso.x+2][perso.y] = CARTON;
                            perso.x++;
                        }
                        else if(content == CIBLE){
                            board[perso.x][perso.y] = EMPTY;
                            board[perso.x+1][perso.y] = PERSO;
                            board[perso.x+2][perso.y] = CARTONOK;
                            perso.x++;
                        } 
                        else{
                            board[perso.x][perso.y] = PERSO;
                            perso.x = perso.x;
                        }
                    } 
                    break;
                case BLOCK: break;
                
                case CIBLE:
                    board[perso.x][perso.y] = EMPTY;
                    perso.x++;
                    board[perso.x][perso.y] = PERSOCIBLE;
                    break;

                    default:
                        if (board[perso.x][perso.y]==PERSOCIBLE) {
                            board[perso.x][perso.y] = CIBLE;
                            perso.x++;
                            board[perso.x][perso.y] = PERSO;
                        }
                        else{
                            board[perso.x][perso.y] = EMPTY;
                            perso.x++;
                            board[perso.x][perso.y] = PERSO;
                        }
                        break;
                }
            }
            break;
        case "ArrowLeft":
            if (perso.y > 0) {
                switch (board[perso.x][perso.y -1]) {
                case CARTON:
                    if (perso.y > 1) {
                        let content = board[perso.x][perso.y - 2];
                        if (content == EMPTY ) {
                            board[perso.x][perso.y] = EMPTY;
                            board[perso.x][perso.y - 1] = PERSO;
                            board[perso.x][perso.y - 2] = CARTON;
                            perso.y--;
                        }
                        else if(content == CIBLE){
                            board[perso.x][perso.y] = EMPTY;
                            board[perso.x][perso.y - 1] = PERSO;
                            board[perso.x][perso.y - 2] = CARTONOK;
                            perso.y--;
                        }
                        else{
                            board[perso.x][perso.y] = PERSO;
                            perso.y = perso.y;
                        }
                    } 
                    break;
                case BLOCK: break;
                
                case CIBLE:
                    board[perso.x][perso.y] = EMPTY;
                    perso.y--;
                    board[perso.x][perso.y] = PERSOCIBLE;
                    break;

                    default:
                        if (board[perso.x][perso.y]==PERSOCIBLE) {
                            board[perso.x][perso.y] = CIBLE;
                            perso.y--;
                            board[perso.x][perso.y] = PERSO;
                        }
                        else{
                            board[perso.x][perso.y] = EMPTY;
                            perso.y--;
                            board[perso.x][perso.y] = PERSO;
                        }
                        break;
                }
            }

            break;
        case "ArrowRight":
            if (perso.y < 5) {
                switch (board[perso.x][perso.y + 1]) {
                case CARTON:
                    if (perso.y < 4) {
                        let content = board[perso.x][perso.y + 2];
                        if (content == EMPTY ) {
                            board[perso.x][perso.y] = EMPTY;
                            board[perso.x][perso.y + 1] = PERSO;
                            board[perso.x][perso.y + 2] = CARTON;
                            perso.y++;
                        }
                        else if(content == CIBLE){
                            board[perso.x][perso.y] = EMPTY;
                            board[perso.x][perso.y + 1] = PERSO;
                            board[perso.x][perso.y + 2] = CARTONOK;
                            perso.y++;
                        }
                        else{
                            board[perso.x][perso.y] = PERSO;
                            perso.y = perso.y;
                        }
                    } 
                    break;
                case BLOCK: break;
                
                case CIBLE:
                    board[perso.x][perso.y] = EMPTY;
                    perso.y++;
                    board[perso.x][perso.y] = PERSOCIBLE;
                    break;

                    default:
                        if (board[perso.x][perso.y]==PERSOCIBLE) {
                            board[perso.x][perso.y] = CIBLE;
                            perso.y++;
                            board[perso.x][perso.y] = PERSO;
                        }
                        else{
                            board[perso.x][perso.y] = EMPTY;
                            perso.y++;
                            board[perso.x][perso.y] = PERSO;
                        }
                        break;
                }
            }
            break;
    }
    ui.render();
})
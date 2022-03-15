/*--------------------création d'une interface----------------------------*/

let container;
let ligne;
let Case;
let board =[
    [0,0,5,0,0],
    [0,5,2,2,0],
    [0,3,1,5,0],
    [0,0,3,0,0],
    [0,0,0,0,0]
];

const BLOCK = 0;
const PERSO = 1;
const CARTON = 2;
const CIBLE = 3;
const CARTONOK = 4;
const EMPTY = 5;

let perso = {
    x : 2,          //x ici designe la coordonnée ligne
    y : 2           // y la colonne
}



/*------------------------partie logique--------------------------*/
document.addEventListener("keyup",function (e) {
    switch (e.key) {
        case "ArrowUp":
            if (perso.x > 0) {
                console.log(perso.x);
                if (board[perso.x - 1][perso.y] == CARTON) {
                    console.log(board[perso.x - 1][perso.y]);
                    if (perso.x > 1 ) {
                        let content = board[perso.x -2][perso.y];
                        if (content == EMPTY || content == CIBLE) {
                            board[perso.x][perso.y] = EMPTY;
                            console.log(container.children[perso.x].children[perso.y]);
                            board[perso.x-2][perso.y] = CARTON;
                            board[perso.x-1][perso.y] = PERSO;
                            perso.x--;
                            if(content == CIBLE){
                                board[perso.x -2][perso.y] = CARTONOK;
                            }
                        }
                    }
                }
            }
            break;
        case "ArrowDown":

            break;
        case "ArrowLeft":

            break;
        case "ArrowRight":

            break;
    
    }
}) 
    
/*------------------création d'une classe interface pour gérer l'interface---------------------------------*/
class Interface{
    createDiv() {
         container = document.querySelector(".container");
         board.forEach(element => {
            ligne  = document.createElement("div");
            container.appendChild(ligne);
             element.forEach(value =>{
                Case = document.createElement("div");
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
                    case 5:
                        Case.classList.add("empty");
                        break;
                 }
                 ligne.appendChild(Case);
             })
         });

    }
};

let ui = new Interface;
ui.createDiv();

console.log(container.children[2].children[1]);




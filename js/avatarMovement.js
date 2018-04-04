

var playerAx = 150;
var playerAy = 150;
var playerAHeight = 50;
var playerAWidth = 50;


var playerBx = 550;
var playerBy = 550;
var playerBHeight = 50;
var playerBWidth = 50;


var playerA = drawPlayer(playerAx, playerAy, playerAHeight, playerAWidth, 'pink', 'playerA');
var playerB = drawPlayer(playerBx, playerBy, playerBHeight, playerBWidth, 'blue', 'playerB');


var distance = 50;
var time = 40;


function drawPlayer (x, y, h, w, fill, id) {
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttributeNS(null, 'x', x);
    rect.setAttributeNS(null, 'y', y);
    rect.setAttributeNS(null, 'height', h);
    rect.setAttributeNS(null, 'width', w);
    rect.setAttributeNS(null, 'fill', fill);
    rect.setAttributeNS(null, 'id', id);
    document.getElementById('svgOne').appendChild(rect);
    return document.getElementById(id);
}


//  <-  37 = left arrow,  39 = right arrow , 38 = up arrow, 40 = down arrow
//  <-  65 = A (left) ,  68 = D (right)  , 87 = W (up) , 83 = S (down)
function keyDownHandler(e) {
    switch(e.keyCode) {
        case 37:
            $(playerA).animate({x: "-=" + distance}, time ,'linear');
            break;
        case 39:
            $(playerA).animate({x: "+=" + distance}, time ,'linear');
            break;
        case 38:
            $(playerA).animate({y: "-=" + distance}, time ,'linear');
            break;
        case 40:
            $(playerA).animate({y: "+=" + distance}, time ,'linear');
            break;

        case 65:
            $(playerB).animate({x: "-=" + distance}, time ,'linear');
            break;
        case 68:
            $(playerB).animate({x: "+=" + distance}, time ,'linear');
            break;
        case 87:
            $(playerB).animate({y: "-=" + distance}, time ,'linear');
            break;
        case 83:
            $(playerB).animate({y: "+=" + distance}, time ,'linear');
            break;
        default:
            downPressed = false;            //switch needs a default.. not sure what this should be??
    }
}


//event listener for player's avatar
document.addEventListener("keydown", keyDownHandler, false);



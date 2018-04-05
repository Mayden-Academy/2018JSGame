

//$('#player1').setAttribute('x', '150' ) ;

var playerAx = 150;
var playerAy = 150;
var playerAHeight = 50;
var playerAWidth = 50;
var playerAStartX = 150;
var playerAStartY = 150;
var speed = 50;                     //change in x. As this is based on setInterval rate = speed



var playerBx = 550;
var playerBy = 550;
var playerBHeight = 50;
var playerBWidth = 50;
var playerBStartX = 550;
var playerBStartY = 550;


var playerA = drawPlayer(playerAx, playerAy, playerAHeight, playerAWidth, 'pink', 'playerA');
var playerB = drawPlayer(playerBx, playerBy, playerBHeight, playerBWidth, 'blue', 'playerB');


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


const setBg = randomColor();

let r1 = Math.floor(Math.random() * 256 );
let r2 = Math.floor(Math.random() * 256 );
let r3 = Math.floor(Math.random() * 256 );

function randomColor() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

var color = randomColor();

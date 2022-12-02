// dorvoljin

// const num = 7;
// let output = ''

// for(let i = 1; i <=num; i++) {
//     for(let j = 1; j <= num; j++ ) {
//        if(i == 1 || i == num || j == 1 || num == j || i == j|| j + i == num + 1) {
//             output += '* '
//        } 
//        else {
//             output += '  '
//        }
//     }
//     output += '\n'
// }

// console.log(output)


// gatsuur

const rows = 10;
let m = " "

for(let i = 0; i <= rows ; i++) {
   for(let j = 1; j <= rows - i; j++ ) { 
         m += " " ;
   }
for(let k = 1; k <= i; k++)
{
    m += " *" ;
}
m += '\n';

}


console.log(m);


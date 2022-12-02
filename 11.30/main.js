// let a1 = 'Ulaanbaatar'
// let a2 =  'SBD'
// let a3 = 1162
// let a4 = 'Chinggis khaan'
// let a5 = 'Bayanzurkh'

// let q1 = prompt("Mongol ulsiin niislel?")
// let q2 = prompt("Chinggis talbai ali duuregt bdag ve")
// let q3 = prompt("Chingis khaan heden ond tursun be?")
// let q4 = prompt("Shine ongotsnii buudliin ner?")
// let q5 = prompt("Ta ali duuregt amidardag ve")
// let point=0

// if(a1 == q1.toLowerCase()) 
// { 
//     point += 1;
// }
// if (a2 == q1.toLowerCase())
// {
//     point += 1;
// }
// if (a3 == q3.toLowerCase())
// {
//     point += 1;
// }
// if (a4 == q4.toLowerCase())
// {
//     point += 1;
// }

// if (a5 == q5.toLowerCase())
// {
//     point += 1;
// }

// console.log(point)

// let mistake = 5 - point;
// if(mistake == 0) 
// {
//     alert('Ta bugdiig zov hariullaa')
// }
// else { console.log('ta', mistake, 'aldsan bn')}



// 1-1000 hurtelh toonii random toog olooroi
const min =prompt('Hamgiin baga too oruulna uu') 
const max = prompt('Hamgiin ih too oruulna uu')


let random = Math.floor(Math.random() * (Number(max) - Number(min) + 1) + Number(min))

console.log(random)

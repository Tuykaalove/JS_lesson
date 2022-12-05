// console.log('day 15-array');
// let F1 = "Kou"
// let F2 = "Lio"
// let F3 = "Var"
// let F4 = "Tch"
// let F5 = "Dem"
// let F6 = "Gri"
// let F7 = "Her"
// let F8 = "Rab"
// let F9 = "Gir"
// let F10 = "Mba"
// let F11 = "Upa"

// let P1 = "Lew"
// let P2 = "Szy"
// let P3 = "Fra"
// let P4 = "Ber"
// let P5 = "Zie"
// let P6 = "Kam"
// let P7 = "Cas"
// let P8 = "Gil"
// let P9 = "Szc"
// let P10 = "Kry"
// let P11 = "Asd"

// let FrenchPlayers = ['Kou', 'Lio', 'Var', 'Tch', 'Dem', 'Gri', 'Her', 'Rab', 'Gir', 'Mba', 'Upa' ]

// let PolishPlayers = ['Lew','Szy', 'Fra', 'Ber', 'Zie', 'Kam','Cas', 'Gil','Szc', 'Kry', 'Asd']

// console.log(FrenchPlayers);
// console.log(F2);
// F3 = 'Par';
// console.log(F3);

// FrenchPlayers[1] = 'Par'
// console.log(FrenchPlayers);
// console.log(FrenchPlayers[1]);


// for(let i =0; i < 11; i++) {
//     console.log(FrenchPlayers[i]);
// }

// console.log(PolishPlayers);
// for(let j =0; j < PolishPlayers.length; j++){
//     console.log(PolishPlayers[j]);
// }

// let numbers = [1,2,3,5,10,11,3,5,8];

// for(let k = 0; k < numbers.length; k++) {
//     if(numbers[k] % 2 == 0) {
//         console.log(numbers[k]+3);
//     }
// }

// for(let k = 0; k < numbers.length; k++) {
//     numbers[k] = numbers[k] + 4;
// }
// console.log(numbers);

// Utguudiin niilberiig oloh

// let sum = [1,2,3,5,10,11,3,5,8]
// for(let i = 0; i < sum.length; i++) {
//     // console.log(sum[i]);
//     sum +=sum[i];
  
// }
// console.log(sum);

//for loop ashiglaad [1,2,4,5,6] => [6,5,4,2,1]
// let m = [1,2,4,5,6];
// for(let i = 0; )

//for loop ashiglaad tuhain array dotor bgaa utguud ni prime number mun esehiig shalgah
// [1,4,3,5] => [Yes, No, Yes, Yes]

//tik tok

let tiktok = [['*','*','*'],['*','*','*'], ['*','*','*']]

for(let i = 0;  i < tiktok.length; i++) {
    let output = " ";
    for(let j = 0; j < tiktok[i].length; j++){
        output = "|" + tiktok[i][j] + "|";
        
    }
   
}
console.log(output);
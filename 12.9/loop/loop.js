
// // loop 1 deh daalgavar

// for(let i =0; i <= 10; i++)
// {
//     console.log(i);
// }

// // sondgoi too hevleh

// let result = 0;
// for(let i =0; i <= 10; i++)
// {
//    if(i % 2 == 0)
//    {
    
//     console.log(i + " "+"Number is even");
//    }
//    else {
//     console.log(i + " " + "number is odd");
//    }
  
// }

// // 100 хүртэлх натурал тооны нийлбэрийг олох программ бич

// let niilber = 0;
// for(let j=0; j <= 100; j++)
// {
//     niilber = niilber + j
    
    
// }
// console.log(niilber);

//  N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич

// let n = prompt("Ta toogoo oruulna uu.")

// let sum = 0;

// for(let i = 0; i <= n; i++) {

//     sum = sum + i;
// }

// console.log(sum);

// Өгөгдсөн тоог анхны мөн эсэхийг олох программ бич

let n = prompt("too oruulna uu");
let huvaagch = 0;
for(i = 1; i < n; i++)
{
    
    if( n % i == 0){
        huvaagch = huvaagch + 1;
    }
    
}
let message 
if(huvaagch == 1){
    message= "ni anhnii too mun"
}else{message = "anhnii too bish"}
console.log(n + message)
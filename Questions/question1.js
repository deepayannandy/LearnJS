const inputString="123a5"
let reasult=0
const alf="abcdefghijklmnopqrstuvwxyz"
const alfabets=[...alf]
for(let i=0;i<inputString.length;i++){
   if(isNaN(inputString.charAt(i))){
    reasult=reasult+(alfabets.indexOf(inputString[i])+1)
   }else{
    reasult=reasult+Number(inputString.charAt(i))
   }
}
if((reasult%3)==0){
    reasult=reasult/3
}
console.log(reasult)
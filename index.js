const base = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
                    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "a","b","c","d","e","f","g","h","i","j","k","l","m",
                    "n","o","p","q","r","s","t","u","v","w","x","y","z"];
let characters=base
const pass1 =document.getElementById("password1")
const pass2 =document.getElementById("password2")
const btnGenerator=document.getElementById("password-btn")
const copyL=document.getElementById("copy-left")
const copyR=document.getElementById("copy-right")
const switchS=document.getElementById("switch-symbol")
const switchN=document.getElementById("switch-number")
let passGenerated1=""
let passGenerated2=""
let symbols=""
let numbers=""
function passGenerate(){
    console.log(switchS.checked)
    console.log(switchN.checked)
    characters=base
    if(!switchN.checked){
        numbers=""
    }
    if(!switchS.checked){
        symbols=""
    }
    const digits=document.getElementById("digit-number")
    let count= digits.valueAsNumber
    if (count<8) {
        alert("The password must contain 8 characters at least"); 
        passGenerated1=""
        passGenerated2=""
        digits.value=""
    }
    else if(count>20){
        alert("The password must contain 20 characters at most");
        passGenerated1=""
        passGenerated2=""
        digits.value=""
    }
    else{
        characters=characters.concat(symbols)
        characters=characters.concat(numbers)
        for (let i=0;i<count*2;i++){
            if(i<count){
                let randomIndex= Math.floor(Math.random()*characters.length)
                passGenerated1+=characters[randomIndex]
            }
            else{
                let randomIndex= Math.floor(Math.random()*characters.length)
                passGenerated2+=characters[randomIndex]
            }
        }
        pass1.textContent=passGenerated1
        pass2.textContent=passGenerated2
        passGenerated1=""
        passGenerated2=""
        digits.value=""
    }
}
function copyLeft(){
    var copyText = document.getElementById("password1");
    navigator.clipboard.writeText(copyText.textContent);
    // Alert the copied text
    alert("Copied the text: " + copyText.textContent);
}
function copyRight(){
    var copyText = document.getElementById("password2");
    navigator.clipboard.writeText(copyText.textContent);
    // Alert the copied text
    alert("Copied the text: " + copyText.textContent);
}
function switchSymbol(){
    symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-",
                  "+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
}
function switchNumber(){
    numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
}
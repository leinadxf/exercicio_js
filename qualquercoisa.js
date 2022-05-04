// qualquercoisa

function ShowHelloMessage() {
    const name = "Carlos";
    const peso = 80
    const altura = 1.5
  
    console.log("peso: ",Number(peso));
  console.log("altura: ",Number(altura));
  
    const imc = (peso) / ((altura) * (altura));
  
  if(imc >= 30){
    console.log("Seu imc eh "+ imc +" ." + name+ " você está acima do peso");
  }
  else{
    console.log("Seu imc eh "+ imc +" ." + name + " você não está acima do peso");
    
  }
  
  
}

ShowHelloMessage();
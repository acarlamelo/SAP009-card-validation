const validator = {

  isValid: function(creditCardNumber) { 

    let cardNumberArray = Array.from(creditCardNumber) 
    console.log(cardNumberArray) 

    const reversed =cardNumberArray.reverse() 
    let somaMaiorQueNove = 0 
    console.log(reversed) 
    for(let index=0; index < reversed.length; index++) { 
      console.log("oi") 
      
      if (index % 2 != 0){ 

        reversed[index] = (Number(reversed[index])) * 2
        console.log("2x:", reversed[index]) 

        if (reversed[index] >9) {
          (reversed[index]) = (reversed[index] -9)
          console.log(reversed[index]) 
          somaMaiorQueNove = somaMaiorQueNove + Number(reversed[index]) } 
          //if(reversed[index] <= 9) { 
            
          };
        };
      }
    }
    export default validator;

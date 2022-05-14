// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
function validatePIN (pin) {
    pin = pin.toString()
    arr = []
    if(pin.length != 4){
      return console.log(`${false}, invalid PIN`)
    }

    // We used the parseInt to convert the character back to an integer and compared it to zero so we can know if it is not a character
    for(i=0; i<=pin.length-1; i++){
      if(parseInt(pin[i])>=0){
        arr.push(pin[i])
      } else {
        return console.log(`${false}, invalid PIN ${typeof pin[i]}`)
      }
    }
  console.log(`${true}, valid PIN`)
}
validatePIN('5695')
console.log('=====')
validatePIN('12345')
console.log('=====')
validatePIN('a234')
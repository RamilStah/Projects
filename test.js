function toWeirdCase(string){
  return string.split('').map((element,index) => {
  if(element === ' ') {
  if (index % 2 != 0) {return element.toUpperCase()}
  else {return element.toLowerCase()}
  }
  if (index % 2 == 0) {return element.toUpperCase()}
  else if (index % 2 != 0) {return element.toLowerCase()}
  else {return element.toUpperCase()}
  }).join('')

}
console.log(toWeirdCase('aabbccdde hhrrtt'))
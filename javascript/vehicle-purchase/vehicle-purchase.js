
export function needsLicense(kind) {
  return kind === 'car' || kind === 'truck' ? true : false
}


export function chooseVehicle(option1, option2) {
  return option1 < option2 ? option1+" is clearly the better choice." : option2+" is clearly the better choice."
}


export function calculateResellPrice(originalPrice, age) {
  let DISCOUNT_PRICE = 0
  if(age < 3)
    DISCOUNT_PRICE = originalPrice * 0.8
  else if (age>10)
    DISCOUNT_PRICE = originalPrice * 0.5
  else
    DISCOUNT_PRICE = originalPrice * 0.7
  return DISCOUNT_PRICE
}

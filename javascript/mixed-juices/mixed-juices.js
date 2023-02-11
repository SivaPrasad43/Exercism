
export function timeToMixJuice(name) {
  switch(name){
    case 'Pure Strawberry Joy': 
      return 0.5
    case 'Energizer':
      return 1.5
    case 'Green Garden':
      return 1.5
    case 'Tropical Island':
      return 3
    case 'All or Nothing':
      return 5
    default:
      return 2.5
  }
}


export function limesToCut(wedgesNeeded, limes) {
  let WedgeCount = 0
  let i = 0
  if(wedgesNeeded === 0){
    return 0;
  }else{
    while(WedgeCount <= wedgesNeeded){
      switch(limes[i]){
        case "small":
          WedgeCount += 6
          break;
        case "medium":
          WedgeCount += 8
          break;
        case "large":
          WedgeCount +=10
          break;
        default:
          return limes.length
      }
      i++
    }
  }
  return i
}

export function remainingOrders(timeLeft, orders) {
  let timeUsed = 0
  let i =0
  let pendingOrders = []
  while(timeUsed < timeLeft){
    timeUsed += timeToMixJuice(orders[i])
    i++
  }
  while(i<=orders.length){
    pendingOrders.push(orders[i])
    i++
  }
  return pendingOrders
}

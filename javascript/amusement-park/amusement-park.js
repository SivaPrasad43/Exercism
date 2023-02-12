
export function createVisitor(name, age, ticketId) {
  const ticketInfo = {
    name : name,
    age : age,
    ticketId : ticketId
  }
  return ticketInfo
}


export function revokeTicket(visitor) {
  visitor.ticketId = null
  return visitor
}

export function ticketStatus(tickets, ticketId) {
  if(tickets.hasOwnProperty(ticketId)){
    if(tickets[ticketId] === null)
      return 'not sold'
    else
      return 'sold to '+tickets[ticketId]
  }else{
    return 'unknown ticket id'
  }
}


export function simpleTicketStatus(tickets, ticketId) {
  if (tickets.hasOwnProperty(ticketId) && tickets[ticketId]!==null){
    return tickets[ticketId]
  }else{
    return 'invalid ticket !!!'
  }
}

export function gtcVersion(visitor) {
  if(visitor.hasOwnProperty('gtc'))
    return visitor.gtc.version
  else
    return undefined
}

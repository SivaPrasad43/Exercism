
export function canExecuteFastAttack(knightIsAwake) {
  return  knightIsAwake ? false : true
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake ? true : false
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return archerIsAwake ? false : prisonerIsAwake ? true : false
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  return ((!archerIsAwake && !knightIsAwake && !petDogIsPresent && prisonerIsAwake) || (!archerIsAwake && petDogIsPresent)) ? true : false  
}

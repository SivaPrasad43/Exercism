
function trimWord(string) {
  return string.trim()
}
export function frontDoorResponse(line) {
  return line.charAt(0)
}

export function frontDoorPassword(word) {  
  return frontDoorResponse(word).toUpperCase() + word.slice(1).toLowerCase(); 
}

export function backDoorResponse(line) {
  const WORD = trimWord(line)
  return WORD[WORD.length - 1]
}

export function backDoorPassword(word) {
  return frontDoorPassword(word) + ", please"
}

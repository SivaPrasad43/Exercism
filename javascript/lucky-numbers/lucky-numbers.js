
export function twoSum(array1, array2) {
  const num1 = Number(array1.join(''))
  const num2 = Number(array2.join(''))
  return num1 + num2
}

export function luckyNumber(value) {
  const reversedValue = Number(String(value).split('').reverse().join(''))
  return value === reversedValue ? true : false
}

export function errorMessage(input) {
  if(input === '' || input === null || input === undefined)
    return 'Required field'
  else if( isNaN(input) || input === '0')
    return 'Must be a number besides 0'
  else 
    return ''
}

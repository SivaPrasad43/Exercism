
export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`
}

export function buildBirthdaySign(age) {
  return age<50 ? `Happy Birthday! What a young fellow you are.`:`Happy Birthday! What a mature fellow you are.`
}

export function graduationFor(name, year) {
  return `Congratulations ${name}!\nClass of ${year}`
}

export function costOf(sign, currency) {
  let rate = 0
  return `Your sign costs ${((sign.length)*2)+20}.00 ${currency}.`
}

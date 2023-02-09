
export function totalBirdCount(birdsPerDay) {
  let SUM_OF_BIRDS=0;
  for (let i=0;i<birdsPerDay.length;i++){
    SUM_OF_BIRDS += birdsPerDay[i];
  }
  return SUM_OF_BIRDS
}


export function birdsInWeek(birdsPerDay, week) {
  const WEEK_START = (week-1)*7
  const WEEK_END = WEEK_START+7
  const BIRDS_IN_THIS_WEEK = birdsPerDay.slice(WEEK_START,WEEK_END)

  return totalBirdCount(BIRDS_IN_THIS_WEEK)
}


export function fixBirdCountLog(birdsPerDay) {
  for(let i=0;i<birdsPerDay.length;i++) {
    if(i%2===0) {
      birdsPerDay[i] = birdsPerDay[i] + 1
    }
  }
  return birdsPerDay
}
EX
const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(drivers.length-2)
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
  ]
  
createFareMultiplier = (num) => {
  return (fair) => {
   return fair * num;
  }
}

fareDoubler = (fare) => {
  const result = createFareMultiplier(2)
  result(fare)
}

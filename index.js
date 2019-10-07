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
  
function createFareMultiplier(num){
  return function(fair){
    return fair * num;
  }
}

function fareDoubler(fare){
  const result = createFareMultiplier(2);
  return result(fare);
}

function fareTripler(fare) {
  const result = createFareMultiplier(3);
  return result(fare);
}

function selectDifferentDrivers(drivers,func) {
  return func(drivers);
}


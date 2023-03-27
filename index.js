// Code your solution in this file!
const returnFirstTwoDrivers = function (p) { return p.slice(0,2);};
const returnLastTwoDrivers = function (p) { return p.slice(-2);};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(i){
    return function(fare) {
       return i * fare;
    }
}

function fareDoubler(fare){
    const fd = createFareMultiplier(2);
    return fd(fare);
}

function fareTripler(fare){
    const fd = createFareMultiplier(3);
    return fd(fare);
}

function selectDifferentDrivers(arrayOfDrivers, f){
  if (f===returnFirstTwoDrivers){
    return arrayOfDrivers.slice(0,2);
  }
  else {
    return arrayOfDrivers.slice(-2);
  }
}
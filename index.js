// Code your solution in this file!

const returnFirstTwoDrivers = function(array){
    return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array){
    return array.slice(-2)
}

const selectingDrivers = [
    returnFirstTwoDrivers, returnLastTwoDrivers
]


function createFareMultiplier(fare){
  return (integer) => fare * integer

}

const fareDoubler = (integer) => integer * 2
const fareTripler = (integer) => integer * 3

function selectDifferentDrivers(array, func){
return func(array)
}
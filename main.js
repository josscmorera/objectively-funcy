// Your code here.

// `getFirstName`

function getFirstName(obj){
  return obj.firstName
}

// `getLastName`

function getLastName(obj){
  return obj.lastName
}

// `getFullName`

function getFullName(obj){
  return obj.firstName + " " + obj.lastName
}

// `setFirstName`

function setFirstName(obj, obj1){
  obj.firstName = obj1
}

// `setAge`

function setAge(obj, number){
  obj.age = number
}

// `giveBirthday`

function giveBirthday(obj){
  if (obj.age === undefined){
    obj.age = 1
  } else {
    obj.age += 1
  }
}

// `marry` 

function marry(obj1, obj2){
  obj1.married = true
  obj2.married = true
  obj1.spouseName = obj2.firstName + " " + obj2.lastName
  obj2.spouseName = obj1.firstName + " " + obj1.lastName
}


// `divorce` 

function divorce(obj1, obj2){
  obj1.married = false
  obj2.married = false
  delete obj1.spouseName
  delete obj2.spouseName
}

// 

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}

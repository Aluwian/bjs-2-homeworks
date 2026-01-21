"use strict";
function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  const ages = users
    .filter((user) => user.gender === gender)
    .map((user) => user.age);

  return ages.length
    ? ages.reduce((acc, age) => acc + age, 0) / ages.length
    : 0;
}

"use strict";

const assert = require("assert");

function isAvailable(conditionQuery, conditions) {
  assert(conditionQuery.hasOwnProperty("gender"));
  assert(conditionQuery.hasOwnProperty("age"));
  assert(conditionQuery.hasOwnProperty("income"));

  // TODO: add birthday selector in view
  conditionQuery.age = 21;

  //#region checkGender
  if (conditions[conditionQuery["gender"]] !== "Y") {
    return false;
  }
  //#endregion

  //#region checkAge
  // JA0103 ~ JA0109 (age level param) seems not to be used.
  if (
    conditionQuery["age"] < conditions["JA0110"] ||
    conditionQuery["age"] > conditions["JA0111"]
  ) {
    return false;
  }
  //#endregion

  //#region checkIncomeLevel
  if (conditions[conditionQuery["income"]] !== "Y") {
    return false;
  }
  //#endregion

  //#region checkPersonalAttributes
  // JA03XX is personal attribute
  {
    const myPersonalAttributes = Object.keys(conditionQuery)
      .filter((v) => v.startsWith("JA03"));
    const intersectedAttributes = myPersonalAttributes.filter(
      (a) => conditions[a] === "Y"
    );
    if (intersectedAttributes.length === 0) {
      return false;
    }
  }
  //#endregion

  //#region checkFamilyAttributes
  // JA04XX is family attribute
  {
    const myFamilyAttributes = Object.keys(conditionQuery)
      .filter((v) => v.startsWith("JA04"));
    const intersectedAttributes = myFamilyAttributes.filter(
      (a) => conditions[a] === "Y"
    );
    if (intersectedAttributes.length === 0) {
      return false;
    }
  }
  //#endregion

  return true;
}

module.exports = isAvailable;

import React from "react";

function RandomColor() {
  const colorNumber = Math.ceil(Math.random() * (60000 - 10000) + 10000);
  let str = `${colorNumber.toString(16)}`
  for (let i = str.length; i < 6; i++) {
    str = '2' + str;
  }
  return '#' + str;
}

function ColorChange() {}

function Counter (){
  let counter = 1;
  return () => counter++
}
export class cubeMeta {
  constructor() {
    this.ID = Counter()
    this.color = RandomColor(),
    this.rotationSpeed = 0
  }
}


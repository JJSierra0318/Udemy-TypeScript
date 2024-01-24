"use strict";
//typeof guard (only works with primitive types)
function triple(value) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}
//truthiness guard
const element = document.getElementById("idk");
if (element) {
    element;
}
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        console.log("You Did Not Pass In A Word!");
    }
};
//Equality narrowing
function someDemo(x, y) {
    //Both have to be strings (Triple =)
    if (x === y) {
        x;
        y;
    }
}
function getRunTime(media) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.espideDuration;
    }
    return media.duration;
}
//instanceof narrowing
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
class User {
    constructor(username) { }
}
class Company {
    constructor(name) { }
}
function getName(entity) {
    if (entity instanceof User) {
        entity;
    }
}

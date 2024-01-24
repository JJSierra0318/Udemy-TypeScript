"use strict";
const inputElement = document.querySelector("#username");
const btn = document.querySelector(".btn");
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
//Recieves any type, and will return the SAME type
function identity(item) {
    return item;
}
identity(7);
function getRandomElement(list) {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
}
getRandomElement(["a", "b", "c"]);
getRandomElement([1, 2, 3]);
//Can use multiple generics, and can restrict, in this case to alteast e an object of any type
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
//T must be anything with a property length
function printDoubleLength(thing) {
    return thing.length * 2;
}
//Defaults type to number
function makeList() {
    return [];
}
const numbers = makeList(); //type number
const booleans = makeList();
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(element) {
        this.queue.push(element);
    }
}

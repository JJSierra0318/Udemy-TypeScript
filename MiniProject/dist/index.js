"use strict";
//! The items Exists or exists
const btn = document.getElementById("btn");
//Run only if btn exists
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => alert("CLICKED!"));
//It say it is a string because I say so
let mystery = "Hello World";
const numChars = mystery.length;

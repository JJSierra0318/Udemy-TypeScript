//! The items Exists or exists
const btn = document.getElementById("btn")!

//Run only if btn exists
btn?.addEventListener("click", () => alert("CLICKED!"))

//It say it is a string because I say so
let mystery: unknown = "Hello World"
const numChars = (mystery as string).length
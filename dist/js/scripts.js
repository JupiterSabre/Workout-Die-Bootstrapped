/*!
* Start Bootstrap - The Big Picture v5.0.6 (https://startbootstrap.com/template/the-big-picture)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-the-big-picture/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project




fetch("http://localhost:3000/workouts")
.then(res => res.json())
.then(workOutType => console.log(workOutType))




// DECLARED VARIABLES AND EVENT LISTENER FOR DIE ROLL
const dieImg = document.querySelector("#die")
const dieSpin = [
    { transform: "rotate(360deg)" }
]
const dieTiming = {
    duration: 2000
    }


dieImg.addEventListener("dblclick", (e)=> {
    e.preventDefault()
    console.log("Beep Boop");
    dieImg.animate(dieSpin,dieTiming)
  
  },true)
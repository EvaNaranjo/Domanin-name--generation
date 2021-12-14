/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const root = document.querySelector("#root");
  root.innerHTML = "";

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let combination = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        combination.push(pronoun[i] + adj[j] + noun[k]);
        console.log(`${pronoun[i]}${adj[j]}${noun[k]}.com`);
      }
    }
  }
  let generator = "";
  for (let i = 0; i < combination.length; i++) {
    generator = generator + `${combination[i]}.com </br>`;
  }
  root.innerHTML = generator;
  console.log(root);
};

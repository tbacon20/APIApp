
const fetch = require('node-fetch');
const parse = require('node-html-parser');
import fetch from 'node-fetch';

fetch('https://google.com')
  .then(res => res.text())
  .then(text => console.log(text));


//    // "test": "echo \"no test specified\"",








/*
require('isomorphic-fetch');

const url = "test.txt";
fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log(json);
    console.log(json[0]);
    console.log("Got " + json[0].city);
  });

/*
const url = "test.txt";
fetch(url)
  .then(res => {
    res.json();
  }).then(json => {
    console.log(json);
    console.log(json[0]);
    console.log("Got " + json[0].city);
  });

/*
//require("isomorphic-fetch");
import fetch from "node-fetch"
globalThis.fetch = fetch
//console.log("works");
//console.log(fetch('https://pokeapi.co/api/v2/pokemon'));

async function getPokemon() {
  const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon').then((res) =>
    res.json()
  );
};

getPokemon();
*/

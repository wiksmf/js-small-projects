'use strict';

const url = `https://geo.ipify.org/api/v1?apiKey=at_1QfBS2E81fiEQCp9HnKNyG2RT2VsI`;

const btnCreate = document.querySelector('button');
const userIP = document.querySelector('.ip-address');

async function getIP(url) {
  await fetch(url)
    .then(res => res.json())
    .then(data => userIP.textContent = data.ip)
    .catch((err) => {
      console.log(`There has been a problem with your fetch operation: ${err.message}`);
    });
};

getIP(url);
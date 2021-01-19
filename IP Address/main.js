'use strict';

const url = `https://geo.ipify.org/api/v1?apiKey=${config.API_KEY}`;

const userIP = document.querySelector('.ip-address');

// Get user's IP address
async function getIP(url) {
  try {
    const res = await fetch(url);
    if (!res.ok)
      throw new Error(
        `Whoops... it looks like we're having problem getting location data 😟`,
      );

    const getIP = await res.json();
    userIP.textContent = getIP.ip;
  } catch (err) {
    alert(err);
  }
}

getIP(url);

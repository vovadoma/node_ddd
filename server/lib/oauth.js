'use strict';

const http = require('node:http');
const path = require('node:path');


const HEADERS = {
  'X-XSS-Protection': '1; mode=block',
  'X-Content-Type-Options': 'nosniff',
  'Strict-Transport-Security': 'max-age=31536000; includeSubdomains; preload',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const redirectToLogin = (res) => {
  console.log('redirectToLogin');
  res.writeHead(302, {Location: 'https://github.com/login/oauth/authorize'});
  return '';
}

const callBack = () => {
  console.log('callBack');
}

const handlers = {
  '/login': redirectToLogin,
  '/callBack': callBack,
}

module.exports = (port, console) => {
  http.createServer(async (req, res) => {
    const url = req.url;
    const result = handlers[url] ? handlers[url](res) : 'Not found';
    res.end(result);
    //res.end(result);
  }).listen(port);

  console.log(`Oauth on port ${port}`);
};

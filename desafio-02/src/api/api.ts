// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

const baseURL = "https://swapi.dev/api/";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

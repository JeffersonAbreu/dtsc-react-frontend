import axios from 'axios';

const http = axios.create({
  baseURL: 'https://dtsc-node-sequelize.onrender.com'
});

export default http;
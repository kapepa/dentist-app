//import Axios from './axios.js';
import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://localhost:5000',
});

const Request = {
  async userAll () {
    const all = await Axios.get('/app/users/all').then( res => res.data);
    return all
  },
};

export default Request;

import axios from 'axios';

const Axios = axios;
Axios.defaults.baseURL = 'http://192.168.0.103:5000';
Axios.defaults.headers = {'Content-Type': 'multipart/form-data'};

export default Axios;
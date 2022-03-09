import axios from 'axios';

const Axios = axios;
Axios.defaults.baseURL = 'http://192.168.0.103:5000';

export default Axios;
import Axios from './axios.js';

const Request = {
  async userAll () {
    const all = await Axios.get('/app/users/all')
    .then(res => {
      return res.data;
    })
    .catch(err => err);
    return all;
  },
};

export default Request;

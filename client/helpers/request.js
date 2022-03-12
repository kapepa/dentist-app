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
  async create (form) {
    const user = await Axios({
      method: 'post',
      url: '/app/users/create',
      headers:{
        'content-type':'multipart/form-data'
      },
      data: form,
    })
    .then(res => {
      return res.data;
    })
    .catch(err => err);
    return user;
  }
};

export default Request;

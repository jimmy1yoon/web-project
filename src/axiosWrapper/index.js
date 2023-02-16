import axios from 'axios';
import { mode } from '/api.config.js';
import dummyData from '../dummy';

// const host = ('https://f0b5350d-2f0b-4bcd-afdb-dd027399870b.mock.pstmn.io');

// let index = {
//   Post (endpoint,data) {
//     try {
//       return axios.get(host + endpoint + data.userId, { //userId check
//           headers: {
//             "Content-Type": `application/json`,
//           },
//         })
//         .then((res) => {
//           return res
//         });
//     } catch (error) {
//       console.error(error);
//     }
//   },
// }

function get(url, data, config) {
  if (mode === 'dummy') {
    return dummyData('get', url);
  }
  return axios.get(url, data, config);
}

export default {
  get,
  // post,
  // put,
  // delete,
}


// axios.defaults.baseURL = 'http://mock/api';
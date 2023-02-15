import axios from 'axios';

const host = ('https://f0b5350d-2f0b-4bcd-afdb-dd027399870b.mock.pstmn.io');

let index = {
  Post (endpoint,data) {
    try {
      return axios.get(host + endpoint + data.userId, { //userId check
          headers: {
            "Content-Type": `application/json`,
          },
        })
        .then((res) => {
          return res
        });
    } catch (error) {
      console.error(error);
    }
  },
}

export default index;
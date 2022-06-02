import axios from 'axios';
const baseURL = 'http://pos.idtretailsolutions.com/countytest/states';

const getAllStates = async () => {
    try {
        return await axios.get(baseURL);
      } catch (error) {
        return  error.response;
      }
}
const getStateDetails = async (state) => {
    try {
        return await axios.get(`${baseURL}/${state.state}`);
      } catch (error) {
        return  error.response;
      }
}

export default {
    getAllStates,
    getStateDetails
}
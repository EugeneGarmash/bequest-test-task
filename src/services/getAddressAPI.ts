import axios from 'axios';

const config = {
  baseURL: 'https://api.getAddress.io/',
};

const postcodeInstance = axios.create(config);

export default postcodeInstance;
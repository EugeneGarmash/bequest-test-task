import Axios, { AxiosRequestConfig, AxiosError, AxiosInstance } from 'axios';


const config = {
  baseURL: 'https://api.getAddress.io/',
};

const postcodeInstance = Axios.create(config);

export default postcodeInstance;
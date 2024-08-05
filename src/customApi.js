import axios from 'axios';

const customApi = axios.create({
  baseURL: 'https://laravel-production-9db3.up.railway.app/api/v1',
});

export default customApi;

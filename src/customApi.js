import axios from 'axios';

const customApi = axios.create({
  baseURL:
    process.env.VUE_APP_API_BASE_URL ||
    'https://laravel-production-9db3.up.railway.app/api/v1', // Ganti dengan URL API Anda
});

export default customApi;

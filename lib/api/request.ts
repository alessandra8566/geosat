import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: '/', // 可設定為 .env 變數
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance

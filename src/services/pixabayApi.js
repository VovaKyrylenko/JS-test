import axios from 'axios';
const BASE_URL =
  'https://pixabay.com/api/?key=32953066-47814ccbf72ca5843b0571ab2';
const axiosInstance = axios.create({ baseURL: BASE_URL });

async function fetchImages(query) {
  try {
    const result = await axiosInstance.get(`q=${query}&image_type=photo`);
    console.log('result:', result);
    return result;
  } catch (error) {
    console.log('error:', error);
  }
}
export { fetchImages };

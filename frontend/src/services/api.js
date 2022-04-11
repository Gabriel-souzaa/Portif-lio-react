import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.sendinblue.com/"
});

api.interceptors.request.use((config) => {
  config.headers.common['api-key'] = ``;
  return config;
}, (error) => {
  return Promise.reject(error);
}
);

api.interceptors.response.use((response) => {
  return response;
},
  async function (error) {
    return Promise.reject(error);
  }
)

export default api;
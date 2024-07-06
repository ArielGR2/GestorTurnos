'use client'
import axios from 'axios';

const clienteAxios = axios.create({
  baseURL: 'http://localhost:8080',
});

clienteAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.message === 'Network Error' && !error.response) {
      return Promise.reject('axios.errors.network');
    }
    const { status } = error.response;

    if (status === 400) {
      if (error.response.data.errors) {
        return Promise.reject(error.response.data.errors[0].msg);
      }
      if (error.response.data.message) {
        return Promise.reject(error.response.data.message); // Cambiado para devolver el mensaje específico del backend
      }
      return Promise.reject(error.response.data.msg);
    }
    if (status === 401) {
      return Promise.reject('axios.errors.unauthorized');
    }
    if (status === 404) {
      return Promise.reject('axios.errors.resourceNotFound');
    }
    if (status === 500) {
      return Promise.reject('axios.errors.server');
    }
    return Promise.reject(error.response); // Asegúrate de rechazar la respuesta para otros códigos de estado
  }
);

export default clienteAxios; /*clienteAxios2;*/


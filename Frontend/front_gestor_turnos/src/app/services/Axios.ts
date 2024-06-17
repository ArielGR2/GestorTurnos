'use client'
import axios from 'axios';

const clienteAxios = axios.create({
  // baseURL: 'http://localhost:8080/api',
  baseURL: 'http://localhost:8080',
});

// const createCliente =()=> {
//   const token = localStorage.getItem("accessToken");
//   const cliente = axios.create({
//     baseURL: 'http://localhost:8080',
//     headers: {
//       Authorization: `Bearer ${token}`,
//     }
//   });
//   return cliente;
// };

// const clienteAxios2 = createCliente();

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
    return null;
  }
);

export default clienteAxios; /*clienteAxios2;*/


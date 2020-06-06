import axios from 'axios';

const BASE_URL = 'https://private-5fb3f-surveysmock.apiary-mock.com/api';

export const apiService = request => {
  const { method, url } = request;
  const httpRequestConfig = {
    GET: async config => {
      const { onSuccess, onFailure } = config;
      try {
        const response = await axios.get(`${BASE_URL}${url}`);
        const { data } = response;
        onSuccess(data);
      } catch (error) {
        onFailure(error);
      }
    },
  };
  return {
    request: httpRequestConfig[method || 'GET'](request),
  };
};

export const httpService = {
  request: serviceRequest => apiService(serviceRequest),
};

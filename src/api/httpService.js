import axios from 'axios';

const BASE_URL = 'https://private-5fb3f-surveysmock.apiary-mock.com/api';

export const apiService = request => {
  const { method, url } = request;
  const handleSuccessError = (response, { onSuccess, onFailure }) => {
    try {
      const { data } = response;
      onSuccess(data);
    } catch (error) {
      onFailure(error);
    }
  };

  const httpRequestConfig = {
    GET: async config => {
      const response = await axios.get(`${BASE_URL}${url}`);
      handleSuccessError(response, config);
    },
    POST: async config => {
      const { data } = config;
      const response = await axios.post(`${BASE_URL}${url}`, data);
      handleSuccessError(response, config);
    },
  };
  return {
    request: httpRequestConfig[method || 'GET'](request),
  };
};

export const httpService = {
  request: serviceRequest => apiService(serviceRequest),
};

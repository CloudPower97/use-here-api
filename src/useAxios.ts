import { useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

const useAxios = <Parameters, Response>(configuration: {
  domains: { appCode: string; apiKey: string };
}) => {
  const { domains } = configuration;
  const instance = axios.create({
    baseURL: domains.appCode,
  });
  const [data, setData] = useState<Response | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | undefined>(undefined);
  const [response, setResponse] = useState<AxiosResponse<Response> | undefined>(
    undefined
  );

  instance.interceptors.request.use(
    config => {
      const { params } = config;

      setLoading(true);
      setError(undefined);

      if (params.apiKey || params.token) {
        config.baseURL = domains.apiKey;
      }

      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    res => {
      setLoading(false);
      setResponse(res);
      setData(res.data);

      return res;
    },
    err => {
      setLoading(false);
      setError(err);
      return err;
    }
  );

  return [
    { data, loading, error, response },
    (params: Parameters) =>
      instance.get<Response>('', {
        params,
      }),
  ] as const;
};

export default useAxios;

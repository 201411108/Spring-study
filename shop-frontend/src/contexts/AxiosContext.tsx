import axios, { AxiosInstance } from 'axios';
import { JSX, createContext, createSignal, useContext } from 'solid-js';

const AxiosContext = createContext<AxiosInstance>(
  axios.create({
    baseURL: import.meta.env.VITE_END_POINT,
  })
);

export const AxiosProvider = ({ children }: { children: JSX.Element }) => {
  const [axiosSignal] = createSignal(
    axios.create({
      baseURL: import.meta.env.VITE_END_POINT,
    })
  );

  return (
    <AxiosContext.Provider value={axiosSignal()}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxios = () => useContext(AxiosContext);

export default AxiosContext;

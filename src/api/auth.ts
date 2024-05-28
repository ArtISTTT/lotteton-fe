import {
  IGetUser,
  IGetUserReturn,
  IRegister,
  IRegisterReturn,
} from '@/types/api';
import { axiosInstance } from './instance';
import dayjs from 'dayjs';

export const register = (requestData: IRegister): Promise<IRegisterReturn> =>
  axiosInstance
    .post('/user/register', JSON.stringify(requestData))
    .then(data => {
      return data.data;
    })
    .catch(data => {
      return {
        ok: false,
        error: data.response?.data?.message ?? 'Error',
      };
    });

export const getUser = (requestData: IGetUser): Promise<IGetUserReturn> =>
  axiosInstance
    .get(`/user/wallet/${requestData.walletId}`)
    .then(data => {
      return {
        ...data.data,
        lastDailyDrop: dayjs(data.data.lastDailyDrop),
      };
    })
    .catch(data => {
      return {
        ok: false,
        error: data.response?.data?.message ?? 'Error',
      };
    });

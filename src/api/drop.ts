import type { IGetDailyDrop, IGetDailyDropReturn } from '@/types/api';
import { axiosInstance } from './instance';

export const postDailyDrop = (
  requestData: IGetDailyDrop
): Promise<IGetDailyDropReturn> =>
  axiosInstance
    .post('/drop/daily', JSON.stringify(requestData))
    .then(data => {
      return data.data;
    })
    .catch(data => {
      return {
        ok: false,
        error: data.response?.data?.message ?? 'Error',
      };
    });

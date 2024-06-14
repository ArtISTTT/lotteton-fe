import { defineStore, Store, StoreDefinition } from 'pinia';
import type { IGame, IPrevGameItem, IUser } from '../types/store';
import { TonConnectUI } from '@tonconnect/ui';
import { IBEUser } from '@/types/api';
import { postDailyDrop } from '@/api/drop';

export interface IStoreData {
  user: IUser | null | undefined;
  game: IGame | null;
  prevGames: IPrevGameItem[];
  authChecked: boolean;
  tonConnectUIInstance?: TonConnectUI;
  BEData?: IBEUser;
}

export type IStore = Store<'app', IStoreData, {}, {}>;

type IStoreDef = StoreDefinition<'app', IStoreData, {}, {}>;

export const useAppStore: IStoreDef = defineStore('app', {
  state: (): IStoreData => {
    return {
      user: null,
      game: null,
      prevGames: [],
      authChecked: false,
    };
  },
  actions: {
    async getDrop() {
      if (this.user) {
        const updatedUser = await postDailyDrop({
          walletId: this.user.address,
        });
      
        this.updateUser(updatedUser);
      }
    },
    updateUser(data: Partial<IUser>) {
      if (this.user) {
        this.user = { ...this.user, ...data };
      }
    },
    logout () {
      this.tonConnectUIInstance?.disconnect()
      this.user = null
    }
  },
});

import { defineStore, Store, StoreDefinition } from 'pinia';
import type { IGame, IPrevGameItem, IUser } from '../types/store';
import { TonConnectUI } from '@tonconnect/ui';

export interface IStoreData {
  user: IUser | null | undefined;
  game: IGame | null;
  prevGames: IPrevGameItem[];
  authChecked: boolean;
  tonConnectUIInstance?: TonConnectUI;
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
  actions: {},
});

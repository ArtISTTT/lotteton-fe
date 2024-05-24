import { defineStore, StoreDefinition } from 'pinia';
import type { IGame, IPrevGameItem, IUser } from '../types/store';
import { TonConnectUI } from '@tonconnect/ui';

export interface IStore {
  user: IUser | null | undefined;
  game: IGame | null;
  prevGames: IPrevGameItem[];
  authChecked: boolean;
  tonConnectUIInstance?: TonConnectUI;
}

type IStoreDef = StoreDefinition<'app', IStore, {}, {}>;

export const useAppStore: IStoreDef = defineStore('app', {
  state: (): IStore => {
    return {
      user: null,
      game: null,
      prevGames: [],
      authChecked: false,
    };
  },
  actions: {},
});

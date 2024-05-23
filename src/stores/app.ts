import { defineStore, StoreDefinition } from 'pinia'
import type { IGame, IPrevGameItem, IUser } from '../types/store'

export interface IStore {
  user: IUser | null | undefined
  game: IGame | null
  prevGames: IPrevGameItem[]
}

type IStoreDef = StoreDefinition<'app', IStore, {}, {}>;

export const useAppStore: IStoreDef = defineStore('app', {
  state: (): IStore => {
    return { 
      user: null,
      game: null,
      prevGames: []
    }
  },
  actions: {
  },
})
import {
  Wallet,
  type ConnectedWallet,
  type TonConnectUI,
} from '@tonconnect/ui';
import { type Dayjs } from 'dayjs';
import { IBEUser } from './api';

export interface IUser extends IBEUser {
  address: string;
  skinId: string;
  connectedWallet: Wallet;
  tonBalance: bigint;
  // tonConnectUIInstance: TonConnectUI | undefined | null
}

export enum GameStatus {
  START = 'START',
  WAITING = 'WAITING',
  PROCESS = 'PROCESS',
  END = 'END',
}

export type IResulItem = {
  address: string;
  place: number;
  winningSum: number;
};

export type IGame = {
  status: GameStatus;
  startTime: Dayjs;
  playersList: string[];
  results: IResulItem[];
};

export type IPrevGameItem = {
  winnerAddress: string;
  winningSum: number;
  date: Dayjs;
};

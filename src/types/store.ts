import { type ConnectedWallet, type TonConnectUI } from "@tonconnect/ui"
import { type Dayjs } from "dayjs"

export type IUser = {
    address: string
    skinId: string
    connectedWallet: ConnectedWallet | undefined | null
    tonConnectUIInstance: TonConnectUI | undefined | null
}

export enum GameStatus {
    START = 'START',
    WAITING = 'WAITING',
    PROCESS = 'PROCESS',
    END = 'END'
}

export type IResulItem = {
    address: string
    place: number,
    winningSum: number
}

export type IGame = {
    status: GameStatus
    startTime: Dayjs
    playersList: string[]
    results: IResulItem[]
}

export type IPrevGameItem = {
    winnerAddress: string
    winningSum: number
    date: Dayjs
}
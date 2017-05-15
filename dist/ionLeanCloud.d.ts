import { IWebSocketClient, IStorage } from 'leancloud-typescript-rx-sdk';
export declare class IonLeanCloud {
    private static _WebSocketProvider;
    static readonly ionWebSocketClient: IWebSocketClient;
    private static _StorageProvider;
    static readonly ionStorage: IStorage;
    private static _DeviceProvider;
    static ionDevice: any;
}

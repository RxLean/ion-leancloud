import { NgModule, ModuleWithProviders } from "@angular/core";
import { IWebSocketClient, IStorage, RxAVClient, IDeviceInfo } from 'leancloud-typescript-rx-sdk';
import { BrowserWebSocketClient } from './ionLeanCloud.WebSocketClient';
import { IonicStorage } from './ionLeanCloud.Storage';
import { IonicDeviceInfoProvider } from './ionLeanCloud.Device';

import { Device } from '@ionic-native/device';
import { Network } from '@ionic-native/network';
import { AppVersion } from '@ionic-native/app-version';
import { Sim } from '@ionic-native/sim';

export class IonLeanCloud {
    private static _WebSocketProvider: IWebSocketClient;
    static get ionWebSocketClient() {
        if (IonLeanCloud._WebSocketProvider == null || typeof IonLeanCloud._WebSocketProvider == 'undefined') {
            IonLeanCloud._WebSocketProvider = new BrowserWebSocketClient();
        }
        return IonLeanCloud._WebSocketProvider;
    }

    private static _StorageProvider: IStorage;
    static get ionStorage() {
        if (IonLeanCloud._StorageProvider == null || typeof IonLeanCloud._StorageProvider == 'undefined') {
            IonLeanCloud._StorageProvider = new IonicStorage();
        }
        return IonLeanCloud._StorageProvider;
    }

    private static _DeviceProvider: IDeviceInfo;
    static get ionDevice() {
        return IonLeanCloud._DeviceProvider;
    }
    static set ionDevice(options: any) {
        let device: Device = options.device;
        let network: Network = options.network;
        let appVersion: AppVersion = options.appVersion;
        let sim: Sim = options.sim;
        IonLeanCloud._DeviceProvider = new IonicDeviceInfoProvider(device, network, appVersion, sim
        );
    }
}
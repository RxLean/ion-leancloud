import { RxAVAnalyticDevice, IDeviceInfo } from 'leancloud-typescript-rx-sdk';
import { Device } from '@ionic-native/device';
import { Network } from '@ionic-native/network';
import { AppVersion } from '@ionic-native/app-version';
import { Sim } from '@ionic-native/sim';
export declare class IonicDeviceInfoProvider implements IDeviceInfo {
    private device;
    private network;
    private appVersion;
    private sim;
    constructor(device: Device, network: Network, appVersion: AppVersion, sim: Sim);
    avDevice: RxAVAnalyticDevice;
    getDevice(): Promise<RxAVAnalyticDevice>;
}

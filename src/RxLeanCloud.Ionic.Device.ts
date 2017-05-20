import { RxAVClient, RxAVAnalyticDevice, IDeviceInfo } from 'rx-lean-js-core';
import { Device } from '@ionic-native/device';
import { Network } from '@ionic-native/network';
import { AppVersion } from '@ionic-native/app-version';
import { Sim } from '@ionic-native/sim';

export class IonicDeviceInfoProvider implements IDeviceInfo {

    constructor(private device: Device,
        private network: Network,
        private appVersion: AppVersion,
        private sim: Sim) {
        this.avDevice = new RxAVAnalyticDevice();
        this.avDevice.access = this.network.type;
        this.avDevice.device_id = this.device.serial;
        this.avDevice.device_model = this.device.model;
        this.avDevice.os = this.device.platform;
        this.avDevice.os_version = this.device.version;
    }
    avDevice: RxAVAnalyticDevice;
    getDevice(): Promise<RxAVAnalyticDevice> {
        return this.sim.getSimInfo().then(simInfo => {
            this.avDevice.carrier = simInfo.carrierName;
            return this.appVersion.getVersionNumber();
        }).then(vsersionNumber => {
            this.avDevice.app_version = vsersionNumber;
            return this.appVersion.getPackageName();
        }).then(packageName =>{
            this.avDevice.package_name = packageName;
            return this.appVersion.getAppName();
        }).then(appName =>{
             this.avDevice.display_name = appName;
             return Promise.resolve(this.avDevice);
        });
    }
}

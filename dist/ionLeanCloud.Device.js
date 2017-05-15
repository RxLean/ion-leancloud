"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leancloud_typescript_rx_sdk_1 = require("leancloud-typescript-rx-sdk");
var IonicDeviceInfoProvider = (function () {
    function IonicDeviceInfoProvider(device, network, appVersion, sim) {
        this.device = device;
        this.network = network;
        this.appVersion = appVersion;
        this.sim = sim;
        this.avDevice = new leancloud_typescript_rx_sdk_1.RxAVAnalyticDevice();
        this.avDevice.access = this.network.type;
        this.avDevice.device_id = this.device.serial;
        this.avDevice.device_model = this.device.model;
        this.avDevice.os = this.device.platform;
        this.avDevice.os_version = this.device.version;
    }
    IonicDeviceInfoProvider.prototype.getDevice = function () {
        var _this = this;
        return this.sim.getSimInfo().then(function (simInfo) {
            _this.avDevice.carrier = simInfo.carrierName;
            return _this.appVersion.getVersionNumber();
        }).then(function (vsersionNumber) {
            _this.avDevice.app_version = vsersionNumber;
            return _this.appVersion.getPackageName();
        }).then(function (packageName) {
            _this.avDevice.package_name = packageName;
            return _this.appVersion.getAppName();
        }).then(function (appName) {
            _this.avDevice.display_name = appName;
            return Promise.resolve(_this.avDevice);
        });
    };
    return IonicDeviceInfoProvider;
}());
exports.IonicDeviceInfoProvider = IonicDeviceInfoProvider;

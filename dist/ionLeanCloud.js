"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ionLeanCloud_WebSocketClient_1 = require("./ionLeanCloud.WebSocketClient");
var ionLeanCloud_Storage_1 = require("./ionLeanCloud.Storage");
var ionLeanCloud_Device_1 = require("./ionLeanCloud.Device");
var IonLeanCloud = (function () {
    function IonLeanCloud() {
    }
    Object.defineProperty(IonLeanCloud, "ionWebSocketClient", {
        get: function () {
            if (IonLeanCloud._WebSocketProvider == null || typeof IonLeanCloud._WebSocketProvider == 'undefined') {
                IonLeanCloud._WebSocketProvider = new ionLeanCloud_WebSocketClient_1.BrowserWebSocketClient();
            }
            return IonLeanCloud._WebSocketProvider;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonLeanCloud, "ionStorage", {
        get: function () {
            if (IonLeanCloud._StorageProvider == null || typeof IonLeanCloud._StorageProvider == 'undefined') {
                IonLeanCloud._StorageProvider = new ionLeanCloud_Storage_1.IonicStorage();
            }
            return IonLeanCloud._StorageProvider;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonLeanCloud, "ionDevice", {
        get: function () {
            return IonLeanCloud._DeviceProvider;
        },
        set: function (options) {
            var device = options.device;
            var network = options.network;
            var appVersion = options.appVersion;
            var sim = options.sim;
            IonLeanCloud._DeviceProvider = new ionLeanCloud_Device_1.IonicDeviceInfoProvider(device, network, appVersion, sim);
        },
        enumerable: true,
        configurable: true
    });
    return IonLeanCloud;
}());
exports.IonLeanCloud = IonLeanCloud;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/map");
var storage_1 = require("@ionic/storage");
var IonicStorage = (function () {
    function IonicStorage() {
        this.storage = new storage_1.Storage({
            name: '__leancloud',
            driverOrder: ['indexeddb', 'sqlite', 'websql']
        });
    }
    IonicStorage.prototype.add = function (key, value) {
        return this.storage.set(key, value);
    };
    IonicStorage.prototype.remove = function (key) {
        return this.storage.remove(key);
    };
    IonicStorage.prototype.get = function (key) {
        return this.storage.get(key);
    };
    return IonicStorage;
}());
exports.IonicStorage = IonicStorage;

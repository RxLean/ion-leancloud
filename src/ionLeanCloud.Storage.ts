import 'rxjs/add/operator/map';
import { IStorage } from 'leancloud-typescript-rx-sdk';
import { Storage } from '@ionic/storage';

export class IonicStorage implements IStorage {
    public storage: Storage;
    constructor() {
        this.storage = new Storage({
            name: '__leancloud',
            driverOrder: ['indexeddb', 'sqlite', 'websql']
        });
    }
    add(key: string, value: any): Promise<any> {
        return this.storage.set(key, value);
    }
    remove(key: string): Promise<boolean> {
        return this.storage.remove(key);
    }
    get(key: string): Promise<string> {
        return this.storage.get(key);
    }
}
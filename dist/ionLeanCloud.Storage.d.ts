import 'rxjs/add/operator/map';
import { IStorage } from 'leancloud-typescript-rx-sdk';
import { Storage } from '@ionic/storage';
export declare class IonicStorage implements IStorage {
    storage: Storage;
    constructor();
    add(key: string, value: any): Promise<any>;
    remove(key: string): Promise<boolean>;
    get(key: string): Promise<string>;
}

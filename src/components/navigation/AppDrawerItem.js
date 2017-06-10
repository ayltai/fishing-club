// @flow
import { extendObservable } from 'mobx';

export default class AppDrawerItem {
    name : ?string;
    icon : ?string;

    constructor(name : ?string, icon : ?string) {
        extendObservable(this, {
            name : name,
            icon : icon
        });
    }
}

// @flow
import { extendObservable } from 'mobx';
import AppDrawerItem from './AppDrawerItem';

export default class AppDrawerStore {
    isOpened : boolean;
    selected : string;
    items    : AppDrawerItem[];

    constructor(isOpened : boolean = true) {
        extendObservable(this, {
            isOpened : isOpened,
            selected : '',
            items    : []
        });
    }
}

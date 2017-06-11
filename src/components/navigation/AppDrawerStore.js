// @flow
'use strict';

import { extendObservable } from 'mobx';
import NavItem from './NavItem';
import Rx from 'rx-lite';

export default class AppDrawerStore {
    isOpened         : boolean;
    selected         : string;
    items            : NavItem[];
    selectionChanges : Rx.Subject;

    constructor(isOpened : boolean = true) {
        extendObservable(this, {
            isOpened : isOpened,
            selected : '',
            items    : []
        });

        this.selectionChanges = new Rx.Subject();
    }
}

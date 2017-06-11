// @flow
'use strict';

import { extendObservable } from 'mobx';

export default class NavItem {
    key  : string;
    name : ?string;
    icon : ?string;
    page : any;

    constructor(key : string, name : ?string, icon : ?string, page : any) {
        extendObservable(this, {
            key  : key,
            name : name,
            icon : icon,
            page : page
        });
    }
}

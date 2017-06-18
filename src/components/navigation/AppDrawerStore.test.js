'use strict';

import AppDrawerStore from './AppDrawerStore';

it('Instantiate correctly', () => {
    const store1 = new AppDrawerStore();
    expect(store1.isOpened).toEqual(true);

    const store2 = new AppDrawerStore(false);
    expect(store2.isOpened).toEqual(false);
});

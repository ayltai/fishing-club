// @flow
'use strict';

import RandomString from 'randomstring';

const Unique = {
    /**
     * Returns a random string of the specified length, or returns the given string.
     * @param {number} [length] The length of the string to generate.
     * @param {string} [mockString] The string to return.
     * @return {string}
     */
    nextString : function(mockString : ?string, length : ?number) : string {
        if (typeof mockString === 'string') return mockString;

        return RandomString.generate({
            length  : length ? length : 4,
            charset : 'alphabetic'
        });
    }
};

export default Unique;

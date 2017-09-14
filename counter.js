/**
 * Created by caiiiac on 2017/9/14.
 */

let c = 0;

import {trigger} from './event';

export const setValue = (value) => {
    trigger('counter-changed', value);
    c = value;
}

export const getValue = () => {
    return c;
}
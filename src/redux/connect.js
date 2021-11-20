
import { connect as connectRedux } from 'react-redux';
import R from 'ramda';

export default function (keys) {
    return connectRedux(R.pick(keys));
}

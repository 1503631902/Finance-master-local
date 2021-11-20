
import React, { memo } from 'react';
import { View } from 'react-native';

function Container(props) {
    const { style } = props;
    return <View style={style}>{props.children}</View>;
}
export default memo(Container);

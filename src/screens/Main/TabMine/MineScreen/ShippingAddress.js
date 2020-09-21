import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Images from '../../../../image';
import UI from '../../../../UI';
import filejson from '../../../../image/filename.json';
import TitleView from '../../TabHomeNew/common/TitleView';

export default class ShippingAddress extends PureComponent {

    renderList = () => {
        const list = [];

        const data = [
            { name: '张惟新', phone: "18634438786", location: '阿娇扩大鞭打快牛看打开电脑开始恐惧' },]
        for (let i = 0; i < data.length; i++) {
            list.push(this.renderItem_2(data[i]))
        }
        return list
    }

    renderItem_2 = (itme) => {
        const { name, phone, location } = itme;
        return (
            <View style={{ backgroundColor: '#fff' }}>
                <View style={{ width: UI.size.screenWidth, height: 10, backgroundColor: '#f5f4f8' }} />
                <Text numberOfLines={1} style={{ marginLeft: 15, marginTop: 10, fontSize: UI.fontSizeNew.font_12, color: '#333333' }} >{name}  {UI.getNumPhone(phone)}</Text>
                <Text numberOfLines={2} style={{ marginLeft: 15, marginBottom: 9, maxWidth: UI.size.screenWidth - 15 * 2, fontSize: UI.fontSizeNew.font_10, color: '#9D9D9D' }} >
                    {location}
                </Text>
            </View>
        )
    };


    render() {
        const image_h = UI.size.screenWidth - 50 * 2
        return (
            <View style={styles.container}>
                <TitleView navigation={this.props.navigation} imageComponent={() =>
                    <Image style={styles.header} source={Images.icon_33} />
                } />
                <ScrollView
                    style={styles.content}
                    contentContainerStyle={styles.contentContainerStyle}
                >
                    {this.renderList()}
                </ScrollView>
                <Image style={{
                    position: 'absolute',
                    bottom: 0,
                    width: UI.size.screenWidth,
                    height: UI.size.screenWidth * 236 / 1078
                }} source={Images.icon_34} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f4f8' },
    content: { flex: 1, backgroundColor: '#f5f4f8' },
    contentContainerStyle: {
        backgroundColor: UI.color.background,
    },
    header: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 144) / 1080,
    },
});

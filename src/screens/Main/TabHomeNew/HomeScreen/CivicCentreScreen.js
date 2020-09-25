import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, View, TouchableWithoutFeedback } from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';

export default class CivicCentreScreen extends PureComponent {
    clickSearch = () => {
        this.props.navigation.navigate('AccumulationScreen');
    };

    clickBack = () => {
        this.props.navigation.pop();
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.content}
                    contentContainerStyle={styles.contentContainerStyle}
                >
                    <View>
                        <Image style={styles.image0} source={Images.civic_centre_header} />
                        <TouchableWithoutFeedback onPress={this.clickBack}>
                            <View style={styles.click0} />
                        </TouchableWithoutFeedback>
                    </View>
                    <View>
                        <Image style={styles.image1} source={Images.civic_centre_image_1} />
                        <TouchableWithoutFeedback onPress={this.clickSearch}>
                            <View style={styles.click} />
                        </TouchableWithoutFeedback>
                    </View>

                    <Image style={styles.image2} source={Images.civic_centre_image_2} />
                    <Image style={styles.image3} source={Images.civic_centre_image_3} />
                    <Image style={styles.image4} source={Images.civic_centre_image_4} />
                </ScrollView>
                <Image
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        width: UI.size.screenWidth,
                        height: (UI.size.screenWidth * 144) / 1080,
                    }}
                    source={Images.icon_100}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1, backgroundColor: '#f5f4f8' },
    contentContainerStyle: {
        backgroundColor: UI.color.background,
    },
    image0: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 415) / 1080,
    },
    image1: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 1278) / 1080,
    },
    image2: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 1264) / 1080,
    },
    image3: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 534) / 1080,
    },
    image4: {
        width: UI.size.screenWidth,
        height: (UI.size.screenWidth * 1294) / 1080,
    },
    click: {
        position: 'absolute',
        right: 12 + (UI.size.screenWidth - 12 * 2) / 5,
        width: (UI.size.screenWidth - 12 * 2) / 5,
        height: (UI.size.screenWidth - 12 * 2) / 5,
        alignSelf: 'center',
        backgroundColor: 'transparent',
    },
    click0: {
        position: 'absolute',
        top: 10,
        left: 10,
        width: 50,
        height: 30,
        alignSelf: 'center',
        backgroundColor: 'transparent',
    },
});


import React, { PureComponent } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Splash from 'react-native-splash-screen';
import connect from '../../redux/connect';

connect(['profile']);
export default class SplashScreen extends PureComponent {
    componentDidMount() {
        Splash.hide();
    }

    goToHome = () => {
        const { navigation } = this.props;
        navigation.navigate('Main');
    };

    onBtnClick = () => {
        this.goToHome();
    };

    render() {
        return (
            <View style={styles.container}>
                <Text> SplashScreen </Text>
                <Button title={'进入首页'} onPress={this.onBtnClick} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex: 1,
});

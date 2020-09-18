import React, { PureComponent } from 'react';
import {
    Image,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import filejson from '../../../../image/filename.json';
// let font_13 = UI.fontSizeNew.font_13
let font_13 = UI.fontSizeNew.font_13
let font_12 = UI.fontSizeNew.font_12
let font_10 = UI.fontSizeNew.font_10
let font_10_5 = UI.fontSizeNew.font_10_5
let font_30 = UI.fontSizeNew.font_30
let font_8 = UI.fontSizeNew.font_8
export default class DetailScreen extends PureComponent {
    constructor(props) {
        super(props);
        const { route } = props;
        let index = 1
        if (route.params && route.params === 1) {
            index = 2
        }


        this.state = { opacity: 0, selectedIndex: index }
        this.offset_y = 0
        this.offset_olf_y = 0
        this.scroll_style = {}
        this.isDestroy = false;
        this.header_H = 300
        this.foot_H = 80
    }


    clickBack = () => {
        const {
            navigation
        } = this.props;
        navigation.pop()
        navigation.pop()
        navigation.pop()
    }
    clickClose = () => {
        const {
            navigation
        } = this.props;
        navigation.pop()
    }

    componentWillUnmount() {
        this.isDestroy = true;
        if (this.scrollTimer) {
            clearInterval(this.scrollTimer)
        }
    }

    onScrollEndDrag = (e) => {
        const { contentOffset } = e.nativeEvent;
        if (this.scrollTimer) {
            clearInterval(this.scrollTimer)
        }
        this.scrollTimer = setInterval(() => {
            if (this.isDestroy) {
                if (this.scrollTimer) {
                    clearInterval(this.scrollTimer)
                }
                return
            }
            if (Math.abs(this.offset_olf_y - this.offset_y) > 0) {
                if (Math.abs(this.offset_olf_y - this.offset_y) < 5) {
                    if (this.scrollTimer) {
                        clearInterval(this.scrollTimer)
                    }
                    if (this.scrollRef) {
                        if (this.offset_y < this.header_H) {
                            this.scrollRef.scrollTo({ y: this.header_H, animated: true });
                        }
                    }
                }
                this.offset_olf_y = this.offset_y
            } else {
                if (this.scrollTimer) {
                    clearInterval(this.scrollTimer)
                }
                if (this.scrollRef) {
                    if (this.offset_y < this.header_H) {
                        this.scrollRef.scrollTo({ y: this.header_H, animated: true });
                    }
                }
            }
        }, 50);
    }

    onLayout = (e) => {
        const { height, width } = e.nativeEvent.layout;
        if (!this.scroll_style.width) {
            if (this.scrollRef) {
                if (this.offset_y < this.header_H) {
                    this.scrollRef.scrollTo({ y: this.header_H, animated: false, });
                }
            }
            this.scroll_style = { height, width }
            setTimeout(() => {
                if (this.isDestroy) {
                    return
                }
                this.setState({ opacity: 1 })
            });
        }
    }

    renderHeader = () => {
        return (
            <View style={{ width: UI.size.screenWidth, backgroundColor: "#fff", flexDirection: 'row' }}>
                <View style={{ position: 'absolute', top: 0, width: UI.size.screenWidth, height: 1, backgroundColor: '#9D9D9D32' }} />
                <TouchableWithoutFeedback onPress={() => {
                    if (this.state.selectedIndex !== 0) {
                        this.setState({ selectedIndex: 0 })
                    }
                }}>
                    <View style={{ height: 45, width: "33.33%", justifyContent: 'center' }}>
                        <Text style={{
                            fontSize: font_12, width: "33.33%", alignSelf: 'center', color: this.state.selectedIndex === 0 ? '#3e8ee3' : "#333333", textAlign: 'center'
                        }} >全部</Text>
                        <View style={{ position: 'absolute', bottom: 0, width: '100%', height: 1, backgroundColor: this.state.selectedIndex === 0 ? '#3e8ee3' : "#fff" }} />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => {
                    if (this.state.selectedIndex !== 1) {
                        this.setState({ selectedIndex: 1 })
                    }
                }}>
                    <View style={{ height: 45, width: "33.33%", justifyContent: 'center' }}>
                        <Text style={{
                            fontSize: font_12, width: "33.33%", alignSelf: 'center', color: this.state.selectedIndex === 1 ? '#3e8ee3' : "#333333", textAlign: 'center'
                        }} >缴存</Text>
                        <View style={{ position: 'absolute', bottom: 0, width: '100%', height: 1, backgroundColor: this.state.selectedIndex === 1 ? '#3e8ee3' : "#fff" }} />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => {
                    if (this.state.selectedIndex !== 2) {
                        this.setState({ selectedIndex: 2 })
                    }
                }}>
                    <View style={{ height: 45, width: "33.33%", justifyContent: 'center' }}>
                        <Text style={{
                            fontSize: font_12, width: "33.33%", alignSelf: 'center', color: this.state.selectedIndex === 2 ? '#3e8ee3' : "#333333", textAlign: 'center'
                        }} >提取</Text>
                        <View style={{ position: 'absolute', bottom: 0, width: '100%', height: 1, backgroundColor: this.state.selectedIndex === 2 ? '#3e8ee3' : "#fff" }} />
                    </View>
                </TouchableWithoutFeedback>
            </View >
        );
    };

    renderTitle = () => {
        return (
            <View style={{ justifyContent: 'center' }}>
                <Image style={{
                    width: UI.size.screenWidth,
                    height: (UI.size.screenWidth * 143) / 1080,
                }} source={Images.icon_12} />
                <TouchableWithoutFeedback onPress={this.clickBack}>
                    <View style={{ position: 'absolute', left: 5, width: 30, height: 30 }} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.clickClose}>
                    <View style={{ position: 'absolute', left: 40, width: 30, height: 30 }} />
                </TouchableWithoutFeedback>
            </View>
        );
    };

    renderItem_1 = ({
        date,
        info,
        save
    }, isLast = false) => {
        return (<View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
            <Text style={{ marginLeft: 10, alignSelf: 'center', fontSize: font_12, color: '#9D9D9D', backgroundColor: '#fff' }} >{date}</Text>
            <View style={{ flex: 1, height: 45, borderBottomColor: '#9D9D9D32', borderBottomWidth: isLast ? 0 : 1, flexDirection: 'row', marginLeft: 10, justifyContent: 'space-between' }}>
                <Text numberOfLines={1} style={{ alignSelf: 'center', maxWidth: UI.size.screenWidth - 100 - 10 * 3 - 40, fontSize: font_12, color: '#333333' }} >{info}</Text>
                <Text numberOfLines={1} style={{ alignSelf: 'center', marginRight: 10, maxWidth: 100, fontSize: font_12, color: '#333333' }} >{UI.getNumString(save)}</Text>
            </View>
        </View >)
    };
    renderItem_2 = ({
        accountMoney,
        date,
        info,
        save
    }, isLast = false) => {
        return (<View style={{ flexDirection: 'row', paddingVertical: 7, justifyContent: 'space-between', backgroundColor: '#fff', }}>
            <View style={{ marginLeft: 10, width: UI.size.screenWidth - 100 - 20 }}>
                <Text numberOfLines={1} style={{ maxWidth: 100, fontSize: font_12, color: '#333333' }} >{info}</Text>
                <Text numberOfLines={1} style={{ maxWidth: 100, fontSize: font_10, color: '#9D9D9D' }} >{date}</Text>
            </View >
            <View style={{ marginRight: 10, width: 100 }}>
                <Text numberOfLines={1} style={{ maxWidth: 100, textAlign: 'right', fontSize: font_12, color: '#333333' }} >{UI.getNumString(save)}</Text>
                <Text numberOfLines={1} style={{ maxWidth: 100, textAlign: 'right', fontSize: font_10, color: '#9D9D9D' }} >{UI.getNumString(accountMoney)}</Text>
            </View >
            {isLast ? null : <View style={{ position: 'absolute', right: 0, bottom: 0, width: UI.size.screenWidth - 10, height: 1, backgroundColor: '#9D9D9D32' }} />}
        </View>)
    };

    renderItemSub = (year) => {
        return (<View style={{ flexDirection: 'row', height: 50, borderBottomColor: '#9D9D9D32', borderTopWidth: 1, borderTopColor: '#9D9D9D32', borderBottomWidth: 1, backgroundColor: '#f5f4f8' }}>
            <Text style={{ marginLeft: 10, alignSelf: 'center', fontSize: font_13, color: '#333333' }} >
                {year.slice(0, 4)}
                <Text style={{ alignSelf: 'center', marginBottom: 0, fontSize: font_10, color: '#333333' }} >年</Text></Text>
        </View >)
    };
    renderList = () => {
        const list = [];
        if (this.state.selectedIndex === 0) {
            for (let i = 0; i < filejson.totalDetailed.length; i++) {
                const { year, saveMoney } = filejson.totalDetailed[i];
                list.push(this.renderItemSub(year))
                for (let j = 0; j < saveMoney.length; j++) {
                    const element = saveMoney[j];
                    list.push(this.renderItem_2(element, j === saveMoney.length - 1))
                }
            }
        } else if (this.state.selectedIndex === 1) {
            for (let i = 0; i < filejson.saveDetailed.length; i++) {
                const { year, saveMoney } = filejson.saveDetailed[i];
                list.push(this.renderItemSub(year))
                for (let j = 0; j < saveMoney.length; j++) {
                    const element = saveMoney[j];
                    list.push(this.renderItem_1(element, j === saveMoney.length - 1))
                }
            }
        } else {
            for (let i = 0; i < filejson.takeOutDetailed.length; i++) {
                const { year, saveMoney } = filejson.takeOutDetailed[i];
                list.push(this.renderItemSub(year))
                for (let j = 0; j < saveMoney.length; j++) {
                    const element = saveMoney[j];
                    list.push(this.renderItem_1(element, j === saveMoney.length - 1))
                }
            }
        }
        return list
    }

    renderScrollHeader = () => {
        return <View style={{ width: '100%', height: this.header_H, backgroundColor: '#f5f6f9' }} />
    }

    renderScrollFoot = () => {
        return <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', height: this.foot_H, backgroundColor: '#f5f6f9' }} >
            <Text style={{ marginTop: 15, color: '#9D9D9D', fontSize: font_10 }}>没有更多数据了...
            </Text>
        </View>
    }


    render() {
        font_13 = UI.fontSizeNew.font_13
        font_12 = UI.fontSizeNew.font_12
        font_10 = UI.fontSizeNew.font_10
        font_8 = UI.fontSizeNew.font_8
        font_10_5 = UI.fontSizeNew.font_10_5
        font_30 = UI.fontSizeNew.font_30
        const { navigation } = this.props;
        return (<View style={styles.container} >
            {this.renderTitle()}
            <ScrollView
                ref={(e) => { this.scrollRef = e }}
                style={[styles.content, this.scroll_style, { opacity: this.state.opacity }]}
                onLayout={this.onLayout}
                contentContainerStyle={this.scroll_style.width ? { minHeight: this.scroll_style.height + this.header_H } : styles.contentContainerStyle}
                onScrollEndDrag={this.onScrollEndDrag}
                onScroll={(e) => {
                    const { contentOffset } = e.nativeEvent;
                    this.offset_y = contentOffset.y
                }}
                showsVerticalScrollIndicator={false} >

                {this.renderScrollHeader()}
                {this.renderHeader()}
                {this.renderList()}
                {this.renderScrollFoot()}
            </ScrollView>
        </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        backgroundColor: '#f5f6f9',
    },
    contentContainerStyle: {
        backgroundColor: UI.color.background,
    },
    click: {
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    contentBg: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemTitle: {
        color: '#333333',
        marginTop: 20,
    },
    itemDate: {
        color: '#333333',
        marginTop: 20,
        marginRight: 30,
    },
    itemDetail: {
        color: '#9D9D9D',
        marginTop: 5,
        marginRight: 30
    },
});
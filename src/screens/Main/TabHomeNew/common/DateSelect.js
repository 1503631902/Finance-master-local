/*
 * @Descripttion:我的-->账单-->日期选择
 * @Author: ZhangShilei
 */
import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';
import {
    PickerData
} from './WheelPicker';
import BirthDayPicker from './BirthDayPicker';
import Images from '../../../../image';
import UI from '../../../../UI';
type Props = {
    cureentYear: Number,
    selectedYear: Number,
    onCancel: () => void,
    onSure: (dateInfo: DateInfo) => void,
};

const TAG = 'LV_DateSelect';
export default class DateSelect extends React.PureComponent<Props> {
    constructor(props) {
        super(props);
        this.selectedYear = props.selectedYear;
        this.yearList = this.getYearList(10, 2020)
        this.monthList = this.getmonthList()
        // const yearIndex = this.yearList.findIndex(item => item.value === this.selectedYear);
        this.state = {
            yearIndex: 0, monthIndex: 0, dayIndex: 0
        };
        console.debug('===props======', props)
    }

    componentDidMount() {
        // this.timeout = setTimeout(() => {
        //     const {
        //         selectedYear
        //     } = this.props;
        //     if (selectedYear) {
        //         this.selectedYear = selectedYear;
        //     }
        //     let yearIndex = this.yearList.findIndex(item => item.value === this.selectedYear);
        //     if (yearIndex < 0) {
        //         this.selectedYear = 1995;
        //         yearIndex = this.yearList.findIndex(item => item.value === this.selectedYear);
        //     }

        //     this.setState({
        //         yearIndex
        //     });
        // });
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    getYearList = (len, yearEnd) => {
        const yearMap = [];
        for (let index = 0; index < len; index++) {
            const year = yearEnd - len + index + 1;
            yearMap.push({
                index,
                value: year,
                text: `${year}`
            });
        }
        return yearMap;
    };
    getmonthList = (len, yearEnd) => {
        const monthMap = [];
        for (let i = 1; i <= 12; i++) {
            monthMap.push({
                index: i - 1,
                value: i,
                text: i < 10 ? '0' + i : i + ''
            });
        }
        return monthMap
    };

    getDayList = (year, month) => {
        const dayMap = [];
        let days = 30
        if (month == 2 && year % 4 === 0) {
            days = 28
        } else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
            days = 31
        }
        for (let j = 1; j <= days; j++) {
            dayMap.push({
                index: j - 1,
                value: j,
                text: j < 10 ? '0' + j : j + ''
            });
        }
        return dayMap;
    };

    onYearValueChanged = (item: PickerData) => {
        if (this.selectedYear === item.value) {
            return;
        }
        this.selectedYear = item.value;
    };

    onMonthValueChanged = (item: PickerData) => {
        if (this.selectedYear === item.value) {
            return;
        }
        this.selectedYear = item.value;
    };

    onPressSure = () => {
        const {
            onSure
        } = this.props;
        if (onSure) {
            const dateInfo: DateInfo = {
                year: this.selectedYear,
            };
            onSure(dateInfo);
        }
    };

    renderContent = () => {
        const {
            yearIndex, monthIndex, dayIndex
        } = this.state;
        const {
            onCancel
        } = this.props;
        return (<View>
            <View style={
                styles.headerContainer
            }>
                <TouchableOpacity style={
                    styles.cancelButton
                }
                    onPress={
                        onCancel
                    }>
                    <Image style={
                        styles.touchImage
                    }
                        source={
                            Images.icon_date_cancel
                        } />
                </TouchableOpacity>
                <TouchableOpacity style={
                    styles.sureButton
                }
                    onPress={
                        this.onPressSure
                    }>
                    <Image style={
                        styles.touchImage
                    }
                        source={
                            Images.icon_date_conform
                        } />
                </TouchableOpacity>
                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: 0.5,
                    backgroundColor: '#9D9D9D'
                }} />
            </View>
            <View style={styles.pickerContainer}>
                <BirthDayPicker pickerStyle={styles.pickerStyle}
                    selectedIndex={yearIndex}
                    datas={this.yearList}
                    onValueChanged={this.onYearValueChanged}
                />
                <BirthDayPicker pickerStyle={styles.pickerStyle}
                    selectedIndex={1}
                    datas={this.yearList}
                    onValueChanged={this.onMonthValueChanged}
                />
                <BirthDayPicker pickerStyle={styles.pickerStyle}
                    selectedIndex={1}
                    datas={this.yearList}
                    onValueChanged={this.onMonthValueChanged}
                />
            </View>
        </View>
        );
    };

    render() {
        return this.renderContent();
    }
}

const styles = StyleSheet.create({
    loadingContainer: {
        width: '100%',
        height: 320,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        height: 264,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    headerContainer: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cancelButton: {
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sureButton: {
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pickerContainer: {
        width: '100%',
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
    },
    touchImage: {
        width: 15 * 124 * UI.size.scale / 64,
        height: 15 * UI.size.scale
    },
});
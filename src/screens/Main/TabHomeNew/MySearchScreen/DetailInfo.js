import React, { PureComponent } from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import Images from '../../../../image';
import UI from '../../../../UI';
import TitleView from '../common/TitleView';

import DateSelectModel from '../common/DateSelectModel';
export default class DetailInfo extends PureComponent {
  constructor() {
    super();
    this.state = {
      year: 2020,
      select_0: false,
      select_1: false,
      select_2: false,
      select_3: false,
      isShowYear: false,
    };
  }

  clickSearch = () => {
    this.setState({
      isShowYear: true
    });
  };

  onYearCall = ({
    year
  }) => {
    this.setState({
      isShowYear: false,
      year: year
    });;
  };

  onDismiss = () => {
    this.setState({
      isShowYear: false
    });;
  };

  clickSelect = index => {
    switch (index) {
      case 0: this.setState({ select_0: !this.state.select_0 }); break;
      case 1: this.setState({ select_1: !this.state.select_1 }); break;
      case 2: this.setState({ select_2: !this.state.select_2 }); break;
      case 3: this.setState({ select_3: !this.state.select_3 }); break;
      default: break;
    }
  };

  searchButton = () => {
    const {
      navigation
    } = this.props;
    navigation.navigate('Register');
  };

  rightView = () => (
    <TouchableOpacity style={
      {
        position: 'absolute', right: 10
      }
    }
      onPress={
        this.searchButton
      } >
      <Image style={{ width: 15 * 2, height: 15 }}
        source={Images.detail_hear
        } />
    </TouchableOpacity >
  );

  renderHeader = index => {
    return (
      <View style={{
        flex: 1, backgroundColor: '#fff', justifyContent: 'center',
      }} >
        <View style={{ width: '100%', height: 10, backgroundColor: '#f5f6f9' }} />
        <Image
          style={{
            width: UI.size.screenWidth,
            height: (UI.size.screenWidth * 100) / 810,
          }}
          source={Images.detail_info_0}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginBottom: 8, marginTop: 15, alignItems: 'center', }} >
          <Text style={{ fontSize: 12, color: '#9D9D9D', }} >
            收入：
          </Text>
          <Text style={{ fontSize: 12, color: '#333333' }} >
            0元
        </Text>
        </View >
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginBottom: 5, marginTop: 7, alignItems: 'center',
        }} >
          <Text style={{ fontSize: 12, color: '#9D9D9D', }} >已申报税额： </Text>
          <Text style={{ fontSize: 12, color: '#333333' }} > 10元</Text>
        </View >
        <Image
          style={{
            width: UI.size.screenWidth,
            height: (UI.size.screenWidth * 98) / 810,
          }}
          source={Images.detail_jishu}
        />

        <View style={{ width: '100%', height: 10, backgroundColor: '#f5f6f9' }} />
        <Image
          style={{
            width: UI.size.screenWidth,
            height: (UI.size.screenWidth * 101) / 810,
          }}
          source={Images.detail_info_1}
        />
      </View>
    );
  };
  renderItem_0 = () => {
    return (
      <TouchableOpacity style={styles.click}
        activeOpacity={1}
        onPress={() => { this.clickSelect(index); }} >
        <View style={styles.contentBg} >
          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10, justifyContent: 'space-between' }} >
            <Text style={styles.itemTitle} > 所得项目小类： </Text>
            <Text style={styles.itemDate} > 正常工资薪金 </Text>
          </View >
          <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
            <Text style={styles.itemTitle} > 扣缴义务人名称： </Text>
            <Text style={styles.itemDate} > 正常工资薪金 </Text>
          </View >
          <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
            <Text style={styles.itemTitle} > 扣缴义务人纳税人识别号： </Text>
            <Text style={styles.itemDate} > 121233333 </Text>
          </View >
          <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
            <Text style={styles.itemTitle} > 主管税务机关：</Text>
            <Text style={styles.itemDate} > 1212333000000000000000000000000000033 </Text>
          </View >
          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginBottom: 10, justifyContent: 'space-between' }} >
            <Text style={styles.itemTitle} > 申报渠道：</Text>
            <Text style={styles.itemDate} > 其他 </Text>
          </View >
          <View style={{ width: '100%', height: 10, backgroundColor: '#f5f6f9' }} />
          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 15, justifyContent: 'space-between' }} >
            <Text style={styles.itemTitle} > 申报日期： </Text>
            <Text style={styles.itemDate} > 2020-09-01 </Text>
          </View >
          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginBottom: 10, justifyContent: 'space-between' }} >
            <Text style={styles.itemTitle} > 主税款所属期：</Text>
            <Text style={styles.itemDate} > 2020-09 </Text>
          </View >
          <View style={{ width: '100%', height: 10, backgroundColor: '#f5f6f9' }} />
        </View >
      </TouchableOpacity>
    );
  };
  renderItem_1 = () => {
    return (
      <TouchableOpacity style={styles.click}
        activeOpacity={1}
        onPress={() => { this.clickSelect(index); }} >
        <View style={styles.contentBg} >
          <Image
            style={{
              width: UI.size.screenWidth,
              height: (UI.size.screenWidth * 270) / 810,
            }}
            source={Images.detail_info_2}
          />
          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10, justifyContent: 'space-between' }} >
            <Text style={styles.itemTitle1} > 本期收入： </Text>
            <Text style={styles.itemDate1} > 0元 </Text>
          </View >
          <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
            <Text style={styles.itemTitle1} > 本期免税收入： </Text>
            <Text style={styles.itemDate1} > 0元 </Text>
          </View >
          <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
            <Text style={styles.itemTitle1} > 本期减免费用： </Text>
            <Text style={styles.itemDate1} > 0元 </Text>
          </View >
          <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
            <Text style={styles.itemTitle1} > 本期专项扣除：</Text>
            <Text style={styles.itemDate1} > 0元 </Text>
          </View >
          <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
            <Text style={styles.itemTitle1} > 本期其他扣除：</Text>
            <Text style={styles.itemDate1} > 0元 </Text>
          </View >
          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginBottom: 10, justifyContent: 'space-between' }} >
            <Text style={styles.itemTitle1} > 本期准予扣除的捐赠项目：</Text>
            <Text style={styles.itemDate1} > 0元 </Text>
          </View >

          <View style={{ width: '100%', height: 80, backgroundColor: '#f5f6f9' }} />
        </View >
      </TouchableOpacity>
    );
  };
  renderItem = index => {
    return (
      <TouchableOpacity style={styles.click}
        activeOpacity={1}
        onPress={() => { this.clickSelect(index); }} >
        <View style={styles.contentBg} >
          <View style={{ width: '100%', height: 10, backgroundColor: '#f5f6f9' }} />
          <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
            <Text style={styles.itemTitle} > 工资薪金 </Text>
            <Text style={styles.itemDate} > 2020-07 </Text>
          </View >
          <Text style={[styles.itemDetail, { marginLeft: 10 }]} > 所得项目小类： </Text>
          <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }} >
            <Text style={styles.itemDetail} numberOfLines={1} > 扣缴义务人： </Text>
            <Image style={{ position: 'absolute', right: 0, width: 30, height: 30, }} source={Images.p1_12} />
          </View >
          <Text style={[styles.itemDetail, { marginLeft: 10 }]} numberOfLines={1} > 收入：</Text>
          <Text style={[styles.itemDetail, { marginLeft: 10, marginBottom: 25 }]} numberOfLines={1}  > 已申报税额： </Text>
        </View >
      </TouchableOpacity>
    );
  };

  render () {
    const { navigation } = this.props;
    const { year, isShowYear } = this.state;
    return (<View style={styles.container} >
      <TitleView title={'收入纳税明细查询'
      } rightView={this.rightView} navigation={navigation}
      />
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false} >
        {this.renderHeader(0)}

        {this.renderItem_0()}
        {this.renderItem_1()}
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
    backgroundColor: '#f5f6f9'
  },
  contentContainerStyle: {
    backgroundColor: UI.color.background,
  },
  image: {
    width: UI.size.screenWidth,
    height: (UI.size.screenWidth * 226) / 1440,
  },
  image_1: {
    width: UI.size.screenWidth,
    height: (UI.size.screenWidth * 310) / 1440,
  },
  click: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  contentBg: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentImage: {
    width: 23,
    height: 23,
    marginRight: 10,
  },
  subTitle: {
    marginLeft: 20,
    fontSize: 12,
    color: '#333333'
  },
  year: {
    position: 'absolute',
    left: UI.size.screenWidth / 2 - 40,
    fontSize: 12,
    color: '#333333',
  },
  itemBg: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  itemImage: {
    width: 25,
    height: 25,
    marginLeft: 18
  },
  itemTitle: {
    fontSize: 12,
    color: '#9D9D9D',
    marginTop: 5,
    maxWidth: 120,
    textAlign: 'left'
  },

  itemDate: {
    fontSize: 12,
    color: '#333333',
    marginTop: 5,
    maxWidth: UI.size.screenWidth - 120 - 20 - 10,
    textAlign: 'right'
  },
  itemTitle1: {
    fontSize: 12,
    color: '#9D9D9D',
    marginTop: 5,
    maxWidth: 160,
    textAlign: 'left'
  },
  itemDate1: {
    fontSize: 12,
    color: '#333333',
    marginTop: 5,
    maxWidth: UI.size.screenWidth - 160 - 20 - 10,
    textAlign: 'right'
  },
  itemDetail: {
    fontSize: 12,
    color: '#9D9D9D',
    marginTop: 5,
    marginRight: 30
  },
});
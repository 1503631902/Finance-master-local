/*
 * @Author: zhangcx01
 * @Date: 2020-08-01 23:47:33
 * @LastEditTime: 2020-08-01 23:50:21
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 */
import color from './lib/color';
import size from './lib/size';
import fontSize from './lib/fontSize';

const UI = {
    color,
    size,
    fontSize,
    fontSizeNew: {},
    getNumString,
    getNumNick,
    getNumPhone
};



const widthList = {
    "10": 50,
    "10.5": 52,
    "11": 55,
    "11.5": 58,
    "12": 60,
    "12.5": 63,
    "13": 64,
    "13.5": 67,
    "14": 70,
    "14.5": 72,
    "15": 75,
    "15.5": 78,
    "16": 80,
    "16.5": 83,
    "17": 86,
    "17.5": 88,
    "18": 90,
    "18.5": 92,
    "19": 95,
    "19.5": 98,
    "20": 99,
    "20.5": 102,
    "21": 104,
    "21.5": 107,
    "22": 110,
    "22.5": 112,
    "23": 115,
    "23.5": 116,
    "24": 119,
    "24.5": 122,
    "25": 124,
    "25.5": 127,
    "26": 130,
    "26.5": 132,
    "27": 135,
    "27.5": 138,
    "28": 140,
    "28.5": 142,
    "29": 144,
    "29.5": 147,
    "30": 148,
    "30.5": 151,
    "31": 154,
    "31.5": 156,
    "32": 159,
    "32.5": 162,
    "33": 164,
    "33.5": 166,
    "34": 168,
    "34.5": 171,
    "35": 174,
    "35.5": 176,
    "36": 179,
    "36.5": 182,
    "37": 184,
    "37.5": 187,
    "38": 190,
    "38.5": 191,
    "39": 194,
    "39.5": 196,
    "40": 198,
    "40.5": 200,
    "41": 203,
    "41.5": 206,
    "42": 208,
    "42.5": 211,
    "43": 214,
    "43.5": 216,
    "44": 218,
    "44.5": 220,
    "45": 223,
    "45.5": 226,
    "6": 31,
    "6.5": 34,
    "7": 36,
    "7.5": 39,
    "8": 40,
    "8.5": 43,
    "9": 46,
    "9.5": 48
}


let currentWidthList = {}
export function setWidthList(list) {
    currentWidthList = list
    const fonts = {
        font_6: getFontSize(6),
        font_6_5: getFontSize(6.5),
        font_7: getFontSize(7),
        font_7_5: getFontSize(7.5),
        font_8: getFontSize(8),
        font_8_5: getFontSize(8.5),
        font_9: getFontSize(9),
        font_9_5: getFontSize(9.5),
        font_10: getFontSize(10),
        font_10_5: getFontSize(10.5),
        font_11: getFontSize(11),
        font_11_5: getFontSize(11.5),
        font_12: getFontSize(12),
        font_12_5: getFontSize(12.5),
        font_13: getFontSize(13),
        font_13_5: getFontSize(13.5),
        font_14: getFontSize(14),
        font_14_5: getFontSize(14.5),
        font_15: getFontSize(15),
        font_15_5: getFontSize(15.5),
        font_16: getFontSize(16),
        font_16_5: getFontSize(16.5),
        font_17: getFontSize(17),
        font_17_5: getFontSize(17.5),
        font_18: getFontSize(18),
        font_18_5: getFontSize(18.5),
        font_19: getFontSize(19),
        font_19_5: getFontSize(19.5),
        font_20: getFontSize(20),
        font_20_5: getFontSize(20.5),
        font_21: getFontSize(21),
        font_21_5: getFontSize(21.5),
        font_22: getFontSize(22),
        font_22_5: getFontSize(22.5),
        font_23: getFontSize(23),
        font_23_5: getFontSize(23.5),
        font_24: getFontSize(24),
        font_24_5: getFontSize(24.5),
        font_25: getFontSize(25),
        font_25_5: getFontSize(25.5),
        font_26: getFontSize(26),
        font_26_5: getFontSize(26.5),
        font_27: getFontSize(27),
        font_27_5: getFontSize(27.5),
        font_28: getFontSize(28),
        font_28_5: getFontSize(28.5),
        font_29: getFontSize(29),
        font_29_5: getFontSize(29.5),
        font_30: getFontSize(30),
        font_30_5: getFontSize(30.5),
        font_31: getFontSize(31),
        font_31_5: getFontSize(31.5),
        font_32: getFontSize(32),
        font_32_5: getFontSize(32.5),
        font_33: getFontSize(33),
        font_33_5: getFontSize(33.5),
        font_34: getFontSize(34),
        font_34_5: getFontSize(34.5),
        font_35: getFontSize(35),
        font_35_5: getFontSize(35.5),
        font_36: getFontSize(36),
        font_36_5: getFontSize(36.5),
        font_37: getFontSize(37),
        font_37_5: getFontSize(37.5),
        font_38: getFontSize(38),
        font_38_5: getFontSize(38.5),
        font_39: getFontSize(39),
        font_39_5: getFontSize(39.5),
        font_40: getFontSize(40),
        font_40_5: getFontSize(40.5),
        font_41: getFontSize(41),
        font_41_5: getFontSize(41.5),
        font_42: getFontSize(42),
        font_42_5: getFontSize(42.5),
        font_43: getFontSize(43),
        font_43_5: getFontSize(43.5),
        font_44: getFontSize(44),
        font_44_5: getFontSize(44.5),
        font_45: getFontSize(45),
        font_45_5: getFontSize(45.5)
    }
    UI.fontSizeNew = fonts;
}

export function getFontSize(size) {
    if (currentWidthList === {}) {
        return size * UI.size.windowScale
    }
    const key = widthList[size + ''];
    const scal = key / 360;
    if (360 === UI.size.screenWidth) {
        return size
    }
    const value = UI.size.screenWidth * scal
    let fontSize = 0
    let sub = 100000;
    for (const key in currentWidthList) {
        if (Math.abs(value - currentWidthList[key]) <= sub) {
            fontSize = Math.ceil(key)
            if (Math.abs(value - currentWidthList[key]) === sub) {
                break;
            }
            sub = Math.ceil(Math.abs((value - currentWidthList[key]) * 1000)) / 1000
        }
    }
    return fontSize
}

function getNumString(numstr) {
    const num = parseFloat(numstr);
    if (num > 1000 * 1000) {
        const num_0 = Math.floor(num / (1000 * 1000))
        const num_1 = Math.floor((num - num_0 * 1000 * 1000) / 1000)
        const num_2 = num - num_0 * 1000 * 1000 - num_1 * 1000

        let ss = ','
        if (num_2 < 10) {
            ss = ',00'
        } else if (num_2 < 100) {
            ss = ',0'
        } else {
            ss = ','
        }
        return num_0 + ',' + num_1 + ss + num_2.toFixed(2)
    } else if (num > 1000) {
        const num_0 = Math.floor(num / 1000)
        const num_1 = num - num_0 * 1000
        let ss = ','
        if (num_1 < 10) {
            ss = ',00'
        } else if (num_1 < 100) {
            ss = ',0'
        } else {
            ss = ','
        }
        return num_0 + ss + num_1.toFixed(2)
    }
    return '' + num.toFixed(2)
}

function getNumNick(str) {
    if (str.length > 2) {
        return '*' + str.slice(-2)
    }
    return '*' + str.slice(-1)
}

function getNumPhone(str) {
    let phone = ''
    const phoneStr = str + ''
    if (phoneStr.length === 11) {
        phone = phoneStr.slice(0, 3) + '****' + phoneStr.slice(-4);
    }
    return phone
}



export default UI;

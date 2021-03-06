import jsSHA from "jssha";
import zipCodeList from "@src/res/zipCodeList";
export default {
  methods: {
    zipCodeToChinese(zipCode) {
      const obj = zipCodeList.find((el) => el.zipCode === zipCode);
      if (obj) {
        return obj.city + " " + obj.township;
      } else {
        return;
      }
    },
    chooseone(a, b) {
      return a ?? b;
    },
    getTimeRange(sTime, eTime) {
      return `${sTime.substr(0, 10)} ${sTime.substr(11, 5)} ~ ${eTime.substr(0, 10)} ${eTime.substr(11, 5)}`;
    },
    getAuthorizationHeader() {
      var AppID = "c3fc7551d62a455083ec06b72ceaa938";
      var AppKey = "-UzRd4LSDVosLoGCBUY7OBpFVwA";

      var GMTString = new Date().toGMTString();
      var ShaObj = new jsSHA("SHA-1", "TEXT");
      ShaObj.setHMACKey(AppKey, "TEXT");
      ShaObj.update("x-date: " + GMTString);
      var HMAC = ShaObj.getHMAC("B64");
      var Authorization =
        'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"';

      return { Authorization: Authorization, "X-Date": GMTString /*,'Accept-Encoding': 'gzip'*/ }; //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
      // return {
      //   Authorization: `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="Base64(HMAC-SHA1("x-date: " + x-date , ${AppKey}))"`,
      //   "X-Date": GMTString,
      // };
    },
    itemsFindValue(items, value) {
      return items.filter((el) => el.value == value)?.[0] ?? { text: "", value: "" };
    },
    parameterToStr(parameter) {
      let s = "";
      for (let key in parameter) {
        if (parameter[key]) {
          s += `${s ? "&" : ""}${key}=${parameter[key]}`;
        }
      }
      return s;
    },
  },
};

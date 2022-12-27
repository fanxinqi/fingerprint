/*
 *  https://browserleaks.com/canvas
 *  uniqueness 99.93%, 对于我们的场景够用了
 * */

// 来源 https://browserleaks.com/js/canvas.js
// 测试后该方法生成的指纹比较稳定
export const getComplexCanvasFingerprint = () => {
  // Text with lowercase/uppercase/punctuation symbols
  const c = "maimai.cn,com <canvas> 1.0";
  const canvas = document.createElement("canvas");
  canvas.setAttribute("width", 220);
  canvas.setAttribute("height", 30);
  const canvasContext = canvas.getContext("2d");
  canvasContext.textBaseline = "top";
  // The most common type
  canvasContext.font = "14px 'Arial'";
  canvasContext.textBaseline = "alphabetic";
  canvasContext.fillStyle = "#f60";
  canvasContext.fillRect(125, 1, 62, 20);
  // Some tricks for color mixing to increase the difference in rendering
  canvasContext.fillStyle = "#069";
  canvasContext.fillText(c, 2, 15);
  canvasContext.fillStyle = "rgba(102, 204, 0, 0.7)";
  canvasContext.fillText(c, 4, 17);
  return canvas.toDataURL();
};

//spiltCRC32FromBase64 从  base64 中提取CRC32校验码
function extractCRC32FromBase64(base64) {
  // 移除 base64 header
  base64 = base64.replace("data:image/png;base64,", "");
  const bin = window.atob(base64);
  // 倒数16到12位是PNG数据中的CRC32校验码
  const crc32ASKii = bin.slice(-16, -12);
  // 转换为16进制
  return string2Hex(crc32ASKii.toString());
}

// string2Hex 字符串转16进制
function string2Hex(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let askii = str.charCodeAt(i);
    if (askii <= 0x0f) {
      // 小于0x0f转为16进制后在前面补零
      result += "0";
    }
    result += askii.toString(16).toLocaleUpperCase();
  }
  return result;
}

export default () => {
  const base64 = getComplexCanvasFingerprint();
  // 2.提取CRC32校验码作为Canvas指纹
  return extractCRC32FromBase64(base64);
};

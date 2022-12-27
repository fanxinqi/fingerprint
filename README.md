# mm-fingerprint
![image](https://user-images.githubusercontent.com/16263427/209670821-ce4793bc-d98b-4f43-b13a-bac4434b6556.png)
# api使用
```javascript
  import fingerprint from 'mm-fingerprint'
  console.log(fingerprint()) // 7CC1AC53 设备不同，这个值就不同
```

# 指纹原理

## png 图片格式
### header
![](https://github.com/fanxinqi/fingerprint/blob/main/img/head.png)
- 第一行
  - 89 50 4e 47 0d 0a 1a 0a 前8个字节是PNG格式固定文件头
  - 00 00 00 0d 代表图片长宽的数据块长度为13，也是固定值
  - 49 48 44 52 是固定值,代表IHDR
- 第二行
  - 00 00 00 dc 为图片宽度
  - 00 00 00 1e 为图片高度
  - 由于数据块长度为13，中间08 06 00 00为剩余填充部分
  - 00 47 7a 70 末是为头部信息的CRC32校验和

### footer
![](https://github.com/fanxinqi/fingerprint/blob/main/img/footer.png)
- 倒数第二行 倒数16到第12之前的这4个值，图片内容有任何不同 CRC32校验和都会不同
- 7c c1 ac 53 为图片内容的CRC32校验和

## Canvas 
- 指纹原理
使用 Canvas 绘制同样的内容，在不同电脑、浏览器上会因为硬件不同得到不同的结果
即使生成的图片肉眼看上去一样,实际细节上也有很大的差异
具体原因：
    在图片格式来看，不同浏览器使用了不同的图形处理引擎、不同的图片导出选项、不同的默认压缩级别等。
    在像素级别来看，操作系统各自使用了不同的设置和算法来进行抗锯齿和子像素渲染操作。
    
- 计算方式
1）直接对整个 base64 数据进行 hash，将hash值作为用户指纹
2）从 PNG 图片中取出图片内容 CRC32 校验码，省去了计算hash效率比较高

## 碰撞率0.07%，具体参考
 - https://browserleaks.com/canvas





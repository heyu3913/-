## 利用广播通道实现标签页通信
### 1. 什么是广播通道
广播通道是一种新的浏览器原生API，它可以让你在同源的标签页之间传递消息。这个API的目的是为了让开发者可以在不同的标签页之间共享数据，而不需要使用LocalStorage或者其他的存储方式。
### 2. 广播通道的使用
#### 2.1 创建广播通道
```js
const channel = new BroadcastChannel('test_channel');
```
#### 2.2 发送消息
```js
channel.postMessage('Hello World');
```
#### 2.3 接收消息
```js
channel.onmessage = function (ev) {
  console.log(ev.data);
}
```
#### 2.4 关闭广播通道
```js
channel.close();
```
### 3. 广播通道的兼容性
![image.png](https://cdn.nlark.com/yuque/0/2021/png/127599/1627569734853-3b6f3f1e-5b0a-4b0f-8b0a-5b8b8b0b0b0b.png#clientId=u0f2f1b1c-9b9b-4&from=paste&height=178&id=u3f3f1b1e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=178&originWidth=1000&originalType=binary&ratio=1&size=10392&status=done&style=none&taskId=u3f3f1b1e-9b9b-4&width=1000)
### 4. 广播通道的应用场景
#### 4.1 多标签页之间的通信
```js
// tab1
const channel = new BroadcastChannel('test_channel');
channel.postMessage('Hello World');
```
```js
// tab2
const channel = new BroadcastChannel('test_channel');
channel.onmessage = function (ev) {
  console.log(ev.data);
}
```
#### 4.2 多窗口之间的通信
```js
// window1
const channel = new BroadcastChannel('test_channel');
channel.postMessage('Hello World');
```
```js
// window2
const channel = new BroadcastChannel('test_channel');
channel.onmessage = function (ev) {
  console.log(ev.data);
}
```
#### 4.3 多iframe之间的通信
```js
// iframe1
const channel = new BroadcastChannel('test_channel');
channel.postMessage('Hello World');
```
```js
// iframe2
const channel = new BroadcastChannel('test_channel');
channel.onmessage = function (ev) {
  console.log(ev.data);
}
```
#### 4.4 多浏览器之间的通信
```js
// browser1
const channel = new BroadcastChannel('test_channel');
channel.postMessage('Hello World');
```
```js
// browser2
const channel = new BroadcastChannel('test_channel');
channel.onmessage = function (ev) {
  console.log(ev.data);
}
```
#### 4.5 多域名之间的通信
```js
// domain1
const channel = new BroadcastChannel('test_channel');
channel.postMessage('Hello World');
```
```js
// domain2
const channel = new BroadcastChannel('test_channel');
channel.onmessage = function (ev) {
  console.log(ev.data);
}
```
### 5. 广播通道的注意事项
#### 5.1 广播通道的关闭
广播通道的关闭是一个很重要的问题，因为如果不关闭广播通道，那么会导致内存泄漏。广播通道的关闭有两种方式，一种是调用close方法，另一种是调用terminate方法。
```js
// close
channel.close();
```
```js
// terminate
channel.terminate();
```
#### 5.2 广播通道的消息大小
广播通道的消息大小是有限制的，目前不同浏览器的限制不一样，但是一般都是在1MB左右。如果超过了这个限制，那么消息就会被丢弃。
#### 5.3 广播通道的消息类型
广播通道的消息类型是有限制的，目前只支持字符串、数字、布尔值、对象、数组、Blob、File、ArrayBuffer、SharedArrayBuffer、ImageData、ArrayBufferView、DataView、Map、Set、Date、RegExp、Error、Promise、URL、URLSearchParams、USVString、ReadableStream、WritableStream、TransformStream、MessagePort、ImageBitmap、BigInt、BigInt64Array、BigUint64Array、Float32Array、Float64Array、Int8Array、Int16Array、Int32Array、Uint8Array、Uint16Array、Uint32Array、Uint8ClampedArray这些类型。






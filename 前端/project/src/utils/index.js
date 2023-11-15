// 标签页之间通信
const channel = new BroadcastChannel('channel');
export function sendMsg(type,content) {
    channel.postMessage({type,content});
}
export function listenMsg(callback) {
    channel.onmessage = (e) => {
        callback(e.data);
    }
}
export function stopListeningMsg() {
    channel.onmessage = null;
}
export function closeListeningMsg() {
    channel.close()
}

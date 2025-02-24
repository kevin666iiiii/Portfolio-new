// var oWidth = document.documentElement.clientWidth;
// if (oWidth < 1366) {
//     window.onload = function () {
//         getRem(1366, 182.133)
//     };
//     window.onresize = function () {
//         getRem(1200, 160)
//     };
//     window.onresize = function () {
//         getRem(1024, 136.533)
//     };
//     window.onresize = function () {
//         getRem(768, 102.4)
//     };
//     window.onresize = function () {
//         getRem(750, 100)
//     };
//     window.onresize = function () {
//         getRem(414, 55.2)
//     };
//     window.onresize = function () {
//         getRem(375, 50)
//     };
// }
// function getRem(pwidth, prem) {
//     var html = document.getElementsByTagName("html")[0];
//     var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
//     html.style.fontSize = oWidth / pwidth * prem + "px";
// }

function setRootFontSize() {
    const baseSize = 16; // 基准大小，通常设置为16px
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
 
    // 根据屏幕宽度动态调整字体大小
    let rootFontSize;
    if (screenWidth < 600) {
        rootFontSize = baseSize * 0.8; // 小屏设备字体缩小到80%
    } else if (screenWidth < 1200) {
        rootFontSize = baseSize; // 中屏设备使用默认大小
    } else {
        rootFontSize = baseSize * 1.2; // 大屏设备字体放大到120%
    }
 
    document.documentElement.style.fontSize = `${rootFontSize}px`;
}
 
// 初始化并添加窗口大小改变时的监听器
setRootFontSize();
window.addEventListener('resize', setRootFontSize);
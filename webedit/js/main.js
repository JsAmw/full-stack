var JIN_var = {};

// 初始化
$(function() {
	var jinTools = new JIN_tools();
	var requestParam = jinTools.getUrlParam('name', false);
	jinTools.log(requestParam);
});

// init event
function initEvent() {

}
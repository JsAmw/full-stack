var JIN_var = {};

// 初始化
$(function() {
	var jinTools = new JIN_tools();
	var requestParam = jinTools.getUrlParam('name', false);
	jinTools.log(requestParam);

	initData();
	initEvent();
});

// init data.
function initData() {
}

// init event
function initEvent() {
}

function getContent(name) {
	return "name:" + name;
}

function showBtn(show) {
	if (show) {
		$('#btn').show();
	} else {
		$('#btn').hide();
	}
}
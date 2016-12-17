var JIN_var = {};

$(function() {
	var jinTools = new JIN_tools();
	var requestParam = jinTools.getUrlParam('name', false);
	jinTools.log(requestParam);
});
function JIN_tools () {
	var logLevel = 'debug';
	var isLogEnable = true;

    this.getUrlParam = function (name, isNotEscape) {
        var reg = RegExp('(^|&)' + name + '=([^&].*|$)');
        var data = location.search.substr(1).match(reg);
        if (data) {
            if (isNotEscape) {
                return data[2];
            }
            return unescape(data[2]);
        }
    }

    this.log = function (msg) {
        if (isLogEnable && window.console) {
            console[logLevel](msg);
        }
    }
}

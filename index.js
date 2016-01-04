'use strict';
/* 导入依赖库 */
var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
/* 定义插件名称 */
var PLUGIN_NAME = "gulp-cdn";

/**
 * [regexMatchAll 替换域名]
 * @param  {[string]} string   [输入buffer流]
 * @param  {[string]} regexp   [需要替换的域名]
 * @param  {[string]} replacer [替换的cdn域名]
 * @return {[string]}          [返回替换的文本流]
 */
function regexMatchAll(string, regexp, replacer) {
	var matches = string.replace(new RegExp(regexp, "g"), replacer);
	return matches;
}


/**
 * [gulpCdnHandler 替换CDN域名接口方式]
 * @param  {[object]} opt [替换相关的域名对象]
 * @return {[buffer]}     [文档流]
 */
function gulpCDNReplace(opt) {
	var _domain = null;
	var _cdn = null;
	if (!opt) {
		throw new PluginError(PLUGIN_NAME, "Missing option!");
	}
	if (Array.isArray(opt)) {
		var flag = false;
		var domains = [];
		for (var i = 0; i < opt.length; i++) {
			var itemDomain = opt[i];
			var tmpDomain = itemDomain.domain || null;
			var tmpCdn = itemDomain.cdn || null;
			if (!tmpDomain) {
				flag = true;
				throw new PluginError(PLUGIN_NAME, "[domain option must require] Need source url!");
			}
			if (!tmpCdn) {
				flag =true;
				throw new PluginError(PLUGIN_NAME, "[cdn option must require] Need cdn url!");
			}
			domains.push(itemDomain);
		};
		if (!flag) {
			var stream = through.obj(function(file, enc, cb) {
				if (file.isStream()) {
					this.emit("[Error]", new PluginError(PLUGIN_NAME, "Streams are not supported!"));
					return cb();
				}
				if (file.isBuffer()) {
					var content = String(file.contents);
					for (var i = 0; i < domains.length; i++) {
						var temp = domains[i];
						content = regexMatchAll(content, temp.domain, temp.cdn);
					};
					file.contents = new Buffer(content);
				}
				this.push(file);
				cb();
			})
			return stream;
		} else {
			var stream = through.obj(function(file, enc, cb) {
				if (file.isStream()) {
					this.emit("[Error]", new PluginError(PLUGIN_NAME, "Streams are not supported!"));
					return cb();
				}
				this.push(file);
				cb();
			})
			return stream;
		}
	} else {
		_domain = opt.domain || null;
		_cdn = opt.cdn || null;
		if (!_domain) {
			throw new PluginError(PLUGIN_NAME, "[domain option must require] Need source url!");
		}
		if (!_cdn) {
			throw new PluginError(PLUGIN_NAME, "[cdn option must require] Need cdn url!");
		}
		var stream = through.obj(function(file, enc, cb) {
			if (file.isStream()) {
				this.emit("[Error]", new PluginError(PLUGIN_NAME, "Streams are not supported!"));
				return cb();
			}
			if (file.isBuffer()) {
				var content = regexMatchAll(String(file.contents), _domain, _cdn);
				file.contents = new Buffer(content);
			}
			this.push(file);
			cb();
		})
		return stream;
	}

}
module.exports = gulpCDNReplace;
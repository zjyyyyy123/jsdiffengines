/*---
description: https://github.com/web-platform-tests/wpt/url/resources/urltestdata.json
flags: [module]
---*/

import { runTests } from "./url_FIXTURE.js";

const tests = [
	{
		"input": "wss://foo:815/",
		"base": "about:blank",
		"href": "wss://foo:815/",
		"origin": "wss://foo:815",
		"protocol": "wss:",
		"username": "",
		"password": "",
		"host": "foo:815",
		"hostname": "foo",
		"port": "815",
		"pathname": "/",
		"search": "",
		"hash": ""
	},
	{
		"input": "http:/example.com/",
		"base": "about:blank",
		"href": "http://example.com/",
		"origin": "http://example.com",
		"protocol": "http:",
		"username": "",
		"password": "",
		"host": "example.com",
		"hostname": "example.com",
		"port": "",
		"pathname": "/",
		"search": "",
		"hash": ""
	},
	{
		"input": "ftp:/example.com/",
		"base": "about:blank",
		"href": "ftp://example.com/",
		"origin": "ftp://example.com",
		"protocol": "ftp:",
		"username": "",
		"password": "",
		"host": "example.com",
		"hostname": "example.com",
		"port": "",
		"pathname": "/",
		"search": "",
		"hash": ""
	},
	{
		"input": "https:/example.com/",
		"base": "about:blank",
		"href": "https://example.com/",
		"origin": "https://example.com",
		"protocol": "https:",
		"username": "",
		"password": "",
		"host": "example.com",
		"hostname": "example.com",
		"port": "",
		"pathname": "/",
		"search": "",
		"hash": ""
	},
	{
		"input": "madeupscheme:/example.com/",
		"base": "about:blank",
		"href": "madeupscheme:/example.com/",
		"origin": "null",
		"protocol": "madeupscheme:",
		"username": "",
		"password": "",
		"host": "",
		"hostname": "",
		"port": "",
		"pathname": "/example.com/",
		"search": "",
		"hash": ""
	},
	{
		"input": "file:/example.com/",
		"base": "about:blank",
		"href": "file:///example.com/",
		"protocol": "file:",
		"username": "",
		"password": "",
		"host": "",
		"hostname": "",
		"port": "",
		"pathname": "/example.com/",
		"search": "",
		"hash": ""
	},
	{
		"input": "ftps:/example.com/",
		"base": "about:blank",
		"href": "ftps:/example.com/",
		"origin": "null",
		"protocol": "ftps:",
		"username": "",
		"password": "",
		"host": "",
		"hostname": "",
		"port": "",
		"pathname": "/example.com/",
		"search": "",
		"hash": ""
	},
	{
		"input": "gopher:/example.com/",
		"base": "about:blank",
		"href": "gopher:/example.com/",
		"origin": "null",
		"protocol": "gopher:",
		"username": "",
		"password": "",
		"host": "",
		"hostname": "",
		"port": "",
		"pathname": "/example.com/",
		"search": "",
		"hash": ""
	},
	{
		"input": "ws:/example.com/",
		"base": "about:blank",
		"href": "ws://example.com/",
		"origin": "ws://example.com",
		"protocol": "ws:",
		"username": "",
		"password": "",
		"host": "example.com",
		"hostname": "example.com",
		"port": "",
		"pathname": "/",
		"search": "",
		"hash": ""
	},
	{
		"input": "wss:/example.com/",
		"base": "about:blank",
		"href": "wss://example.com/",
		"origin": "wss://example.com",
		"protocol": "wss:",
		"username": "",
		"password": "",
		"host": "example.com",
		"hostname": "example.com",
		"port": "",
		"pathname": "/",
		"search": "",
		"hash": ""
	},
	{
		"input": "data:/example.com/",
		"base": "about:blank",
		"href": "data:/example.com/",
		"origin": "null",
		"protocol": "data:",
		"username": "",
		"password": "",
		"host": "",
		"hostname": "",
		"port": "",
		"pathname": "/example.com/",
		"search": "",
		"hash": ""
	},
	{
		"input": "javascript:/example.com/",
		"base": "about:blank",
		"href": "javascript:/example.com/",
		"origin": "null",
		"protocol": "javascript:",
		"username": "",
		"password": "",
		"host": "",
		"hostname": "",
		"port": "",
		"pathname": "/example.com/",
		"search": "",
		"hash": ""
	},
	{
		"input": "mailto:/example.com/",
		"base": "about:blank",
		"href": "mailto:/example.com/",
		"origin": "null",
		"protocol": "mailto:",
		"username": "",
		"password": "",
		"host": "",
		"hostname": "",
		"port": "",
		"pathname": "/example.com/",
		"search": "",
		"hash": ""
	},
	{
		"input": "http:example.com/",
		"base": "about:blank",
		"href": "http://example.com/",
		"origin": "http://example.com",
		"protocol": "http:",
		"username": "",
		"password": "",
		"host": "example.com",
		"hostname": "example.com",
		"port": "",
		"pathname": "/",
		"search": "",
		"hash": ""
	},
	{
		"input": "ftp:example.com/",
		"base": "about:blank",
		"href": "ftp://example.com/",
		"origin": "ftp://example.com",
		"protocol": "ftp:",
		"username": "",
		"password": "",
		"host": "example.com",
		"hostname": "example.com",
		"port": "",
		"pathname": "/",
		"search": "",
		"hash": ""
	}
];

runTests(tests);

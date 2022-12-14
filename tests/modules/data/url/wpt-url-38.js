/*---
description: https://github.com/web-platform-tests/wpt/url/resources/urltestdata.json
flags: [module]
---*/

import { runTests } from "./url_FIXTURE.js";

const tests = [
	{
		"input": "C|",
		"base": "file://host/dir/file",
		"href": "file://host/C:",
		"protocol": "file:",
		"username": "",
		"password": "",
		"host": "host",
		"hostname": "host",
		"port": "",
		"pathname": "/C:",
		"search": "",
		"hash": ""
	},
	{
		"input": "C|",
		"base": "file://host/D:/dir1/dir2/file",
		"href": "file://host/C:",
		"protocol": "file:",
		"username": "",
		"password": "",
		"host": "host",
		"hostname": "host",
		"port": "",
		"pathname": "/C:",
		"search": "",
		"hash": ""
	},
	{
		"input": "C|#",
		"base": "file://host/dir/file",
		"href": "file://host/C:#",
		"protocol": "file:",
		"username": "",
		"password": "",
		"host": "host",
		"hostname": "host",
		"port": "",
		"pathname": "/C:",
		"search": "",
		"hash": ""
	},
	{
		"input": "C|?",
		"base": "file://host/dir/file",
		"href": "file://host/C:?",
		"protocol": "file:",
		"username": "",
		"password": "",
		"host": "host",
		"hostname": "host",
		"port": "",
		"pathname": "/C:",
		"search": "",
		"hash": ""
	},
	{
		"input": "C|/",
		"base": "file://host/dir/file",
		"href": "file://host/C:/",
		"protocol": "file:",
		"username": "",
		"password": "",
		"host": "host",
		"hostname": "host",
		"port": "",
		"pathname": "/C:/",
		"search": "",
		"hash": ""
	},
	{
		"input": "C|\n/",
		"base": "file://host/dir/file",
		"href": "file://host/C:/",
		"protocol": "file:",
		"username": "",
		"password": "",
		"host": "host",
		"hostname": "host",
		"port": "",
		"pathname": "/C:/",
		"search": "",
		"hash": ""
	},
	{
		"input": "C|\\",
		"base": "file://host/dir/file",
		"href": "file://host/C:/",
		"protocol": "file:",
		"username": "",
		"password": "",
		"host": "host",
		"hostname": "host",
		"port": "",
		"pathname": "/C:/",
		"search": "",
		"hash": ""
	},
	{
		"input": "C",
		"base": "file://host/dir/file",
		"href": "file://host/dir/C",
		"protocol": "file:",
		"username": "",
		"password": "",
		"host": "host",
		"hostname": "host",
		"port": "",
		"pathname": "/dir/C",
		"search": "",
		"hash": ""
	},
	{
		"input": "C|a",
		"base": "file://host/dir/file",
		"href": "file://host/dir/C|a",
		"protocol": "file:",
		"username": "",
		"password": "",
		"host": "host",
		"hostname": "host",
		"port": "",
		"pathname": "/dir/C|a",
		"search": "",
		"hash": ""
	},
	"# Windows drive letter quirk in the file slash state",
	{
		"input": "/c:/foo/bar",
		"base": "file:///c:/baz/qux",
		"href": "file:///c:/foo/bar",
		"protocol": "file:",
		"username": "",
		"password": "",
		"host": "",
		"hostname": "",
		"port": "",
		"pathname": "/c:/foo/bar",
		"search": "",
		"hash": ""
	},
	{
		"input": "/c|/foo/bar",
		"base": "file:///c:/baz/qux",
		"href": "file:///c:/foo/bar",
		"protocol": "file:",
		"username": "",
		"password": "",
		"host": "",
		"hostname": "",
		"port": "",
		"pathname": "/c:/foo/bar",
		"search": "",
		"hash": ""
	},
	{
		"input": "file:\\c:\\foo\\bar",
		"base": "file:///c:/baz/qux",
		"href": "file:///c:/foo/bar",
		"protocol": "file:",
		"username": "",
		"password": "",
		"host": "",
		"hostname": "",
		"port": "",
		"pathname": "/c:/foo/bar",
		"search": "",
		"hash": ""
	},
	{
		"input": "/c:/foo/bar",
		"base": "file://host/path",
		"href": "file://host/c:/foo/bar",
		"protocol": "file:",
		"username": "",
		"password": "",
		"host": "host",
		"hostname": "host",
		"port": "",
		"pathname": "/c:/foo/bar",
		"search": "",
		"hash": ""
	},
	"# Do not drop the host in the presence of a drive letter"
];

runTests(tests);

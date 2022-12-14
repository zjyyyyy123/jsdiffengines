/*---
description: adapted from https://github.com/web-platform-tests/wpt/tree/master/html/webappapis/structured-clone
flags: [module]
---*/

import { structuredClone, self, assert_equals, assert_false, assert_not_equals, assert_true, assert_unreached, check, compare_primitive, compare_Array, compare_Object, enumerate_props } from "./webappapis-structured-clone_FIXTURE.js";

function compare_Date(actual, input) {
  if (typeof actual === 'string')
    assert_unreached(actual);
  assert_true(actual instanceof Date, 'instanceof Date');
  assert_equals(Number(actual), Number(input), 'converted to primitive');
  assert_not_equals(actual, input);
}
check('Date 0', new Date(0), compare_Date);
check('Date -0', new Date(-0), compare_Date);
check('Date -8.64e15', new Date(-8.64e15), compare_Date);
check('Date 8.64e15', new Date(8.64e15), compare_Date);
check('Array Date objects', [new Date(0),
                             new Date(-0),
                             new Date(-8.64e15),
                             new Date(8.64e15)], compare_Array(enumerate_props(compare_Date)));
check('Object Date objects', {'0':new Date(0),
                              '-0':new Date(-0),
                              '-8.64e15':new Date(-8.64e15),
                              '8.64e15':new Date(8.64e15)}, compare_Object(enumerate_props(compare_Date)));

function compare_RegExp(expected_source) {
  // XXX ES6 spec doesn't define exact serialization for `source` (it allows several ways to escape)
  return function(actual, input) {
    if (typeof actual === 'string')
      assert_unreached(actual);
    assert_true(actual instanceof RegExp, 'instanceof RegExp');
    assert_equals(actual.global, input.global, 'global');
    assert_equals(actual.ignoreCase, input.ignoreCase, 'ignoreCase');
    assert_equals(actual.multiline, input.multiline, 'multiline');
    assert_equals(actual.source, expected_source, 'source');
    assert_equals(actual.sticky, input.sticky, 'sticky');
    assert_equals(actual.unicode, input.unicode, 'unicode');
    assert_equals(actual.lastIndex, 0, 'lastIndex');
    assert_not_equals(actual, input);
  }
}
function func_RegExp_flags_lastIndex() {
  const r = /foo/gim;
  r.lastIndex = 2;
  return r;
}
function func_RegExp_sticky() {
  return new RegExp('foo', 'y');
}
function func_RegExp_unicode() {
  return new RegExp('foo', 'u');
}
check('RegExp flags and lastIndex', func_RegExp_flags_lastIndex, compare_RegExp('foo'));
check('RegExp sticky flag', func_RegExp_sticky, compare_RegExp('foo'));
check('RegExp unicode flag', func_RegExp_unicode, compare_RegExp('foo'));
check('RegExp empty', new RegExp(''), compare_RegExp('(?:)'));
check('RegExp slash', new RegExp('/'), compare_RegExp('\\/'));
check('RegExp new line', new RegExp('\n'), compare_RegExp('\\n'));
check('Array RegExp object, RegExp flags and lastIndex', [func_RegExp_flags_lastIndex()], compare_Array(enumerate_props(compare_RegExp('foo'))));
check('Array RegExp object, RegExp sticky flag', function() { return [func_RegExp_sticky()]; }, compare_Array(enumerate_props(compare_RegExp('foo'))));
check('Array RegExp object, RegExp unicode flag', function() { return [func_RegExp_unicode()]; }, compare_Array(enumerate_props(compare_RegExp('foo'))));
check('Array RegExp object, RegExp empty', [new RegExp('')], compare_Array(enumerate_props(compare_RegExp('(?:)'))));
check('Array RegExp object, RegExp slash', [new RegExp('/')], compare_Array(enumerate_props(compare_RegExp('\\/'))));
check('Array RegExp object, RegExp new line', [new RegExp('\n')], compare_Array(enumerate_props(compare_RegExp('\\n'))));
check('Object RegExp object, RegExp flags and lastIndex', {'x':func_RegExp_flags_lastIndex()}, compare_Object(enumerate_props(compare_RegExp('foo'))));
check('Object RegExp object, RegExp sticky flag', function() { return {'x':func_RegExp_sticky()}; }, compare_Object(enumerate_props(compare_RegExp('foo'))));
check('Object RegExp object, RegExp unicode flag', function() { return {'x':func_RegExp_unicode()}; }, compare_Object(enumerate_props(compare_RegExp('foo'))));
check('Object RegExp object, RegExp empty', {'x':new RegExp('')}, compare_Object(enumerate_props(compare_RegExp('(?:)'))));
check('Object RegExp object, RegExp slash', {'x':new RegExp('/')}, compare_Object(enumerate_props(compare_RegExp('\\/'))));
check('Object RegExp object, RegExp new line', {'x':new RegExp('\n')}, compare_Object(enumerate_props(compare_RegExp('\\n'))));


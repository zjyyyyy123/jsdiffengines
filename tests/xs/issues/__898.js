// Copyright (C) 2020 Apple Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
author: Michael Saboff
description: Exotic named group names in non-Unicode RegExps
esid: prod-GroupSpecifier
features: [regexp-named-groups]
---*/

/*
 Valid ID_Start / ID_Continue Unicode characters

 π  \u{1d453}  \ud835 \udc53
 π  \u{1d45c}  \ud835 \udc5c
 π₯  \u{id465}  \ud835 \udc65

 π  \u{1d4d3}  \ud835 \udcd3
 πΈ  \u{1d4f8}  \ud835 \udcf8
 π°  \u{1d4f0}  \ud835 \udcf0

 π  \u{1d4d1}  \ud835 \udcd1
 π»  \u{1d4fb}  \ud835 \udcfb
 πΈ  \u{1d4f8}  \ud835 \udcf8
 π  \u{1d500}  \ud835 \udd00
 π·  \u{1d4f7}  \ud835 \udcf7

 π°  \u{1d5b0}  \ud835 \uddb0
 π‘  \u{1d5a1}  \ud835 \udda1
 π₯  \u{1d5a5}  \ud835 \udda5

 (fox) ηΈ  \u{72f8}  \u72f8
 (dog) η  \u{72d7}  \u72d7  

 Valid ID_Continue Unicode characters (Can't be first identifier character.)

 π  \u{1d7da}  \ud835 \udfda
*/

var string = "The quick brown fox jumped over the lazy dog's back";
var string2 = "It is a dog eat dog world.";

let match = null;

assert.sameValue(string.match(/(?<animal>fox|dog)/).groups.animal, "fox");

match = string.match(/(?<πππ₯>fox).*(?<ππΈπ°>dog)/);
assert.sameValue(match.groups.πππ₯, "fox");
assert.sameValue(match.groups.ππΈπ°, "dog");
assert.sameValue(match[1], "fox");
assert.sameValue(match[2], "dog");

match = string.match(/(?<ηΈ>fox).*(?<η>dog)/);
assert.sameValue(match.groups.ηΈ, "fox");
assert.sameValue(match.groups.η, "dog");
assert.sameValue(match[1], "fox");
assert.sameValue(match[2], "dog");

assert.sameValue(string.match(/(?<ππ»πΈππ·>brown)/).groups.ππ»πΈππ·, "brown");
assert.sameValue(string.match(/(?<ππ»πΈππ·>brown)/).groups.\u{1d4d1}\u{1d4fb}\u{1d4f8}\u{1d500}\u{1d4f7}, "brown");
assert.sameValue(string.match(/(?<\u{1d4d1}\u{1d4fb}\u{1d4f8}\u{1d500}\u{1d4f7}>brown)/).groups.ππ»πΈππ·, "brown");
assert.sameValue(string.match(/(?<\u{1d4d1}\u{1d4fb}\u{1d4f8}\u{1d500}\u{1d4f7}>brown)/).groups.\u{1d4d1}\u{1d4fb}\u{1d4f8}\u{1d500}\u{1d4f7}, "brown");
assert.sameValue(string.match(/(?<\ud835\udcd1\ud835\udcfb\ud835\udcf8\ud835\udd00\ud835\udcf7>brown)/).groups.ππ»πΈππ·, "brown");
assert.sameValue(string.match(/(?<\ud835\udcd1\ud835\udcfb\ud835\udcf8\ud835\udd00\ud835\udcf7>brown)/).groups.\u{1d4d1}\u{1d4fb}\u{1d4f8}\u{1d500}\u{1d4f7}, "brown");

assert.sameValue(string.match(/(?<π°π‘π₯>q\w*\W\w*\W\w*)/).groups.π°π‘π₯, "quick brown fox");
assert.sameValue(string.match(/(?<π°π‘\u{1d5a5}>q\w*\W\w*\W\w*)/).groups.π°π‘π₯, "quick brown fox");
assert.sameValue(string.match(/(?<π°\u{1d5a1}π₯>q\w*\W\w*\W\w*)/).groups.π°π‘π₯, "quick brown fox");
assert.sameValue(string.match(/(?<π°\u{1d5a1}\u{1d5a5}>q\w*\W\w*\W\w*)/).groups.π°π‘π₯, "quick brown fox");
assert.sameValue(string.match(/(?<\u{1d5b0}π‘π₯>q\w*\W\w*\W\w*)/).groups.π°π‘π₯, "quick brown fox");
assert.sameValue(string.match(/(?<\u{1d5b0}π‘\u{1d5a5}>q\w*\W\w*\W\w*)/).groups.π°π‘π₯, "quick brown fox");
assert.sameValue(string.match(/(?<\u{1d5b0}\u{1d5a1}π₯>q\w*\W\w*\W\w*)/).groups.π°π‘π₯, "quick brown fox");
assert.sameValue(string.match(/(?<\u{1d5b0}\u{1d5a1}\u{1d5a5}>q\w*\W\w*\W\w*)/).groups.π°π‘π₯, "quick brown fox");

assert.sameValue(string.match(/(?<theπ>the)/).groups.theπ, "the");
assert.sameValue(string.match(/(?<the\u{1d7da}>the)/).groups.theπ, "the");
assert.sameValue(string.match(/(?<the\ud835\udfda>the)/).groups.theπ, "the");

match = string2.match(/(?<dog>dog)(.*?)(\k<dog>)/);
assert.sameValue(match.groups.dog, "dog");
assert.sameValue(match[1], "dog");
assert.sameValue(match[2], " eat ");
assert.sameValue(match[3], "dog");

match = string2.match(/(?<ππΈπ°>dog)(.*?)(\k<ππΈπ°>)/);
assert.sameValue(match.groups.ππΈπ°, "dog");
assert.sameValue(match[1], "dog");
assert.sameValue(match[2], " eat ");
assert.sameValue(match[3], "dog");

match = string2.match(/(?<η>dog)(.*?)(\k<η>)/);
assert.sameValue(match.groups.η, "dog");
assert.sameValue(match[1], "dog");
assert.sameValue(match[2], " eat ");
assert.sameValue(match[3], "dog");
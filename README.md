# [Environments](https://eslint.org/docs/user-guide/configuring#specifying-environments)

### ECMAScript 6 (es6)

Enable all ECMAScript 6 features except for modules. This also automatically sets the ecmaVersion parser option to 6. [ES6 White Paper](https://www.ecma-international.org/ecma-262/6.0/)

### Node

Adds the Node.js global variables and Node.js scoping

# [Parser Options](https://eslint.org/docs/user-guide/configuring#specifying-parser-options)

### Module Source Type

Our code will mostly be written as ECMAScript modules.

# Rules

## Table of Contents

• [array-bracket-spacing](#array-bracket-spacing) • [prefer-template](#prefer-template) •

## [array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing)

```javascript
// Correct
var arr = []
var arr = ['foo', 'bar', 'baz']
var arr = [['foo'], 'bar', 'baz']
```

```javascript
// Incorrect
var arr = [ 'foo', 'bar' ]
var arr = ['foo', 'bar' ]
var arr = [ ['foo'], 'bar']
var arr = [[ 'foo' ], 'bar']
```

## [arrow-parens](https://eslint.org/docs/rules/arrow-parens)

```javascript
// Correct
(a) => {}
(a) => {'\n'}
a => ({})
() => {}
a => a
a.then((foo) => {})
a.then((foo) => { if (true) {} })
a((foo) => { if (true) {} })
(a, b, c) => a
(a = 10) => a
([a, b]) => a
({a, b}) => a
```

```javascript
// Incorrect
(a) => a
a => {}
a => {'\n'}
a.map((x) => x * x)
a.map(x => {
    return x * x;
})
a.then(foo => {})
```

## [arrow-spacing](https://eslint.org/docs/rules/arrow-spacing)

```javascript
// Correct
() => {}
(a) => {}
a => a
() => {'\n'}
```

```javascript
// Incorrect
()=> {}
() =>{}
(a)=> {}
(a) =>{}
a =>a
a=> a
()=> {'\n'}
() =>{'\n'}
```

## [brace-style](https://eslint.org/docs/rules/brace-style)

```javascript
// Correct
function foo() {
    return true
}

if (foo) {
    bar()
}

if (foo) {
    bar()
}
else {
    baz()
}

try {
    somethingRisky()
}
catch(e) {
    handleError()
}

// when there are no braces, there are no problems
if (foo) bar()
else if (baz) boom()
```

```javascript
// Incorrect
function foo()
{
    return true
}

if (foo)
{
    bar()
}

try
{
    somethingRisky()
} catch(e)
{
    handleError()
}

if (foo) {
    bar()
} else {
    baz()
}
```

## [camelcase](https://eslint.org/docs/rules/camelcase)

```javascript
// Correct
import { no_camelcased as camelCased } from "external-module"

var myFavoriteColor   = "#112C85"
var _myFavoriteColor  = "#112C85"
var myFavoriteColor_  = "#112C85"
var MY_FAVORITE_COLOR = "#112C85"
var foo = bar.baz_boom
var foo = { qux: bar.baz_boom }

obj.do_something()
do_something()
new do_something()

var { category_id: category } = query

function foo({ isCamelCased }) {
    // ...
}

function foo({ isCamelCased: isAlsoCamelCased }) {
    // ...
}

function foo({ isCamelCased = 'default value' }) {
    // ...
}

var obj = {
    my_pref: 1
}

var { categoryId = 1 } = query

var { foo: isCamelCased } = bar

var { foo: isCamelCased = 1 } = quz
```

```javascript
// Incorrect
import { no_camelcased } from "external-module"

var my_favorite_color = "#112C85"

function do_something() {
    // ...
}

obj.do_something = function() {
    // ...
}

function foo({ no_camelcased }) {
    // ...
}

function foo({ isCamelcased: no_camelcased }) {
    // ...
}

function foo({ no_camelcased = 'default value' }) {
    // ...
}

var { category_id = 1 } = query

var { foo: no_camelcased } = bar

var { foo: bar_baz = 1 } = quz
```

## [curly](https://eslint.org/docs/rules/curly)

```javascript
// Correct
if (foo) foo++; else doSomething()

if (foo) foo++
else if (bar) baz()
else doSomething()

do something()
while (foo)

while (foo
  && bar) baz()

if (foo) {
    foo++
}

if (foo) { foo++ }

while (true) {
    doSomething();
    doSomethingElse()
}
```

```javascript
// Incorrect
if (foo)
    doSomething()
else
    doSomethingElse()

if (foo) foo(
    bar,
    baz)
```

## [default-case](https://eslint.org/docs/rules/default-case)

```javascript
// Correct
switch (a) {
    case 1:
        /* code */
        break

    default:
        /* code */
        break
}


switch (a) {
    case 1:
        /* code */
        break

    // no default
}

switch (a) {
    case 1:
        /* code */
        break

    // No Default
}
```

```javascript
// Incorrect
switch (a) {
    case 1:
        /* code */
        break
}
```

## [dot-notation](https://eslint.org/docs/rules/dot-notation)

```javascript
// Correct
var x = foo.bar

var x = foo[bar]    // Property name is a variable, square-bracket notation required
```

```javascript
// Incorrect
var x = foo["bar"]
```

## [eol-last](https://eslint.org/docs/rules/eol-last)

```javascript
// Correct
function doSmth() {
    var foo = 2
} // \n
```

```javascript
// Incorrect
function doSmth() {
  var foo = 2
}
```

## [eqeqeq](https://eslint.org/docs/rules/eqeqeq)

```javascript
// Correct
a === b
foo === true
bananas !== 1
value === undefined
typeof foo === 'undefined'
'hello' !== 'world'
0 === 0
true === true
foo === null
```

```javascript
// Incorrect
a == b
foo == true
bananas != 1
value == undefined
typeof foo == 'undefined'
'hello' != 'world'
0 == 0
true == true
foo == null
```

## [for-direction](https://eslint.org/docs/rules/for-direction)

```javascript
// Correct
for (var i = 0; i < 10; i++) {
}
```

```javascript
// Incorrect
for (var i = 0; i < 10; i--) {
}

for (var i = 10; i >= 0; i++) {
}
```

## [indent](https://eslint.org/docs/rules/indent)

```javascript
// Correct
if (a) {
    b=c
    function foo(d) {
        e=f
    }
}
```

```javascript
// Incorrect
if (a) {
  b=c
  function foo(d) {
    e=f
  }
}
```

## [keyword-spacing](https://eslint.org/docs/rules/keyword-spacing)

```javascript
// Correct
if (foo) {
    //...
} 
else if (bar) {
    //...
} 
else {
    //...
}
```

```javascript
// Incorrect
if(foo) {
    //...
}
else if(bar) {
    //...
}
else{
    //...
}
```

## [linebreak-style](https://eslint.org/docs/rules/linebreak-style)

```javascript
// Correct
var a = 'a', // \n
    b = 'b' // \n
// \n
function foo(params) { // \n
    // do stuff \n
}// \n
```

```javascript
// Incorrect
var a = 'a' // \r\n
```

## [new-cap](https://eslint.org/docs/rules/new-cap)

```javascript
// Correct
var friend = new Person()
```

```javascript
// Incorrect
var friend = new person()
```

## [newline-per-chained-call](https://eslint.org/docs/rules/newline-per-chained-call)

```javascript
// Correct
_
  .chain({})
  .map(foo)
  .filter(bar)
  .value()

// Or
_
  .chain({})
  .map(foo)
  .filter(bar)

// Or
_.chain({})
  .map(foo)
  .filter(bar)

// Or
obj
  .prop
  .method().prop

// Or
obj
  .prop.method()
  .method2()
  .method3().prop
```

```javascript
// Incorrect
_.chain({}).map(foo).filter(bar).value()

// Or
_.chain({}).map(foo).filter(bar)

// Or
_
  .chain({}).map(foo)
  .filter(bar)

// Or
obj.method().method2().method3()
```

## [no-array-constructor](https://eslint.org/docs/rules/no-array-constructor)

```javascript
// Correct
Array(500)
new Array(someOtherArray.length)
```

```javascript
// Incorrect
Array(0, 1, 2)
new Array(0, 1, 2)
```

## [no-confusing-arrow](https://eslint.org/docs/rules/no-confusing-arrow)

```javascript
// Correct
var x = a => { return 1 ? 2 : 3; }
var x = (a) => { return 1 ? 2 : 3; }
```

```javascript
// Incorrect
var x = a => 1 ? 2 : 3
var x = (a) => 1 ? 2 : 3
var x = (a) => (1 ? 2 : 3)
```

## [no-else-return](https://eslint.org/docs/rules/no-else-return)

```javascript
// Correct
function foo() {
    if (x) {
        return y
    }

    return z
}

function foo() {
    if (x) {
        return y
    } else if (z) {
        var t = "foo"
    } else {
        return w
    }
}

function foo() {
    if (x) {
        if (z) {
            return y
        }
    } else {
        return z
    }
}

function foo() {
    if (error) {
        return 'It failed'
    } else if (loading) {
        return "It's still loading"
    }
}
```

```javascript
// Incorrect
function foo() {
    if (x) {
        return y
    } else {
        return z
    }
}

function foo() {
    if (x) {
        return y
    } else if (z) {
        return w
    } else {
        return t
    }
}

function foo() {
    if (x) {
        return y
    } else {
        var t = "foo"
    }

    return t
}

function foo() {
    if (error) {
        return 'It failed'
    } else {
        if (loading) {
            return "It's still loading"
        }
    }
}
```

## [no-empty-function](https://eslint.org/docs/rules/no-empty-function)

```javascript
// Correct
function foo() {
    // do nothing.
}

var foo = function() {
    // any clear comments.
}

var foo = () => {
    bar();
}

function* foo() {
    // do nothing.
}

var foo = function*() {
    // do nothing.
}

var obj = {
    foo: function() {
        // do nothing.
    },

    foo: function*() {
        // do nothing.
    },

    foo() {
        // do nothing.
    },

    *foo() {
        // do nothing.
    },

    get foo() {
        // do nothing.
    },

    set foo(value) {
        // do nothing.
    }
}

class A {
    constructor() {
        // do nothing.
    }

    foo() {
        // do nothing.
    }

    *foo() {
        // do nothing.
    }

    get foo() {
        // do nothing.
    }

    set foo(value) {
        // do nothing.
    }

    static foo() {
        // do nothing.
    }

    static *foo() {
        // do nothing.
    }

    static get foo() {
        // do nothing.
    }

    static set foo(value) {
        // do nothing.
    }
}
```

```javascript
// Incorrect
function foo() {}

var foo = function() {}

var foo = () => {}

function* foo() {}

var foo = function*() {}

var obj = {
    foo: function() {},

    foo: function*() {},

    foo() {},

    *foo() {},

    get foo() {},

    set foo(value) {}
}

class A {
    constructor() {}

    foo() {}

    *foo() {}

    get foo() {}

    set foo(value) {}

    static foo() {}

    static *foo() {}

    static get foo() {}

    static set foo(value) {}
}
```

## [no-eq-null](https://eslint.org/docs/rules/no-eq-null)

```javascript
// Correct
if (foo === null) {
    bar()
}

while (qux !== null) {
    baz()
}
```

```javascript
// Incorrect
if (foo == null) {
    bar()
}

while (qux != null) {
    baz()
}
```

## [no-extra-parens](https://eslint.org/docs/rules/no-extra-parens)

```javascript
// Correct
(0).toString()

(Object.prototype.toString.call())

({}.toString.call())

(function(){}) ? a() : b()

(/^a$/).test(x)
```

```javascript
// Incorrect
a = (b * c)

(a * b) + c

typeof (a)

(function(){} ? a() : b())
```

## [no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)

```javascript
// Correct
switch(foo) {
    case 1:
        doSomething()
        break;

    case 2:
        doSomething()
}

function bar(foo) {
    switch(foo) {
        case 1:
            doSomething()
            return;

        case 2:
            doSomething()
    }
}

switch(foo) {
    case 1:
        doSomething()
        throw new Error("Boo!")

    case 2:
        doSomething()
}

switch(foo) {
    case 1:
    case 2:
        doSomething()
}

switch(foo) {
    case 1:
        doSomething()
        // falls through

    case 2:
        doSomething()
}
```

```javascript
// Incorrect
switch(foo) {
    case 1:
        doSomething()

    case 2:
        doSomething()
}
```

## [no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces)

```javascript
// Correct
var a = 1

if (foo === "bar") {}

a << b

var arr = [1, 2]

a ? b: c
```

```javascript
// Incorrect
var a =  1

if(foo   === "bar") {}

a <<  b

var arr = [1,  2]

a ?  b: c
```

## [no-multiple-empty-lines](https://eslint.org/docs/rules/no-multiple-empty-lines)

```javascript
// Correct
var foo = 5

var bar = 3
```

```javascript
// Incorrect
var foo = 5



var bar = 3
```

## [no-new-func](https://eslint.org/docs/rules/no-new-func)

```javascript
// Correct
var x = function (a, b) {
    return a + b
}
```

```javascript
// Incorrect
var x = new Function("a", "b", "return a + b")
var x = Function("a", "b", "return a + b")
```

## [no-new-object](https://eslint.org/docs/rules/no-new-object)

```javascript
// Correct
var myObject = new CustomObject()

var myObject = {}
```

```javascript
// Incorrect
var myObject = new Object()

var myObject = new Object
```

## [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign)

```javascript
// Correct
function foo(bar) {
    var baz = bar
}
```

```javascript
// Incorrect
function foo(bar) {
    bar = 13
}

function foo(bar) {
    bar++
}
```

## [no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor)

```javascript
// Correct
class A { }

class A {
    constructor () {
        doSomething()
    }
}

class A extends B {
    constructor() {
        super('foo')
    }
}

class A extends B {
    constructor() {
        super()
        doSomething()
    }
}
```

```javascript
// Incorrect
class A {
    constructor () {
    }
}

class A extends B {
    constructor (...args) {
      super(...args)
    }
}
```

## [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)

```javascript
// Correct
class Foo {
    bar() { }
    qux() { }
}

class Foo {
    get bar() { }
    set bar(value) { }
}

class Foo {
    static bar() { }
    bar() { }
}
```

```javascript
// Incorrect
class Foo {
    bar() { }
    bar() { }
}

class Foo {
    bar() { }
    get bar() { }
}

class Foo {
    static bar() { }
    static bar() { }
}
```

## [no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)

```javascript
// Correct
import { merge, find } from 'module'
import something from 'another-module'
```

```javascript
// Incorrect
import { merge } from 'module'
import something from 'another-module'
import { find } from 'module'
```

## [no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)

```javascript
// Correct
"\""
'\''
"\x12"
"\u00a9"
"\371"
"xs\u2111"
`\``
`\${${foo}\}`
`$\{${foo}\}`
/\\/g
/\t/g
/\w\$\*\^\./
```

```javascript
// Incorrect
"\'"
'\"'
"\#"
"\e"
`\"`
`\"${foo}\"`
`\#{foo}`
/\!/
/\@/
```

## [no-useless-return](https://eslint.org/docs/rules/no-useless-return)

```javascript
// Correct
function foo() { return 5 }

function foo() {
  return doSomething()
}

function foo() {
    if (condition) {
        bar();
        return
    } 
    else {
        baz()
    }
    qux()
}

function foo() {
    switch (bar) {
        case 1:
            doSomething();
            return
        default:
            doSomethingElse()
    }
}

function foo() {
    for (const foo of bar) {
        return
    }
}
```

```javascript
// Incorrect
function foo() { return }

function foo() {
    doSomething()
    return
}

function foo() {
    if (condition) {
        bar()
        return
    } 
    else {
        baz()
    }
}

function foo() {
    switch (bar) {
        case 1:
            doSomething();
        default:
            doSomethingElse();
            return
    }
}
```

## [no-var](https://eslint.org/docs/rules/no-var)

```javascript
// Correct
let x = "y"
const CONFIG = {}
```

```javascript
// Incorrect
var x = "y"
var CONFIG = {}
```

## [no-whitespace-before-property](https://eslint.org/docs/rules/no-whitespace-before-property)

```javascript
// Correct
foo.bar

foo[bar]

foo[ bar ]

foo.bar.baz

foo
    .bar().baz()

foo
    .bar()
    .baz()

foo.
    bar().
    baz()
```

```javascript
// Incorrect
foo [bar]

foo. bar

foo .bar

foo. bar. baz

foo. bar()
    .baz()

foo
    .bar(). baz()
```

## [nonblock-statement-body-position](https://eslint.org/docs/rules/nonblock-statement-body-position)

```javascript
// Correct
if (foo) bar()
else baz()

while (foo) bar()

for (let i = 1; i < foo; i++) bar()

do bar(); while (foo)

if (foo) { // block statements are always allowed with this rule
    bar()
} 
else {
    baz()
}
```

```javascript
// Incorrect
if (foo)
    bar()
else
    baz()

while (foo)
    bar()

for (let i = 1; i < foo; i++)
    bar()

do
    bar()
while (foo)
```

## [object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing)

```javascript
// Correct
var obj = {}
var obj = { 'foo': 'bar' }
var obj = { 'foo': { 'bar': 'baz' }, 'qux': 'quxx' }
var obj = {
  'foo': 'bar'
}
var { x } = y
import { foo } from 'bar'
```

```javascript
// Incorrect
var obj = {'foo': 'bar'}
var obj = {'foo': 'bar' }
var obj = { baz: {'foo': 'qux'}, bar}
var obj = {baz: { 'foo': 'qux' }, bar}
var obj = {'foo': 'bar'
}
var obj = {
    'foo':'bar'}
var {x} = y
import {foo } from 'bar'
```

## [object-shorthand](https://eslint.org/docs/rules/object-shorthand)

```javascript
// Correct
const foo = {
    w() {},
    *x() {},
    [y]() {},
    z
}
```

```javascript
// Incorrect
const foo = {
    w: function() {},
    x: function *() {},
    [y]: function() {},
    z: z
}
```

## [padded-blocks](https://eslint.org/docs/rules/padded-blocks)

```javascript
// Correct
if (a) {
    b()
}

if (a)
{
    b()
}
```

```javascript
// Incorrect
if (a) {

    b()

}

if (a)
{

    b()

}

if (a) {

    b()
}

if (a) {
    b()

}
```

## [prefer-arrow-callback](https://eslint.org/docs/rules/prefer-arrow-callback)

```javascript
// Correct
foo(a => a)

foo(() => this.a)
```

```javascript
// Incorrect
foo(function(a) { return a })

foo(function() { return this.a }.bind(this))
```

## [prefer-const](https://eslint.org/docs/rules/prefer-const)

```javascript
// Correct
// using const.
const a = 0

// it's never initialized.
let a
console.log(a)

// it's reassigned after initialized.
let a
a = 0
a = 1
console.log(a)

// it's initialized in a different block from the declaration.
let a
if (true) {
    a = 0
}
console.log(a)

// it's initialized at a place that we cannot write a variable declaration.
let a
if (true) a = 0
console.log(a)

// `i` gets a new binding each iteration
for (const i in [1, 2, 3]) {
    console.log(i)
}

// `a` gets a new binding each iteration
for (const a of [1, 2, 3]) {
    console.log(a)
}

// `end` is never reassigned, but we cannot separate the declarations without modifying the scope.
for (let i = 0, end = 10; i < end; ++i) {
    console.log(a)
}

// suggest to use `no-var` rule.
var b = 3
console.log(b)
```

```javascript
// Incorrect
// it's initialized and never reassigned.
let a = 3
console.log(a)

let a
a = 0
console.log(a)

// `i` is redefined (not reassigned) on each loop step.
for (let i in [1, 2, 3]) {
    console.log(i)
}

// `a` is redefined (not reassigned) on each loop step.
for (let a of [1, 2, 3]) {
    console.log(a)
}
```

## [prefer-template](https://eslint.org/docs/rules/prefer-template)

```javascript
// Correct
var str = "Hello World!"
var str = `Hello, ${name}!`
var str = `Time: ${12 * 60 * 60 * 1000}`
```

```javascript
// Incorrect
var str = "Hello, " + name + "!"
var str = "Time: " + (12 * 60 * 60 * 1000)
```

## [quote-props](https://eslint.org/docs/rules/quote-props)

```javascript
// Correct
var object1 = {
    "a-b": 0,
    "0x0": 0,
    "1e2": 0
}

var object2 = {
    foo: 'bar',
    baz: 42,
    true: 0,
    0: 0,
    'qux-lorem': true
}

var object3 = {
    foo() {
        return
    }
}
```

```javascript
// Incorrect
var object = {
    "a": 0,
    "0": 0,
    "true": 0,
    "null": 0
}
```

## [quotes](https://eslint.org/docs/rules/quotes)

```javascript
// Correct
var single = 'single'
var backtick = `back${x}tick` // backticks are allowed due to substitution
```

```javascript
// Incorrect
var double = "double";
var unescaped = "a string containing 'single' quotes"
```

## [semi](https://eslint.org/docs/rules/semi)

```javascript
// Correct
var name = "ESLint"

object.method = function() {
    // ...
}

var name = "ESLint"

;(function() {
    // ...
})()

import a from "a"
(function() {
    // ...
})()

import b from "b"
;(function() {
    // ...
})()
```

```javascript
// Incorrect
var name = "ESLint";

object.method = function() {
    // ...
};
```

## [space-before-blocks](https://eslint.org/docs/rules/space-before-blocks)

```javascript
// Correct
if (a) {
    b()
}

if (a) {
    b()
} else{ /*no error. this is checked by `keyword-spacing` rule.*/
    c()
}


function a() {}

for (;;) {
    b()
}

try {} catch(a) {}
```

```javascript
// Incorrect
if (a){
    b()
}

function a(){}

for (;;){
    b()
}

try {} catch(a){}

class Foo{
  constructor(){}
}
```

## [space-in-parens](https://eslint.org/docs/rules/space-in-parens)

```javascript
// Correct
foo()

foo('bar')

var foo = (1 + 2) * 3
(function () { return 'bar'; }())
```

```javascript
// Incorrect
foo( 'bar')
foo('bar' )
foo( 'bar' )

var foo = ( 1 + 2 ) * 3
( function () { return 'bar'; }() )
```

## [spaced-comment](https://eslint.org/docs/rules/spaced-comment)

```javascript
// Correct
/* eslint spaced-comment: ["error", "always"] */

// This is a comment with a whitespace at the beginning

/* This is a comment with a whitespace at the beginning */

/*
 * This is a comment with a whitespace at the beginning
 */

/*
This comment has a newline
*/
```

```javascript
// Incorrect
/*eslint spaced-comment: ["error", "always"]*/

//This is a comment with no whitespace at the beginning

/*This is a comment with no whitespace at the beginning */
```

## [template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing)

```javascript
// Correct
`hello, ${people.name}!`

`hello, ${
    people.name
}!`
```

```javascript
// Incorrect
`hello, ${ people.name}!`
`hello, ${people.name }!`

`hello, ${ people.name }!`
```

## [vars-on-top](https://eslint.org/docs/rules/vars-on-top)

```javascript
// Correct
function doSomething() {
    var first
    var second //multiple declarations are allowed at the top
    if (true) {
        first = true
    }
}

function doSomething() {
    var i
    for (i=0; i<10; i++) {}
}
```

```javascript
// Incorrect
// Variable declarations in a block:
function doSomething() {
    var first
    if (true) {
        first = true
    }
    var second
}

// Variable declaration in for initializer:
function doSomething() {
    for (var i=0; i<10; i++) {}
}
```

## [yoda](https://eslint.org/docs/rules/yoda)

```javascript
// Correct
if (5 & value) {
    // ...
}

if (value === "red") {
    // ...
}

if (x < -1 || 9 < x) {
}

if (x !== 'foo' && 'bar' !== x) {
}
```

```javascript
// Incorrect
if ("red" === color) {
    // ...
}

if (true == flag) {
    // ...
}

if (5 > count) {
    // ...
}

if (-1 < str.indexOf(substr)) {
    // ...
}

if (0 <= x && x < 1) {
    // ...
}
```

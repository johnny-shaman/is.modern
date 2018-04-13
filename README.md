# is.modern

[![License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](./LICENSE)
[![npm version](https://badge.fury.io/js/is.modern.svg)](https://badge.fury.io/js/is.modern)
[![Maintainability](https://api.codeclimate.com/v1/badges/1c30f575649d0f79088a/maintainability)](https://codeclimate.com/github/johnny-shaman/is.modern/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1c30f575649d0f79088a/test_coverage)](https://codeclimate.com/github/johnny-shaman/is.modern/test_coverage)
[![Build Status](https://travis-ci.org/johnny-shaman/is.modern.svg?branch=v0.5)](https://travis-ci.org/johnny-shaman/is.modern)

MayBe on Return constructor functions

## usage of node.js...

npm install is.modern

and if use in script Ex.

    const is = require("is.modern");


## usage of browser

git clone or download is.modern.js;

and if use on web Ex.

    <script src="https://cdn.jsdelivr.net/npm/is.modern/is.modern.js"></script>
    

## usage of workers

git clone or download is.modern.js;

and if use on woker Ex.

    importScripts(myjsFolder/is.modern.js, ...other)


## is(any) return to try any.constructor;
    
As you like to writing on switch case ...

    switch (is(any)) {
        case Object: {
            ...;
            break;
        }

        case Array: {
            ...;
            break;
        }

        case MyClass: {
            ...;
            break;
        }

        case MyConstructor: {
            ...;
            break;
        }

        case String: {
            ...;
            break;
        };

        case Number: {
            ...;
            break;
        };

        case undefined:
        case null: {
            throw new Error();
            break;
        };

        default:{
            
        }
    }

## Type Check Function

    is.array(any);
    is.object(any);
    is.pure(any);       //<- Check javascript pure Array or Object

    is.function(any);
    is.generator(any);
    is.iterable(any);    //<- Check iterator

    is.boolean(any);
    is.number(any);
    is.string(any);
    is.symbol(any);

## Value Check Function

    is.blank(any);      //<- Check 0 length string
    is.defined(any);    //<- Check defined variables
    is.nan(any);        //<- Check NaN (Not a Number)
    is.null(any);       //<- Check null
    is.valid(any);      //<- Check Is valid the value
    is.there(any);      //<- Check Object or Array have any entries

## Right Inherit Object

    is.held(me)(Super)  //<- Check instanceof Super
    is.self(any)        //<- Check object have a right constructor infomation
    
## node.js or browser or worker

    is.client
    is.server
    is.worker
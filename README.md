# is.modern

[![Build Status](https://travis-ci.org/johnny-shaman/is.modern.svg?branch=v0.5)](https://travis-ci.org/johnny-shaman/is.modern)
[![npm version][npm-badge]][npm-badge-url]
[![License][license-badge]][license-badge-url]

MayBe Monad on Return constructor functions

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
    
## node.js or browser

    is.client
    is.server

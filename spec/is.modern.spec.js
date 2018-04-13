
describe("test of is", function () {
    const is = this.is || require("../is.modern.js");
    const cv = {
        "array": [],
        "true": true,
        "false": false,
        "undefined": undefined,
        "function": function (){},
        "generator": function* (){},
        "iterable": function* (){}(),
        "null": null,
        "number": 1,
        "object": {},
        "string": "abc",
        "symbol": Symbol({}),
    };
    
    const cf = {
        "array": Array,
        "true": Boolean,
        "false": Boolean,
        "undefined": undefined,
        "function": Function,
        "generator": (function* (){}).constructor,
        "iterable": (function* (){}()).constructor,
        "null": null,
        "number": Number,
        "object": Object,
        "string": String,
        "symbol": Symbol,
    };

    const pv = {
        "array": [],
        "blank": "",
        "true": true,
        "false": false,
        "nan": NaN,
        "undefined": undefined,
        "function": function (){},
        "generator": function* (){},
        "iterable": function* (){}(),
        "null": null,
        "number": 1,
        "object": {},
        "string": "abc",
        "symbol": Symbol({}),
    };

    const pf = {
        "array": Array,
        "blank": "",
        "true": Boolean,
        "false": Boolean,
        "undefined": false,
        "nan": false,
        "function": Function,
        "generator": (function* (){}).constructor,
        "iterable": (function* (){}()).constructor,
        "null": false,
        "number": Number,
        "object": Object,
        "string": String,
        "symbol": Symbol,
    };

    class SuperTest {}
    class Test extends SuperTest {}
    
    function tSuper () {}
    function tFunc () {}
    
    tFunc.prototype = Object.assign(
        Object.create(
            tSuper.prototype,
            {constructor: Object.getOwnPropertyDescriptor(tFunc.prototype, "constructor")}
        ),
        tFunc.prototype,
        {test () {}}
    );
    
    function ttFunc () {}
    ttFunc.prototype = Object.assign(
        Object.create(
            SuperTest.prototype,
            {constructor: Object.getOwnPropertyDescriptor(ttFunc.prototype, "constructor")}
        ),
        ttFunc.prototype,
        {test () {}}
    );

    it("is", () => Object.keys(cv).forEach((k) => expect(is(cv[k])).toBe(cf[k])));
    it("is.array", () => Object.keys(pv).forEach((k) => expect(is.array(pv[k])).toBe(pf[k] === Array)));
    it("is.blank", () => Object.keys(pv).forEach((k) => expect(is.blank(pv[k])).toBe(pf[k] === "")));
    it("is.boolean", () => Object.keys(pv).forEach((k) => expect(is.boolean(pv[k])).toBe(pf[k] === Boolean)));
    it("is.defined", () => Object.keys(pv).forEach((k) => expect(is.defined(pv[k])).toBe(k !== "undefined" && true || false)));
    it("is.function", () => Object.keys(pv).forEach((k) => expect(is.function(pv[k])).toBe(pf[k] === Function)));
    it("is.generator", () => Object.keys(pv).forEach((k) => expect(is.generator(pv[k])).toBe(pf[k] === (function* (){}).constructor)));
    it("is.iterable", () => Object.keys(pv).forEach((k) => expect(is.iterable(pv[k])).toBe(pf[k] === (function* (){}()).constructor)));
    it("is.inherit true 1", () => expect(is.inherit(new Test)(SuperTest)).toBe(true));
    it("is.inherit true 2", () => expect(is.inherit(new tFunc)(tSuper)).toBe(true));
    it("is.inherit true 3", () => expect(is.inherit(new ttFunc)(SuperTest)).toBe(true));
    it("is.inherit false 1", () => expect(is.inherit(new tFunc)(SuperTest)).toBe(false));
    it("is.inherit false 2", () => expect(is.inherit(new Test)(tSuper)).toBe(false));
    it("is.inherit false 3", () => expect(is.inherit(new ttFunc)(tSuper)).toBe(false));
    it("is.held Array true", () => expect(is.held([0])(SuperTest)).toBe(true));
    it("is.held Object true", () => expect(is.held({test: 0})(tSuper)).toBe(true));
    it("is.held Array false", () => expect(is.held([])(SuperTest)).toBe(false));
    it("is.held Object false", () => expect(is.held({})(SuperTest)).toBe(false));
    it("is.nan", () => Object.keys(pv).forEach((k) => expect(is.nan(pv[k])).toBe(k ==="nan" && true || false)));
    it("is.null", () => Object.keys(pv).forEach((k) => expect(is.null(pv[k])).toBe(k === "null" && true || false)));
    it("is.number", () => Object.keys(pv).forEach((k) => expect(is.number(pv[k])).toBe(k === "nan" && true || pf[k] === Number)));
    it("is.object", () => Object.keys(pv).forEach((k) => expect(is.object(pv[k])).toBe(pf[k] === Object)));
    it("is.pure", () => Object.keys(pv).forEach((k) => expect(is.pure(pv[k])).toBe(pf[k] === Object || pf[k] === Array)));
    it("is.self true 1", () => expect(is.self(Test.prototype)).toBe(true));
    it("is.self true 2", () => expect(is.self(tFunc.prototype)).toBe(true));
    it("is.self false 1", () => expect(is.self(Test)).toBe(false));
    it("is.self false 2", () => expect(is.self(tFunc)).toBe(false));
    it("is.string", () => Object.keys(pv).forEach((k) => expect(is.string(pv[k])).toBe(pf[k] === String || pf[k] === "")));
    it("is.there true 1", () => expect(is.there({t: 1})).toBe(true));
    it("is.there true 2", () => expect(is.there([4])).toBe(true));
    it("is.there false 1", () => expect(is.there({})).toBe(false));
    it("is.there false 2", () => expect(is.there([])).toBe(false));
    it("is.valid", () => Object.keys(pv).forEach((k) => expect(is.valid(pv[k])).toBe(!!pf[k])));
    it("is.client", () => Object.keys(pv).forEach((k) => expect(is.client).toBe(false)));
    it("is.server", () => Object.keys(pv).forEach((k) => expect(is.server).toBe(true)));
    it("is.worker", () => Object.keys(pv).forEach((k) => expect(is.worker).toBe(false)));
});

describe("test of is", function () {
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
        "NaN": true,
        "function": Function,
        "generator": (function* (){}).constructor,
        "iterable": (function* (){}()).constructor,
        "null": true,
        "number": Number,
        "object": Object,
        "string": String,
        "symbol": Symbol,
    };
    
    class SuperTest {};
    class Test extends SuperTest {};
    
    function tSuper () {};
    function tFunc () {};
    
    object.assign(Object.create(tSuper.prototype), tFunc.prototype, {test () {}});
    
    function ttFunc () {}
    object.assign(Object.create(SuperTest.prototype), ttFunc.prototype, {test () {}});

    it("is", () => Object.keys(cv).forEach((k) => expect(is(cv[k])).toBe(cf[k])));
    it("is.array", () => Object.keys(pv).forEach((k) => expect(is.array(pv[k])).toBe(pf[k] === Array)));
    it("is.blank", () => Object.keys(pv).forEach((k) => expect(is.blank(pv[k])).toBe(pf[k] === "")));
    it("is.boolean", () => Object.keys(pv).forEach((k) => expect(is.boolean(pv[k])).toBe(pf[k] === Boolean)));
    it("is.defined", () => Object.keys(pv).forEach((k) => expect(is.defined(pv[k])).toBe(k !== "string" && !!pf[k] || false)));
    is.global.abc = 39;
    it("is.defined string", () => Object.keys(pv).forEach((k) => expect(is.defined(pv[k])).toBe(!!pf[k])));
    it("is.function", () => Object.keys(pv).forEach((k) => expect(is.function(pv[k])).toBe(pf[k] === Function)));
    it("is.generator", () => Object.keys(pv).forEach((k) => expect(is.generator(pv[k])).toBe(pf[k] === (function* (){}).constructor)));
    it("is.iterable", () => Object.keys(pv).forEach((k) => expect(is.iterable(pv[k])).toBe(pf[k] === (function* (){}()).constructor)));
    it("is.held true 1", () => expect(is.held(new Test)(SuperTest)).toBe(true));
    it("is.held true 2", () => expect(is.held(new tFunc)(tSuper)).toBe(true));
    it("is.held true 3", () => expect(is.held(new ttFunc)(SuperTest)).toBe(true));
    it("is.held false 1", () => expect(is.held(new tFunc)(SuperTest)).toBe(false));
    it("is.held false 2", () => expect(is.held(new Test)(tSuper)).toBe(false));
    it("is.held false 3", () => expect(is.held(new ttFunc)(tSuper)).toBe(false));
    it("is.NaN", () => Object.keys(pv).forEach((k) => expect(is.NaN(pv[k])).toBe(((k === "NaN" || "undefined") && pf[k]) || !pf[k])));
    it("is.null", () => Object.keys(pv).forEach((k) => expect(is.null(pv[k])).toBe((k === "NaN" && !pf[k]) || !pf[k])));
    it("is.number", () => Object.keys(pv).forEach((k) => expect(is.blank(pv[k])).toBe(pf[k] === Number)));
    it("is.object", () => Object.keys(pv).forEach((k) => expect(is.object(pv[k])).toBe(pf[k] === Object)));
    it("is.pure", () => Object.keys(pv).forEach((k) => expect(is.object(pv[k])).toBe(pf[k] === Object || pf[k] === Array)));
    it("is.self true 1", () => expect(is.self(Test.prototype)).toBe(true));
    it("is.self true 2", () => expect(is.self(tFunc.prototype)).toBe(true));
    it("is.self false 1", () => expect(is.self(Test)).toBe(false));
    it("is.self false 2", () => expect(is.self(tFunc)).toBe(false));
    it("is.string", () => Object.keys(pv).forEach((k) => expect(is.string(pv[k])).toBe(pf[k] === String)));
    it("is.there true 1", () => expect(is.there({t: 1})).toBe(true));
    it("is.there true 2", () => expect(is.there([4])).toBe(true));
    it("is.there false 1", () => expect(is.there({})).toBe(false));
    it("is.there false 2", () => expect(is.there([])).toBe(false));
    it("is.valid", () => Object.keys(pv).forEach((k) => expect(is.valid(pv[k])).toBe((k !== "NaN" || k != "null") && !!pf[k] || !pf[k])));
});


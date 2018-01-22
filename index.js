(() => {
    "use strict";
    const is = Object.assign((t) => {
        try {
            return t.constructor;
        } catch (e) {
            return t;
        }
    }, {
        "array": (t) => is(t) === Array,
        "blank": (t) => t === "",
        "boolean": (t) => is(t) === Boolean,
        "defined": (t) => (is.string(t) && is.global[t] !== undefined) || is(t) !== undefined,
        "function": (t) => is(t) === Function,
        "generator": (t) => is(t) === is(function* (){}),
        "iterable": (t) => is(t) === is(function* (){}()),
        "held": (t) => (p) => t instanceof p,
        "nan": (t) => is.number(t) && isNaN(t),
        "null": (t) => is(t) === null,
        "number": (t) => is(t) === Number,
        "object": (t) => is(t) === Object,
        "pure": (t) => is.object(t) || is.array(t),
        "self": (t) => is.valid(t) && is(t).prototype === t,
        "string": (t) => is(t) === String,
        "symbol": (t) => is(t) === Symbol,
        "there": (t) => Object.keys(t).length !== 0,
        "valid": (t) => is.boolean(t) || !!t,
        "client": this.constructor.name === "Window",
        "server": this.constructor.name !== "Window",
        "global" : (is.server && process) || (is.client && window)
    });


    is.server && (module.exports = is);
    is.client && (window.is = is);
})();
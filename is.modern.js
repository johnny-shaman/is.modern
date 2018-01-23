(() => {
    "use strict";

    const is = (t) => {
        try {
            return t.constructor;
        } catch (e) {
            return t;
        }
    };

    is.array = (t) => is(t) === Array,
    is.blank = (t) => t === "",
    is.boolean = (t) => is(t) === Boolean,
    is.defined = (t) => is(t) !== undefined,
    is.function = (t) => is(t) === Function,
    is.generator = (t) => is(t) === is(function* (){}),
    is.iterable = (t) => is(t) === is(function* (){}()),
    is.held = (t) => (p) => t instanceof p,
    is.nan = (t) => is.number(t) && isNaN(t),
    is.null = (t) => is(t) === null,
    is.number = (t) => is(t) === Number,
    is.object = (t) => is(t) === Object,
    is.pure = (t) => is.object(t) || is.array(t),
    is.self = (t) => is.valid(t) && is(t).prototype === t,
    is.string = (t) => is(t) === String,
    is.symbol = (t) => is(t) === Symbol,
    is.there = (t) => Object.keys(t).length !== 0,
    is.valid = (t) => !is.nan(t) && !is.blank(t) && is(t) !== t,
    is.client = this.constructor.name === "Window",
    is.server = this.constructor.name !== "Window",

    is.server && (module.exports = is);
    is.client && (window.is = is);
})();
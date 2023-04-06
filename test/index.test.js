const server = require("../routes/index");

describe('index service', () => {
    test("func_test_str", () => {
        var username = server.funcTestStr();
        expect(username).toEqual('username');
    })

    test("func_test_param", () => {
        const res = server.funcTestParam("hello");
        expect(res).toEqual('hello');
    })
})
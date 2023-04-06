const server = require("../routes/customer/customerAPI");

describe('customer service', () => {
    test("getCustomerList", () => {
        var res = server.getCustomerList(5);
        expect(res).toEqual([0, 1, 2, 3, 4]);
    })
})
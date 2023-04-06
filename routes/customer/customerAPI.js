var express = require('express');
function getCustomerList(num) {
    var res = []
    for (var i=0; i<num; i++) {
        res.push(i);
    }
    return res
};

module.exports = {getCustomerList};
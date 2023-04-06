var express = require('express');
var router = express.Router();

var dataCustomer = require('./dataCustomers')

// Mall API
/* Customer login with account and password
    Test URL: http://localhost:3050/api/customer/login?userName=customer1&password=customer1
*/
router.post('/login', function(req, res, next) { 
    console.log("(customer/login) req body:", req.body)
    var flag = false
    for (var i=0; i<dataCustomer.length; i++) {
        if (dataCustomer[i].userName === req.body.userName) {
            if (dataCustomer[i].password === req.body.password) {
                
                console.log("(customer/login): account match successfully.")
                res.send({
                    status: 'success',
                    data: {userName: req.body.userName}
                });
            } else {
                res.send(
                    { 
                        status: 'failed',
                        message: "Incorrect password ."});
                console.log("(customer/login): password incorrect.")
            }
        } else {
            console.log("(customer/login): No account record.")
        }
    }
    console.log("login")
   
});

/* Customer register with account, password, email 
    Test URL: http://localhost:3050/api/customer/register?userName=customer3&password=customer3&email='customer3@gmail.com
*/
router.post('/register', function(req, res, next) { 
    console.log("(customer/register) req body:", req.body)
    // console.log(req.body.userName, req.body.password, req.body.email)
    // console.log(req.query)
    var isNewUser = true
    console.log(dataCustomer)
    for (var i=0; i<dataCustomer.length; i++) {
        if (dataCustomer[i].userName == req.body.userName) {
            if (dataCustomer[i].password == req.body.password) {
                isNewUser = false
                console.log("(customer/register): account match successfully.")
            } else {
                console.log("(customer/register): password incorrect.")
            }
        } else {
            console.log("(customer/register): No account record.")
        }
    }
    console.log(isNewUser)
   
    if (isNewUser) {
        dataCustomer.push(
            {
                customerId: 2,
                userName: req.body.userName,
                password: req.body.password,
                email: req.body.email
            })
        console.log("(customer/register): account added successfully.")
        res.send({userName:req.body.userName})
        // res.status(200).send({ message: 'Register succeed.'})
    } else {
        // res.status(400).send({ message: 'Register Failed: user exists.'})
        console.log("(customer/register): user exists.")
        res.send("Error le")

    }
});


/* 
    get profile image.
    
    */
router.post('/profileImage', function(req, res, next) {

    console.log("(/profileImage) req body:", req.body)
    let url = `/public/images/accounts/${req.body.fileName}`
    res.send(url)

    // let path = 'public/images/accounts/logo.jpg'
    // const data = fs.readFile(path, function(error, data) {
    //     if (err) {
    //         res.send('(/profileImage) Error: Failed to send image.')
    //     } else {
    //         res.send(img)
    //     }
    // })
});



// CMS API
/* GET customers listing. */
router.get('/list', function(req, res, next) {
    res.send('respond with a resource');
  });
module.exports = router;

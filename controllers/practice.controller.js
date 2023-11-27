const router = require('express').Router(); // create a variable -> import Router Engine from express.

router.get('/hello-world', (req, res) => {
    /* 
        - The pathway noted as a string (endpoint)
        - a callback (CB) function to handle the request and response
            - req,res
    */
    res.send('Hello World');
})

router.post('/greeting', (req, res) => {
    // res.send("Good Afternoon!")
    res.status(200).send("Good Afternoon!") // status codes are a great way for us to report to the user any issues.
});

router.post('/json', (req,res) => {
    console.log(req.body);

    const {name} = req.body;
    res.status(200).send(`Hello, ${name}`)
});

router.get("*", (req,res) => {
    /* 
        - "*": accounts for a "wild card" or anything that hasn't been defined.
        - Provide a clean response back to the user.
    */
    res.status(404).send(`<img src="https://http.cat/404" alt="status code 404"/>` )
})

module.exports = router;
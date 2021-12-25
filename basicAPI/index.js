const express = require("express");
const app = express();
const port = 5000;

app.get("/", (request, response) => {
    const test = [{
        "Note": "Test1",
        "Link": "Test2",
    }, {
        "Note": "Hello2",
        "Link": "fdsa"
    }];

    response.json({
        response: test
    });

});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
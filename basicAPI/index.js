const express = require("express");
const app = express();
const port = 5000;

app.get("/notes", (request, response) => {
    const notes = [{
        text: "Make Notes Website",
        link: "https://www.youtube.com/watch?v=E8vYlkx9EQw&t=1182s&ab_channel=CodewithAhsan",
    }, {
        text: "Revise",
        link: "https://docs.google.com/spreadsheets/d/1wAEC9rGU2YHS3IA08hempMhB5xksKP4YnA8-Enok8LY/edit#gid=0"
    }];

    response.json({
        response: notes
    });

});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
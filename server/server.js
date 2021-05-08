const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
const todos = [
    {
        message: "Some stuff",
        id: 1
    },
    {
        message: "Another stuff",
        id: 2
    },
    {
        message: "Other stuff",
        id: 3
    },
];




app.listen(PORT, () => {
    console.log(`Server running on port: ${ PORT }`);
});
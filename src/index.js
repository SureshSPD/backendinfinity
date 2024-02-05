const app = require("../app");
const PORT = process.env.PORT || 5003

// Addd

const startApp = () =>{
    app.listen(PORT, () => {
        console.log(`Auth Backend Running on Port ${PORT}`);
        console.log("Backend JS Running Successfully")
    })

}

startApp()
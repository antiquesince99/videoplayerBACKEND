const express = require("express")
const app = express()
const cors = require('cors')

const port = process.env.PORT || 5000;
app.listen( port ,()=>{
    console.log(' server started successfully on PORT ' + port);
} )
const corsOptions = { origin: ['http://localhost:3000'] };

app.use(cors(corsOptions));
app.use(express.json());

const videoRouter = require('./Routers/videoRouter')
const userRouter = require('./Routers/userRouter')
const utilRouter = require('./Routers/util')
app.use('/video', videoRouter)
app.use('/Login', userRouter)
app.use('/util', utilRouter)  
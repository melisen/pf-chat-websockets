const express = require('express');
const {Router} = express;
const mensajesRouter = Router();
const {
    getMsgController,
    getGeneralMsgController,
    //postAnswerChatController
} = require("../controllers/mensajes")



mensajesRouter.get("/:email", getMsgController)

mensajesRouter.get("/", getGeneralMsgController);

//mensajesRouter.post("/", postAnswerChatController);


module.exports = mensajesRouter

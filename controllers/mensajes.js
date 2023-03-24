const logger = require("../logger/winston-logger")
//const {verUnMsg} = require("../services/mensajes")

const getMsgController = async  (req, res)=>{
  const email = req.params;
  const username = email.email;
  res.render("chat-user", {username})      
}

const getGeneralMsgController = async  (req, res)=>{
  const username = req.user.username;
  res.render("chat-general", {username})
}
/*
const postAnswerChatController = async (req, res)=>{
  const mensajeID = req.body.mensajeid;
  const respuesta = req.body.mensajerespuesta
  //const responder = await answerMsg(mensajeID, respuesta)
  //const mensaje = await verUnMsg(mensajeID)
}
*/



module.exports = { getMsgController, getGeneralMsgController}
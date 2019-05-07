// Import the appropriate service and chosen wrappers
const {
  dialogflow,
  Image,
} = require('actions-on-google')

// Create an app instance
const app = dialogflow()

// Register handlers for Dialogflow intents

app.intent('Default Welcome Intent', conv => {
  conv.ask(`Hi, What's your name?`);
})

app.intent('Get User Name', conv => {
  conv.ask(`Hi ${conv.parameters['given-name']}, What is the purpose of visit? Visitor, Contractor, Pickup or drop?`)
})

app.intent('Purpose Of Visit', conv => {
  const name = conv.contexts.get('name').parameters['given-name'];
  conv.ask(`So ${name}, you came here as/for ${conv.parameters['purpose']}. Which block you are going?`)
})

app.intent('Block Number', conv => {
  conv.ask(`Which unit in block ${conv.parameters['number']}?`)
})

app.intent('Unit Number', conv => {
  conv.ask(`Done with the registration!!!. You are good to go now.`)
})


// Intent in Dialogflow called  `Goodbye`
app.intent('Goodbye', conv => {
  conv.close('See you later!')
})

app.intent('Default Fallback Intent', conv => {
  conv.ask(`I didn't understand. Can you tell me something else?`)
})

exports.fulfillment = app
const messages = [
  "Hola",
  "Carlos",
  "Andrea",
  "Montse",
  "Yessica",
  "Denisse",
  "Valeria",
  "Monica",
  "Gilary",
  "Ramón"
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message)
}

module.exports = {randomMsg}
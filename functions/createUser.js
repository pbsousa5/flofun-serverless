const admin = require('firebase-admin')

module.exports = function(req, res) {
  if (!req.body.phone) {
    return res.status(422).send({ error: 'bad input' })
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '')

  admin.auth().createUser({ uid: phone })
    .then(user => res.send({ success: true }))
    .catch(error => res.status(422).send({ error: 'error creating user' }))
}

const db = require('../services/mysql')

const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('Enjoy the silence!')
    next()
  })

  server.get('/empresa', (req, res, next) => {
    db.empresa().all().then(empresa => {
      res.send(empresa)
      next()
    }).catch(error => {
      res.send(error)
      next()
    })
  })

  server.post('/empresa', (req, res, next) => {
    const { name, endereco } = req.params
    db.empresa().save(name, endereco).then(empresa => {
      res.send(empresa)
      next()
    }).catch(error => {
      res.send(error)
      next()
    })
  })

  server.put('/empresa', (req, res, next) => {
    const { id, name, endereco } = req.params
    db.empresa().update(id, name, endereco).then(empresa => {
      res.send(empresa)
      next()
    }).catch(error => {
      res.send(error)
      next()
    })
  })

  server.del('/empresa', (req, res, next) => {
    const { id } = req.params
    db.empresa().del(id).then(empresa => {
      res.send(empresa)
      next()
    }).catch(error => {
      res.send(error)
      next()
    })
  })
}

module.exports = routes

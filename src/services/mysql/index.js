const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'unyleya'
})

const errorHandler = (error, msg, rejectFunction) => {
  console.error(error)
  rejectFunction({ error: msg })
}

const empresaModule = require('./empresa')({ connection, errorHandler })

module.exports = {
  empresa: () => empresaModule
}

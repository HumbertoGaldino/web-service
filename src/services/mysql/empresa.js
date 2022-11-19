const empresa = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('SELECT * FROM empresa', (error, results) => {
          if (error) {
            errorHandler(error, 'Falha ao listas as empresas', reject)
            return false
          }
          resolve({ empresa: results })
        })
      })
    },
    save: (name, endereco) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('INSERT INTO empresa (nome, endereco) VALUES (? , ?)', [name, endereco], (error, results) => {
          if (error) {
            errorHandler(error, `Falha ao salvar a empresa ${name}`, reject)
            return false
          }
          resolve({ empresa: { id: results.insertId, name, endereco } })
        })
      })
    },
    update: (id, name, endereco) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('UPDATE empresa SET nome = ?, endereco = ? WHERE ID = ?', [name, endereco, id], (error, results) => {
          if (error) {
            errorHandler(error, `Falha ao atualizar a empresa ${name}`, reject)
            return false
          }
          resolve({ empresa: { id: results.insertId, name, endereco } })
        })
      })
    },
    del: (id) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('DELETE FROM empresa WHERE ID = ?', [id], (error, results) => {
          if (error) {
            errorHandler(error, `Falha ao remover a empresa de id ${id}`, reject)
            return false
          }
          resolve({ message: 'Empresa deletada com sucesso' })
        })
      })
    }
  }
}

module.exports = empresa

const Pool = require('pg').Pool
const pool = new Pool({
 host: 'ec2-54-170-190-29.eu-west-1.compute.amazonaws.com',
  database: 'd7h6gu17bk2p0o',
  user:'famyyxzuutnsgk',
  password: 'cd2c691c90b0d2f6a3727be62f9873af33232d722fe55068291076bda1b5c059',
  port: 5432,
  ssl:{rejectUnauthorized:false},
})
const getProducts = (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.database ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getProductsById = (request, response) => {
  const id = parseInt(request.params.id)
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.database WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}







module.exports = {
  getUsers,
  getUserById  
}
console.log(process.env.DB_PASS)
console.log(process.env.DB_PASSWORD)

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: false,
  },
  logging: false
}

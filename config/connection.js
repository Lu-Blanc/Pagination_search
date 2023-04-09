import { Sequelize } from "sequelize";

const db = new Sequelize ('movies','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db
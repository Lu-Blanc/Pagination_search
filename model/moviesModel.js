import { Sequelize } from "sequelize";
import db from "../config/connection.js";

const {DataTypes} = Sequelize;
const movies = db.define('movies',{
    nama: DataTypes.STRING, 
    img: DataTypes.STRING,
    year: DataTypes.STRING,
    genre: DataTypes.STRING,
    rating: DataTypes.STRING
},{
    freezeTableName: true
})

export default movies;

// (async()=>{
//     await db.sync()
// })()
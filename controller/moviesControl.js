import {Op} from 'sequelize'
import moviesModel from "../model/moviesModel.js";

export const getMovies = async (req, res)=> {
    try {
        const respon = await moviesModel.findAll();
        res.status(200).json({
            respon
        })
    } catch (error) {
        console.log(error);
    }
}

export const createMovie = async (req, res, next) => {
    try {
        const { nama, img, year, genre, rating } = req.body;
        if (!nama || !img || !year || !genre || !rating) return res.status(404).json({ meg: "Masukkan data!" });
        await moviesModel.create(req.body);
        res.status(201).json({ msg: "Created." })
    } catch (err) {
        console.log(err);
    }
};

export const cari = async (req , res) =>{
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";
    const offset = limit * page;
    const totalRows = await moviesModel.count({
        where: {
            [Op.like] : [{nama :{
                [Op.like]: '%' +search+ '%'
            }},{genre :{
                [Op.like]: '%' +search+ '%'
            }}]
        }
    })

    const totalPage = Math.ceil(totalRows / limit);
    const movies = await moviesModel.findOne({
        where: {
            [Op.or]: [{nama: {
                [Op.like]: '%'+search+'%'
            }}, {genre: {
                [Op.like]: '%'+search+'%'
            }}]
        },
        offset: offset,
        limit: limit,
        order: [
            ['id', 'DESC']
        ]
    });

    res.json({
        movies: movies,
        page: page,
        limit: limit,
        totalRows: totalRows,
        totalPage: totalPage
    })
}
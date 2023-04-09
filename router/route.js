import { Router } from "express";
import { cari, createMovie, getMovies } from "../controller/moviesControl.js";

const route = Router()

route.get('/',getMovies)
route.post('/',createMovie)
route.get('/',cari)


export default route
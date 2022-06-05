import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";
/**
* @swagger
* /api/favoris:
*   post:
*       description: Retourne les films par leur titres
*       responses:
*           200:
*               description: Hello Movies
*       parameters:
*         - in: query
*           name: movieid
*           required: true
*           type: string
*           description: Id du film
*         - in: query
*           name: userid
*           required: true
*           type: string
*           description: Id de l'utilisateur
*/

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    var { movieid } = req.query;
    var { userid } = req.query;
    var Obj = {
        movie_id: movieid,
        user_id: userid
    }
    const movies = await db.collection("favoris").insertOne(Obj);
    res.json({ status: 200, data: movies });
}
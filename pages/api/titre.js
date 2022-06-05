import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";
/**
* @swagger
* /api/titre:
*   get:
*       description: Retourne les films par leur titres
*       responses:
*           200:
*               description: Hello Movies
*       parameters:
*         - in: query
*           name: titre
*           required: true
*           allowReserved: true
*           type: string
*           description: Cherche les films par id
*/

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    var { titre } = req.query;
    const movies = await db.collection("movies").find({title:(titre) }).limit(10).toArray();
    res.json({ status: 200, data: movies });
}
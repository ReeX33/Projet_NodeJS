import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";
/**
* @swagger
* /api/genre:
*   get:
*       description: Retourne les films par leur titres
*       responses:
*           200:
*               description: Hello Movies
*       parameters:
*         - in: query
*           name: genre
*           required: true
*           type: string
*           description: Cherche les films par id
*/

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    var { genre } = req.query;
    const movies = await db.collection("movies").find({genres:(genre) }).limit(10).toArray();
    res.json({ status: 200, data: movies });
}
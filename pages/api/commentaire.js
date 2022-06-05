import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";
/**
* @swagger
* /api/commentaire:
*   post:
*       description: Retourne les films par leur titres
*       responses:
*           200:
*               description: Hello Movies
*       parameters:
*         - in: query
*           name: commentaires
*           required: true
*           type: string
*           description: Remarques
*         - in: query
*           name: movieid
*           required: true
*           type: string
*           description: Id du film
*         - in: query
*           name: userid
*           required: true
*           type: string
*           description: Nom utilisateurs
*         - in: query
*           name: emailid
*           required: true
*           type: string
*           description: Email de l'utilisateur
*
*/

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    var { commentaires } = req.query;
    var {userid}= req.query;
    var {movieid}= req.query;
    var {emailid}= req.query;
    
    var Obj ={
        name: userid,
        email:emailid,
        movie_id:movieid,
        text:commentaires,
        date:new Date
    }
    const movies = await db.collection("comments").insertOne(Obj);
    res.json({ status: 200, data: movies });
}
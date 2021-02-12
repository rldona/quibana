import { Router, Response } from "express";
import HttpStatusCodes from "http-status-codes";
import { textSpanIntersectsWith } from "typescript";

import Mongo from '../../../config/mongo';

const router: Router = Router();

router.get("/", async (req, res) => {
  try {
    const dbCollection = await Mongo.getCollection();

    let searchList:Array<Object> = [];

    const hola = dbCollection.aggregate([
      {
        $search: {
          "text": {
            "query": "matrix",
            "path": "title"
          }
        }
      },
      {
        $limit: 3
      }
    ]);

    for await (let data of hola) {
      searchList.push(data.title);
    }

    res.send(searchList);

  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});

export default router;

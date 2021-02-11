import { Router, Response } from "express";
import HttpStatusCodes from "http-status-codes";

import Mongo from '../../../config/mongo';

const router: Router = Router();

router.get("/:id", async (req, res) => {
  const movieId: number = +req.params.id;

  try {
    const dbCollection = await Mongo.getCollection();
    const document = await dbCollection.findOne({ 'index' : movieId });

    res.json(document);

  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});

export default router;

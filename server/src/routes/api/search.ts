import { Router, Response } from "express";
import HttpStatusCodes from "http-status-codes";

import Mongo from '../../../config/mongo';

const router: Router = Router();

router.get("/", async (req, res) => {
  try {
    const dbCollection = await Mongo.getCollection();
    const document = await dbCollection.findOne({ 'index' : 100000 });
    res.json(document);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});

export default router;

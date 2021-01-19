import { Router, Response } from "express";
import HttpStatusCodes from "http-status-codes";

const router: Router = Router();

router.get("/", async (req, res) => {
  try {
    res.json({ 'success': 'tv route' });
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});

export default router;
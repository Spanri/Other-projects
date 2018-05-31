"use strict";
import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    name: "Catanri",
    madeBy: "Spanri"
  });
});

export default router;
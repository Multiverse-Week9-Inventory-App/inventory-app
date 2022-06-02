const express = require("express");
const { Items } = require("../../public/react/components/Items");
const router = express.Router();
const { Item } = require("../models");

// Get a single item by ID
router.get("/:id", async (req, res, next) => {
  const item = await Item.findByPk(req.params.id);
  res.send(item);
});

// GET /item -- get all items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async(req, res, next) => {
  try {
    const items = await Item.destroy({
      where: {
        id: req.params.id
      }
    });

    const updatedItem = await Item.findAll();
    res.send(updatedItem);

  } catch (error) {
    next(error);
  }
});

module.exports = router;

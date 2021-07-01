const express = require("express");
const authRouter = express.Router();
const User = require("../models/user");

// Get All
authRouter.get("/", (req, res, next) => {
  User.find((err, allUsers) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(allUsers);
  });
});

// Get One
authRouter.get("/:userId", (req, res, next) => {
  User.findOne((err, oneUser) => {
    if (err) {
      res.send(500);
      return next(err);
    }
    return res(200).send(oneUser);
  });
});

// Post One
authRouter.post("/", (req, res, next) => {
  const newUser = new Auth(req.body);
  newUser.save((err, savedUser) => {
    if (err) {
      res.send(500);
      return next(err);
    }
    return res.status(201).send(savedUser);
  });
});

// Update One
authRouter.put("/:userId", (req, res, next) => {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true },
    (err, updatedUser) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedUser);
    }
  );
});

// Delete One:
authRouter.delete("/:userId", (req, res, next) => {
  User.findOneAndDelete({ _id: req.params.userId }, (err, deletedUser) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return status(200).send(
      `${deletedUser.username} Was successfully deleted from the database.`
    );
  });
});

module.exports = authRouter;

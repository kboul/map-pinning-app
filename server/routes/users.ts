import router, { Request, Response } from "express";
import bcrypt from "bcrypt";

import User from "../models/user";

const appRouter = router.Router();

// register
appRouter.post("/register", async (req: Request, res: Response) => {
  try {
    // generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });

    // save user and respond
    const user = await newUser.save();
    res.status(201).json({ userId: user._id });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong, please try again." });
  }
});

// login
appRouter.post("/login", async (req: Request, res: Response) => {
  try {
    // find user
    const user = await User.findOne({ username: req.body.username });
    if (!user) res.status(400).json({ message: "This user does not seem to exist." });

      if(user) {
        // validate password
        const validPassword = await bcrypt.compare(
          req.body.password,
          user.password
        );
        !validPassword &&
          res.status(400).json({ message: "Wrong username or password" });

        res.status(200).send({ _id: user._id, username: user.username });
      }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong, please try again." });
  }
});

export default appRouter;

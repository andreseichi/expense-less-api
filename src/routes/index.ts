import { Request, Response, Router } from "express";

import { authRouter } from "./auth.routes";

const router = Router();

router.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Hello World" });
});

router.use(authRouter);

export default router;

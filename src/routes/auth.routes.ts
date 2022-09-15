import { Router } from "express";
import { signin, signup } from "../controllers/authControllers";
import { validateSchema } from "../middlewares/schemaMiddleware";
import { signInSchema, signUpSchema } from "../schemas/authSchema";

const authRouter = Router();

authRouter.post("/signup", validateSchema(signUpSchema), signup);
authRouter.post("/signin", validateSchema(signInSchema), signin);

export { authRouter };

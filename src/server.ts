import dotenv from "dotenv";
dotenv.config();

import app from "./app";

const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, () => {
  console.log("server running on PORT " + PORT);
});

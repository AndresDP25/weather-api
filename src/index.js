import express from "express";
import { PORT, PATH } from "./config/config.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { options } from "./loaders/swagger/swagger.js";
import { LoggerInstance } from "./loaders/logger/index.js";
import morgan from "morgan";
import weather from "./routes/weather.js";
import cities from "./routes/cities.js";
import status from "./routes/status.js";
import { errorMiddleware } from "./middleware/error.js";

const app = express();

// app.use(cors());
app.use(express.json());
//para capturar datos de formularios,está en false porque no vamos a recibir img
app.use(express.urlencoded({ extended: false }));
//Registrador de solicitudes
app.use(morgan("dev"));

const spec = swaggerJsDoc(options);
app.use(PATH, swaggerUi.serve, swaggerUi.setup(spec));

app.use("/weather", weather);
app.use("/cities", cities);
app.use("/status", status);

//midlewares de errores
app.use(errorMiddleware);

//midlewares de errores
// app.use((req, res, next) => {
//   const err = new Error("Not Found");
//   err.code = 404;
//   next(err);
// });
// app.use((err, req, res, next) => {
//   const code = err.code || 500;
//   logger.error(`${code} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
//   logger.errr(err.stack);
//   res.status(code);
//   const body = {
//     error: {
//       code,
//       message: err.message,
//     },
//   };
//   res.json(body);
// });

app.listen(PORT, () => {
  LoggerInstance.info(`Server UP running in http://localhost:${PORT}/`);
});

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_NAME = process.env.DB_NAME || "disney_alkemy";
export const DB_PORT = process.env.DB_PORT || 3306;

//Log
export const LOG_LEVEL = "silly";
//SWAGGER
export const PATH = "/docs";
//auth
export const AUTH_SECRET = process.env.AUTH_SECRET || "s3cret";
export const AUTH_TTL = process.env.AUTH_TTL || "1d";
//Mapbox
export const MAPBOX_API_KEY = `pk.eyJ1IjoiYW5kaTE5ODkiLCJhIjoiY2w5a2Jyc2N2MHRzaDN2cGNnazBucnU0YiJ9.KC-JFLBEnecGihVDEQAiJQ`;
//Open weather map
export const OPENWEATHERMAP_API_KEY = `195fd8b7c47c3dc3321c630782a7ae89`;

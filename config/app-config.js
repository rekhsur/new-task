const APP_CONFIG ={
    PORT:process.env.PORT||5400,
    JWT_ADMIN:process.env.JWT_SECRET_KEY_ADMIN,
    DB_URL:process.env.DB_URL
}
module.exports = APP_CONFIG
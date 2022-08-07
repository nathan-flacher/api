require('dotenv').config();
const port = process.env.PORT;

if (port) {
    require("./app");
    require("./routes");
} else {
    const logger = require("./utils/logger");
    logger.error("port environment variable was not found");
}

import http from "http";
import { PORT } from "./utils/env.js";

const requestLogger = (req, res, next) => {
    const { method, url, headers } = req;
    const start = Date.now();

    res.on("finish", () => {
        const duration = Date.now() - start;
        const { statusCode } = res;
        console.info(
            `[${new Date().toISOString()}] ${method} ${url} ${statusCode} ${duration}ms - ${
                headers["user-agent"]
            }`
        );
    });

    next();
};

const requestHandler = (req, res) => {
    requestLogger(req, res, () => {
        res.writeHead(200);
        res.end("Hello traveler ! 🧙‍♂️");
    });
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.info(
        `Serveur listening on port http://localhost:${PORT} 🧙‍♂✨️💎`
    );
});

import { createReadStream } from "fs";
import http from "http";

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write(`
            <a href="/flower">Flower</a>
            <a href="/animal">Animal</a>
                `);
        res.end();
    }
    else if (req.url === "/flower") {
        res.setHeader("Content-Type", "text/html");
       const stream = createReadStream('flower.html', { encoding: "utf-8" });
       stream.pipe(res);
    }
    else if (req.url === "/animal") {
        res.setHeader("Content-Type", "text/html");
        const stream = createReadStream('animal.html', { encoding: "utf-8" });
        stream.pipe(res);
    }
    else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(3334, () => console.log("prg3 is running at 3334..."));

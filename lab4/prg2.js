import http from "http";

const server = http.createServer((req, res) => {
  res.write("<h1>hieee Akanksha Prajapati</h1>");
  
  res.end();
});
server.listen(4444, () => console.log("Server is running at 4444..."));
// const http = require("http");

// http
//   .createServer((request, response) => {
//     console.log("success");
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.end("hello world!\n");
//   })
//   .listen(8000);
const Koa = require("koa");
const Router = require("koa-router");
const router = new Router();
const app = new Koa();

router.get("/", async (ctx, next) => {
  console.log("GET /");
  let name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.post("/", async (ctx, next) => {
  console.log("POST /");
  ctx.response.body = `<h1>SUCECESS</h1>`;
});

app.use(router.routes());
app.listen(8000);

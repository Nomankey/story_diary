const server = require("./server_practice");
const router = require("./router");
const requestHandlers = require("./requestHandlers");

const handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
server.start(router.route, handle);
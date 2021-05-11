const express = require('express');
const fs = require('fs'); //file system


const app = express();

app.get('/video', (req, res) => {
    const range = req.header.range;
    const videoPath = '';
    const videoSize = fs.statSync(videoPath).size;

    const dataSize = 1 * 1e+6;
    const start = Number(range.replace(/\D/g, ''));
    const end = Math.min(start + dataSize, videoSize - 1);

    const contentLength = end - start + 1;

    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Range": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4"
    };
    res.writeHead(206, headers);

    const stream = fs.createReadStream(videoPath, { start, end })
    stream.pipe(res)

});

app.listen('4000');
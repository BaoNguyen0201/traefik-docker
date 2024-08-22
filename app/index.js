const http = require('http');
const os = require('os');

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/health') {
        // Health check endpoint
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ status: 'UP' }));
    } else if (req.url === '/info') {
        // Host information endpoint
        const hostInfo = {
            hostname: os.hostname(),
            platform: os.platform(),
            architecture: os.arch(),
            cpus: os.cpus().length,
            memory: {
                total: os.totalmem(),
                free: os.freemem(),
            },
            uptime: os.uptime(),
            networkInterfaces: os.networkInterfaces(),
        };

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(hostInfo, null, 2));
    } else if (req.url=='/') {
        // Default response
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World test docker rollout with health check!\n');
    }
});

// The server listens on port 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});


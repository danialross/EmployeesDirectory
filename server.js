const http = require("http");

const hostname = "127.0.0.1";
const port = 3001;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Allow requests from this origin
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  ); // Allow specified methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allow specified headers

  if (req.method === "GET" && req.url === "/api/data") {
    const people = [
      {
        name: "Alice",
        title: "Software Developer",
        img: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg",
        index: 0,
      },
      {
        name: "Bob",
        title: "Graphic Designer",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
        index: 1,
      },
      {
        name: "Frank",
        title: "Data Analyst",
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        index: 2,
      },
      {
        name: "Susan",
        title: "Product Manager",
        img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        index: 3,
      },
      {
        name: "Eva",
        title: "Web Developer",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        index: 4,
      },
      {
        name: "Charlie",
        title: "UI/UX Designer",
        img: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg",
        index: 5,
      },
      {
        name: "Grace",
        title: "Marketing Specialist",
        img: "https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg",
        index: 6,
      },
      {
        name: "Henry",
        title: "System Administrator",
        img: "https://images.pexels.com/photos/3799786/pexels-photo-3799786.jpeg",
        index: 7,
      },
      {
        name: "Irene",
        title: "Content Writer",
        img: "https://images.pexels.com/photos/2083751/pexels-photo-2083751.jpeg",
        index: 8,
      },
      {
        name: "Lynn",
        title: "Data Analyst",
        img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg",
        index: 9,
      },
      {
        name: "Perry",
        title: "CFO",
        img: "https://images.pexels.com/photos/4120661/pexels-photo-4120661.jpeg",
        index: 10,
      },
      {
        name: "Gerome",
        title: "Technical Support",
        img: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg",
        index: 11,
      },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(people));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

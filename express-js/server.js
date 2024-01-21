const http = require("http"); //http is a built-in module in Node JS. we don't need to install it.

//server to listen to the request and respond to it with a callback function that takes in two parameters

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  console.log("user hit the server");
  res.end("home page");
});

server.listen(8080); //invoke the listen method on the server object and pass in the port number as an argument

//if we think about telephone hotline, we have different numbers for different things. Like 20
// 21     File Transfer Protocol (FTP) Command Control
// 22     Secure Shell (SSH) Secure Login
// 23     Telnet - Remote login service, unencrypted text messages
// 25     Simple Mail Transfer Protocol (SMTP) - Email delivery
// 53     Domain Name System (DNS) - Service
// 67, 68 Dynamic Host Configuration Protocol (DHCP)
// 80     Hypertext Transfer Protocol (HTTP) - Used in the World Wide Web
// 110    Post Office Protocol (POP3)
// 119    Network News Transfer Protocol (NNTP)
// 123    Network Time Protocol (NTP)
// 143    Internet Message Access Protocol (IMAP) - Management of digital mail
// 161    Simple Network Management Protocol (SNMP)
// 194    Internet Relay Chat (IRC)
// 443    HTTP Secure (HTTPS) - HTTP over TLS/SSL
// 546, 547 DHCPv6 - IPv6 version of DHCP

//Same like that,in here we used 8080 as a port number.

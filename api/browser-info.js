
// IP address, language and operating system for my browser

module.exports = function(req) {
  
  console.log(req.headers);
  
  var userAgent = req.headers["user-agent"];
  var acceptLanguage = req.headers["accept-language"];
  var xForwardedFor = req.headers["x-forwarded-for"];
  
  var system = userAgent.split(/[\(\)]/)[1];
  var language = acceptLanguage.split(/[;,]/)[0];
  var ip = xForwardedFor.split(/,/)[0];
  
  return { "ipAddress": ip, "language": language, "system": system };
  
}

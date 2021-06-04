const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy([
            "/users/register",
            "/users/login", 
            "/agencies",
            "/campaigns",
            "campaignsByFilter",
            "/campaigns",
            "/clients",
            "/clientsByProduct",
            "/clientsByAgency",
            "/lineItems",
            "/lineItemsByVendor",
            "/lineItemsByProduct",
            "/products",
            "/productsByClient",
            "/productsByAgency",
            "/vendors",
            "/vendorsByLineItem",
            "/vendorsByProduct"
          ], // dev { target: "http://localhost:5000" })
             { target: "https://api.casualprecision.com" })
  );
};
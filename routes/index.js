var express = require('express');
var router = express.Router();
var manufacturers = [
  {
    id: 1,
    name: "Nike",
    imageUrl: "/images/manufacturer_1.png",
    description: "Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. The company is headquartered near Beaverton, Oregon, in the Portland metropolitan area.",
  },
  {
    id: 2,
    name: "Adidas",
    imageUrl: "/images/manufacturer_2.jpg",
    description: "Adidas AG is a German multinational corporation, founded and headquartered in Herzogenaurach, Bavaria, that designs and manufactures shoes, clothing and accessories. It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike.",
  },
  
];

var products = [
  {
    id: 1,
    name: "Air More Uptempo '96: Thank You, Wilson",
    price: 175.00,
    imageUrl: "/images/product_1.jpg",
    description: "Be the star of your own sci-fi. This reimagining of the Air More Uptempo '96 celebrates Wilson Smith III—the first Black designer in the footwear industry—and his love of space age TV. Stepping into the otherworldly sunset of a futuristic city, the gradient upper carries you to the far reaches of time while the oversized graffiti-styled graphics bring a starlit shimmer with their reflective accents. Ready for lift-off? The tongue label insignia (repping Smith's initials and start date at Nike) is your ticket to launch.\n\nAnd speaking of launch: Smith's career has been a highlight reel of lifting others up. Defined by his passion around coaching, teaching, and giving back, his trailblazing efforts are captured by the quote on the insole: '...in humility count others more significant than yourselves.' From designing and developing products for some of Nike's greatest athletes to leading the way for Black designers, Smith has paved the way with his larger-than-life personality and positivity. Recalling one of his early Uptempo prototypes (check out the mesh upper), this shoe honors his journey and bold style.\n\nSo open the shoebox (decorated with one of Smith's original space drawings) and transport yourself into another world—where everything feels a little more Uptempo. Thank you, Wilson!",
    manufacturerId: 1,
  },
  {
    id: 2,
    name: "Air Force 1 Mid '07 LX: Pale Ivory and Shimmer",
    price: 140.00,
    imageUrl: "/images/product_2.jpg",
    description: "Not much is known about the Before Force (BF) era, but the Air Force 1 Mid '07 LX delivers a lesson in After Force history. Highlighted by a removable timeline on the tongue that lists each coveted drop from year 1 on, this anniversary edition pays tribute to the chronology of performance-to-street fashion. Embroidered accents on the the left heel and playful graphics on the right (repeated on the insole) nod to the genesis of the hoops original, while a combination of premium leather, canvas, and flashes of cork make it a truly commemorative look. Whether it's your first pair or just the latest in your collection, we've got you covered straight out of the box.",
    manufacturerId: 1,
  },
  {
    id: 3,
    name: "AJKO 1: White and Black",
    price: 150.00,
    imageUrl: "/images/product_3.jpg",
    description: "Turn heads in the AJKO 1. Without giving away any design secrets (we like a little mystery), it repackages MJ's first icon using a mix of synthetic leather and canvas. With a decidedly relaxed look, fresh Black and White color theme, and connection to the '85 original, these kicks will earn nods of approval from longtime fans and brand new sneakerheads alike.",
    manufacturerId: 1,
  },
  {
    id: 4,  
    name: "NMD_R1 V2 SHOES",  
    price: 150.00,
    imageUrl: "/images/product_4.jpg",
    description: "PROGRESSIVE SHOES WITH RESPONSIVE CUSHIONING.\n\nWhy wait to see what the future holds? Gear up in these adidas shoes and create your own destiny. Sleek, stylish and packed with comfort, they're your go-to shoes for making moves and taking action. After all, they're based on '80s running shoes and infused with running technology from the present. BOOST cushioning returns to every step, so you can walk towards your future with confidence.",
    manufacturerId: 2,
  },
  {
    id: 5,
    name: "SAMBA OG SHOES",
    price: 100.00,
    imageUrl: "/images/product_5.jpg",
    description: "THE ICONIC SOCCER SHOE RETURNS, SERVING UP CLASSIC DAILY STYLE.\n\nThe year was 1950, and the adidas Samba shoes had just stepped out on the world stage. The pitch would never be the same. Soccer players were the first to fall under its spell, using the grippy sole to train in icy weather. Next up, skaters co-opted the design and took it to their decks. With smooth leather, 3-Stripes and that recognizable rubber sole, this authentic pair is bringing back the heritage for a new generation of creators.",
    manufacturerId: 2,
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect(302, "products");
});

/* GET products listing page. */
router.get("/products", function (req, res, next) {
  res.render("products", {
    title: "Product Listing",
    description: "This page shows a list of products.",
    products:products,
  });
});
  
/* GET product page. */
router.get("/products/:id", function (req, res, next) {
  // Fill in the code: get the parameter
  var requestedId =req.params.id;

  // Get the requested product from the product list filtered by requestedId
  var requestedProduct = products.filter(function (product) {
  return product.id == requestedId;
  });

  // Check if the requested product id exist
  if (requestedProduct.length > 0) {
  res.render("product", {
  title: "Product Page",
  product: requestedProduct[0],
  description: "This page shows the details of a product",
  });
  } else {
  // 404 Product not found
  res.status(404).send("Product not found");
  }
  });
  
/* GET manufacturer listing page. */
router.get("/manufacturers", function (req, res, next) {
  res.render("manufacturers", {
    title: "Manufacturer Page",
    description: "This page shows a list of manufacturers.",
    manufacturers: manufacturers,
  });
});

/* GET manufacturer page. */
router.get("/manufacturers/:id", function (req, res, next) {
  // Fill in the code: get the parameter
  // Assign requestedId depend on the parameter id
  var requestedId =req.params.id;
  // Get the requested manufacturer from the manufacturer list filtered by requestedId
  var requestedManufacturer = manufacturers.filter(function (manufacturer) {
  return manufacturer.id == requestedId;
  });

  // Get the requested productByManufacturer from the product list filtered by requestedId
  var productByManufacturer =products.filter(products=>products.manufacturerId==requestedId)

  // Check if the requested manufacturer id exist
  res.render("manufacturer", {
  title: "Manufacturer Page",
  manufacturer: requestedManufacturer[0],
  description: "This page shows a list of products from this manufacturer.",
  product: productByManufacturer,
  });
  });

module.exports = router;

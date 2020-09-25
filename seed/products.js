const db = require("../db/connection");
const Product = require("../models/product");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const products = [
    {
      name: "Product 001",
      imgURL:
        "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      imgURL2:
        "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      imgURL3:
        "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "130",
      rating: 3,
    },
    {
      name: "Shoe Name Here",
      imgURL:
        "https://cdn.shopify.com/s/files/1/0026/8170/0401/products/JE4266YS-2.jpg?v=1583826208",
      imgURL2:
        "https://cdn.shopify.com/s/files/1/0026/8170/0401/products/JE4266YS-2.jpg?v=1583826208",
      imgURL3:
        "https://cdn.shopify.com/s/files/1/0026/8170/0401/products/JE4266YS-2.jpg?v=1583826208",
      description:
        "https://vicsrack.com/products/vicsrack-women-shining-rhinestone-slip-on-loafers-sneakers-with-cute-bowknot?utm_medium=cpc&utm_source=google&utm_campaign=Google%20Shopping&gclid=EAIaIQobChMIg_WX1KqE7AIVDI7ICh1crAIZEAQYAyABEgJL1fD_BwE&variant=31680040927281",
      price: "30",
      rating: 2,
    },
    {
      name: "Update This Later",
      imgURL:
        "https://n.nordstrommedia.com/id/sr3/7a9cc6b4-6d9b-43f5-b254-a5cafcecb6d4.webp?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
      imgURL2:
        "https://n.nordstrommedia.com/id/sr3/7a9cc6b4-6d9b-43f5-b254-a5cafcecb6d4.webp?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
      imgURL3:
        "https://n.nordstrommedia.com/id/sr3/7a9cc6b4-6d9b-43f5-b254-a5cafcecb6d4.webp?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
      description:
        "https://www.nordstrom.com/s/vans-old-skool-glitter-stacked-platform-sneaker-women/5504979",
      price: "45",
      rating: 4,
    },
    {
      name: "Stuff And Things",
      imgURL:
        "https://preview.redd.it/fvw4t2n4fzq11.jpg?width=640&crop=smart&auto=webp&s=e069bc8f1df5e56ae6b71f5db533165d1e60f435",
      imgURL2:
        "https://preview.redd.it/fvw4t2n4fzq11.jpg?width=640&crop=smart&auto=webp&s=e069bc8f1df5e56ae6b71f5db533165d1e60f435",
      imgURL3:
        "https://preview.redd.it/fvw4t2n4fzq11.jpg?width=640&crop=smart&auto=webp&s=e069bc8f1df5e56ae6b71f5db533165d1e60f435",
      description: "Use postman.",
      price: "Over Nine Thousand",
      rating: 5,
    },
  ];
  await Product.insertMany(products);
  console.log("Created products!");
};
const run = async () => {
  await main();
  db.close();
};

run();

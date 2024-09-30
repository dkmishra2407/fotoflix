const express = require("express");
const { v4: uuid } = require("uuid");
const app = express();

app.use(express.json());

let PRODUCT_DATA = [
    {
        id: uuid(),
        name: "Apple Watch",
        image: "image Url 1"
    },
    {
        id: uuid(),
        name: "MacBook Air",
        image: "image Url 2"
    },
    {
        id: uuid(),
        name: "iPhone 15",
        image: "image Url 3"
    },
    {
        id: uuid(),
        name: "Apple Watch",
        image: "image Url 4"
    }
];

app.get("/product", (req, res) => {
    res.json(PRODUCT_DATA);
});

app.post("/product", (req, res) => {
    const { name, image } = req.body;
    const newProduct = { id: uuid(), name, image };
    PRODUCT_DATA.push(newProduct);
    res.json({ message: 'Product is created successfully' });
});

app.get("/product/:productid", (req, res) => {
    const { productid } = req.params;
    const product = PRODUCT_DATA.find(product => product.id === productid);
    if (!product) {
        return res.status(404).json({ error: "Product Not Found" });
    }
    res.json(product);
});

app.patch("/product/:productid", (req, res) => {
    const { name, image } = req.body;
    const { productid } = req.params;
    const product = PRODUCT_DATA.find(product => product.id === productid);
    if (!product) {
        return res.status(404).json({ error: "Product Not Found" });
    }
    product.name = name;
    product.image = image;

    res.json({ message: 'Product is Patched successfully' });
});

app.delete("/product/:productid", (req, res) => {
    const { productid } = req.params;
    PRODUCT_DATA = PRODUCT_DATA.filter(product => product.id !== productid);

    res.json({ message: "Product is deleted successfully" });
});

app.listen(3000, () => {
    console.log("SERVER IS STARTED ON PORT 3000");
});

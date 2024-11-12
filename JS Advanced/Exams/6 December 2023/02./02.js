class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {
        // Check if the product already exists in productStock
        let existingProduct = this.productStock.find(product => product.productName === productName && product.size === size);

        if (existingProduct) {
            // Add quantity to existing product
            existingProduct.quantity += quantity;
            return `You added ${quantity} more pieces of product ${productName} size ${size}`;
        } else {
            // Add new product to productStock
            const newProduct = { productName, size, quantity, price };
            this.productStock.push(newProduct);
            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        }
    }

    sendProduct(productName, size) {
        // Find the product in productStock and remove it
        for (let i = 0; i < this.productStock.length; i++) {
            if (this.productStock[i].productName === productName && this.productStock[i].size === size) {
                this.productStock.splice(i, 1);
                return `The product ${productName}, size ${size} was successfully removed from the inventory`;
            }
        }

        // If product not found, throw an error
        throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
    }

    findProductsBySize(size) {
        // Find all products that match the specified size
        const matchingProducts = this.productStock.filter(product => product.size === size);

        if (matchingProducts.length === 0) {
            return "There are no products available in that size";
        } else {
            // Format the output as specified
            const productInfo = matchingProducts.map(product => `${product.productName}-${product.quantity} pieces`).join(", ");
            return productInfo;
        }
    }

    listProducts() {
        if (this.productStock.length === 0) {
            return `${this.storehouse} storehouse is empty`;
        } else {
            // Sort products by productName in alphabetical order
            const sortedProducts = this.productStock.sort((a, b) => a.productName.localeCompare(b.productName));
            let result = `${this.storehouse} storehouse in ${this.location} available products:\n`;

            // Generate information for each product
            sortedProducts.forEach(product => {
                result += `${product.productName}/Size:${product.size}/Quantity:${product.quantity}/Price:${product.price}$\n`;
            });

            return result.trim(); // Remove trailing newline
        }
    }
}

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());



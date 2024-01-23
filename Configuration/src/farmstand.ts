interface Product1 {
    price: number,
    name: string,
    quantity: number
}

const printProduct = (product: Product1): void => {
    console.log(product.name);
    
}
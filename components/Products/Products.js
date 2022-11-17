class Products {
    render(){
        let htmlCatalog = '';
        Catalog.forEach(({id, name, price, img}) => {
            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img class="products-element__img" src="${img}" alt="${name}" />
                    <span class="products-element__price">$${price.toLocaleString()} USD</span>
                    <button class="products-element__btn">ADD TO CARD</button>
                </li>
            `
        });

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;
        ROOT_PRODUCTS.innerHTML = html;
    }
}

const product = new Products();
product.render();
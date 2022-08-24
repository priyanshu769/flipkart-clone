export const sortProductsByPrice = (products, sortType) => {
    if (sortType === 'low to high') {
        const sortedProducts = products.sort((product1, product2) => product1.price - product2.price)
        return sortedProducts
    } else if (sortType === 'high to low') {
        const sortedProducts = products.sort((product1, product2) => product2.price - product1.price)
        return sortedProducts
    } else {
        return products
    }
}

export const filterByIdealFor = (products, idealFor) => {
    if (idealFor) {
        const filteredProducts = products.filter(product => product.idealFor.includes(idealFor))
        return filteredProducts
    } else return products
}

export const filterByBrand = (products, brandsFilter) => {
    if (brandsFilter.length > 0) {
        const selectedBrandsProduct = []
        const filterProductsByBrand = (products, brand) => {
            return products.filter(product => product.brand === brand)
        }
        brandsFilter.forEach(brandName => {
            const oneBrandProducts = filterProductsByBrand(products, brandName)
            oneBrandProducts.forEach(product => selectedBrandsProduct.push(product))
        })
        return selectedBrandsProduct
    } else return products
}

export const filterBySize = (products, size) => {
    if(size){
        const filteredBySize = products.filter(product => product.sizes.includes(size.toLowerCase()))
        return filteredBySize
    } else return products
}

export const addRemoveBrandFromFilter = (brandsFilter, productBrand, setBrandsFilter) => {
    if (brandsFilter.includes(productBrand)) {
        const restBrands = brandsFilter.filter(brand => brand !== productBrand)
        setBrandsFilter(restBrands)
    } else {
        setBrandsFilter(brandsFilter => [...brandsFilter, productBrand])
    }
}

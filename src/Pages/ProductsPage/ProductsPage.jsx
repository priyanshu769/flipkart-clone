import { useState } from 'react'
import './ProductsPage.css'
import { ProductCard, BrandFilterSelector, SortButton } from '../../Components'
import { products, sortProductsByPrice, filterByIdealFor, addRemoveBrandFromFilter, filterByBrand, filterBySize } from '../../Utils'

export const ProductsPage = () => {
    const [sortType, setSortType] = useState(null)
    const [idealFor, setIdealFor] = useState(null)
    const [brandsFilter, setBrandsFilter] = useState([])
    const [sizeFilter, setSizeFilter] = useState(null)
    const allSizes = ['S', 'M', 'L', 'XL']
    const productsToDisplay = sortProductsByPrice(filterByIdealFor(filterByBrand(filterBySize(products, sizeFilter), brandsFilter), idealFor), sortType)
    const clearBtnHandler = () => {
        setSortType(null)
        setIdealFor(null)
        setBrandsFilter([])
        setSizeFilter(null)
    }
    return (
        <div className='sortAndProductsContainer'>
            <div className='sortFiltersContainer'>
                <h2>Sort and Filters</h2>
                <SortButton
                    btnName='Clear All'
                    onClick={clearBtnHandler}
                />
                <div className='priceSort'>
                    <h3>Sort by Price</h3>
                    <SortButton
                        btnName='Price: Low to High'
                        onClick={() => setSortType('low to high')}
                    />
                    <SortButton
                        btnName='Price: High to Low'
                        onClick={() => setSortType('high to low')}
                    />
                </div>
                <div className='filterByIdealForContainer'>
                    <h3>Ideal For</h3>
                    <label>
                        <input
                            type='radio'
                            checked={idealFor === 'men'}
                            onChange={() => setIdealFor('men')}
                        /> Men
                    </label>
                    <label>
                        <input
                            type='radio'
                            checked={idealFor === 'women'}
                            onChange={() => setIdealFor('women')}
                        /> Women
                    </label>
                </div>
                <div className='brandsFilterContainer'>
                    <h3>Filter by Brand</h3>
                    {products.map(product => {
                        return (
                            <BrandFilterSelector
                                key={product.id}
                                checked={brandsFilter.includes(product.brand)}
                                onChange={() => addRemoveBrandFromFilter(brandsFilter, product.brand, setBrandsFilter)}
                                brand={product.brand}
                            />)
                    })}
                </div>
                <div className='sizeFilterContainer'>
                    <h3>Filter by Size</h3>
                    {allSizes.map(size => {
                        return (<label>
                            <input
                                type='radio'
                                checked={sizeFilter === size}
                                onChange={() => setSizeFilter(size)}
                            />{size}
                        </label>)
                    })}
                </div>
            </div>
            <div className='productsContainer'>
                {productsToDisplay.map(product => {
                    return (
                        <ProductCard
                            key={product.id}
                            productImg={product.productImg}
                            productName={product.name}
                            productBrandName={product.brand}
                            prodcutPrice={product.price}
                        />
                    )
                })}
            </div>
        </div >
    )
}

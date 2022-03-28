import styled from 'styled-components'
import "./ProductCard.css"
import COLORS from '../../data/brand-color-lib.json'

const CardWrapper = styled.div`
    padding-top: 8px;
    text-align: center;
    display: table;
`

const ProductCard = ({ prod }) => {
// {
//     "brand": "Swanson Premium",
//     "productName": "Zinc Picolinate - Body Preferred Form",
//     "measurementDetails": "22 mg 60 Caps",
//     "price": 2.59,
//     "bogo": false,
//     "starRating": 5,
//     "numofRatings": 95,
//     "productImage": "./images/SW1113.webp"
// }
    console.log(prod)

    const {
        brand,
        productName,
        measurementDetails,
        price,
        bogo,
        starRating,
        numOfRatings,
        productImage
    } = prod

    return (
        <CardWrapper>
            {/* <div className="product-card"> */}
                <img
                    src={productImage}
                    alt={brand + " - " + productName}
                />
                <div
                    className="product-star-rating"
                >
                    ★★★★★
                    <span
                        className="num-of-ratings"
                    >({numOfRatings})</span>
                </div>
                <div>{brand}</div>
                <div
                    className="product-name"
                >{productName}</div>
                <div
                    className="measurement"
                >
                    {measurementDetails}
                </div>
                {bogo ? 
                    <div
                        className="price"
                        style={{color: COLORS["eggplant"]}}
                    >
                        2 for ${price.toFixed(2)}
                    </div>
                :
                    <div
                        className="price"
                    >
                        ${price.toFixed(2)}
                    </div>
                }
        </CardWrapper>
    )
}

export default ProductCard
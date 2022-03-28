import styled from 'styled-components'
import "./ProductCard.css"
import COLORS from '../../data/brand-color-lib.json'
import Button from '../Button'

const CardWrapper = styled.div`
    padding-top: 8px;
    text-align: center;
    display: table;
`

const ProductCard = ({ prod }) => {

    const {
        brand,
        productName,
        measurementDetails,
        price,
        bogo,
        numOfRatings,
        productImage
    } = prod

    return (
        <CardWrapper>
                {bogo ? <div className="bogo-label">BOGO</div> : null}
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
                <Button
                    path=""
                    bgColor={COLORS["orange"]}
                    text="add to cart"
                    textColor="white"
                    xAxis={30}
                    yAxis={10}
                    fontWeight={900}
                />
        </CardWrapper>
    )
}

export default ProductCard
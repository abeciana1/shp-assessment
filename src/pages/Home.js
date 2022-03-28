import Products from '../data/product-data.json'

import PageHero from '../components/PageHero'
import PageLayout from '../components/Layouts/PageLayout'
import GridLayout from '../components/Layouts/GridLayout'
import SubSectionHeader from '../components/SubSectionHeader'
import ProductCard from '../components/ProductCard'

const Home = () => {
    return (
        <PageLayout>
            <PageHero />
            <GridLayout
                col={3}
                gap={20}
            >
                <img
                    src="./images/HP_Antidotes.webp"
                    alt="Antidotes for everyday life"
                    className="promo-img"
                />
                <img
                    src="./images/HP_On_Sale.webp"
                    alt="Products on sale"
                    className="promo-img"
                />
                <img
                    src="./images/HP_Personalized.webp"
                    alt="Personalized solutions"
                    className="promo-img"
                />
            </GridLayout>
            <SubSectionHeader
                text="You May Like"
                textColor="green"
                lineColor="lightGreen"
            />
            <GridLayout
                col={5}
                gap={40}
            >
                {Products.map(prod => {
                    return <ProductCard key={prod.id} prod={prod} />
                })}
            </GridLayout>
        </PageLayout>
    )
}

export default Home
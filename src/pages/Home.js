import PageHero from '../components/PageHero/PageHero'
import PageLayout from '../components/Layouts/PageLayout/PageLayout'
import GridLayout from '../components/Layouts/GridLayout/GridLayout'

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
        </PageLayout>
    )
}

export default Home
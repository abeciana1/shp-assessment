import styled from 'styled-components'

const PageHeroWrapper = styled.section`
    width: 100%;
`

const PageHero = () => {

    return (
        <PageHeroWrapper>
            <img
                src="/images/Hero.webp"
                alt=""
            />
        </PageHeroWrapper>
    )
}

export default PageHero
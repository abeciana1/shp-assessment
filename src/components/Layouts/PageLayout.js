import styled from 'styled-components'

const LayoutWrapper = styled.section`
    max-width: 1440px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
`

const PageLayout = ({children}) => {

    return (
    <LayoutWrapper>
        {children}
    </LayoutWrapper>
    ) 
}

export default PageLayout
import styled from 'styled-components'

const GridWrapper = styled.section`
    
`

const GridLayout = ({ children }) => {

    return (
        <GridWrapper>
            {children}
        </GridWrapper>
    )
}

export default GridLayout
import styled from 'styled-components'

const GridWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(${props => props.col}, minmax(0, 1fr));
    align-items: stretch;
    grid-row: auto;
    gap: ${props => props.gap}px;
    margin-top: ${props => props.gap}px;
    margin-bottom: ${props => props.gap}px;
`

const GridLayout = (props) => {

    return (
        <GridWrapper
            col={props.col}
            gap={props.gap}
        >
            {props.children}
        </GridWrapper>
    )
}

export default GridLayout
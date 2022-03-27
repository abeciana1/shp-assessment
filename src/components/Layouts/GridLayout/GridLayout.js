import styled from 'styled-components'

const GridWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(${props => props.col}, minmax(0, 1fr));
    align-items: stretch;
    grid-row: auto;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
`

const GridLayout = (props) => {
    console.log(props)

    return (
        <GridWrapper col={props.col}>
            {props.children}
        </GridWrapper>
    )
}

export default GridLayout
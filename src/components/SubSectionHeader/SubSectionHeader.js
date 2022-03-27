import styled from 'styled-components'

const Header = styled.h3`
    width: 100%; 
    text-align: center; 
    border-bottom: 1px solid #000; 
    line-height: 0.1em;
    margin: 10px 0 20px; 
`
const Span = styled.span`
    background:#fff; 
    padding:0 10px; 
`

const SubSectionHeader = ({text}) => {

    return (
        <Header>
            <Span>
                {text}
            </Span>
        </Header>
    )
}

export default SubSectionHeader
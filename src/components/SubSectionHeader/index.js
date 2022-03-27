import styled from 'styled-components'

const Header = styled.h3`
    width: 100%; 
    text-align: center; 
    border-bottom: 2px solid #000; 
    line-height: 0.1em;
    margin: 10px 0 20px;
    font-size: 30px;
`
const Span = styled.span`
    background:#fff; 
    padding-left: 10px;
    padding-right: 10px;
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
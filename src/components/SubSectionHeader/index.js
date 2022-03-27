import styled from 'styled-components'
import COLORS from '../../data/brand-color-lib.json'

const Header = styled.h3`
    width: 100%; 
    text-align: center;
    color: ${props => COLORS[props.textColor]};
    border-bottom: 2px solid ${props => COLORS[props.lineColor]}; 
    line-height: 0.1em;
    margin: 10px 0 20px;
    font-size: 30px;
`
const Span = styled.span`
    background:#fff; 
    padding-left: 10px;
    padding-right: 10px;
`

const SubSectionHeader = ({ text, textColor, lineColor }) => {

    return (
        <Header
            textColor={textColor}
            lineColor={lineColor}
        >
            <Span>
                {text}
            </Span>
        </Header>
    )
}

export default SubSectionHeader
import styled from 'styled-components'
import COLORS from '../../data/brand-color-lib.json'

const ButtonWrapper = styled.button`
    background-color: ${props => COLORS[props.bgColor]};
    color: ${props => props.textColor};
    outline: none;
    border: none;
    padding-top: ${props => props.yAxis}px;
    padding-bottom: ${props => props.yAxis}px;
    padding-left: ${props => props.xAxis}px;
    padding-right: ${props => props.xAxis}px;
    font-weight: ${props => props.fontWeight};
    font-size: 16px;
    cursor: pointer;
`

const Button = ({
    bgColor,
    text,
    textColor,
    xAxis,
    yAxis,
    fontWeight,
    path
}) => {

    return (
        <a
            href={path}
            className=""
        >
            <ButtonWrapper
                bgColor={bgColor}
                textColor={textColor}
                xAxis={xAxis}
                yAxis={yAxis}
                fontWeight={fontWeight}
            >
                {text}
            </ButtonWrapper>
        </a>
    )
}

export default Button
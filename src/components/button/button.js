import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { styled } from "styled-components"

export const Button = (props) => {

    const { theme } = useContext(ThemeContext)

    return(
        <Btn {...props} style={{color: theme.color, background: theme.background}}/>
    )
}

const Btn = styled.button`
    padding: 10px 20px;
    border-radius: 15px;
    font-weight: bold;
    transition: 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
    }
`
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { styled } from "styled-components"

export const Card = () => {

    const { theme } = useContext(ThemeContext)

    return(
        <Div style={{ color: theme.color, backgroundColor: theme.background }}>
            <h1>Título do card</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia labore mollitia nemo, aperiam atque error, hic eius et earum neque rem natus ea eos culpa illum, iste laudantium eligendi voluptatum?</p>
        </Div>
    )
}

const Div = styled.div`
    padding: 20px;
    margin-top: 10px;
    border-radius: 15px;
    transition: 0.2s ease-in-out;
`
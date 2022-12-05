import styled from 'styled-components'
import Button from '@mui/material/Button'
import { COLORS } from '../constants'

export const Container = styled.div`
    background-color: ${COLORS.GREY};
    height: 300px;
    border-radius: 10%;
    margin: 40px 0px 60px 0px;
    padding: 35px 35px 50px 35px;
    display: flex;
    flex-direction: column;

    &:hover {
        box-shadow: 0 15px 63px rgb(65 96 234 / 41%);
        transition: box-shadow 0.5s ease;
    }

    @media (max-width: 590px) {
        border-radius: 5%;
    }

    @media (max-width: 475px) {
        height: 245px;
        padding: 20px 20px 35px 20px;
    }
`

export const TitleWrap = styled.div`
    height: 30%;
`

export const Title = styled.h2`
    font-size: 26px;

    @media (max-width: 860px) {
        font-size: 26px;
    }

    @media (max-width: 656px) {
        font-size: 24px;
    }

    @media (max-width: 600px) {
        font-size: 22px;
    }

    @media (max-width: 560px) {
        font-size: 20px;
    }

    @media (max-width: 475px) {
        font-size: 18px;
    }
`

export const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70%;
`

export const Description = styled.p`
    font-size: 24px;

    @media (max-width: 860px) {
        font-size: 22px;
    }

    @media (max-width: 600px) {
        font-size: 20px;
    }

    @media (max-width: 560px) {
        font-size: 16px;
    }
`

export const Buttons = styled.div<{ toViewing: string }>`
    display: flex;
    justify-content: ${({ toViewing }) =>
        toViewing ? 'space-between' : 'end'};
`

export const LinkButton = styled(Button)``

export const Link = styled.a`
    &:active,
    &:hover,
    & {
        text-decoration: none;
        color: rgb(25, 118, 210);
    }
`

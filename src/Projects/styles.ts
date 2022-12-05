import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const SwiperWrap = styled.div`
    width: 100%;
    @media (max-width: 1150px) {
        width: 70%;
    }

    @media (max-width: 930px) {
        width: 80%;
    }

    @media (max-width: 816px) {
        width: 90%;
    }

    @media (max-width: 727px) {
        width: 100%;
    }
`

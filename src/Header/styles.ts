import styled from 'styled-components'

export const Container = styled.header`
    padding: 20px 30px;
    border-bottom: 1px solid rgb(25, 118, 210);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 495px) {
        flex-direction: column;
    }
`

export const Title = styled.div`
    font-size: 20px;
    margin-bottom: 10px;

    @media (max-width: 495px) {
        display: none;
    }
`

export const Name = styled.div`
    font-size: 24px;
`

export const TitleWrap = styled.div``

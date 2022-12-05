import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 940px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Photo = styled.img`
    height: 300px;

    @media (max-width: 940px) {
        margin-bottom: 20px;
    }
`

export const ListItem = styled.li`
    list-style-type: none;
`

export const List = styled.ul`
    padding-left: 0;
`

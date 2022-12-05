import { FC } from 'react'
import { Container, Photo, List, ListItem } from './styles'
import { TECHNOLOGIES } from '../constants'
import photo from '../Assets/images/photo.jpg'

const technologies: JSX.Element[] = TECHNOLOGIES.map((technology: string) => {
    return <ListItem key={technology}>{technology}</ListItem>
})

export const About: FC = () => {
    return (
        <Container>
            <Photo src={photo} />
            <List>{technologies}</List>
        </Container>
    )
}

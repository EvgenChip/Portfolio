import { FC } from 'react'
import {
    Container,
    TitleWrap,
    Title,
    ContentWrap,
    Description,
    Buttons,
    LinkButton,
    Link,
} from './styles'

export const Project: FC<ProjectType> = ({
    title,
    technologies,
    toCode,
    toViewing,
}) => {
    return (
        <Container>
            <TitleWrap>
                <Title>{title}</Title>
            </TitleWrap>
            <ContentWrap>
                <Description>{technologies}</Description>
                <Buttons toViewing={toViewing}>
                    {toViewing && (
                        <Link href={toViewing} target="blank">
                            <LinkButton variant="outlined" size="large">
                                Превью
                            </LinkButton>
                        </Link>
                    )}
                    <Link href={toCode} target="blank">
                        <LinkButton variant="outlined" size="large">
                            Код
                        </LinkButton>
                    </Link>
                </Buttons>
            </ContentWrap>
        </Container>
    )
}

import { FC } from 'react'
import { Container, Icon, IconLink } from './styles'
import { ACCOUNTS } from '../constants'

const accounts: JSX.Element[] = ACCOUNTS.map(
    ({ id, title, icon, to }: LinkType) => {
        return (
            <IconLink key={id} title={title} target="blank" href={to}>
                <Icon alt={title} src={icon}></Icon>
            </IconLink>
        )
    }
)

export const AccountsBlock: FC = () => {
    return <Container>{accounts}</Container>
}

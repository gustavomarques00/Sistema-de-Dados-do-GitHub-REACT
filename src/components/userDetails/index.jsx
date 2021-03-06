import {Container, Name, Username, Description} from './styles'

const UserDetails = props => (
    <Container>
        <Name>{props?.name}</Name>
        <Username>{props?.username}</Username>
        <Description>{props?.bio}</Description>
    </Container>
);

export default UserDetails;
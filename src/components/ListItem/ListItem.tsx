import { Wrapper, Avatar, Title, Subtitle } from "./Styles";

interface ListItemProps {
  name: string;
  role: string;
}

function ListItem({ name, role }: ListItemProps) {
  return (
    <Wrapper>
      <Avatar>{name[0]}</Avatar>
      <div>
        <Title>{name}</Title>
        <Subtitle>{role.toLowerCase()}</Subtitle>
      </div>
    </Wrapper>
  );
}

export default ListItem;

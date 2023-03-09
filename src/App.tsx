import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Col, Container } from "react-awesome-styled-grid";
import ListItem from "./components/ListItem/ListItem";
import RadioButton from "./components/RadioButton/RadioButton";
import { ListZellerCustomers } from "./graphql/queries";
import { Divider, Heading } from "./styles";

function App() {
  const [selectedRole, setSelectedRole] = useState<"Admin" | "Manager">(
    "Admin"
  );
  const { data, loading, error } = useQuery(ListZellerCustomers);

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  return (
    <Container style={{display: 'flex', justifyContent: 'center'}}>
      <Col xs={12} sm={4}>
        <Heading>User Types</Heading>
        <div style={{ display: "flex", gap: 16, flexDirection: "column" }}>
          <RadioButton
            label="Admin"
            id="admin"
            selected={selectedRole === "Admin"}
            onClick={() => setSelectedRole("Admin")}
          />
          <RadioButton
            label="Manager"
            id="manager"
            selected={selectedRole === "Manager"}
            onClick={() => setSelectedRole("Manager")}
          />
        </div>
        <Divider />
        <Heading>{selectedRole} Users</Heading>
        <div style={{ display: "flex", gap: 16, flexDirection: "column" }}>
          {data.listZellerCustomers.items
            .filter((item: any) => item.role === selectedRole.toUpperCase())
            .map((item: any) => (
              <ListItem name={item.name} role={item.role} key={item.id} />
            ))}
        </div>
        <Divider />
      </Col>
    </Container>
  );
}

export default App;

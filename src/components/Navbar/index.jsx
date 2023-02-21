import { useState } from "react";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import { Container, LinkNavbar, Form, Input, Button } from "./style";

const Navbar = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!search) return;

    navigate(`/search?q=${search}`)
    setSearch("");
  }

  return (
    <Container>
      <h2>
        <LinkNavbar to="/">
          <BiCameraMovie />
          MoviesLib
        </LinkNavbar>
      </h2>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Busque um filme"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="submit">
          <BiSearchAlt2 />
        </Button>
      </Form>
    </Container>
  );
};

export default Navbar;

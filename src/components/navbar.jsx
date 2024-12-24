import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Avatar,
} from "@nextui-org/react";

export default function App() {
  return (
    <Navbar maxWidth="lg" isBordered className="">
      <NavbarContent justify="start">
        <NavbarItem isActive>
          <Link color="primary" href="#">
            Shop All
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Categories
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Sale
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Avatar
            isBordered
            color="danger"
            size="lg" // Ajusta el tamaño para verificar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className="opacity-100 z-30"
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

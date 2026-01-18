import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(null);

  return (
    <div className="fixed top-5 inset-x-0 max-w-2xl mx-auto z-50">
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#hero">Hero Section</HoveredLink>
            <HoveredLink href="#about">About</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#projects">View Projects</HoveredLink>
            <HoveredLink href="#featured">Featured Work</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#contact">Get in Touch</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const link = [
  { label: "INICIO", route: "/" },
  { label: "PRODUTOS", route: "/" },
  { label: "CONTATO", route: "/" },
];

const ITEM_HEIGHT = 45;

interface MobileMenuProps {
  className: string;
}
export const MobileMenu: React.FC<MobileMenuProps> = ({ className }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <MenuTeste className={className}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {link.map((link) => (
          <MenuItem
            key={link.label}
            selected={link.label === "INICIO"}
            onClick={handleClose}
          >
            {
              <Link to={link.route}>
                <Items>{link.label}</Items>
              </Link>
            }
          </MenuItem>
        ))}
      </Menu>
    </MenuTeste>
  );
};

const MenuTeste = styled.div``;
const Items = styled.li`
  list-style: none;
  margin: 0 40px 0 40px;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
`;

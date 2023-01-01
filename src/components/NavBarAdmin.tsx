import { Container, Paper, MenuList, MenuItem, ListItemIcon, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const NavbarAdmin = function () {
  return (
    <Container sx={{ display: { xs: "none", md: "block" } }}>
      <Paper sx={{ width: 230 }}>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <SendIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Creete products</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <SendIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Create blog</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <SendIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">A short message</Typography>
          </MenuItem>
        </MenuList>
      </Paper>
    </Container>
  );
};

export default NavbarAdmin;

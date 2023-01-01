import {
  Paper,
  MenuList,
  MenuItem,
  ListItemIcon,
  Typography,
  SvgIconTypeMap,
  Box,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import DevicesIcon from "@mui/icons-material/Devices";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import { OverridableComponent } from "@mui/material/OverridableComponent";

const NavbarUser = function () {
  const dataNav = function (
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
      muiName: string;
    },
    name: string
  ) {
    return { Icon, name };
  };
  const noiBat = [
    dataNav(ConfirmationNumberIcon, "Mã giảm giá"),
    dataNav(SmartphoneIcon, "Ưu đãi thẻ ví"),
    dataNav(CreditScoreIcon, "Mua trước trả sau"),
  ];
  const menu = [
    dataNav(BabyChangingStationIcon, "Đồ chơi mẹ - bé"),
    dataNav(DevicesIcon, "Điện tử"),
    dataNav(BakeryDiningIcon, "Thời trang"),
  ];
  return (
    <Box sx={{ display: { xs: "none", md: "block" }, mr: "24px" }}>
      <Paper sx={{ width: 230 }}>
        <MenuList>
          <Typography variant="h3" sx={{ pl: "16px", fontWeight: "bold" }}>
            Nổi bật:
          </Typography>
          {noiBat.map((item, index) => {
            const { Icon, name } = item;
            return (
              <MenuItem key={index}>
                <ListItemIcon>
                  <Icon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">{name}</Typography>
              </MenuItem>
            );
          })}
        </MenuList>
      </Paper>
      <Paper sx={{ width: 230, mt: "16px" }}>
        <MenuList>
          <Typography variant="h3" sx={{ pl: "16px", fontWeight: "bold" }}>
            Danh mục:
          </Typography>
          {menu.map((item, index) => {
            const { Icon, name } = item;
            return (
              <MenuItem key={index}>
                <ListItemIcon>
                  <Icon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">{name}</Typography>
              </MenuItem>
            );
          })}
        </MenuList>
      </Paper>
    </Box>
  );
};

export default NavbarUser;

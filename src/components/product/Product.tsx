import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

type propsProduct = {
  id: string;
  img: string;
  name: string;
  price: string;
};
const Product = (props: propsProduct) => {
  const navigate = useNavigate();
  const handleViewDetail = () => {
    navigate(`/product/${props.id}`);
  };
  return (
    <Card sx={{ maxWidth: "265px" }} onClick={handleViewDetail}>
      <CardActionArea>
        <CardMedia
          sx={{ maxWidth: "265px" }}
          component="img"
          height="140"
          image={props.img}
          alt={props.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ height: "40px", overflow: "hidden" }}
          >
            {props.name}
          </Typography>
          <Typography variant="body2" color="red">
            ₫{props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Product;

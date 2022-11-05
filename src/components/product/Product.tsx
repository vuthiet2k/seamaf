import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type propsProduct = {
  img: string;
  name: string;
  price: string;
};
const Product = (props: propsProduct) => {
  return (
    <Card sx={{ maxWidth: "265px" }}>
      <CardActionArea>
        <CardMedia
          sx={{ maxWidth: "265px" }}
          component="img"
          height="140"
          image={props.img}
          alt={props.name}
        />
        <CardContent sx={{display: "flex", justifyContent: "space-between"}}>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="#000">
            ${props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Product;

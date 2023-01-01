import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const BlogCart = (props: any) => {
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
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="#000">
            ${props.time}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

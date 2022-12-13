import React from "react";
import { ApiDataModel } from "../../models/redux-models";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

type GifCardType = {
  data: ApiDataModel;
};
const GifCard = ({ data }: GifCardType) => {
  return (
    <Card sx={{ maxWidth: 345 }} key={data.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          width="200"
          image={data.images.fixed_height.webp}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="p"
            sx={{ fontWeight: 500 }}
          >
            {data.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default GifCard;

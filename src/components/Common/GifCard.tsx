import React from "react";
import { ApiDataModel } from "../../models/redux-models";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Modal } from "@mui/material";

type GifCardType = {
  data: ApiDataModel;
};
const GifCard = ({ data }: GifCardType) => {
  const [modal, setModal] = React.useState<boolean>(false);
  return (
    <>
      <Card sx={{ maxWidth: 345 }} key={data.id} onClick={() => setModal(true)}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
            width="190"
            image={data.images.fixed_height.webp}
            alt={data.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              sx={{ fontWeight: 500 }}
            >
              {data.title.slice(0, 35) + "..." || "GIF"}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
      </Card>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",

            transform: "translate(-50%, -50%)",
            width: { xs: "90vw", md: data.images.original.width },
            bgcolor: "background.paper",
          }}
        >
          <img src={data.images.original.webp} width="100%" alt={data.title} />
        </Box>
      </Modal>
    </>
  );
};

export default GifCard;

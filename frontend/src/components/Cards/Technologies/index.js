import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Add } from '@mui/icons-material';
import TecnologiesInfo from '../../Modal/TecnologiesInfo';

export default function CardTechnologies({ image, title, description }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" style={{ color: "#91B2FB" }} onClick={handleOpen}>
          Mais informações <Add />
        </Button>
      </CardActions>
      <TecnologiesInfo
        handleClose={handleClose}
        open={open} title={title}
        description={description}
      />
    </Card >
  );
}

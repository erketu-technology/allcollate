import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useComparisonContext } from './ComparisonProvider';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import {useStyles} from './styles'
import _ from 'lodash'


export default function ComparisonResultHeaderCard(props) {
  const classes = useStyles();

  let { hotels, setHotels } = useComparisonContext()

  const removeHotelFromList = (name) => {
    setHotels(hotels.filter((hotel) => hotel.name !== name))
  }

  const { hotel } = props

  return (
    <Box textAlign="center">
      <Card className={classes.card}>
        <CardHeader
          title={
            <Tooltip title={hotel.name} enterDelay={500} leaveDelay={200} placement='top-start' arrow>
              <Box fontSize={18}>
                {_.truncate(hotel.name, {'length': 25, 'separator': ' '})}
              </Box>
            </Tooltip>
          }
          action={
            <Box onClick={() => removeHotelFromList(hotel.name)} className={classes.removeButton}>
              <Typography>
                &times;
        </Typography>
            </Box>
          }
        >
        </CardHeader>
        <CardMedia
          className={classes.media}
          image={hotel.photo}
          title={hotel.name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {hotel.country + ', ' + hotel.city + ', ' + hotel.addressline1}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
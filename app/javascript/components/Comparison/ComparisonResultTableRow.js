import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';
import StarRatings from 'react-star-ratings';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  leftColumn: {
    position: 'sticky',
    left: '0px',
    color: 'black',
    backgroundColor: 'white',
    zIndex: '9999999',
    width: 'fit-content',
    minWidth: '150px'
  }
})



export default function ComparisonResultTableRow(props) {

  const classes = useStyles()

  return (
    <TableRow>
      <TableCell className={classes.leftColumn} >
        {`${props.comparisonOption}`}
      </TableCell>
      {props.hotels ? props.hotels.map((hotel, i) => {
        return (
          <TableCell key={i}>{props.data !== 'starRating' ? hotel[`${props.data}`] : 
          <StarRatings
            rating={hotel[`${props.data}`]}
            starDimension='20px'
            starRatedColor='gold'
            numberOfStars={hotel[`${props.data}`]}
            starSpacing='0px'
          />}</TableCell>
        )
      }) :
      <CircularProgress />
      }
    </TableRow>
  )
}
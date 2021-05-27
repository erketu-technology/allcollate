import React, { useEffect } from 'react';
import SuggestionForm from '../AutoSuggestionSearch/SuggestionForm'
import ComparisonResults from './ComparisonResults';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import { useComparisonContext } from './ComparisonProvider';
import Link from '@material-ui/core/Link';
import RatesComparisonChart from './RatesComparisonChart';
import Box from '@material-ui/core/Box';
import SelectHotelChart from './SelectHotelChart';
import Notification from './Notification'

const useStyles = makeStyles({
  page: {
    position: 'absolute',
    marginTop: '-22px',
    left: 0,
    backgroundColor: '#F5F7FB',
    width: '100vw',
    height: 'fit-content'
  },
  content: {
    width: '70%',
    marginLeft: '15%'
  },
  pageHeader: {
    display: 'flex',
    marginTop: '70px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  titleBox: {
    width: 'fit-content'
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '34px',
    lineHeight: '40px',
    color: 'black'
  },
  searchBox: {
    width: '6000px',
  }
})

function SearchPage() {

  const { setHotels, setSlug, currentHotel } = useComparisonContext()

  const classes = useStyles()

  const onSuggestionSelected = (that, suggestion, value) => {
    setSlug(suggestion.slug);
    that.setState({ query: '' });
  }

  const onClearAll = () => {
    setHotels([])
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Box className={classes.page}>
      <Box className={classes.content}>
        <Box className={classes.pageHeader}>
          <Box className={classes.titleBox}>
            <Typography className={classes.title}>
              Compare Hotels
            </Typography>
          </Box>
          <SuggestionForm
            onSuggestionSelected={onSuggestionSelected}
            onSubmit={onSubmit}
          />
          <Box>
            <Link
              component="button"
              variant="body2"
              onClick={() => onClearAll()}
            >
              Clear all
          </Link>
          </Box>
        </Box>
        <Grid>
          <ComparisonResults />
          <SelectHotelChart />
          <RatesComparisonChart />
        </Grid>
        <Notification />
      </Box>
    </Box>
  );
}

export default SearchPage;
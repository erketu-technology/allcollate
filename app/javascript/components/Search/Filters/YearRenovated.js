import React, { useCallback, useState } from 'react';
import { useSearchContext } from '../SearchProvider';
import { Card } from 'tabler-react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import _ from 'lodash';

function YearRenovated() {
  const {
    yearRenovationSlider,
    setYearRenovationSlider,
    minYearRenovated,
    maxYearRenovated,
    setActivePage,
  } = useSearchContext();

  const debouncedSliderValue = useCallback(
    _.debounce((newValue) => {
      setYearRenovationSlider(newValue);
      setActivePage(1);
    }, 500),
    []
  );

  const handleChange = (event, newValue) => {
    setYearRenovationSlider(newValue);
    debouncedSliderValue(newValue);
  };

  return (
    <Card>
      <Card.Body>
        <Typography id='range-slider' gutterBottom variant='h6'>
          Year Renovated
        </Typography>
        <Slider
          className='mt-5'
          value={yearRenovationSlider}
          onChange={handleChange}
          valueLabelDisplay='on'
          aria-labelledby='range-slider'
          min={minYearRenovated}
          max={maxYearRenovated}
        />
      </Card.Body>
    </Card>
  );
}

export default YearRenovated;

import React, { useState, useEffect } from 'react';
import { useSearchContext } from '../SearchProvider';
import { Card } from 'tabler-react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useDebouncedCallback } from 'use-debounce';

function YearRenovated() {
  const {
    minYearRenovated,
    maxYearRenovated,
    filterValue,
    updateFilterValues,
  } = useSearchContext();


  const [staticYearRenovated, setStaticYearRenovated] = useState(
    filterValue.yearRenovation
  );
  useEffect(() => {
    setStaticYearRenovated(filterValue.yearRenovation)
  }, [
    filterValue.yearRenovation,
  ])

  const debouncedSliderValue = useDebouncedCallback(
    (newValue) => {
      updateFilterValues('yearRenovation', newValue)
    }, 500,
  );

  const handleChange = (_event, newValue) => {
    setStaticYearRenovated(newValue);
    debouncedSliderValue(newValue);
  };

  const helpText = () => {
    const leftSlider = staticYearRenovated[0];
    const rightSlider = staticYearRenovated[1];

    const minText = leftSlider == minYearRenovated ? `+${leftSlider}` : leftSlider
    const maxText = rightSlider == maxYearRenovated ? `${rightSlider}+` : rightSlider

    return `from ${minText} to ${maxText}`;
  }

  return (
    <Card>
      <Card.Body>
        <Typography id='range-slider' variant='h6'>
          Year Renovated
        </Typography>
        <p className='pb-3'>
          <i>{helpText()}</i>
        </p>
        <Slider
          className='mt-5'
          value={staticYearRenovated}
          onChange={handleChange}
          valueLabelDisplay='auto'
          aria-labelledby='range-slider'
          min={minYearRenovated}
          max={maxYearRenovated}
        />
      </Card.Body>
    </Card>
  );
}

export default YearRenovated;

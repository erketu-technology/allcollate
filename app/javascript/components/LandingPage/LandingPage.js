import React from 'react';
import { Box, Typography } from '@material-ui/core';
import SuggestionForm from '../AutoSuggestionSearch/SuggestionForm';
import HotelCard from './HotelCard'
import Footer from './Footer';
import HeaderGraphic from './HeaderGraphic';

const LandingPage = () => {

    const onSuggestionSelected = (that, suggestion, value) => {
        // setSlug(suggestion.slug);
        // that.setState({ query: '' });
        console.log(that, suggestion, value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <HeaderGraphic />
            <Box component='header' className='text-center  bg-light' style={{ height: '578px' }}>
                <Box className='overlay'>
                    <Box className='container'>
                        <Box className='row'>
                            <Box className='col-xl-12 mx-auto' style={{ marginTop: '234px' }}>
                                <svg width="261" height="49" viewBox="0 0 261 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.5625 36.125H10.5L6.21875 48H0.03125L17.4062 2.5H22.6562L40.0625 48H33.9062L29.5625 36.125ZM12.3125 31.1875H27.7812L20.0312 9.90625L12.3125 31.1875ZM89.9688 43.9062C92.0312 43.9062 93.8333 43.2812 95.375 42.0312C96.9167 40.7812 97.7708 39.2188 97.9375 37.3438H103.406C103.302 39.2812 102.635 41.125 101.406 42.875C100.177 44.625 98.5312 46.0208 96.4688 47.0625C94.4271 48.1042 92.2604 48.625 89.9688 48.625C85.3646 48.625 81.6979 47.0938 78.9688 44.0312C76.2604 40.9479 74.9062 36.7396 74.9062 31.4062V30.4375C74.9062 27.1458 75.5104 24.2188 76.7188 21.6562C77.9271 19.0938 79.6562 17.1042 81.9062 15.6875C84.1771 14.2708 86.8542 13.5625 89.9375 13.5625C93.7292 13.5625 96.875 14.6979 99.375 16.9688C101.896 19.2396 103.24 22.1875 103.406 25.8125H97.9375C97.7708 23.625 96.9375 21.8333 95.4375 20.4375C93.9583 19.0208 92.125 18.3125 89.9375 18.3125C87 18.3125 84.7188 19.375 83.0938 21.5C81.4896 23.6042 80.6875 26.6562 80.6875 30.6562V31.75C80.6875 35.6458 81.4896 38.6458 83.0938 40.75C84.6979 42.8542 86.9896 43.9062 89.9688 43.9062ZM108.375 30.7812C108.375 27.4688 109.021 24.4896 110.312 21.8438C111.625 19.1979 113.438 17.1562 115.75 15.7188C118.083 14.2812 120.74 13.5625 123.719 13.5625C128.323 13.5625 132.042 15.1562 134.875 18.3438C137.729 21.5312 139.156 25.7708 139.156 31.0625V31.4688C139.156 34.7604 138.521 37.7188 137.25 40.3438C136 42.9479 134.198 44.9792 131.844 46.4375C129.51 47.8958 126.823 48.625 123.781 48.625C119.198 48.625 115.479 47.0312 112.625 43.8438C109.792 40.6562 108.375 36.4375 108.375 31.1875V30.7812ZM114.188 31.4688C114.188 35.2188 115.052 38.2292 116.781 40.5C118.531 42.7708 120.865 43.9062 123.781 43.9062C126.719 43.9062 129.052 42.7604 130.781 40.4688C132.51 38.1562 133.375 34.9271 133.375 30.7812C133.375 27.0729 132.49 24.0729 130.719 21.7812C128.969 19.4688 126.635 18.3125 123.719 18.3125C120.865 18.3125 118.562 19.4479 116.812 21.7188C115.062 23.9896 114.188 27.2396 114.188 31.4688ZM198.406 48C198.073 47.3333 197.802 46.1458 197.594 44.4375C194.906 47.2292 191.698 48.625 187.969 48.625C184.635 48.625 181.896 47.6875 179.75 45.8125C177.625 43.9167 176.562 41.5208 176.562 38.625C176.562 35.1042 177.896 32.375 180.562 30.4375C183.25 28.4792 187.021 27.5 191.875 27.5H197.5V24.8438C197.5 22.8229 196.896 21.2188 195.688 20.0312C194.479 18.8229 192.698 18.2188 190.344 18.2188C188.281 18.2188 186.552 18.7396 185.156 19.7812C183.76 20.8229 183.062 22.0833 183.062 23.5625H177.25C177.25 21.875 177.844 20.25 179.031 18.6875C180.24 17.1042 181.865 15.8542 183.906 14.9375C185.969 14.0208 188.229 13.5625 190.688 13.5625C194.583 13.5625 197.635 14.5417 199.844 16.5C202.052 18.4375 203.198 21.1146 203.281 24.5312V40.0938C203.281 43.1979 203.677 45.6667 204.469 47.5V48H198.406ZM188.812 43.5938C190.625 43.5938 192.344 43.125 193.969 42.1875C195.594 41.25 196.771 40.0312 197.5 38.5312V31.5938H192.969C185.885 31.5938 182.344 33.6667 182.344 37.8125C182.344 39.625 182.948 41.0417 184.156 42.0625C185.365 43.0833 186.917 43.5938 188.812 43.5938ZM220.188 6V14.1875H226.5V18.6562H220.188V39.625C220.188 40.9792 220.469 42 221.031 42.6875C221.594 43.3542 222.552 43.6875 223.906 43.6875C224.573 43.6875 225.49 43.5625 226.656 43.3125V48C225.135 48.4167 223.656 48.625 222.219 48.625C219.635 48.625 217.688 47.8438 216.375 46.2812C215.062 44.7188 214.406 42.5 214.406 39.625V18.6562H208.25V14.1875H214.406V6H220.188ZM247.312 48.625C242.729 48.625 239 47.125 236.125 44.125C233.25 41.1042 231.812 37.0729 231.812 32.0312V30.9688C231.812 27.6146 232.448 24.625 233.719 22C235.01 19.3542 236.802 17.2917 239.094 15.8125C241.406 14.3125 243.906 13.5625 246.594 13.5625C250.99 13.5625 254.406 15.0104 256.844 17.9062C259.281 20.8021 260.5 24.9479 260.5 30.3438V32.75H237.594C237.677 36.0833 238.646 38.7812 240.5 40.8438C242.375 42.8854 244.75 43.9062 247.625 43.9062C249.667 43.9062 251.396 43.4896 252.812 42.6562C254.229 41.8229 255.469 40.7188 256.531 39.3438L260.062 42.0938C257.229 46.4479 252.979 48.625 247.312 48.625ZM246.594 18.3125C244.26 18.3125 242.302 19.1667 240.719 20.875C239.135 22.5625 238.156 24.9375 237.781 28H254.719V27.5625C254.552 24.625 253.76 22.3542 252.344 20.75C250.927 19.125 249.01 18.3125 246.594 18.3125Z" fill="#5C73C2" />
                                    <path d="M51.5625 48H45.7812V0H51.5625V48ZM67.125 48H61.3438V0H67.125V48ZM152.688 48H146.906V0H152.688V48ZM168.25 48H162.469V0H168.25V48Z" fill="#53AE4C" />
                                </svg>
                                <Typography style={{ fontSize: '32px', marginTop: '35px' }}>
                                    Find and track any hotels
                                </Typography>
                                <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '35px' }}>
                                    <SuggestionForm
                                        onSuggestionSelected={onSuggestionSelected}
                                        onSubmit={onSubmit}
                                        withSearchButton={false}
                                        withClearAllButton={false}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box component='section' className='features-icons text-center' style={{
                borderTop: '1px solid #B2B2B2',
                borderBottom: '1px solid #B2B2B2',
                paddingTop: '0px',
                height: '360px'
            }}>
                <Box className='container' style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <Box className='row' style={{width: '800px'}}>
                        <Box className='col-lg-4' style={{ marginTop: '70px' }}>
                            <Box className='features-icons-item mx-auto mb-5.mb-lg-0 mb-lg-3'>
                                <Box className='features-icons-icon d-flex'
                                >
                                    <HotelCard picture={'http://pix5.agoda.net/hotelimages/38/38/38_120516001857736.jpg?s=312x'}/>
                                </Box>
                            </Box>
                        </Box>
                        <Box className='col-lg-4' style={{ marginTop: '70px' }}>
                            <Box className='features-icons-item mx-auto mb-5.mb-lg-0 mb-lg-3'>
                                <Box className='features-icons-icon d-flex'>
                                    <HotelCard picture={'http://pix5.agoda.net/hotelimages/38/38/38_120516001857736.jpg?s=312x'}/>
                                </Box>
                            </Box>
                        </Box>
                        <Box className='col-lg-4' style={{ marginTop: '70px' }}>
                            <Box className='features-icons-item mx-auto mb-5.mb-lg-0 mb-lg-3'>
                                <Box className='features-icons-icon d-flex'>
                                    <HotelCard picture={'http://pix5.agoda.net/hotelimages/38/38/38_120516001857736.jpg?s=312x'}/>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box style={{ width: '100%', height: '171px', background: '#f8f9fa' }}>
            </Box>
            <Footer />
        </>
    )
}

export default LandingPage

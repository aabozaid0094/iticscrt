import React, { useState } from 'react';
import Slide from './Slide';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Slider = () => {
    const import_all = r => r.keys().map(r);
    const slides = import_all(require.context('../images/slide_show', false, /\.(png|jpe?g|svg)$/));
    const [currentSlide, setCurrentSlide] = useState(0);
    const previous_slide = () => {
        if (currentSlide > 0) setCurrentSlide(oldCurrentSlide=>--oldCurrentSlide);
        else setCurrentSlide(slides.length-1);
    };
    const next_slide = () => {
        if (currentSlide < slides.length-1) setCurrentSlide(oldCurrentSlide=>++oldCurrentSlide);
        else setCurrentSlide(0);
    };

    return (
        <Container className="Slider d-flex flex-column align-items-center">
            <Slide src={slides[currentSlide]} alt={"Slide" + currentSlide}></Slide>
            <div className="d-flex justify-content-center align-items-center gap-3">
                <Button variant="secondary" onClick={previous_slide}>Previous</Button>
                <Button variant="secondary" onClick={next_slide}>Next</Button>
            </div>
        </Container>
    );
};

export default Slider;
import React from "react";
import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from "react-compare-slider";

export default function ImageComparison({ before, after }) {
    return (
        <div className="image-comparison-container">
            <ReactCompareSlider
                className="image-comparison-slider"
                itemOne={<ReactCompareSliderImage src={before} alt="Antes" />}
                itemTwo={<ReactCompareSliderImage src={after} alt="Después" />}
            />
        </div>
    );
}
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

export default function ImageComparison({ before, after, beforeAlt, afterAlt }) {
  return (
    <div className="image-comparison-container">
      <ReactCompareSlider
        className="image-comparison-slider"
        itemOne={<ReactCompareSliderImage src={before} alt={beforeAlt} />}
        itemTwo={<ReactCompareSliderImage src={after} alt={afterAlt} />}
      />
    </div>
  );
}

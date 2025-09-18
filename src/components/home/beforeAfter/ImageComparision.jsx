import React, { useState, useRef } from "react";
import ReactCompareImage from "react-compare-image";

export default function ImageComparison({ before, after }) {
    const [position, setPosition] = useState(50);
    const containerRef = useRef(null);
    const isDragging = useRef(false);

    const startDrag = () => {
        isDragging.current = true;
    };

    const stopDrag = () => {
        isDragging.current = false;
    };

    const handleMove = (e) => {
        if (!isDragging.current) return;
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        let newPos = ((clientX - rect.left) / rect.width) * 100;
        if (newPos < 0) newPos = 0;
        if (newPos > 100) newPos = 100;
        setPosition(newPos);
    };

    return (
        <div
            className="comparison-container"
            ref={containerRef}
            onMouseMove={handleMove}
            onTouchMove={handleMove}
            onMouseUp={stopDrag}
            onTouchEnd={stopDrag}
        >
            <ReactCompareImage
                leftImage={after}
                rightImage={before}
                sliderLineColor="#fff"
                handle={
                    <div
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            background: "white",
                            border: "3px solid gray",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 0 8px rgba(0,0,0,0.3)",
                        }}
                    >
                        ⇆
                    </div>
                }
            />
        </div>
    );
}

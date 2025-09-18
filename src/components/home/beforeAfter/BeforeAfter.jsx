import React from "react";
import ImageComparison from "./ImageComparision";
import kitchenBefore from "@/assets/cocina.jpg";
import kitchenAfter from "@/assets/cocina1.jpg";
import bathroomBefore from "@/assets/baño.jpg";
import bathroomAfter from "@/assets/baño1.jpg";
import basinBefore from "@/assets/lavabo.jpg";
import basinAfter from "@/assets/lavabo1.jpg";

export default function BeforeAfter() {
    return (
        <section className="before-after">
            <h2>BEFORE & AFTER</h2>
            <p>“Drag the slider to compare Before and After”</p>
            <div className="content-before-after">
                <div className="content-img">
                    <ImageComparison before={kitchenBefore} after={kitchenAfter} />
                </div>
                <div className="content-img">
                    <ImageComparison before={bathroomBefore} after={bathroomAfter} />
                </div>
                <div className="content-img">
                    <ImageComparison before={basinBefore} after={basinAfter} />
                </div>
            </div>
        </section>
    );
}

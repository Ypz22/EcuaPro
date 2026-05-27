import { BEFORE_AFTER_ITEMS } from "@/data/siteContent";
import ImageComparison from "./ImageComparision";

export default function BeforeAfter() {
  return (
    <section className="before-after">
      <h2>BEFORE & AFTER</h2>
      <p>&quot;Drag the slider to compare Before and After&quot;</p>
      <div className="content-before-after">
        {BEFORE_AFTER_ITEMS.map((item) => (
          <div className="content-img" key={item.before}>
            <ImageComparison
              before={item.before}
              after={item.after}
              beforeAlt={item.beforeAlt}
              afterAlt={item.afterAlt}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

import { Paragraph, ProductHeadline } from "..";
import "./shopIntro.css";

type ShopIntroProps = {
  styles?: object;
};

export const ShopIntro = ({
  styles = { margin: "160px 0" },
}: ShopIntroProps): JSX.Element => (
  <div style={styles} className="intro">
    <div className="intro__content">
      <ProductHeadline>
        Bringing you the <span>best</span> audio gear
      </ProductHeadline>

      <Paragraph>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </Paragraph>
    </div>

    <div className="intro__image-container">
      <img
        className="intro__image desktop-image"
        src="/images/shared/desktop/image-best-gear.jpg"
        alt="Man wears black headphones"
      />

      <img
        className="intro__image tablet-image"
        src="/images/shared/tablet/image-best-gear.jpg"
        alt="Man wears black headphones"
      />

      <img
        className="intro__image mobile-image"
        src="/images/shared/mobile/image-best-gear.jpg"
        alt="Man wears black headphones"
      />
    </div>
  </div>
);

export default ShopIntro;

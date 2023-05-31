import { useCallback, useEffect, useState } from "react";
import Img1 from "../../assets/images/1.webp";
import Img2 from "../../assets/images/2.webp";
import Img3 from "../../assets/images/3.webp";
import Img4 from "../../assets/images/4.webp";
import Img5 from "../../assets/images/5.webp";
import Img6 from "../../assets/images/6.webp";
import Video from "../../assets/images/video.mp4";

export default function Slide() {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index === images.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [index]);

  return (
    <div className="main">
      <div
        className="slider"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((item, index) => (
          <div className="item" key={index}>
            {item.includes("mp4") ? (
              <video autoPlay preload="auto" loop playsInline muted>
                <source src={item} type="video/mp4" />
              </video>
            ) : (
              <img src={item} alt="" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

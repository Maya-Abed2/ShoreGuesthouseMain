import { assets, gallerySec } from "../../public/images/assets";
import { useState, useEffect, useCallback } from "react";
import AboutSec from "./AboutSec";

export default function GallerySec() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const updateCardsToShow = useCallback(() => {
    if (window.innerWidth >= 1024) {
      setCardsToShow(4);
    } else if (window.innerWidth >= 768) {
      setCardsToShow(2);
    } else {
      setCardsToShow(1);
    }
  }, []);
  useEffect(() => {
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => window.removeEventListener("resize", updateCardsToShow);
  }, [updateCardsToShow]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = gallerySec.length - cardsToShow;
      if (cardsToShow === 1) {
        return (prevIndex + 1) % gallerySec.length;
      }

      const nextIndex = prevIndex + 1;
      return Math.min(nextIndex, maxIndex);
    });
  };
  const pervImage = () => {
    setCurrentIndex((prevIndex) =>{
      if (cardsToShow === 1) {
                return prevIndex === 0 ? gallerySec.length - 1 : prevIndex - 1;
            }

            
            const prev = prevIndex - 1;
            return Math.max(prev, 0);
          }
    );
  };

  const itemWidth = 100 / cardsToShow;

  return (
    <div className="my-14" id="Gallery">
      <div className="container mx-auto px-4">
        <div className="max-w-lg">
          <h6>Gallery</h6>
          <h2 className="text-2xl md:text-4xl mb-4">
            Experience Shore Guesthouse.
          </h2>
          {/* todo:Add Gallery page link */}
          <a href="#" className="text-2xl underline">
            View full Gallery
          </a>
        </div>
        {/* Slid buttons */}
        <div className="text-end space-x-4 my-4">
          <button
            className="p-2 bg-gray-300"
            aria-label="prevImage"
            onClick={pervImage}
          >
            <img src={assets.leftArrow} alt="prev" />
          </button>
          <button
            className="p-2 bg-gray-300"
            aria-label="nextImage"
            onClick={nextImage}
          >
            <img src={assets.rightArrow} alt="next" />
          </button>
        </div>
        {/* Image slider */}
        <div className="overflow-hidden mb-8">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              // 💡 يتم التحريك بمقدار عرض عنصر واحد (100% مقسومة على عدد العناصر المعروضة)
              transform: `translateX(-${currentIndex * itemWidth}%)`,
              // 💡 تحديد عرض الحاوية لتكون كبيرة بما يكفي لاحتواء كل العناصر
              width: `${gallerySec.length * itemWidth}%`,
            }}
          >
            {gallerySec.map((image, index) => (
              <div
                key={index}
                className="text-center"
                style={{ width: `${itemWidth}%` }}
              >
                <img src={image.image} className="w-sm h-80" />
                <p className="font-semibold mt-1.5">{image.title}</p>
              </div>
            ))}
          </div>
        </div>
        <AboutSec/>
      </div>
    </div>
  );
}

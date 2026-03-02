import React, { useEffect, useRef, useState, useCallback } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import PortfolioFilter from "../../elements/Portfolio/PortfolioFilter";
import PortfolioItem from "./PortfolioItem";
import Shuffle from "shufflejs";
import ProductItem from "./ProductItem";
import loadImage from "../../utils/imageLoader";

const ITEMS_PER_PAGE = 12;

const PortoflioSix = ({
  filter,
  layout,
  columns,
  data,
  type,
  classAppend,
  space,
  ref,
}) => {
  const categories = [
    "ไวนิล",
    "สติ๊กเกอร์",
    "พลาสวูด/อะคลิลิค",
    "กล่องไฟ",
    "งานมีขา",
  ];
  const element = useRef();
  const [shuffle, setShuffle] = useState();
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const [isOpen, setIsOpen] = useState(false);
  const [photo, setPhoto] = useState(0);

  const closeLightbox = () => {
    setIsOpen(false);
  };
  const openLightbox = (e, photo) => {
    e.preventDefault();
    setPhoto(photo);
    setIsOpen(true);
  };

  useEffect(() => {
    if (element.current) {
      const instance = new Shuffle(element.current, {
        itemSelector: ".portfolio-item",
      });
      setShuffle(instance);
      return () => {
        instance.destroy();
      };
    }
  }, []);

  useEffect(() => {
    if (shuffle) {
      shuffle.resetItems();
    }
  }, [visibleCount, shuffle]);

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, data.length));
  }, [data.length]);

  const filterElements = (evt) => {
    const btn = evt.currentTarget;
    evt.target.parentElement
      .querySelectorAll(".active")
      .forEach((e) => e.classList.remove("active"));
    evt.currentTarget.classList.add("active");
    const cat = btn.getAttribute("value");
    setVisibleCount(data.length);
    setTimeout(() => {
      shuffle.filter((element) => {
        return element.getAttribute("data-groups").toLowerCase().includes(cat);
      });
    }, 100);
  };

  const visibleData = data.slice(0, visibleCount);
  const hasMore = visibleCount < data.length;

  return (
    <section className={classAppend ? classAppend : null} ref={ref}>
      <div className={"container" + (layout === "wide" ? "-fluid" : "")}>
        <div className="row">
          <div className="container text-center">
            {filter === "true" ? (
              <PortfolioFilter
                categories={categories}
                handleClick={filterElements}
              />
            ) : null}
            <ul
              id="portfolio-grid"
              ref={element}
              className={
                (columns ? columns : "three") + "-column hover-two row "
              }
            >
              {type === "masonry"
                ? visibleData.map((item) => (
                    <PortfolioItem
                      title={item.title}
                      category={item.category}
                      image={item.image}
                      links={item.links}
                      key={item.id}
                      groups={item.groups}
                      columns={columns}
                      type="masonry"
                      openLightbox={openLightbox}
                    />
                  ))
                : visibleData.map((item) => (
                    <ProductItem
                      title={item.title}
                      category={item.category}
                      image={item.image}
                      links={item.links}
                      key={item.id}
                      groups={item.groups}
                      type="product"
                      space={space}
                      openLightbox={openLightbox}
                    />
                  ))}
            </ul>
            {hasMore && (
              <button
                className="btn btn-dark mt-30 mb-30"
                onClick={loadMore}
                style={{
                  padding: "12px 40px",
                  fontSize: "16px",
                  borderRadius: "4px",
                }}
              >
                ดูเพิ่มเติม ({data.length - visibleCount} รายการ)
              </button>
            )}
            {isOpen && (
              <Lightbox
                mainSrc={loadImage(photo)}
                onCloseRequest={() => closeLightbox()}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortoflioSix;

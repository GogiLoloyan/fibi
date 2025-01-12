"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import classNames from "classnames";

import Button from "../../../../components/Button";
import Section from "../../../../components/Section";
import { slides } from "./Slides";

import ArrowIcon from "../../../../public/icons/arrow.svg";

import EffectMaterial from "./effect-material";
import "./effect-material.css";
import "./swiper-custom.css";

import styles from "./index.module.css";

const options: Swiper["params"] = {
  // pass EffectMaterial module to modules
  modules: [EffectMaterial, Pagination],
  // specify "material" effect
  effect: "material",
  // material effect parameters
  // @ts-ignore
  materialEffect: {
    slideSplitRatio: 0.65,
  },
  centeredSlides: true,
  initialSlide: 0,
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 40,
  speed: 600,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '"></span>';
    // },
  },
};

const SolutionsSliderSection = () => {
  const router = useRouter();

  useEffect(() => {
    const swiper = new Swiper(".swiper", options);

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <Section
      className={styles.container}
      title="Solutions"
      actionElement={
        <Button
          className={styles.actionButton}
          variant="primaryText"
          size="small"
          rightIcon={<ArrowIcon />}
          onClick={() => router.push("/solutions")}
        >
          View All
        </Button>
      }
    >
      <div className="slider">
        {/* Material slider */}
        <div className="swiper">
          <div className="swiper-wrapper">
            {slides.map((slide, index) => (
              <div key={index} className="swiper-slide">
                <div className="swiper-material-wrapper">
                  <div
                    className="swiper-material-content"
                    style={{ background: slide.gradient }}
                  >
                    <div className={styles.sliderItem}>
                      <div className={styles.sliderItemLeft}>
                        <div className={styles.sliderItemIcon}>
                          {slide.icon}
                        </div>
                        <p
                          className={classNames(
                            styles.sliderItemTitle,
                            "text-3xl mobile--text-xl font-bold"
                          )}
                          dangerouslySetInnerHTML={{ __html: slide.title }}
                        />
                        <p
                          className={classNames(
                            styles.sliderItemSubTitle,
                            "text-lg mobile--text-sm"
                          )}
                        >
                          {slide.subTitle}
                        </p>
                      </div>
                      {slide.content}
                      {/* <div className={styles.sliderItemRight}>
                      </div> */}
                    </div>
                    {/* <img
                      className="material-image"
                      data-swiper-material-scale="1.25"
                      src={slide.img}
                    /> */}
                    {/* <span className="demo-material-label swiper-material-animate-opacity">
                      {slide.title}
                    </span> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="swiper-pagination" />
      </div>
    </Section>
  );
};

export default SolutionsSliderSection;

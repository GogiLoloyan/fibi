"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Button from "../../../../components/Button";
import Section from "../../../../components/Section";

import ArrowIcon from "../../../../public/icons/arrow.svg";
import MessageBulkIcon from "../../../../public/icons/messages-bulk.svg";
import CardTickIcon from "../../../../public/icons/card-tick.svg";
import DesignIcon from "../../../../public/icons/design.svg";
import PlayIcon from "../../../../public/icons/play.svg";

import EffectMaterial from "./effect-material";
import "./effect-material.css";
import "./swiper-custom.css";

import styles from "./index.module.css";
import classNames from "classnames";

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
  initialSlide: 1,
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
    // dynamicBullets: true,
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '"></span>';
    // },
  },
};

type SlideItem = {
  title: string;
  subTitle: string;
  icon: React.ReactNode;
  gradient: string;
  content?: React.ReactNode;
};

const slides: SlideItem[] = [
  {
    title: "Code-Free Website Builder",
    subTitle: "No-code website builder for streaming services.",
    icon: <DesignIcon />,
    gradient: "linear-gradient(135deg, #ED0D92 0%, #B70A71 40%, #870753 100%)",
  },
  {
    title: "In-Platform<br /> Messaging",
    subTitle:
      "Communicate with your team and clients with integrated in-platform messaging app.",
    icon: <MessageBulkIcon />,
    content: (
      <div className={styles.content2}>
        <div
          className={classNames(styles.messageBox, styles.messageBoxSupport)}
        >
          <p>Support</p>
          <p>Hey, how can I assist you?</p>
        </div>
        <div className={classNames(styles.messageBox, styles.messageBoxClient)}>
          <p>Client</p>
          <p>Hi, can you help me out with packages?</p>
        </div>
        <div
          className={classNames(styles.messageBox, styles.messageBoxSupport)}
        >
          <p>Support</p>
          <p>Sure, let me check your ID...</p>
        </div>
      </div>
    ),
    gradient: "linear-gradient(315deg, #4E256E 0%, #8930CF 100%)",
  },
  {
    title: "Advanced Billing Integration",
    subTitle:
      "Manage payments with API integration and billing solutions for your video streaming business and OTT services.",
    icon: <CardTickIcon />,
    gradient: "linear-gradient(135deg, #ED0D92 0%, #B70A71 40%, #870753 100%)",
  },
  {
    title: "Own Video Player",
    subTitle: "Deliver HD video playback with a flexible, web-ready player.",
    icon: <PlayIcon />,
    gradient: "linear-gradient(315deg, #4E256E 0%, #8930CF 100%)",
  },
  {
    title: "Code-Free Website Builder",
    subTitle: "No-code website builder for streaming services.",
    icon: <DesignIcon />,
    gradient: "linear-gradient(135deg, #ED0D92 0%, #B70A71 40%, #870753 100%)",
  },
  {
    title: "In-Platform Messaging",
    subTitle:
      "Communicate with your team and clients with integrated in-platform messaging app.",
    icon: <MessageBulkIcon />,
    gradient: "linear-gradient(315deg, #4E256E 0%, #8930CF 100%)",
  },
];

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

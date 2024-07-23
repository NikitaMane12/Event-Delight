import React from "react";
import { Container, Carousel } from "react-bootstrap";
import titleIcon from "../assets/title-icon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/VideosSection.css";

const VideosSection = () => {
  return (
    <section className="ulockd-blog new-ulockd_bgnew">
      <Container>
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <div className="ulockd-main-title">
              <h2>
                <span className="text-thm2" style={{ color: "#FEAEA3" }}>
                  Some Spectacular Videos
                </span>
              </h2>
              <img src={titleIcon} alt="" />
            </div>
          </div>
        </div>
        <Carousel>
          <Carousel.Item>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/b3WuU-ME118?si=GovGSqSrT10Jkv5G"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Carousel.Item>
          <Carousel.Item>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/JtFGwpFwv9c?si=Fj-z9P3SAwittHkZ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Carousel.Item>
          <Carousel.Item>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/v4HFFfsO4u4?si=nQ-n3ui4WxUDsYNX"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Carousel.Item>
          <Carousel.Item>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/_Z4UqvicMa4?si=tybbckvDXnE5UqKM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Carousel.Item>
        </Carousel>
      </Container>
      <div className="video_more">
        <a className="button">View More</a>
      </div>
    </section>
  );
};

export default VideosSection;

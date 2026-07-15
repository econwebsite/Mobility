import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import forwardfacing from "../../../assets/homepage/forwardfacing-blog.jpg";
import hdrled from "../../../assets/homepage/hdr-led-blog.jpg";
import drivermonitoring from "../../../assets/homepage/drivermonitoring-blog.jpg";
import surroundview from "../../../assets/homepage/surroundview-blog.jpg";
import AnimationButton from "../../ButtonComp/AnimationButton"
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  return (

    <div className="ProductBlogs-Total">
      <Helmet>
            <title>Driving the Future | e-con Mobility Blogs & Updates</title>
            <meta name='description' content='Explore the latest in rugged camera technology, ADAS innovations, and mobility insights from e-con Mobility. Stay ahead with our expert blogs and updates.' />
          </Helmet>
      <h1 className="ProductBlogs-title">블로그</h1>
      <div className='mainContainer'>
        <div className="ProductBlogs-cards">
          <div className="ProductBlogs-card">
            <Link className="cardImgLink" to="/blog/how-forward-facing-camera-works-in-adas/" style={{ textDecoration: "none" }}>
              <img src={forwardfacing} alt="How Does a Forward-Facing Camera Work" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/blog/how-forward-facing-camera-works-in-adas/" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">전방 카메라의 작동 방식과 ADAS에서의 사용 사례</h2>
            </Link>
            <p className="ProductBlogs-card-text">전방 카메라는 ADAS에서 물체 감지, 차선 추적 등을 개선하는 데 사용됩니다. 더 안전하고 스마트한 주행에 기여하는 카메라 기능을 발견하세요.</p>
            <AnimationButton text="더 알아보기" backgroundColor="#344ea1" hoverColor="white"  to="/blog/how-forward-facing-camera-works-in-adas/" className="Blog-readmore-btn" />
          </div>
          <div className="ProductBlogs-card">
            <Link className="cardImgLink" to="/blog/why-hdr-lfm-matter-forward-facing-cameras-adas/" style={{ textDecoration: "none" }}>
              <img src={hdrled} alt="Why HDR and LED Flicker Mitigation" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/blog/why-hdr-lfm-matter-forward-facing-cameras-adas/" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">HDR과 LED 깜박임 완화가 ADAS에서 전방 카메라의 판도를 바꾸는 이유</h2>
            </Link>
            <p className="ProductBlogs-card-text">첨단 운전자 보조 시스템은 HDR 및 LED 깜박임 완화 기능에 의존합니다. 전방 카메라가 ADAS 안전성을 향상시키는 데 중요한 역할을 하는 방법에 대해 알아보세요.</p>
            <AnimationButton text="더 알아보기" backgroundColor="#344ea1" hoverColor="white"  to="/blog/why-hdr-lfm-matter-forward-facing-cameras-adas/" className="Blog-readmore-btn" />
          </div>

          <div className="ProductBlogs-card">
            <Link className="cardImgLink" to="/blog/how-driver-monitoring-cameras-improve-safety-features/" style={{ textDecoration: "none" }}>
              <img src={drivermonitoring} alt="How driver monitoring cameras improve driving safety" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/blog/how-driver-monitoring-cameras-improve-safety-features/" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">운전자 모니터링 카메라가 운전 안전성과 주요 기능을 개선하는 방법</h2>
            </Link>
            <p className="ProductBlogs-card-text">운전자 모니터링 카메라는 피로와 주의 분산을 감지하여 도로 안전을 개선합니다. 안전한 운전 습관을 제공하는 카메라 기능을 살펴보세요.</p>
            <AnimationButton text="더 알아보기" backgroundColor="#344ea1" hoverColor="white"  to="/blog/how-driver-monitoring-cameras-improve-safety-features/" className="Blog-readmore-btn" />
          </div>
          <div className="ProductBlogs-card">
            <Link className="cardImgLink" to="/blog/how-surround-view-cameras-improve-driving-parking-safety/" style={{ textDecoration: "none" }}>
              <img src={surroundview} alt="How do Surround View cameras improve driving" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/blog/how-surround-view-cameras-improve-driving-parking-safety/" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">서라운드 뷰 카메라가 운전 및 주차 안전을 개선하는 방법</h2>
            </Link>
            <p className="ProductBlogs-card-text">서라운드 뷰 시스템은 사각지대를 제거하고 안전을 개선하기 위해 360도 가시성을 제공합니다. 카메라가 충돌 위험을 줄이는 데 어떻게 도움이 되는지 알아보세요.</p>
            <AnimationButton text="더 알아보기" backgroundColor="#344ea1" hoverColor="white"  to="/blog/how-surround-view-cameras-improve-driving-parking-safety/" className="Blog-readmore-btn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

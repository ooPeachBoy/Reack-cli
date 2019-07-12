//基于swiper的Swiper组件
//使用类组件，因为函数组件没有生命周期

import React, { Component } from "react";
import BaseSwiper from "swiper";
import "swiper/dist/css/swiper.css";
import PropTypes from "prop-types";

class Swiper extends Component {
  render() {
    let { pagination, scrollbar, navigation, slide } = this.props;
    if (slide.length > 0) {
      return (
        <div>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {slide.map((item, index) => {
                return (
                  <div key={index} className="swiper-slide">
                    <img src={item} alt="轮播图" />
                  </div>
                );
              })}
            </div>
            {/* <!-- 如果需要分页器 --> */}
            {pagination && <div className="swiper-pagination" />}

            {/* <!-- 如果需要导航按钮 --> */}
            {navigation && (
              <>
                <div className="swiper-button-prev" />
                <div className="swiper-button-next" />
              </>
            )}

            {/* <!-- 如果需要滚动条 --> */}
            {scrollbar && <div className="swiper-scrollbar" />}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
  initSwiper() {
    //componentDidMount组件渲染后调用。。可以修改真实dom，只有在render渲染后才真的dom,new Swiper 第一个参数是dom对象，后面的是props选项
  var mySiwper=  new BaseSwiper(".swiper-container", {
      pagination: this.props.pagination
        ? {
            el: ".swiper-pagination"
          }
        : {},
      scrollbar: this.props.scrollbar
        ? {
            el: ".swiper-scrollbar"
          }
        : {},
      navigation: this.props.navigation
        ? {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        : {},
      loop: this.props.loop ? true : false
    });
  }
  componentDidUpdate() {
    if(this.mySiwper){
      this.mySiwper.destory();
    }
    this.initSwiper();
  }
  
}
//设置swiper的props的校验
Swiper.protoTypes = {
  //设置是否需要分页器，布尔值
  pagination: PropTypes.bool,
  loop: PropTypes.bool, //是否循环
  navigation: PropTypes.bool, //是否需要导航按钮
  scrollbar: PropTypes.bool, //是否需要滚动条
  slide: PropTypes.arrayOf(PropTypes.string).isRequired //必须是数组，且必传
};
//设置swiper中默认值
Swiper.defaultProps = {
  pagination: false,
  loop: false,
  scrollbar: false,
  navigation: true
};
export default Swiper;

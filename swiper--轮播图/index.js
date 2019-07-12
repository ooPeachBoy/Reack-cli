//入口文件
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Swiper from "./components/swiper";

import "./components/swiper/base.css";

class App extends Component {
  state = {
    bannerList: []
  };
  render() {
    return (
      <div>
        <h4>卖座轮播</h4>
        <Swiper loop pagination slide={this.state.bannerList} />
      </div>
    )
  }
  getBannerList() {
    fetch("https://m.maizuo.com/gateway?type=2&cityId=110100&k=4580147", {
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15628471902680059593864"}',
        "X-Host": " mall.cfg.common-banner"
      }
    }).then(response =>
      response.json().then(res => {
        if (res.status === 0) {
          this.setState({
              bannerList: res.data.map(item => {
                return item.imgUrl 
            })
          });
        } else {
          alert(res.msg);
        }
      })
    );
    }
    componentDidMount() {
        this.getBannerList();
    }
}

ReactDOM.render(<App />, document.getElementById("root"));

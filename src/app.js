import React from "react";
import Header from "./components/header";
import InfoBody from "./components/infoBody";
import Footer from "./components/footer";
import "./app.less";

class App extends React.PureComponent {
  render() {
    return (
      <div id="home-page">
        <img src="https://s1cdn.mydio.vn/images/img_audio_book/2020/10/14/08/259_320_320.jpg"></img>
      </div>
    );
  }
}

export default App;


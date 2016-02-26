import React from "react";
import ReactDom from "react-dom";
import { Window, Content, PaneGroup ,Pane } from "react-photonkit";

import Header from "./header.jsx"
import Footer from "./footer.jsx";
import Sidebar from "./sidebar.jsx"

require('../index.scss');

ReactDom.render(
  <Window>
    <Header />
    <Content>
      <PaneGroup>
        <Sidebar />
        <Pane className="padded-more">
          Hello, Electron!!!
          <br/>
          {window.location.href}
          <br/>
          {__dirname}
          <br/>
          {process.versions.chrome}
          <br/>
          {process.versions.node}

          <video style={{height:200, width: 200}} id="camera" autoPlay={true}>
          </video>

          <webview src="http://www.github.com/" style={{width:640, height:480}}>
          </webview>
        </Pane>
      </PaneGroup>
    </Content>
    <Footer />
  </Window>
  , document.querySelector("#main"));

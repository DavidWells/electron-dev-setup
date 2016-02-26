import React from "react";
import { Pane, NavGroup, NavTitle, NavGroupItem } from "react-photonkit";
//var fs = require('fs');
//var test = fs.readFileSync('package.json', 'utf8');
var options = [
  {
    title: "Basic Notification",
    body: "Short message part"
  }
]

function doNotify(evt) {
    new Notification(options[0].title, options[0]);
}

class Sidebar extends React.Component {
  onSelect(index) {
    console.log(`sidebar clicked with ${index}`)
    new Notification(`New item clicked ${index}`, options[0]);
    document.querySelector('webview').src = 'http://www.github.com/';
    //navigateTo('http://www.github.com/');
  }

  render() {

    return (
      <Pane ptSize="sm" sidebar>

        <NavGroup activeKey={1} onSelect={this.onSelect}>
          <NavTitle>nav group icon &amp; text</NavTitle>

          <NavGroupItem eventKey={1} glyph="home" text="home" />
          <NavGroupItem eventKey={2} glyph="download" text="download" />
        </NavGroup>
      </Pane>
    );
  }
}

export default Sidebar;

import React from "react";
import { Toolbar, Actionbar, Button, ButtonGroup } from "react-photonkit";
import axios from 'axios'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     image: false
    };
  }

  _handleButtonClick(){
    console.log('clicked');
    var that = this;
    axios.get('https://api.github.com/users/DavidWells')
      .then(function(response){
        console.log(response.data);
        console.log(response.status);
        that.setState({
          image: response.data.avatar_url
        })
     });
  }
  render() {
    return (
      <Toolbar title="epp">
        <Actionbar>
          <ButtonGroup>
            <Button glyph="home" />
            <Button glyph="github" onClick={this._handleButtonClick.bind(this)} />
            { this.state.image && <img width="20" height="20" src={this.state.image}/>}
          </ButtonGroup>
        </Actionbar>

      </Toolbar>
    );
  }
}

export default Header;

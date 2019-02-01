import React, { Component } from 'react';

import Condition from './Condition'

class CurrentMoney extends Component {
constructor(props){
    super(props)
    this.state = {
        condition: 'loading data in console'
        // currency: ''
    }
}
componentDidMount () {
    const _url = "https://api.coinmarketcap.com/v2/ticker/?limit=20"
    fetch(_url).then(resp => resp.json())
    .then(newMoneyData => {
        console.log(newMoneyData)
        this.setState({
            // coinIcon: newMoneyData.coin[0].icon
        })
    })
}

  render() {
    return (
      <div>
        This is the Current Money Tracker
        <div>
            <Condition condition={this.state.condition}/> icon={this.state.coinIcon}
        </div>
      </div>
    );
  }
}

export default CurrentMoney;

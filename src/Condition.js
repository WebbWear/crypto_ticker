import React, { Component } from 'react';


class Condition extends Component{

    getIconUrl () {
        return `https://s2.coinmarketcap.com/static/img/coins/16x16/${this.props.icon}.png`
    }


    render () {
        return (
            <section>
                <img src={this.getIconUrl ()} />
                <h3>{this.props.icon}</h3>
            </section>

        )
    }
}

export default Condition
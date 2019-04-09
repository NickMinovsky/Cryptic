import React, { Component } from "react";
import "./App.css";
import axios from "axios";
let NumberFormat = require("react-number-format");
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptos: []
    };
  }
  AxiosLoad() {
    // loading the JSON with axios
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,EOS,LTC,XRP,BCH,TRX,ETC,ZEC&tsyms=USD"
      )
      .then(res => {
        const cryptos = res.data;
        this.setState({ cryptos: cryptos });
        console.log(this.state.cryptos.BTC);
      });
  }

  componentDidMount() {
    // mounting that data
    this.AxiosLoad();
  }
  componentDidUpdate() {
    setTimeout(
      function() {
        this.AxiosLoad();
      }.bind(this),
      3000
    );
  }
  state = {};
  render() {
    return (
      <div className="App">
        <header className="header">
          <i className="fab fa-bitcoin" /> Cryptic
        </header>
        <div className="main">
          {Object.keys(this.state.cryptos).map(key => (
            <div id="crypto-container">
              <span className="left">{key}</span>
              <span className="right">
                <NumberFormat
                  value={this.state.cryptos[key].USD}
                  displayType={"text"}
                  decimalprecision={2}
                  thousandSeparator={true}
                  prefix={"$"}
                />{" "}
              </span>
            </div>
          ))}
        </div>
        <div className="whatis">
          <h2>So what is, cryptocurrency?</h2>
          <p>
            A cryptocurrency is a digital or virtual currency that uses
            cryptography for security.
            <br /> <br />
            A cryptocurrency is difficult to counterfeit because of this
            security feature.
            <br />
            Many cryptocurrencies are decentralized systems based on blockchain
            technology, a distributed ledger enforced by a disparate network of
            computers.
            <br />A defining feature of a cryptocurrency, and arguably its
            biggest allure, is its organic nature; it is not issued by any
            central authority, rendering it theoretically immune to government
            interference or manipulation.
          </p>

          <h2>How does Cryptic works?</h2>
          <p>
            <span>Cryptic </span>uses a free public API provided by{" "}
            <a
              href="https://www.cryptocompare.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CryptoCompare
            </a>{" "}
            and displays the top cryptocurrencies value, with a 3 second refresh
            rate (so you can stay up to date).
          </p>
          <h5>
            made by <br />
            <a
              href="https://github.com/NickMinovsky"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nick Minovsky 2019
            </a>
          </h5>
        </div>
      </div>
    );
  }
}

export default App;

// loadMyAxios = () => {
//   axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD')
//     .then(res => {
//       const cryptos = res.data;
//       console.log(cryptos);
//       this.setState({ cryptos: cryptos });
//     })
// };

// componentDidMount() {
//   this.loadMyAxios();

// }

// componentDidUpdate() {
//   setTimeout(
//     function () {
//       this.loadMyAxios();
//     }
//       .bind(this),
//     3000
//   );

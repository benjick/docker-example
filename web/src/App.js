import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    fetching: false,
    res: {},
  }

  fetchData = async () => {
    this.setState({fetching: true})
    const result = await fetch('http://localhost:4000');
    const json = await result.json();
    console.log(json);
    setTimeout(() => {
      // Fake latency from server
      this.setState({
        res: json,
        fetching: false,
      })
    }, 500);
  }

  render() {
    const {fetching} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.fetchData} disabled={fetching}>
            {fetching ? 'Fetching...' : 'Fetch from backend'}
          </button>
          <textarea readOnly value={JSON.stringify(this.state.res, null, 4)} style={{width: 500}} rows="5"></textarea>
        </header>
      </div>
    );
  }
}

export default App;

import './style/App.css';
import Section from './Components/Section';
import React from "react";
import { client } from "./client";
import Login from './Components/Login';
import Header from './Components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: []
    }
  }

  componentDidMount() {
    client.getEntries({ content_type: 'field' }).then(response => this.setState({fields: response.items})).catch(console.error);
  }

  componentDidUpdate() {
    client.getEntries({ content_type: 'field' }).then(response => this.setState({fields: response.items})).catch(console.error);
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Login />
        <br/>
        <Section title={"Education"} fields={this.state.fields} />
        <br/>
        <Section title={"Experience"} fields ={this.state.fields} />
        <br/>
        <Section title={"Additional Studies"} fields={this.state.fields} />
      </div>
    );
  }
}

export default App;

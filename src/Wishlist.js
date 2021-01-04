import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import { Layout } from './Components/Layout';
import { Footer } from './Components/Footer';
import Title from './Components/Title';
import CollectionTable from './Components/CollectionTable'

export default class App extends Component {

  componentDidMount() {
    fetch('http://localhost:8000/api/v1/full')
    .then(res => res.json())
    .then((data) => {
        this.setState({ collection: data })
    })
    .catch(console.log)
  }

  state = { 
    collection: []
  }

  render() {
    return(
      <>
        <Router>
          <Title />
          <NavigationBar />
          <Layout>
            <CollectionTable collection={this.state.collection} />
          </Layout>
          <Footer />
        </Router>
      </>
    );
  }
};

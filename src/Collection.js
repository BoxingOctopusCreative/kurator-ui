import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import { Layout } from './Components/Layout';
import { Footer } from './Components/Footer';
import Title from './Components/Title';
import CollectionTable from './Components/CollectionTable'
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';

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
          <MDBContainer>
            <MDBRow top></MDBRow>
            <MDBRow middle>
              <MDBCol><CollectionTable collection={this.state.collection} /></MDBCol>
              <MDBCol></MDBCol>
            </MDBRow>
            <MDBRow bottom></MDBRow>
          </MDBContainer>
          <Layout>
          </Layout>
          <Footer />
        </Router>
      </>
    );
  }
};

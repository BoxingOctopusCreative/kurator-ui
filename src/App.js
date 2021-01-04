import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
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
        <Title />
        <NavigationBar />
        <MDBContainer fluid>
          <MDBRow start></MDBRow>
          <MDBRow center>
            <MDBCol>
              <Layout>
                <CollectionTable collection={this.state.collection} />
              </Layout>
            </MDBCol>
            <MDBCol>
              <Layout></Layout>
            </MDBCol>
          </MDBRow>
          <MDBRow end></MDBRow>
        </MDBContainer>
        <Footer />
      </>
    );
  }
};

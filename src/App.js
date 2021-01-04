import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import NavigationBar from './Components/NavigationBar';
import { Layout } from './Components/Layout';
import { Footer } from './Components/Footer';
import Title from './Components/Title';
import CollectionTable from './Components/CollectionTable'
import FilterForm from './Components/FilterForm'

export default class App extends Component {

  componentDidMount() {
    fetch('http://localhost:8000/api/v1/collection')
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
          <MDBRow start>
            <MDBCol>
              <Layout>
                <CollectionTable collection={this.state.collection} />
              </Layout>
            </MDBCol>
            <MDBCol>
              <Layout>
                <FilterForm collection={this.state.collection} />
              </Layout>
            </MDBCol>
          </MDBRow>
          <MDBRow end></MDBRow>
        </MDBContainer>
        <Footer />
      </>
    );
  }
};

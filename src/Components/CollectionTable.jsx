import React from 'react';
import { MDBTable } from 'mdbreact'
import styled from 'styled-components';

const Styles = styled.div`
  .thead-light {
    background-color: black;
    color: white;
  }
  .section-title {
      padding-top: 25px;
  }
`

const CollectionTable = ({ collection }) => (
    <>
        <Styles>
            <h2 className="section-title">My Collection</h2>
            <MDBTable scrollY maxHeight="650px" bordered>
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Platform</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {collection.map((item) => (
                        <>
                            <tr>
                                <td>{item.TITLE}</td>
                                <td>{item.PLATFORM}</td>
                                <td>{item.STATUS}</td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </MDBTable>
        </Styles>
    </>
)

export default CollectionTable;
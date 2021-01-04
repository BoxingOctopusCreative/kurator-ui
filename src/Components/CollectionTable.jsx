import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact'
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
            <MDBTable scrollY maxHeight="600px" bordered>
                <MDBTableHead color="black" textWhite>
                    <tr>
                        <th scope="col">TITLE</th>
                        <th scope="col">PLATFORM</th>
                        <th scope="col">STATUS</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {collection.map((item) => (
                        <>
                            <tr>
                                <td>{item.TITLE}</td>
                                <td>{item.PLATFORM}</td>
                                <td>{item.STATUS}</td>
                            </tr>
                        </>
                    ))}
                </MDBTableBody>
            </MDBTable>
        </Styles>
    </>
)

export default CollectionTable;
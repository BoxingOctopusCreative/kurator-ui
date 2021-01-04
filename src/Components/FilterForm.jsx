import React from 'react';
import { MDBInput, MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .section-title {
        padding-top: 25px;
    }
`

const FilterForm = ({ collection }) => (
    <>
        <Styles>
            <MDBContainer>
                <h2 className="section-title">Search</h2>
                <Form>
                    <MDBInput label="Title" background />
                    <MDBRow>
                        <MDBCol>
                            <Form.Control as="select" multiple>
                                {collection.map((item) => (
                                    <>
                                        <option>{item.STATUS}</option>
                                    </>
                                ))}
                            </Form.Control>
                        </MDBCol>
                        <MDBCol>
                            <Form.Control as="select" multiple>
                                {collection.map((item) => (
                                    <>
                                        <option>{item.PLATFORM}</option>
                                    </>
                                ))}
                            </Form.Control>
                        </MDBCol>
                    </MDBRow>
                    <MDBBtn color="elegant">Submit</MDBBtn>
                </Form>
            </MDBContainer>
        </Styles>
    </>
);

export default FilterForm;
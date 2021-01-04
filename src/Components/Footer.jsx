import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .page-footer {
    background-color: black;
    color: gray;
  }

  .img-fluid {
    height: 70px;
    padding: 10px;
  }
`

export const Footer = () => (
    <div className="fixed-bottom">
        <Styles>
            <footer className="page-footer font-small pt4">
                <div className="footer-copyright text-center py-3">
                    © 2020 Copyright: <a href="https://retroreplaycanada.com/">Retro Replay Canada</a> | Design by <a href="https://boxingoctop.us">Boxing Octopus Creative</a>
                </div>
            </footer>
        </Styles>
    </div>
);

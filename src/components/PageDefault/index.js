import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 5%;
    padding-left: 5%;
    padding-right: 5%;

`;

function PageDefault (props) {
    return (
        <React.Fragment>
            <Menu />
                <Main>
                    {props.children}
                </Main>
            <Footer />
        </React.Fragment>
    );
}


export default PageDefault;
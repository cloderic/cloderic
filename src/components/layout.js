import React from 'react';
import styled from '@emotion/styled';
import Blockcode from './blockcode';
import Container from './container';
import Stylesheet from '../theme/stylesheet';
import { WHITE } from '../theme/colors';
import Link from './link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDXProvider } from '@mdx-js/react';
import {
  faCreativeCommons,
  faCreativeCommonsBy,
  faOsi
} from '@fortawesome/free-brands-svg-icons';

const mdxComponents = {
  a: Link,
  pre: ({ children }) => <>{children}</>,
  code: ({ children, className = '' }) => (
    <Blockcode language={className.replace(/language-/, '')}>
      {children}
    </Blockcode>
  )
};

const Main = styled.main``;

const Footer = styled(Container.withComponent('footer'))`
  color: ${WHITE};
  padding-top: 1rem;
  padding-bottome: 1rem;
  font-size: 0.7em;
`;

const Layout = ({ children }) => (
  <>
    <Stylesheet />
    <Main>
      <MDXProvider components={mdxComponents}>{children}</MDXProvider>
    </Main>
    <Footer>
      <p>
        <FontAwesomeIcon icon={faCreativeCommons} />{' '}
        <FontAwesomeIcon icon={faCreativeCommonsBy} /> The content on this
        website, of which Clodéric Mars is the author, is licensed under a{' '}
        <Link href="https://creativecommons.org/licenses/by/4.0/">
          Creative Commons Attribution 4.0 International license
        </Link>
        .
      </p>
      <p>
        <FontAwesomeIcon icon={faOsi} /> The sources of this website, of which
        Clodéric Mars is the author, are licensed under a{' '}
        <Link href="https://choosealicense.com/licenses/mit/">MIT License</Link>{' '}
        and are available on{' '}
        <Link href="https://github.com/cloderic/www">Github</Link>.
      </p>
    </Footer>
  </>
);

export default Layout;

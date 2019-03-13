import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Menu from './menu'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <Menu />
          <main>{children}</main>
          <footer style={{ textAlign: 'center' }}>
            <div
              style={{
                fontWeight: 'bold',
                fontSize: '10pt',
              }}
            >
              © {new Date().getFullYear()} Copyright Belal Saleh. All rights
              reserved.
            </div>
            <div
              style={{
                fontWeight: 'bold',
                fontSize: '8pt',
              }}
            >
              This site is built with {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
              and hosted on {` `}
              <a href="https://www.netlify.com">Netlify</a>.
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from 'react'
import './Layout.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

const Layout = (props) => {

  const { allProducts, setAllProducts } = props;

  return (
    <div className='layout' style={{
      
      display: "flex",
      flexDirection: "column",

    }}>
      
      <Nav
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
      <div className="layout-children">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
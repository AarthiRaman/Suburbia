import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import Selectbox from '../../../components/form/Selectbox' 

// This is a static page. It uses an array to hold data about the resources
// and maintain DRY
const Home = (props) => (
  <div>
    <h2 className={css(styles.header)}>Tell us about yourself</h2>
    <Selectbox kids={["a resident", "visiting briefly", "looking to move here"]}>
    I am 
    </Selectbox>
  </div>
)

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    lineHeight: '1.2',
    margin: '0 0 1.5rem'
  },
  lead: {
    fontSize: 18,
    lineHeight: '1.5',
    margin: '0 0 1.5rem',
    color: '#555'
  },
  body: {
    fontSize: '1rem',
    lineHeight: '1.5',
    margin: '0 0 1.5rem',
    color: '#555'
  },
  list: {
    fontSize: '1rem',
    listStyle: 'none',
    padding: 0
  },
  link: {
    display: 'block',
    fontSize: '1.25rem',
    margin: '0 0 .5rem',
    lineHeight: '1.5',
    fontWeight: 'bold',
    color: '#08c',
    opacity: 1,
    transition: '.2s opacity ease',
    textDecoration: 'none',
    ':hover': {
      opacity: 0.5,
      textDecoration: 'none'
    }
  }
})

export default Home

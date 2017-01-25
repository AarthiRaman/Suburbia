import React from 'react'
import { StyleSheet, css } from 'aphrodite'


const SelectBox = ({ children, kids }) => (
  <div className={css(styles.selectContainer)}>
    <h3>{children}</h3>
     {kids.map(function(kid, i){
        return <div className={css(styles.selectkids)}>{kid}</div>;
    })}

  </div>
)

SelectBox.propTypes = {
    children: React.PropTypes.Array
}

const styles = StyleSheet.create({
  selectContainer: {
    maxWidth: '70%',
    color: '#000',
    margin: '2rem auto',
    border: '1px solid #DEDEDE'
  },
  selectkids: {
    padding: '10px',
    borderTop: '1px solid #DEDEDE'
  }
})

export default SelectBox

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class ListContacts extends Component {
   render() {
     return (
       <ol className="contact-list">
         {this.props.contacts.map((contact) => (
		 <li key={contact.id}>
		 {contact.name}
		 </li>
	 ))}	    
      </ol>
     )
   }
}

export default ListContacts

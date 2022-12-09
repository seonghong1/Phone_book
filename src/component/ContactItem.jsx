import React from 'react'
import { Col, Row } from 'react-bootstrap'

import style from './ContactItem.module.css'

const ContactItem = ({name, phoneNum}) => {
  return (
    <div className={style.box}>
      <Row>
        <Col md={2}>
          <img src='https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png' alt=''></img>
        </Col>
        <Col md={10} className={style.text}>
        <h4>{name}</h4>
        <p>{phoneNum}</p>
        </Col>
      </Row>
    </div>
  )
}

export default ContactItem
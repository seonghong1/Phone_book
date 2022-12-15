import React, { useState }  from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import style from './SearchBox.module.css'
import { useDispatch } from 'react-redux';
import { ImSearch } from 'react-icons/im';


const SearchBox = () => {
  const [keyword,setKeyword ] = useState()
  const dispatch = useDispatch()
  const searchByName = (e)=>{
      e.preventDefault()
      dispatch({type:"SEARCH_BY_NAME", payload:{keyword}})
      setKeyword("")
  }
 
  return (
    <form action="" className={style.form} onSubmit={searchByName}>
      <Row>
        <Col xs="9" md='9'>
          <Form.Control type="text" placeholder="이름을 입력해주세요!" value={keyword} onChange={(e)=>setKeyword(e.target.value)}/>
        </Col>
        <Col xs="3" md='3'>
          <Button variant="outline-light" type="submit">
            <ImSearch />
          </Button>
        </Col>
      </Row>
    </form>
  )
}

export default SearchBox
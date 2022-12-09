import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';

const ContactForm = () => {

    const [name, setName] = useState('')
    const [phoneNum, setPhoneNum] = useState("");

    //reducer로 넘겨줄 action이다.
    const dispatch = useDispatch()
    const addContact = (e)=>{
        e.preventDefault()
        dispatch({ // reducer함수로 던져줄 action
            type: 'ADD_CONTACT', //type의 title은 대문자로 작성해준다 (가시성 증가).
            payload:{name, phoneNum} //reducer로 던져줄 state이다
        })
        setName("") // input에 value값을 지정해줘야 적용이 된다.
        setPhoneNum("")
    }

    return (
        <div>
            <Form onSubmit={addContact}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="text" placeholder="이름을 입력해주세요!" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>전화번호</Form.Label>
                    <Form.Control type="text" placeholder="010-0000-0000" value={phoneNum} onChange={(e)=>setPhoneNum(e.target.value)}/>
                </Form.Group>
                <Button variant="outline-light" type="submit">
                    저장
                </Button>
            </Form>
        </div>
    )
}

export default ContactForm
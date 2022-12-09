import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './App.module.css';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

function App() {
  return (
    <div className={style.all_wrap}>
      <h1>PHONE BOOK</h1>
      <Container fluid="md" >
        <Row className='containers '>
          <Col md={6} xs={12} id={style.form} className='mb-3'><ContactForm /></Col>
          <Col md={6} xs={12} id={style.list} className=''><ContactList /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

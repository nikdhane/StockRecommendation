import React , { useState }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import SearchStock from '../SearchStock/SearchStock';
import '../DaashBoard/Dashboard.css';
import Recommendations from '../Recommendations/Recommendations';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap grid components
import { Provider } from 'react-redux';
import store from '../redux/store';

const Dashboard = () => {
    
  return (
    <Provider store={store}>
    <Container>
      <Row>
        <Col>
          <SearchStock />
        </Col>
        <Col>
          <Recommendations  />
        </Col>
      </Row>
    </Container>
    </Provider>
  );
};

export default Dashboard;






import React , { useState }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import SearchStock from '../SearchStock/SearchStock';
import Recommendations from '../Recommendations/Recommendations';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap grid components

const Dashboard = () => {
    const [receivedData, setReceivedData] = useState([]);
    
  const handleSelectedStock = (data) => {
    setReceivedData(data);
  };
  return (
    <Container>
      <Row>
        <Col>
          <SearchStock updatedSelectedStockDetails={handleSelectedStock}/>
        </Col>
        <Col>
          <Recommendations receivedData={receivedData} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;





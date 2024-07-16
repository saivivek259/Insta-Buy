  import  Carousel  from 'react-bootstrap/Carousel';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';

  import CarouselOneImg from '../assets/1.png';
  import CarouselTwoImg from '../assets/4.png';
  import CarouselThreeImg from '../assets/5.png';

  import CompanyOneImg from '../assets/company-1.png';
  import CompanyTwoImg from '../assets/company-2.png';
  import CompanyThreeImg from '../assets/company-3.png';
  import CompanyFourImg from '../assets/company-4.png';
  import CompanyFiveImg from '../assets/company-5.png';
  import CompanySixImg from '../assets/company-6.png'
  import { Button } from 'react-bootstrap';
  import { useNavigate } from 'react-router-dom';

 export default function Home({user}) {
    const navigate = useNavigate();

    const handleCTAClick = () => {
        if (user) {
            navigate('/products');
        } else {
            navigate('/login')
        }
    }
    return(
        <div className='home-container'>
               <Carousel>
                <Carousel.Item>
                    <Row>
                        <Col>
                        <div style={{padding: 200}}>
                            <h1 style={{fontWeight: 700}}> <i>SHOP WITH UTMOST</i></h1>
                            <h1 style={{color: '#216ad9', fontWeight: 700}}> <i>STYLE</i></h1>
                            <h3 style={{marginBottom: 20}}>Shop with latest trendy Products</h3>
                            <div style={{marginBottom: 20}}>
                                <Button style={{width: 250}} onClick={handleCTAClick} >Browse Products</Button>
                            </div>
                            <div>
                              <h4>Products are available From : </h4>
                              <img src={CompanyOneImg} style={{ height: 50}}/>
                              <img src={CompanyTwoImg} style={{ height: 50}}/>
                              <img src={CompanyThreeImg} style={{ height: 50}}/>
                              <img src={CompanyFourImg} style={{ height: 50}}/>
                              <img src={CompanyFiveImg} style={{ height: 50}}/>
                              <img src={CompanySixImg} style={{ height: 50}}/>
                            </div>
                        </div>
                        </Col>
                        <Col>
                        <img src={CarouselOneImg} style={{height: '80vh'}}/>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                        <div style={{padding: 200}}>
                            <h1 style={{fontWeight: 700}}> <i>SHOP WITH UTMOST</i></h1>
                            <h1 style={{color: '#216ad9', fontWeight: 700}}> <i>STYLE</i></h1>
                            <h3 style={{marginBottom: 20}}>Shop with latest trendy Products</h3>
                            <div style={{marginBottom: 20}}>
                                <Button style={{width: 250}}  onClick={handleCTAClick}>Browse Products</Button>
                            </div>
                            <div>
                              <h4>Products are available From : </h4>
                              <img src={CompanyOneImg} style={{ height: 50}}/>
                              <img src={CompanyTwoImg} style={{ height: 50}}/>
                              <img src={CompanyThreeImg} style={{ height: 50}}/>
                              <img src={CompanyFourImg} style={{ height: 50}}/>
                              <img src={CompanyFiveImg} style={{ height: 50}}/>
                              <img src={CompanySixImg} style={{ height: 50}}/>
                            </div>
                        </div>
                        </Col>
                        <Col>
                        <img src={CarouselTwoImg} style={{height: '80vh'}}/>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                        <div style={{padding: 200}}>
                            <h1 style={{fontWeight: 700}}> <i>SHOP WITH UTMOST</i></h1>
                            <h1 style={{color: '#216ad9', fontWeight: 700}}> <i>STYLE</i></h1>
                            <h3 style={{marginBottom: 20}}>Shop with latest trendy Products</h3>
                            <div style={{marginBottom: 20}}>
                                <Button style={{width: 250}} onClick={handleCTAClick}>Browse Products</Button>
                                </div>
                                <div>
                              <h4>Products are available From : </h4>
                              <img src={CompanyOneImg} style={{ height: 50}}/>
                              <img src={CompanyTwoImg} style={{ height: 50}}/>
                              <img src={CompanyThreeImg} style={{ height: 50}}/>
                              <img src={CompanyFourImg} style={{ height: 50}}/>
                              <img src={CompanyFiveImg} style={{ height: 50}}/>
                              <img src={CompanySixImg} style={{ height: 50}}/>
                            </div>
                        </div>
                        </Col>    
                        <Col>
                        <img src={CarouselThreeImg} style={{height: '80vh'}}/>
                        </Col>
                    </Row>
                </Carousel.Item>
               </Carousel>
        </div>
    )
 }
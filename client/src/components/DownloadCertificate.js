import React from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PDFFile from './GenerateCertificate'
import { Card, Container, Row, Col } from 'react-bootstrap';


const DownloadCertificate = () => {

    let user = {
        name: "JpMorgan",
        fund: 12000,
        badges: 5
    }
    return (


        <div className='mt-5' >
            <h1 className='text-center mb-5'>My Achievements</h1>
            <Container>
                <Row>
                    <Col md={4}>
                        <Card style={{ backgroundColor: "#F7E6C4" }}>

                            <Card.Body>
                                <Card.Title>  <i class="fas fa-feather"></i>
                                    {"        "} Badges Earned</Card.Title>
                                <Card.Text className='text-center'>
                                    {user.badges}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ backgroundColor: "#F7E6C4" }}>

                            <Card.Body>
                                <Card.Title><i class="fas fa-file"></i>{"     "}Letter of Recongnition</Card.Title>
                                <Card.Text>
                                    {
                                        user.badges > 3 ?
                                            <div>
                                                <PDFDownloadLink document={<PDFFile />} fileName="Certificate" className='m-5 text-center'>
                                                    {({ loading }) => (loading ? <button className='m-5 text-center'>Loading Documnet..</button> : "Download Your Certificate")}
                                                </PDFDownloadLink>
                                                
                                            </div>
                                            :
                                            <h5>Not yet Unlocked</h5>
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ backgroundColor: "#F7E6C4" }}>

                            <Card.Body>
                                <Card.Title><i class="fas fa-certificate"></i>{"     "}
                                    Number of Certificate</Card.Title>
                                <Card.Text  className='text-center'>
                                    {user.badges}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className='mt-5'>
                        <Card style={{ backgroundColor: "#F7E6C4" }}>

                            <Card.Body>
                                <Card.Title><i class="fas fa-circle"></i>{"     "}Number of campaigns</Card.Title>
                                <Card.Text className='text-center'>
                                  3
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/*         
        // <div className=''>
        //     <h1 className='text-center text-primary bg-dark'>Congractulations!! You unlocked Certificate Yay!!</h1>

        //     <h5 className='mt-5 mb-5'>
                
        //     </h5>
        //     <PDFDownloadLink document={<PDFFile />} fileName="Certificate" className='m-5 text-center'>
        //         {({ loading }) => (loading ? <button className='m-5 text-center'>Loading Documnet..</button> : "Click Here To Download Your Certificate")}
        //     </PDFDownloadLink>
        //     {user.badges >= 3 ?
        //         <div>
        //             <h1>You have unlocked Letter of Recongnition</h1>
        //             <PDFDownloadLink document={<PDFFile />} fileName="Certificate" className='m-5 text-center'>
        //                 {({ loading }) => (loading ? <button className='m-5 text-center'>Loading Documnet..</button> : "Click Here To Download Your Certificate")}
        //             </PDFDownloadLink>

        //         </div>
        //         :
        //         <div>
        //             <h1>Earn more {3 - user.badges} to unlock Letter of Recongnition</h1>
        //         </div>} */}


        </div >
    )
}

export default DownloadCertificate
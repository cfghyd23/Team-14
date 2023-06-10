import React from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PDFFile from './GenerateCertificate'
const DownloadCertificate = () => {


    return (
        <div className=''>
            <h1 className='text-center text-primary bg-dark'>Congractulations!! You unlocked Certificate Yay!!</h1>

            <h5 className='mt-5 mb-5'>
                Dear [Volunteer's Name],

                On behalf of Marpu NGO, we would like to extend our heartfelt appreciation for your exceptional commitment and the profound impact you have made as a volunteer. Your selfless contributions have played a pivotal role in transforming lives and fostering positive change within our community.

                We are immensely grateful for your unwavering dedication and the countless hours you have devoted to supporting our mission. Your passion and enthusiasm have inspired us all, and your efforts have left an indelible mark on the lives of those we serve.

                Your willingness to go above and beyond has made a significant difference in the lives of individuals in need. Whether it was lending a helping hand, sharing your expertise, or raising awareness for our cause, your contributions have made a lasting impact and brought hope to those facing challenging circumstances.

                The impact of your volunteer work cannot be overstated. Your kindness, empathy, and unwavering support have touched the hearts of many, and you have become an integral part of our Marpu NGO family. Your generosity and willingness to make a difference have set an example for others to follow.

                We would like to express our deepest gratitude for your invaluable support and commitment. Your involvement has been instrumental in advancing our mission and empowering those who need it most. Together, we are working towards building a brighter future, and your dedication has been a driving force behind our success.

                Thank you once again for being an extraordinary volunteer and for making a profound impact through your actions. We are immensely grateful to have you as part of our Marpu NGO team, and we look forward to continuing our journey of creating positive change together.

                With heartfelt appreciation,

                [Your Name]
                Marpu NGO
            </h5>
            <PDFDownloadLink document={<PDFFile />} fileName="Certificate" className='m-5 text-center'>
                {({ loading }) => (loading ? <button className='m-5 text-center'>Loading Documnet..</button> : "Click Here To Download Your Certificate")}
            </PDFDownloadLink>

        </div>
    )
}

export default DownloadCertificate
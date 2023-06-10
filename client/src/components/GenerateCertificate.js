import React from 'react';
import { PDFViewer, Document, Page, Text, View,  Image } from '@react-pdf/renderer';

// Background image for the certificate
// import backgroundImage from './certificate-background.jpg';



const PDFFile = () => {
    return(
 
    <Document>
      <Page >
        <View>
          <Text >Certificate of Appreciation</Text>
        </View>
        <View>
          <Text >Presented to:</Text>
          <Text>Sunil Manthena</Text>
        </View>
        <View>
          <Text >
            In recognition and sincere appreciation for your dedicated service and commitment to the not-for-profit organization.
          </Text>
        </View>
        <View>
          <Text>Thank you for making a difference!</Text>
        </View>
      </Page>
    </Document>)
};

export default PDFFile;

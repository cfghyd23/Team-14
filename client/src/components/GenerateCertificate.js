import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Background image for the certificate
// import backgroundImage from './certificate-background.jpg';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    fontFamily: 'Helvetica',
    padding: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#606C5D',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#606C5D',
  },
  message: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 30,
    color: '#606C5D',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  },
});

const PDFFile = () => (
  <PDFViewer style={{ width: '100%', height: '100vh' }}>
    <Document>
      <Page size="A4" >
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
    </Document>
  </PDFViewer>
);

export default PDFFile;

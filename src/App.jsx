import React from "react";
import ReactPDF, {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  invoice: {
    fontSize: 12,
    marginBottom: 5,
    borderBottom: "1px solid #ccc",
  },
});

// Create Document Component
const MyDocument = ({ invoices, username }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>All Invoices</Text>
      <View style={styles.section}>
        {invoices.map((invoice, index) => (
          <Text key={index} style={styles.invoice}>
            {invoice.company} | {invoice.totalAmount} | {invoice.mobile} |{" "}
            {new Date(invoice.createdAt).toLocaleDateString()}
          </Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text>
          Total Revenue:{" "}
          {invoices.reduce((acc, invoice) => acc + invoice.totalAmount, 0)}
        </Text>
        <Text>Report Created by {username}</Text>
      </View>
    </Page>
  </Document>
);

// Main Component
const MyComponent = () => {
  const invoices = [
    {
      company: "Company A",
      totalAmount: 100,
      mobile: "1234567890",
      createdAt: new Date(),
    },
    {
      company: "Company B",
      totalAmount: 200,
      mobile: "0987654321",
      createdAt: new Date(),
    },
  ];
  const username = "Shreeraj";

  return (
    <div>
      <div>hii i am rect</div>
      <PDFDownloadLink
        document={<MyDocument invoices={invoices} username={username} />}
        fileName="invoices.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default MyComponent;

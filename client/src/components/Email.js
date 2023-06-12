import emailjs from "emailjs-com";

const sendEmail = () => {
  const templateParams = {
    to_email: "recipient@example.com",
    from_name: "Your Name",
    message: "Hello, this is a test email!",
  };

  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams, "YOUR_USER_ID")
    .then((response) => {
      console.log("Email successfully sent!", response);
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
    });
};
//   <button onClick={sendEmail}>Send Email</button>

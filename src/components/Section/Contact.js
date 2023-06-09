import Form from "react-bootstrap/Form";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
const styles = {
  background: {
    background: "linear-gradient(#393646, #4F4557)",
  },
  textColor: {
    color: "#F4EEE0",
  },
  inputBody: {
    background: "#F4EEE0",
  },
};

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    let validEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if (e.target.user_email.value.match(validEmail)) {
      emailjs
        .sendForm(
          "service_eqieydm",
          "contact_form",
          form.current,
          "Cgfd4k93BDcCdLsfm"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.user_name.value = "";
      e.target.user_email.value = "";
      e.target.message.value = "";
    } else {
      alert("Please enter a valid email address!");
    }
  };
  // useEffect(() => {
  //   document.title = "Contact Me";
  // }, []);

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [error, setError] = useState("");

  // const handleInputChange = (e) => {
  //   const { target } = e;
  //   const inputType = target.name;
  //   const inputValue = target.value;

  //   if (inputType === "email") {
  //     setEmail(inputValue);
  //   } else if (inputType === "firstName") {
  //     setFirstName(inputValue);
  //   } else if (inputType === "lastName") {
  //     setLastName(inputValue);
  //   }
  // };

  // const validate = (e) => {
  //   e.preventDefault();

  //   if (
  //     !email.match(
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     )
  //   ) {
  //     document
  //       .getElementById("formEmail")
  //       .setAttribute("class", "form-control border border-danger");
  //     return;
  //   } else if (
  //     email.match(
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     )
  //   ) {
  //     document.getElementById.setAttribute("class", "form-control");

  //     return;
  //   }
  // };

  // const formErrors = () => {
  //   const { firstName, lastName, message } = Form;
  //   const newErrors = {};

  //   if (!firstName || firstName === "")
  //     newErrors.name = "First name cannot be blank";
  //   else if (!lastName || lastName === "")
  //     newErrors.name = "Last name cannot be blank";
  //   else if (!message || message === "")
  //     newErrors.name = "Message cannot be blank";
  //   else return;

  //   return newErrors;
  // };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   const newErrors = formErrors();

  //   if (Object.keys(newErrors).length > 0) {
  //     setError(newErrors);
  //   }
  // };

  return (
    <div style={styles.background}>
      <form className="p-5" ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label style={styles.textColor}>Your Name</Form.Label>
          <Form.Control
            // value={firstName}
            // onChange={handleInputChange}
            name="user_name"
            type="text"
            placeholder="Enter Your Name"
            style={styles.inputBody}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label style={styles.textColor}>Last Name</Form.Label>
          <Form.Control
            // value={lastName}
            // onChange={handleInputChange}
            name="lastName"
            type="text"
            placeholder="Last Name"
            style={styles.inputBody}
          />
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label style={styles.textColor}>Email address</Form.Label>
          <Form.Control
            // value={email}
            // onChange={handleInputChange}
            // onClick={validate}
            name="user_email"
            type="email"
            placeholder="name@example.com"
            style={styles.inputBody}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label style={styles.textColor}>Message</Form.Label>
          <Form.Control
            name="message"
            type="message"
            as="textarea"
            rows={3}
            placeholder="What's on your mind?"
            style={styles.inputBody}
          />
        </Form.Group>
        <Button
          variant="secondary"
          size="lg"
          type="submit"
          // onClick={handleFormSubmit}
        >
          Submit Here
        </Button>
      </form>
    </div>
  );
}

export default Contact;

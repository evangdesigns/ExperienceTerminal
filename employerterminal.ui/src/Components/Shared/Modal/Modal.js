import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { submitContactForm } from '../../../helpers/data/forms';
import './Modal.scss';

class Modal extends React.Component {
  state = {
    formValues: {
      Name: "",
      Email: "",
      Message: ""
    },
    formErrors: {
      Name: "",
      Email: "",
      Message: ""
    },
    formValidity: {
      Name: false,
      Email: false,
      Message: false

    },
    isSubmitting: false
  }

  formSender = () => {
    const { formValues } = this.state;
    const formData = {
      name : formValues.Name,
      email: formValues.Email,
      message: formValues.Message
    }
    submitContactForm(formData)
  }

  handleChange = ({ target }) => {
    const { formValues } = this.state;
    formValues[target.name] = target.value;
    this.setState({ formValues });
    this.handleValidation(target);
  };

  handleValidation = target => {
    const { name, value } = target;
    const fieldValidationErrors = this.state.formErrors;
    const validity = this.state.formValidity;
    const isEmail = name === "Email";
    const isName = name === "Name";
    const isMessage = name === "Message";
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    validity[name] = value.length > 0;
    fieldValidationErrors[name] = validity[name]
      ? ""
      : `${name} is required and cannot be empty`;

    if (validity[name]) {
      if (isEmail) {
        validity[name] = emailTest.test(value);
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} should be a valid email address`;
      }
      if (isName || isMessage) {
        validity[name] = value.length >= 3;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} should be 3 characters minimum`;
      }
    }
    this.setState({
      formErrors: fieldValidationErrors,
      formValidity: validity
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isSubmitting: true });
    const { formValues, formValidity } = this.state;
    if (Object.values(formValidity).every(Boolean)) {
      this.formSender();
      console.log("Form is validated! Submitting the form...");
    } else {
      for (let key in formValues) {
        let target = {
          name: key,
          value: formValues[key]
        };
        this.handleValidation(target);
      }
      this.setState({ isSubmitting: false });
    }
  };

  componentDidMount() {
    document.body.style.overflowY = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflowY = "visible";
  }

  render() {
    const { formValues, formErrors, isSubmitting } = this.state;
    const { data } = this.props;
    const { title, toggleModal } = this.props;
    return (
      <div className="ModalBox">
        <div className="Content">
          <h3 className="closer" onClick={toggleModal}>X</h3>
          <h1 className="modalTitle">{data} Form</h1>
          {/* {this.formDisplay()} */}
{/* Contact Form */}
{isSubmitting ?
<div className="confirmation">
  <h1 className="text-center">GOT IT!!</h1>
  <p className="text-center"> Talk to you soon.</p>
  <h4 className="exit text-center" onClick={toggleModal}>CLOSE</h4>
</div>
:
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="Name"
                placeholder="Enter your name"
                onChange={this.handleChange}
                value={formValues.Name}
                className={`${formErrors.Name ? "is-invalid" : ""}`} />
              <div className="invalid-feedback">{formErrors.Name}</div>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="Email"
                type="email"
                placeholder="Enter email"
                onChange={this.handleChange}
                value={formValues.Email}
                className={`${formErrors.Email ? "is-invalid" : ""}`} />
              <div className="invalid-feedback">{formErrors.Email}</div>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control name="Message" as="textarea" rows={3}
                onChange={this.handleChange}
                value={formValues.Message}
                className={`${formErrors.Message ? "is-invalid" : ""}`} />
              <div className="invalid-feedback">{formErrors.Message}</div>
            </Form.Group>

            <Button bsPrefix="button-styles" type="submit">SUBMIT</Button>
          </Form>
  }
{/* End Contact Form */}
        </div>
      </div>
    );
  }
}

export default Modal;
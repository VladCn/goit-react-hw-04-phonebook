import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 400px;
  padding: 10px;
`;

const Name = styled.h3`
  font-size: 20px;
  margin: 0 0 10px 0;
  font-weight: normal;
`;
const Input = styled.input`
  margin-bottom: 15px;
`;
const Button = styled.button`
  width: 100px;
`;

export class Phonebook extends React.Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    this.props.onSubmit(this.state);
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          <Name>Name</Name>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <Name>Number</Name>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

Phonebook.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  handleChangePhone: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
};

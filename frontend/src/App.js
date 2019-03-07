import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import {sendMail} from './api/api.js';

import './scss/theme.scss';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.min.css';

import AppHeader from './components/app-header.jsx';
import AppForm from './components/app-form.jsx';
import AppOverview from './components/app-overview.jsx';

const form = {
  title: {
    id: "title",
    label: "Anrede:",
    type: "text",
    classes: ['form-group'],
    value: "",
    required: true
  },
  name: {
    id: "name",
    label: "Name:",
    type: "text",
    classes: ['form-group'],
    value: "",
    required: true
  },
  mail: {
    id: "mail",
    label: "E-Mail:",
    type: "email",
    classes: ['form-group'],
    value: "",
    required: true
  },
  enquiry: {
    id: "enquiry",
    label: "Anfrage:",
    type: "select",
    classes: ['form-group'],
    value: "Option 1",
    options: ['Option 1', 'Option 2', 'Option 3'],
    required: true
  },
  comment: {
    id: "comment",
    label: "Beschreibung:",
    type: "textarea",
    classes: ['form-group'],
    value: "",
    required: false,
    active: false
  },
  privacy: {
    id: "privacy",
    label: "Datenschutz Bestimmmungen",
    type: "checkbox",
    classes: ['form-group','form-check'],
    value: false,
    required: true
  },
  submit: {
    label: "Absenden",
    type: "button"
  }
}


class App extends Component {
  state = {
    form: form,
    formState: 0
  }

  onFormChange = (e) => {
    let form = this.state.form;
    form[e.target.id].value = e.target.value;

    // check enquiry for comment visibility
    if(e.target.id === "enquiry") {
      if(e.target.selectedIndex === 1) {
        form.comment.active = true;
        console.log('show comment');
      } else {
        form.comment.active = false;
        console.log('hide comment');
      }
    }

    // Checkbox Datenschutzbestimmung
    if(e.target.id === "privacy") {
      if(e.target.checked) {
        form.privacy.value = true;
      }else {
        form.privacy.value = false;
      }
    }

    this.setState({form});
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    let form = this.state.form;
    let data = {
      title:    form.title.value,
      name:     form.name.value,
      mail:     form.mail.value,
      enquiry:  form.enquiry.value,
      comment:  form.comment.value
    }
    if (this.validateForm(data)) sendMail(data);
  }

  validateForm = (data) => {
    return true;
  }

  render() {
    console.log('render', this.state.form.privacy.value);
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <AppHeader />
            <Route path={`/form`} render={ (props) => (
              <AppForm form={this.state.form}
                     onFormChange={this.onFormChange}
                     onFormSubmit={this.onFormSubmit}/>
            )}/>
            <Route path={`/overview`} render={ (props) => (
              <AppOverview />
            )}/>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;

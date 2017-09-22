// 'SurveyForm' shows a form for a user to add input
import _ from "lodash"; // Use map function here
import React, { Component } from "react";
// The `reduxForm` helper allows `redux-form` to communicate with our redux store.
// It is similar to the `connect` helper we used in the redux library.
// `Field` allows us to create any traditional html form elements.
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";

const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Email Body", name: "body" },
  { label: "Recipient List", name: "emails" }
];

class SurveyForm extends Component {
  // Helper function to render a 'SurveyField'
  renderFields() {
    return _.map(FIELDS, field => {
      return (
        <Field
          key={field.name}
          component={SurveyField}
          type="text"
          label={field.label}
          name={field.name}
        />
      );
    });
  }

  render() {
    // 'handleSubmit()' is added by `redux-form` as props.
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

// It takes only one argument object with the configurations how we want the form to behave.
export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
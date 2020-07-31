import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
//import * as actions from '../../actions';
import { signup } from '../../actions';

class Signup extends Component {

  onSubmitHandler = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmitHandler)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign Up!</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, {signup}),
  reduxForm({ form: 'signup' })
)(Signup);
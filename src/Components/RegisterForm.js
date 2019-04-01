import React from'react';
import { MyContext } from '../App'

export  class RegisterForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {
            FirstName:'',
            emailid:'',
            mobileno:'',
            password:'',
            ConfirmPassword:''

        },
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm= (inputVlaue)=>(e)=> {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["FirstName"] = "";
          fields["LastName"] = "";
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["password"] = "";
          fields["ConfirmPassword"] = "";
          // inputVlaue.SetUserName("ahmed from register");
          inputVlaue.SetUserName(this.state.fields.FirstName)   
          this.setState({fields:fields});
       
          console.log("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["FirstName"]) {
        formIsValid = false;
        errors["FirstName"] = "*Please enter your FirstName.";
      }

      if (typeof fields["FirstName"] !== "undefined") {
        if (!fields["FirstName"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["FirstName"] = "*Please enter alphabet characters only.";
        }
      }
      if (!fields["LastName"]) {
        formIsValid = false;
        errors["LastName"] = "*Please enter your LastName.";
      }

      if (typeof fields["LastName"] !== "undefined") {
        if (!fields["LastName"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["LastName"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter your mobile no.";
      }

      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter valid mobile no.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
      }
      }
      if (typeof fields["ConfirmPassword"] !== "undefined") {
        errors["ConfirmPassword"] = "*Please enter Matched password.";
        if (fields["ConfirmPassword"]!==fields["password"]) {
          formIsValid = false;
          errors["ConfirmPassword"] = "*Please enter Matched password.";
        
      }}
      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
<MyContext.Consumer>{
                    value => (
                        <React.Fragment>
    <div id="main-registration-container">
     <div className="register">
        <h3>Registration Form</h3>
        <form   name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm(value)} >
        <label>FirstName</label>
        <input type="text" name="FirstName" value={this.state.fields.FirstName} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.FirstName}</div>
        <label>LastName</label>
        <input type="text" name="LastName" value={this.state.fields.LastName} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.LastName}</div>
        <label>Email ID:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        <label>Mobile No:</label>
        <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.mobileno}</div>
        <label>Password</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
        <label>Confirm Password</label>
        <input type="password" name="ConfirmPassword" value={this.state.fields.ConfirmPassword} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.ConfirmPassword}</div>
        <input type="submit" className="button"  value="Register"/>
        </form>
        
    {/* {console.log(value.state.data)} */}
    </div>
</div>  
</React.Fragment>
                    )
                }
</MyContext.Consumer>
      );
  }


}

import React from'react'
import { MyContext } from '../App'

export  class LogInForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fields: {
            
            emailid:'',

            password:'',
            

        },
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserLoginForm = this.submituserLoginForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserLoginForm= (inputVlaue)=>(e)=> {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
         
          fields["emailid"] = "";

          fields["password"] = "";
         

          this.setState({fields:fields});
          console.log("loged in submitted");
          console.log(inputVlaue)
          console.log(this.state.fields.emailid);
       inputVlaue.SetUserName(this.state.fields.emailid)   
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;


    

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

   

     

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})/)) {
          formIsValid = false;
          errors["password"] = "*Please enter right password.";
      }
      }
     
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
     <div className="login">
        <h3>Welcome to Admin Panel</h3>
        <form   name="userRegistrationForm"  onSubmit= {this.submituserLoginForm(value)} >
        
        <label>Email ID:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
       
        <label>Password</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
       
        <input type="submit" className="button"  value="Log IN"/>
        </form>
    </div>
</div>
</React.Fragment>
                    )
                }
</MyContext.Consumer>
      );
  }


}

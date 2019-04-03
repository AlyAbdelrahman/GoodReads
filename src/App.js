import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { RegisterForm } from './Components/AdminComponent/RegisterForm'
import { LogInForm } from './Components/AdminComponent/LogInForm';
import { Navbar } from './Components/AdminComponent/Navbar';
import { AdminDashBoard } from './Components/AdminComponent/AdminDashBoard'
import {DisplayCategories} from './Components/UserComponent/Categories/list'
import {DisplayCategoryBooks} from './Components/UserComponent/Books/List'
import {BookDetails} from './Components/UserComponent/Books/bookdetails'
import {UserDashBoard} from './Components/AdminComponent/UserDashBoard'

export const MyContext = React.createContext();

class App extends Component {
  state = {
    UserInfo: [],
    Categories : {
        th: ['ID', 'Name','Action'],
        tbody: [
          {ID:1,Name: 'Engineering',deleted:false},
          {ID:2,Name: 'discover',deleted:false}         
     ]

    },
    Books : {
      th: ['ID', 'photo','Name','CategoryId','AuthorId','Action'],
      tbody: [
        {ID:1,photo: 'https://greenido.files.wordpress.com/2017/11/ray-dalio-principles-angled-book-ab1a2ff6c873144e545e21f9827a99a14d71bc635f6505ec17ee17bdf59ec742.png',Name:'Animals',CategoryId:1,AuthorId:1,deleted:false , description: "jfvjvjf 111111"},
        {ID:2,photo: 'https://greenido.files.wordpress.com/2017/11/ray-dalio-principles-angled-book-ab1a2ff6c873144e545e21f9827a99a14d71bc635f6505ec17ee17bdf59ec742.png',Name:'Building',CategoryId:2,AuthorId:2,deleted:false , description: "jfvjvjf 2222"},
        {ID:3,photo: 'https://greenido.files.wordpress.com/2017/11/ray-dalio-principles-angled-book-ab1a2ff6c873144e545e21f9827a99a14d71bc635f6505ec17ee17bdf59ec742.png',Name:'Programming',CategoryId:1,AuthorId:3,deleted:false , description: "jfvjvjf 33333"},             
   ]
  },
  Authors:{
    th:['ID' , 'photo' , 'FirstName' , 'LastName' , 'DateOfBirth', 'Action'],
    tbody:[
      {ID:1, photo:'https://greenido.files.wordpress.com/2017/11/ray-dalio-principles-angled-book-ab1a2ff6c873144e545e21f9827a99a14d71bc635f6505ec17ee17bdf59ec742.png' ,FirstName:'Ahmed', LastName:'Mourad' , DateOfBirth:'20/5/1885' , description:'author description 1',deleted:false},
      {ID:2, photo:'https://greenido.files.wordpress.com/2017/11/ray-dalio-principles-angled-book-ab1a2ff6c873144e545e21f9827a99a14d71bc635f6505ec17ee17bdf59ec742.png' ,FirstName:'omar', LastName:'taher' , DateOfBirth:'20/9/1975' , description:'author description 2',deleted:false},
      {ID:3, photo:'https://greenido.files.wordpress.com/2017/11/ray-dalio-principles-angled-book-ab1a2ff6c873144e545e21f9827a99a14d71bc635f6505ec17ee17bdf59ec742.png' ,FirstName:'mostafa', LastName:'monuir' , DateOfBirth:'26/9/1990' , description:'author description 3',deleted:false},
    ]
  },
   
  UserDashBoard:{
    th:['ID' , 'Name','Author', 'Rating' , 'AvgRating' ,'Shelve'],
    tbody :[
      {ID:1,Name:'Book1', Author:'Ahmed Mourad' ,Rating : '5 Star' , AvgRating:'4 Star'},
      {ID:1,Name:'Book2', Author:'Ahmed Mourad' ,Rating : '3 Star' , AvgRating:'3 Star'},
      {ID:1,Name:'Book3', Author:'Ahmed Mourad' ,Rating : '1 Star' , AvgRating:'0 Star'},
    ]
  }
  }


  SetUserName = (UserName) => {
    this.setState({ UserInfo: UserName });
  }
// ---------------------------Category----------------------------------
  DeleteCategory=(CategoryID)=>{
    const matchedIdCategory = this.state.Categories.tbody.find((item) => item.ID ===CategoryID);
    matchedIdCategory.deleted = true;
    this.setState( {})
  }

  EditCategory=(CategoryID, NewName)=>{
    const matchedIdCategory = this.state.Categories.tbody.find((item) => item.ID ===CategoryID);
    matchedIdCategory.Name = NewName;
    this.setState( {})
  }

 
AddCategory=(Category)=>{
 
  const {tbody}=this.state.Categories;
  this.setState({
    Categories: {
    ...this.state.Categories, 
    tbody: tbody.concat(Category)
  }
});
}
//--------------------------Books------------------------------------------

AddNewBook=(Book)=>{
  console.log('hello from add newbook')
  console.log(Book)
  const matchedCategory = this.state.Categories.tbody.find((item) => item.Name ===Book.CategoryId);
  const matchedCategoryId= matchedCategory.ID
  Book.CategoryId = matchedCategoryId;
  const {tbody}=this.state.Books;
  this.setState({
    Books: {
    ...this.state.Books, 
    tbody: tbody.concat(Book)
  }
});
}

DeleteBook=(BookID)=>{
  const matchedIdCategory = this.state.Books.tbody.find((item) => item.ID ===BookID);
  matchedIdCategory.deleted = true;
  this.setState( {})
}
///-----------------Authors-----------------------


AddNewAuthor=(Author)=>{
 
  const {tbody}=this.state.Authors;
  this.setState({
    Authors : {
    ...this.state.Authors, 
    tbody: tbody.concat(Author)
  }
});
}

DeleteAuthor=(AuthorID)=>{
  const matchedIdCategory = this.state.Authors.tbody.find((item) => item.ID ===AuthorID);
  matchedIdCategory.deleted = true;
  this.setState( {})
}

  render() {
    const value = {
      state: this.state,
      SetUserName: this.SetUserName,
      DeleteCategory :this.DeleteCategory,
      EditCategory:this.EditCategory,
      AddCategory:this.AddCategory,
      AddNewBook:this.AddNewBook,
      DeleteBook:this.DeleteBook,
      DispalyCategoryBooks:this.DispalyCategoryBooks,
      DeleteAuthor:this.DeleteAuthor,
      AddNewAuthor:this.AddNewAuthor


    };
    return (
      <MyContext.Provider value={value}>

        <>

          <div className="App">
            <Router>
              <Navbar />
              <UserDashBoard/>
              <div className="PageContainer">

                <Switch>

                  <Route path="/" exact component={RegisterForm} />
                  <Route path="/login" exact component={LogInForm} />
                  <Route path="/Admin" exact component={AdminDashBoard} />
                  <Route path="/DisplayCategories" exact component={DisplayCategories} />
                  <Route path="/displaybooks/:id" exact component={DisplayCategoryBooks} />
                  <Route path="/BookDetails/:id" exact component={BookDetails} />
                  
                  BookDetails
                </Switch>
              </div>
            </Router>
          </div>
        </>
      </MyContext.Provider>
    );
  }
}

export default App;

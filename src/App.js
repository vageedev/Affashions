import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';

import AddProducts from './components/Products/addProducts';
import AddWishList from './components/WishList/addWishList';
import DisplayProducts from './components/Products/displayProducts';
import WishList from './components/WishList/wishList';
import AddReviews from './components/Reviews/addReviews';
import DisplayReviews from './components/Reviews/displayReviews';
import UpdateReviews from './components/Reviews/updateReviews';

class App extends Component{
    render() {
        return(
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={'/'} className="navbar-brand">
                            Fashion Store
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">

                                <li className="nav-item">
                                    <Link to={'/create'} className="nav-link">
                                        <svg className="bi bi-plus-circle-fill" width="1em" height="1em"
                                             viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
                                        </svg>
                                        Add Products
                                    </Link>
                                </li>


                                <li className="nav-item">
                                    <Link to={'/ind'} className="nav-link">
                                        <svg className="bi bi-grid-fill" width="1em" height="1em" viewBox="0 0 16 16"
                                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
                                        </svg>
                                        Products
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={'/index'} className="nav-link">
                                        <svg className="bi bi-bookmarks-fill" width="1em" height="1em"
                                             viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12l-5-3-5 3V4z"/>
                                            <path
                                                d="M14 14l-1-.6V2a1 1 0 0 0-1-1H4.268A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v12z"/>
                                        </svg>
                                        Wish List
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={'/view'} className="nav-link">
                                        <svg className="bi bi-chat-square-quote-fill" width="1em" height="1em"
                                             viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm7.194 2.766c.087.124.163.26.227.401.428.948.393 2.377-.942 3.706a.446.446 0 0 1-.612.01.405.405 0 0 1-.011-.59c.419-.416.672-.831.809-1.22-.269.165-.588.26-.93.26C4.775 7.333 4 6.587 4 5.667 4 4.747 4.776 4 5.734 4c.271 0 .528.06.756.166l.008.004c.169.07.327.182.469.324.085.083.161.174.227.272zM11 7.073c-.269.165-.588.26-.93.26-.958 0-1.735-.746-1.735-1.666 0-.92.777-1.667 1.734-1.667.271 0 .528.06.756.166l.008.004c.17.07.327.182.469.324.085.083.161.174.227.272.087.124.164.26.228.401.428.948.392 2.377-.942 3.706a.446.446 0 0 1-.613.01.405.405 0 0 1-.011-.59c.42-.416.672-.831.81-1.22z"/>
                                        </svg>
                                        Reviews
                                    </Link>
                                </li>


                            </ul>
                        </div>
                    </nav><br />

                    <Switch>
                        <Route exact path = '/create' component = {AddProducts} />
                        <Route exact path = '/edit/:id' component = {AddWishList} />
                        <Route exact path = '/revs/:id' component = {AddReviews} />
                        <Route exact path = '/ind' component = {DisplayProducts} />
                        <Route exact path = '/index' component = {WishList} />
                        <Route exact path = '/view' component = {DisplayReviews} />
                        <Route exact path = '/n/:id' component = {UpdateReviews} />
                    </Switch>
                </div>
            </Router>
        );
    }
}


export default App;




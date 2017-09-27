import React from 'react';

// IndexRoute exposes root path at '/'
import { Route, IndexRoute } from 'react-router';

// Always load App Component composed by passing nested Child Component based on routing
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage.js';
import ManageCoursePage from './components/course/ManageCoursePage.js';
import CoursesPage from './components/course/CoursesPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="courses" component={CoursesPage}/>
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);

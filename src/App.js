
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogHeader from './components/personal blog/blogHeader';
import './App.css'
import BasicExample from './components/personal blog/blogHeader';
import AppIntro from './components/personal blog/intro';
import AppAbout from './components/personal blog/appAbout';
import AppSkills from './components/personal blog/appSkill';
import AppCrosual from './components/personal blog/appCrosual';
import AppEducation from './components/personal blog/appEducation';
import AppFooter from './components/personal blog/appFooter';

export default function App () { 
  return(
     <div className='App'>
      <header id='header'>
        <BasicExample/>
      </header>
      <main>
        <AppIntro/>
        <AppAbout/>
        <AppSkills/>
        <AppCrosual/>
        <AppEducation/>
      </main>
      <footer>
        <AppFooter/>
      </footer>
     </div>
  )
}
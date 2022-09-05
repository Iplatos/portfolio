import './App.css';
import Header from "./Header/Header";
import Main from "./main/Main";
import Skills from "./Skills/Skills";
import MyProjects from "./MyProjects/MyProjects";
import Accept from "./Accept/Accept";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <Accept/>
            <Contacts/>
            <Footer/>

        </div>
    );
}

export default App;

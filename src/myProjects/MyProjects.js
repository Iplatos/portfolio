import React from 'react';
import style from "./MyProjects.module.scss"
import styleContainer from "../common/styles/Container.module.scss";
import MyProject from "../myProject/MyProject";
import Title from "../common/Components/Title/Title";
import todoImage from "./../assets/image/todoList.png"
import Cards from "./../assets/image/cards.jpg"
import Zoom from 'react-reveal/Zoom';
import CardsRTK from "./../assets/image/cardsRTK.jpg"
import pizzaJPG from "./../assets/image/pizza.jpg"


const MyProjects = () => {
    const social = {
        backgroundImage: `url(${todoImage})`,

    }
    const todos = {
        backgroundImage: `url(${Cards})`,
    }
    const cards = {
        backgroundImage: `url(${CardsRTK})`,
    }
    const pizza = {
        backgroundImage: `url(${pizzaJPG})`,
    }
    return (
        <div id="Projects" className={style.myProjectBlock}>
            <div className={`${styleContainer.container} ${style.myProjects}  `}>
                <Title text={"My Projects"}/>
                <div className={style.projects}>
                    <Zoom><MyProject title={"Todo list"} style={social}
                                     link={"https://iplatos.github.io/todo_toolkit_thunk"}
                                     description={"SPA for managing to-do lists and their items."}
                                     GitHubLink={"https://github.com/Iplatos/todo_toolkit_thunk"}
                                     login={"free@samuraijs.com"}
                                     password={"free"}
                    /></Zoom>
                    <Zoom><MyProject title={"Cards"} style={todos}
                                     link={"https://artyomsamsonchik.github.io/friday-project/#/login"}
                                     description={"SPA for learning by cards."}
                                     GitHubLink={"https://github.com/ArtyomSamsonchik/friday-project"}
                                     login={"nya-admin@nya.nya"}
                                     password={"1qazxcvBG"}
                    /></Zoom>
                    <Zoom><MyProject title={"Cards"} style={cards}
                                     link={"https://cards-hunzah.vercel.app/"}
                                     description={"SPA for training using cards. Made using RTK Query"}
                                     GitHubLink={"https://github.com/hunzah/Cards"}
                                     login={"petrvasilev011@gmail.com"}
                                     password={"12345"}
                    /></Zoom>
                    <Zoom>
                    <MyProject title={"Pizza"} style={pizza}
                                                  link={"https://pizza-ccli-hg67z3b3j-platonovs-projects.vercel.app/"}
                                                  description={"SPA for ordering pizza . Made using RTK Query, TypeScript,React Router v6 "}
                                                  GitHubLink={"https://github.com/Iplatos/pizza"}
                                                  login={"-"}
                                                  password={"-"}
                /></Zoom>
                </div>
            </div>

        </div>
    );
};

export default MyProjects;
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import React from "react";
import MyAvatar from "../../../components/MyAvatar";
import RouteView from "../../../Layout/RouteView";
import { useStyles } from "./styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

interface StringKeyIndexed {
  [key: string]: string[];
}
const TECHNOS: StringKeyIndexed = {
  "J'utilise quotidiennement": [
    "Javascript",
    "React JS",
    "Redux",
    "Redux-saga",
    "Html",
    "CSS",
    "Git",
    "TDD (Test Driven Development)",
    "Tests",
    "Agile & Scrum",
  ],
  "J'ai étudié ou j'apprends actuellement": [
    "Node JS",
    "Express",
    "Mongo DB",
    "PHP",
    "SQL",
    "Laravel",
  ],
  "Je suis en contact avec sans les maîtriser": [
    "C#",
    "Entity Framework",
    "SQL Server",
  ],
};

const About = () => {
  const classes = useStyles();
  return (
    <RouteView>
      <div className={classes.root}>
        <div className={clsx(classes.section)}>
          <div className={clsx(classes.sectionContent)}>
            <Typography variant="h1" className={classes.title}>
              A propos
            </Typography>
            <div className={clsx(classes.row)}>
              <MyAvatar />
              <div>
                <Typography variant="overline" className={classes.hello}>
                  Hello world !
                </Typography>
                <Typography
                  className={classes.contrastText}
                  variant="body1"
                  gutterBottom
                >
                  Je m'appelle Valentin et je suis un développeur web à
                  dominante front-end depuis 1 an. Bienvenue sur mon site
                  personnel que j'ai développé dans le soucis d'une ergonomie
                  propre et d'une expérience originale. Vous pourrez y consulter
                  <NavLink to="/realisations"> mes projets</NavLink>, en
                  apprendre plus sur moi ou même me contacter !
                </Typography>
                <Typography
                  className={classes.contrastText}
                  variant="body1"
                  gutterBottom
                >
                  Je suis aujourd'hui en poste sur du développement front-end
                  dans une société qui développe son propre
                </Typography>
                <Typography
                  className={classes.contrastText}
                  variant="body1"
                  gutterBottom
                >
                  J'ai également travaillé dans le domaine de la communication
                  pendant 5 ans. C'est dans cette période que j'ai développé une
                  fibre créative, un goût pour la conception graphique et pour
                  le développement et la création d'interfaces web.
                </Typography>
                {/* <div className={classes.technologies}>
                  {Object.keys(TECHNOS).map((title) => (
                    <List
                      dense
                      subheader={
                        <Typography variant="caption">{`${title}...`}</Typography>
                      }
                      className={clsx(classes.root, classes.contrastText)}
                    >
                      {TECHNOS[title].map((techno) => (
                        <ListItem>
                          <ListItemText primary={techno} />
                        </ListItem>
                      ))}
                    </List>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </RouteView>
  );
};

export default About;

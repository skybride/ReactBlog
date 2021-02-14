import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import pic from './images/layout.PNG';
import hierarchyPic from './images/hierarchy.PNG';
import jsIndex from './images/jsIndex.PNG';
import appImport from './images/appImports.PNG';
import localStorageKey from './images/localStorageKey.PNG';
import define from './images/define.PNG';
import localStorageFunc from './images/localStorageFunc.PNG';
import appReturn from './images/appReturn.PNG';
import addFunc from './images/addFunc.PNG';
import toggleFunc from './images/toggleFunc.PNG';
import clearFunc from './images/clearFunc.PNG';
import toDoListImports from './images/toDoListImports.PNG';
import toDoListAll from './images/toDoListAll.PNG';
import toDoAll from './images/toDoAll.PNG';

import clsx from 'clsx';

import { 
    Avatar, 
    Card, 
    CardActions, 
    CardContent, 
    CardHeader, 
    CardMedia,
    Collapse,
    IconButton,
    Paper,
    Typography} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

    const useStyles = makeStyles((theme) => ({
        media: {
          marginLeft: '40%'

        },
        expand: {
          transform: 'rotate(0deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
        },
        expandOpen: {
          transform: 'rotate(180deg)',
        },
        avatar: {
          backgroundColor: red[500],
        },
      }));

const BlogPostDetails = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar 
                        aria-label="weekday" 
                        className={classes.avatar}>
                            S
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        
                    </IconButton>
                }
                title="React To Do list"
                subheader="February 13, 2021"
            />

            <CardMedia className={classes.media}> 
                <img src={pic} alt="todo-pic" />
            </CardMedia>
            <hr></hr>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Simple To Do list created with React that uses localStorage.
                </Typography>
            </CardContent>

            <CardActions>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography color="primary">Completed Hierarchy:</Typography>
                    <img src={hierarchyPic} alt="hierarchy-pic" />

                    <h3>Step 1: </h3> {/*change the font for this*/}
                    <Typography color="primary">Final Index.js</Typography>
                    <img src={jsIndex} alt="js-index-pic" />

                    <h3>Step 2: </h3>
                    <Typography color="primary">Complete Imports for App.js</Typography>
                    <img src={appImport} alt="app-imports-pic" />

                    <Paper elevation={2}>
                        <ul>
                            <Typography variant="body2" color="primary" component="p">
                                Further Breakdown
                            </Typography>
                            
                            <img src={define} alt="define-component-pic" />
                            <Typography variant="body2" color="textSecondary" component="p">
                                <ul>
                                    <li><b>todos:</b> object</li>
                                    <li><b>setTodos:</b> function</li>
                                    <li><b>useRef(): </b> a function used to access input value stored in variable <b>toDoName</b></li>
                                </ul>
                            </Typography>

                            <hr></hr> {/*fix width of this line*/}
                            <img src={appReturn} alt="app-component-return" />
                            <Typography variant="body2" color="textSecondary" component="p">
                                <ul>
                                    <li>Add details</li>
                                </ul>
                            </Typography>

                            <hr></hr>
                            <img src={addFunc} alt="add-function-pic" />
                            <Typography variant="body2" color="textSecondary" component="p">
                                <ul>
                                    <li>handleAdd function takes an event in as a parameter</li>
                                    <li>variable <b>name</b> will hold the value from <b>input ref</b></li>
                                    <li><b>setTodos</b> function uses spread operator to add to the current tasks and object with an id, name, complete key and values</li>
                                    <li><b>uuidv4:</b> a function from the uuid library to auto generate a random key</li>
                                    <li><b>toDoName.current.value=null:</b>resets input value to be empty after item has been added</li>
                                </ul>
                            </Typography>

                            <hr></hr>
                            <img src={toggleFunc} alt="toggle-function-pic" />
                            <Typography variant="body2" color="textSecondary" component="p">
                                <ul>
                                    <li>toggleToDo function takes in an id as a parameter</li>
                                    <li>variable <b>newToDos</b> will hold an array of the todos</li>
                                    <li>variable <b>todo</b> uses find array helper function to determine which id has bee selected</li>
                                    <li><b>todo.complete</b> is assigned to equal the opposite of it's current value</li>
                                    <li>call <b>setTodos</b> function passing in the newTodos</li>
                                </ul>
                            </Typography>

                            <hr></hr>
                            <img src={clearFunc} alt="clear-function-pic" />
                            <Typography variant="body2" color="textSecondary" component="p">
                                <ul>
                                    <li>handleClear functions takes an event as a parameter</li>
                                    <li>Create a new variable <b>newTodos</b></li>
                                    <li>Using the filter array helper, if a todo item's complete key is equla to NOT complete we will store it as newToDos</li>
                                    <li>pass the variable foudn to <b>setTodos</b> function which will prompt a state change</li>
                                </ul>
                            </Typography>

                            <hr></hr>
                            <img src={localStorageKey} alt="localStorage-key-pic" />
                            <Typography variant="body2" color="textSecondary" component="p">
                                <ul>
                                    <li>Variable that will be used to handle persisting data in localStorage</li>
                                </ul>
                            </Typography>

                            <hr></hr>
                            <img src={localStorageFunc} alt="localStoarge-functions-pic" />
                            <Typography variant="body2" color="textSecondary" component="p">
                                <ul>
                                    <li><b>useEffect</b> is a React Hook used to let React know that after rendering the component has another task</li>
                                    <li><b>storedTodos</b> is a variable that will store the value we stored in localStorage
                                        <ul>
                                            <li><b>JSON.parse:</b> to ensure that the value you we get back is a JS Object</li>
                                            <li><b>localStorage.getItem:</b> getItem funcition takes a key as a parameter</li>
                                        </ul>
                                    </li>
                                    <li>if the <b>storedTodos</b> variable exist call setTodos passing the variable as the parameter</li>
                                    <li>The second React <b>useEffect</b> Hook is used to store the item we want
                                        <ul>
                                            <li>similar to getItem, .setItem is a built-in function</li>
                                            <li><b>.setItem</b> takes in 2 parameters, key and a value</li>
                                            <li><b>JSON.stringify:</b> to ensure value is stored as a JS Object</li>
                                        </ul>
                                    </li>

                                </ul>
                            </Typography>
                        </ul>
                    </Paper>

                    <h3>Step 3: </h3>
                    <Typography color="primary">Complete Imports for ToDoList.js</Typography>
                    <img src={toDoListImports} alt="toDoList-imports-pic" />

                    <Paper elevation={2}>
                        <ul>
                            <Typography variant="body2" color="primary" component="p">
                                Further Breakdown
                            </Typography>

                            <img src={toDoListAll} alt="toDoList-pic" />
                            <Typography variant="body2" color="textSecondary" component="p">
                                <ul>
                                    <li><b>line 4: </b> Destructure <b>todos</b> and <b>toggleToDo</b> for use</li>
                                    <li>using array helper map function return a <b>ToDo</b> Component with the properties
                                        <ul>
                                            <li><b>key</b> (id)</li>
                                            <li><b>toggle or not</b> (complete or not)</li>
                                            <li><b>todo</b> (value)</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Typography>
                        </ul>
                    </Paper>

                    <h3>Step 4: </h3>
                    <Typography color="primary">Complete Imports for ToDo.js</Typography>
                    <img src={toDoAll} alt="toDo-pic" />

                    <Typography variant="body2" color="textSecondary" component="p">
                        <ul>
                            <li><b>line 3:</b> Destructure <b>todo</b> and <b>toggleToDo</b> for use</li>
                            <li><b>handleToDoclick:</b> callback function that sends toggleToDo the id of the item
                                <ul>
                                    <li>handleToDoClick is triggered when <b>onChange</b>event is fired</li>
                                    <li><b>onChange: </b> event listener</li>
                                </ul>
                            </li>
                            <li><b>input:</b> element that will be a checkbox</li>
                            <li><b>label</b> will return checkbox and <b>name</b> value of <b>todo</b></li>
                        </ul>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default BlogPostDetails;
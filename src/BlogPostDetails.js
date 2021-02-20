import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

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
    Typography} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

    const useStyles = makeStyles((theme) => ({
        media: {
            display: 'flex',
            justifyContent: 'center'
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

const BlogPostDetails = ({ title, subheader, image, summary, content }) => {
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
                title={title}
                subheader={subheader}
            />

            <CardMedia className={classes.media}> 
                {image}
                {/* <img src={image} alt="image" width="30%"/> */}
            </CardMedia>
            <hr></hr>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {summary}
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
                {content}
            </Collapse>
        </Card>
    );
}

export default BlogPostDetails;
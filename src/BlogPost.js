import React from 'react';
import BlogPostDetails from './BlogPostDetails';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// import clsx from 'clsx';

// import { 
//     Avatar, 
//     Card, 
//     CardActions, 
//     CardContent, 
//     CardHeader, 
//     CardMedia,
//     Collapse,
//     IconButton,
//     Paper,
//     Typography} from '@material-ui/core';

// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

    // const useStyles = makeStyles((theme) => ({
    //     media: {
    //       marginLeft: '40%'

    //     },
    //     expand: {
    //       transform: 'rotate(0deg)',
    //       marginLeft: 'auto',
    //       transition: theme.transitions.create('transform', {
    //         duration: theme.transitions.duration.shortest,
    //       }),
    //     },
    //     expandOpen: {
    //       transform: 'rotate(180deg)',
    //     },
    //     avatar: {
    //       backgroundColor: red[500],
    //     },
    //   }));

const BlogPost = () => {
    // const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <BlogPostDetails />
    );
}

export default BlogPost;
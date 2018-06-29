import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';

const styles = {
    mainCard: {
        minWidth: '100%',
        minHeight: '100%'
    },
    title: {
        marginBottom: 16,
        fontSize: 20,
        cursor: 'pointer'
    },
    linkStyle: {
        textDecoration: 'none'
    }
};
const SideBar = (props) => {
    const { classes } = props;
    return (
        <Card className={classes.mainCard}>
            <CardContent>
                <Link className={classes.linkStyle} to={"/"}>
                    <Typography className={classes.title} color="textSecondary">
                        Users
                    </Typography>
                </Link>
                <Link className={classes.linkStyle} to={"/Tags"}>
                    <Typography className={classes.title} color="textSecondary">
                        Tags
                    </Typography>
                </Link>
                <Link className={classes.linkStyle} to={"/Retention"}>
                    <Typography className={classes.title} color="textSecondary">
                        Retention
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
};

SideBar.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(SideBar);
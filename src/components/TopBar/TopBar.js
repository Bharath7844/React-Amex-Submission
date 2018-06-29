import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    }
};

function ButtonAppBar(props) {
    const { title, classes } = props;
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="title" color="inherit" className={classes.flex}>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

ButtonAppBar.propTypes = {
    title: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
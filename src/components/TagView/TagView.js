import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import CustomTableCell from '../CustomTableCelll'
import {Colors, mockData} from '../../common'

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: '100%',
    },
    row: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: Colors.backgroundGrey
        }
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

class TagView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersData: mockData
        };
    }
    generateTagData = () => {
        let Tags = {};
        const { usersData } = this.state;
        usersData.map(user => {
            user.tags.map( tag => {
                if(!Tags[tag]) {
                    Tags[tag] = {
                        tag,
                        users: [user.name],
                        balance: parseFloat((user.balance.split("$")[1]).replace(',',''))
                    }
                } else {
                    Tags[tag] = {
                        tag,
                        users: [...Tags[tag].users, user.name],
                        balance: Tags[tag].balance + parseFloat(user.balance.split("$")[1])
                    }
                }
                return null
            });
            return null;
        });
        return(Tags);
    }
    renderTagData = () => {
        const { classes } = this.props;
        const uniqueTags = this.generateTagData();
        const tagDataArray = [];
        for(const key in uniqueTags) {
            tagDataArray.push(uniqueTags[key])
        }
        const renderData = tagDataArray.map((t, index) => {
           const tagUsers = t.users.map(u => (`${u},`));
           return(
               <TableRow className={classes.row} key={index}>
                   <TableCell>{t.tag}</TableCell>
                   <TableCell>{`$${t.balance}`}</TableCell>
                   <TableCell>{tagUsers}</TableCell>
               </TableRow>
           )
        });
        return(renderData);
    }
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>Tag</CustomTableCell>
                            <CustomTableCell>Balance</CustomTableCell>
                            <CustomTableCell>Users</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.renderTagData()
                        }
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}
export default withStyles(styles)(TagView);
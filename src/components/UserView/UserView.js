import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import CustomTableCell from '../CustomTableCelll'
import { mockData, Colors } from '../../common';

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
class UserView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: mockData
        }
    }
    dateFilter = date => {
        let dateString = "";
        const Plus_Splitted =date.split("+");
        const spaceRemoved = Plus_Splitted[0].split(" ")[0];
        dateString += spaceRemoved+"+"+Plus_Splitted[1];
        return dateString;
    };
    renderTableBody = () => {
        const { tableData } = this.state;
        const { classes } = this.props;
        const renderData = tableData.sort((o1,o2)=>{
            const date1 = Date.parse(this.dateFilter(o1.registered));
            const date2 = Date.parse(this.dateFilter(o2.registered));
            return ( date1-date2)>0 ? 1 : -1 //Descending Order
        }).map(document => {
            return (
                <TableRow className={classes.row} key={document._id}>
                    <TableCell>{document.name}</TableCell>
                    <TableCell>
                        <img src={document.picture} alt={document.name} className={classes.image}/>
                     </TableCell>
                    <TableCell>{document.email}</TableCell>
                    <TableCell>{document.balance}</TableCell>
                    <TableCell>{document.company}</TableCell>
                    <TableCell>
                        {document.tags.map(i => (`${i},`))}
                    </TableCell>
                </TableRow>
            );
        });
        return renderData;
    }
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>Name</CustomTableCell>
                            <CustomTableCell>Picture</CustomTableCell>
                            <CustomTableCell>Email</CustomTableCell>
                            <CustomTableCell>Balance</CustomTableCell>
                            <CustomTableCell>Company</CustomTableCell>
                            <CustomTableCell>Tags</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.renderTableBody()
                        }
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}
UserView.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(UserView);
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

import SelectedUserModal from '../SelectedUserModal/SelectedUserModal';
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
        height: '100%',
        maxHeight: 40
    },
    title: {
        fontSize: 20,
        marginTop: 15
    },
    paper: {
        position: 'absolute',
        marginTop: '10vh',
        marginLeft: '20vw',
        width: '60vw',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    }
});
class RetentionView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: mockData,
            isOpen: false,
            selectedUser: null
        }
    }
    dateFilter = date => {
        let dateString = "";
        const Plus_Splitted =date.split("+");
        const spaceRemoved = Plus_Splitted[0].split(" ")[0];
        dateString += spaceRemoved+"+"+Plus_Splitted[1];
        return dateString;
    };
    openUserDetail = selectedUser => {
        this.setState({selectedUser, isOpen: true});
    };
    renderTableBody = () => {
        const { tableData } = this.state;
        const { classes } = this.props;
        const renderData = tableData.sort((o1,o2)=>{
            const date1 = Date.parse(this.dateFilter(o1.registered));
            const date2 = Date.parse(this.dateFilter(o2.registered));
            return ( date2-date1)>0 ? 1 : -1 //Ascending Order
        }).map(document => {
            if(!document.isActive) {
                return (
                    <TableRow onClick={() => this.openUserDetail(document)} className={classes.row} key={document._id}>
                        <TableCell>
                            <img src={document.picture} alt={document.name} className={classes.image}/>
                        </TableCell>
                        <TableCell>{document.name}</TableCell>
                        <TableCell>{document.email}</TableCell>
                    </TableRow>
                );
            } else {
                return null;
            }
        });
        return renderData;
    }
    render() {
        const { classes } = this.props;
        const { isOpen, selectedUser } = this.state;
        return (
            <React.Fragment>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={isOpen}
                    onClose={() => {this.setState({isOpen: false})}}
                >
                    <div className={classes.paper}>
                        <SelectedUserModal selectedUser={selectedUser}/>
                    </div>
                </Modal>
                <Typography className={classes.title} color="textSecondary">
                    Inactive Users: Click User for more Detail
                </Typography>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Picture</CustomTableCell>
                                <CustomTableCell>Name</CustomTableCell>
                                <CustomTableCell>Email</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.renderTableBody()
                            }
                        </TableBody>
                    </Table>
                </Paper>
            </React.Fragment>
        )
    }
}
RetentionView.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(RetentionView);
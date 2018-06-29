import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';

import TableCell from '@material-ui/core/TableCell';

const styles = {
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        zIndex: 10
    },
    imageContainer: {
        flex: 1
    },
    detailsContainer: {
        flex: 3,
        paddingLeft: 20
    },
    image:{
        width: '100%',
        margin: 5,
        alignSelf: 'center'
    },
    table: {
        minWidth: '100%',
    },
};
const SelectedUserModal = (props) => {
    const {selectedUser} = props;
    console.log(selectedUser);
    if(selectedUser) {
        const {_id, balance, picture, name, company, email, phone, about, registered, tags} = selectedUser;
        return(
            <div style={styles.container}>
                <div style={styles.imageContainer}>
                    <img src={picture} alt={name} style={styles.image}/>
                </div>
                <div style={styles.detailsContainer}>
                    <Table style={styles.table}>
                        <TableBody>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>{_id}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>About</TableCell>
                                <TableCell>{about}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Balance</TableCell>
                                <TableCell>{balance}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Email</TableCell>
                                <TableCell>{email}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Phone</TableCell>
                                <TableCell>{phone}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Company</TableCell>
                                <TableCell>{company}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Registered</TableCell>
                                <TableCell>{registered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Tags</TableCell>
                                <TableCell>{tags.map(t => (`${t}, `))}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        )

    } else {
        return "";
    }
};
export default SelectedUserModal;
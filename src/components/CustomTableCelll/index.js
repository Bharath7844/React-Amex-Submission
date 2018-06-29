import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

import { Colors } from '../../common'

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: Colors.primaryBlue,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export default CustomTableCell;
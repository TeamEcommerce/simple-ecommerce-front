import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import styles from 'styles/Table';

function OrderTable(props) {
  const classes = props.classes;

  return (
    <Paper className={classes.paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell numeric> Código Pedido</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>(+) Ver</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(n => (
            <TableRow key={n.id}>
              <TableCell numeric>
                {n.id}
              </TableCell>
              <TableCell>
                {n.status}
              </TableCell>
              <TableCell>
                {n.custommer}
              </TableCell>
              <TableCell>
                {n.date}
              </TableCell>
              <TableCell>
                <Button raised color="accent" className={classes.button}>
                  Ver (+)
                </Button>
              </TableCell>
            </TableRow>
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
/* eslint-disable react/forbid-prop-types*/
OrderTable.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
};
/* eslint-enable*/
export default withStyles(styles)(OrderTable);

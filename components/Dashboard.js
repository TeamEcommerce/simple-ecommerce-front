import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

const styles = theme => ({
  paper: {
    width: '94%',
    margin:'0 auto',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});

let id = 0;
function createData(method, status, custommer, date, btnview) {
  id += 1;
  return { id, status, custommer, date, btnview };
}

const data = [
  createData('En despacho', 'Willy Aguirre', '21/08/17 19:51', 1),
  createData('Atendido', 'Patricia Arakawa', '20/08/17 08:00', 2),
  createData('Pendiente de Pago', 'Javier Santaolalla', '15/08/17 09:00', 3),
];

function BasicTable(props) {
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
          {data.map(n => {
            return (
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
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

BasicTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicTable);

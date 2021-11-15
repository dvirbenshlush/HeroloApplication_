import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

const styleSheet = makeStyles(theme => ({
  button: {
    margin: theme.spacing.unit,
    marginLeft: "auto",
    display: "block",
  },
}));

function FloatingActionButtons(props) {
  const classes = props.classes;
  return (
    <div>
      <Button
        fab color="primary"
        aria-label="add"
        className={classes.button}>
        <AddIcon />
      </Button>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(FloatingActionButtons);

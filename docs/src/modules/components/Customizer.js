import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { DispatchContext } from 'docs/src/modules/components/ThemeContext';
import {
  makeHandleChangeCustomTheme,
  makeHandleResetCustomTheme,
} from 'docs/src/pages/customization/theming/ThemeEditor';

const styles = theme => ({
  root: {
    marginBottom: 40,
    marginLeft: -theme.spacing(2),
    marginRight: -theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 1),
      marginLeft: 0,
      marginRight: 0,
    },
  },
});

const Customizer = ({ themes = [], classes }) => {
  const dispatch = React.useContext(DispatchContext);
  const handleChangeCustomTheme = makeHandleChangeCustomTheme(dispatch);
  const handleResetCustomTheme = makeHandleResetCustomTheme(dispatch);

  return (
    <div className={classes.root}>
      <p>
        Here you can try a custom theme that will be applied to all demos. Feel free to change it
        yourself afterwards.
      </p>
      <Grid container spacing={2}>
        {themes.map((theme, index) => (
          <Grid key={index} item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleChangeCustomTheme(JSON.stringify(theme))}
            >
              Try this theme
            </Button>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleResetCustomTheme}
            className={classes.button}
          >
            Reset Docs Theme
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Customizer);

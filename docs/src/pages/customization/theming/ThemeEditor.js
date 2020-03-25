import React from 'react';
import PropTypes from 'prop-types';
import { monaco, ControlledEditor } from '@monaco-editor/react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { DispatchContext } from 'docs/src/modules/components/ThemeContext';
// Random theme to test with
// import editorTheme from './monokai.json';

const sampleTheme = ` // Sample theme - try, edit or replace me!
theme = {
  palette: {
    primary: {
      main: '#455a64',
      },
    secondary: {
      main: '#6d4c41',
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        background: 'linear-gradient(45deg, #455a64 30%, #6d4c41 90%)',
        borderRadius: 2,
        border: 0,
        color: 'white',
        height: 36,
        boxShadow: '0 3px 5px 2px rgba(109, 76, 65, .3)',
      },
      outlined: {
        borderRadius: 2,
      },
    },
  },
}
`;

const styles = theme => ({
  button: {
    marginLeft: theme.spacing(1),
  },
});

export const makeHandleChangeCustomTheme = dispatch => editorValue => {
  console.log('makeHandleChangeCustomTheme editorValue:', editorValue);
  let customTheme = null;
  try {
    customTheme = eval(`(${editorValue})`);
  } catch (error) {
    console.error(error);
  }

  if (typeof customTheme === 'object') {
    dispatch({
      type: 'SET_CUSTOM_THEME',
      payload: eval(`(${editorValue})`),
    });
    localStorage.setItem('customTheme', editorValue);
    localStorage.setItem('themeEditorValue', editorValue);
  }
};

export const makeHandleResetCustomTheme = dispatch => () => {
  dispatch({ type: 'RESET_CUSTOM_THEME' });
  localStorage.removeItem('customTheme');
};

function ThemeEditor(props) {
  const { classes } = props;
  const dispatch = React.useContext(DispatchContext);

  // Set a custom editor theme(not working)
  // React.useEffect(() => {
  //   monaco
  //     .init()
  //     .then(monaco => {
  //       monaco.editor.defineTheme('monokai', editorTheme);
  //       monaco.editor.setTheme('monokai');
  //     })
  //     .catch(error => console.error('An error occurred during initialization of Monaco: ', error))
  // }, []);

  const [editorValue, setEditorValue] = React.useState(
    (process.browser && localStorage.getItem('themeEditorValue')) || sampleTheme,
  );

  const handleChangeEditor = (event, value) => {
    setEditorValue(value);
  };

  const handleChangeCustomTheme = makeHandleChangeCustomTheme(dispatch);
  const handleResetCustomTheme = makeHandleResetCustomTheme(dispatch);

  return (
    <Grid container spacing={5} className={classes.root}>
      <Grid item xs={12}>
        <ControlledEditor
          height="480px"
          language="javascript"
          theme="vs-dark"
          value={editorValue}
          options={{
            ariaLabel: 'theme editor',
            fontSize: 14,
            codeLens: { enabled: false },
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            folding: false,
          }}
          onChange={handleChangeEditor}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleChangeCustomTheme(editorValue)}
        >
          Set Docs Theme
        </Button>
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
  );
}

ThemeEditor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThemeEditor);

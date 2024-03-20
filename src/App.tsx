import './App.css';

import AppGlobalStyles from '@contexts/AppGlobalStyles';
import { Button, Paper, Typography } from '@mui/material';

function App() {
  return (
    <AppGlobalStyles>
      <Paper>
        <Button>Test</Button>
        <Typography>Ahihi</Typography>
      </Paper>
    </AppGlobalStyles>
  );
}

export default App;

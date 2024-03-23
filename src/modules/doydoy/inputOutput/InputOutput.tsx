import { Panel } from '@components/Panel';

import Call from './call/Call';
import Result from './result/Result';

const InputOutput = () => {
  return (
    <Panel
      headless
      sx={{
        padding: 0,
      }}
      contentProps={{
        display: 'flex',
        alignItems: 'stretch',
        height: '100%',
      }}
    >
      <Call />
      <Result />
    </Panel>
  );
};

export default InputOutput;

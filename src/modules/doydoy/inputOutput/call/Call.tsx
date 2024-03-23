import { Column, Row } from '@components/primitives';

import Actions from './Actions';
import ParamInput from './ParamInput';

const Call = () => {
  return (
    <Row
      sx={{
        alignItems: 'flex-start',
        borderRight: '1px dashed',
        borderRightColor: 'common.black',
        padding: 6,
        gap: 12,
      }}
    >
      <Column
        sx={{
          gap: 4,
          justifyContent: 'flex-start',
        }}
      >
        <ParamInput label='_account' placeholder='_account' />
        <ParamInput label='_account' placeholder='_account' />
        <ParamInput label='_account' placeholder='_account' />
      </Column>
      <Actions />
    </Row>
  );
};

export default Call;

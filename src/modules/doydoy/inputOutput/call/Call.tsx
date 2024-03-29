import { Column, Row } from '@components/primitives';
import useRootStore from '@stores/rootStore';

import Actions from './Actions';
import ParamInput from './ParamInput';

const Call = () => {
  const fnInView = useRootStore((store) => store.fnInView);

  if (!fnInView) {
    return 'No';
  }

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
        {fnInView.inputs.map((input, index) => {
          const key = `${fnInView.name}:${index}`;
          const label = input.name || `<input> (${input.baseType})`;

          return (
            <ParamInput key={key} label={label} placeholder={input.type} />
          );
        })}
      </Column>
      <Actions />
    </Row>
  );
};

export default Call;

import { useMotionValue, Reorder, useDragControls } from 'framer-motion';
import { SelectorIcon } from '@heroicons/react/solid';

import { useRaisedShadow } from '../../hooks/use-raised-shadow';

interface Props {
  item: string;
}

export const Item = ({ item }: Props) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();

  return (
    <Reorder.Item
      value={item}
      id={item}
      className="relative flex justify-between items-center mb-5 bg-white p-5 rounded-lg list-none text-3xl w-full"
      style={{ boxShadow, y }}
      // BUG when dragListener is false it highlights all the content you pass in when dragging to another place
      dragListener={false}
      dragControls={dragControls}
    >
      {/*  put className="select-none" for temporary fix*/}
      <span>{item}</span>
      <SelectorIcon
        className="cursor-grab h-5 w-5 sm:h-7 sm:w-7  fill-darkFontColor"
        onPointerDown={(e) => dragControls.start(e)}
      />
    </Reorder.Item>
  );
};

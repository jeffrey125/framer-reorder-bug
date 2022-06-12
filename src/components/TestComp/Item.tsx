import { useMotionValue, Reorder, useDragControls } from "framer-motion";
import { SelectorIcon } from "@heroicons/react/solid";

import { useRaisedShadow } from "../../hooks/use-raised-shadow";

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
      style={{ boxShadow, y }}
      // BUG when dragListener is false it highlights all the content you pass in when dragging to another place
      dragListener={false}
      dragControls={dragControls}
    >
      {/*  put className="selectNone" for temporary fix*/}
      <span>{item}</span>
      <SelectorIcon
        className="reorderIcon"
        onPointerDown={(e) => dragControls.start(e)}
      />
    </Reorder.Item>
  );
};

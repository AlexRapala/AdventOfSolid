import {
  DragDropProvider,
  DragDropSensors,
  DragEventHandler,
  createDraggable,
  createDroppable,
} from "@thisbeyond/solid-dnd";
import { createSignal, Show, type Component } from "solid-js";

const ChristmasPresent: Component = (props) => {
  console.log(props);
  const draggable = createDraggable(props.key);
  return (
    <div use:draggable class="draggable w-32">
      {props.asdf}
    </div>
  );
};

export default ChristmasPresent;
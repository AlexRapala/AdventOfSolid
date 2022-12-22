import { type Component, createSignal, For } from 'solid-js';
import { DragDropProvider, DragDropSensors, DragEventHandler, Droppable } from '@thisbeyond/solid-dnd';

import ChristmasTree from './ChristmasTree';
import ChristmasPresent from './ChristmasPresent';
import BlueGift from '../../assets/blue-gift.svg';
import SmallRedGift from '../../assets/small-red-gift.svg';
import TallRedGift from '../../assets/tall-red-gift.svg';

const Day07: Component = () => {

  const [presentsUnderTree, setPresentsUnderTree] = createSignal<Droppable[]>([]);
  const [presents, setPresents] = createSignal([BlueGift, SmallRedGift, TallRedGift]);
  const onDragEnd: DragEventHandler = ({ droppable, draggable }) => {
    console.log(draggable);
    if (droppable) {

      const tempPresentsUnderTree = presentsUnderTree();
      const newPresentsUnderTree = [...tempPresentsUnderTree, draggable];
      setPresentsUnderTree(newPresentsUnderTree);
    }
  };

  return (
    <DragDropProvider onDragEnd={onDragEnd}>
      <DragDropSensors />
      <div class="flex flex-col items-center minh-screen w-full">
        <h1 class="mt-8 text-xl text-slate-100 font-bold">Drag the presents under the tree!</h1>
        <ChristmasTree presents={presentsUnderTree()} class="mt-16" />
        <div class="mt-32 w-full justify-center flex-1">
          <div class="flex items-end justify-center">
            <For each={presents()}>
              {(p, i) =>
                <ChristmasPresent asdf={p} key={i()} />

              }
            </For>
          </div>
        </div>
      </div>
    </DragDropProvider>
  );
};

export default Day07;

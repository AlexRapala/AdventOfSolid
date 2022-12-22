import { Component, createSignal } from 'solid-js';

import ChristmasTree from './ChristmasTree';
import "./AllTrees.css";

const AllTrees: Component = () => {

  const [size, setSize] = createSignal(7);

  return (
    <>
      <button onClick={() => setSize(size() + 1)}>+</button>
      <button onClick={() => setSize(size() - 1)}>-</button>
      <div>{size()}</div>
      <div class="w-full h-full flex justify-center items-center">

        <ChristmasTree size={size()} />
      </div>
    </>
  );
};

export default AllTrees;

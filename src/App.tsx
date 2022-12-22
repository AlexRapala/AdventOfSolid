import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Day01 from './components/01/Day01';
import Day02 from './components/02/Day02';
import Day03 from './components/03/Day03';
import Day05 from './components/05/Day05';
import Day07 from './components/07/Day07';
import AllTrees from './components/AllTrees/AllTrees';
const App: Component = () => {
  return (
    <>
      <div class="snowflake">
        ❅
      </div>
      <div class="snowflake">
        ❅
      </div>
      <div class="snowflake">
        ❆
      </div>
      <div class="snowflake">
        ❄
      </div>
      <div class="snowflake">
        ❅
      </div>
      <div class="snowflake">
        ❆
      </div>
      <div class="snowflake">
        ❄
      </div>
      <div class="snowflake">
        ❅
      </div>
      <div class="snowflake">
        ❆
      </div>
      <div class="snowflake">
        ❄
      </div>
      <div>
        <div class="vh100">
          <Day01 />

        </div>
        <div class="vh100">

          <Day02 />
        </div>
        <div class="vh100">

          <Day03 />
        </div>
        <div class="vh100">

          <Day05 />
        </div>
        <div class="vh100">

          <Day07 />
        </div>
        <div class="vh100">

          <AllTrees />
        </div>
      </div>
    </>
  );
};

export default App;

import type { Component } from 'solid-js';

const CountdownHeader: Component = () => {
    return (
        <header class="text-center">
            <h2 class="text-green-500 text-2xl">
                <span class="bg-gray-200 px-3.5 py-1 rounded text-sm font-bold">Advent of Solid</span>
            </h2>
            <h1 class="text-4xl mt-2 mb-5">Christmas Countdown</h1>
        </header>
    )
}

export default CountdownHeader;
import { Component, createSignal, createEffect, createResource } from 'solid-js';
import { debounce } from 'debounce';

const fetchProducts = async (search: string) =>
    (await fetch(`https://dummyjson.com/products/search?q=${search}`)).json();


const [value, setValue] = createSignal("");
const [search] = createResource(value, debounce(fetchProducts, 300))

const Day01: Component = () => {

    function test(e: KeyboardEvent) {
        const target = e.target as HTMLInputElement;
        setValue(target.value);
    }
    return (
        <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
            <h1 class="text-4xl text-slate-100 font-bold">Gift Search Bar</h1>
            <input type="text" class="p-2 border-2 border-gray-dark" onkeyup={test} placeholder='Start typing...' />
            <Whatever />
            <ul class="list-disc">
                {(value() && search()) && search().products.map((val) => <li class="text-slate-100">{val.title}</li>)}
            </ul>
        </div>
    );
};

const Whatever: Component = () => {
    return (
        <div>
            {value()}
        </div>
    )
}

export default Day01;

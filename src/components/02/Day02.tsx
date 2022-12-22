import { Component, createSignal, createResource, Suspense, SuspenseList } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

export interface Joke {
    error: boolean;
    category: string;
    type: string;
    setup: string;
    delivery: string;
    flags: Flags;
    id: number;
    safe: boolean;
    lang: string;
}
export interface Flags {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
}


const Day02: Component = () => {
    const fetchJoke = async () =>
        (await fetch(`https://v2.jokeapi.dev/joke/christmas`)).json().then(setJoke);

    const [joke, setJoke] = createSignal<Joke | undefined>();
    const [showJoke, setShowJoke] = createSignal(false)

    const getNewJoke = () => {
        setJoke();
        fetchJoke();
        setShowJoke(false);
    }

    fetchJoke();
    return (
        <>
            {joke() && <div class="w-full h-full p-4 flex justify-center items-center">
                <div class="max-w-xs w-full flex flex-col">

                    <div class="w-3/4 p-4 rounded-2xl bg-teal-800 text-white self-start">
                        {joke().setup}
                    </div>
                    {showJoke() && <div class="w-3/4 mt-2 p-4 rounded-2xl bg-red-800 text-white self-end">{joke().delivery}</div>}
                    <button onClick={showJoke() === true ? getNewJoke : () => setShowJoke(true)} class="bg-green-500 col-span-1 rounded-lg py-2 hover:opacity-90 w-full mx-auto mt-4">{showJoke() ? "Another" : "Tell Me!"}</button>

                </div>
            </div>}
        </>
    );
};

export default Day02;

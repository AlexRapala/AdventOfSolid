import { Component, createSignal } from 'solid-js';

interface Label {
    to: string,
    from: string
}

const Day05: Component = () => {

    const [label, setLabel] = createSignal(
        {
            to: "John",
            from: "Joana"
        }
    )

    const handleInput = (e: KeyboardEvent) => {
        const tempTarget = e.target as HTMLInputElement;

        const tempLabel = label()
        tempLabel[tempTarget.id as keyof Label] = tempTarget.value;
        setLabel(
            {
                ...tempLabel
            }
        )

    }
    return (
        <>
            <div class="w-full h-full flex justify-center items-center">
                <div>
                    <div class="w-full max-w-2xl p-4 rounded bg-red-400 text-white">
                        <div class="border-2 rounded flex flex-col md:flex-row md-items-center md:gap-8 p-4">
                            <img src="/santa.svg" alt="" class="max-w-[12em]" />
                            <div>
                                <h1 class="font-serif text-4xl">Happy Holidays!</h1>
                                <div class="mt-4 bg-white text-black p-2 rounded">TO: {label().to}</div>
                                <div class="mt-2 bg-white text-black p-2 rounded">FROM: {label().from}</div>
                            </div>
                        </div>
                    </div>
                    <label class="block text-gray-700 text-sm font-bold mb-2 mt-4" for="to">
                        TO
                    </label>
                    <input onKeyUp={handleInput} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="to" type="text" placeholder="TO" />
                    <label class="block text-gray-700 text-sm font-bold mb-2 mt-4" for="to">
                        FROM
                    </label>
                    <input onKeyUp={handleInput} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="from" type="text" placeholder="FROM" />
                </div>
            </div>

        </>
    );
};

export default Day05;

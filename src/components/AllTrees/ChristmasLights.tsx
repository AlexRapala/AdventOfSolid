import { type Component, createSignal, For } from 'solid-js';


interface Offsets {
    xOffset: number,
    yOffset: number,
    animationOffset: number
}

const ChristmasLights: Component = () => {
    const [offsets, setOffsets] = createSignal<Offsets>({ xOffset: 0, yOffset: 0, animationOffset: 0 });
    const christmasColors = ['bg-red-500', 'bg-gray-50', 'bg-yellow-100'];

    const randomChristmasColor = () => {

        return christmasColors[Math.floor(Math.random() * 3)]
    }



    const [getRandomColor, setRandomColor] = createSignal(randomChristmasColor());
    setOffsets({
        xOffset: Math.random() * 15 - 15 / 2,
        yOffset: Math.random() * 15 - 15 / 2,
        animationOffset: Math.random() * 2
    })

    return (
        <div class={`rounded-full ${getRandomColor()} w-2 h-2 m-2 relative z-20 shadow-md twinkle`} style={{ top: `${offsets().xOffset}px`, left: `${offsets().yOffset}px`, "animation-delay": `${offsets().animationOffset}s` }}>

        </div>
    );
};

export default ChristmasLights;

import { type Component, createSignal, For } from 'solid-js';


interface Offsets {
    xOffset: string,
    yOffset: string,
}

interface ChristmasOrnamentProps {
    color: string,
}

const ChristmasOrnament: Component<ChristmasOrnamentProps> = (props) => {
    const [offsets, setOffsets] = createSignal<Offsets>({ xOffset: "50%", yOffset: "50%" });
    const christmasColors = ['bg-red-500', 'bg-gray-50', 'bg-yellow-100'];

    const randomChristmasColor = () => {

        return christmasColors[Math.floor(Math.random() * 3)]
    }



    const [getRandomColor, setRandomColor] = createSignal(randomChristmasColor());
    setOffsets({
        xOffset: "50%",
        yOffset: "50%",
    })

    return (
        <div class={`rounded-full ${props.color} absolute w-6 h-6 z-10 shadow-md`} style={{ top: `${offsets().xOffset}px`, left: `${offsets().yOffset}px` }}>

        </div>
    );
};

export default ChristmasOrnament;

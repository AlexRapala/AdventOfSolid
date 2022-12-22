import { type Component, createSignal, For } from 'solid-js';
import ChristmasLights from './ChristmasLights';
import ChristmasOrnament from './ChristmasOrnament';

interface ChristmasTreeNodeProps {
    isRowEven: boolean
    isColumnEven: boolean
}

const ChristmasTreeNode: Component<ChristmasTreeNodeProps> = (props) => {


    return (
        <div class={`relative bg-green-500 rounded-full w-16 h-16 -m-2 flex justify-center items-center`}>
            <For each={Array(2)}>{() =>
                <ChristmasLights />}
            </For>
            {props.isRowEven && <ChristmasOrnament color={props.isColumnEven ? "bg-emerald-200" : "bg-red-500"} />}

        </div>
    );
};

export default ChristmasTreeNode;

import { type Component, createSignal, For } from 'solid-js';
import ChristmasOrnament from './ChristmasOrnament';
import ChristmasTreeNode from './ChristmasTreeNode';


interface ChristmasTreeProps {
    size: number
}

const ChristmasTree: Component<ChristmasTreeProps> = (props) => {

    console.log(props.size);
    return (
        <div>
            {props.size > 1 && <ChristmasTree size={props.size - 1} />}
            <div class="flex flex-row justify-center">
                {[...Array(props.size)].map((row, index) =>
                    <ChristmasTreeNode isRowEven={index % 2 === 0} isColumnEven={props.size % 2 === 0} />)}
            </div>
        </div>
    );
};

export default ChristmasTree;

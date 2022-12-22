import { type Component, For } from 'solid-js';
import { createDroppable, Droppable } from '@thisbeyond/solid-dnd';
import Tree from '../../assets/tree.svg';


interface ChristmasTreeProps {
    class?: string
    presents?: Droppable[]
}

const ChristmasTree: Component<ChristmasTreeProps> = (props) => {
    const droppable = createDroppable(1);


    return (
        <div {...props}>

            <div
                use:droppable
                class="droppable"
                classList={{ "!droppable-accept": droppable.isActiveDroppable }}
            ><div class="relative flex justify-center">
                    <Tree class="w-64" />
                </div>
                <div class="flex items-end -bottom-8 -gap-8 presents">
                    <For each={props.presents}>{(p, i) => <>{p.node} </>
                    }
                    </For>
                </div>
            </div>
        </div>
    );
};

export default ChristmasTree;

import type { Component } from 'solid-js';

import './CountdownSegment.css';

interface CountdownSegmentProps {
    number: number,
    label: string
}

const CountdownSegment: Component<CountdownSegmentProps> = (props) => {
    return (
        <div class="segment text-center">
            <div class="pt-10 overflow-hidden relative">
                <span class="numbers text-green-500 absolute top-0 left-[50%]">{props.number}</span>
            </div>
            <span class="label block pt-2">{props.label}</span>
        </div>
    )
}

export default CountdownSegment;
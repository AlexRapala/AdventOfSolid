import { Component, createSignal } from 'solid-js';
import dayjs from 'dayjs';
import logo from './logo.svg';
import styles from './App.module.css';

import CountdownHeader from './CountdownHeader';
import CountdownSegment from './CountdownSegment';

const christmas = dayjs('12/25/2022 00:00:00');

const Day03: Component = () => {
    const getTimeFromXmas = () => {
        const tempNow = dayjs();
        console.log(christmas.subtract(tempNow.unix()).unix());
        let daysUntilChristmas = christmas.subtract(tempNow.get('date'), 'days');
        daysUntilChristmas = daysUntilChristmas.subtract(tempNow.get('hours'), 'hours');
        daysUntilChristmas = daysUntilChristmas.subtract(tempNow.get('seconds'), 'seconds');
        return daysUntilChristmas;
    }

    const [now, setNow] = createSignal(getTimeFromXmas())
    const [loading, setLoading] = createSignal(false)

    setInterval(() => setNow(getTimeFromXmas()), 1000);
    console.log(now())

    return (
        <>
            {now() && <div class="w-full h-full flex justify-center items-center p-10">

                <div>
                    <div class="shadow-md relative bg-white p-5 rounded-lg border-gray100 border-[1px]">
                        <CountdownHeader />
                        <main class="flex justify-center">

                            <CountdownSegment label="days" number={now().get('date')} />
                            <CountdownSegment label="hours" number={now().get('hours')} />

                            <CountdownSegment label="minutes" number={now().get('minutes')} />
                            <CountdownSegment label="seconds" number={now().get('seconds')} />
                        </main>
                    </div>
                </div>
            </div>}
        </>

    );
};

export default Day03;

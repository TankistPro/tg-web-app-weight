import React from 'react';

import './lenta.scss';
import Image from 'next/image';

const Lenta = () => {
    const $wrapper = React.useRef(null);

    React.useEffect(() => {
        // if ($wrapper.current) {
        //     ($wrapper.current as HTMLDivElement).scrollTo(0, 100);
        // }
    }, []);

    return (
        <div className="start-lenta">
            <div className="start-lenta__wrapper" ref={$wrapper}>
                <div className="start-lenta__item">
                    <Image src={'/img/lenta/lenta-1.svg'} priority width={86} height={86} quality={40} alt="lenta-1" />
                    <div className="start-lenta__info">
                        <p>Alice</p>
                        <small>
                            Lost <b>6 kg</b> and earned <b>$7,000</b>
                        </small>
                    </div>
                </div>
                <div className="start-lenta__item">
                    <Image src={'/img/lenta/lenta-2.svg'} priority width={86} height={86} quality={40} alt="lenta-1" />
                    <div className="start-lenta__info">
                        <p>Sofia</p>
                        <small>
                            Lost <b>8 kg</b> and earned <b>$12,000</b>
                        </small>
                    </div>
                </div>
                <div className="start-lenta__item">
                    <Image src={'/img/lenta/lenta-3.svg'} priority width={86} height={86} quality={40} alt="lenta-1" />
                    <div className="start-lenta__info">
                        <p>Ivan</p>
                        <small>
                            Lost <b>12 kg</b> and earned <b>$18,000</b>
                        </small>
                    </div>
                </div>
                <div className="start-lenta__item">
                    <Image src={'/img/lenta/lenta-4.svg'} priority width={86} height={86} quality={40} alt="lenta-1" />
                    <div className="start-lenta__info">
                        <p>Mark</p>
                        <small>
                            Lost <b>2 kg</b> and earned <b>$5,000</b>
                        </small>
                    </div>
                </div>
                <div className="start-lenta__item">
                    <Image src={'/img/lenta/lenta-3.svg'} priority width={86} height={86} quality={40} alt="lenta-1" />
                    <div className="start-lenta__info">
                        <p>Angela</p>
                        <small>
                            Lost <b>15 kg</b> and earned <b>$23,000</b>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lenta;

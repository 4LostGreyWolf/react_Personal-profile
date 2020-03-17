import React from "react";
import {Parallax} from 'rc-scroll-anim';

import "./scroll.scss"


export default class ScllorGather extends React.Component {
    render() {
        return (
            <div className="sd">

                <div className="tiop"></div>
                <div className="oil">

                    <Parallax
                        animation={[
                            {x: 0, opacity: 1, playScale: [0, 0.2]},
                            {y: 100, playScale: [0, 0.3]},
                            {blur: '10px', playScale: [0, 0.5]},
                        ]}
                        style={{transform: 'translateX(-100px)', filter: 'blur(0px)', opacity: 0}}
                        className="code-box-shape"
                    />

                </div>
                <div className="sdsd"></div>
                {/*<Parallax*/}
                {/*    animation={{ x: 0 }}*/}
                {/*    style={{ transform: 'translateX(-100px)', margin: '10px auto' }}*/}
                {/*    className="code-box-shape"*/}
                {/*/>*/}
                {/*<Parallax*/}
                {/*    animation={{ scale: 1 }}*/}
                {/*    style={{ transform: 'scale(0)', margin: '10px auto' }}*/}
                {/*    className="code-box-shape"*/}
                {/*/>*/}
                {/*<Parallax*/}
                {/*    animation={{ rotate: 360 }}*/}
                {/*    style={{ margin: '10px auto' }}*/}
                {/*    className="code-box-shape"*/}
                {/*/>*/}


            </div>
        );
    }
}
import React from "react";
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
const ScrollOverPack = ScrollAnim.OverPack;
export default class ScllorGather extends React.Component {
    render() {
        return (
            <div>

                <ScrollOverPack hideProps={{ tweenOne: { reverse: true }}}>
                    <QueueAnim key='queueAnim'>

                        <div key='a'>依次进入</div>
                        <div key='b'>依次进入</div>
                        <div key='b'>依次进入</div>
                    </QueueAnim>
                    {/*<TweenOne key='tweenOne' vars={{ x:100 }} >单元素动画</TweenOne>*/}
                    {/*<Animate key='rc-animate' transitionName="fade"*/}
                    {/*         transitionAppear>*/}
                    {/*    rc-animate 示例*/}
                    {/*</Animate>*/}
                </ScrollOverPack>
            </div>
        );
    }
}
import React from 'react';

import {Tabs} from 'antd';
import Show from "./Show.js"
import InnerLogic from "./InnerLogic.js"
import '../App.css';
import {connect} from 'react-redux';
import {loadPostAction} from '../actions/loadPost.js';
import {submitInner, showInner} from '../actions/InnerAction.js';

const {TabPane} = Tabs;


class Cmp extends React.Component {
    constructor(props, context) {
        super(props, context);
        console.log(props);
    }

    componentDidMount() {
        this.props.dispatch(loadPostAction);
        console.log("after 1dispatch");
    }

    render() {
        const {list} = this.props.post;
        const LineHtml = list.map(post => {
            return (<li key={post.id}>{post.title}</li>)
        });
        return <Tabs defaultActiveKey="1">
            <TabPane tab="实时结果显示" key="1">
                <Show></Show>
                {LineHtml}
            </TabPane>
            <TabPane tab="内部处理逻辑" key="2">
                <InnerLogic/>
            </TabPane>
        </Tabs>
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.post
    }
}
export default connect(mapStateToProps)(Cmp);
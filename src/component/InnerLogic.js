import React from 'react';
import '../App.css';
import {Form, Tabs, Row, Col, Badge} from 'antd';
import InnerLogicForm from "./InnerLogicForm.js";
import InnerLogicDataShow from "./InnerLogicDataShow";
import {connect} from "react-redux";
import {showInner} from "../actions/InnerAction";
class InnerLogic extends React.Component {
    constructor(props, context) {
        super(props, context);
        console.log("inner logic prop", this.props);
    }

    dealSubmit = (value) => {
        console.log("ok", value);
        //发送请求修改数据

        this.props.dispatch(showInner(value.productId));
    }

    render() {
        return <div>
            <Row>
                <InnerLogicForm submitFunc={this.dealSubmit}/>
            </Row>
            <InnerLogicDataShow/>
        </div>
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        innerData: state.innerData
    }
};
export default connect(mapStateToProps)(InnerLogic);

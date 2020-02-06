import React from 'react';
import '../App.css';
import {Form, Tabs, Row, Col, Descriptions, Badge} from 'antd';
import {connect} from 'react-redux';

class InnerLogicDataShow extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        console.log(this.props);
        let hasCaluse, tourInfo, tourSegment, hotelIdList = "";
        if (this.props.innerData.resultData != null) {
            hasCaluse = this.props.innerData.resultData.hasCaluse;
        }
        return <Descriptions title="" bordered>
            <Descriptions.Item label="条款维护">{hasCaluse}</Descriptions.Item>
            <Descriptions.Item label="行程描述">{tourInfo}</Descriptions.Item>
            <Descriptions.Item label="行程段">{tourSegment}</Descriptions.Item>
            <Descriptions.Item label="酒店id(处理后)">{hotelIdList}</Descriptions.Item>
        </Descriptions>
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        innerData: state.innerData
    }
};
export default connect(mapStateToProps)(InnerLogicDataShow);
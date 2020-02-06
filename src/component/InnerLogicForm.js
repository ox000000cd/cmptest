import React from 'react';
import '../App.css';
import {Form, Icon, Input, Button, Row, Col} from 'antd';

class InnerLogicForm extends React.Component {

    componentDidMount() {
        // To disable submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.submitFunc(values);
            }
        });
    };

    render() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const productIdError = isFieldTouched('productId') && getFieldError('productId');
        return <Form layout="inline" onSubmit={this.handleSubmit}>
            <Form.Item validateStatus={productIdError ? 'error' : ''} help={productIdError || ''}>
                {getFieldDecorator('productId', {
                    rules: [{required: true, message: '输入产品id单个'}],
                })(
                    <Input
                        placeholder="产品id"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                    Log in
                </Button>
            </Form.Item>
        </Form>
    }

}

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

InnerLogicForm = Form.create({name: 'form_innerLogic'})(InnerLogicForm);
export default InnerLogicForm;
import { Row, Col, Card, Tree, Form, Input, Tooltip, Icon, Divider, Button, message, List,Avatar, Tag, Collapse, Tabs, Table, Modal } from 'antd';
import React, { PureComponent } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { connect } from 'dva';
import styles from '../System/style.less';
import Ellipsis from '@/components/Ellipsis';
import { msToDate } from '@/utils/utils';
const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;
const { TextArea } = Input;
const FormItem = Form.Item;
@connect(({ library, loading }) => ({
  library,
}))
@Form.create()
class All extends React.Component{
  state = {
    showMessage:false,
    activeKey: '1',
    visible: false,
    name: '',
  }

  componentDidMount() {
    this.initData;
  };

  initData = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'library/queryMy',
      payload: '0',
    })
  }

  toggleMessage = () => {
    this.setState({
      activeKey:'2',
    })
  }

  toggleMessageB = () => {
    this.setState({
      activeKey:'1',
    })
  }

  onChange = (tab) => {
    this.setState({
      activeKey:tab,
    })
  }

  change = (value) => {
    console.log(value,'haha')
  }

  /* 弹出层展示 */
  showModal = (value) => {
    this.setState({ visible: true, name: value.target.name});
  }

  /* 弹出层隐藏 */
  handleCancel = () => {
    const form = this.formRef.props.form;
    form.resetFields();
    this.setState({ visible: false });
  }

  /* 弹出层表单关联 */
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  /* 新增表单信息 */
  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      const date = new Date();
      values.time = msToDate(date.getTime()).withoutTime;
      values.username = JSON.parse(localStorage.getItem("user-info")).userName;
      values.name = this.state.name;
      const { dispatch } = this.props;
      dispatch({
        type: 'library/addMessage',
        payload: values,
      })
      form.resetFields();
      this.setState({ visible: false });
    });
  }

  render() {

    const content = (<Button type={dashed} onClick={this.initData}>换一批</Button>);

    const text = (
      <p style={{ paddingLeft: 24 }}>
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
      </p>
    );
    const IconText = ({ type, text, message }) => (
      <span onClick={this.toggleMessage}>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
      },
    };
    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };
    const targ = data => data.map(item => {
      return <Tag>{item}</Tag>;
    })

    const columns = [{
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
      width: 150,
    }, {
      title: '评论时间',
      dataIndex: 'time',
      width: 150,
      key: 'time',
    }, {
      title: '评论',
      dataIndex: 'message',
      key: 'message',
    }];
    return (
      <PageHeaderWrapper
        title="全部电影"
      >
        <Tabs activeKey={this.state.activeKey} onTabClick={this.onChange} >
          <TabPane tab="电影列表" key="1">
            <List
              itemLayout="vertical"
              size="large"
              // style={{ backgroundColor: '#ffffff',paddingLeft: '1' }}
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 5,
              }}
              dataSource={this.props.library.treeData}
              renderItem={item => (
                <List.Item
                  key={item.title}
                  actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text={item.message.length}/>]}
                  extra={<img width={172} alt="logo" src={item.avatar}/>}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                  />
                  <Ellipsis className={styles.item} lines={5}>
                    {item.content}
                  </Ellipsis>
                  {targ(item.type)}
                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab="评论信息" key="2">
            <Button type="primary" onClick={this.toggleMessageB}><Icon type="left" />返回电影列表</Button>
            <List
              itemLayout="vertical"
              size="large"
              dataSource={this.props.library.treeData}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={item.title}
                    description={item.description}
                  />
                  <Button name={item.title} type="primary" onClick={this.showModal}>添加{item.title}评论</Button>
                  <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                  />
                  <Table dataSource={item.message} columns={columns} colSpan={0} />
                </List.Item>
              )}
            />
          </TabPane>
        </Tabs>
      </PageHeaderWrapper>
    )
  }
}
export default All
/***
 * 弹出层展示（用于新增用户信息）
 */
const CollectionCreateForm = Form.create()(
  class extends React.Component {

    state = {
      gender: {},
      organ: [],
      role: [],
      value: undefined,
    }

    onChange = (value) => {
      console.log(value);
      this.setState({ value });
    }

    render() {
      const formItemLayout = {
        labelCol: {
          xs: { span: 12 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="添加评论"
          okText="新增"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="评论内容" {...formItemLayout}>
              {getFieldDecorator('message', {
                rules: [{ required: true, message: '请填写评论内容' }],
              })(
                <TextArea rows={4} />
              )}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);
/* 弹出层结束 */

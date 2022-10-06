import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {filterText, filterPriority, filterStatus} from '../redux/actions'

const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchText] = useState('')
  const [searchStatus, setSearchStatus] = useState('All')
  const [searchPriority, setSearchPriority] = useState([])

  const dispatch = useDispatch()

  const searchTextChangeHandle = (e) => {
    dispatch(filterText(e.target.value))
    setSearchText(e.target.value)
  }
  const searchStatusChangeHandle = (e) => {
    dispatch(filterStatus(e.target.value))
    setSearchStatus(e.target.value)
  }
  const searchPriorityChangeHandle = (value) => {
    dispatch(filterPriority(value))
    setSearchPriority(value)
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchText} onChange={searchTextChangeHandle}/>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={searchStatus} onChange={searchStatusChangeHandle}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={searchPriority}
          onChange={searchPriorityChangeHandle}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}

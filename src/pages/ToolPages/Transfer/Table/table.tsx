import React from 'react'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import styled from 'styled-components'
import { flexCenter } from '@/style'
const MyTabs: any = styled(Table)`
  .ant-spin-container {
    background-color: #fff;
    border-radius: 5px;
    .ant-empty-image {
      svg {
        color: ${(prop: any) => prop.theme.grey2}!important;
      }
    }
    .ant-pagination-item-link {
      ${flexCenter}
      color: ${(prop: any) => prop.theme.grey2}!important;
    }
  }
  th,
  td {
    color: ${(prop: any) => prop.theme.grey2}!important;
  }
  .ant-table-column-sorters {
    flex-direction: row;
    color: ${(prop: any) => prop.theme.grey2}!important;
  }
`
interface DataType {
  key?: React.Key
  wallet?: string
  othersBalance?: number
  balance?: number
}
interface PropsData {
  data: Array<DataType>
  loading: boolean
  Token?: string
}
const column: ColumnsType<DataType> = [
  {
    title: '钱包',
    dataIndex: 'wallet',
  },
  {
    title: '平台币余额',
    dataIndex: 'balance',
    sorter: {
      compare: (a: any, b: any) => a.balance - b.balance,
      multiple: 3,
    },
  },
]

const Tables: React.FC<PropsData> = ({ data, loading }) => {
  const sumDate = (data: Array<DataType>) => {
    return data.reduce(function (p: number, c: any) {
      return p + c.balance * 1
    }, 0)
  }
  return (
    <MyTabs
      loading={loading}
      pagination={{ position: ['bottomCenter'] }}
      columns={column}
      dataSource={data}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0}>Sum</Table.Summary.Cell>
            <Table.Summary.Cell index={1}>{sumDate(data)}</Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  )
}

export default Tables

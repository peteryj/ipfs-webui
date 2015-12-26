import React from 'react'
import Table from 'react-bootstrap/lib/Table'
import {addr} from './typography'

export default React.createClass({
  displayName: 'Table',
  propTypes: {
    table: React.PropTypes.array,
    children: React.PropTypes.array
  },
  render: function () {
    return (
      <Table responsive>
        <tbody>
          {this.props.table.map(function (val) {
            return (
              <tr><td>{addr(val)}</td></tr>
            )
          })}
          {this.props.children}
        </tbody>
      </Table>
    )
  }
})

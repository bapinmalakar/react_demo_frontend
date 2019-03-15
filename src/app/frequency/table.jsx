import React, { Component } from 'react';

class TableView extends Component {
    constructor(props) { super(props); }

    render() {
        const tableData = [];

        for (let i = 0; i < this.props.data.length; i++) {
            tableData.push(<tr key={i}><td>{this.props.data[i][0]}</td><td>{this.props.data[i][1]}</td></tr>)
        }

        return (<div>
            <table className="table table_design">
                <thead>
                    <tr>
                        <th>Word</th>
                        <th>Frequency</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>)
    }
}

export default TableView;
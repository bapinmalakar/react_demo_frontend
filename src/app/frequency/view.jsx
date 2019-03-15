import React, { Component } from 'react';
import TableView from './table';
import Helper from './helper';

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

class FrequencyView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frequency_number: 0,
            loader: false,
            enough_message: false,
            table_data: []
        };
        this.valueChange = this.valueChange.bind(this);
        this.processData = this.processData.bind(this);
    }

    valueChange(e) {
        if (e.keyCode == 13 && Number(this.state.frequency_number)) {
            this.processData();
        } else {
            const obj = this.state;
            obj.frequency_number = e.target.value;
            this.setState(obj);
        }
    }

    setSateData(obj) {
        this.setState(obj);
    }

    processData() {
        let obj = this.state;
        obj.loader = true;
        obj.table_data = [];
        this.setSateData(obj);

        Helper.fetchDataFromApi()
            .then(data => {
                const wordFrequents = Helper.treatmentOnData(data.data);
                obj = this.state;
                obj.loader = false;
                obj.enough_message = false;
                if (Number(this.state.frequency_number) < wordFrequents.length) {
                    obj.table_data = wordFrequents.slice(0, Number(this.state.frequency_number));
                } else {
                    obj.table_data = wordFrequents;
                    obj.enough_message = true;
                }
                this.setSateData(obj);
            });
    }

    render() {
        let loadingDiv;
        let tableDiv;
        let outOfRangeMessage;
        if (this.state.loader) loadingDiv = <div> <p>Loading</p> </div>;
        if (!this.state.loader && this.state.table_data.length) tableDiv = <TableView data={this.state.table_data} />;
        if (this.state.enough_message) outOfRangeMessage = <div className="frequency-div"> <p>No Data Left</p> </div>
        return (<div>
            <div className="frequency-div">
                <input type="number" placeholder="enter a number" value={this.state.frequency_number} id="frequency_number" onChange={this.valueChange} onKeyUp={this.valueChange} />
                <button className="btn btn-danger" disabled={!Number(this.state.frequency_number)} type="button" onClick={this.processData}>Get</button>
            </div>
            {loadingDiv}
            {tableDiv}
            {outOfRangeMessage}
        </div>)
    }
}

export default FrequencyView;
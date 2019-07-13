import React, {PureComponent} from 'react';
import DeviceItem from '../components/DeviceItem';
import {getDevices} from '../api';

export default class Devices extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            devices: []
        }
    }

    componentDidMount() {
        this.refreshDevices();
    }

    refreshDevices = async () => {
        this.setState({
            devices: await getDevices()
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#/">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Devices</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-3 offset-9">
                        <a href="#/devices/add" className="btn btn-primary float-right">Add device</a>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.devices.map((device, index) =>
                                <DeviceItem key={device.id} device={device} index={index + 1} onUpdate={this.refreshDevices}/>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
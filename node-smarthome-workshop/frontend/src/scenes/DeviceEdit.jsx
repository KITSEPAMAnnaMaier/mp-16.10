import React, { PureComponent } from 'react';
import DeviceForm from '../components/DeviceForm';
import { getDeviceById, updateDevice } from '../api';

export default class DeviceEdit extends PureComponent {
    state = {
        device: null
    };

    componentDidMount = async () => {
        const { id } = this.props.match.params;

        this.setState({
            device: await getDeviceById(id)
        });
    };

    handleFormSubmit = async (device) => {
        const { id } = this.props.match.params;

        await updateDevice(id, device);
        window.history.back();
    };

    render() {
        const { device } = this.state;

        if (!device) {
            return null;
        }

        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#/">Home</a></li>
                                <li className="breadcrumb-item"><a href="#/devices">Devices</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Edit device</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <DeviceForm onSubmit={this.handleFormSubmit} device={device} />
                    </div>
                </div>
            </div>
        );
    }
}
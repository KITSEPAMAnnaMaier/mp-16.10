import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { devicePropType } from '../constants';

export default class DeviceForm extends PureComponent {
    handleCancelClick = () => {
        window.history.back();
    };

    handleSubmit = (event) => {
        this.props.onSubmit({
            ...this.props.device,
            name: event.target.deviceName.value,
            address: event.target.deviceAddress.value,
            port: parseInt(event.target.devicePort.value, 10)
        });

        event.preventDefault();
    };

    render() {
        const {device} = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="deviceName">Device Name</label>
                    <input type="text"
                           className="form-control"
                           id="deviceName"
                           name="deviceName"
                           placeholder="Device Name"
                           required
                           defaultValue={device.name}/>
                </div>

                <div className="form-group">
                    <label htmlFor="deviceAddress">IP Address</label>
                    <input type="text"
                           className="form-control"
                           id="deviceAddress"
                           name="deviceAddress"
                           placeholder="IP Address"
                           required
                           defaultValue={device.address}/>
                </div>

                <div className="form-group">
                    <label htmlFor="devicePort">Port</label>
                    <input type="text"
                           className="form-control"
                           id="devicePort"
                           name="devicePort"
                           placeholder="Port"
                           required
                           defaultValue={device.port}/>
                </div>

                <div className="float-right">
                    <button type="submit" className="btn btn-primary mr-2">Submit</button>
                    <button type="button" className="btn btn-default" onClick={this.handleCancelClick}>Cancel</button>
                </div>
            </form>
        );
    }
}

DeviceForm.defaultProps = {
    device: {
        name: '',
        address: '',
        port: 80
    }
};

DeviceForm.propTypes = {
    device: devicePropType,
    onSubmit: PropTypes.func.isRequired
};
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { groupPropType } from '../constants';
import { getDevices, addDeviceToGroup, removeDeviceFromGroup } from '../api';

const DevicesList = ({ isGroupDevices, devices, handleAdd, handleDelete }) => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Address</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      {devices.map(device => (
        <tr key={device.id}>
          <td>{device.name}</td>
          <td>{device.address}:{device.port}</td>
          <td className="text-right">
            <div className="btn-group" role="group">
              {isGroupDevices
                ? (
                  <button type="button" className="btn btn-danger" onClick={() => handleDelete(device)}>Delete from group</button>
                )
                : (
                  <button type="button" className="btn btn-primary" onClick={() => handleAdd(device)}>Add to group</button>
                )}
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default class GroupForm extends PureComponent {
  state = {
    devices: [],
    groupDevices: []
  }

  async componentDidMount() {
    const devices = await getDevices();
    const groupDevices = this.props.group.devices;

    this.setState({
      devices: devices.filter(device =>
        groupDevices.every(groupDevice => groupDevice.id !== device.id)),
      groupDevices
    });
  }

  handleCancelClick = () => {
    window.history.back();
  };

  handleSubmit = event => {
    this.props.onSubmit({
      ...this.props.group,
      name: event.target.groupName.value
    });
    event.preventDefault();
  };

  handleAddDevice = async (device) => {
    const { id } = this.props.group;
    const { id: deviceId } = device;
    await addDeviceToGroup(id, deviceId);

    this.setState(state => ({
      devices: state.devices.filter(device => device.id !== deviceId),
      groupDevices: [...state.groupDevices, device]
    }));
  }

  handleDeleteDevice = async (device) => {
    const { id } = this.props.group;
    const { id: deviceId } = device;
    await removeDeviceFromGroup(id, deviceId);

    this.setState(state => ({
      devices: [...state.devices, device],
      groupDevices: state.groupDevices.filter(device => device.id !== deviceId)
    }));
  }

  render() {
    const { group } = this.props;
    const { devices, groupDevices } = this.state;

    return (
      <>
        {groupDevices.length > 0 && (
          <DevicesList
            isGroupDevices={true}
            devices={groupDevices}
            handleDeviceAdd={this.handleAddDevice}
            handleDelete={this.handleDeleteDevice} />
        )}

        {group.id && (
          <DevicesList
            isGroupDevices={false}
            devices={devices}
            handleAdd={this.handleAddDevice}
            handleDelete={this.handleDeleteDevice} />
        )}

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="groupName">Group Name</label>
            <input type="text"
              className="form-control"
              id="groupName"
              name="groupName"
              placeholder="Group Name"
              defaultValue={group.name}
              required />
          </div>

          <div className="float-right">
            <button type="submit" className="btn btn-primary mr-2">Submit</button>
            <button type="button" className="btn btn-default" onClick={this.handleCancelClick}>Cancel</button>
          </div>
        </form>
      </>
    );
  }
}

GroupForm.defaultProps = {
  group: {
    name: '',
    devices: []
  }
};

GroupForm.propTypes = {
  group: groupPropType,
  onSubmit: PropTypes.func.isRequired
};
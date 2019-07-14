import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { removeGroup } from '../api';

export default class DeviceItem extends PureComponent {
    handleDelete = async () => {
        const { group, onUpdate } = this.props;

        await removeGroup(group.id);
        onUpdate();
    };

    render() {
        const { index, group } = this.props;

        return (
            <tr key={group.id}>
                <th scope="row">{index}</th>
                <td>{group.name}</td>
                <td className="text-right">
                    <div className="btn-group mr-4" role="group">
                        <button type="button" className="btn btn-outline-primary">On</button>
                        <button type="button" className="btn btn-outline-primary">Off</button>
                    </div>

                    <div className="btn-group" role="group">
                        <a href={`#/groups/log/${group.id}`} className="btn btn-outline-secondary">Log</a>
                        <a href={`#/groups/edit/${group.id}`} className="btn btn-outline-secondary">Edit</a>
                        <button type="button" className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
                    </div>
                </td>
            </tr>
        )
    }
}

DeviceItem.defaultProps = {
    onUpdate: () => { }
};

DeviceItem.propTypes = {
    group: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }),
    index: PropTypes.number.isRequired,
    onUpdate: PropTypes.func
};
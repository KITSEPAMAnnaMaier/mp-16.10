import React, { PureComponent } from 'react';
import GroupForm from '../components/GroupForm';
import { updateGroup, getGroupById } from '../api';

export default class DeviceEdit extends PureComponent {
  state = {
    group: null
  };

  componentDidMount = async () => {
    const { id } = this.props.match.params;

    this.setState({
      group: await getGroupById(id)
    });
  };

  handleFormSubmit = async (group) => {
    const { id } = this.props.match.params;

    await updateGroup(id, group);
    window.history.back();
  };

  render() {
    const { group } = this.state;

    if (!group) {
      return null;
    }

    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#/">Home</a></li>
                <li className="breadcrumb-item"><a href="#/groups">Groups</a></li>
                <li className="breadcrumb-item active" aria-current="page">Edit group</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <GroupForm onSubmit={this.handleFormSubmit} group={group} />
          </div>
        </div>
      </div>
    );
  }
}
import React, { PureComponent } from 'react';
import { getGroupById, getGroupLog } from '../api';

export default class GroupLog extends PureComponent {
  state = {
    group: null,
    log: []
  };

  componentDidMount = async () => {
    const { id } = this.props.match.params;

    this.setState({
      group: await getGroupById(id),
      log: await getGroupLog(id)
    });
  };

  render() {
    const { group, log } = this.state;

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
                <li className="breadcrumb-item"><a href="#/devices">Groups</a></li>
                <li className="breadcrumb-item active" aria-current="page">{group.name} Log</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {log.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.date}</td>
                    <td>{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
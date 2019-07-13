import React from 'react';
import GroupItem from '../components/GroupItem';

export default function() {
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Groups</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-3 offset-9">
                    <a href="#/groups/add" className="btn btn-primary float-right">Add group</a>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            <GroupItem group={ {id: 1, name: 'Group 1'} } index={1} />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
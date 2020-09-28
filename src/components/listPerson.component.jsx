import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table } from 'reactstrap';
import { AiOutlineMail } from 'react-icons/ai';

const ListBar = (props) => {
    return (
        <tr>
            <td>{props.person.personName}</td> 
            <td>{props.person.personAddress}</td>
            <td>{props.person.personNeed}</td>
            <td>{props.person.personDate}</td>
            <td>
                
                <Link to={"/delete/"+props.person._id}><AiOutlineMail /></Link>
            </td>
        </tr>
    );
}

const ListPerson = () => {
    const [listData, setListData] = useState({ lists: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:4000/all_person/'
            );
            setListData({ lists: result.data });
        };
        fetchData();
    }, []);

    return (
        <div className="list">
            <h3>List of Needs</h3>
            <Table striped style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Need</th>
                        <th>Help needed by (date)</th>
                        <th>Claim Need</th>
                    </tr>
                </thead>
                <tbody>
                    {listData.lists.map((current, i) => (
                        <ListBar person={current} key={i} />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ListPerson;
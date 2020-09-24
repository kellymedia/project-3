import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUser, AiOutlineExport, AiOutlineForward } from 'react-icons/ai';
import axios from 'axios';

const DeletePerson = (props) => {
    const [data, setData] = useState({
        person_name: "",
        person_lastname: "",
        person_address: "",
        person_need: "",
        person_phonenumber: "",
        person_description:""
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `http://localhost:4000/all_person/${props.match.params.id}`
            );
            setData({ ...result.data });
        };
        fetchData();
    }, []);

    const onDeletePersonData = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:4000/all_person/delete/${props.match.params.id}`, data).then(res => console.log(res.data));
        props.history.push('/');
    }

    return (
        <div style={{ marginTop: 10 }}>
           <h3>Offer to Fulfill this Need</h3>
            <Form onSubmit={onDeletePersonData}>
            <div className="claim">
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineUser /> Name </Label>
                        <Input
                            readOnly
                            type="text"
                            name="person_name"
                            className="form-control"
                            value={data.person_name} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Email </Label>
                        <Input
                            readOnly
                            type="text"
                            name="person_lastname"
                            className="form-control"
                            value={data.person_lastname} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineExport /> City/Town </Label>
                        <Input
                            readOnly
                            type="text"
                            name="person_address"
                            className="form-control"
                            value={data.person_address}/>
                    </Col>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Date Posted/Needed </Label>
                        <Input
                            readOnly
                            type="text"
                            name="person_date"
                            className="form-control"
                            value={data.person_date} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Need help with </Label>
                        <Input
                            readOnly
                            type="text"
                            name="person_need"
                            className="form-control"
                            value={data.person_need} />
                    </Col>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Contact Number </Label>
                        <Input
                            readOnly
                            type="number"
                            name="person_phonenumber"
                            className="form-control"
                            value={data.person_phonenumber}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> Description of Need </Label>
                        <Input
                            readOnly
                            type="text"
                            name="person_description"
                            className="form-control"
                            value={data.person_description} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Enter Your Email </Label>
                        <Input
                            type="text"
                            name="person_address"
                            className="form-control" />
                    </Col>
                   
                </FormGroup>
                </div>
                <div><Button color="danger"><AiOutlineForward /> Submit</Button></div>
            </Form>
        </div>
        
    );
}

export default DeletePerson;
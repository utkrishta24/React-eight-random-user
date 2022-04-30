import React from 'react';
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
const MyCard = ({ details }) => {
    return (
        <Card>
            <CardBody className='text-center'>
                <img height="150" width="150"
                    className='rounded-circle img-thumbnail border-danger'
                    src={details.picture?.large}
                />
                <CardTitle className='text-primary'>
                    <h1>
                        <span className="p-1">{details.name?.title}</span>
                        <span className="p-1">{details.name?.first}</span>
                        <span className="p-1">{details.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText>
                    <p>
                        <FaMapMarkedAlt />
                        {` ${details.location?.city}`}
                    </p>
                    <p>
                        <FaPhone />
                        {` ${details.phone}`}
                    </p>
                    <p>
                        <FaEnvelope />
                        {` ${details.email}`}
                    </p>

                </CardText>
            </CardBody>
        </Card>
    )
};

export default MyCard;


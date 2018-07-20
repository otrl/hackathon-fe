import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'immutable';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

class OdDataSearchForm extends React.PureComponent {
    static propTypes = {
        place: PropTypes.string,
        type: PropTypes.string,
        purpose: PropTypes.string,
        timeZone: PropTypes.string,
        places: PropTypes.instanceOf(List),
        handleSubmit: PropTypes.func.isRequired
    };

    state = {
        place: this.props.place,
        type: this.props.type,
        purpose: this.props.purpose,
        timeZone: this.props.timeZone
    };

    onFieldChange = (field) => {
        return (e) => {
            this.setState({
               [field]: e.target.value
            });
        };
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        if (this.isValid()) {
            const {place, type, purpose, timeZone} = this.state;

            this.props.handleSubmit(place, type, purpose, timeZone);
        }
    };

    isValid () {
        const {place, type, purpose, timeZone} = this.state;

        return place && type && purpose && timeZone;
    }

    render () {
        const {place, type, purpose, timeZone} = this.state;
        return (
            <form onSubmit={this.onFormSubmit}>
                <Row>
                    <Col xs={12} sm={6}>
                        <FormGroup controlId="place">
                            <FormControl value={place} componentClass="select" placeholder="select" onChange={this.onFieldChange("place")}>
                                {this.props.places.map(placeOption => <option key={placeOption.id} value={placeOption.lad_name}>{placeOption.lad_name}</option>)}
                            </FormControl>
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={6}>
                        <FormGroup controlId="type">
                            <FormControl value={type} componentClass="select" placeholder="select" onChange={this.onFieldChange("type")}>
                                <option value="origin">Origin</option>
                                <option value="destination">Destination</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={5}>
                        <FormGroup controlId="timeZone">
                            <FormControl value={purpose} componentClass="select" placeholder="select" onChange={this.onFieldChange("purpose")}>
                                <option value="all">All</option>
                                <option value="nhb">Not home based</option>
                                <option value="hbw inbound">Going Home from Work</option>
                                <option value="hbw outbound">Going to work</option>
                                <option value="hbo outbound">Going to leisure</option>
                                <option value="hbo inbound">Going home from leisure</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={4}>
                        <FormGroup controlId="timeZone">
                            <FormControl value={timeZone} componentClass="select" placeholder="select" onChange={this.onFieldChange("timeZone")}>
                                <option value="all">All</option>
                                <option value="0700-1000">07:00-10:00</option>
                                <option value="1000-1600">10:00-16:00</option>
                                <option value="1600-1900">16:00-19:00</option>
                                <option value="1900-0700">19:00-07:00</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={3}>
                        <Button disabled={!this.isValid()} onClick={this.onFormSubmit} className="btn-block">Search</Button>
                    </Col>
                </Row>
            </form>
        );
    }
}

export default OdDataSearchForm;


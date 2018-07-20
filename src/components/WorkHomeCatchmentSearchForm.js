import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

class WorkHomeCatchmentSearchForm extends React.PureComponent {
    static propTypes = {
        postcode: PropTypes.string,
        type: PropTypes.string,
        handleSubmit: PropTypes.func.isRequired
    };

    state = {
        postcode: this.props.postcode,
        type: this.props.type
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
            this.props.handleSubmit(this.state.postcode, this.state.type);
        }
    };

    isValid () {
        const {postcode, type} = this.state;

        return postcode && type;
    }

    render () {
        const {postcode, type} = this.state;
        return (
            <form onSubmit={this.onFormSubmit}>
                <Row>
                    <Col xs={12} sm={5}>
                        <FormGroup
                            controlId="formBasicText"
                        >
                            <FormControl
                                type="text"
                                value={postcode}
                                placeholder="Postcode"
                                onChange={this.onFieldChange("postcode")}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={4}>
                        <FormGroup controlId="formControlsSelect">
                            <FormControl value={type} componentClass="select" placeholder="select" onChange={this.onFieldChange("type")}>
                                <option value="work">Work</option>
                                <option value="home">Home</option>
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

export default WorkHomeCatchmentSearchForm;


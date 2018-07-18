import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {Helmet} from 'react-helmet';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import TestState from '../../records/TestState';
import UiState from '../../records/UiState';

import TestActions from "../../actions/TestActions";
import Header from '../Header';
import Footer from '../Footer';
import LineChart from '../LineChart';

class Home extends React.PureComponent {
    static propTypes = {
        ui: PropTypes.instanceOf(UiState).isRequired,
        testState: PropTypes.instanceOf(TestState).isRequired,
        getTest: PropTypes.func.isRequired
    };

    componentDidMount () {
        this.props.getTest();
    }

    // componentWillReceiveProps (newProps) {
    //
    // }

    render () {
        const {testState, ui} = this.props;
        console.log('testState', testState);
        return (
            <React.Fragment>
                {ui.isLoading() && <div className="page-loader"/>}
                <Helmet>
                    <title>Home Page</title>
                    <meta name="description" content="Home Page"/>
                </Helmet>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <Header/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            Content
                            <br/><br/>

                            <LineChart/>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12}>
                            <Footer/>
                        </Col>
                    </Row>
                </Grid>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTest: bindActionCreators(TestActions.get, dispatch)
    };
};

const mapStateToProps = (state) => {
    return {
        ui: state.ui,
        testState: state.test,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);


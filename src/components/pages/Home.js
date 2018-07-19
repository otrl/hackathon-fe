import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {Helmet} from 'react-helmet';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import UiState from '../../records/UiState';

import WorkHomeCatchmentActions from "../../actions/WorkHomeCatchmentActions";
import Header from '../Header';
import Footer from '../Footer';
// import LineChart from '../LineChart';
import GMaps from '../GMaps';
import WorkHomeCatchmentState from "../../records/WorkHomeCatchmentState";

class Home extends React.PureComponent {
    static propTypes = {
        ui: PropTypes.instanceOf(UiState).isRequired,
        catchmentsState: PropTypes.instanceOf(WorkHomeCatchmentState).isRequired,
        search: PropTypes.func.isRequired
    };

    state = {
        postcode: "E1",
        type: "work"
    };

    componentDidMount () {
        const { postcode, type } = this.state;
        this.props.search(postcode,type);
    }

    render () {
        const {catchmentsState, ui} = this.props;
        console.log('catchments', catchmentsState);
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

                            {/*<LineChart/>*/}
                            <GMaps data={catchmentsState.catchments} origin={catchmentsState.originPoint} isMarkerShown />
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
        search: bindActionCreators(WorkHomeCatchmentActions.search, dispatch)
    };
};

const mapStateToProps = (state) => {
    return {
        ui: state.ui,
        catchmentsState: state.catchments,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);


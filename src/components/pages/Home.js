import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import {Helmet} from 'react-helmet';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import UiState from '../../records/UiState';

import WorkHomeCatchmentActions from '../../actions/WorkHomeCatchmentActions';
import Header from '../Header';
import Footer from '../Footer';
// import LineChart from '../LineChart';
import GMaps from '../GMaps';
import WorkHomeCatchmentState from '../../records/WorkHomeCatchmentState';
import OdDataState from '../../records/OdDataState';

import WorkHomeCatchmentSearchForm from './../WorkHomeCatchmentSearchForm';
import OdDataSearchForm from './../OdDataSearchForm';
import OdDataActions from "../../actions/OdDataActions";

class Home extends React.PureComponent {
    static propTypes = {
        ui: PropTypes.instanceOf(UiState).isRequired,
        catchmentsState: PropTypes.instanceOf(WorkHomeCatchmentState).isRequired,
        odDataState: PropTypes.instanceOf(OdDataState).isRequired,
        workHomeCatchmentsSearch: PropTypes.func.isRequired,
        odDataSearch: PropTypes.func.isRequired,
        odDataPlacesSearch: PropTypes.func.isRequired,
    };

    componentDidMount () {
        const {
            catchmentsState,
            workHomeCatchmentsSearch,
            odDataState: {place, type, purpose, timeZone, mode},
            odDataSearch,
            odDataPlacesSearch
        } = this.props;
        workHomeCatchmentsSearch(catchmentsState.postcode, catchmentsState.type);
        odDataSearch(place, type, purpose, timeZone, mode);
        odDataPlacesSearch();
    }

    handleCatchmentFormSubmit = (postcode, type) => {
        this.props.workHomeCatchmentsSearch(postcode,type);
    };

    handleOdDataFormSubmit = (place, type, purpose, timeZone, mode) => {
        this.props.odDataSearch(place, type, purpose, timeZone, mode);
    };

    render () {
        const {catchmentsState, odDataState, ui} = this.props;
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
                            <br/>
                            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                                <Tab eventKey={1} title="Enhanced ODData">
                                    <br/>
                                    <OdDataSearchForm handleSubmit={this.handleOdDataFormSubmit}
                                                      type={odDataState.type}
                                                      mode={odDataState.mode}
                                                      place={odDataState.place}
                                                      places={odDataState.places}
                                                      purpose={odDataState.purpose}
                                                      timeZone={odDataState.timeZone}/>

                                    <br/>
                                    <GMaps odData={odDataState.data.map(datum => {
                                        return {
                                            latitude: odDataState.type === 'destination' ? datum.start_latitude : datum.end_latitude,
                                            longitude: odDataState.type === 'destination' ? datum.start_longitude : datum.end_longitude,
                                            weight: datum.trips
                                        }
                                    })} origin={odDataState.originPoint} isMarkerShown />
                                </Tab>
                                <Tab eventKey={2} title="Workers home catchment">
                                    <br/>
                                    <WorkHomeCatchmentSearchForm postcode={catchmentsState.postcode}
                                                                 type={catchmentsState.type}
                                                                 handleSubmit={this.handleCatchmentFormSubmit} />
                                    <br/>
                                    <GMaps catchmentData={catchmentsState.catchments} origin={catchmentsState.originPoint} isMarkerShown />
                                </Tab>
                            </Tabs>


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
        workHomeCatchmentsSearch: bindActionCreators(WorkHomeCatchmentActions.search, dispatch),
        odDataSearch: bindActionCreators(OdDataActions.search, dispatch),
        odDataPlacesSearch: bindActionCreators(OdDataActions.getPlaces, dispatch)
    };
};

const mapStateToProps = (state) => {
    return {
        ui: state.ui,
        catchmentsState: state.catchments,
        odDataState: state.odData,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);


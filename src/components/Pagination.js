import React from 'react';
import PropTypes from 'prop-types';
import P from 'react-bootstrap/lib/Pagination';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import {createUltimatePagination, ITEM_TYPES} from 'react-ultimate-pagination';
import _ from 'lodash';

import Search from '../records/Search';

export default function Pagination({search, count, onPageChange, onLimitChange}) {
    const {page, limit} = search;
    const totalPages = Math.ceil(count / limit);
    if (count === 0 || page > totalPages) {
        return null;
    }

    const UltimatePagination = createUltimatePagination({
        WrapperComponent: P,
        itemTypeToComponent: {
            [ITEM_TYPES.PAGE]: ({value, isActive, onClick}) => {
                const newSearch = search.set('page', value);
                const handleClick = (e) => {
                    e.preventDefault();
                    onClick(e);
                };

                return (
                    <P.Item href={`/?${newSearch.toQuery()}`} active={isActive} onClick={handleClick}>{value}</P.Item>
                );
            },
            [ITEM_TYPES.ELLIPSIS]: ({isActive, onClick}) => (
                <P.Ellipsis disabled={isActive} onClick={onClick}/>
            ),
            [ITEM_TYPES.FIRST_PAGE_LINK]: ({isActive, onClick}) => (
                <P.First disabled={isActive} onClick={onClick}/>
            ),
            [ITEM_TYPES.PREVIOUS_PAGE_LINK]: ({isActive, onClick}) => (
                <P.Prev disabled={isActive} onClick={onClick}/>
            ),
            [ITEM_TYPES.NEXT_PAGE_LINK]: ({isActive, onClick}) => (
                <P.Next disabled={isActive} onClick={onClick}/>
            ),
            [ITEM_TYPES.LAST_PAGE_LINK]: ({isActive, onClick}) => (
                <P.Last disabled={isActive} onClick={onClick}/>
            ),
        },
    });

    return (
        <Row className="pagination-section">
            <Col sm={7} xs={12} className="text-xs-center text-sm-left">
                {totalPages > 1 && <UltimatePagination currentPage={page}
                                                       totalPages={totalPages}
                                                       boundaryPagesRange={0}
                                                       siblingPagesRange={1}
                                                       onChange={onPageChange}/>}
            </Col>
            <Col sm={5} xs={12} className="text-xs-center text-sm-right">
                <DropdownButton id={_.uniqueId('limit-selector__')}
                                title={`${limit} ανά σελίδα (${count} σύνολο)`}
                                onSelect={onLimitChange}>
                    <MenuItem eventKey="20"> 20 </MenuItem>
                    <MenuItem eventKey="30"> 30 </MenuItem>
                    <MenuItem eventKey="50"> 50 </MenuItem>
                </DropdownButton>
            </Col>
        </Row>
    );
}

Pagination.propTypes = {
    search: PropTypes.instanceOf(Search),
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    onLimitChange: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
    search: new Search()
};
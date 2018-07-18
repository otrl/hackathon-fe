import {List, fromJS as originalFromJS, Iterable} from 'immutable';
import _ from 'lodash';

import knownRecordTypes from '../reducers/index';

export function resolve (value) {
    return {
        as: (record) => _.isNil(value) ? value : record.fromJSON(value),
        with: (fn) => _.isNil(value) ? value : fn(value)
    };
}

export function fromJS(any) {
    return originalFromJS(any, (key, value) => {
        try {
            if (Iterable.isIndexed(value)) {return value.toList();} // we're reviving an array -> it's a List
            const map = value.toOrderedMap();
            const MatchingType = knownRecordTypes[map.get('REC_TYPE')]; // check if we know a Record with this type
            // if (MatchingType) console.log(value.toJS(), resolve(value.toJS()).as(MatchingType));
            if (MatchingType) {
                return resolve(value.toJS()).as(MatchingType);
            } // we found a matching Record type -> instantiate it
            // if (MatchingType) return new MatchingType(value); // we found a matching Record type -> instantiate it
            return value.toMap(); // no matching Record type found -> it's a plain old Map
        } catch (err) {
            console.log(err);
        }
    });
}

export function construct (Type, values = {}, schema = {}) {
    const resolved = Object.keys(schema).reduce((reduction, key) => {
        const factory = schema[key];
        if (typeof factory === 'function') {
            reduction[key] = factory(values[key]);
        } else {
            reduction[key] = factory;
        }
        return reduction;
    }, {});
    return new Type(resolved);
}

resolve.as = function (Type) {
    return function (value) { return resolve(value).as(Type); };
};

resolve.with = function (func) {
    return function (value) { return resolve(value).with(func); };
};

export function resolveAll (keys) {
    const list = new List(keys);
    const resolved = list.map((key) => resolve(key));

    return {
        as: (Type) => resolved.map((item) => item.as(Type)),
        with: (func) => resolved.map((item) => item.with(func))
    };
}

resolveAll.as = function (Type) {
    return function (value) { return resolveAll(value).as(Type); };
};

resolveAll.with = function (func) {
    return function (value) { return resolveAll(value).with(func); };
};

export const fields = {
    string: resolve.with(String),
    bool: resolve.with(Boolean),
    boolean: resolve.with(Boolean),
    number: resolve.with(Number),
    datetime: resolve.with(Date)
};


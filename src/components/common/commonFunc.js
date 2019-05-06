import _ from 'lodash';

export const timestampToDateTime = timestamp => {
    let date = new Date(timestamp);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
};

export const getFirebaseData = value => {
    let itemsVal = value;
    let items = _(itemsVal)
        .keys()
        .map(itemKey => {
            let cloned = _.clone(itemsVal[itemKey]);
            cloned.key = itemKey;
            return cloned;
        }).value();
    return items;
}

export const canSubmit = clfResult => {
    for (let key1 in clfResult) {
        for (let key2 in clfResult[key1]) {
            if (clfResult[key1][key2]['pred']) {
                return false;
            }
        }
    }
    return true;
}
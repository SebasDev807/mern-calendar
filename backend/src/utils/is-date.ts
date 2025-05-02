import moment from 'moment';

export const isDate = (value: unknown) => {

    if (!value) {
        return false;
    }

    const date = moment(value);

    if (date.isValid()) {
        return true;
    } else {
        return false;
    }


}
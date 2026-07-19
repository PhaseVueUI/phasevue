export const toValues = (value: any, name?: string) => {
    if (name) {
        return value !== null && typeof value === 'object' && Object.hasOwn(value, name) ? value : { [name]: value };
    }

    return value;
};

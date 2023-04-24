export const removeUnderscores = (str) => {
    return str.replace(/_/g, ' ');
};

export const capitalise = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const formatString = (str) => {
    return capitalise(removeUnderscores(str));
};

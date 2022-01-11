// Nested middleware
const nested = (req, res, next) => {
    console.log("Nested middleware");
    next();
};

// exporting the nested middleware function and naming it nested
module.exports = nested;
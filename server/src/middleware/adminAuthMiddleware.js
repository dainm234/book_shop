
const adminAuthMiddleware = (req, res, next) => {
    if (!req.user || !req.user.isAdmin) {
        return res.status(404).send("Page not found");
    }
    next();
};

module.exports = adminAuthMiddleware;

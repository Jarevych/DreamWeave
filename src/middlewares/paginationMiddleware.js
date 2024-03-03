const paginationMiddleware = (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10; 

    console.log(page, pageSize)
  
    req.pagination = {
      page,
      pageSize,
    };
  
    next();
  };
  
  module.exports = paginationMiddleware;
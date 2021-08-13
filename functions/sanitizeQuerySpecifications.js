const needsData = {
    PATCH: true,
    POST: true,
}

const needsWhere = {
    DELETE: true,
    GET: true,
    PATCH: true,
}

function sanitizeQuerySpecifications(QuerySpecifications){
    if(!needsData[QuerySpecifications.operationType]){
        delete QuerySpecifications.requestData.data
    }
    else if(!needsWhere[QuerySpecifications.operationType]){
        delete QuerySpecifications.requestData.where
    }
    return QuerySpecifications
}


exports.sanitizeQuerySpecifications = sanitizeQuerySpecifications

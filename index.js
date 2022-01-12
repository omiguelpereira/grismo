
const { prismaErrorsToHTTP } = require('./constants/prismaErrorsToHTTP')
const { httpMethodsToPrisma } = require('./constants/httpMethodsToPrisma')
const { sanitizeQuerySpecifications } = require('./functions/sanitizeQuerySpecifications')
const {PrismaErrorToHttpCode} = require('./functions/PrismaErrorToHttpCode')
const {createQueryResults} = require('./functions/createQueryResults')



function GrismoClient(prisma){

    const grismo = {

        async operation(querySpecifications, callback) {

            querySpecifications = sanitizeQuerySpecifications(querySpecifications)
            querySpecifications.operationType = httpMethodsToPrisma[querySpecifications.operationType]
            const operationResult = await prisma[`${querySpecifications.model}`][`${querySpecifications.operationType}`](
                querySpecifications.requestData
            )
                .then((data) => { return callback(createQueryResults({ data: data, ...querySpecifications, httpStatusCode: Object.keys(data).length > 0 ? 200 : 404 })) })
                .catch((error) => {
                    return callback(createQueryResults({ ...querySpecifications, error, httpStatusCode: PrismaErrorToHttpCode(error.code, prismaErrorsToHTTP) }))
                })
                
        },

        createQuerySpecifications({ requestData, model, operationType }) {
            let querySpecifications = { requestData, model, operationType }
            return querySpecifications
        },

    }
    return grismo
}

exports.GrismoClient = GrismoClient

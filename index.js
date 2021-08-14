const { PrismaClient } = require('@prisma/client')
const { prismaErrorsToHTTP } = require('grismo/prismaErrorsToHTTP.js')
const { httpMethodsToPrisma } = require('grismo/httpMethodsToPrisma.js')
const { sanitizeQuerySpecifications } = require('grismo/sanitizeQuerySpecifications.js')

const prisma = new PrismaClient({ log: ['info'], errorFormat: 'pretty', })

const GrismoClient = () => {

    function createQueryResults({ ...args }) {
        return QueryResults = { ...args }
    }

    function PrismaErrorToHttpCode(errorCode, supportedErrors) {
        return supportedErrors[errorCode]
    }

    const grismo = {

        async operation(querySpecifications, callback) {

            querySpecifications = sanitizeQuerySpecifications(querySpecifications)
            querySpecifications.operationType = httpMethodsToPrisma[querySpecifications.operationType]
            const operationResult = await prisma[`${querySpecifications.model}`][`${querySpecifications.operationType}`](
                querySpecifications.requestData
            )
                .then((data) => { return callback(createQueryResults({ data: data, ...querySpecifications, httpStatusCode: 200 })) })
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

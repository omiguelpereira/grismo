function PrismaErrorToHttpCode(errorCode, supportedErrors) {
    return supportedErrors[errorCode]
}

exports.PrismaErrorToHttpCode = PrismaErrorToHttpCode

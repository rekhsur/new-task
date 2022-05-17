exports.appConstants ={
    errors:{
        dbErrors:{
            mongoDuplicateErrCode:11000,
            mongodbDuplicateUserMessage:"Account is already exists",
            accountNotFound:"Account not found",
            invalidPassword:"Password is invalid"
        },
        errorName:{
            validationError:"validation error",
            mongoServerError:"Mongo server Error"
        },
        errorMesssage:{
            ApiAccessDenied:"Api Access Denied",
            unProcessBody:"Inavlid request Body",
            InvalidEmail:"Email is Invalid",
            AuthenticationFailed:"User Authentication failed"
        },

    },
    httpCode:{
        ok:[200, "Ok success"],
        created:[201, "created successfully"],
        badRequest:[400, "Bad Request"],
        notFound:[404, 'Not found'],
        forbidden:[403, "Not authenticate"],
        unprocessed:[422, "unprocessed"],
        internalServer:[500, "Internal server Problem"]

    },
}
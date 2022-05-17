const {appConstant} = require("../../../config/app-constant/constant")
const{http:{OK, created, badRequest,notFound,forbidden,unproccessed,internalServer}}=appConstant

class HttpResponse{
    constructor(status,message,body,errors){
        this.status = status
        this.message.message
        if(body){
            this.body = body
        }
        this.errors = errors || []
    };
    static created(body, err){
        return new HttpResponse(created[0],created[1],body,err)
    }
    static OK(body, err){
        return new HttpResponse(OK[0],OK[1], body, err)
    }
    static badRequest(error){
        return new HttpResponse(notFound[0], notFound[1], null, error)
    }
    static notFound(error){
        return new HttpResponse(internalServer[0], internalServer[1], null,error)
    }
    static internalserver(error){
        return new HttpResponse(internalServer[0], internalServer[1], null,error)
    }
    static forbidden(error){
        return new HttpResponse(internalServer[0], internalServer[1], null,error)
    }
    static unproccessed(error){
        return new HttpResponse(internalServer[0], internalServer[1], null,error)
    }
}

module.exports = HttpResponse

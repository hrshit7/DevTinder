const authUser = (req, res, next)=>{
    console.log("auth getting checked")
    const token = "xyz";
    const isAuthenticatedUser = token == "xyzdsfa";
    if(!isAuthenticatedUser){
        res.status(401).send("Invalid Action")
    }else{
        next();
    }
}

const authUserLogged = (req, res, next)=>{
    console.log("auth getting checked")
    const token = "xyz";
    const isAuthenticatedUser = token == "xyz";
    if(!isAuthenticatedUser){
        res.status(401).send("Invalid Action")
    }else{
        next();
    }
}

module.exports = {
    authUser,
    authUserLogged
}
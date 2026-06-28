function Alert({msg}){
    return(
        <div className="alert alert-primary alert-dismissable">
            {msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="CLose"></button>
        </div>
    );
}

export default Alert;
import "./ErrorWrapper.css";

const ErrorWrapper = (props) => {
    return(
        <article className="error-wrapper" data-error={props.message}>
            {props.children}
        </article>
    )
}

export default ErrorWrapper;

import "./DisplayImages.css";

function DisplayImages(props) {

    return (
        <div className="images-container">
            {props.result.map((element, index) => {
                return (
                    <img
                        key={index}
                        className="display-images"
                        src={element.urls.small}
                        alt={element.alt_description} 
                    />
                );
            })}

        </div>
    );
}

export default DisplayImages;
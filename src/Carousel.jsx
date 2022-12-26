import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="w-80 flex-col">
        <img src={images[active]} alt="animal hero" className="mb-4" />
        <div className="mb-4 flex w-20">
          {images.map((photo, index) => (
            /* eslint-disable-next-line */
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={`p-1 ${index === active ? "active" : ""}`}
              alt="animal thumb"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;

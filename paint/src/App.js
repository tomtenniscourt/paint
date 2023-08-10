import React, { Component } from "react";
import "./App.css";

class Paint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPainting: false,
      brushSize: 5,
      color: "#000000",
    };
  }

  componentDidMount() {
    this.canvas.addEventListener("mousedown", this.startPainting);
    this.canvas.addEventListener("mouseup", this.stopPainting);
    this.canvas.addEventListener("mousemove", this.paint);
  }

  componentWillUnmount() {
    this.canvas.removeEventListener("mousedown", this.startPainting);
    this.canvas.removeEventListener("mouseup", this.stopPainting);
    this.canvas.removeEventListener("mousemove", this.paint);
  }

  startPainting = () => {
    this.setState({ isPainting: true });
  };

  stopPainting = () => {
    this.setState({ isPainting: false });
  };

  paint = (event) => {
    const { isPainting, brushSize, color } = this.state;
    if (!isPainting) return;

    const rect = this.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const ctx = this.canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, brushSize, 0, Math.PI * 2);
    ctx.fill();
  };

  handleClearCanvas = () => {
    const ctx = this.canvas.getContext("2d");
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  handleBrushSizeChange = (event) => {
    this.setState({ brushSize: parseInt(event.target.value) });
  };

  handleColorChange = (event) => {
    this.setState({ color: event.target.value });
  };

  handleDownloadImage = () => {
    const canvas = this.canvas;
    const link = document.createElement("a");
    link.download = "painting.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  render() {
    const { brushSize, color } = this.state;

    return (
      <div className="paint-page-content">
        <br />
        <h1 className="paint-h1">Paint by Tom</h1>
        <div className="controls">
          <label>
            Brush Size:
            <select value={brushSize} onChange={this.handleBrushSizeChange}>
              <option value={1}>Extra Small</option>
              <option value={3}>Small</option>
              <option value={5}>Medium</option>
              <option value={10}>Large</option>
              <option value={20}>Extra Large</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            Colour:
            <input
              type="color"
              value={color}
              onChange={this.handleColorChange}
            />
          </label>
          <br />
          <br />
        </div>
        <canvas
          ref={(ref) => (this.canvas = ref)}
          className="paint-canvas"
          width={600}
          height={400}
        ></canvas>
        <br />
        <button className="clear" onClick={this.handleClearCanvas}>
          Clear Canvas
        </button>
        <button className="download" onClick={this.handleDownloadImage}>
          Download Image
        </button>
        <br />
      </div>
    );
  }
}

export default Paint;
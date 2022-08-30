import React from "react";

import { mergeSort } from "../SortingAlgos/MergeSort";
import { bubbleSort } from "../SortingAlgos/BubbleSort";
import { selectionSort } from "../SortingAlgos/SelectionSort";
import { insertionSort } from "../SortingAlgos/InsertionSort";

import Data from "./Data";
import Card from "./Card";

import "./SortingVisualizer.css";
import "./Slider.css";

const initialState = {
  array: [],
  defaultValue: 24,
  data: Data,
  cardIndex: 0,
  disabled: false,
  speed: 9,
  resetDisabled: false,
};

export default class SortingVisualiser extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.resetArray();
  }

  handleChange = (event) => {
    this.setState({
      defaultValue: event.target.value,
    });
    this.resetArray();
  };

  speedChange = (event) => {
    this.setState({
      speed: event.target.value,
    });
  };

  animateAlgorithm(animations, speed) {
    for (let i = 0; i < animations.length; i++) {
      let animationSpeed = i * speed;
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "#D69A81" : "white";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, animationSpeed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, animationSpeed);
      }
    }
    setTimeout(() => {
      this.setState({ resetDisabled: false });
    }, animations.length * speed);
  }

  resetArray() {
    const array = [];
    const height = document.getElementById("main").clientHeight;
    const width =
      document.getElementById("main").clientWidth / this.state.defaultValue;
    for (let i = 0; i < width; i++) {
      let randInt = randomIntFromInterval(10, height / 1.05);
      array.splice(0, array.length, ...new Set(array));
      if (array.indexOf(randInt) === -1) {
        array.push(randInt);
      }
    }
    this.setState({ array, disabled: false, cardIndex: 0 });
  }

  hardResetArray() {
    const array = [];
    const height = document.getElementById("main").clientHeight;
    const width =
      document.getElementById("main").clientWidth / this.state.defaultValue;
    for (let i = 0; i < width; i++) {
      let randInt = randomIntFromInterval(50, height / 1.2);
      array.splice(0, array.length, ...new Set(array));
      if (array.indexOf(randInt) === -1) {
        array.push(randInt);
      }
    }
    for (let i = 0; i < this.state.array.length; i++) {
      const mainColor = document.querySelectorAll(".array-bar");
      mainColor[i].style.backgroundColor = "#222222";
    }
    this.setState({ array, disabled: false, cardIndex: 0, running: false });
  }

  bubbleSort() {
    this.setState({ disabled: true, resetDisabled: true, cardIndex: 1 });
    const animations = bubbleSort(this.state.array);
    this.animateAlgorithm(animations, this.state.speed);
  }

  insertionSort() {
    this.setState({ disabled: true, resetDisabled: true, cardIndex: 2 });
    const animations = insertionSort(this.state.array);
    this.animateAlgorithm(animations, this.state.speed);
  }

  selectionSort() {
    this.setState({ disabled: true, resetDisabled: true, cardIndex: 3 });
    const animations = selectionSort(this.state.array);
    this.animateAlgorithm(animations, this.state.speed);
  }

  mergeSort() {
    this.setState({ disabled: true, resetDisabled: true, cardIndex: 4 });
    const clone = this.state.array.slice(0);
    const animations = mergeSort(clone);
    this.animateAlgorithm(animations, this.state.speed);
  }

  render() {
    const { array } = this.state;
    return (
      <div className="project-container ">
        <header>
          <div className="title ">VisualSort</div>
          <div className="icon"></div>
        </header>
        <left-section>
          <div className="left-container ">
            <div className="card-container">
              <Card
                key={this.state.cardIndex}
                data={Data}
                cardIndex={this.state.cardIndex}
              />
            </div>
          </div>
        </left-section>
        <main-section id="main">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              id="array-bar"
              key={idx}
              style={{ height: `${value}px`, backgroundColor: "#222222" }}
            ></div>
          ))}
        </main-section>
        <right-section>
          <div className="right-container ">
            <div className="buttons">
              <button
                disabled={this.state.disabled}
                onClick={() => this.bubbleSort()}
                className="bubblebtn"
              >
                Bubble Sort
              </button>
              <button
                disabled={this.state.disabled}
                onClick={() => this.insertionSort()}
                className="insertionbtn"
              >
                Insertion Sort
              </button>
              <button
                disabled={this.state.disabled}
                onClick={() => this.selectionSort()}
                className="selectionbtn"
              >
                Selection Sort
              </button>
              <button
                disabled={this.state.disabled}
                onClick={() => this.mergeSort()}
                className="mergebtn"
              >
                Merge Sort
              </button>
            </div>
            <div className="sliders">
              <h4>Visualiser Settings:</h4>
              <br />
              <div className="">
                <h6>Speed</h6>
                <div className="speed-container">
                  <img
                    src="https://img.icons8.com/windows/24/000000/turtle.png"
                    alt=""
                  />
                  <input
                    className="sliders-bar"
                    id="speed"
                    type="range"
                    min="1"
                    max="40 "
                    value={this.state.value}
                    onChange={this.speedChange}
                    step="1"
                  />
                  <img
                    src="https://img.icons8.com/windows/28/000000/running-rabbit.png"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <h6>Array Size</h6>
                <div className="speed-container">
                  <img
                    src="https://img.icons8.com/windows/24/000000/elephant.png"
                    alt=""
                  />
                  <input
                    className="sliders-bar"
                    id="typeinp"
                    type="range"
                    min="6"
                    max="48"
                    value={this.state.value}
                    onChange={this.handleChange}
                    step="1"
                  />
                  <img
                    src="https://img.icons8.com/material-outlined/22/000000/mouse-animal.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="control-buttons">
              <button
                disabled={this.state.resetDisabled}
                onClick={() => this.hardResetArray()}
                className="new-arraybtn"
              >
                Reset Array
              </button>
              <button
                onClick={() => window.location.reload()}
                className="cancel-animation"
              >
                Cancel
              </button>
            </div>
          </div>
        </right-section>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

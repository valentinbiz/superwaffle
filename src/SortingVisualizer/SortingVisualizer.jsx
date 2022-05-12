import React from "react";

import { mergeSort } from "../SortingAlgos/MergeSort";
import { bubbleSort } from "../SortingAlgos/BubbleSort";
import { selectionSort } from "../SortingAlgos/SelectionSort";
import { insertionSort } from "../SortingAlgos/InsertionSort";

import Data from "./Data";
import Card from "./Card";

import './SortingVisualizer.css';
import './Slider.css';

export default class SortingVisualiser extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        array: [],
        defaultValue: 19,
        data: Data,
        cardIndex: 0
      };
    }

    componentDidMount() {
      this.resetArray();
    }

    handleChange = (event) => {
      this.setState({
        defaultValue: event.target.value
      });
      this.resetArray();
    }

    resetArray() {
      const array = [];
      const height = document.getElementById('main').clientHeight;
      const width = document.getElementById('main').clientWidth / this.state.defaultValue;
      for (let i = 0; i < width; i++) {
        array.splice(0, array.length, ...(new Set(array)));
        let randInt = randomIntFromInterval(20, height / 1.2);
        if (array.indexOf(randInt) === -1) {
          array.push(randInt)
        }
      }
      this.setState({
        array
      });
    }

    bubbleSort() {
      const animations = bubbleSort(this.state.array);
      animateAlgorithm(animations, animationSpeed());
      this.setState({
        cardIndex: 1
      });
    };

    insertionSort() {
      const animations = insertionSort(this.state.array);
      animateAlgorithm(animations, animationSpeed());
      this.setState({
        cardIndex: 2
      });
    };

    selectionSort() {
      const animations = selectionSort(this.state.array);
      animateAlgorithm(animations, animationSpeed());
      this.setState({
        cardIndex: 3
      });
    };

    mergeSort() {
      const clone = this.state.array.slice(0);
      const animations = mergeSort(clone);
      animateAlgorithm(animations, animationSpeed());
      this.setState({
        cardIndex: 4
      })
    };

    render () {
        const {array} = this.state;
        
        return (
          <div className="project-container">
            <header> VisualSort</header>
              <left-section>
                <div className="left-container" >
                  <Card key={Data.key} data={Data} cardIndex= {this.state.cardIndex}  />
                </div>
              </left-section>
              <main-section id="main">
                {array.map((value, idx) => (
                    <div className="array-bar" id='array-bar' key={idx} style = {{height: `${value}px`}}> 
                    </div>
                ))}
              </main-section>
              <right-section> 
                <div className="right-container">
                <div className="buttons">
                  <button onClick={() => this.bubbleSort()} className="bubblebtn">Bubble Sort</button>
                  <button onClick={() => this.insertionSort()} className="insertionbtn">Insertion Sort</button>
                  <button onClick={() => this.selectionSort()} className="selectionbtn">Selection Sort</button>
                  <button onClick={() => this.mergeSort()  && console.log(this.state)} className="mergebtn">Merge Sort</button>
                  <button onClick={() => window.location.reload()} className="new-arraybtn">Reset Array</button>
                </div>
                  <div className="sliders">
                    <h5>Visualiser Settings:</h5>
                      <br/>
                      <div>
                        <h6>Speed</h6> 
                        <div className="speed-container">
                          <img src="https://img.icons8.com/windows/24/000000/turtle.png" alt=''/>
                            <input className="sliders-bar"
                            id="speed" 
                            type="range" 
                            min="1" max="13" 
                            value={this.state.value} 
                            step="3"/> 
                            <img src="https://img.icons8.com/windows/28/000000/running-rabbit.png" alt= ''/>
                        </div>
                      </div>
                    <div>
                      <h6>Array Size</h6>
                      <div className="speed-container">
                        <img src="https://img.icons8.com/windows/24/000000/elephant.png" alt=''/>
                        <input 
                            className="sliders-bar"
                            id="typeinp" 
                            type="range" 
                            min="8" max="32" 
                            value={this.state.value} 
                            onChange={this.handleChange}
                            step="2"/>
                            <img src="https://img.icons8.com/material-outlined/22/000000/mouse-animal.png" alt=''/>
                      </div>
                    </div>
                  </div>
                </div>
              </right-section>
          </div>
      );
  }
}
function animationSpeed() {
  var x = document.getElementById("speed").value;
  return x;
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function animateAlgorithm(animations, speed) {
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('array-bar');
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? "#c67561" : " #e3e5e0";
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * speed);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * speed);
    }
  }
}
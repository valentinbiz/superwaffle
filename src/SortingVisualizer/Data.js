const data = [
  [{
      key: 1,
      title: 'How to use the sorting visualizer:',
      step1: '1. Select the array size using the slider;',
      step2: '2. Select the desired speed for the animations;',
      step3: '3. Select which algorithm you would like to visualise.',
      step4: ' 4. After each visualisation, reset the array in order to generate a new array.'
  }],
  [{
      key: 2,
      title: 'Bubble Sort',
      name: ' Bubble sort repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The algorithm is named for the way larger elements "bubble" to the top of the list. ',
      step1: 'Average Complexity O(n2) ',
      step2: ' Best Case	O(n)',
      step3: 'Worst Case	O(n2)',
      step4: 'Space Complexity	O(1)'
  }],
  [{
      key: 3,
      title: 'Insertion Sort',
      name: 'At each iteration, insertion sort removes one element from the unsorted input data, finds the location it belongs within the sorted list, and inserts it there.',
      step1: 'Average Complexity O(n2)',
      step2: 'Best Case	O(n2)',
      step3: 'Worst Case	O(n2)',
      step4: 'Space Complexity	O(1)'
  }],
  [{
      key: 4,
      title: 'Selection Sort',
      name: ' The algorithm divides the input list into two parts: a sorted sublist of items and a sublist of the  unsorted items. It then proceeds by finding the smallest element in the unsorted sublist, exchanging it with the leftmost unsorted element and moving the boundaries one element to the right.',
      step1: 'Average Complexity	O(n2)',
      step2: ' Best Case	O(n2)',
      step3: 'Worst Case	O(n2)',
      step4: 'Space Complexity	O(1)'

  }],
  [{
      key: 5,
      title: 'Merge Sort',
      name: 'Merge sort is an efficient comparison-based sorting algorithm. It is a divide-and-conquer algorithm that was invented by John von Neumann in 1945.',
      step1: 'Average:	O(n × log n)',
      step2: 'Best Case:	O(n × log n)',
      step3: 'Worst Case:	O(n × log n)',
      step4: 'Space Complexity:	O(n)'
  }]
]


export default data;
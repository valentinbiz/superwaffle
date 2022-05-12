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
      name: ' Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. ',
      step1: 'Average Complexity	O(n2) ',
      step2: ' Best Case	O(n)',
      step3: 'Worst Case	O(n2)',
      step4: 'Space Complexity	O(1)'
  }],
  [{
      key: 3,
      title: 'Insertion Sort',
      name: 'Insertion sort iterates, consuming one input element each repetition, and grows a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements are left.',
      step1: 'Average Complexity	O(n2)',
      step2: 'Best Case	O(n2)',
      step3: 'Worst Case	O(n2)',
      step4: 'Space Complexity	O(1)'
  }],
  [{
      key: 4,
      title: 'Selection Sort',
      name: ' The algorithm divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front of the list and a sublist of the remaining unsorted items that occupy the rest of the list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging it with the leftmost unsorted element, and moving the boundaries one element to the right.',
      step1: 'Average Complexity	O(n2)',
      step2: ' Best Case	O(n2)',
      step3: 'Worst Case	O(n2)',
      step4: 'Space Complexity	O(1)'

  }],
  [{
      key: 5,
      title: 'Merge Sort',
      name: 'In computer science, merge sort (also commonly spelled as mergesort) is an efficient, general-purpose, and comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output. Merge sort is a divide-and-conquer algorithm that was invented by John von Neumann in 1945.',
      step1: 'Average Complexity:	O(n × log n)',
      step2: 'Best Case:	O(n × log n)',
      step3: 'Worst Case:	O(n × log n)',
      step4: 'Space Complexity:	O(n)'
  }]
]


export default data;
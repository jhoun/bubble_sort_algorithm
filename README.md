BUBBLE SORT

Description:
  Bubble sort starts from the beginning of the list and compares each adjacent number until the whole list is sorted. Some lists will need multiple passes, so there must be a flag to stop the comparison when the list if fully sorted.

Pseudocode:
  bubbleSort(array argument)
    while(true)
      swap = false;
        for array length
          if(current value is greater next value in array)
            swap current index with next value
            replace next index with current value on hold
            swapped = true;
          end if
        end for
      keep going untile swap is false
    end procedure

Performance:

  Worst-case:
  Quadratic Time = О(n2)

  As n gets larger, the performance of Bubble Sort will get worse. For instance, if an input collection is in reverse order, n will start to grow because of the number of passes that it will need to make in order to sort the list.

  Average-Case:
  Quadratic Time = О(n2)

  On average bubble sort performs the same as it would in a worst-case scenario. If the input is a large collection, it would not be efficient because, due to the algorithm making multiple passes.

  Best-Case:
  Linear Complexity = O(n)

  Bubble sort has better performance with a collection that is already in sorted order. The increase of time and space complexity with not grow as rapid compared to quadratic time O(n2);


QUICK SORT

Description:
  Quicksort divides the input collection into two small subgroups and continues to partition these subgroups through recursion. A pivot number will be chosen and the subarrays will be divided depending if the number is greater or less than the pivot number. As you get lower into the call stack and there nothing else to partition, the base case will return the last collection value. When the call stack starts to pop off, the left subarray, pivot number, and right subarray will concatenate as you go back up to the first call stack.

Pseudocode:
  quicksort(array argument)
    pivot = 0 index;
    if length off array <= 1
      return value
    for length of array
      if array value > pivot
        array value = right
      else
        array value = left
      end if
    end for
  return quicksort(left + pivot + right)


Performance:

  Worst-case:
  Quadratic Time = О(n2)

  If the collection input has already been sorted in order or reverse and if the pivot number is at 0 index. When it starts to partition, all of the elements will be in one subarray while the other subarray will be empty. This pattern will continue which creates multiple call stacks until it reaches the last element.

  Average-Case:
  n log-star n = O(nlog(n))

  On average bubble sort performs the same as it would in a worst-case scenario. If the input is a large collection, it would not be efficient because, due to the algorithm making multiple passes.

  Best-Case:
  n log-star n = O(nlog(n))
  Each time the collection is partitioned, the two subarrays are split equally, meaning that the process is cut in half due to each call stack in the recursive call.


MERGE SORT

Description:
  In merge sort, a middle point is found in a collection and is split into the left subarray or right subarray depending on that middle point. Recursive call is used to continue to split the subarrays down the middle. When it reaches its basecase, the 0 index of the left subarray and the 0 index of the right subarray will be compared and sorted. This will continue until it reaches back to the first call stack.

Pseudocode:
  mergeSort(array argument)
    A = length of array
    mid - A/2
    if (A < 2)
      then return
    for looping A
      if(indexNum < mid)
        then left array
      else
        then right array
      end if
    end for
    merge(left)
    merge(right)
    return merge(left, right, array)

  merge(left, right, arr)
    l = left length of array
    r = right length of array
    i , j , l = 0
    while (i < l && j < r)
      if (left[i] <= right[j])
        array[l] = left[i];
        i++
      else
        array[l] = right[j];
        j++
      end if
    l++;
    end while

    while(i < l){
      array[l] = left[i]
      i++
      l++
    end while


    while(i < r){
      array[l] = right[j]
      j++
      l++
    end while
  return array;


Performance:

  Worst-case:
  n log-star n = O(nlog(n))



  Average-Case:
  n log-star n = O(nlog(n))



  Best-Case:
  n log-star n = O(nlog(n))



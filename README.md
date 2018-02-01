# **T**ypeScript **S**tandard **T**emplate **L**ibrary

[![Join the chat at https://gitter.im/samchon/tstl](https://badges.gitter.im/samchon/tstl.svg)](https://gitter.im/samchon/tstl?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![NPM](https://nodei.co/npm/tstl.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/tstl)
  - GitHub Repository: https://github.com/samchon/tstl
  - Guide Documents: https://github.com/samchon/tstl/wiki



## Introduction
Implementation of STL (Standard Template Library) in TypeScript.
  - Containers
  - Iterators
  - Algorithms
  - Functors

**T**ypeScript-**STL** is an open-source project providing features of STL, migrated from *C++* to *TypeScript*. You can enjoy the STL's own specific *coantainers*, *algorithms* and *functors* in the JavaScript. If TypeScript, you also can take advantage of type restrictions and generic programming with the TypeScript.

Below components are list of provided objects in the **T**ypeScript-**STL**. If you want to know more about the **TypeScript-STL**, then please read the [**Guide Documents**](https://github.com/samchon/tstl/wiki).

### Containers
  - **Linear Containers**
    - [Vector `vector`](http://samchon.github.io/tstl/api/classes/std.vector.html)
    - [Deque `deque`](http://samchon.github.io/tstl/api/classes/std.deque.html)
    - [List `list`](http://samchon.github.io/tstl/api/classes/std.list.html)
    - [ForwardList `forward_list`](http://samchon.github.io/tstl/api/classes/std.forwardlist.html)
  - **Associative Containers**
    - *Tree-structured Containers*
      - [TreeSet `set`](http://samchon.github.io/tstl/api/classes/std.treeset.html)
      - [TreeMultiSet `multiset`](http://samchon.github.io/tstl/api/classes/std.treemultiset.html)
      - [TreeMap `map`](http://samchon.github.io/tstl/api/classes/std.treemap.html)
      - [TreeMultiMap `multimap`](http://samchon.github.io/tstl/api/classes/std.treemultimap.html)
    - *Hash-buckets based Container*
      - [HashSet `unordered_set`](http://samchon.github.io/tstl/api/classes/std.hashset.html)
      - [HashMultiSet `unordered_multiset`](http://samchon.github.io/tstl/api/classes/std.hashmultiset.html)
      - [HashMap `unordered_map`](http://samchon.github.io/tstl/api/classes/std.hashmap.html)
      - [HashMultiMap `unordered_multimap`](http://samchon.github.io/tstl/api/classes/std.hashmultimap.html)
  - **Adaptor Containers**
    - [Queue `queue`](http://samchon.github.io/tstl/api/classes/std.queue.html)
    - [Stack `stack`](http://samchon.github.io/tstl/api/classes/std.stack.html)
    - [PriorityQueue `priority_queue`](http://samchon.github.io/tstl/api/classes/std.priorityqueue.html)

### Algorithms
- [`<algorithm>`](http://www.cplusplus.com/reference/algorithm/)
    - [iterations](https://github.com/samchon/tstl/tree/master/src/std/algorithms/iterations.ts)
    - [modifiers](https://github.com/samchon/tstl/tree/master/src/std/algorithms/modifiers.ts)
    - [partition](https://github.com/samchon/tstl/tree/master/src/std/algorithms/partition.ts)
    - [sorting](https://github.com/samchon/tstl/tree/master/src/std/algorithms/sorting.ts)
    - [binary search](https://github.com/samchon/tstl/tree/master/src/std/algorithms/binary_search.ts)
    - [union set](https://github.com/samchon/tstl/tree/master/src/std/algorithms/union_set.ts)
    - [heap](https://github.com/samchon/tstl/tree/master/src/std/algorithms/heap.ts)
    - [mathmatics](https://github.com/samchon/tstl/tree/master/src/std/algorithms/mathmatics.ts)

### Functors
  - [`<exception>`](http://www.cplusplus.com/reference/exception/)
    - [Exception `exception`](http://samchon.github.io/tstl/api/classes/std.exception.html)
      - [LogicError `logic_error`](http://samchon.github.io/tstl/api/classes/std.logicerror.html)
      - [RuntimeError `runtime_error`](http://samchon.github.io/tstl/api/classes/std.runtimeerror.html)
  - [`<functional>`](http://www.cplusplus.com/reference/functional/)
    - [IComparable](http://samchon.github.io/tstl/api/interfaces/std.icomparable.html)
  - [`<utility>`](http://www.cplusplus.com/reference/utility/)
    - [Pair `pair`](http://samchon.github.io/tstl/api/classes/std.pair.html)
    - [Entry `entry](http://samchon.github.io/tstl/api/classes/std.entry.html)
  - [`<thread>`](https://github.com/samchon/tstl/tree/master/src/std/thread.ts)
    - [ConditionVariable `condition_variable`](http://samchon.github.io/tstl/api/classes/std.conditionvariable.html)
    - [Mutex `mutex`](http://samchon.github.io/tstl/api/classes/std.mutex.html) & [TimedMutex `timed_mutex`](http://samchon.github.io/tstl/api/classes/std.timedmutex.html)
    - [SharedMutex `shared_mutex`](http://samchon.github.io/tstl/api/classes/std.sharedmutex.html) & [SharedTimeMutex `shared_timed_mutex`](http://samchon.github.io/tstl/api/classes/std.sharedtimedmutex.html)
    - (experiments) [Semaphore `semaphore`](http://samchon.github.io/tstl/api/classes/std.experiments.semaphore.html) & [TimedSemaphore `timed_semaphore`](http://samchon.github.io/tstl/api/classes/std.experiments.timedsemaphore.html)


## Installation
### NPM Module
Installing **TSTL** in *NodeJS* is very easy. Just install with the `npm`

```bash
# Install TSTL from the NPM module
npm install --save tstl
```

### Usage
``` typescript
import std = require("tstl");

let map: std.TreeMap<number, string> = new std.TreeMap<number, string>();

// INSERT ITEMS
map.insert(std.make_pair(1, "First")); // Via tuple
map.emplace(4, "Fourth"); // C++11 Feature
map.insert_or_assign(5, "Fifth"); // C++17 Feature
map.set(9, "Nineth"); // Instead of the operetor[](Key)

// ITERATION
for (let it = map.begin(); !it.equals(map.end()); it = it.next())
    console.log(it.first, it.second); // (key => number, value => string)

// LOWER_BOUND
let x = map.lower_bound(3);
console.log(`lower bound of 3 is: ${x.first}, ${x.second}`);
```



## References
  - **Repositories**
    - [GitHub Repository](https://github.com/samchon/tstl)
    - [NPM Repository](https://www.npmjs.com/package/tstl)
  - **Documents**
    - [**Guide Documents**](https://github.com/samchon/tstl/wiki)
    - [API Documents](http://samchon.github.io/tstl/api)
    - [Class Diagram](http://samchon.github.io/tstl/design/class_diagram.pdf)
  - **Related Projects**
    - [Samchon-Framework](https://github.com/samchon/framework)
    - [3D-Bin-Packing](https://github.com/betterwaysystems/packer)

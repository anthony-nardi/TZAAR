/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/immutable/dist/immutable.js":
/*!**************************************************!*\
  !*** ./node_modules/immutable/dist/immutable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

  function createClass(ctor, superClass) {
    if (superClass) {
      ctor.prototype = Object.create(superClass.prototype);
    }
    ctor.prototype.constructor = ctor;
  }

  function Iterable(value) {
      return isIterable(value) ? value : Seq(value);
    }


  createClass(KeyedIterable, Iterable);
    function KeyedIterable(value) {
      return isKeyed(value) ? value : KeyedSeq(value);
    }


  createClass(IndexedIterable, Iterable);
    function IndexedIterable(value) {
      return isIndexed(value) ? value : IndexedSeq(value);
    }


  createClass(SetIterable, Iterable);
    function SetIterable(value) {
      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
    }



  function isIterable(maybeIterable) {
    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
  }

  function isKeyed(maybeKeyed) {
    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
  }

  function isIndexed(maybeIndexed) {
    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
  }

  function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
  }

  function isOrdered(maybeOrdered) {
    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
  }

  Iterable.isIterable = isIterable;
  Iterable.isKeyed = isKeyed;
  Iterable.isIndexed = isIndexed;
  Iterable.isAssociative = isAssociative;
  Iterable.isOrdered = isOrdered;

  Iterable.Keyed = KeyedIterable;
  Iterable.Indexed = IndexedIterable;
  Iterable.Set = SetIterable;


  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  // Used for setting prototype methods that IE8 chokes on.
  var DELETE = 'delete';

  // Constants describing the size of trie nodes.
  var SHIFT = 5; // Resulted in best performance after ______?
  var SIZE = 1 << SHIFT;
  var MASK = SIZE - 1;

  // A consistent shared value representing "not set" which equals nothing other
  // than itself, and nothing that could be provided externally.
  var NOT_SET = {};

  // Boolean references, Rough equivalent of `bool &`.
  var CHANGE_LENGTH = { value: false };
  var DID_ALTER = { value: false };

  function MakeRef(ref) {
    ref.value = false;
    return ref;
  }

  function SetRef(ref) {
    ref && (ref.value = true);
  }

  // A function which returns a value representing an "owner" for transient writes
  // to tries. The return value will only ever equal itself, and will not equal
  // the return of any subsequent call of this function.
  function OwnerID() {}

  // http://jsperf.com/copy-array-inline
  function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);
    for (var ii = 0; ii < len; ii++) {
      newArr[ii] = arr[ii + offset];
    }
    return newArr;
  }

  function ensureSize(iter) {
    if (iter.size === undefined) {
      iter.size = iter.__iterate(returnTrue);
    }
    return iter.size;
  }

  function wrapIndex(iter, index) {
    // This implements "is array index" which the ECMAString spec defines as:
    //
    //     A String property name P is an array index if and only if
    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
    //     to 2^32−1.
    //
    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
    if (typeof index !== 'number') {
      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
      if ('' + uint32Index !== index || uint32Index === 4294967295) {
        return NaN;
      }
      index = uint32Index;
    }
    return index < 0 ? ensureSize(iter) + index : index;
  }

  function returnTrue() {
    return true;
  }

  function wholeSlice(begin, end, size) {
    return (begin === 0 || (size !== undefined && begin <= -size)) &&
      (end === undefined || (size !== undefined && end >= size));
  }

  function resolveBegin(begin, size) {
    return resolveIndex(begin, size, 0);
  }

  function resolveEnd(end, size) {
    return resolveIndex(end, size, size);
  }

  function resolveIndex(index, size, defaultIndex) {
    return index === undefined ?
      defaultIndex :
      index < 0 ?
        Math.max(0, size + index) :
        size === undefined ?
          index :
          Math.min(size, index);
  }

  /* global Symbol */

  var ITERATE_KEYS = 0;
  var ITERATE_VALUES = 1;
  var ITERATE_ENTRIES = 2;

  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';

  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


  function Iterator(next) {
      this.next = next;
    }

    Iterator.prototype.toString = function() {
      return '[Iterator]';
    };


  Iterator.KEYS = ITERATE_KEYS;
  Iterator.VALUES = ITERATE_VALUES;
  Iterator.ENTRIES = ITERATE_ENTRIES;

  Iterator.prototype.inspect =
  Iterator.prototype.toSource = function () { return this.toString(); }
  Iterator.prototype[ITERATOR_SYMBOL] = function () {
    return this;
  };


  function iteratorValue(type, k, v, iteratorResult) {
    var value = type === 0 ? k : type === 1 ? v : [k, v];
    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
      value: value, done: false
    });
    return iteratorResult;
  }

  function iteratorDone() {
    return { value: undefined, done: true };
  }

  function hasIterator(maybeIterable) {
    return !!getIteratorFn(maybeIterable);
  }

  function isIterator(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === 'function';
  }

  function getIterator(iterable) {
    var iteratorFn = getIteratorFn(iterable);
    return iteratorFn && iteratorFn.call(iterable);
  }

  function getIteratorFn(iterable) {
    var iteratorFn = iterable && (
      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
      iterable[FAUX_ITERATOR_SYMBOL]
    );
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  function isArrayLike(value) {
    return value && typeof value.length === 'number';
  }

  createClass(Seq, Iterable);
    function Seq(value) {
      return value === null || value === undefined ? emptySequence() :
        isIterable(value) ? value.toSeq() : seqFromValue(value);
    }

    Seq.of = function(/*...values*/) {
      return Seq(arguments);
    };

    Seq.prototype.toSeq = function() {
      return this;
    };

    Seq.prototype.toString = function() {
      return this.__toString('Seq {', '}');
    };

    Seq.prototype.cacheResult = function() {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };

    // abstract __iterateUncached(fn, reverse)

    Seq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, true);
    };

    // abstract __iteratorUncached(type, reverse)

    Seq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, true);
    };



  createClass(KeyedSeq, Seq);
    function KeyedSeq(value) {
      return value === null || value === undefined ?
        emptySequence().toKeyedSeq() :
        isIterable(value) ?
          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
          keyedSeqFromValue(value);
    }

    KeyedSeq.prototype.toKeyedSeq = function() {
      return this;
    };



  createClass(IndexedSeq, Seq);
    function IndexedSeq(value) {
      return value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
    }

    IndexedSeq.of = function(/*...values*/) {
      return IndexedSeq(arguments);
    };

    IndexedSeq.prototype.toIndexedSeq = function() {
      return this;
    };

    IndexedSeq.prototype.toString = function() {
      return this.__toString('Seq [', ']');
    };

    IndexedSeq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, false);
    };

    IndexedSeq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, false);
    };



  createClass(SetSeq, Seq);
    function SetSeq(value) {
      return (
        value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value
      ).toSetSeq();
    }

    SetSeq.of = function(/*...values*/) {
      return SetSeq(arguments);
    };

    SetSeq.prototype.toSetSeq = function() {
      return this;
    };



  Seq.isSeq = isSeq;
  Seq.Keyed = KeyedSeq;
  Seq.Set = SetSeq;
  Seq.Indexed = IndexedSeq;

  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

  Seq.prototype[IS_SEQ_SENTINEL] = true;



  createClass(ArraySeq, IndexedSeq);
    function ArraySeq(array) {
      this._array = array;
      this.size = array.length;
    }

    ArraySeq.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };

    ArraySeq.prototype.__iterate = function(fn, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ArraySeq.prototype.__iterator = function(type, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      var ii = 0;
      return new Iterator(function() 
        {return ii > maxIndex ?
          iteratorDone() :
          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
      );
    };



  createClass(ObjectSeq, KeyedSeq);
    function ObjectSeq(object) {
      var keys = Object.keys(object);
      this._object = object;
      this._keys = keys;
      this.size = keys.length;
    }

    ObjectSeq.prototype.get = function(key, notSetValue) {
      if (notSetValue !== undefined && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    };

    ObjectSeq.prototype.has = function(key) {
      return this._object.hasOwnProperty(key);
    };

    ObjectSeq.prototype.__iterate = function(fn, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var key = keys[reverse ? maxIndex - ii : ii];
        if (fn(object[key], key, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ObjectSeq.prototype.__iterator = function(type, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var key = keys[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, key, object[key]);
      });
    };

  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(IterableSeq, IndexedSeq);
    function IterableSeq(iterable) {
      this._iterable = iterable;
      this.size = iterable.length || iterable.size;
    }

    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      var iterations = 0;
      if (isIterator(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
      }
      return iterations;
    };

    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      if (!isIterator(iterator)) {
        return new Iterator(iteratorDone);
      }
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value);
      });
    };



  createClass(IteratorSeq, IndexedSeq);
    function IteratorSeq(iterator) {
      this._iterator = iterator;
      this._iteratorCache = [];
    }

    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      while (iterations < cache.length) {
        if (fn(cache[iterations], iterations++, this) === false) {
          return iterations;
        }
      }
      var step;
      while (!(step = iterator.next()).done) {
        var val = step.value;
        cache[iterations] = val;
        if (fn(val, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };

    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      return new Iterator(function()  {
        if (iterations >= cache.length) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          cache[iterations] = step.value;
        }
        return iteratorValue(type, iterations, cache[iterations++]);
      });
    };




  // # pragma Helper functions

  function isSeq(maybeSeq) {
    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
  }

  var EMPTY_SEQ;

  function emptySequence() {
    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
  }

  function keyedSeqFromValue(value) {
    var seq =
      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
      typeof value === 'object' ? new ObjectSeq(value) :
      undefined;
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of [k, v] entries, '+
        'or keyed object: ' + value
      );
    }
    return seq;
  }

  function indexedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values: ' + value
      );
    }
    return seq;
  }

  function seqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value) ||
      (typeof value === 'object' && new ObjectSeq(value));
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values, or keyed object: ' + value
      );
    }
    return seq;
  }

  function maybeIndexedSeqFromValue(value) {
    return (
      isArrayLike(value) ? new ArraySeq(value) :
      isIterator(value) ? new IteratorSeq(value) :
      hasIterator(value) ? new IterableSeq(value) :
      undefined
    );
  }

  function seqIterate(seq, fn, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var entry = cache[reverse ? maxIndex - ii : ii];
        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
          return ii + 1;
        }
      }
      return ii;
    }
    return seq.__iterateUncached(fn, reverse);
  }

  function seqIterator(seq, type, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var entry = cache[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
      });
    }
    return seq.__iteratorUncached(type, reverse);
  }

  function fromJS(json, converter) {
    return converter ?
      fromJSWith(converter, json, '', {'': json}) :
      fromJSDefault(json);
  }

  function fromJSWith(converter, json, key, parentJSON) {
    if (Array.isArray(json)) {
      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    if (isPlainObj(json)) {
      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    return json;
  }

  function fromJSDefault(json) {
    if (Array.isArray(json)) {
      return IndexedSeq(json).map(fromJSDefault).toList();
    }
    if (isPlainObj(json)) {
      return KeyedSeq(json).map(fromJSDefault).toMap();
    }
    return json;
  }

  function isPlainObj(value) {
    return value && (value.constructor === Object || value.constructor === undefined);
  }

  /**
   * An extension of the "same-value" algorithm as [described for use by ES6 Map
   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
   *
   * NaN is considered the same as NaN, however -0 and 0 are considered the same
   * value, which is different from the algorithm described by
   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
   *
   * This is extended further to allow Objects to describe the values they
   * represent, by way of `valueOf` or `equals` (and `hashCode`).
   *
   * Note: because of this extension, the key equality of Immutable.Map and the
   * value equality of Immutable.Set will differ from ES6 Map and Set.
   *
   * ### Defining custom values
   *
   * The easiest way to describe the value an object represents is by implementing
   * `valueOf`. For example, `Date` represents a value by returning a unix
   * timestamp for `valueOf`:
   *
   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
   *     var date2 = new Date(1234567890000);
   *     date1.valueOf(); // 1234567890000
   *     assert( date1 !== date2 );
   *     assert( Immutable.is( date1, date2 ) );
   *
   * Note: overriding `valueOf` may have other implications if you use this object
   * where JavaScript expects a primitive, such as implicit string coercion.
   *
   * For more complex types, especially collections, implementing `valueOf` may
   * not be performant. An alternative is to implement `equals` and `hashCode`.
   *
   * `equals` takes another object, presumably of similar type, and returns true
   * if the it is equal. Equality is symmetrical, so the same result should be
   * returned if this and the argument are flipped.
   *
   *     assert( a.equals(b) === b.equals(a) );
   *
   * `hashCode` returns a 32bit integer number representing the object which will
   * be used to determine how to store the value object in a Map or Set. You must
   * provide both or neither methods, one must not exist without the other.
   *
   * Also, an important relationship between these methods must be upheld: if two
   * values are equal, they *must* return the same hashCode. If the values are not
   * equal, they might have the same hashCode; this is called a hash collision,
   * and while undesirable for performance reasons, it is acceptable.
   *
   *     if (a.equals(b)) {
   *       assert( a.hashCode() === b.hashCode() );
   *     }
   *
   * All Immutable collections implement `equals` and `hashCode`.
   *
   */
  function is(valueA, valueB) {
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
    if (typeof valueA.valueOf === 'function' &&
        typeof valueB.valueOf === 'function') {
      valueA = valueA.valueOf();
      valueB = valueB.valueOf();
      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
    }
    if (typeof valueA.equals === 'function' &&
        typeof valueB.equals === 'function' &&
        valueA.equals(valueB)) {
      return true;
    }
    return false;
  }

  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }

    if (
      !isIterable(b) ||
      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
      isKeyed(a) !== isKeyed(b) ||
      isIndexed(a) !== isIndexed(b) ||
      isOrdered(a) !== isOrdered(b)
    ) {
      return false;
    }

    if (a.size === 0 && b.size === 0) {
      return true;
    }

    var notAssociative = !isAssociative(a);

    if (isOrdered(a)) {
      var entries = a.entries();
      return b.every(function(v, k)  {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done;
    }

    var flipped = false;

    if (a.size === undefined) {
      if (b.size === undefined) {
        if (typeof a.cacheResult === 'function') {
          a.cacheResult();
        }
      } else {
        flipped = true;
        var _ = a;
        a = b;
        b = _;
      }
    }

    var allEqual = true;
    var bSize = b.__iterate(function(v, k)  {
      if (notAssociative ? !a.has(v) :
          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
        allEqual = false;
        return false;
      }
    });

    return allEqual && a.size === bSize;
  }

  createClass(Repeat, IndexedSeq);

    function Repeat(value, times) {
      if (!(this instanceof Repeat)) {
        return new Repeat(value, times);
      }
      this._value = value;
      this.size = times === undefined ? Infinity : Math.max(0, times);
      if (this.size === 0) {
        if (EMPTY_REPEAT) {
          return EMPTY_REPEAT;
        }
        EMPTY_REPEAT = this;
      }
    }

    Repeat.prototype.toString = function() {
      if (this.size === 0) {
        return 'Repeat []';
      }
      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
    };

    Repeat.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._value : notSetValue;
    };

    Repeat.prototype.includes = function(searchValue) {
      return is(this._value, searchValue);
    };

    Repeat.prototype.slice = function(begin, end) {
      var size = this.size;
      return wholeSlice(begin, end, size) ? this :
        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
    };

    Repeat.prototype.reverse = function() {
      return this;
    };

    Repeat.prototype.indexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return 0;
      }
      return -1;
    };

    Repeat.prototype.lastIndexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return this.size;
      }
      return -1;
    };

    Repeat.prototype.__iterate = function(fn, reverse) {
      for (var ii = 0; ii < this.size; ii++) {
        if (fn(this._value, ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
      var ii = 0;
      return new Iterator(function() 
        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
      );
    };

    Repeat.prototype.equals = function(other) {
      return other instanceof Repeat ?
        is(this._value, other._value) :
        deepEqual(other);
    };


  var EMPTY_REPEAT;

  function invariant(condition, error) {
    if (!condition) throw new Error(error);
  }

  createClass(Range, IndexedSeq);

    function Range(start, end, step) {
      if (!(this instanceof Range)) {
        return new Range(start, end, step);
      }
      invariant(step !== 0, 'Cannot step a Range by 0');
      start = start || 0;
      if (end === undefined) {
        end = Infinity;
      }
      step = step === undefined ? 1 : Math.abs(step);
      if (end < start) {
        step = -step;
      }
      this._start = start;
      this._end = end;
      this._step = step;
      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
      if (this.size === 0) {
        if (EMPTY_RANGE) {
          return EMPTY_RANGE;
        }
        EMPTY_RANGE = this;
      }
    }

    Range.prototype.toString = function() {
      if (this.size === 0) {
        return 'Range []';
      }
      return 'Range [ ' +
        this._start + '...' + this._end +
        (this._step !== 1 ? ' by ' + this._step : '') +
      ' ]';
    };

    Range.prototype.get = function(index, notSetValue) {
      return this.has(index) ?
        this._start + wrapIndex(this, index) * this._step :
        notSetValue;
    };

    Range.prototype.includes = function(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 &&
        possibleIndex < this.size &&
        possibleIndex === Math.floor(possibleIndex);
    };

    Range.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      begin = resolveBegin(begin, this.size);
      end = resolveEnd(end, this.size);
      if (end <= begin) {
        return new Range(0, 0);
      }
      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
    };

    Range.prototype.indexOf = function(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.size) {
          return index
        }
      }
      return -1;
    };

    Range.prototype.lastIndexOf = function(searchValue) {
      return this.indexOf(searchValue);
    };

    Range.prototype.__iterate = function(fn, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(value, ii, this) === false) {
          return ii + 1;
        }
        value += reverse ? -step : step;
      }
      return ii;
    };

    Range.prototype.__iterator = function(type, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      var ii = 0;
      return new Iterator(function()  {
        var v = value;
        value += reverse ? -step : step;
        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
      });
    };

    Range.prototype.equals = function(other) {
      return other instanceof Range ?
        this._start === other._start &&
        this._end === other._end &&
        this._step === other._step :
        deepEqual(this, other);
    };


  var EMPTY_RANGE;

  createClass(Collection, Iterable);
    function Collection() {
      throw TypeError('Abstract');
    }


  createClass(KeyedCollection, Collection);function KeyedCollection() {}

  createClass(IndexedCollection, Collection);function IndexedCollection() {}

  createClass(SetCollection, Collection);function SetCollection() {}


  Collection.Keyed = KeyedCollection;
  Collection.Indexed = IndexedCollection;
  Collection.Set = SetCollection;

  var imul =
    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
    Math.imul :
    function imul(a, b) {
      a = a | 0; // int
      b = b | 0; // int
      var c = a & 0xffff;
      var d = b & 0xffff;
      // Shift by 0 fixes the sign on the high part.
      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
    };

  // v8 has an optimization for storing 31-bit signed numbers.
  // Values which have either 00 or 11 as the high order bits qualify.
  // This function drops the highest order bit in a signed number, maintaining
  // the sign bit.
  function smi(i32) {
    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
  }

  function hash(o) {
    if (o === false || o === null || o === undefined) {
      return 0;
    }
    if (typeof o.valueOf === 'function') {
      o = o.valueOf();
      if (o === false || o === null || o === undefined) {
        return 0;
      }
    }
    if (o === true) {
      return 1;
    }
    var type = typeof o;
    if (type === 'number') {
      if (o !== o || o === Infinity) {
        return 0;
      }
      var h = o | 0;
      if (h !== o) {
        h ^= o * 0xFFFFFFFF;
      }
      while (o > 0xFFFFFFFF) {
        o /= 0xFFFFFFFF;
        h ^= o;
      }
      return smi(h);
    }
    if (type === 'string') {
      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
    }
    if (typeof o.hashCode === 'function') {
      return o.hashCode();
    }
    if (type === 'object') {
      return hashJSObj(o);
    }
    if (typeof o.toString === 'function') {
      return hashString(o.toString());
    }
    throw new Error('Value type ' + type + ' cannot be hashed.');
  }

  function cachedHashString(string) {
    var hash = stringHashCache[string];
    if (hash === undefined) {
      hash = hashString(string);
      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
        STRING_HASH_CACHE_SIZE = 0;
        stringHashCache = {};
      }
      STRING_HASH_CACHE_SIZE++;
      stringHashCache[string] = hash;
    }
    return hash;
  }

  // http://jsperf.com/hashing-strings
  function hashString(string) {
    // This is the hash from JVM
    // The hash code for a string is computed as
    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
    // where s[i] is the ith character of the string and n is the length of
    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
    // (exclusive) by dropping high bits.
    var hash = 0;
    for (var ii = 0; ii < string.length; ii++) {
      hash = 31 * hash + string.charCodeAt(ii) | 0;
    }
    return smi(hash);
  }

  function hashJSObj(obj) {
    var hash;
    if (usingWeakMap) {
      hash = weakMap.get(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = obj[UID_HASH_KEY];
    if (hash !== undefined) {
      return hash;
    }

    if (!canDefineProperty) {
      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
      if (hash !== undefined) {
        return hash;
      }

      hash = getIENodeHash(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = ++objHashUID;
    if (objHashUID & 0x40000000) {
      objHashUID = 0;
    }

    if (usingWeakMap) {
      weakMap.set(obj, hash);
    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
      throw new Error('Non-extensible objects are not allowed as keys.');
    } else if (canDefineProperty) {
      Object.defineProperty(obj, UID_HASH_KEY, {
        'enumerable': false,
        'configurable': false,
        'writable': false,
        'value': hash
      });
    } else if (obj.propertyIsEnumerable !== undefined &&
               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
      // Since we can't define a non-enumerable property on the object
      // we'll hijack one of the less-used non-enumerable properties to
      // save our hash on it. Since this is a function it will not show up in
      // `JSON.stringify` which is what we want.
      obj.propertyIsEnumerable = function() {
        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
      };
      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
    } else if (obj.nodeType !== undefined) {
      // At this point we couldn't get the IE `uniqueID` to use as a hash
      // and we couldn't use a non-enumerable property to exploit the
      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
      // itself.
      obj[UID_HASH_KEY] = hash;
    } else {
      throw new Error('Unable to set a non-enumerable property on object.');
    }

    return hash;
  }

  // Get references to ES5 object methods.
  var isExtensible = Object.isExtensible;

  // True if Object.defineProperty works as expected. IE8 fails this test.
  var canDefineProperty = (function() {
    try {
      Object.defineProperty({}, '@', {});
      return true;
    } catch (e) {
      return false;
    }
  }());

  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
  // and avoid memory leaks from the IE cloneNode bug.
  function getIENodeHash(node) {
    if (node && node.nodeType > 0) {
      switch (node.nodeType) {
        case 1: // Element
          return node.uniqueID;
        case 9: // Document
          return node.documentElement && node.documentElement.uniqueID;
      }
    }
  }

  // If possible, use a WeakMap.
  var usingWeakMap = typeof WeakMap === 'function';
  var weakMap;
  if (usingWeakMap) {
    weakMap = new WeakMap();
  }

  var objHashUID = 0;

  var UID_HASH_KEY = '__immutablehash__';
  if (typeof Symbol === 'function') {
    UID_HASH_KEY = Symbol(UID_HASH_KEY);
  }

  var STRING_HASH_CACHE_MIN_STRLEN = 16;
  var STRING_HASH_CACHE_MAX_SIZE = 255;
  var STRING_HASH_CACHE_SIZE = 0;
  var stringHashCache = {};

  function assertNotInfinite(size) {
    invariant(
      size !== Infinity,
      'Cannot perform this action with an infinite size.'
    );
  }

  createClass(Map, KeyedCollection);

    // @pragma Construction

    function Map(value) {
      return value === null || value === undefined ? emptyMap() :
        isMap(value) && !isOrdered(value) ? value :
        emptyMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
      return emptyMap().withMutations(function(map ) {
        for (var i = 0; i < keyValues.length; i += 2) {
          if (i + 1 >= keyValues.length) {
            throw new Error('Missing value for key: ' + keyValues[i]);
          }
          map.set(keyValues[i], keyValues[i + 1]);
        }
      });
    };

    Map.prototype.toString = function() {
      return this.__toString('Map {', '}');
    };

    // @pragma Access

    Map.prototype.get = function(k, notSetValue) {
      return this._root ?
        this._root.get(0, undefined, k, notSetValue) :
        notSetValue;
    };

    // @pragma Modification

    Map.prototype.set = function(k, v) {
      return updateMap(this, k, v);
    };

    Map.prototype.setIn = function(keyPath, v) {
      return this.updateIn(keyPath, NOT_SET, function()  {return v});
    };

    Map.prototype.remove = function(k) {
      return updateMap(this, k, NOT_SET);
    };

    Map.prototype.deleteIn = function(keyPath) {
      return this.updateIn(keyPath, function()  {return NOT_SET});
    };

    Map.prototype.update = function(k, notSetValue, updater) {
      return arguments.length === 1 ?
        k(this) :
        this.updateIn([k], notSetValue, updater);
    };

    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
      if (!updater) {
        updater = notSetValue;
        notSetValue = undefined;
      }
      var updatedValue = updateInDeepMap(
        this,
        forceIterator(keyPath),
        notSetValue,
        updater
      );
      return updatedValue === NOT_SET ? undefined : updatedValue;
    };

    Map.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyMap();
    };

    // @pragma Composition

    Map.prototype.merge = function(/*...iters*/) {
      return mergeIntoMapWith(this, undefined, arguments);
    };

    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, merger, iters);
    };

    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.merge === 'function' ?
          m.merge.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoMapWith(this, deepMerger, arguments);
    };

    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
    };

    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.mergeDeep === 'function' ?
          m.mergeDeep.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.sort = function(comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator));
    };

    Map.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator, mapper));
    };

    // @pragma Mutability

    Map.prototype.withMutations = function(fn) {
      var mutable = this.asMutable();
      fn(mutable);
      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
    };

    Map.prototype.asMutable = function() {
      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
    };

    Map.prototype.asImmutable = function() {
      return this.__ensureOwner();
    };

    Map.prototype.wasAltered = function() {
      return this.__altered;
    };

    Map.prototype.__iterator = function(type, reverse) {
      return new MapIterator(this, type, reverse);
    };

    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      this._root && this._root.iterate(function(entry ) {
        iterations++;
        return fn(entry[1], entry[0], this$0);
      }, reverse);
      return iterations;
    };

    Map.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap(this.size, this._root, ownerID, this.__hash);
    };


  function isMap(maybeMap) {
    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
  }

  Map.isMap = isMap;

  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

  var MapPrototype = Map.prototype;
  MapPrototype[IS_MAP_SENTINEL] = true;
  MapPrototype[DELETE] = MapPrototype.remove;
  MapPrototype.removeIn = MapPrototype.deleteIn;


  // #pragma Trie Nodes



    function ArrayMapNode(ownerID, entries) {
      this.ownerID = ownerID;
      this.entries = entries;
    }

    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && entries.length === 1) {
        return; // undefined
      }

      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
        return createNodes(ownerID, entries, key, value);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new ArrayMapNode(ownerID, newEntries);
    };




    function BitmapIndexedNode(ownerID, bitmap, nodes) {
      this.ownerID = ownerID;
      this.bitmap = bitmap;
      this.nodes = nodes;
    }

    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
      var bitmap = this.bitmap;
      return (bitmap & bit) === 0 ? notSetValue :
        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
    };

    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var bit = 1 << keyHashFrag;
      var bitmap = this.bitmap;
      var exists = (bitmap & bit) !== 0;

      if (!exists && value === NOT_SET) {
        return this;
      }

      var idx = popCount(bitmap & (bit - 1));
      var nodes = this.nodes;
      var node = exists ? nodes[idx] : undefined;
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

      if (newNode === node) {
        return this;
      }

      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
      }

      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
        return nodes[idx ^ 1];
      }

      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
        return newNode;
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
      var newNodes = exists ? newNode ?
        setIn(nodes, idx, newNode, isEditable) :
        spliceOut(nodes, idx, isEditable) :
        spliceIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.bitmap = newBitmap;
        this.nodes = newNodes;
        return this;
      }

      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
    };




    function HashArrayMapNode(ownerID, count, nodes) {
      this.ownerID = ownerID;
      this.count = count;
      this.nodes = nodes;
    }

    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var node = this.nodes[idx];
      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
    };

    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var removed = value === NOT_SET;
      var nodes = this.nodes;
      var node = nodes[idx];

      if (removed && !node) {
        return this;
      }

      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }

      var newCount = this.count;
      if (!node) {
        newCount++;
      } else if (!newNode) {
        newCount--;
        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
          return packNodes(ownerID, nodes, newCount, idx);
        }
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newNodes = setIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.count = newCount;
        this.nodes = newNodes;
        return this;
      }

      return new HashArrayMapNode(ownerID, newCount, newNodes);
    };




    function HashCollisionNode(ownerID, keyHash, entries) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entries = entries;
    }

    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }

      var removed = value === NOT_SET;

      if (keyHash !== this.keyHash) {
        if (removed) {
          return this;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
      }

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && len === 2) {
        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
    };




    function ValueNode(ownerID, keyHash, entry) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entry = entry;
    }

    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
    };

    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var keyMatch = is(key, this.entry[0]);
      if (keyMatch ? value === this.entry[1] : removed) {
        return this;
      }

      SetRef(didAlter);

      if (removed) {
        SetRef(didChangeSize);
        return; // undefined
      }

      if (keyMatch) {
        if (ownerID && ownerID === this.ownerID) {
          this.entry[1] = value;
          return this;
        }
        return new ValueNode(ownerID, this.keyHash, [key, value]);
      }

      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
    };



  // #pragma Iterators

  ArrayMapNode.prototype.iterate =
  HashCollisionNode.prototype.iterate = function (fn, reverse) {
    var entries = this.entries;
    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
        return false;
      }
    }
  }

  BitmapIndexedNode.prototype.iterate =
  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
    var nodes = this.nodes;
    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse ? maxIndex - ii : ii];
      if (node && node.iterate(fn, reverse) === false) {
        return false;
      }
    }
  }

  ValueNode.prototype.iterate = function (fn, reverse) {
    return fn(this.entry);
  }

  createClass(MapIterator, Iterator);

    function MapIterator(map, type, reverse) {
      this._type = type;
      this._reverse = reverse;
      this._stack = map._root && mapIteratorFrame(map._root);
    }

    MapIterator.prototype.next = function() {
      var type = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        var maxIndex;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue(type, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue(type, subNode.entry);
              }
              stack = this._stack = mapIteratorFrame(subNode, stack);
            }
            continue;
          }
        }
        stack = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    };


  function mapIteratorValue(type, entry) {
    return iteratorValue(type, entry[0], entry[1]);
  }

  function mapIteratorFrame(node, prev) {
    return {
      node: node,
      index: 0,
      __prev: prev
    };
  }

  function makeMap(size, root, ownerID, hash) {
    var map = Object.create(MapPrototype);
    map.size = size;
    map._root = root;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_MAP;
  function emptyMap() {
    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
  }

  function updateMap(map, k, v) {
    var newRoot;
    var newSize;
    if (!map._root) {
      if (v === NOT_SET) {
        return map;
      }
      newSize = 1;
      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
    } else {
      var didChangeSize = MakeRef(CHANGE_LENGTH);
      var didAlter = MakeRef(DID_ALTER);
      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
      if (!didAlter.value) {
        return map;
      }
      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
    }
    if (map.__ownerID) {
      map.size = newSize;
      map._root = newRoot;
      map.__hash = undefined;
      map.__altered = true;
      return map;
    }
    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
  }

  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
      if (value === NOT_SET) {
        return node;
      }
      SetRef(didAlter);
      SetRef(didChangeSize);
      return new ValueNode(ownerID, keyHash, [key, value]);
    }
    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
  }

  function isLeafNode(node) {
    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
  }

  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) {
      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
    }

    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

    var newNode;
    var nodes = idx1 === idx2 ?
      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
  }

  function createNodes(ownerID, entries, key, value) {
    if (!ownerID) {
      ownerID = new OwnerID();
    }
    var node = new ValueNode(ownerID, hash(key), [key, value]);
    for (var ii = 0; ii < entries.length; ii++) {
      var entry = entries[ii];
      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
    }
    return node;
  }

  function packNodes(ownerID, nodes, count, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count);
    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
      var node = nodes[ii];
      if (node !== undefined && ii !== excluding) {
        bitmap |= bit;
        packedNodes[packedII++] = node;
      }
    }
    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
  }

  function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count = 0;
    var expandedNodes = new Array(SIZE);
    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
    }
    expandedNodes[including] = node;
    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
  }

  function mergeIntoMapWith(map, merger, iterables) {
    var iters = [];
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = KeyedIterable(value);
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    return mergeIntoCollectionWith(map, merger, iters);
  }

  function deepMerger(existing, value, key) {
    return existing && existing.mergeDeep && isIterable(value) ?
      existing.mergeDeep(value) :
      is(existing, value) ? existing : value;
  }

  function deepMergerWith(merger) {
    return function(existing, value, key)  {
      if (existing && existing.mergeDeepWith && isIterable(value)) {
        return existing.mergeDeepWith(merger, value);
      }
      var nextValue = merger(existing, value, key);
      return is(existing, nextValue) ? existing : nextValue;
    };
  }

  function mergeIntoCollectionWith(collection, merger, iters) {
    iters = iters.filter(function(x ) {return x.size !== 0});
    if (iters.length === 0) {
      return collection;
    }
    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
      return collection.constructor(iters[0]);
    }
    return collection.withMutations(function(collection ) {
      var mergeIntoMap = merger ?
        function(value, key)  {
          collection.update(key, NOT_SET, function(existing )
            {return existing === NOT_SET ? value : merger(existing, value, key)}
          );
        } :
        function(value, key)  {
          collection.set(key, value);
        }
      for (var ii = 0; ii < iters.length; ii++) {
        iters[ii].forEach(mergeIntoMap);
      }
    });
  }

  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
    var isNotSet = existing === NOT_SET;
    var step = keyPathIter.next();
    if (step.done) {
      var existingValue = isNotSet ? notSetValue : existing;
      var newValue = updater(existingValue);
      return newValue === existingValue ? existing : newValue;
    }
    invariant(
      isNotSet || (existing && existing.set),
      'invalid keyPath'
    );
    var key = step.value;
    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
    var nextUpdated = updateInDeepMap(
      nextExisting,
      keyPathIter,
      notSetValue,
      updater
    );
    return nextUpdated === nextExisting ? existing :
      nextUpdated === NOT_SET ? existing.remove(key) :
      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
  }

  function popCount(x) {
    x = x - ((x >> 1) & 0x55555555);
    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
    x = (x + (x >> 4)) & 0x0f0f0f0f;
    x = x + (x >> 8);
    x = x + (x >> 16);
    return x & 0x7f;
  }

  function setIn(array, idx, val, canEdit) {
    var newArray = canEdit ? array : arrCopy(array);
    newArray[idx] = val;
    return newArray;
  }

  function spliceIn(array, idx, val, canEdit) {
    var newLen = array.length + 1;
    if (canEdit && idx + 1 === newLen) {
      array[idx] = val;
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        newArray[ii] = val;
        after = -1;
      } else {
        newArray[ii] = array[ii + after];
      }
    }
    return newArray;
  }

  function spliceOut(array, idx, canEdit) {
    var newLen = array.length - 1;
    if (canEdit && idx === newLen) {
      array.pop();
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        after = 1;
      }
      newArray[ii] = array[ii + after];
    }
    return newArray;
  }

  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

  createClass(List, IndexedCollection);

    // @pragma Construction

    function List(value) {
      var empty = emptyList();
      if (value === null || value === undefined) {
        return empty;
      }
      if (isList(value)) {
        return value;
      }
      var iter = IndexedIterable(value);
      var size = iter.size;
      if (size === 0) {
        return empty;
      }
      assertNotInfinite(size);
      if (size > 0 && size < SIZE) {
        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
      }
      return empty.withMutations(function(list ) {
        list.setSize(size);
        iter.forEach(function(v, i)  {return list.set(i, v)});
      });
    }

    List.of = function(/*...values*/) {
      return this(arguments);
    };

    List.prototype.toString = function() {
      return this.__toString('List [', ']');
    };

    // @pragma Access

    List.prototype.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      if (index >= 0 && index < this.size) {
        index += this._origin;
        var node = listNodeFor(this, index);
        return node && node.array[index & MASK];
      }
      return notSetValue;
    };

    // @pragma Modification

    List.prototype.set = function(index, value) {
      return updateList(this, index, value);
    };

    List.prototype.remove = function(index) {
      return !this.has(index) ? this :
        index === 0 ? this.shift() :
        index === this.size - 1 ? this.pop() :
        this.splice(index, 1);
    };

    List.prototype.insert = function(index, value) {
      return this.splice(index, 0, value);
    };

    List.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = SHIFT;
        this._root = this._tail = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyList();
    };

    List.prototype.push = function(/*...values*/) {
      var values = arguments;
      var oldSize = this.size;
      return this.withMutations(function(list ) {
        setListBounds(list, 0, oldSize + values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(oldSize + ii, values[ii]);
        }
      });
    };

    List.prototype.pop = function() {
      return setListBounds(this, 0, -1);
    };

    List.prototype.unshift = function(/*...values*/) {
      var values = arguments;
      return this.withMutations(function(list ) {
        setListBounds(list, -values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(ii, values[ii]);
        }
      });
    };

    List.prototype.shift = function() {
      return setListBounds(this, 1);
    };

    // @pragma Composition

    List.prototype.merge = function(/*...iters*/) {
      return mergeIntoListWith(this, undefined, arguments);
    };

    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, merger, iters);
    };

    List.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoListWith(this, deepMerger, arguments);
    };

    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, deepMergerWith(merger), iters);
    };

    List.prototype.setSize = function(size) {
      return setListBounds(this, 0, size);
    };

    // @pragma Iteration

    List.prototype.slice = function(begin, end) {
      var size = this.size;
      if (wholeSlice(begin, end, size)) {
        return this;
      }
      return setListBounds(
        this,
        resolveBegin(begin, size),
        resolveEnd(end, size)
      );
    };

    List.prototype.__iterator = function(type, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      return new Iterator(function()  {
        var value = values();
        return value === DONE ?
          iteratorDone() :
          iteratorValue(type, index++, value);
      });
    };

    List.prototype.__iterate = function(fn, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      var value;
      while ((value = values()) !== DONE) {
        if (fn(value, index++, this) === false) {
          break;
        }
      }
      return index;
    };

    List.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        return this;
      }
      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
    };


  function isList(maybeList) {
    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
  }

  List.isList = isList;

  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

  var ListPrototype = List.prototype;
  ListPrototype[IS_LIST_SENTINEL] = true;
  ListPrototype[DELETE] = ListPrototype.remove;
  ListPrototype.setIn = MapPrototype.setIn;
  ListPrototype.deleteIn =
  ListPrototype.removeIn = MapPrototype.removeIn;
  ListPrototype.update = MapPrototype.update;
  ListPrototype.updateIn = MapPrototype.updateIn;
  ListPrototype.mergeIn = MapPrototype.mergeIn;
  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  ListPrototype.withMutations = MapPrototype.withMutations;
  ListPrototype.asMutable = MapPrototype.asMutable;
  ListPrototype.asImmutable = MapPrototype.asImmutable;
  ListPrototype.wasAltered = MapPrototype.wasAltered;



    function VNode(array, ownerID) {
      this.array = array;
      this.ownerID = ownerID;
    }

    // TODO: seems like these methods are very similar

    VNode.prototype.removeBefore = function(ownerID, level, index) {
      if (index === level ? 1 << level : 0 || this.array.length === 0) {
        return this;
      }
      var originIndex = (index >>> level) & MASK;
      if (originIndex >= this.array.length) {
        return new VNode([], ownerID);
      }
      var removingFirst = originIndex === 0;
      var newChild;
      if (level > 0) {
        var oldChild = this.array[originIndex];
        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingFirst) {
          return this;
        }
      }
      if (removingFirst && !newChild) {
        return this;
      }
      var editable = editableVNode(this, ownerID);
      if (!removingFirst) {
        for (var ii = 0; ii < originIndex; ii++) {
          editable.array[ii] = undefined;
        }
      }
      if (newChild) {
        editable.array[originIndex] = newChild;
      }
      return editable;
    };

    VNode.prototype.removeAfter = function(ownerID, level, index) {
      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
        return this;
      }
      var sizeIndex = ((index - 1) >>> level) & MASK;
      if (sizeIndex >= this.array.length) {
        return this;
      }

      var newChild;
      if (level > 0) {
        var oldChild = this.array[sizeIndex];
        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
          return this;
        }
      }

      var editable = editableVNode(this, ownerID);
      editable.array.splice(sizeIndex + 1);
      if (newChild) {
        editable.array[sizeIndex] = newChild;
      }
      return editable;
    };



  var DONE = {};

  function iterateList(list, reverse) {
    var left = list._origin;
    var right = list._capacity;
    var tailPos = getTailOffset(right);
    var tail = list._tail;

    return iterateNodeOrLeaf(list._root, list._level, 0);

    function iterateNodeOrLeaf(node, level, offset) {
      return level === 0 ?
        iterateLeaf(node, offset) :
        iterateNode(node, level, offset);
    }

    function iterateLeaf(node, offset) {
      var array = offset === tailPos ? tail && tail.array : node && node.array;
      var from = offset > left ? 0 : left - offset;
      var to = right - offset;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        if (from === to) {
          return DONE;
        }
        var idx = reverse ? --to : from++;
        return array && array[idx];
      };
    }

    function iterateNode(node, level, offset) {
      var values;
      var array = node && node.array;
      var from = offset > left ? 0 : (left - offset) >> level;
      var to = ((right - offset) >> level) + 1;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        do {
          if (values) {
            var value = values();
            if (value !== DONE) {
              return value;
            }
            values = null;
          }
          if (from === to) {
            return DONE;
          }
          var idx = reverse ? --to : from++;
          values = iterateNodeOrLeaf(
            array && array[idx], level - SHIFT, offset + (idx << level)
          );
        } while (true);
      };
    }
  }

  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
    var list = Object.create(ListPrototype);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash;
    list.__altered = false;
    return list;
  }

  var EMPTY_LIST;
  function emptyList() {
    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
  }

  function updateList(list, index, value) {
    index = wrapIndex(list, index);

    if (index !== index) {
      return list;
    }

    if (index >= list.size || index < 0) {
      return list.withMutations(function(list ) {
        index < 0 ?
          setListBounds(list, index).set(0, value) :
          setListBounds(list, 0, index + 1).set(index, value)
      });
    }

    index += list._origin;

    var newTail = list._tail;
    var newRoot = list._root;
    var didAlter = MakeRef(DID_ALTER);
    if (index >= getTailOffset(list._capacity)) {
      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
    } else {
      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
    }

    if (!didAlter.value) {
      return list;
    }

    if (list.__ownerID) {
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
  }

  function updateVNode(node, ownerID, level, index, value, didAlter) {
    var idx = (index >>> level) & MASK;
    var nodeHas = node && idx < node.array.length;
    if (!nodeHas && value === undefined) {
      return node;
    }

    var newNode;

    if (level > 0) {
      var lowerNode = node && node.array[idx];
      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
      if (newLowerNode === lowerNode) {
        return node;
      }
      newNode = editableVNode(node, ownerID);
      newNode.array[idx] = newLowerNode;
      return newNode;
    }

    if (nodeHas && node.array[idx] === value) {
      return node;
    }

    SetRef(didAlter);

    newNode = editableVNode(node, ownerID);
    if (value === undefined && idx === newNode.array.length - 1) {
      newNode.array.pop();
    } else {
      newNode.array[idx] = value;
    }
    return newNode;
  }

  function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
      return node;
    }
    return new VNode(node ? node.array.slice() : [], ownerID);
  }

  function listNodeFor(list, rawIndex) {
    if (rawIndex >= getTailOffset(list._capacity)) {
      return list._tail;
    }
    if (rawIndex < 1 << (list._level + SHIFT)) {
      var node = list._root;
      var level = list._level;
      while (node && level > 0) {
        node = node.array[(rawIndex >>> level) & MASK];
        level -= SHIFT;
      }
      return node;
    }
  }

  function setListBounds(list, begin, end) {
    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      end = end | 0;
    }
    var owner = list.__ownerID || new OwnerID();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
      return list;
    }

    // If it's going to end after it starts, it's empty.
    if (newOrigin >= newCapacity) {
      return list.clear();
    }

    var newLevel = list._level;
    var newRoot = list._root;

    // New origin might need creating a higher root.
    var offsetShift = 0;
    while (newOrigin + offsetShift < 0) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
      newLevel += SHIFT;
      offsetShift += 1 << newLevel;
    }
    if (offsetShift) {
      newOrigin += offsetShift;
      oldOrigin += offsetShift;
      newCapacity += offsetShift;
      oldCapacity += offsetShift;
    }

    var oldTailOffset = getTailOffset(oldCapacity);
    var newTailOffset = getTailOffset(newCapacity);

    // New size might need creating a higher root.
    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
      newLevel += SHIFT;
    }

    // Locate or create the new tail.
    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset ?
      listNodeFor(list, newCapacity - 1) :
      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

    // Merge Tail into tree.
    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
      newRoot = editableVNode(newRoot, owner);
      var node = newRoot;
      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
        var idx = (oldTailOffset >>> level) & MASK;
        node = node.array[idx] = editableVNode(node.array[idx], owner);
      }
      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
    }

    // If the size has been reduced, there's a chance the tail needs to be trimmed.
    if (newCapacity < oldCapacity) {
      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    }

    // If the new origin is within the tail, then we do not need a root.
    if (newOrigin >= newTailOffset) {
      newOrigin -= newTailOffset;
      newCapacity -= newTailOffset;
      newLevel = SHIFT;
      newRoot = null;
      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

    // Otherwise, if the root has been trimmed, garbage collect.
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
      offsetShift = 0;

      // Identify the new top root node of the subtree of the old root.
      while (newRoot) {
        var beginIndex = (newOrigin >>> newLevel) & MASK;
        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
          break;
        }
        if (beginIndex) {
          offsetShift += (1 << newLevel) * beginIndex;
        }
        newLevel -= SHIFT;
        newRoot = newRoot.array[beginIndex];
      }

      // Trim the new sides of the new root.
      if (newRoot && newOrigin > oldOrigin) {
        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
      }
      if (newRoot && newTailOffset < oldTailOffset) {
        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
      }
      if (offsetShift) {
        newOrigin -= offsetShift;
        newCapacity -= offsetShift;
      }
    }

    if (list.__ownerID) {
      list.size = newCapacity - newOrigin;
      list._origin = newOrigin;
      list._capacity = newCapacity;
      list._level = newLevel;
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
  }

  function mergeIntoListWith(list, merger, iterables) {
    var iters = [];
    var maxSize = 0;
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = IndexedIterable(value);
      if (iter.size > maxSize) {
        maxSize = iter.size;
      }
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    if (maxSize > list.size) {
      list = list.setSize(maxSize);
    }
    return mergeIntoCollectionWith(list, merger, iters);
  }

  function getTailOffset(size) {
    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
  }

  createClass(OrderedMap, Map);

    // @pragma Construction

    function OrderedMap(value) {
      return value === null || value === undefined ? emptyOrderedMap() :
        isOrderedMap(value) ? value :
        emptyOrderedMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    OrderedMap.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedMap.prototype.toString = function() {
      return this.__toString('OrderedMap {', '}');
    };

    // @pragma Access

    OrderedMap.prototype.get = function(k, notSetValue) {
      var index = this._map.get(k);
      return index !== undefined ? this._list.get(index)[1] : notSetValue;
    };

    // @pragma Modification

    OrderedMap.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        return this;
      }
      return emptyOrderedMap();
    };

    OrderedMap.prototype.set = function(k, v) {
      return updateOrderedMap(this, k, v);
    };

    OrderedMap.prototype.remove = function(k) {
      return updateOrderedMap(this, k, NOT_SET);
    };

    OrderedMap.prototype.wasAltered = function() {
      return this._map.wasAltered() || this._list.wasAltered();
    };

    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._list.__iterate(
        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
        reverse
      );
    };

    OrderedMap.prototype.__iterator = function(type, reverse) {
      return this._list.fromEntrySeq().__iterator(type, reverse);
    };

    OrderedMap.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newList = this._list.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        this._list = newList;
        return this;
      }
      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };


  function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
  }

  OrderedMap.isOrderedMap = isOrderedMap;

  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



  function makeOrderedMap(map, list, ownerID, hash) {
    var omap = Object.create(OrderedMap.prototype);
    omap.size = map ? map.size : 0;
    omap._map = map;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash;
    return omap;
  }

  var EMPTY_ORDERED_MAP;
  function emptyOrderedMap() {
    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
  }

  function updateOrderedMap(omap, k, v) {
    var map = omap._map;
    var list = omap._list;
    var i = map.get(k);
    var has = i !== undefined;
    var newMap;
    var newList;
    if (v === NOT_SET) { // removed
      if (!has) {
        return omap;
      }
      if (list.size >= SIZE && list.size >= map.size * 2) {
        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
        if (omap.__ownerID) {
          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
        }
      } else {
        newMap = map.remove(k);
        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
      }
    } else {
      if (has) {
        if (v === list.get(i)[1]) {
          return omap;
        }
        newMap = map;
        newList = list.set(i, [k, v]);
      } else {
        newMap = map.set(k, list.size);
        newList = list.set(list.size, [k, v]);
      }
    }
    if (omap.__ownerID) {
      omap.size = newMap.size;
      omap._map = newMap;
      omap._list = newList;
      omap.__hash = undefined;
      return omap;
    }
    return makeOrderedMap(newMap, newList);
  }

  createClass(ToKeyedSequence, KeyedSeq);
    function ToKeyedSequence(indexed, useKeys) {
      this._iter = indexed;
      this._useKeys = useKeys;
      this.size = indexed.size;
    }

    ToKeyedSequence.prototype.get = function(key, notSetValue) {
      return this._iter.get(key, notSetValue);
    };

    ToKeyedSequence.prototype.has = function(key) {
      return this._iter.has(key);
    };

    ToKeyedSequence.prototype.valueSeq = function() {
      return this._iter.valueSeq();
    };

    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
      var reversedSequence = reverseFactory(this, true);
      if (!this._useKeys) {
        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
      }
      return reversedSequence;
    };

    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
      var mappedSequence = mapFactory(this, mapper, context);
      if (!this._useKeys) {
        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
      }
      return mappedSequence;
    };

    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var ii;
      return this._iter.__iterate(
        this._useKeys ?
          function(v, k)  {return fn(v, k, this$0)} :
          ((ii = reverse ? resolveSize(this) : 0),
            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
        reverse
      );
    };

    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
      if (this._useKeys) {
        return this._iter.__iterator(type, reverse);
      }
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var ii = reverse ? resolveSize(this) : 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
      });
    };

  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(ToIndexedSequence, IndexedSeq);
    function ToIndexedSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToIndexedSequence.prototype.includes = function(value) {
      return this._iter.includes(value);
    };

    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
    };

    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, iterations++, step.value, step)
      });
    };



  createClass(ToSetSequence, SetSeq);
    function ToSetSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToSetSequence.prototype.has = function(key) {
      return this._iter.includes(key);
    };

    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
    };

    ToSetSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, step.value, step.value, step);
      });
    };



  createClass(FromEntriesSequence, KeyedSeq);
    function FromEntriesSequence(entries) {
      this._iter = entries;
      this.size = entries.size;
    }

    FromEntriesSequence.prototype.entrySeq = function() {
      return this._iter.toSeq();
    };

    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(entry ) {
        // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.
        if (entry) {
          validateEntry(entry);
          var indexedIterable = isIterable(entry);
          return fn(
            indexedIterable ? entry.get(1) : entry[1],
            indexedIterable ? entry.get(0) : entry[0],
            this$0
          );
        }
      }, reverse);
    };

    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          // Check if entry exists first so array access doesn't throw for holes
          // in the parent iteration.
          if (entry) {
            validateEntry(entry);
            var indexedIterable = isIterable(entry);
            return iteratorValue(
              type,
              indexedIterable ? entry.get(0) : entry[0],
              indexedIterable ? entry.get(1) : entry[1],
              step
            );
          }
        }
      });
    };


  ToIndexedSequence.prototype.cacheResult =
  ToKeyedSequence.prototype.cacheResult =
  ToSetSequence.prototype.cacheResult =
  FromEntriesSequence.prototype.cacheResult =
    cacheResultThrough;


  function flipFactory(iterable) {
    var flipSequence = makeSequence(iterable);
    flipSequence._iter = iterable;
    flipSequence.size = iterable.size;
    flipSequence.flip = function()  {return iterable};
    flipSequence.reverse = function () {
      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
      reversedSequence.flip = function()  {return iterable.reverse()};
      return reversedSequence;
    };
    flipSequence.has = function(key ) {return iterable.includes(key)};
    flipSequence.includes = function(key ) {return iterable.has(key)};
    flipSequence.cacheResult = cacheResultThrough;
    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
    }
    flipSequence.__iteratorUncached = function(type, reverse) {
      if (type === ITERATE_ENTRIES) {
        var iterator = iterable.__iterator(type, reverse);
        return new Iterator(function()  {
          var step = iterator.next();
          if (!step.done) {
            var k = step.value[0];
            step.value[0] = step.value[1];
            step.value[1] = k;
          }
          return step;
        });
      }
      return iterable.__iterator(
        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
        reverse
      );
    }
    return flipSequence;
  }


  function mapFactory(iterable, mapper, context) {
    var mappedSequence = makeSequence(iterable);
    mappedSequence.size = iterable.size;
    mappedSequence.has = function(key ) {return iterable.has(key)};
    mappedSequence.get = function(key, notSetValue)  {
      var v = iterable.get(key, NOT_SET);
      return v === NOT_SET ?
        notSetValue :
        mapper.call(context, v, key, iterable);
    };
    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(
        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
        reverse
      );
    }
    mappedSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        return iteratorValue(
          type,
          key,
          mapper.call(context, entry[1], key, iterable),
          step
        );
      });
    }
    return mappedSequence;
  }


  function reverseFactory(iterable, useKeys) {
    var reversedSequence = makeSequence(iterable);
    reversedSequence._iter = iterable;
    reversedSequence.size = iterable.size;
    reversedSequence.reverse = function()  {return iterable};
    if (iterable.flip) {
      reversedSequence.flip = function () {
        var flipSequence = flipFactory(iterable);
        flipSequence.reverse = function()  {return iterable.flip()};
        return flipSequence;
      };
    }
    reversedSequence.get = function(key, notSetValue) 
      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
    reversedSequence.has = function(key )
      {return iterable.has(useKeys ? key : -1 - key)};
    reversedSequence.includes = function(value ) {return iterable.includes(value)};
    reversedSequence.cacheResult = cacheResultThrough;
    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
    };
    reversedSequence.__iterator =
      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
    return reversedSequence;
  }


  function filterFactory(iterable, predicate, context, useKeys) {
    var filterSequence = makeSequence(iterable);
    if (useKeys) {
      filterSequence.has = function(key ) {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
      };
      filterSequence.get = function(key, notSetValue)  {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
          v : notSetValue;
      };
    }
    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      }, reverse);
      return iterations;
    };
    filterSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          var value = entry[1];
          if (predicate.call(context, value, key, iterable)) {
            return iteratorValue(type, useKeys ? key : iterations++, value, step);
          }
        }
      });
    }
    return filterSequence;
  }


  function countByFactory(iterable, grouper, context) {
    var groups = Map().asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        0,
        function(a ) {return a + 1}
      );
    });
    return groups.asImmutable();
  }


  function groupByFactory(iterable, grouper, context) {
    var isKeyedIter = isKeyed(iterable);
    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
      );
    });
    var coerce = iterableClass(iterable);
    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
  }


  function sliceFactory(iterable, begin, end, useKeys) {
    var originalSize = iterable.size;

    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      if (end === Infinity) {
        end = originalSize;
      } else {
        end = end | 0;
      }
    }

    if (wholeSlice(begin, end, originalSize)) {
      return iterable;
    }

    var resolvedBegin = resolveBegin(begin, originalSize);
    var resolvedEnd = resolveEnd(end, originalSize);

    // begin or end will be NaN if they were provided as negative numbers and
    // this iterable's size is unknown. In that case, cache first so there is
    // a known size and these do not resolve to NaN.
    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
    }

    // Note: resolvedEnd is undefined when the original sequence's length is
    // unknown and this slice did not supply an end and should contain all
    // elements after resolvedBegin.
    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
    var resolvedSize = resolvedEnd - resolvedBegin;
    var sliceSize;
    if (resolvedSize === resolvedSize) {
      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
    }

    var sliceSeq = makeSequence(iterable);

    // If iterable.size is undefined, the size of the realized sliceSeq is
    // unknown at this point unless the number of items to slice is 0
    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
      sliceSeq.get = function (index, notSetValue) {
        index = wrapIndex(this, index);
        return index >= 0 && index < sliceSize ?
          iterable.get(index + resolvedBegin, notSetValue) :
          notSetValue;
      }
    }

    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (sliceSize === 0) {
        return 0;
      }
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var skipped = 0;
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k)  {
        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
                 iterations !== sliceSize;
        }
      });
      return iterations;
    };

    sliceSeq.__iteratorUncached = function(type, reverse) {
      if (sliceSize !== 0 && reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      // Don't bother instantiating parent iterator if taking 0.
      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
      var skipped = 0;
      var iterations = 0;
      return new Iterator(function()  {
        while (skipped++ < resolvedBegin) {
          iterator.next();
        }
        if (++iterations > sliceSize) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (useKeys || type === ITERATE_VALUES) {
          return step;
        } else if (type === ITERATE_KEYS) {
          return iteratorValue(type, iterations - 1, undefined, step);
        } else {
          return iteratorValue(type, iterations - 1, step.value[1], step);
        }
      });
    }

    return sliceSeq;
  }


  function takeWhileFactory(iterable, predicate, context) {
    var takeSequence = makeSequence(iterable);
    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterations = 0;
      iterable.__iterate(function(v, k, c) 
        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
      );
      return iterations;
    };
    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterating = true;
      return new Iterator(function()  {
        if (!iterating) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var k = entry[0];
        var v = entry[1];
        if (!predicate.call(context, v, k, this$0)) {
          iterating = false;
          return iteratorDone();
        }
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return takeSequence;
  }


  function skipWhileFactory(iterable, predicate, context, useKeys) {
    var skipSequence = makeSequence(iterable);
    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      });
      return iterations;
    };
    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var skipping = true;
      var iterations = 0;
      return new Iterator(function()  {
        var step, k, v;
        do {
          step = iterator.next();
          if (step.done) {
            if (useKeys || type === ITERATE_VALUES) {
              return step;
            } else if (type === ITERATE_KEYS) {
              return iteratorValue(type, iterations++, undefined, step);
            } else {
              return iteratorValue(type, iterations++, step.value[1], step);
            }
          }
          var entry = step.value;
          k = entry[0];
          v = entry[1];
          skipping && (skipping = predicate.call(context, v, k, this$0));
        } while (skipping);
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return skipSequence;
  }


  function concatFactory(iterable, values) {
    var isKeyedIterable = isKeyed(iterable);
    var iters = [iterable].concat(values).map(function(v ) {
      if (!isIterable(v)) {
        v = isKeyedIterable ?
          keyedSeqFromValue(v) :
          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedIterable) {
        v = KeyedIterable(v);
      }
      return v;
    }).filter(function(v ) {return v.size !== 0});

    if (iters.length === 0) {
      return iterable;
    }

    if (iters.length === 1) {
      var singleton = iters[0];
      if (singleton === iterable ||
          isKeyedIterable && isKeyed(singleton) ||
          isIndexed(iterable) && isIndexed(singleton)) {
        return singleton;
      }
    }

    var concatSeq = new ArraySeq(iters);
    if (isKeyedIterable) {
      concatSeq = concatSeq.toKeyedSeq();
    } else if (!isIndexed(iterable)) {
      concatSeq = concatSeq.toSetSeq();
    }
    concatSeq = concatSeq.flatten(true);
    concatSeq.size = iters.reduce(
      function(sum, seq)  {
        if (sum !== undefined) {
          var size = seq.size;
          if (size !== undefined) {
            return sum + size;
          }
        }
      },
      0
    );
    return concatSeq;
  }


  function flattenFactory(iterable, depth, useKeys) {
    var flatSequence = makeSequence(iterable);
    flatSequence.__iterateUncached = function(fn, reverse) {
      var iterations = 0;
      var stopped = false;
      function flatDeep(iter, currentDepth) {var this$0 = this;
        iter.__iterate(function(v, k)  {
          if ((!depth || currentDepth < depth) && isIterable(v)) {
            flatDeep(v, currentDepth + 1);
          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
            stopped = true;
          }
          return !stopped;
        }, reverse);
      }
      flatDeep(iterable, 0);
      return iterations;
    }
    flatSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(type, reverse);
      var stack = [];
      var iterations = 0;
      return new Iterator(function()  {
        while (iterator) {
          var step = iterator.next();
          if (step.done !== false) {
            iterator = stack.pop();
            continue;
          }
          var v = step.value;
          if (type === ITERATE_ENTRIES) {
            v = v[1];
          }
          if ((!depth || stack.length < depth) && isIterable(v)) {
            stack.push(iterator);
            iterator = v.__iterator(type, reverse);
          } else {
            return useKeys ? step : iteratorValue(type, iterations++, v, step);
          }
        }
        return iteratorDone();
      });
    }
    return flatSequence;
  }


  function flatMapFactory(iterable, mapper, context) {
    var coerce = iterableClass(iterable);
    return iterable.toSeq().map(
      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
    ).flatten(true);
  }


  function interposeFactory(iterable, separator) {
    var interposedSequence = makeSequence(iterable);
    interposedSequence.size = iterable.size && iterable.size * 2 -1;
    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k) 
        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
        fn(v, iterations++, this$0) !== false},
        reverse
      );
      return iterations;
    };
    interposedSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      var step;
      return new Iterator(function()  {
        if (!step || iterations % 2) {
          step = iterator.next();
          if (step.done) {
            return step;
          }
        }
        return iterations % 2 ?
          iteratorValue(type, iterations++, separator) :
          iteratorValue(type, iterations++, step.value, step);
      });
    };
    return interposedSequence;
  }


  function sortFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    var isKeyedIterable = isKeyed(iterable);
    var index = 0;
    var entries = iterable.toSeq().map(
      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
    ).toArray();
    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
      isKeyedIterable ?
      function(v, i)  { entries[i].length = 2; } :
      function(v, i)  { entries[i] = v[1]; }
    );
    return isKeyedIterable ? KeyedSeq(entries) :
      isIndexed(iterable) ? IndexedSeq(entries) :
      SetSeq(entries);
  }


  function maxFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    if (mapper) {
      var entry = iterable.toSeq()
        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
      return entry && entry[0];
    } else {
      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
    }
  }

  function maxCompare(comparator, a, b) {
    var comp = comparator(b, a);
    // b is considered the new max if the comparator declares them equal, but
    // they are not equal and b is in fact a nullish value.
    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
  }


  function zipWithFactory(keyIter, zipper, iters) {
    var zipSequence = makeSequence(keyIter);
    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
    // Note: this a generic base implementation of __iterate in terms of
    // __iterator which may be more generically useful in the future.
    zipSequence.__iterate = function(fn, reverse) {
      /* generic:
      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        iterations++;
        if (fn(step.value[1], step.value[0], this) === false) {
          break;
        }
      }
      return iterations;
      */
      // indexed:
      var iterator = this.__iterator(ITERATE_VALUES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };
    zipSequence.__iteratorUncached = function(type, reverse) {
      var iterators = iters.map(function(i )
        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
      );
      var iterations = 0;
      var isDone = false;
      return new Iterator(function()  {
        var steps;
        if (!isDone) {
          steps = iterators.map(function(i ) {return i.next()});
          isDone = steps.some(function(s ) {return s.done});
        }
        if (isDone) {
          return iteratorDone();
        }
        return iteratorValue(
          type,
          iterations++,
          zipper.apply(null, steps.map(function(s ) {return s.value}))
        );
      });
    };
    return zipSequence
  }


  // #pragma Helper Functions

  function reify(iter, seq) {
    return isSeq(iter) ? seq : iter.constructor(seq);
  }

  function validateEntry(entry) {
    if (entry !== Object(entry)) {
      throw new TypeError('Expected [K, V] tuple: ' + entry);
    }
  }

  function resolveSize(iter) {
    assertNotInfinite(iter.size);
    return ensureSize(iter);
  }

  function iterableClass(iterable) {
    return isKeyed(iterable) ? KeyedIterable :
      isIndexed(iterable) ? IndexedIterable :
      SetIterable;
  }

  function makeSequence(iterable) {
    return Object.create(
      (
        isKeyed(iterable) ? KeyedSeq :
        isIndexed(iterable) ? IndexedSeq :
        SetSeq
      ).prototype
    );
  }

  function cacheResultThrough() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();
      this.size = this._iter.size;
      return this;
    } else {
      return Seq.prototype.cacheResult.call(this);
    }
  }

  function defaultComparator(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  function forceIterator(keyPath) {
    var iter = getIterator(keyPath);
    if (!iter) {
      // Array might not be iterable in this environment, so we need a fallback
      // to our wrapped type.
      if (!isArrayLike(keyPath)) {
        throw new TypeError('Expected iterable or array-like: ' + keyPath);
      }
      iter = getIterator(Iterable(keyPath));
    }
    return iter;
  }

  createClass(Record, KeyedCollection);

    function Record(defaultValues, name) {
      var hasInitialized;

      var RecordType = function Record(values) {
        if (values instanceof RecordType) {
          return values;
        }
        if (!(this instanceof RecordType)) {
          return new RecordType(values);
        }
        if (!hasInitialized) {
          hasInitialized = true;
          var keys = Object.keys(defaultValues);
          setProps(RecordTypePrototype, keys);
          RecordTypePrototype.size = keys.length;
          RecordTypePrototype._name = name;
          RecordTypePrototype._keys = keys;
          RecordTypePrototype._defaultValues = defaultValues;
        }
        this._map = Map(values);
      };

      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
      RecordTypePrototype.constructor = RecordType;

      return RecordType;
    }

    Record.prototype.toString = function() {
      return this.__toString(recordName(this) + ' {', '}');
    };

    // @pragma Access

    Record.prototype.has = function(k) {
      return this._defaultValues.hasOwnProperty(k);
    };

    Record.prototype.get = function(k, notSetValue) {
      if (!this.has(k)) {
        return notSetValue;
      }
      var defaultVal = this._defaultValues[k];
      return this._map ? this._map.get(k, defaultVal) : defaultVal;
    };

    // @pragma Modification

    Record.prototype.clear = function() {
      if (this.__ownerID) {
        this._map && this._map.clear();
        return this;
      }
      var RecordType = this.constructor;
      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
    };

    Record.prototype.set = function(k, v) {
      if (!this.has(k)) {
        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
      }
      if (this._map && !this._map.has(k)) {
        var defaultVal = this._defaultValues[k];
        if (v === defaultVal) {
          return this;
        }
      }
      var newMap = this._map && this._map.set(k, v);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.remove = function(k) {
      if (!this.has(k)) {
        return this;
      }
      var newMap = this._map && this._map.remove(k);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
    };

    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
    };

    Record.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map && this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return makeRecord(this, newMap, ownerID);
    };


  var RecordPrototype = Record.prototype;
  RecordPrototype[DELETE] = RecordPrototype.remove;
  RecordPrototype.deleteIn =
  RecordPrototype.removeIn = MapPrototype.removeIn;
  RecordPrototype.merge = MapPrototype.merge;
  RecordPrototype.mergeWith = MapPrototype.mergeWith;
  RecordPrototype.mergeIn = MapPrototype.mergeIn;
  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  RecordPrototype.setIn = MapPrototype.setIn;
  RecordPrototype.update = MapPrototype.update;
  RecordPrototype.updateIn = MapPrototype.updateIn;
  RecordPrototype.withMutations = MapPrototype.withMutations;
  RecordPrototype.asMutable = MapPrototype.asMutable;
  RecordPrototype.asImmutable = MapPrototype.asImmutable;


  function makeRecord(likeRecord, map, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._map = map;
    record.__ownerID = ownerID;
    return record;
  }

  function recordName(record) {
    return record._name || record.constructor.name || 'Record';
  }

  function setProps(prototype, names) {
    try {
      names.forEach(setProp.bind(undefined, prototype));
    } catch (error) {
      // Object.defineProperty failed. Probably IE8.
    }
  }

  function setProp(prototype, name) {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      }
    });
  }

  createClass(Set, SetCollection);

    // @pragma Construction

    function Set(value) {
      return value === null || value === undefined ? emptySet() :
        isSet(value) && !isOrdered(value) ? value :
        emptySet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    Set.of = function(/*...values*/) {
      return this(arguments);
    };

    Set.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    Set.prototype.toString = function() {
      return this.__toString('Set {', '}');
    };

    // @pragma Access

    Set.prototype.has = function(value) {
      return this._map.has(value);
    };

    // @pragma Modification

    Set.prototype.add = function(value) {
      return updateSet(this, this._map.set(value, true));
    };

    Set.prototype.remove = function(value) {
      return updateSet(this, this._map.remove(value));
    };

    Set.prototype.clear = function() {
      return updateSet(this, this._map.clear());
    };

    // @pragma Composition

    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
      iters = iters.filter(function(x ) {return x.size !== 0});
      if (iters.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
        return this.constructor(iters[0]);
      }
      return this.withMutations(function(set ) {
        for (var ii = 0; ii < iters.length; ii++) {
          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
        }
      });
    };

    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (!iters.every(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (iters.some(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.merge = function() {
      return this.union.apply(this, arguments);
    };

    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return this.union.apply(this, iters);
    };

    Set.prototype.sort = function(comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator));
    };

    Set.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator, mapper));
    };

    Set.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
    };

    Set.prototype.__iterator = function(type, reverse) {
      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
    };

    Set.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };


  function isSet(maybeSet) {
    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
  }

  Set.isSet = isSet;

  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

  var SetPrototype = Set.prototype;
  SetPrototype[IS_SET_SENTINEL] = true;
  SetPrototype[DELETE] = SetPrototype.remove;
  SetPrototype.mergeDeep = SetPrototype.merge;
  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
  SetPrototype.withMutations = MapPrototype.withMutations;
  SetPrototype.asMutable = MapPrototype.asMutable;
  SetPrototype.asImmutable = MapPrototype.asImmutable;

  SetPrototype.__empty = emptySet;
  SetPrototype.__make = makeSet;

  function updateSet(set, newMap) {
    if (set.__ownerID) {
      set.size = newMap.size;
      set._map = newMap;
      return set;
    }
    return newMap === set._map ? set :
      newMap.size === 0 ? set.__empty() :
      set.__make(newMap);
  }

  function makeSet(map, ownerID) {
    var set = Object.create(SetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_SET;
  function emptySet() {
    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
  }

  createClass(OrderedSet, Set);

    // @pragma Construction

    function OrderedSet(value) {
      return value === null || value === undefined ? emptyOrderedSet() :
        isOrderedSet(value) ? value :
        emptyOrderedSet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    OrderedSet.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedSet.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    OrderedSet.prototype.toString = function() {
      return this.__toString('OrderedSet {', '}');
    };


  function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
  }

  OrderedSet.isOrderedSet = isOrderedSet;

  var OrderedSetPrototype = OrderedSet.prototype;
  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

  OrderedSetPrototype.__empty = emptyOrderedSet;
  OrderedSetPrototype.__make = makeOrderedSet;

  function makeOrderedSet(map, ownerID) {
    var set = Object.create(OrderedSetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_ORDERED_SET;
  function emptyOrderedSet() {
    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
  }

  createClass(Stack, IndexedCollection);

    // @pragma Construction

    function Stack(value) {
      return value === null || value === undefined ? emptyStack() :
        isStack(value) ? value :
        emptyStack().unshiftAll(value);
    }

    Stack.of = function(/*...values*/) {
      return this(arguments);
    };

    Stack.prototype.toString = function() {
      return this.__toString('Stack [', ']');
    };

    // @pragma Access

    Stack.prototype.get = function(index, notSetValue) {
      var head = this._head;
      index = wrapIndex(this, index);
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    };

    Stack.prototype.peek = function() {
      return this._head && this._head.value;
    };

    // @pragma Modification

    Stack.prototype.push = function(/*...values*/) {
      if (arguments.length === 0) {
        return this;
      }
      var newSize = this.size + arguments.length;
      var head = this._head;
      for (var ii = arguments.length - 1; ii >= 0; ii--) {
        head = {
          value: arguments[ii],
          next: head
        };
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pushAll = function(iter) {
      iter = IndexedIterable(iter);
      if (iter.size === 0) {
        return this;
      }
      assertNotInfinite(iter.size);
      var newSize = this.size;
      var head = this._head;
      iter.reverse().forEach(function(value ) {
        newSize++;
        head = {
          value: value,
          next: head
        };
      });
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pop = function() {
      return this.slice(1);
    };

    Stack.prototype.unshift = function(/*...values*/) {
      return this.push.apply(this, arguments);
    };

    Stack.prototype.unshiftAll = function(iter) {
      return this.pushAll(iter);
    };

    Stack.prototype.shift = function() {
      return this.pop.apply(this, arguments);
    };

    Stack.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._head = undefined;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyStack();
    };

    Stack.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.size);
      var resolvedEnd = resolveEnd(end, this.size);
      if (resolvedEnd !== this.size) {
        // super.slice(begin, end);
        return IndexedCollection.prototype.slice.call(this, begin, end);
      }
      var newSize = this.size - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    // @pragma Mutability

    Stack.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack(this.size, this._head, ownerID, this.__hash);
    };

    // @pragma Iteration

    Stack.prototype.__iterate = function(fn, reverse) {
      if (reverse) {
        return this.reverse().__iterate(fn);
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn(node.value, iterations++, this) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    };

    Stack.prototype.__iterator = function(type, reverse) {
      if (reverse) {
        return this.reverse().__iterator(type);
      }
      var iterations = 0;
      var node = this._head;
      return new Iterator(function()  {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue(type, iterations++, value);
        }
        return iteratorDone();
      });
    };


  function isStack(maybeStack) {
    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
  }

  Stack.isStack = isStack;

  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

  var StackPrototype = Stack.prototype;
  StackPrototype[IS_STACK_SENTINEL] = true;
  StackPrototype.withMutations = MapPrototype.withMutations;
  StackPrototype.asMutable = MapPrototype.asMutable;
  StackPrototype.asImmutable = MapPrototype.asImmutable;
  StackPrototype.wasAltered = MapPrototype.wasAltered;


  function makeStack(size, head, ownerID, hash) {
    var map = Object.create(StackPrototype);
    map.size = size;
    map._head = head;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_STACK;
  function emptyStack() {
    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
  }

  /**
   * Contributes additional methods to a constructor
   */
  function mixin(ctor, methods) {
    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols &&
      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
  }

  Iterable.Iterator = Iterator;

  mixin(Iterable, {

    // ### Conversion to other types

    toArray: function() {
      assertNotInfinite(this.size);
      var array = new Array(this.size || 0);
      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
      return array;
    },

    toIndexedSeq: function() {
      return new ToIndexedSequence(this);
    },

    toJS: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
      ).__toJS();
    },

    toJSON: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
      ).__toJS();
    },

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, true);
    },

    toMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return Map(this.toKeyedSeq());
    },

    toObject: function() {
      assertNotInfinite(this.size);
      var object = {};
      this.__iterate(function(v, k)  { object[k] = v; });
      return object;
    },

    toOrderedMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedMap(this.toKeyedSeq());
    },

    toOrderedSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
    },

    toSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return Set(isKeyed(this) ? this.valueSeq() : this);
    },

    toSetSeq: function() {
      return new ToSetSequence(this);
    },

    toSeq: function() {
      return isIndexed(this) ? this.toIndexedSeq() :
        isKeyed(this) ? this.toKeyedSeq() :
        this.toSetSeq();
    },

    toStack: function() {
      // Use Late Binding here to solve the circular dependency.
      return Stack(isKeyed(this) ? this.valueSeq() : this);
    },

    toList: function() {
      // Use Late Binding here to solve the circular dependency.
      return List(isKeyed(this) ? this.valueSeq() : this);
    },


    // ### Common JavaScript methods and properties

    toString: function() {
      return '[Iterable]';
    },

    __toString: function(head, tail) {
      if (this.size === 0) {
        return head + tail;
      }
      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    concat: function() {var values = SLICE$0.call(arguments, 0);
      return reify(this, concatFactory(this, values));
    },

    includes: function(searchValue) {
      return this.some(function(value ) {return is(value, searchValue)});
    },

    entries: function() {
      return this.__iterator(ITERATE_ENTRIES);
    },

    every: function(predicate, context) {
      assertNotInfinite(this.size);
      var returnValue = true;
      this.__iterate(function(v, k, c)  {
        if (!predicate.call(context, v, k, c)) {
          returnValue = false;
          return false;
        }
      });
      return returnValue;
    },

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, true));
    },

    find: function(predicate, context, notSetValue) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[1] : notSetValue;
    },

    forEach: function(sideEffect, context) {
      assertNotInfinite(this.size);
      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },

    join: function(separator) {
      assertNotInfinite(this.size);
      separator = separator !== undefined ? '' + separator : ',';
      var joined = '';
      var isFirst = true;
      this.__iterate(function(v ) {
        isFirst ? (isFirst = false) : (joined += separator);
        joined += v !== null && v !== undefined ? v.toString() : '';
      });
      return joined;
    },

    keys: function() {
      return this.__iterator(ITERATE_KEYS);
    },

    map: function(mapper, context) {
      return reify(this, mapFactory(this, mapper, context));
    },

    reduce: function(reducer, initialReduction, context) {
      assertNotInfinite(this.size);
      var reduction;
      var useFirst;
      if (arguments.length < 2) {
        useFirst = true;
      } else {
        reduction = initialReduction;
      }
      this.__iterate(function(v, k, c)  {
        if (useFirst) {
          useFirst = false;
          reduction = v;
        } else {
          reduction = reducer.call(context, reduction, v, k, c);
        }
      });
      return reduction;
    },

    reduceRight: function(reducer, initialReduction, context) {
      var reversed = this.toKeyedSeq().reverse();
      return reversed.reduce.apply(reversed, arguments);
    },

    reverse: function() {
      return reify(this, reverseFactory(this, true));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, true));
    },

    some: function(predicate, context) {
      return !this.every(not(predicate), context);
    },

    sort: function(comparator) {
      return reify(this, sortFactory(this, comparator));
    },

    values: function() {
      return this.__iterator(ITERATE_VALUES);
    },


    // ### More sequential methods

    butLast: function() {
      return this.slice(0, -1);
    },

    isEmpty: function() {
      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
    },

    count: function(predicate, context) {
      return ensureSize(
        predicate ? this.toSeq().filter(predicate, context) : this
      );
    },

    countBy: function(grouper, context) {
      return countByFactory(this, grouper, context);
    },

    equals: function(other) {
      return deepEqual(this, other);
    },

    entrySeq: function() {
      var iterable = this;
      if (iterable._cache) {
        // We cache as an entries array, so we can just return the cache!
        return new ArraySeq(iterable._cache);
      }
      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
      return entriesSequence;
    },

    filterNot: function(predicate, context) {
      return this.filter(not(predicate), context);
    },

    findEntry: function(predicate, context, notSetValue) {
      var found = notSetValue;
      this.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          found = [k, v];
          return false;
        }
      });
      return found;
    },

    findKey: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry && entry[0];
    },

    findLast: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },

    findLastEntry: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
    },

    findLastKey: function(predicate, context) {
      return this.toKeyedSeq().reverse().findKey(predicate, context);
    },

    first: function() {
      return this.find(returnTrue);
    },

    flatMap: function(mapper, context) {
      return reify(this, flatMapFactory(this, mapper, context));
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, true));
    },

    fromEntrySeq: function() {
      return new FromEntriesSequence(this);
    },

    get: function(searchKey, notSetValue) {
      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
    },

    getIn: function(searchKeyPath, notSetValue) {
      var nested = this;
      // Note: in an ES6 environment, we would prefer:
      // for (var key of searchKeyPath) {
      var iter = forceIterator(searchKeyPath);
      var step;
      while (!(step = iter.next()).done) {
        var key = step.value;
        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
        if (nested === NOT_SET) {
          return notSetValue;
        }
      }
      return nested;
    },

    groupBy: function(grouper, context) {
      return groupByFactory(this, grouper, context);
    },

    has: function(searchKey) {
      return this.get(searchKey, NOT_SET) !== NOT_SET;
    },

    hasIn: function(searchKeyPath) {
      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
    },

    isSubset: function(iter) {
      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
      return this.every(function(value ) {return iter.includes(value)});
    },

    isSuperset: function(iter) {
      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
      return iter.isSubset(this);
    },

    keyOf: function(searchValue) {
      return this.findKey(function(value ) {return is(value, searchValue)});
    },

    keySeq: function() {
      return this.toSeq().map(keyMapper).toIndexedSeq();
    },

    last: function() {
      return this.toSeq().reverse().first();
    },

    lastKeyOf: function(searchValue) {
      return this.toKeyedSeq().reverse().keyOf(searchValue);
    },

    max: function(comparator) {
      return maxFactory(this, comparator);
    },

    maxBy: function(mapper, comparator) {
      return maxFactory(this, comparator, mapper);
    },

    min: function(comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
    },

    minBy: function(mapper, comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
    },

    rest: function() {
      return this.slice(1);
    },

    skip: function(amount) {
      return this.slice(Math.max(0, amount));
    },

    skipLast: function(amount) {
      return reify(this, this.toSeq().reverse().skip(amount).reverse());
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, true));
    },

    skipUntil: function(predicate, context) {
      return this.skipWhile(not(predicate), context);
    },

    sortBy: function(mapper, comparator) {
      return reify(this, sortFactory(this, comparator, mapper));
    },

    take: function(amount) {
      return this.slice(0, Math.max(0, amount));
    },

    takeLast: function(amount) {
      return reify(this, this.toSeq().reverse().take(amount).reverse());
    },

    takeWhile: function(predicate, context) {
      return reify(this, takeWhileFactory(this, predicate, context));
    },

    takeUntil: function(predicate, context) {
      return this.takeWhile(not(predicate), context);
    },

    valueSeq: function() {
      return this.toIndexedSeq();
    },


    // ### Hashable Object

    hashCode: function() {
      return this.__hash || (this.__hash = hashIterable(this));
    }


    // ### Internal

    // abstract __iterate(fn, reverse)

    // abstract __iterator(type, reverse)
  });

  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  var IterablePrototype = Iterable.prototype;
  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
  IterablePrototype.__toJS = IterablePrototype.toArray;
  IterablePrototype.__toStringMapper = quoteString;
  IterablePrototype.inspect =
  IterablePrototype.toSource = function() { return this.toString(); };
  IterablePrototype.chain = IterablePrototype.flatMap;
  IterablePrototype.contains = IterablePrototype.includes;

  mixin(KeyedIterable, {

    // ### More sequential methods

    flip: function() {
      return reify(this, flipFactory(this));
    },

    mapEntries: function(mapper, context) {var this$0 = this;
      var iterations = 0;
      return reify(this,
        this.toSeq().map(
          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
        ).fromEntrySeq()
      );
    },

    mapKeys: function(mapper, context) {var this$0 = this;
      return reify(this,
        this.toSeq().flip().map(
          function(k, v)  {return mapper.call(context, k, v, this$0)}
        ).flip()
      );
    }

  });

  var KeyedIterablePrototype = KeyedIterable.prototype;
  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



  mixin(IndexedIterable, {

    // ### Conversion to other types

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, false);
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, false));
    },

    findIndex: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    indexOf: function(searchValue) {
      var key = this.keyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    lastIndexOf: function(searchValue) {
      var key = this.lastKeyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    reverse: function() {
      return reify(this, reverseFactory(this, false));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, false));
    },

    splice: function(index, removeNum /*, ...values*/) {
      var numArgs = arguments.length;
      removeNum = Math.max(removeNum | 0, 0);
      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
        return this;
      }
      // If index is negative, it should resolve relative to the size of the
      // collection. However size may be expensive to compute if not cached, so
      // only call count() if the number is in fact negative.
      index = resolveBegin(index, index < 0 ? this.count() : this.size);
      var spliced = this.slice(0, index);
      return reify(
        this,
        numArgs === 1 ?
          spliced :
          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
      );
    },


    // ### More collection methods

    findLastIndex: function(predicate, context) {
      var entry = this.findLastEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    first: function() {
      return this.get(0);
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, false));
    },

    get: function(index, notSetValue) {
      index = wrapIndex(this, index);
      return (index < 0 || (this.size === Infinity ||
          (this.size !== undefined && index > this.size))) ?
        notSetValue :
        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
    },

    has: function(index) {
      index = wrapIndex(this, index);
      return index >= 0 && (this.size !== undefined ?
        this.size === Infinity || index < this.size :
        this.indexOf(index) !== -1
      );
    },

    interpose: function(separator) {
      return reify(this, interposeFactory(this, separator));
    },

    interleave: function(/*...iterables*/) {
      var iterables = [this].concat(arrCopy(arguments));
      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
      var interleaved = zipped.flatten(true);
      if (zipped.size) {
        interleaved.size = zipped.size * iterables.length;
      }
      return reify(this, interleaved);
    },

    keySeq: function() {
      return Range(0, this.size);
    },

    last: function() {
      return this.get(-1);
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, false));
    },

    zip: function(/*, ...iterables */) {
      var iterables = [this].concat(arrCopy(arguments));
      return reify(this, zipWithFactory(this, defaultZipper, iterables));
    },

    zipWith: function(zipper/*, ...iterables */) {
      var iterables = arrCopy(arguments);
      iterables[0] = this;
      return reify(this, zipWithFactory(this, zipper, iterables));
    }

  });

  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



  mixin(SetIterable, {

    // ### ES6 Collection methods (ES6 Array and Map)

    get: function(value, notSetValue) {
      return this.has(value) ? value : notSetValue;
    },

    includes: function(value) {
      return this.has(value);
    },


    // ### More sequential methods

    keySeq: function() {
      return this.valueSeq();
    }

  });

  SetIterable.prototype.has = IterablePrototype.includes;
  SetIterable.prototype.contains = SetIterable.prototype.includes;


  // Mixin subclasses

  mixin(KeyedSeq, KeyedIterable.prototype);
  mixin(IndexedSeq, IndexedIterable.prototype);
  mixin(SetSeq, SetIterable.prototype);

  mixin(KeyedCollection, KeyedIterable.prototype);
  mixin(IndexedCollection, IndexedIterable.prototype);
  mixin(SetCollection, SetIterable.prototype);


  // #pragma Helper functions

  function keyMapper(v, k) {
    return k;
  }

  function entryMapper(v, k) {
    return [k, v];
  }

  function not(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    }
  }

  function neg(predicate) {
    return function() {
      return -predicate.apply(this, arguments);
    }
  }

  function quoteString(value) {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  }

  function defaultZipper() {
    return arrCopy(arguments);
  }

  function defaultNegComparator(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
  }

  function hashIterable(iterable) {
    if (iterable.size === Infinity) {
      return 0;
    }
    var ordered = isOrdered(iterable);
    var keyed = isKeyed(iterable);
    var h = ordered ? 1 : 0;
    var size = iterable.__iterate(
      keyed ?
        ordered ?
          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
        ordered ?
          function(v ) { h = 31 * h + hash(v) | 0; } :
          function(v ) { h = h + hash(v) | 0; }
    );
    return murmurHashOfSize(size, h);
  }

  function murmurHashOfSize(size, h) {
    h = imul(h, 0xCC9E2D51);
    h = imul(h << 15 | h >>> -15, 0x1B873593);
    h = imul(h << 13 | h >>> -13, 5);
    h = (h + 0xE6546B64 | 0) ^ size;
    h = imul(h ^ h >>> 16, 0x85EBCA6B);
    h = imul(h ^ h >>> 13, 0xC2B2AE35);
    h = smi(h ^ h >>> 16);
    return h;
  }

  function hashMerge(a, b) {
    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
  }

  var Immutable = {

    Iterable: Iterable,

    Seq: Seq,
    Collection: Collection,
    Map: Map,
    OrderedMap: OrderedMap,
    List: List,
    Stack: Stack,
    Set: Set,
    OrderedSet: OrderedSet,

    Record: Record,
    Range: Range,
    Repeat: Repeat,

    is: is,
    fromJS: fromJS

  };

  return Immutable;

}));

/***/ }),

/***/ "./src/ai.js":
/*!*******************!*\
  !*** ./src/ai.js ***!
  \*******************/
/*! exports provided: getGameStateScore, minimax, getWinner, getGameStatesToAnalyze, getAllPlayerPieceCoordinates, getAllPlayerPieceCoordinatesByType, getPossibleMoveSequences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGameStateScore", function() { return getGameStateScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minimax", function() { return minimax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWinner", function() { return getWinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGameStatesToAnalyze", function() { return getGameStatesToAnalyze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPlayerPieceCoordinates", function() { return getAllPlayerPieceCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPlayerPieceCoordinatesByType", function() { return getAllPlayerPieceCoordinatesByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPossibleMoveSequences", function() { return getPossibleMoveSequences; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameState */ "./src/gameState.js");
/* harmony import */ var _gameBoardHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameBoardHelpers */ "./src/gameBoardHelpers.js");






const scoringMapRecord = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])({
  [_constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"]]: Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])({
    [_constants__WEBPACK_IMPORTED_MODULE_1__["TOTT"]]: Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])({
      count: 0,
      stacksGreaterThanOne: 0,
      largestStackSize: 0,
      stacksOnEdge: 0,
      stacksOnCorner: 0,
      coordinate: null
    }),
    [_constants__WEBPACK_IMPORTED_MODULE_1__["TZARRA"]]: Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])({
      count: 0,
      stacksGreaterThanOne: 0,
      largestStackSize: 0,
      stacksOnEdge: 0,
      stacksOnCorner: 0,
      coordinate: null
    }),
    [_constants__WEBPACK_IMPORTED_MODULE_1__["TZAAR"]]: Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])({
      count: 0,
      stacksGreaterThanOne: 0,
      largestStackSize: 0,
      stacksOnEdge: 0,
      stacksOnCorner: 0,
      coordinate: null
    })
  }),
  [_constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_TWO"]]: Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])({
    [_constants__WEBPACK_IMPORTED_MODULE_1__["TOTT"]]: Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])({
      count: 0,
      stacksGreaterThanOne: 0,
      largestStackSize: 0,
      stacksOnEdge: 0,
      stacksOnCorner: 0,
      coordinate: null
    }),
    [_constants__WEBPACK_IMPORTED_MODULE_1__["TZARRA"]]: Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])({
      count: 0,
      stacksGreaterThanOne: 0,
      largestStackSize: 0,
      stacksOnEdge: 0,
      stacksOnCorner: 0,
      coordinate: null
    }),
    [_constants__WEBPACK_IMPORTED_MODULE_1__["TZAAR"]]: Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])({
      count: 0,
      stacksGreaterThanOne: 0,
      largestStackSize: 0,
      stacksOnEdge: 0,
      stacksOnCorner: 0,
      coordinate: null
    })
  })
});

function getScoreForHighestStack(currentStack, stackToBeat) {
  if (currentStack > stackToBeat) {
    return 20;
  }

  if (currentStack < stackToBeat) {
    return -20;
  }

  return 0;
}

function getScoreForEdgesAndCorners(edges, corners) {
  return edges * 5 + corners * 10;
}

function getGameStateScore(gameState) {
  const scoringMap = gameState.reduce((piecesByPlayer, piece, coordinate) => {
    if (!piece) {
      return piecesByPlayer;
    }

    const { ownedBy, type, stackSize } = piece;
    return piecesByPlayer
      .updateIn([ownedBy, type, "count"], count => count + 1)
      .updateIn(
        [ownedBy, type, "stacksGreaterThanOne"],
        stacks => stacks + Number(stackSize)
      )
      .updateIn([ownedBy, type, "largestStackSize"], largestStackSize =>
        Math.max(largestStackSize, Number(stackSize))
      )
      .updateIn([ownedBy, type, "stacksOnEdge"], stacksOnEdge => {
        if (stackSize > 1 && _constants__WEBPACK_IMPORTED_MODULE_1__["EDGE_COORDINATES"].includes(coordinate)) {
          return stacksOnEdge + 1;
        }
        return stacksOnEdge;
      })
      .updateIn([ownedBy, type, "stacksOnCorner"], stacksOnCorner => {
        if (stackSize > 1 && _constants__WEBPACK_IMPORTED_MODULE_1__["CORNER_COORDINATES"].includes(coordinate)) {
          return stacksOnCorner + 1;
        }
        return stacksOnCorner;
      })
      .setIn([ownedBy, type, "coordinate"], coordinate);
  }, scoringMapRecord);

  let score = 0;

  scoringMap.get(_constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"]).forEach((data, pieceType) => {
    score =
      score -
      getScoreForStacks(data.get("count"), data.get("stacksGreaterThanOne")) -
      getScoreForHighestStack(
        data.get("largestStackSize"),
        scoringMap.getIn([_constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_TWO"], pieceType, "largestStackSize"])
      ) +
      getScoreForEdgesAndCorners(
        data.get("stacksOnEdge"),
        data.get("stacksOnCorner")
      );
  });

  scoringMap.get(_constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_TWO"]).forEach((data, pieceType) => {
    score =
      score +
      getScoreForStacks(data.get("count"), data.get("stacksGreaterThanOne")) +
      getScoreForHighestStack(
        data.get("largestStackSize"),
        scoringMap.getIn([_constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"], pieceType, "largestStackSize"])
      ) -
      getScoreForEdgesAndCorners(
        data.get("stacksOnEdge"),
        data.get("stacksOnCorner")
      );
  });

  return score;
}

// we value stacks depending on how many of that type are on the board
function getScoreForStacks(numberOfPieces, stackSize) {
  const MULTIPLIER = 15;

  return (MULTIPLIER - numberOfPieces) * stackSize;
}

function minimax(
  gameState,
  turn,
  depth,
  alpha = -Infinity,
  beta = Infinity
) {
  const winner = getWinner(gameState);
  if (winner === _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"]) {
    return [-Infinity];
  }
  if (winner === _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_TWO"]) {
    return [Infinity];
  }

  if (depth === 0) {
    return [getGameStateScore(gameState)];
  }

  // maximizing player
  if (turn === _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_TWO"]) {
    let bestValue = -Infinity;
    let moveSeq = null;

    // choose max score after player one makes his move
    const gameStatesToAnalyze = getGameStatesToAnalyze(gameState, _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_TWO"]);
    gameStatesToAnalyze.forEach((nextGameState, nextMoveSeq) => {
      const [maybeBetterValue] = minimax(
        nextGameState,
        _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"],
        depth - 1,
        alpha,
        beta
      );
      if (maybeBetterValue >= bestValue) {
        bestValue = maybeBetterValue;
        moveSeq = nextMoveSeq;
      }

      alpha = Math.max(bestValue, alpha);

      if (alpha >= beta) {
        return false;
      }
    });

    return [bestValue, moveSeq];
  }

  // minimizing player
  if (turn === _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"]) {
    let bestValue = Infinity;
    let moveSeq = null;
    // choose lowest score after player two makes move
    const gameStatesToAnalyze = getGameStatesToAnalyze(gameState, _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"]);

    gameStatesToAnalyze.forEach((nextGameState, nextMoveSeq) => {
      const [maybeWorseValue] = minimax(
        nextGameState,
        _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_TWO"],
        depth - 1,
        alpha,
        beta
      );

      if (maybeWorseValue <= bestValue) {
        bestValue = maybeWorseValue;
        moveSeq = nextMoveSeq;
      }

      beta = Math.min(beta, bestValue);

      if (alpha >= beta) {
        return false;
      }
    });

    return [bestValue, moveSeq];
  }
}

function getPieces(gameState) {
  return gameState.reduce(
    (piecesByPlayer, piece) => {
      if (!piece) {
        return piecesByPlayer;
      }
      const { ownedBy, type } = piece;
      return piecesByPlayer.updateIn([ownedBy, type], pieces =>
        pieces.push(piece)
      );
    },
    Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])({
      [_constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"]]: Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])({
        [_constants__WEBPACK_IMPORTED_MODULE_1__["TOTT"]]: Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(),
        [_constants__WEBPACK_IMPORTED_MODULE_1__["TZARRA"]]: Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(),
        [_constants__WEBPACK_IMPORTED_MODULE_1__["TZAAR"]]: Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])()
      }),
      [_constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_TWO"]]: Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])({
        [_constants__WEBPACK_IMPORTED_MODULE_1__["TOTT"]]: Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(),
        [_constants__WEBPACK_IMPORTED_MODULE_1__["TZARRA"]]: Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(),
        [_constants__WEBPACK_IMPORTED_MODULE_1__["TZAAR"]]: Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])()
      })
    })
  );
}

function getWinner(gameState) {
  const pieceCountsByPlayer = getPieces(gameState);

  const playerOneLost =
    !pieceCountsByPlayer.getIn([_constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"], _constants__WEBPACK_IMPORTED_MODULE_1__["TOTT"]]).size ||
    !pieceCountsByPlayer.getIn([_constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"], _constants__WEBPACK_IMPORTED_MODULE_1__["TZARRA"]]).size ||
    !pieceCountsByPlayer.getIn([_constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"], _constants__WEBPACK_IMPORTED_MODULE_1__["TZAAR"]]).size;

  const playerTwoLost =
    !pieceCountsByPlayer.getIn([_constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_TWO"], _constants__WEBPACK_IMPORTED_MODULE_1__["TOTT"]]).size ||
    !pieceCountsByPlayer.getIn([_constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_TWO"], _constants__WEBPACK_IMPORTED_MODULE_1__["TZARRA"]]).size ||
    !pieceCountsByPlayer.getIn([_constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_TWO"], _constants__WEBPACK_IMPORTED_MODULE_1__["TZAAR"]]).size;

  if (playerOneLost) {
    return _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_TWO"];
  }
  if (playerTwoLost) {
    return _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"];
  }

  const possibleCaptures = getAllPlayerPieceCoordinates(
    gameState,
    _gameState__WEBPACK_IMPORTED_MODULE_2__["currentTurn"]
  ).map(fromCoordinate => {
    return Object(_gameBoardHelpers__WEBPACK_IMPORTED_MODULE_3__["getValidCaptures"])(fromCoordinate, gameState);
  });

  if (!possibleCaptures.find(possibleCapture => possibleCapture.size)) {
    return _gameState__WEBPACK_IMPORTED_MODULE_2__["currentTurn"] === _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"] ? _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_TWO"] : _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"];
  }
}

function getGameStatesToAnalyze(gameState, turn) {
  const EARLY_GAME = _gameState__WEBPACK_IMPORTED_MODULE_2__["numberOfTurnsIntoGame"] < 10;
  let allPossibleStatesAfterTurn = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])();

  if (!EARLY_GAME) {
    allPossibleStatesAfterTurn = getPossibleMoveSequences(gameState, turn);
  } else {
    allPossibleStatesAfterTurn = getEarlyGamePossibleMoveSequences(
      gameState,
      _constants__WEBPACK_IMPORTED_MODULE_1__["TZAAR"],
      turn
    )
      .concat(getEarlyGamePossibleMoveSequences(gameState, _constants__WEBPACK_IMPORTED_MODULE_1__["TZARRA"], turn))
      .concat(getEarlyGamePossibleMoveSequences(gameState, _constants__WEBPACK_IMPORTED_MODULE_1__["TOTT"], turn));
  }

  return allPossibleStatesAfterTurn;
}

function getAllPlayerPieceCoordinates(gameState, player) {
  return gameState.filter(piece => piece && piece.ownedBy === player).keySeq();
}

function getAllPlayerPieceCoordinatesByType(gameState, player, type) {
  return gameState
    .filter(piece => piece && piece.ownedBy === player && piece.type === type)
    .keySeq();
}

function getEarlyGamePossibleMoveSequences(gameState, PIECE_TYPE, turn) {
  const playerPiecesToCapture = turn === _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"] ? _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_TWO"] : _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"];
  let trySecondCapture = false;

  // get opponents most valuable pieces to capture.
  const allOpponentPlayerPieces = getAllPlayerPieceCoordinatesByType(
    gameState,
    playerPiecesToCapture,
    PIECE_TYPE
  );

  if (allOpponentPlayerPieces.size <= 2) {
    trySecondCapture = true;
  }

  return allOpponentPlayerPieces.reduce(
    (allGameStatesAfterMoveSeq, toCoordinate) => {
      const validCaptures = Object(_gameBoardHelpers__WEBPACK_IMPORTED_MODULE_3__["getInvertedValidCaptures"])(toCoordinate, gameState);

      // For every piece, get all possible captures
      // for each and put the resulting game state into a list.
      const allCaptureStates = validCaptures.reduce(
        (statesAfterCapture, fromCoordinate) => {
          const fromPiece = gameState.get(fromCoordinate);
          const nextGameState = gameState
            .set(fromCoordinate, null)
            .set(toCoordinate, fromPiece);
          return statesAfterCapture.set(
            `${fromCoordinate}->${toCoordinate}`,
            nextGameState
          );
        },
        Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])()
      );

      // For every game state resulting from the above process,
      // get all player pieces and return all game states
      // for every valid stack you can make
      allCaptureStates.forEach((stateAfterCapture, fromToKey) => {
        if (trySecondCapture) {
          const allOpponentPlayerPieces = getAllPlayerPieceCoordinatesByType(
            stateAfterCapture,
            playerPiecesToCapture,
            PIECE_TYPE
          );
          allOpponentPlayerPieces.forEach(toCoordinate => {
            const validCaptures = Object(_gameBoardHelpers__WEBPACK_IMPORTED_MODULE_3__["getInvertedValidCaptures"])(
              toCoordinate,
              stateAfterCapture
            );

            validCaptures.forEach(fromCoordinate => {
              const fromPiece = stateAfterCapture.get(fromCoordinate);
              const sequenceKey = `${fromToKey}=>${fromCoordinate}->${toCoordinate}`;
              const gameStateAfterSecondCapture = stateAfterCapture
                .set(fromCoordinate, null)
                .set(toCoordinate, fromPiece);
              allGameStatesAfterMoveSeq = allGameStatesAfterMoveSeq.set(
                sequenceKey,
                gameStateAfterSecondCapture
              );
            });
          });
        }

        let allPlayerPiecesAfterCapture = getAllPlayerPieceCoordinatesByType(
          stateAfterCapture,
          turn,
          _constants__WEBPACK_IMPORTED_MODULE_1__["TZAAR"]
        );

        if (!allPlayerPiecesAfterCapture.size) {
          allPlayerPiecesAfterCapture = getAllPlayerPieceCoordinatesByType(
            stateAfterCapture,
            turn,
            _constants__WEBPACK_IMPORTED_MODULE_1__["TZARRA"]
          );
        }
        if (!allPlayerPiecesAfterCapture.size) {
          allPlayerPiecesAfterCapture = getAllPlayerPieceCoordinatesByType(
            stateAfterCapture,
            turn,
            _constants__WEBPACK_IMPORTED_MODULE_1__["TOTT"]
          );
        }
        if (!allPlayerPiecesAfterCapture.size) {
          alert("This shouldnt be possible, let me know if you see this.");
        }

        allPlayerPiecesAfterCapture.forEach(
          playerPieceCoordinateAfterCapture => {
            const validStacks = Object(_gameBoardHelpers__WEBPACK_IMPORTED_MODULE_3__["getValidStacks"])(
              playerPieceCoordinateAfterCapture,
              stateAfterCapture
            );

            const fromPiece = stateAfterCapture.get(
              playerPieceCoordinateAfterCapture
            );
            validStacks.forEach(toCoordinate => {
              const toPiece = stateAfterCapture.get(toCoordinate);

              const gameStateAfterMoveSeq = stateAfterCapture
                .set(playerPieceCoordinateAfterCapture, null)
                .set(toCoordinate, fromPiece)
                .setIn(
                  [toCoordinate, "stackSize"],
                  fromPiece.stackSize + toPiece.stackSize
                );

              const sequenceKey = `${fromToKey}=>${playerPieceCoordinateAfterCapture}->${toCoordinate}`;

              allGameStatesAfterMoveSeq = allGameStatesAfterMoveSeq.set(
                sequenceKey,
                gameStateAfterMoveSeq
              );
            });
          }
        );
      });

      return allGameStatesAfterMoveSeq;
    },
    Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])()
  );
}

function getPossibleMoveSequences(gameState, turn) {
  const allPlayerPieces = getAllPlayerPieceCoordinates(gameState, turn);

  return allPlayerPieces.reduce((allGameStatesAfterMoveSeq, fromCoordinate) => {
    const validCaptures = Object(_gameBoardHelpers__WEBPACK_IMPORTED_MODULE_3__["getValidCaptures"])(fromCoordinate, gameState);

    // For every piece, get all possible captures
    // for each and put the resulting game state into a list.
    const allCaptureStates = validCaptures.reduce(
      (statesAfterCapture, toCoordinate) => {
        const fromPiece = gameState.get(fromCoordinate);
        const nextGameState = gameState
          .set(fromCoordinate, null)
          .set(toCoordinate, fromPiece);
        return statesAfterCapture.set(
          `${fromCoordinate}->${toCoordinate}`,
          nextGameState
        );
      },
      Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])()
    );

    // For every game state resulting from the above process,
    // get all player pieces and return all game states
    // for every valid stack you can make
    allCaptureStates.forEach((stateAfterCapture, fromToKey) => {
      const allPlayerPiecesAfterCapture = getAllPlayerPieceCoordinates(
        stateAfterCapture,
        turn
      );

      allPlayerPiecesAfterCapture.forEach(playerPieceCoordinateAfterCapture => {
        const validStacks = Object(_gameBoardHelpers__WEBPACK_IMPORTED_MODULE_3__["getValidStacks"])(
          playerPieceCoordinateAfterCapture,
          stateAfterCapture
        );

        const fromPiece = stateAfterCapture.get(
          playerPieceCoordinateAfterCapture
        );

        if (validStacks && validStacks.size) {
          validStacks.forEach(toCoordinate => {
            const toPiece = stateAfterCapture.get(toCoordinate);

            const gameStateAfterMoveSeq = stateAfterCapture
              .set(playerPieceCoordinateAfterCapture, null)
              .set(toCoordinate, fromPiece)
              .setIn(
                [toCoordinate, "stackSize"],
                fromPiece.stackSize + toPiece.stackSize
              );

            const sequenceKey = `${fromToKey}=>${playerPieceCoordinateAfterCapture}->${toCoordinate}`;

            allGameStatesAfterMoveSeq = allGameStatesAfterMoveSeq.set(
              sequenceKey,
              gameStateAfterMoveSeq
            );
          });
        }
        const validSecondTurnCaptures = Object(_gameBoardHelpers__WEBPACK_IMPORTED_MODULE_3__["getValidCaptures"])(
          playerPieceCoordinateAfterCapture,
          stateAfterCapture
        );
        if (validSecondTurnCaptures && validSecondTurnCaptures.size) {
          validSecondTurnCaptures.forEach(toCoordinate => {
            const nextGameState = stateAfterCapture
              .set(playerPieceCoordinateAfterCapture, null)
              .set(toCoordinate, fromPiece);
            const sequenceKey = `${fromToKey}=>${playerPieceCoordinateAfterCapture}->${toCoordinate}`;

            allGameStatesAfterMoveSeq = allGameStatesAfterMoveSeq.set(
              sequenceKey,
              nextGameState
            );
          });
        }
        // We can just capture, then pass
        allGameStatesAfterMoveSeq = allGameStatesAfterMoveSeq.set(
          fromToKey,
          stateAfterCapture
        );
      });
    });

    return allGameStatesAfterMoveSeq;
  }, Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])());
}


/***/ }),

/***/ "./src/cachedBoard.js":
/*!****************************!*\
  !*** ./src/cachedBoard.js ***!
  \****************************/
/*! exports provided: drawCachedBoard, drawInitialGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawCachedBoard", function() { return drawCachedBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawInitialGrid", function() { return drawInitialGrid; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


const COORDS_TO_NOT_RENDER = [
  "0,0",
  "0,1",
  "1,0",
  "2,0",
  "3,0",
  "1,1",
  "2,1",
  "0,2",
  "1,2",
  "0,3",
  "7,5",
  "7,6",
  "6,7",
  "6,6",
  "5,7",
  "6,7",
  "4,3",
  "3,4",
  "4,4",
  "7,7"
];

const OFFSET_X = 0;

const grid = getInitialGridState();

function initCanvas() {
  _constants__WEBPACK_IMPORTED_MODULE_0__["CACHED_CANVAS"].width = window.innerWidth * _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"];
  _constants__WEBPACK_IMPORTED_MODULE_0__["CACHED_CANVAS"].height = window.innerHeight * _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"];
  _constants__WEBPACK_IMPORTED_MODULE_0__["CACHED_CANVAS"].style.width = `${window.innerWidth}px`;
  _constants__WEBPACK_IMPORTED_MODULE_0__["CACHED_CANVAS"].style.height = `${window.innerHeight}px`;

  _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_STATE_BOARD_CANVAS"].width = window.innerWidth * _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"];
  _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_STATE_BOARD_CANVAS"].height = window.innerHeight * _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"];
  _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_STATE_BOARD_CANVAS"].style.width = `${window.innerWidth}px`;
  _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_STATE_BOARD_CANVAS"].style.height = `${window.innerHeight}px`;

  _constants__WEBPACK_IMPORTED_MODULE_0__["CACHED_CANVAS"].getContext("2d").setTransform(
    _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"],
    0,
    0,
    _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"],
    0,
    0
  );
  _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_STATE_BOARD_CANVAS"].getContext("2d").setTransform(
    _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"],
    0,
    0,
    _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"],
    0,
    0
  );
}

function getContext() {
  return _constants__WEBPACK_IMPORTED_MODULE_0__["CACHED_CANVAS"].getContext("2d");
}

function getInitialGridState() {
  const vertices = [];

  for (let colIndex = 0; colIndex < _constants__WEBPACK_IMPORTED_MODULE_0__["NUMBER_OF_COLS"]; colIndex++) {
    for (let rowIndex = 0; rowIndex < _constants__WEBPACK_IMPORTED_MODULE_0__["NUMBER_OF_ROWS"]; rowIndex++) {
      vertices.push(`${colIndex},${rowIndex}`);
    }
  }

  return vertices;
}

function getImageData() {
  const context = getContext();
  return context.getImageData(
    OFFSET_X * _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"],
    0,
    _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"] * window.innerWidth,
    _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"] * window.innerHeight
  );
}

function drawCachedBoard() {
  const context = _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_STATE_BOARD_CANVAS"].getContext("2d");
  const imageData = getImageData();

  context.putImageData(
    imageData,
    (window.innerWidth / 2 - 4 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"]) * _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"],
    (window.innerHeight / 2 - 4 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_HEIGHT"]) * _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"]
  );
}

function drawInitialGrid() {
  initCanvas();
  grid.map(renderTriangleFromVertex);
  renderHexagonBorder();
  renderInnerHexagonBorder();
  drawCachedBoard();
}

function renderTriangleFromVertex(coordinate) {
  const context = getContext();

  if (COORDS_TO_NOT_RENDER.includes(coordinate)) {
    return;
  }
  const [x, y] = coordinate.split(",");

  const offsetX = (y * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"]) / 2 - _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"] * 2;
  const startX = x * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"] + offsetX;
  const startY = y * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_HEIGHT"];

  context.beginPath();
  context.moveTo(startX, startY);
  context.lineTo(startX + _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"], startY);
  context.lineTo(startX + _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"] / 2, startY + _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_HEIGHT"]);
  context.lineTo(startX, startY);
  context.closePath();
  context.lineWidth = 1;
  context.strokeStyle = "#666666";
  context.stroke();
}

function renderHexagonBorder() {
  const context = getContext();

  const x1 = 2 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"] + OFFSET_X;
  const y1 = 0;

  const x2 = 0 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"] + OFFSET_X;
  const y2 = 4 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_HEIGHT"];

  const x3 = 2 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"] + OFFSET_X;
  const y3 = 8 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_HEIGHT"];

  const x4 = 6 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"] + OFFSET_X;
  const y4 = 8 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_HEIGHT"];

  const x5 = 8 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"] + OFFSET_X;
  const y5 = 4 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_HEIGHT"];

  const x6 = 6 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"] + OFFSET_X;
  const y6 = 0;

  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.lineTo(x3, y3);
  context.lineTo(x4, y4);
  context.lineTo(x5, y5);
  context.lineTo(x6, y6);

  context.closePath();
  context.lineWidth = 2;
  context.strokeStyle = "#666666";
  context.stroke();
}

function renderInnerHexagonBorder() {
  const context = getContext();

  const x1 = 4 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"] - _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"] / 2 + OFFSET_X;
  const y1 = 3 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_HEIGHT"];

  const x2 = 3 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"] + OFFSET_X;
  const y2 = 4 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_HEIGHT"];

  const x3 = 3 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"] + _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"] / 2 + OFFSET_X;
  const y3 = 5 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_HEIGHT"];

  const x4 = 5 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"] - _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"] / 2 + OFFSET_X;
  const y4 = 5 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_HEIGHT"];

  const x5 = 5 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"] + OFFSET_X;
  const y5 = 4 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_HEIGHT"];

  const x6 = 5 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"] - _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"] / 2 + OFFSET_X;
  const y6 = 3 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_HEIGHT"];

  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.lineTo(x3, y3);
  context.lineTo(x4, y4);
  context.lineTo(x5, y5);
  context.lineTo(x6, y6);

  context.closePath();
  context.lineWidth = 2;
  context.strokeStyle = "#666666";
  context.stroke();
}

function renderSquareBorder() {
  const context = getContext();
  context.strokeRect(
    OFFSET_X,
    0,
    8 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"],
    8 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_HEIGHT"]
  );
}


/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: CACHED_CANVAS, GAME_STATE_BOARD_CANVAS, PIXEL_RATIO, DEBUG, NUMBER_OF_ROWS, NUMBER_OF_COLS, TRIANGLE_SIDE_LENGTH, TRIANGLE_HEIGHT, NUMBER_OF_TOTTS, NUMBER_OF_TZARRAS, NUMBER_OF_TZAARS, PLAYABLE_VERTICES, CORNER_COORDINATES, EDGE_COORDINATES, TZAAR, TOTT, TZARRA, GamePieceRecord, PLAYER_ONE, PLAYER_TWO, TURN_PHASES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CACHED_CANVAS", function() { return CACHED_CANVAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_STATE_BOARD_CANVAS", function() { return GAME_STATE_BOARD_CANVAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PIXEL_RATIO", function() { return PIXEL_RATIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUG", function() { return DEBUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER_OF_ROWS", function() { return NUMBER_OF_ROWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER_OF_COLS", function() { return NUMBER_OF_COLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIANGLE_SIDE_LENGTH", function() { return TRIANGLE_SIDE_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIANGLE_HEIGHT", function() { return TRIANGLE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER_OF_TOTTS", function() { return NUMBER_OF_TOTTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER_OF_TZARRAS", function() { return NUMBER_OF_TZARRAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER_OF_TZAARS", function() { return NUMBER_OF_TZAARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYABLE_VERTICES", function() { return PLAYABLE_VERTICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CORNER_COORDINATES", function() { return CORNER_COORDINATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDGE_COORDINATES", function() { return EDGE_COORDINATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TZAAR", function() { return TZAAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOTT", function() { return TOTT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TZARRA", function() { return TZARRA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePieceRecord", function() { return GamePieceRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_ONE", function() { return PLAYER_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_TWO", function() { return PLAYER_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TURN_PHASES", function() { return TURN_PHASES; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);


const useWindowHeight = window.innerWidth > window.innerHeight;
const extraSpace = 1;

const CACHED_CANVAS = document.createElement("canvas");
const GAME_STATE_BOARD_CANVAS = document.getElementById(
  "gameStateBoardDiv"
);
const PIXEL_RATIO = (function () {
  const ctx = CACHED_CANVAS.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const bsr =
    ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio ||
    1;

  return dpr / bsr;
})();

const windowInnerHeightDeviceRatio = window.innerHeight;
const windowInnerWidthDeviceRatio = window.innerWidth;

const DEBUG = false;
const NUMBER_OF_ROWS = 8;
const NUMBER_OF_COLS = 8;
const TRIANGLE_SIDE_LENGTH =
  (useWindowHeight
    ? windowInnerHeightDeviceRatio
    : windowInnerWidthDeviceRatio) /
  (NUMBER_OF_COLS + extraSpace);
const TRIANGLE_HEIGHT = TRIANGLE_SIDE_LENGTH * (Math.sqrt(3) / 2);

const NUMBER_OF_TOTTS = 15;
const NUMBER_OF_TZARRAS = 9;
const NUMBER_OF_TZAARS = 6;
const PLAYABLE_VERTICES = [
  "4,0",
  "5,0",
  "6,0",
  "7,0",
  "8,0",
  "3,1",
  "4,1",
  "5,1",
  "6,1",
  "7,1",
  "8,1",
  "2,2",
  "3,2",
  "4,2",
  "5,2",
  "6,2",
  "7,2",
  "8,2",
  "1,3",
  "2,3",
  "3,3",
  "4,3",
  "5,3",
  "6,3",
  "7,3",
  "8,3",
  "0,4",
  "1,4",
  "2,4",
  "3,4",
  "5,4",
  "6,4",
  "7,4",
  "8,4",
  "0,5",
  "1,5",
  "2,5",
  "3,5",
  "4,5",
  "5,5",
  "6,5",
  "7,5",
  "0,6",
  "1,6",
  "2,6",
  "3,6",
  "4,6",
  "5,6",
  "6,6",
  "0,7",
  "1,7",
  "2,7",
  "3,7",
  "4,7",
  "5,7",
  "0,8",
  "1,8",
  "2,8",
  "3,8",
  "4,8"
];

const CORNER_COORDINATES = ["4,0", "8,0", "8,4", "4,8", "0,8", "0,4"];
const EDGE_COORDINATES = [
  "5,0",
  "6,0",
  "7,0",
  "8,1",
  "8,2",
  "8,3",
  "7,5",
  "6,6",
  "5,7",
  "3,8",
  "2,8",
  "1,8",
  "0,7",
  "0,6",
  "0,5",
  "1,3",
  "2,2",
  "3,1"
];

const TZAAR = "TZAAR";
const TOTT = "TOTT";
const TZARRA = "TZARRA";

const GamePieceRecord = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])({
  ownedBy: "",
  type: "",
  stackSize: 1,
  isDragging: false
});

const PLAYER_ONE = "PLAYER_ONE";
const PLAYER_TWO = "PLAYER_TWO";
const TURN_PHASES = {
  CAPTURE: "CAPTURE",
  STACK_OR_CAPTURE: "STACK_OR_CAPTURE"
};


/***/ }),

/***/ "./src/gameBoardHelpers.js":
/*!*********************************!*\
  !*** ./src/gameBoardHelpers.js ***!
  \*********************************/
/*! exports provided: getPixelCoordinatesFromBoardCoordinates, getBoardCoordinatesFromPixelCoordinates, goWest, goEast, goNorthWest, goNorthEast, goSouthWest, goSouthEast, isPlayableSpace, setupBoardWithPiecesNotRandom, setupBoardWithPieces, canCapture, canStack, isValidEmptyCoordinate, getValidCaptures, getValidStacks, getInvertedValidCaptures, nextPiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPixelCoordinatesFromBoardCoordinates", function() { return getPixelCoordinatesFromBoardCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoardCoordinatesFromPixelCoordinates", function() { return getBoardCoordinatesFromPixelCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goWest", function() { return goWest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goEast", function() { return goEast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goNorthWest", function() { return goNorthWest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goNorthEast", function() { return goNorthEast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goSouthWest", function() { return goSouthWest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goSouthEast", function() { return goSouthEast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlayableSpace", function() { return isPlayableSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupBoardWithPiecesNotRandom", function() { return setupBoardWithPiecesNotRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupBoardWithPieces", function() { return setupBoardWithPieces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canCapture", function() { return canCapture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canStack", function() { return canStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidEmptyCoordinate", function() { return isValidEmptyCoordinate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidCaptures", function() { return getValidCaptures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidStacks", function() { return getValidStacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInvertedValidCaptures", function() { return getInvertedValidCaptures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextPiece", function() { return nextPiece; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);



function getPixelCoordinatesFromBoardCoordinates(coordinate) {
  const [x, y] = coordinate.split(",");

  const offsetXToCenter = window.innerWidth / 2 - 4 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"];
  const offsetYToCenter = window.innerHeight / 2 - 4 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_HEIGHT"];

  const offsetX =
    x * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"] - Math.max(4 - y, 0) * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"];

  const xPos =
    (Math.abs(4 - y) * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"]) / 2 + offsetX + offsetXToCenter;

  const yPos = y * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_HEIGHT"] + offsetYToCenter;
  return `${xPos},${yPos}`;
}

function getBoardCoordinatesFromPixelCoordinates(x, y) {
  const offsetXToCenter =
    (window.innerWidth / 2 - 4 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"]) / _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"];
  const offsetYToCenter =
    (window.innerHeight / 2 - 4 * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_HEIGHT"]) / _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_HEIGHT"];

  const yPos = y / _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_HEIGHT"] - offsetYToCenter;

  const interimX = x / _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"] - offsetXToCenter;

  const offsetXBecauseY =
    (Math.abs(4 - yPos) * _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"]) / 2 / _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_SIDE_LENGTH"];

  const offsetXBecauseAnotherY = Math.max(4 - yPos, 0);

  const xPos = interimX - offsetXBecauseY + offsetXBecauseAnotherY;

  const xCoord = Math.round(xPos);
  const yCoord = Math.round(yPos);
  return `${xCoord},${yCoord}`;
}

function goWest(coordinate) {
  let [x, y] = coordinate.split(",");
  x = Number(x);
  y = Number(y);

  return `${x - 1},${y}`;
}

function goEast(coordinate) {
  let [x, y] = coordinate.split(",");

  x = Number(x);
  y = Number(y);

  return `${x + 1},${y}`;
}

function goNorthWest(coordinate) {
  let [x, y] = coordinate.split(",");

  x = Number(x);
  y = Number(y);

  return `${x},${y - 1}`;
}

function goNorthEast(coordinate) {
  let [x, y] = coordinate.split(",");
  x = Number(x);
  y = Number(y);

  return `${x + 1},${y - 1}`;
}

function goSouthWest(coordinate) {
  let [x, y] = coordinate.split(",");

  x = Number(x);
  y = Number(y);

  return `${x - 1},${y + 1}`;
}

function goSouthEast(coordinate) {
  let [x, y] = coordinate.split(",");
  x = Number(x);
  y = Number(y);

  return `${x},${y + 1}`;
}

function isPlayableSpace(coordinate) {
  return _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYABLE_VERTICES"].includes(coordinate);
}

function setupBoardWithPiecesNotRandom() {
  let piecesToDraw = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Map"])({
    "4,0": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "5,0": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "6,0": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "7,0": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "8,0": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "8,1": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "8,2": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "8,3": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "8,4": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "7,5": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "6,6": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "5,7": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "4,8": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "3,8": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "2,8": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "1,8": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "0,8": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "0,7": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "0,6": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "0,5": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "0,4": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "1,3": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "2,2": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "3,1": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "4,1": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "5,1": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "6,1": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "7,1": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "7,2": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "7,3": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "7,4": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "6,5": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "5,6": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "4,7": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "3,7": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "2,7": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "1,7": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "1,6": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "1,5": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "1,4": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "2,3": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "3,2": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "4,2": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZAAR"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "5,2": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZAAR"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "6,2": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZAAR"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "6,3": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZAAR"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "6,4": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZAAR"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "5,5": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZAAR"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "4,6": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZAAR"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "3,6": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZAAR"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "2,6": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZAAR"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "2,5": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZAAR"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "2,4": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZAAR"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "3,3": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZAAR"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "4,3": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "5,3": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "5,4": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "4,5": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] }),
    "3,5": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"] }),
    "3,4": new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] })
  }).sortBy(Math.random);

  return piecesToDraw;
}

function setupBoardWithPieces() {
  let piecesToDraw = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Map"])();
  let PLAYER_ONE_PIECES = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();
  let PLAYER_TWO_PIECES = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();

  for (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__["NUMBER_OF_TOTTS"]; i++) {
    PLAYER_ONE_PIECES = PLAYER_ONE_PIECES.push(
      new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: "PLAYER_ONE" })
    );
    PLAYER_TWO_PIECES = PLAYER_TWO_PIECES.push(
      new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"], ownedBy: "PLAYER_TWO" })
    );
  }

  for (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__["NUMBER_OF_TZARRAS"]; i++) {
    PLAYER_ONE_PIECES = PLAYER_ONE_PIECES.push(
      new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"], ownedBy: "PLAYER_ONE" })
    );
    PLAYER_TWO_PIECES = PLAYER_TWO_PIECES.push(
      new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"], ownedBy: "PLAYER_TWO" })
    );
  }

  for (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__["NUMBER_OF_TZAARS"]; i++) {
    PLAYER_ONE_PIECES = PLAYER_ONE_PIECES.push(
      new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZAAR"], ownedBy: "PLAYER_ONE" })
    );
    PLAYER_TWO_PIECES = PLAYER_TWO_PIECES.push(
      new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({ type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZAAR"], ownedBy: "PLAYER_TWO" })
    );
  }

  const allGamePieces = PLAYER_ONE_PIECES.concat(PLAYER_TWO_PIECES);
  const shuffledPieces = allGamePieces.sortBy(Math.random);

  shuffledPieces.forEach((piece, index) => {
    piecesToDraw = piecesToDraw.set(_constants__WEBPACK_IMPORTED_MODULE_0__["PLAYABLE_VERTICES"][index], piece);
    // setNewgameBoardState(gameBoardState.set(PLAYABLE_VERTICES[index], piece));
  });
  return piecesToDraw.sortBy(Math.random);
}

function canCapture(fromCoordinate, toCoordinate, gameState) {
  const fromPiece = gameState.get(fromCoordinate);
  const toPiece = gameState.get(toCoordinate);

  return (
    fromPiece.ownedBy !== toPiece.ownedBy &&
    fromPiece.stackSize >= toPiece.stackSize
  );
}

function canStack(fromCoordinate, toCoordinate, gameState) {
  const fromPiece = gameState.get(fromCoordinate);
  const toPiece = gameState.get(toCoordinate);

  return fromPiece.ownedBy === toPiece.ownedBy;
}

function isValidEmptyCoordinate(coordinate, gameState) {
  return Boolean(
    _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYABLE_VERTICES"].includes(coordinate) && !gameState.get(coordinate)
  );
}

function getNextValidCapture(fromCoordinate, direction, gameState) {
  let nextMove;
  let coordinateToCheck = fromCoordinate;
  while (nextMove === undefined) {
    coordinateToCheck = nextPiece[direction](coordinateToCheck);

    // Not a space that we can play on
    if (!isPlayableSpace(coordinateToCheck)) {
      nextMove = false;
    }

    // This space is empty so we can continue
    else if (isValidEmptyCoordinate(coordinateToCheck, gameState)) {
      nextMove = undefined;
    }

    // First piece we encounter can't be captured
    else if (!canCapture(fromCoordinate, coordinateToCheck, gameState)) {
      nextMove = false;
    }
    // Finally a piece we can capture
    else {
      nextMove = coordinateToCheck;
    }
  }
  return nextMove;
}

function getNextValidStack(fromCoordinate, direction, gameState) {
  let nextMove;
  let coordinateToCheck = fromCoordinate;
  while (nextMove === undefined) {
    coordinateToCheck = nextPiece[direction](coordinateToCheck);

    // Not a space that we can play on
    if (!isPlayableSpace(coordinateToCheck)) {
      nextMove = false;
    }

    // This space is empty so we can continue
    else if (isValidEmptyCoordinate(coordinateToCheck, gameState)) {
      nextMove = undefined;
    }

    // First piece we encounter can't be captured
    else if (!canStack(fromCoordinate, coordinateToCheck, gameState)) {
      nextMove = false;
    }
    // Finally a piece we can capture
    else {
      nextMove = coordinateToCheck;
    }
  }
  return nextMove;
}

function getValidCaptures(fromCoordinate, gameState) {
  return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])([
    getNextValidCapture(fromCoordinate, "w", gameState),
    getNextValidCapture(fromCoordinate, "e", gameState),
    getNextValidCapture(fromCoordinate, "nw", gameState),
    getNextValidCapture(fromCoordinate, "ne", gameState),
    getNextValidCapture(fromCoordinate, "sw", gameState),
    getNextValidCapture(fromCoordinate, "se", gameState)
  ]).filter(isValidMove => isValidMove);
}

function getValidStacks(fromCoordinate, gameState) {
  return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])([
    getNextValidStack(fromCoordinate, "w", gameState),
    getNextValidStack(fromCoordinate, "e", gameState),
    getNextValidStack(fromCoordinate, "nw", gameState),
    getNextValidStack(fromCoordinate, "ne", gameState),
    getNextValidStack(fromCoordinate, "sw", gameState),
    getNextValidStack(fromCoordinate, "se", gameState)
  ]).filter(isValidMove => isValidMove);
}
function getInvertedValidCaptures(toCoordinate, gameState) {
  return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])([
    getNextInvertedValidCapture(toCoordinate, "w", gameState),
    getNextInvertedValidCapture(toCoordinate, "e", gameState),
    getNextInvertedValidCapture(toCoordinate, "nw", gameState),
    getNextInvertedValidCapture(toCoordinate, "ne", gameState),
    getNextInvertedValidCapture(toCoordinate, "sw", gameState),
    getNextInvertedValidCapture(toCoordinate, "se", gameState)
  ]).filter(isValidMove => isValidMove);
}

function getNextInvertedValidCapture(toCoordinate, direction, gameState) {
  let nextMove;
  let coordinateToCheck = toCoordinate;
  while (nextMove === undefined) {
    coordinateToCheck = nextPiece[direction](coordinateToCheck);

    // Not a space that we can play on
    if (!isPlayableSpace(coordinateToCheck)) {
      nextMove = false;
    }

    // This space is empty so we can continue
    else if (isValidEmptyCoordinate(coordinateToCheck, gameState)) {
      nextMove = undefined;
    }

    // First piece we encounter can't be captured
    else if (!canCapture(coordinateToCheck, toCoordinate, gameState)) {
      nextMove = false;
    }
    // Finally a piece we can capture
    else {
      nextMove = coordinateToCheck;
    }
  }
  return nextMove;
}

const nextPiece = {
  w: goWest,
  e: goEast,
  nw: goNorthWest,
  ne: goNorthEast,
  sw: goSouthWest,
  se: goSouthEast
};


/***/ }),

/***/ "./src/gameLogic.js":
/*!**************************!*\
  !*** ./src/gameLogic.js ***!
  \**************************/
/*! exports provided: initGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGame", function() { return initGame; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _cachedBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cachedBoard */ "./src/cachedBoard.js");
/* harmony import */ var _renderHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderHelpers */ "./src/renderHelpers.js");
/* harmony import */ var _gameBoardHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameBoardHelpers */ "./src/gameBoardHelpers.js");
/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameState */ "./src/gameState.js");
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ai */ "./src/ai.js");







function getPixelCoordinatesFromUserInteraction(event) {
  const x = event.x || event.offsetX || event.changedTouches[0].clientX;
  const y = event.y || event.offsetY || event.changedTouches[0].clientY;
  return [x, y];
}

function isCurrentPlayerPiece(boardCoordinate) {
  return _gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"].getIn([boardCoordinate, "ownedBy"]) === _gameState__WEBPACK_IMPORTED_MODULE_4__["currentTurn"];
}

function handleClickPiece(event) {
  const [x, y] = getPixelCoordinatesFromUserInteraction(event);
  const boardCoordinate = Object(_gameBoardHelpers__WEBPACK_IMPORTED_MODULE_3__["getBoardCoordinatesFromPixelCoordinates"])(x, y);

  if (!isCurrentPlayerPiece(boardCoordinate)) {
    return;
  }

  if (_gameState__WEBPACK_IMPORTED_MODULE_4__["currentTurn"] === _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"]) {
    return;
  }

  Object(_gameState__WEBPACK_IMPORTED_MODULE_4__["setNewgameBoardState"])(
    _gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"].setIn([boardCoordinate, "isDragging"], true)
  );
  Object(_gameState__WEBPACK_IMPORTED_MODULE_4__["setMovingPiece"])(boardCoordinate);
}

function handleMovePiece(event) {
  if (!_gameState__WEBPACK_IMPORTED_MODULE_4__["movingPiece"]) {
    return;
  }

  const [x, y] = getPixelCoordinatesFromUserInteraction(event);
  Object(_renderHelpers__WEBPACK_IMPORTED_MODULE_2__["drawGameBoardState"])();
  Object(_renderHelpers__WEBPACK_IMPORTED_MODULE_2__["drawGamePiece"])(_gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"].get(_gameState__WEBPACK_IMPORTED_MODULE_4__["movingPiece"]), x, y);
}

function handleDropPiece(event) {
  if (!_gameState__WEBPACK_IMPORTED_MODULE_4__["movingPiece"]) {
    return;
  }

  const [x, y] = getPixelCoordinatesFromUserInteraction(event);
  const toCoordinates = Object(_gameBoardHelpers__WEBPACK_IMPORTED_MODULE_3__["getBoardCoordinatesFromPixelCoordinates"])(x, y);

  Object(_gameState__WEBPACK_IMPORTED_MODULE_4__["setNewgameBoardState"])(
    _gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"].setIn([_gameState__WEBPACK_IMPORTED_MODULE_4__["movingPiece"], "isDragging"], false)
  );

  if (!_gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"].get(toCoordinates)) {
    Object(_gameState__WEBPACK_IMPORTED_MODULE_4__["setMovingPiece"])(null);
    Object(_renderHelpers__WEBPACK_IMPORTED_MODULE_2__["drawGameBoardState"])();
    return;
  }

  const validCaptures = Object(_gameBoardHelpers__WEBPACK_IMPORTED_MODULE_3__["getValidCaptures"])(_gameState__WEBPACK_IMPORTED_MODULE_4__["movingPiece"], _gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"]);
  const validStacks = Object(_gameBoardHelpers__WEBPACK_IMPORTED_MODULE_3__["getValidStacks"])(_gameState__WEBPACK_IMPORTED_MODULE_4__["movingPiece"], _gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"]);
  const isValidCapture = validCaptures.includes(toCoordinates);
  const isValidStack = validStacks.includes(toCoordinates);

  if (_gameState__WEBPACK_IMPORTED_MODULE_4__["turnPhase"] === _constants__WEBPACK_IMPORTED_MODULE_0__["TURN_PHASES"].CAPTURE && isValidCapture) {
    capturePiece(_gameState__WEBPACK_IMPORTED_MODULE_4__["movingPiece"], toCoordinates);
  } else if (_gameState__WEBPACK_IMPORTED_MODULE_4__["turnPhase"] === _constants__WEBPACK_IMPORTED_MODULE_0__["TURN_PHASES"].STACK_OR_CAPTURE) {
    if (isValidCapture) {
      capturePiece(_gameState__WEBPACK_IMPORTED_MODULE_4__["movingPiece"], toCoordinates);
    } else if (isValidStack) {
      stackPiece(_gameState__WEBPACK_IMPORTED_MODULE_4__["movingPiece"], toCoordinates);
    }
  }

  Object(_gameState__WEBPACK_IMPORTED_MODULE_4__["setMovingPiece"])(null);
  Object(_renderHelpers__WEBPACK_IMPORTED_MODULE_2__["drawGameBoardState"])();

  if (_gameState__WEBPACK_IMPORTED_MODULE_4__["turnPhase"] === _constants__WEBPACK_IMPORTED_MODULE_0__["TURN_PHASES"].CAPTURE && _gameState__WEBPACK_IMPORTED_MODULE_4__["currentTurn"] === _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"]) {
    document.getElementById("loadingSpinner").classList.remove("hidden");
    setTimeout(() => moveAI(), 50);
  }
}

function capturePiece(fromCoordinates, toCoordinates) {
  const fromPiece = _gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"].get(fromCoordinates);
  Object(_gameState__WEBPACK_IMPORTED_MODULE_4__["setNewgameBoardState"])(
    _gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"].set(fromCoordinates, false).set(toCoordinates, fromPiece)
  );
  checkGameStateAndStartNextTurn();
}

function stackPiece(fromCoordinates, toCoordinates) {
  const fromPiece = _gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"].get(fromCoordinates);
  const toPiece = _gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"].get(toCoordinates);

  Object(_gameState__WEBPACK_IMPORTED_MODULE_4__["setNewgameBoardState"])(
    _gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"]
      .set(fromCoordinates, false)
      .set(toCoordinates, fromPiece)
      .setIn(
        [toCoordinates, "stackSize"],
        fromPiece.stackSize + toPiece.stackSize
      )
  );
  checkGameStateAndStartNextTurn();
}

window.getWinner = _ai__WEBPACK_IMPORTED_MODULE_5__["getWinner"];
window.gameBoardState = _gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"];

function checkGameStateAndStartNextTurn() {
  Object(_gameState__WEBPACK_IMPORTED_MODULE_4__["nextPhase"])();

  const winner = Object(_ai__WEBPACK_IMPORTED_MODULE_5__["getWinner"])(_gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"]);
  let message = winner === _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"] ? "You lost." : "You won!";
  if (winner) {
    alert(`${message}`);
    location.reload();
  }
}

function moveAI() {
  if (_gameState__WEBPACK_IMPORTED_MODULE_4__["currentTurn"] !== _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"]) {
    return;
  }

  const bestMove = getBestMove(_gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"], _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"]);

  // Single move only
  if (bestMove.indexOf("=>") === -1) {
    const [firstFromCoordinate, firstToCoordinate] = bestMove.split("->");
    const fromPiece = _gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"].get(firstFromCoordinate);
    Object(_gameState__WEBPACK_IMPORTED_MODULE_4__["setNewgameBoardState"])(_gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"].set(firstFromCoordinate, false));
    const fromFirstPixelCoodinate = Object(_gameBoardHelpers__WEBPACK_IMPORTED_MODULE_3__["getPixelCoordinatesFromBoardCoordinates"])(
      firstFromCoordinate
    );
    const toFirstPixelCoordinate = Object(_gameBoardHelpers__WEBPACK_IMPORTED_MODULE_3__["getPixelCoordinatesFromBoardCoordinates"])(
      firstToCoordinate
    );

    _constants__WEBPACK_IMPORTED_MODULE_0__["DEBUG"] &&
      console.log(`MOVING FROM ${firstFromCoordinate} TO ${firstToCoordinate}`);
    Object(_renderHelpers__WEBPACK_IMPORTED_MODULE_2__["renderMovingPiece"])(
      fromPiece,
      fromFirstPixelCoodinate,
      toFirstPixelCoordinate,
      2000,
      Date.now(),
      () => {
        Object(_gameState__WEBPACK_IMPORTED_MODULE_4__["setNewgameBoardState"])(_gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"].set(firstToCoordinate, fromPiece));

        checkGameStateAndStartNextTurn();
        checkGameStateAndStartNextTurn();
        Object(_renderHelpers__WEBPACK_IMPORTED_MODULE_2__["drawGameBoardState"])();
      }
    );
    return;
  }

  const [firstMove, secondMove] = bestMove.split("=>");
  const [firstFromCoordinate, firstToCoordinate] = firstMove.split("->");
  const [secondFromCoordinate, secondToCoordinate] = secondMove.split("->");
  const fromPiece = _gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"].get(firstFromCoordinate);

  // dont render moving piece in the same spot...
  Object(_gameState__WEBPACK_IMPORTED_MODULE_4__["setNewgameBoardState"])(_gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"].set(firstFromCoordinate, false));
  const fromFirstPixelCoodinate = Object(_gameBoardHelpers__WEBPACK_IMPORTED_MODULE_3__["getPixelCoordinatesFromBoardCoordinates"])(
    firstFromCoordinate
  );
  const toFirstPixelCoordinate = Object(_gameBoardHelpers__WEBPACK_IMPORTED_MODULE_3__["getPixelCoordinatesFromBoardCoordinates"])(
    firstToCoordinate
  );

  const fromSecondPixelCoodinate = Object(_gameBoardHelpers__WEBPACK_IMPORTED_MODULE_3__["getPixelCoordinatesFromBoardCoordinates"])(
    secondFromCoordinate
  );
  const toSecondPixelCoordinate = Object(_gameBoardHelpers__WEBPACK_IMPORTED_MODULE_3__["getPixelCoordinatesFromBoardCoordinates"])(
    secondToCoordinate
  );

  _constants__WEBPACK_IMPORTED_MODULE_0__["DEBUG"] &&
    console.log(`MOVING FROM ${firstFromCoordinate} TO ${firstToCoordinate}`);

  Object(_renderHelpers__WEBPACK_IMPORTED_MODULE_2__["renderMovingPiece"])(
    fromPiece,
    fromFirstPixelCoodinate,
    toFirstPixelCoordinate,
    2000,
    Date.now(),
    () => {
      Object(_gameState__WEBPACK_IMPORTED_MODULE_4__["setNewgameBoardState"])(_gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"].set(firstToCoordinate, fromPiece));

      Object(_gameState__WEBPACK_IMPORTED_MODULE_4__["nextPhase"])();

      const secondFromPiece = _gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"].get(secondFromCoordinate);
      Object(_gameState__WEBPACK_IMPORTED_MODULE_4__["setNewgameBoardState"])(_gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"].set(secondFromCoordinate, false));

      _constants__WEBPACK_IMPORTED_MODULE_0__["DEBUG"] &&
        console.log(
          `MOVING FROM ${secondFromCoordinate} TO ${secondToCoordinate}`
        );

      Object(_renderHelpers__WEBPACK_IMPORTED_MODULE_2__["renderMovingPiece"])(
        secondFromPiece,
        fromSecondPixelCoodinate,
        toSecondPixelCoordinate,
        2000,
        Date.now(),
        () => {
          const toPiece = _gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"].get(secondToCoordinate);

          if (secondFromPiece.ownedBy === toPiece.ownedBy) {
            Object(_gameState__WEBPACK_IMPORTED_MODULE_4__["setNewgameBoardState"])(
              _gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"]
                .set(secondToCoordinate, secondFromPiece)
                .setIn(
                  [secondToCoordinate, "stackSize"],
                  secondFromPiece.stackSize + toPiece.stackSize
                )
            );
          } else {
            Object(_gameState__WEBPACK_IMPORTED_MODULE_4__["setNewgameBoardState"])(
              _gameState__WEBPACK_IMPORTED_MODULE_4__["gameBoardState"].set(secondToCoordinate, secondFromPiece)
            );
          }

          checkGameStateAndStartNextTurn();
          Object(_renderHelpers__WEBPACK_IMPORTED_MODULE_2__["drawGameBoardState"])();
        }
      );
    }
  );
}

function getBestMove(gameState, turn) {
  _constants__WEBPACK_IMPORTED_MODULE_0__["DEBUG"] && console.time("all game states");

  const allPossibleStatesAfterTurn = Object(_ai__WEBPACK_IMPORTED_MODULE_5__["getGameStatesToAnalyze"])(gameState, turn);

  let depth = 1;

  if (allPossibleStatesAfterTurn.size < 500) {
    depth = 2;
  }

  if (allPossibleStatesAfterTurn.size < 150) {
    depth = 3;
  }

  if (allPossibleStatesAfterTurn.size < 20) {
    depth = 4;
  }

  _constants__WEBPACK_IMPORTED_MODULE_0__["DEBUG"] && console.timeEnd("all game states");
  _constants__WEBPACK_IMPORTED_MODULE_0__["DEBUG"] &&
    console.log(
      `ALL POSSIBLE GAME STATES AT DEPTH ${depth}: ${
        allPossibleStatesAfterTurn.size
      }`
    );

  _constants__WEBPACK_IMPORTED_MODULE_0__["DEBUG"] && console.time("get scores");

  const minimaxResult = Object(_ai__WEBPACK_IMPORTED_MODULE_5__["minimax"])(gameState, _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"], depth);

  const bestMove = minimaxResult[1];
  _constants__WEBPACK_IMPORTED_MODULE_0__["DEBUG"] && console.timeEnd("get scores");

  document.getElementById("loadingSpinner").classList.add("hidden");
  return bestMove;
}

function initGame(SETUP_STYLE) {
  const piecesToSetup =
    SETUP_STYLE !== "RANDOM"
      ? Object(_gameBoardHelpers__WEBPACK_IMPORTED_MODULE_3__["setupBoardWithPiecesNotRandom"])()
      : Object(_gameBoardHelpers__WEBPACK_IMPORTED_MODULE_3__["setupBoardWithPieces"])();
  Object(_cachedBoard__WEBPACK_IMPORTED_MODULE_1__["drawInitialGrid"])();
  Object(_renderHelpers__WEBPACK_IMPORTED_MODULE_2__["renderInitializingBoard"])(piecesToSetup, () => {
    Object(_renderHelpers__WEBPACK_IMPORTED_MODULE_2__["drawGameBoardState"])();
    Object(_renderHelpers__WEBPACK_IMPORTED_MODULE_2__["drawCoordinates"])();
  });
}

const isMobile = "ontouchstart" in document.documentElement;
const mouseUpEvent = isMobile ? "touchend" : "mouseup";
const mouseDownEvent = isMobile ? "touchstart" : "mousedown";
const mouseMoveEvent = isMobile ? "touchmove" : "mousemove";

_constants__WEBPACK_IMPORTED_MODULE_0__["GAME_STATE_BOARD_CANVAS"].addEventListener(mouseDownEvent, handleClickPiece);
_constants__WEBPACK_IMPORTED_MODULE_0__["GAME_STATE_BOARD_CANVAS"].addEventListener(mouseMoveEvent, handleMovePiece);
_constants__WEBPACK_IMPORTED_MODULE_0__["GAME_STATE_BOARD_CANVAS"].addEventListener(mouseUpEvent, handleDropPiece);


/***/ }),

/***/ "./src/gamePieceRenderer.js":
/*!**********************************!*\
  !*** ./src/gamePieceRenderer.js ***!
  \**********************************/
/*! exports provided: PLAYER_ONE_TOTT, PLAYER_ONE_TZARRA, PLAYER_ONE_TZAAR, PLAYER_TWO_TOTT, PLAYER_TWO_TZARRA, PLAYER_TWO_TZAAR, GAME_PIECE_RADIUS, CANVAS_SIDE_LENGTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_ONE_TOTT", function() { return PLAYER_ONE_TOTT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_ONE_TZARRA", function() { return PLAYER_ONE_TZARRA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_ONE_TZAAR", function() { return PLAYER_ONE_TZAAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_TWO_TOTT", function() { return PLAYER_TWO_TOTT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_TWO_TZARRA", function() { return PLAYER_TWO_TZARRA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_TWO_TZAAR", function() { return PLAYER_TWO_TZAAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_PIECE_RADIUS", function() { return GAME_PIECE_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANVAS_SIDE_LENGTH", function() { return CANVAS_SIDE_LENGTH; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


const isMobile = "ontouchstart" in document.documentElement;

const PLAYER_ONE_TOTT = document.createElement("canvas");
const PLAYER_ONE_TZARRA = document.createElement("canvas");
const PLAYER_ONE_TZAAR = document.createElement("canvas");
const PLAYER_TWO_TOTT = document.createElement("canvas");
const PLAYER_TWO_TZARRA = document.createElement("canvas");
const PLAYER_TWO_TZAAR = document.createElement("canvas");

const GAME_PIECE_RADIUS = isMobile ? _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_HEIGHT"] / 1.75 : _constants__WEBPACK_IMPORTED_MODULE_0__["TRIANGLE_HEIGHT"] / 2.5;
const CANVAS_SIDE_LENGTH = GAME_PIECE_RADIUS * _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"] * 2;
const CANVAS_STYLE_LENGTH = `${GAME_PIECE_RADIUS * 2}px`;

PLAYER_ONE_TOTT.width = CANVAS_SIDE_LENGTH;
PLAYER_ONE_TOTT.height = CANVAS_SIDE_LENGTH;
PLAYER_ONE_TOTT.style.width = CANVAS_STYLE_LENGTH;
PLAYER_ONE_TOTT.style.height = CANVAS_STYLE_LENGTH;

PLAYER_ONE_TZARRA.width = CANVAS_SIDE_LENGTH;
PLAYER_ONE_TZARRA.height = CANVAS_SIDE_LENGTH;
PLAYER_ONE_TZARRA.style.width = CANVAS_STYLE_LENGTH;
PLAYER_ONE_TZARRA.style.height = CANVAS_STYLE_LENGTH;

PLAYER_ONE_TZAAR.width = CANVAS_SIDE_LENGTH;
PLAYER_ONE_TZAAR.height = CANVAS_SIDE_LENGTH;
PLAYER_ONE_TZAAR.style.width = CANVAS_STYLE_LENGTH;
PLAYER_ONE_TZAAR.style.height = CANVAS_STYLE_LENGTH;

PLAYER_TWO_TZARRA.width = CANVAS_SIDE_LENGTH;
PLAYER_TWO_TZARRA.height = CANVAS_SIDE_LENGTH;
PLAYER_TWO_TZARRA.style.width = CANVAS_STYLE_LENGTH;
PLAYER_TWO_TZARRA.style.height = CANVAS_STYLE_LENGTH;

PLAYER_TWO_TOTT.width = CANVAS_SIDE_LENGTH;
PLAYER_TWO_TOTT.height = CANVAS_SIDE_LENGTH;
PLAYER_TWO_TOTT.style.width = CANVAS_STYLE_LENGTH;
PLAYER_TWO_TOTT.style.height = CANVAS_STYLE_LENGTH;

PLAYER_TWO_TZAAR.width = CANVAS_SIDE_LENGTH;
PLAYER_TWO_TZAAR.height = CANVAS_SIDE_LENGTH;
PLAYER_TWO_TZAAR.style.width = CANVAS_STYLE_LENGTH;
PLAYER_TWO_TZAAR.style.height = CANVAS_STYLE_LENGTH;

PLAYER_ONE_TOTT.getContext("2d").setTransform(
  _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"],
  0,
  0,
  _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"],
  0,
  0
);
PLAYER_ONE_TZARRA.getContext("2d").setTransform(
  _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"],
  0,
  0,
  _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"],
  0,
  0
);
PLAYER_ONE_TZAAR.getContext("2d").setTransform(
  _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"],
  0,
  0,
  _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"],
  0,
  0
);

PLAYER_TWO_TOTT.getContext("2d").setTransform(
  _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"],
  0,
  0,
  _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"],
  0,
  0
);
PLAYER_TWO_TZARRA.getContext("2d").setTransform(
  _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"],
  0,
  0,
  _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"],
  0,
  0
);
PLAYER_TWO_TZAAR.getContext("2d").setTransform(
  _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"],
  0,
  0,
  _constants__WEBPACK_IMPORTED_MODULE_0__["PIXEL_RATIO"],
  0,
  0
);

const playerOneTott = new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"],
  ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"]
});
const playerOneTzarra = new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"],
  ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"]
});
const playerOneTzaar = new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZAAR"],
  ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"]
});

const playerTwoTott = new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["TOTT"],
  ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"]
});
const playerTwoTzarra = new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"],
  ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"]
});
const playerTwoTzaar = new _constants__WEBPACK_IMPORTED_MODULE_0__["GamePieceRecord"]({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["TZAAR"],
  ownedBy: _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_TWO"]
});

const circleRadius = GAME_PIECE_RADIUS;
const smallerCircleRadius = GAME_PIECE_RADIUS / 2;

const CENTER_COLOR = "#FDD835";
const PLAYER_ONE_COLOR_BG = "#1E88E5";
const PLAYER_TWO_COLOR_BG = "#212121";

function drawStar(cx, cy, spikes, outerRadius, innerRadius, ctx, centerColor) {
  var rot = Math.PI / 2 * 3;
  var x = cx;
  var y = cy;
  var step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius)
  for (var i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y)
    rot += step

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y)
    rot += step
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#fff';
  ctx.stroke();
  ctx.fillStyle = centerColor;
  ctx.fill();
}


function drawGamePiece(gamePiece, canvas) {
  const context = canvas.getContext("2d");
  if (gamePiece.ownedBy === _constants__WEBPACK_IMPORTED_MODULE_0__["PLAYER_ONE"]) {
    context.fillStyle = PLAYER_ONE_COLOR_BG;
    context.beginPath();
    context.arc(circleRadius, circleRadius, circleRadius - 2, 0, 2 * Math.PI);
    context.fill();
  } else {
    context.fillStyle = PLAYER_TWO_COLOR_BG;
    context.beginPath();
    context.arc(circleRadius, circleRadius, circleRadius - 2, 0, 2 * Math.PI);
    context.fill();
  }

  if (gamePiece.type === _constants__WEBPACK_IMPORTED_MODULE_0__["TZAAR"]) {
    context.fillStyle = CENTER_COLOR;
    context.beginPath();
    drawStar(circleRadius, circleRadius, 4, circleRadius / 2, circleRadius / 4, context, CENTER_COLOR);

    context.fill();
  } else if (gamePiece.type === _constants__WEBPACK_IMPORTED_MODULE_0__["TZARRA"]) {
    context.strokeStyle = CENTER_COLOR;
    context.lineWidth = 3;
    context.beginPath();
    context.arc(
      circleRadius,
      circleRadius,
      smallerCircleRadius,
      0,
      2 * Math.PI
    );
    context.stroke();
  }
}

drawGamePiece(playerOneTott, PLAYER_ONE_TOTT);
drawGamePiece(playerOneTzarra, PLAYER_ONE_TZARRA);
drawGamePiece(playerOneTzaar, PLAYER_ONE_TZAAR);
drawGamePiece(playerTwoTott, PLAYER_TWO_TOTT);
drawGamePiece(playerTwoTzarra, PLAYER_TWO_TZARRA);
drawGamePiece(playerTwoTzaar, PLAYER_TWO_TZAAR);


/***/ }),

/***/ "./src/gameState.js":
/*!**************************!*\
  !*** ./src/gameState.js ***!
  \**************************/
/*! exports provided: movingPiece, gameBoardState, isVeryFirstTurn, currentTurn, turnPhase, numberOfTurnsIntoGame, setNewgameBoardState, setMovingPiece, nextPhase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movingPiece", function() { return movingPiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameBoardState", function() { return gameBoardState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVeryFirstTurn", function() { return isVeryFirstTurn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentTurn", function() { return currentTurn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turnPhase", function() { return turnPhase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfTurnsIntoGame", function() { return numberOfTurnsIntoGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNewgameBoardState", function() { return setNewgameBoardState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMovingPiece", function() { return setMovingPiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextPhase", function() { return nextPhase; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");



let movingPiece = null;
let gameBoardState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])();
let isVeryFirstTurn = true;
let currentTurn = _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"];
let turnPhase = _constants__WEBPACK_IMPORTED_MODULE_1__["TURN_PHASES"].CAPTURE;
let numberOfTurnsIntoGame = 0;

function setNewgameBoardState(newState) {
  gameBoardState = newState;
}

function setMovingPiece(coordinate) {
  movingPiece = coordinate;
}

function nextPhase() {
  // first turn of the game is special
  if (isVeryFirstTurn) {
    isVeryFirstTurn = false;
    turnPhase = _constants__WEBPACK_IMPORTED_MODULE_1__["TURN_PHASES"].CAPTURE;
    currentTurn = _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_TWO"];
    numberOfTurnsIntoGame = numberOfTurnsIntoGame + 1;
    document.getElementById("phaseDiv").innerHTML = "CAPTURE";
    document.getElementById("turnDiv").innerHTML = "AI";

    return;
  }

  // players turns aren't over yet
  if (currentTurn === _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"] && turnPhase === _constants__WEBPACK_IMPORTED_MODULE_1__["TURN_PHASES"].CAPTURE) {
    turnPhase = _constants__WEBPACK_IMPORTED_MODULE_1__["TURN_PHASES"].STACK_OR_CAPTURE;
    document.getElementById("phaseDiv").innerHTML = "STACK OR CAPTURE";
    return;
  }
  if (currentTurn === _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_TWO"] && turnPhase === _constants__WEBPACK_IMPORTED_MODULE_1__["TURN_PHASES"].CAPTURE) {
    turnPhase = _constants__WEBPACK_IMPORTED_MODULE_1__["TURN_PHASES"].STACK_OR_CAPTURE;
    document.getElementById("phaseDiv").innerHTML = "STACK OR CAPTURE";
    return;
  }

  // next players turn begins
  if (
    currentTurn === _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"] &&
    turnPhase === _constants__WEBPACK_IMPORTED_MODULE_1__["TURN_PHASES"].STACK_OR_CAPTURE
  ) {
    turnPhase = _constants__WEBPACK_IMPORTED_MODULE_1__["TURN_PHASES"].CAPTURE;
    currentTurn = _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_TWO"];
    numberOfTurnsIntoGame = numberOfTurnsIntoGame + 1;
    document.getElementById("phaseDiv").innerHTML = "CAPTURE";
    document.getElementById("turnDiv").innerHTML = "AI";
    return;
  }
  if (
    currentTurn === _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_TWO"] &&
    turnPhase === _constants__WEBPACK_IMPORTED_MODULE_1__["TURN_PHASES"].STACK_OR_CAPTURE
  ) {
    turnPhase = _constants__WEBPACK_IMPORTED_MODULE_1__["TURN_PHASES"].CAPTURE;
    currentTurn = _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"];
    numberOfTurnsIntoGame = numberOfTurnsIntoGame + 1;
    document.getElementById("phaseDiv").innerHTML = "CAPTURE";
    document.getElementById("turnDiv").innerHTML = "PLAYER";
    return;
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLogic */ "./src/gameLogic.js");


function startNewGame() {
  document.documentElement.classList.add("hideOverflow");
  document.getElementById("gameMenuDiv").classList.add("hidden");
  document.getElementById("chooseSetup").classList.remove("hidden");
}

function startGameWithRandomSetup() {
  document.getElementById("chooseSetup").classList.add("hidden");
  document.getElementById("gameStateBoardDiv").classList.remove("hidden");
  document.getElementById("gameStateDiv").classList.remove("hidden");
  Object(_gameLogic__WEBPACK_IMPORTED_MODULE_0__["initGame"])("RANDOM");
}

function startGameWithSymmetricSetup() {
  document.getElementById("chooseSetup").classList.add("hidden");
  document.getElementById("gameStateBoardDiv").classList.remove("hidden");
  document.getElementById("gameStateDiv").classList.remove("hidden");
  Object(_gameLogic__WEBPACK_IMPORTED_MODULE_0__["initGame"])("SYMMETRIC");
}

function backToGameMenu() {
  document.getElementById("gameMenuDiv").classList.remove("hidden");
  document.getElementById("rulesDiv").classList.add("hidden");
}

function showRules() {
  var link = document.createElement('a');
  link.href = 'tzaar_rulebook.pdf';
  link.download = 'tzaar_rulebook.pdf';
  link.dispatchEvent(new MouseEvent('click'));
}

function startApp() {
  document.getElementById("newGameDiv").addEventListener("click", startNewGame);
  document.getElementById("showRulesDiv").addEventListener("click", showRules);
  document
    .getElementById("randomSetup")
    .addEventListener("click", startGameWithRandomSetup);
  document
    .getElementById("symmetricalSetup")
    .addEventListener("click", startGameWithSymmetricSetup);
  document
    .getElementById("backToGameMenuDiv")
    .addEventListener("click", backToGameMenu);
}
window.addEventListener("DOMContentLoaded", startApp, false);


/***/ }),

/***/ "./src/renderHelpers.js":
/*!******************************!*\
  !*** ./src/renderHelpers.js ***!
  \******************************/
/*! exports provided: drawCoordinates, drawCoordinate, drawGameBoardState, drawStaticGamePiece, drawGamePiece, drawGamePieces, clearCanvas, renderInitializingBoard, renderMovingPiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawCoordinates", function() { return drawCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawCoordinate", function() { return drawCoordinate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawGameBoardState", function() { return drawGameBoardState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawStaticGamePiece", function() { return drawStaticGamePiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawGamePiece", function() { return drawGamePiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawGamePieces", function() { return drawGamePieces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCanvas", function() { return clearCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderInitializingBoard", function() { return renderInitializingBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderMovingPiece", function() { return renderMovingPiece; });
/* harmony import */ var _gameBoardHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoardHelpers */ "./src/gameBoardHelpers.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _cachedBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cachedBoard */ "./src/cachedBoard.js");
/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameState */ "./src/gameState.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gamePieceRenderer */ "./src/gamePieceRenderer.js");







function getContext() {
  return _constants__WEBPACK_IMPORTED_MODULE_1__["GAME_STATE_BOARD_CANVAS"].getContext("2d");
}

function drawCoordinates() {
  if (!_constants__WEBPACK_IMPORTED_MODULE_1__["DEBUG"]) {
    return;
  }
  _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYABLE_VERTICES"].map(drawCoordinate);
}

function drawCoordinate(coordinate) {
  const context = getContext();
  const [x, y] = coordinate.split(",");

  const offsetXToCenter = window.innerWidth / 2 - 4 * _constants__WEBPACK_IMPORTED_MODULE_1__["TRIANGLE_SIDE_LENGTH"];
  const offsetYToCenter = window.innerHeight / 2 - 4 * _constants__WEBPACK_IMPORTED_MODULE_1__["TRIANGLE_HEIGHT"];

  const offsetX =
    x * _constants__WEBPACK_IMPORTED_MODULE_1__["TRIANGLE_SIDE_LENGTH"] - Math.max(4 - y, 0) * _constants__WEBPACK_IMPORTED_MODULE_1__["TRIANGLE_SIDE_LENGTH"];

  const xPos =
    (Math.abs(4 - y) * _constants__WEBPACK_IMPORTED_MODULE_1__["TRIANGLE_SIDE_LENGTH"]) / 2 + offsetX + offsetXToCenter;

  const yPos = y * _constants__WEBPACK_IMPORTED_MODULE_1__["TRIANGLE_HEIGHT"] + offsetYToCenter;
  context.font = ".5rem Helvetica";
  context.fillStyle = "#39ff14";
  context.fillText(coordinate, xPos + 10, yPos + 10);
}

function drawGameBoardState() {
  clearCanvas();
  Object(_cachedBoard__WEBPACK_IMPORTED_MODULE_2__["drawCachedBoard"])();
  drawGamePieces();
  drawCoordinates();
}

function drawStaticGamePiece(gamePiece, coordinate) {
  const [xPos, yPos] = Object(_gameBoardHelpers__WEBPACK_IMPORTED_MODULE_0__["getPixelCoordinatesFromBoardCoordinates"])(
    coordinate
  ).split(",");

  if (gamePiece.isDragging || !gamePiece) {
    return;
  }

  drawGamePiece(gamePiece, xPos, yPos);
}

function drawGamePiece(gamePiece, xPos, yPos) {
  const context = getContext();
  if (gamePiece.ownedBy === _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"] && gamePiece.type === _constants__WEBPACK_IMPORTED_MODULE_1__["TOTT"]) {
    context.drawImage(
      _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["PLAYER_ONE_TOTT"],
      xPos - _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["GAME_PIECE_RADIUS"],
      yPos - _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["GAME_PIECE_RADIUS"],
      _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["CANVAS_SIDE_LENGTH"] / _constants__WEBPACK_IMPORTED_MODULE_1__["PIXEL_RATIO"],
      _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["CANVAS_SIDE_LENGTH"] / _constants__WEBPACK_IMPORTED_MODULE_1__["PIXEL_RATIO"]
    );
  }
  if (gamePiece.ownedBy === _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"] && gamePiece.type === _constants__WEBPACK_IMPORTED_MODULE_1__["TZARRA"]) {
    context.drawImage(
      _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["PLAYER_ONE_TZARRA"],
      xPos - _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["GAME_PIECE_RADIUS"],
      yPos - _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["GAME_PIECE_RADIUS"],
      _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["CANVAS_SIDE_LENGTH"] / _constants__WEBPACK_IMPORTED_MODULE_1__["PIXEL_RATIO"],
      _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["CANVAS_SIDE_LENGTH"] / _constants__WEBPACK_IMPORTED_MODULE_1__["PIXEL_RATIO"]
    );
  }
  if (gamePiece.ownedBy === _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_ONE"] && gamePiece.type === _constants__WEBPACK_IMPORTED_MODULE_1__["TZAAR"]) {
    context.drawImage(
      _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["PLAYER_ONE_TZAAR"],
      xPos - _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["GAME_PIECE_RADIUS"],
      yPos - _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["GAME_PIECE_RADIUS"],
      _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["CANVAS_SIDE_LENGTH"] / _constants__WEBPACK_IMPORTED_MODULE_1__["PIXEL_RATIO"],
      _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["CANVAS_SIDE_LENGTH"] / _constants__WEBPACK_IMPORTED_MODULE_1__["PIXEL_RATIO"]
    );
  }
  if (gamePiece.ownedBy === _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_TWO"] && gamePiece.type === _constants__WEBPACK_IMPORTED_MODULE_1__["TOTT"]) {
    context.drawImage(
      _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["PLAYER_TWO_TOTT"],
      xPos - _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["GAME_PIECE_RADIUS"],
      yPos - _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["GAME_PIECE_RADIUS"],
      _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["CANVAS_SIDE_LENGTH"] / _constants__WEBPACK_IMPORTED_MODULE_1__["PIXEL_RATIO"],
      _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["CANVAS_SIDE_LENGTH"] / _constants__WEBPACK_IMPORTED_MODULE_1__["PIXEL_RATIO"]
    );
  }
  if (gamePiece.ownedBy === _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_TWO"] && gamePiece.type === _constants__WEBPACK_IMPORTED_MODULE_1__["TZARRA"]) {
    context.drawImage(
      _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["PLAYER_TWO_TZARRA"],
      xPos - _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["GAME_PIECE_RADIUS"],
      yPos - _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["GAME_PIECE_RADIUS"],
      _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["CANVAS_SIDE_LENGTH"] / _constants__WEBPACK_IMPORTED_MODULE_1__["PIXEL_RATIO"],
      _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["CANVAS_SIDE_LENGTH"] / _constants__WEBPACK_IMPORTED_MODULE_1__["PIXEL_RATIO"]
    );
  }
  if (gamePiece.ownedBy === _constants__WEBPACK_IMPORTED_MODULE_1__["PLAYER_TWO"] && gamePiece.type === _constants__WEBPACK_IMPORTED_MODULE_1__["TZAAR"]) {
    context.drawImage(
      _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["PLAYER_TWO_TZAAR"],
      xPos - _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["GAME_PIECE_RADIUS"],
      yPos - _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["GAME_PIECE_RADIUS"],
      _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["CANVAS_SIDE_LENGTH"] / _constants__WEBPACK_IMPORTED_MODULE_1__["PIXEL_RATIO"],
      _gamePieceRenderer__WEBPACK_IMPORTED_MODULE_5__["CANVAS_SIDE_LENGTH"] / _constants__WEBPACK_IMPORTED_MODULE_1__["PIXEL_RATIO"]
    );
  }

  context.font = "1.15rem Helvetica";
  context.fillStyle = gamePiece.type === _constants__WEBPACK_IMPORTED_MODULE_1__["TZAAR"] ? "#000" : "#fff";
  context.fillText(gamePiece.stackSize, +xPos - 6, +yPos + 6);
}

function drawGamePieces() {
  _gameState__WEBPACK_IMPORTED_MODULE_3__["gameBoardState"].forEach(drawStaticGamePiece);
}

function clearCanvas() {
  const context = getContext();
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
}

function timeFunction(t) {
  return --t * t * t + 1;
}

function renderInitializingBoard(piecesToDraw, callback) {
  let index = 0;
  let piecesToRenderList = Object(immutable__WEBPACK_IMPORTED_MODULE_4__["List"])();
  piecesToDraw.forEach((piece, coordinate) => {
    const to = Object(_gameBoardHelpers__WEBPACK_IMPORTED_MODULE_0__["getPixelCoordinatesFromBoardCoordinates"])(coordinate);
    const from = `${window.innerWidth / 2},${window.innerHeight / 2}`;

    piecesToRenderList = piecesToRenderList.push({
      piece,
      from,
      to,
      delay: index * 25
    });

    index = index + 1;
  });

  renderMovingPieces(piecesToRenderList, 500, Date.now(), () => {
    let index = 0;
    piecesToDraw.forEach((piece, coordinate) => {
      Object(_gameState__WEBPACK_IMPORTED_MODULE_3__["setNewgameBoardState"])(_gameState__WEBPACK_IMPORTED_MODULE_3__["gameBoardState"].set(coordinate, piece));
      index = index + 1;
    });
    callback();
  });
}

function renderMovingPieces(piecesToRenderList, duration, startTime, callback) {
  const now = Date.now();

  const timePassedInMilliSec = now - startTime;

  if (timePassedInMilliSec > duration + piecesToRenderList.last().delay) {
    callback();
    return;
  }

  clearCanvas();
  Object(_cachedBoard__WEBPACK_IMPORTED_MODULE_2__["drawCachedBoard"])();

  piecesToRenderList.forEach(({ piece, from, to, delay }) => {
    const timePassed = Math.min(
      Math.max((now - startTime - delay) / duration, 0),
      1
    );

    const [fromX, fromY] = from.split(",");
    const [toX, toY] = to.split(",");

    const distance = Math.sqrt(
      Math.pow(fromX - toX, 2) + Math.pow(fromY - toY, 2)
    );

    const currentDistance = (timeFunction(timePassed) * distance) / distance;

    const renderX = (1 - currentDistance) * fromX + currentDistance * toX;
    const renderY = (1 - currentDistance) * fromY + currentDistance * toY;

    drawGamePiece(piece, renderX, renderY);
  });

  window.requestAnimationFrame(() => {
    renderMovingPieces(piecesToRenderList, duration, startTime, callback);
  });
}

function renderMovingPiece(
  piece,
  from,
  to,
  duration,
  startTime,
  callback
) {
  const now = Date.now();

  const timePassedInMilliSec = now - startTime;

  if (timePassedInMilliSec > duration) {
    callback();
    return;
  }

  const timePassed = Math.min(Math.max((now - startTime) / duration, 0), 1);

  const [fromX, fromY] = from.split(",");
  const [toX, toY] = to.split(",");

  const distance = Math.sqrt(
    Math.pow(fromX - toX, 2) + Math.pow(fromY - toY, 2)
  );

  const currentDistance = (timeFunction(timePassed) * distance) / distance;

  const renderX = (1 - currentDistance) * fromX + currentDistance * toX;
  const renderY = (1 - currentDistance) * fromY + currentDistance * toY;

  clearCanvas();
  Object(_cachedBoard__WEBPACK_IMPORTED_MODULE_2__["drawCachedBoard"])();
  drawGamePieces();
  drawGamePiece(piece, renderX, renderY);

  window.requestAnimationFrame(() => {
    renderMovingPiece(piece, from, to, duration, startTime, callback);
  });
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltbXV0YWJsZS9kaXN0L2ltbXV0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhY2hlZEJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVCb2FyZEhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVMb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZVBpZWNlUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlckhlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FDQTtBQUNBLENBQUMsb0JBQW9CLGNBQWM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLHdCQUF3QjtBQUNyRTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxLQUFLO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1GQUFtRix5Q0FBeUM7QUFDNUg7QUFDQTtBQUNBLGlGQUFpRix5Q0FBeUM7QUFDMUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLDJDQUEyQzs7QUFFM0MsNkNBQTZDOztBQUU3Qyx5Q0FBeUM7OztBQUd6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixTQUFTO0FBQ3ZDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxxQkFBcUI7QUFDN0QsU0FBUztBQUNUOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLG1DQUFtQyxLQUFLO0FBQ3hDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMERBQTBELFNBQVM7QUFDbkU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELGVBQWU7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdEO0FBQ2hEO0FBQ0E7O0FBRUEsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EO0FBQ3BEO0FBQ0E7O0FBRUEsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QyxVQUFVO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0MsV0FBVztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDLFVBQVU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQyxXQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxnQkFBZ0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsZ0JBQWdCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFVBQVU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxpQkFBaUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxvQkFBb0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6QztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msc0JBQXNCO0FBQzVELE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsaUJBQWlCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxxQkFBcUI7QUFDN0QsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxLQUFLO0FBQy9DOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0REFBNEQ7QUFDNUQ7QUFDQSwwQkFBMEIsK0NBQStDO0FBQ3pFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsd0NBQXdDO0FBQzdGLDREQUE0RCxnQkFBZ0I7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7O0FBRUEsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3QkFBd0I7QUFDbkQ7QUFDQSwwQkFBMEIsNENBQTRDO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUVBQW1FO0FBQ25FO0FBQ0EsZ0RBQWdELG1DQUFtQztBQUNuRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLCtEQUErRDtBQUMvRCxnREFBZ0Qsd0JBQXdCO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFFQUFxRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EsMERBQTBEO0FBQzFELDJDQUEyQztBQUMzQztBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLDRDQUE0QztBQUM1QztBQUNBLDZEQUE2RDtBQUM3RCxpREFBaUQsa0NBQWtDO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0EsNEJBQTRCLDhEQUE4RDtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1Asa0RBQWtEO0FBQ2xEO0FBQ0EseURBQXlEO0FBQ3pELGlEQUFpRCx3QkFBd0I7QUFDekU7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLEtBQUs7QUFDTDtBQUNBLHNDQUFzQyxvQ0FBb0M7QUFDMUU7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSyx1QkFBdUIsb0JBQW9COztBQUVoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0EsU0FBUztBQUNULDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLGtDQUFrQyw2Q0FBNkM7QUFDL0U7QUFDQSx1QkFBdUIsdUJBQXVCLEVBQUU7QUFDaEQsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUNBQW1DO0FBQ2pFLGlDQUFpQyxrREFBa0Q7QUFDbkY7QUFDQSxLQUFLO0FBQ0wsOENBQThDLDRDQUE0QztBQUMxRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLDZEQUE2RCxjQUFjO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxnQkFBZ0I7QUFDOUQsNENBQTRDLGNBQWM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsZUFBZTtBQUNwRTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQW1ELEtBQUs7QUFDeEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJEQUEyRDtBQUMzRCxxRUFBcUUscUJBQXFCO0FBQzFGOztBQUVBLHdEQUF3RDtBQUN4RCxxRUFBcUUscUJBQXFCO0FBQzFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsa0JBQWtCO0FBQ3ZELFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLEtBQUs7QUFDeEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHNDQUFzQztBQUN0Qyx5Q0FBeUMsb0JBQW9CO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQywyREFBMkQsc0JBQXNCO0FBQ2pGO0FBQ0EsT0FBTztBQUNQOztBQUVBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMseUJBQXlCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyw0QkFBNEI7QUFDeEU7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUEseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx5QkFBeUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDRCQUE0QjtBQUN0RTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdEO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDtBQUNyRCxrREFBa0Qsd0JBQXdCO0FBQzFFOztBQUVBO0FBQ0EsNENBQTRDLFNBQVM7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxrQkFBa0I7QUFDdkQsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsS0FBSztBQUMvQzs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9DQUFvQztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxjQUFjLEVBQUU7QUFDakU7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGVBQWUsRUFBRTtBQUN2RDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBLEtBQUs7O0FBRUw7QUFDQSx5Q0FBeUMsOEJBQThCO0FBQ3ZFLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxpRkFBaUYsWUFBWTtBQUM3RixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwwQ0FBMEMsMEJBQTBCO0FBQ3BFLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLDBDQUEwQyw0QkFBNEI7QUFDdEUsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsNENBQTRDLDhCQUE4QjtBQUMxRSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsd0JBQXdCO0FBQ25FO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUwsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsS0FBSzs7QUFFTCx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDs7OztBQUk3RDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxQkFBcUI7QUFDMUQsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsOENBQThDLEVBQUU7QUFDM0UsMkJBQTJCLHlDQUF5QyxFQUFFO0FBQ3RFO0FBQ0Esd0JBQXdCLDBCQUEwQixFQUFFO0FBQ3BELHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0RBQXdEO0FBQ3hEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQyxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaDNKbUI7QUFTbkI7O0FBRTRDO0FBSzVDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLDJCQUEyQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxlQUFlLElBQUksYUFBYTtBQUMvQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsVUFBVSxJQUFJLGVBQWUsSUFBSSxhQUFhO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLFVBQVUsSUFBSSxrQ0FBa0MsSUFBSSxhQUFhOztBQUV0RztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZUFBZSxJQUFJLGFBQWE7QUFDN0M7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQyxVQUFVLElBQUksa0NBQWtDLElBQUksYUFBYTs7QUFFcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsVUFBVSxJQUFJLGtDQUFrQyxJQUFJLGFBQWE7O0FBRXBHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZoQkM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEVBQWlDLGtCQUFrQjtBQUNuRCw2RUFBa0MsbUJBQW1COztBQUVyRDtBQUNBO0FBQ0Esc0ZBQTJDLGtCQUFrQjtBQUM3RCx1RkFBNEMsbUJBQW1COztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QixzRUFBMkI7QUFDbkQsMEJBQTBCLHNFQUEyQjtBQUNyRCx1QkFBdUIsU0FBUyxHQUFHLFNBQVM7QUFDNUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcE5pQjs7QUFFakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9IQztBQUNtQjs7QUFFcEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFlBQVksS0FBSyxHQUFHLEtBQUs7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLE9BQU8sR0FBRyxPQUFPO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksTUFBTSxHQUFHLEVBQUU7QUFDdkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFlBQVksTUFBTSxHQUFHLEVBQUU7QUFDdkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFlBQVksRUFBRSxHQUFHLE1BQU07QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxNQUFNLEdBQUcsTUFBTTtBQUMzQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWSxNQUFNLEdBQUcsTUFBTTtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLEVBQUUsR0FBRyxNQUFNO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkVBQWdDLHdIQUFrQztBQUNsRSwyRUFBZ0Msd0hBQWtDO0FBQ2xFLDJFQUFnQyx3SEFBa0M7QUFDbEUsMkVBQWdDLHdIQUFrQztBQUNsRSwyRUFBZ0Msd0hBQWtDO0FBQ2xFLDJFQUFnQyx3SEFBa0M7QUFDbEUsMkVBQWdDLHdIQUFrQztBQUNsRSwyRUFBZ0Msd0hBQWtDO0FBQ2xFLDJFQUFnQyx3SEFBa0M7QUFDbEUsMkVBQWdDLHdIQUFrQztBQUNsRSwyRUFBZ0Msd0hBQWtDO0FBQ2xFLDJFQUFnQyx3SEFBa0M7QUFDbEUsMkVBQWdDLHdIQUFrQztBQUNsRSwyRUFBZ0Msd0hBQWtDO0FBQ2xFLDJFQUFnQyx3SEFBa0M7QUFDbEUsMkVBQWdDLHdIQUFrQztBQUNsRSwyRUFBZ0Msd0hBQWtDO0FBQ2xFLDJFQUFnQyx3SEFBa0M7QUFDbEUsMkVBQWdDLHdIQUFrQztBQUNsRSwyRUFBZ0Msd0hBQWtDO0FBQ2xFLDJFQUFnQyx3SEFBa0M7QUFDbEUsMkVBQWdDLHdIQUFrQztBQUNsRSwyRUFBZ0Msd0hBQWtDO0FBQ2xFLDJFQUFnQyx3SEFBa0M7QUFDbEUsMkVBQWdDLDBIQUFvQztBQUNwRSwyRUFBZ0MsMEhBQW9DO0FBQ3BFLDJFQUFnQywwSEFBb0M7QUFDcEUsMkVBQWdDLDBIQUFvQztBQUNwRSwyRUFBZ0MsMEhBQW9DO0FBQ3BFLDJFQUFnQywwSEFBb0M7QUFDcEUsMkVBQWdDLDBIQUFvQztBQUNwRSwyRUFBZ0MsMEhBQW9DO0FBQ3BFLDJFQUFnQywwSEFBb0M7QUFDcEUsMkVBQWdDLDBIQUFvQztBQUNwRSwyRUFBZ0MsMEhBQW9DO0FBQ3BFLDJFQUFnQywwSEFBb0M7QUFDcEUsMkVBQWdDLDBIQUFvQztBQUNwRSwyRUFBZ0MsMEhBQW9DO0FBQ3BFLDJFQUFnQywwSEFBb0M7QUFDcEUsMkVBQWdDLDBIQUFvQztBQUNwRSwyRUFBZ0MsMEhBQW9DO0FBQ3BFLDJFQUFnQywwSEFBb0M7QUFDcEUsMkVBQWdDLHlIQUFtQztBQUNuRSwyRUFBZ0MseUhBQW1DO0FBQ25FLDJFQUFnQyx5SEFBbUM7QUFDbkUsMkVBQWdDLHlIQUFtQztBQUNuRSwyRUFBZ0MseUhBQW1DO0FBQ25FLDJFQUFnQyx5SEFBbUM7QUFDbkUsMkVBQWdDLHlIQUFtQztBQUNuRSwyRUFBZ0MseUhBQW1DO0FBQ25FLDJFQUFnQyx5SEFBbUM7QUFDbkUsMkVBQWdDLHlIQUFtQztBQUNuRSwyRUFBZ0MseUhBQW1DO0FBQ25FLDJFQUFnQyx5SEFBbUM7QUFDbkUsMkVBQWdDLHdIQUFrQztBQUNsRSwyRUFBZ0Msd0hBQWtDO0FBQ2xFLDJFQUFnQyx3SEFBa0M7QUFDbEUsMkVBQWdDLHdIQUFrQztBQUNsRSwyRUFBZ0Msd0hBQWtDO0FBQ2xFLDJFQUFnQyx3SEFBa0M7QUFDbEUsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixnRUFBcUI7QUFDdEM7QUFDQSxzRUFBMkIsK0VBQW9DO0FBQy9EO0FBQ0E7QUFDQSxzRUFBMkIsK0VBQW9DO0FBQy9EO0FBQ0E7O0FBRUEsaUJBQWlCLGtFQUF1QjtBQUN4QztBQUNBLHNFQUEyQixpRkFBc0M7QUFDakU7QUFDQTtBQUNBLHNFQUEyQixpRkFBc0M7QUFDakU7QUFDQTs7QUFFQSxpQkFBaUIsaUVBQXNCO0FBQ3ZDO0FBQ0Esc0VBQTJCLGdGQUFxQztBQUNoRTtBQUNBO0FBQ0Esc0VBQTJCLGdGQUFxQztBQUNoRTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZXQztBQUN5QjtBQU96QjtBQVFBO0FBU0E7QUFDb0Q7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLG9CQUFvQixNQUFNLGtCQUFrQjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLG9CQUFvQixNQUFNLGtCQUFrQjs7QUFFM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIscUJBQXFCLE1BQU0sbUJBQW1CO0FBQ3ZFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLE1BQU07QUFDakQ7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4VEM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0Isc0JBQXNCOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlNb0I7QUFDMEI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9Da0Q7QUFhakQ7QUFDeUI7QUFDcUI7QUFDaEM7QUFVZDs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0IsR0FBRyx1QkFBdUI7O0FBRXBFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQkFBK0IseUJBQXlCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbC5JbW11dGFibGUgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCBmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0Jzt2YXIgU0xJQ0UkMCA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDbGFzcyhjdG9yLCBzdXBlckNsYXNzKSB7XG4gICAgaWYgKHN1cGVyQ2xhc3MpIHtcbiAgICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gICAgfVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIEl0ZXJhYmxlKHZhbHVlKSB7XG4gICAgICByZXR1cm4gaXNJdGVyYWJsZSh2YWx1ZSkgPyB2YWx1ZSA6IFNlcSh2YWx1ZSk7XG4gICAgfVxuXG5cbiAgY3JlYXRlQ2xhc3MoS2V5ZWRJdGVyYWJsZSwgSXRlcmFibGUpO1xuICAgIGZ1bmN0aW9uIEtleWVkSXRlcmFibGUodmFsdWUpIHtcbiAgICAgIHJldHVybiBpc0tleWVkKHZhbHVlKSA/IHZhbHVlIDogS2V5ZWRTZXEodmFsdWUpO1xuICAgIH1cblxuXG4gIGNyZWF0ZUNsYXNzKEluZGV4ZWRJdGVyYWJsZSwgSXRlcmFibGUpO1xuICAgIGZ1bmN0aW9uIEluZGV4ZWRJdGVyYWJsZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGlzSW5kZXhlZCh2YWx1ZSkgPyB2YWx1ZSA6IEluZGV4ZWRTZXEodmFsdWUpO1xuICAgIH1cblxuXG4gIGNyZWF0ZUNsYXNzKFNldEl0ZXJhYmxlLCBJdGVyYWJsZSk7XG4gICAgZnVuY3Rpb24gU2V0SXRlcmFibGUodmFsdWUpIHtcbiAgICAgIHJldHVybiBpc0l0ZXJhYmxlKHZhbHVlKSAmJiAhaXNBc3NvY2lhdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IFNldFNlcSh2YWx1ZSk7XG4gICAgfVxuXG5cblxuICBmdW5jdGlvbiBpc0l0ZXJhYmxlKG1heWJlSXRlcmFibGUpIHtcbiAgICByZXR1cm4gISEobWF5YmVJdGVyYWJsZSAmJiBtYXliZUl0ZXJhYmxlW0lTX0lURVJBQkxFX1NFTlRJTkVMXSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0tleWVkKG1heWJlS2V5ZWQpIHtcbiAgICByZXR1cm4gISEobWF5YmVLZXllZCAmJiBtYXliZUtleWVkW0lTX0tFWUVEX1NFTlRJTkVMXSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0luZGV4ZWQobWF5YmVJbmRleGVkKSB7XG4gICAgcmV0dXJuICEhKG1heWJlSW5kZXhlZCAmJiBtYXliZUluZGV4ZWRbSVNfSU5ERVhFRF9TRU5USU5FTF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNBc3NvY2lhdGl2ZShtYXliZUFzc29jaWF0aXZlKSB7XG4gICAgcmV0dXJuIGlzS2V5ZWQobWF5YmVBc3NvY2lhdGl2ZSkgfHwgaXNJbmRleGVkKG1heWJlQXNzb2NpYXRpdmUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNPcmRlcmVkKG1heWJlT3JkZXJlZCkge1xuICAgIHJldHVybiAhIShtYXliZU9yZGVyZWQgJiYgbWF5YmVPcmRlcmVkW0lTX09SREVSRURfU0VOVElORUxdKTtcbiAgfVxuXG4gIEl0ZXJhYmxlLmlzSXRlcmFibGUgPSBpc0l0ZXJhYmxlO1xuICBJdGVyYWJsZS5pc0tleWVkID0gaXNLZXllZDtcbiAgSXRlcmFibGUuaXNJbmRleGVkID0gaXNJbmRleGVkO1xuICBJdGVyYWJsZS5pc0Fzc29jaWF0aXZlID0gaXNBc3NvY2lhdGl2ZTtcbiAgSXRlcmFibGUuaXNPcmRlcmVkID0gaXNPcmRlcmVkO1xuXG4gIEl0ZXJhYmxlLktleWVkID0gS2V5ZWRJdGVyYWJsZTtcbiAgSXRlcmFibGUuSW5kZXhlZCA9IEluZGV4ZWRJdGVyYWJsZTtcbiAgSXRlcmFibGUuU2V0ID0gU2V0SXRlcmFibGU7XG5cblxuICB2YXIgSVNfSVRFUkFCTEVfU0VOVElORUwgPSAnQEBfX0lNTVVUQUJMRV9JVEVSQUJMRV9fQEAnO1xuICB2YXIgSVNfS0VZRURfU0VOVElORUwgPSAnQEBfX0lNTVVUQUJMRV9LRVlFRF9fQEAnO1xuICB2YXIgSVNfSU5ERVhFRF9TRU5USU5FTCA9ICdAQF9fSU1NVVRBQkxFX0lOREVYRURfX0BAJztcbiAgdmFyIElTX09SREVSRURfU0VOVElORUwgPSAnQEBfX0lNTVVUQUJMRV9PUkRFUkVEX19AQCc7XG5cbiAgLy8gVXNlZCBmb3Igc2V0dGluZyBwcm90b3R5cGUgbWV0aG9kcyB0aGF0IElFOCBjaG9rZXMgb24uXG4gIHZhciBERUxFVEUgPSAnZGVsZXRlJztcblxuICAvLyBDb25zdGFudHMgZGVzY3JpYmluZyB0aGUgc2l6ZSBvZiB0cmllIG5vZGVzLlxuICB2YXIgU0hJRlQgPSA1OyAvLyBSZXN1bHRlZCBpbiBiZXN0IHBlcmZvcm1hbmNlIGFmdGVyIF9fX19fXz9cbiAgdmFyIFNJWkUgPSAxIDw8IFNISUZUO1xuICB2YXIgTUFTSyA9IFNJWkUgLSAxO1xuXG4gIC8vIEEgY29uc2lzdGVudCBzaGFyZWQgdmFsdWUgcmVwcmVzZW50aW5nIFwibm90IHNldFwiIHdoaWNoIGVxdWFscyBub3RoaW5nIG90aGVyXG4gIC8vIHRoYW4gaXRzZWxmLCBhbmQgbm90aGluZyB0aGF0IGNvdWxkIGJlIHByb3ZpZGVkIGV4dGVybmFsbHkuXG4gIHZhciBOT1RfU0VUID0ge307XG5cbiAgLy8gQm9vbGVhbiByZWZlcmVuY2VzLCBSb3VnaCBlcXVpdmFsZW50IG9mIGBib29sICZgLlxuICB2YXIgQ0hBTkdFX0xFTkdUSCA9IHsgdmFsdWU6IGZhbHNlIH07XG4gIHZhciBESURfQUxURVIgPSB7IHZhbHVlOiBmYWxzZSB9O1xuXG4gIGZ1bmN0aW9uIE1ha2VSZWYocmVmKSB7XG4gICAgcmVmLnZhbHVlID0gZmFsc2U7XG4gICAgcmV0dXJuIHJlZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIFNldFJlZihyZWYpIHtcbiAgICByZWYgJiYgKHJlZi52YWx1ZSA9IHRydWUpO1xuICB9XG5cbiAgLy8gQSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgdmFsdWUgcmVwcmVzZW50aW5nIGFuIFwib3duZXJcIiBmb3IgdHJhbnNpZW50IHdyaXRlc1xuICAvLyB0byB0cmllcy4gVGhlIHJldHVybiB2YWx1ZSB3aWxsIG9ubHkgZXZlciBlcXVhbCBpdHNlbGYsIGFuZCB3aWxsIG5vdCBlcXVhbFxuICAvLyB0aGUgcmV0dXJuIG9mIGFueSBzdWJzZXF1ZW50IGNhbGwgb2YgdGhpcyBmdW5jdGlvbi5cbiAgZnVuY3Rpb24gT3duZXJJRCgpIHt9XG5cbiAgLy8gaHR0cDovL2pzcGVyZi5jb20vY29weS1hcnJheS1pbmxpbmVcbiAgZnVuY3Rpb24gYXJyQ29weShhcnIsIG9mZnNldCkge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgIHZhciBsZW4gPSBNYXRoLm1heCgwLCBhcnIubGVuZ3RoIC0gb2Zmc2V0KTtcbiAgICB2YXIgbmV3QXJyID0gbmV3IEFycmF5KGxlbik7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGxlbjsgaWkrKykge1xuICAgICAgbmV3QXJyW2lpXSA9IGFycltpaSArIG9mZnNldF07XG4gICAgfVxuICAgIHJldHVybiBuZXdBcnI7XG4gIH1cblxuICBmdW5jdGlvbiBlbnN1cmVTaXplKGl0ZXIpIHtcbiAgICBpZiAoaXRlci5zaXplID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGl0ZXIuc2l6ZSA9IGl0ZXIuX19pdGVyYXRlKHJldHVyblRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gaXRlci5zaXplO1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcEluZGV4KGl0ZXIsIGluZGV4KSB7XG4gICAgLy8gVGhpcyBpbXBsZW1lbnRzIFwiaXMgYXJyYXkgaW5kZXhcIiB3aGljaCB0aGUgRUNNQVN0cmluZyBzcGVjIGRlZmluZXMgYXM6XG4gICAgLy9cbiAgICAvLyAgICAgQSBTdHJpbmcgcHJvcGVydHkgbmFtZSBQIGlzIGFuIGFycmF5IGluZGV4IGlmIGFuZCBvbmx5IGlmXG4gICAgLy8gICAgIFRvU3RyaW5nKFRvVWludDMyKFApKSBpcyBlcXVhbCB0byBQIGFuZCBUb1VpbnQzMihQKSBpcyBub3QgZXF1YWxcbiAgICAvLyAgICAgdG8gMl4zMuKIkjEuXG4gICAgLy9cbiAgICAvLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtYXJyYXktZXhvdGljLW9iamVjdHNcbiAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgdmFyIHVpbnQzMkluZGV4ID0gaW5kZXggPj4+IDA7IC8vIE4gPj4+IDAgaXMgc2hvcnRoYW5kIGZvciBUb1VpbnQzMlxuICAgICAgaWYgKCcnICsgdWludDMySW5kZXggIT09IGluZGV4IHx8IHVpbnQzMkluZGV4ID09PSA0Mjk0OTY3Mjk1KSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgICB9XG4gICAgICBpbmRleCA9IHVpbnQzMkluZGV4O1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXggPCAwID8gZW5zdXJlU2l6ZShpdGVyKSArIGluZGV4IDogaW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiByZXR1cm5UcnVlKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gd2hvbGVTbGljZShiZWdpbiwgZW5kLCBzaXplKSB7XG4gICAgcmV0dXJuIChiZWdpbiA9PT0gMCB8fCAoc2l6ZSAhPT0gdW5kZWZpbmVkICYmIGJlZ2luIDw9IC1zaXplKSkgJiZcbiAgICAgIChlbmQgPT09IHVuZGVmaW5lZCB8fCAoc2l6ZSAhPT0gdW5kZWZpbmVkICYmIGVuZCA+PSBzaXplKSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlQmVnaW4oYmVnaW4sIHNpemUpIHtcbiAgICByZXR1cm4gcmVzb2x2ZUluZGV4KGJlZ2luLCBzaXplLCAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc29sdmVFbmQoZW5kLCBzaXplKSB7XG4gICAgcmV0dXJuIHJlc29sdmVJbmRleChlbmQsIHNpemUsIHNpemUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZUluZGV4KGluZGV4LCBzaXplLCBkZWZhdWx0SW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXggPT09IHVuZGVmaW5lZCA/XG4gICAgICBkZWZhdWx0SW5kZXggOlxuICAgICAgaW5kZXggPCAwID9cbiAgICAgICAgTWF0aC5tYXgoMCwgc2l6ZSArIGluZGV4KSA6XG4gICAgICAgIHNpemUgPT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgaW5kZXggOlxuICAgICAgICAgIE1hdGgubWluKHNpemUsIGluZGV4KTtcbiAgfVxuXG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cblxuICB2YXIgSVRFUkFURV9LRVlTID0gMDtcbiAgdmFyIElURVJBVEVfVkFMVUVTID0gMTtcbiAgdmFyIElURVJBVEVfRU5UUklFUyA9IDI7XG5cbiAgdmFyIFJFQUxfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcblxuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gUkVBTF9JVEVSQVRPUl9TWU1CT0wgfHwgRkFVWF9JVEVSQVRPUl9TWU1CT0w7XG5cblxuICBmdW5jdGlvbiBJdGVyYXRvcihuZXh0KSB7XG4gICAgICB0aGlzLm5leHQgPSBuZXh0O1xuICAgIH1cblxuICAgIEl0ZXJhdG9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICdbSXRlcmF0b3JdJztcbiAgICB9O1xuXG5cbiAgSXRlcmF0b3IuS0VZUyA9IElURVJBVEVfS0VZUztcbiAgSXRlcmF0b3IuVkFMVUVTID0gSVRFUkFURV9WQUxVRVM7XG4gIEl0ZXJhdG9yLkVOVFJJRVMgPSBJVEVSQVRFX0VOVFJJRVM7XG5cbiAgSXRlcmF0b3IucHJvdG90eXBlLmluc3BlY3QgPVxuICBJdGVyYXRvci5wcm90b3R5cGUudG9Tb3VyY2UgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnRvU3RyaW5nKCk7IH1cbiAgSXRlcmF0b3IucHJvdG90eXBlW0lURVJBVE9SX1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cblxuICBmdW5jdGlvbiBpdGVyYXRvclZhbHVlKHR5cGUsIGssIHYsIGl0ZXJhdG9yUmVzdWx0KSB7XG4gICAgdmFyIHZhbHVlID0gdHlwZSA9PT0gMCA/IGsgOiB0eXBlID09PSAxID8gdiA6IFtrLCB2XTtcbiAgICBpdGVyYXRvclJlc3VsdCA/IChpdGVyYXRvclJlc3VsdC52YWx1ZSA9IHZhbHVlKSA6IChpdGVyYXRvclJlc3VsdCA9IHtcbiAgICAgIHZhbHVlOiB2YWx1ZSwgZG9uZTogZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlcmF0b3JSZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBpdGVyYXRvckRvbmUoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzSXRlcmF0b3IobWF5YmVJdGVyYWJsZSkge1xuICAgIHJldHVybiAhIWdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0l0ZXJhdG9yKG1heWJlSXRlcmF0b3IpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvciAmJiB0eXBlb2YgbWF5YmVJdGVyYXRvci5uZXh0ID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3IoaXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oaXRlcmFibGUpO1xuICAgIHJldHVybiBpdGVyYXRvckZuICYmIGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKGl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBpdGVyYWJsZSAmJiAoXG4gICAgICAoUkVBTF9JVEVSQVRPUl9TWU1CT0wgJiYgaXRlcmFibGVbUkVBTF9JVEVSQVRPUl9TWU1CT0xdKSB8fFxuICAgICAgaXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdXG4gICAgKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5sZW5ndGggPT09ICdudW1iZXInO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoU2VxLCBJdGVyYWJsZSk7XG4gICAgZnVuY3Rpb24gU2VxKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/IGVtcHR5U2VxdWVuY2UoKSA6XG4gICAgICAgIGlzSXRlcmFibGUodmFsdWUpID8gdmFsdWUudG9TZXEoKSA6IHNlcUZyb21WYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgU2VxLm9mID0gZnVuY3Rpb24oLyouLi52YWx1ZXMqLykge1xuICAgICAgcmV0dXJuIFNlcShhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBTZXEucHJvdG90eXBlLnRvU2VxID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgU2VxLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX190b1N0cmluZygnU2VxIHsnLCAnfScpO1xuICAgIH07XG5cbiAgICBTZXEucHJvdG90eXBlLmNhY2hlUmVzdWx0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXRoaXMuX2NhY2hlICYmIHRoaXMuX19pdGVyYXRlVW5jYWNoZWQpIHtcbiAgICAgICAgdGhpcy5fY2FjaGUgPSB0aGlzLmVudHJ5U2VxKCkudG9BcnJheSgpO1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLl9jYWNoZS5sZW5ndGg7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLy8gYWJzdHJhY3QgX19pdGVyYXRlVW5jYWNoZWQoZm4sIHJldmVyc2UpXG5cbiAgICBTZXEucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7XG4gICAgICByZXR1cm4gc2VxSXRlcmF0ZSh0aGlzLCBmbiwgcmV2ZXJzZSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIC8vIGFic3RyYWN0IF9faXRlcmF0b3JVbmNhY2hlZCh0eXBlLCByZXZlcnNlKVxuXG4gICAgU2VxLnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgcmV0dXJuIHNlcUl0ZXJhdG9yKHRoaXMsIHR5cGUsIHJldmVyc2UsIHRydWUpO1xuICAgIH07XG5cblxuXG4gIGNyZWF0ZUNsYXNzKEtleWVkU2VxLCBTZXEpO1xuICAgIGZ1bmN0aW9uIEtleWVkU2VxKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/XG4gICAgICAgIGVtcHR5U2VxdWVuY2UoKS50b0tleWVkU2VxKCkgOlxuICAgICAgICBpc0l0ZXJhYmxlKHZhbHVlKSA/XG4gICAgICAgICAgKGlzS2V5ZWQodmFsdWUpID8gdmFsdWUudG9TZXEoKSA6IHZhbHVlLmZyb21FbnRyeVNlcSgpKSA6XG4gICAgICAgICAga2V5ZWRTZXFGcm9tVmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIEtleWVkU2VxLnByb3RvdHlwZS50b0tleWVkU2VxID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5cblxuICBjcmVhdGVDbGFzcyhJbmRleGVkU2VxLCBTZXEpO1xuICAgIGZ1bmN0aW9uIEluZGV4ZWRTZXEodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gZW1wdHlTZXF1ZW5jZSgpIDpcbiAgICAgICAgIWlzSXRlcmFibGUodmFsdWUpID8gaW5kZXhlZFNlcUZyb21WYWx1ZSh2YWx1ZSkgOlxuICAgICAgICBpc0tleWVkKHZhbHVlKSA/IHZhbHVlLmVudHJ5U2VxKCkgOiB2YWx1ZS50b0luZGV4ZWRTZXEoKTtcbiAgICB9XG5cbiAgICBJbmRleGVkU2VxLm9mID0gZnVuY3Rpb24oLyouLi52YWx1ZXMqLykge1xuICAgICAgcmV0dXJuIEluZGV4ZWRTZXEoYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgSW5kZXhlZFNlcS5wcm90b3R5cGUudG9JbmRleGVkU2VxID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgSW5kZXhlZFNlcS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9fdG9TdHJpbmcoJ1NlcSBbJywgJ10nKTtcbiAgICB9O1xuXG4gICAgSW5kZXhlZFNlcS5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICAgIHJldHVybiBzZXFJdGVyYXRlKHRoaXMsIGZuLCByZXZlcnNlLCBmYWxzZSk7XG4gICAgfTtcblxuICAgIEluZGV4ZWRTZXEucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICByZXR1cm4gc2VxSXRlcmF0b3IodGhpcywgdHlwZSwgcmV2ZXJzZSwgZmFsc2UpO1xuICAgIH07XG5cblxuXG4gIGNyZWF0ZUNsYXNzKFNldFNlcSwgU2VxKTtcbiAgICBmdW5jdGlvbiBTZXRTZXEodmFsdWUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgPyBlbXB0eVNlcXVlbmNlKCkgOlxuICAgICAgICAhaXNJdGVyYWJsZSh2YWx1ZSkgPyBpbmRleGVkU2VxRnJvbVZhbHVlKHZhbHVlKSA6XG4gICAgICAgIGlzS2V5ZWQodmFsdWUpID8gdmFsdWUuZW50cnlTZXEoKSA6IHZhbHVlXG4gICAgICApLnRvU2V0U2VxKCk7XG4gICAgfVxuXG4gICAgU2V0U2VxLm9mID0gZnVuY3Rpb24oLyouLi52YWx1ZXMqLykge1xuICAgICAgcmV0dXJuIFNldFNlcShhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBTZXRTZXEucHJvdG90eXBlLnRvU2V0U2VxID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5cblxuICBTZXEuaXNTZXEgPSBpc1NlcTtcbiAgU2VxLktleWVkID0gS2V5ZWRTZXE7XG4gIFNlcS5TZXQgPSBTZXRTZXE7XG4gIFNlcS5JbmRleGVkID0gSW5kZXhlZFNlcTtcblxuICB2YXIgSVNfU0VRX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfU0VRX19AQCc7XG5cbiAgU2VxLnByb3RvdHlwZVtJU19TRVFfU0VOVElORUxdID0gdHJ1ZTtcblxuXG5cbiAgY3JlYXRlQ2xhc3MoQXJyYXlTZXEsIEluZGV4ZWRTZXEpO1xuICAgIGZ1bmN0aW9uIEFycmF5U2VxKGFycmF5KSB7XG4gICAgICB0aGlzLl9hcnJheSA9IGFycmF5O1xuICAgICAgdGhpcy5zaXplID0gYXJyYXkubGVuZ3RoO1xuICAgIH1cblxuICAgIEFycmF5U2VxLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihpbmRleCwgbm90U2V0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhcyhpbmRleCkgPyB0aGlzLl9hcnJheVt3cmFwSW5kZXgodGhpcywgaW5kZXgpXSA6IG5vdFNldFZhbHVlO1xuICAgIH07XG5cbiAgICBBcnJheVNlcS5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICAgIHZhciBhcnJheSA9IHRoaXMuX2FycmF5O1xuICAgICAgdmFyIG1heEluZGV4ID0gYXJyYXkubGVuZ3RoIC0gMTtcbiAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPD0gbWF4SW5kZXg7IGlpKyspIHtcbiAgICAgICAgaWYgKGZuKGFycmF5W3JldmVyc2UgPyBtYXhJbmRleCAtIGlpIDogaWldLCBpaSwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGlpICsgMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGlpO1xuICAgIH07XG5cbiAgICBBcnJheVNlcS5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIHZhciBhcnJheSA9IHRoaXMuX2FycmF5O1xuICAgICAgdmFyIG1heEluZGV4ID0gYXJyYXkubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBpaSA9IDA7XG4gICAgICByZXR1cm4gbmV3IEl0ZXJhdG9yKGZ1bmN0aW9uKCkgXG4gICAgICAgIHtyZXR1cm4gaWkgPiBtYXhJbmRleCA/XG4gICAgICAgICAgaXRlcmF0b3JEb25lKCkgOlxuICAgICAgICAgIGl0ZXJhdG9yVmFsdWUodHlwZSwgaWksIGFycmF5W3JldmVyc2UgPyBtYXhJbmRleCAtIGlpKysgOiBpaSsrXSl9XG4gICAgICApO1xuICAgIH07XG5cblxuXG4gIGNyZWF0ZUNsYXNzKE9iamVjdFNlcSwgS2V5ZWRTZXEpO1xuICAgIGZ1bmN0aW9uIE9iamVjdFNlcShvYmplY3QpIHtcbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcbiAgICAgIHRoaXMuX29iamVjdCA9IG9iamVjdDtcbiAgICAgIHRoaXMuX2tleXMgPSBrZXlzO1xuICAgICAgdGhpcy5zaXplID0ga2V5cy5sZW5ndGg7XG4gICAgfVxuXG4gICAgT2JqZWN0U2VxLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihrZXksIG5vdFNldFZhbHVlKSB7XG4gICAgICBpZiAobm90U2V0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICByZXR1cm4gbm90U2V0VmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fb2JqZWN0W2tleV07XG4gICAgfTtcblxuICAgIE9iamVjdFNlcS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5fb2JqZWN0Lmhhc093blByb3BlcnR5KGtleSk7XG4gICAgfTtcblxuICAgIE9iamVjdFNlcS5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICAgIHZhciBvYmplY3QgPSB0aGlzLl9vYmplY3Q7XG4gICAgICB2YXIga2V5cyA9IHRoaXMuX2tleXM7XG4gICAgICB2YXIgbWF4SW5kZXggPSBrZXlzLmxlbmd0aCAtIDE7XG4gICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDw9IG1heEluZGV4OyBpaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW3JldmVyc2UgPyBtYXhJbmRleCAtIGlpIDogaWldO1xuICAgICAgICBpZiAoZm4ob2JqZWN0W2tleV0sIGtleSwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGlpICsgMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGlpO1xuICAgIH07XG5cbiAgICBPYmplY3RTZXEucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICB2YXIgb2JqZWN0ID0gdGhpcy5fb2JqZWN0O1xuICAgICAgdmFyIGtleXMgPSB0aGlzLl9rZXlzO1xuICAgICAgdmFyIG1heEluZGV4ID0ga2V5cy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGlpID0gMDtcbiAgICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tyZXZlcnNlID8gbWF4SW5kZXggLSBpaSA6IGlpXTtcbiAgICAgICAgcmV0dXJuIGlpKysgPiBtYXhJbmRleCA/XG4gICAgICAgICAgaXRlcmF0b3JEb25lKCkgOlxuICAgICAgICAgIGl0ZXJhdG9yVmFsdWUodHlwZSwga2V5LCBvYmplY3Rba2V5XSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gIE9iamVjdFNlcS5wcm90b3R5cGVbSVNfT1JERVJFRF9TRU5USU5FTF0gPSB0cnVlO1xuXG5cbiAgY3JlYXRlQ2xhc3MoSXRlcmFibGVTZXEsIEluZGV4ZWRTZXEpO1xuICAgIGZ1bmN0aW9uIEl0ZXJhYmxlU2VxKGl0ZXJhYmxlKSB7XG4gICAgICB0aGlzLl9pdGVyYWJsZSA9IGl0ZXJhYmxlO1xuICAgICAgdGhpcy5zaXplID0gaXRlcmFibGUubGVuZ3RoIHx8IGl0ZXJhYmxlLnNpemU7XG4gICAgfVxuXG4gICAgSXRlcmFibGVTZXEucHJvdG90eXBlLl9faXRlcmF0ZVVuY2FjaGVkID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlUmVzdWx0KCkuX19pdGVyYXRlKGZuLCByZXZlcnNlKTtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVyYWJsZSA9IHRoaXMuX2l0ZXJhYmxlO1xuICAgICAgdmFyIGl0ZXJhdG9yID0gZ2V0SXRlcmF0b3IoaXRlcmFibGUpO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgaWYgKGlzSXRlcmF0b3IoaXRlcmF0b3IpKSB7XG4gICAgICAgIHZhciBzdGVwO1xuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGZuKHN0ZXAudmFsdWUsIGl0ZXJhdGlvbnMrKywgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVyYXRpb25zO1xuICAgIH07XG5cbiAgICBJdGVyYWJsZVNlcS5wcm90b3R5cGUuX19pdGVyYXRvclVuY2FjaGVkID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgaWYgKHJldmVyc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVSZXN1bHQoKS5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZXJhYmxlID0gdGhpcy5faXRlcmFibGU7XG4gICAgICB2YXIgaXRlcmF0b3IgPSBnZXRJdGVyYXRvcihpdGVyYWJsZSk7XG4gICAgICBpZiAoIWlzSXRlcmF0b3IoaXRlcmF0b3IpKSB7XG4gICAgICAgIHJldHVybiBuZXcgSXRlcmF0b3IoaXRlcmF0b3JEb25lKTtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIHN0ZXAuZG9uZSA/IHN0ZXAgOiBpdGVyYXRvclZhbHVlKHR5cGUsIGl0ZXJhdGlvbnMrKywgc3RlcC52YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG5cblxuICBjcmVhdGVDbGFzcyhJdGVyYXRvclNlcSwgSW5kZXhlZFNlcSk7XG4gICAgZnVuY3Rpb24gSXRlcmF0b3JTZXEoaXRlcmF0b3IpIHtcbiAgICAgIHRoaXMuX2l0ZXJhdG9yID0gaXRlcmF0b3I7XG4gICAgICB0aGlzLl9pdGVyYXRvckNhY2hlID0gW107XG4gICAgfVxuXG4gICAgSXRlcmF0b3JTZXEucHJvdG90eXBlLl9faXRlcmF0ZVVuY2FjaGVkID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlUmVzdWx0KCkuX19pdGVyYXRlKGZuLCByZXZlcnNlKTtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVyYXRvciA9IHRoaXMuX2l0ZXJhdG9yO1xuICAgICAgdmFyIGNhY2hlID0gdGhpcy5faXRlcmF0b3JDYWNoZTtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHdoaWxlIChpdGVyYXRpb25zIDwgY2FjaGUubGVuZ3RoKSB7XG4gICAgICAgIGlmIChmbihjYWNoZVtpdGVyYXRpb25zXSwgaXRlcmF0aW9ucysrLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gaXRlcmF0aW9ucztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIHN0ZXA7XG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIHZhciB2YWwgPSBzdGVwLnZhbHVlO1xuICAgICAgICBjYWNoZVtpdGVyYXRpb25zXSA9IHZhbDtcbiAgICAgICAgaWYgKGZuKHZhbCwgaXRlcmF0aW9ucysrLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gICAgfTtcblxuICAgIEl0ZXJhdG9yU2VxLnByb3RvdHlwZS5fX2l0ZXJhdG9yVW5jYWNoZWQgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVJlc3VsdCgpLl9faXRlcmF0b3IodHlwZSwgcmV2ZXJzZSk7XG4gICAgICB9XG4gICAgICB2YXIgaXRlcmF0b3IgPSB0aGlzLl9pdGVyYXRvcjtcbiAgICAgIHZhciBjYWNoZSA9IHRoaXMuX2l0ZXJhdG9yQ2FjaGU7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICByZXR1cm4gbmV3IEl0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgaWYgKGl0ZXJhdGlvbnMgPj0gY2FjaGUubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIHN0ZXAgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKHN0ZXAuZG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhY2hlW2l0ZXJhdGlvbnNdID0gc3RlcC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlcmF0b3JWYWx1ZSh0eXBlLCBpdGVyYXRpb25zLCBjYWNoZVtpdGVyYXRpb25zKytdKTtcbiAgICAgIH0pO1xuICAgIH07XG5cblxuXG5cbiAgLy8gIyBwcmFnbWEgSGVscGVyIGZ1bmN0aW9uc1xuXG4gIGZ1bmN0aW9uIGlzU2VxKG1heWJlU2VxKSB7XG4gICAgcmV0dXJuICEhKG1heWJlU2VxICYmIG1heWJlU2VxW0lTX1NFUV9TRU5USU5FTF0pO1xuICB9XG5cbiAgdmFyIEVNUFRZX1NFUTtcblxuICBmdW5jdGlvbiBlbXB0eVNlcXVlbmNlKCkge1xuICAgIHJldHVybiBFTVBUWV9TRVEgfHwgKEVNUFRZX1NFUSA9IG5ldyBBcnJheVNlcShbXSkpO1xuICB9XG5cbiAgZnVuY3Rpb24ga2V5ZWRTZXFGcm9tVmFsdWUodmFsdWUpIHtcbiAgICB2YXIgc2VxID1cbiAgICAgIEFycmF5LmlzQXJyYXkodmFsdWUpID8gbmV3IEFycmF5U2VxKHZhbHVlKS5mcm9tRW50cnlTZXEoKSA6XG4gICAgICBpc0l0ZXJhdG9yKHZhbHVlKSA/IG5ldyBJdGVyYXRvclNlcSh2YWx1ZSkuZnJvbUVudHJ5U2VxKCkgOlxuICAgICAgaGFzSXRlcmF0b3IodmFsdWUpID8gbmV3IEl0ZXJhYmxlU2VxKHZhbHVlKS5mcm9tRW50cnlTZXEoKSA6XG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gbmV3IE9iamVjdFNlcSh2YWx1ZSkgOlxuICAgICAgdW5kZWZpbmVkO1xuICAgIGlmICghc2VxKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAnRXhwZWN0ZWQgQXJyYXkgb3IgaXRlcmFibGUgb2JqZWN0IG9mIFtrLCB2XSBlbnRyaWVzLCAnK1xuICAgICAgICAnb3Iga2V5ZWQgb2JqZWN0OiAnICsgdmFsdWVcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBzZXE7XG4gIH1cblxuICBmdW5jdGlvbiBpbmRleGVkU2VxRnJvbVZhbHVlKHZhbHVlKSB7XG4gICAgdmFyIHNlcSA9IG1heWJlSW5kZXhlZFNlcUZyb21WYWx1ZSh2YWx1ZSk7XG4gICAgaWYgKCFzZXEpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdFeHBlY3RlZCBBcnJheSBvciBpdGVyYWJsZSBvYmplY3Qgb2YgdmFsdWVzOiAnICsgdmFsdWVcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBzZXE7XG4gIH1cblxuICBmdW5jdGlvbiBzZXFGcm9tVmFsdWUodmFsdWUpIHtcbiAgICB2YXIgc2VxID0gbWF5YmVJbmRleGVkU2VxRnJvbVZhbHVlKHZhbHVlKSB8fFxuICAgICAgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgbmV3IE9iamVjdFNlcSh2YWx1ZSkpO1xuICAgIGlmICghc2VxKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAnRXhwZWN0ZWQgQXJyYXkgb3IgaXRlcmFibGUgb2JqZWN0IG9mIHZhbHVlcywgb3Iga2V5ZWQgb2JqZWN0OiAnICsgdmFsdWVcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBzZXE7XG4gIH1cblxuICBmdW5jdGlvbiBtYXliZUluZGV4ZWRTZXFGcm9tVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgaXNBcnJheUxpa2UodmFsdWUpID8gbmV3IEFycmF5U2VxKHZhbHVlKSA6XG4gICAgICBpc0l0ZXJhdG9yKHZhbHVlKSA/IG5ldyBJdGVyYXRvclNlcSh2YWx1ZSkgOlxuICAgICAgaGFzSXRlcmF0b3IodmFsdWUpID8gbmV3IEl0ZXJhYmxlU2VxKHZhbHVlKSA6XG4gICAgICB1bmRlZmluZWRcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VxSXRlcmF0ZShzZXEsIGZuLCByZXZlcnNlLCB1c2VLZXlzKSB7XG4gICAgdmFyIGNhY2hlID0gc2VxLl9jYWNoZTtcbiAgICBpZiAoY2FjaGUpIHtcbiAgICAgIHZhciBtYXhJbmRleCA9IGNhY2hlLmxlbmd0aCAtIDE7XG4gICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDw9IG1heEluZGV4OyBpaSsrKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IGNhY2hlW3JldmVyc2UgPyBtYXhJbmRleCAtIGlpIDogaWldO1xuICAgICAgICBpZiAoZm4oZW50cnlbMV0sIHVzZUtleXMgPyBlbnRyeVswXSA6IGlpLCBzZXEpID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBpaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpaTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcS5fX2l0ZXJhdGVVbmNhY2hlZChmbiwgcmV2ZXJzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXFJdGVyYXRvcihzZXEsIHR5cGUsIHJldmVyc2UsIHVzZUtleXMpIHtcbiAgICB2YXIgY2FjaGUgPSBzZXEuX2NhY2hlO1xuICAgIGlmIChjYWNoZSkge1xuICAgICAgdmFyIG1heEluZGV4ID0gY2FjaGUubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBpaSA9IDA7XG4gICAgICByZXR1cm4gbmV3IEl0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gY2FjaGVbcmV2ZXJzZSA/IG1heEluZGV4IC0gaWkgOiBpaV07XG4gICAgICAgIHJldHVybiBpaSsrID4gbWF4SW5kZXggP1xuICAgICAgICAgIGl0ZXJhdG9yRG9uZSgpIDpcbiAgICAgICAgICBpdGVyYXRvclZhbHVlKHR5cGUsIHVzZUtleXMgPyBlbnRyeVswXSA6IGlpIC0gMSwgZW50cnlbMV0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBzZXEuX19pdGVyYXRvclVuY2FjaGVkKHR5cGUsIHJldmVyc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gZnJvbUpTKGpzb24sIGNvbnZlcnRlcikge1xuICAgIHJldHVybiBjb252ZXJ0ZXIgP1xuICAgICAgZnJvbUpTV2l0aChjb252ZXJ0ZXIsIGpzb24sICcnLCB7Jyc6IGpzb259KSA6XG4gICAgICBmcm9tSlNEZWZhdWx0KGpzb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gZnJvbUpTV2l0aChjb252ZXJ0ZXIsIGpzb24sIGtleSwgcGFyZW50SlNPTikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGpzb24pKSB7XG4gICAgICByZXR1cm4gY29udmVydGVyLmNhbGwocGFyZW50SlNPTiwga2V5LCBJbmRleGVkU2VxKGpzb24pLm1hcChmdW5jdGlvbih2LCBrKSAge3JldHVybiBmcm9tSlNXaXRoKGNvbnZlcnRlciwgdiwgaywganNvbil9KSk7XG4gICAgfVxuICAgIGlmIChpc1BsYWluT2JqKGpzb24pKSB7XG4gICAgICByZXR1cm4gY29udmVydGVyLmNhbGwocGFyZW50SlNPTiwga2V5LCBLZXllZFNlcShqc29uKS5tYXAoZnVuY3Rpb24odiwgaykgIHtyZXR1cm4gZnJvbUpTV2l0aChjb252ZXJ0ZXIsIHYsIGssIGpzb24pfSkpO1xuICAgIH1cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZyb21KU0RlZmF1bHQoanNvbikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGpzb24pKSB7XG4gICAgICByZXR1cm4gSW5kZXhlZFNlcShqc29uKS5tYXAoZnJvbUpTRGVmYXVsdCkudG9MaXN0KCk7XG4gICAgfVxuICAgIGlmIChpc1BsYWluT2JqKGpzb24pKSB7XG4gICAgICByZXR1cm4gS2V5ZWRTZXEoanNvbikubWFwKGZyb21KU0RlZmF1bHQpLnRvTWFwKCk7XG4gICAgfVxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNQbGFpbk9iaih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiAodmFsdWUuY29uc3RydWN0b3IgPT09IE9iamVjdCB8fCB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBleHRlbnNpb24gb2YgdGhlIFwic2FtZS12YWx1ZVwiIGFsZ29yaXRobSBhcyBbZGVzY3JpYmVkIGZvciB1c2UgYnkgRVM2IE1hcFxuICAgKiBhbmQgU2V0XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXAjS2V5X2VxdWFsaXR5KVxuICAgKlxuICAgKiBOYU4gaXMgY29uc2lkZXJlZCB0aGUgc2FtZSBhcyBOYU4sIGhvd2V2ZXIgLTAgYW5kIDAgYXJlIGNvbnNpZGVyZWQgdGhlIHNhbWVcbiAgICogdmFsdWUsIHdoaWNoIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBhbGdvcml0aG0gZGVzY3JpYmVkIGJ5XG4gICAqIFtgT2JqZWN0LmlzYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzKS5cbiAgICpcbiAgICogVGhpcyBpcyBleHRlbmRlZCBmdXJ0aGVyIHRvIGFsbG93IE9iamVjdHMgdG8gZGVzY3JpYmUgdGhlIHZhbHVlcyB0aGV5XG4gICAqIHJlcHJlc2VudCwgYnkgd2F5IG9mIGB2YWx1ZU9mYCBvciBgZXF1YWxzYCAoYW5kIGBoYXNoQ29kZWApLlxuICAgKlxuICAgKiBOb3RlOiBiZWNhdXNlIG9mIHRoaXMgZXh0ZW5zaW9uLCB0aGUga2V5IGVxdWFsaXR5IG9mIEltbXV0YWJsZS5NYXAgYW5kIHRoZVxuICAgKiB2YWx1ZSBlcXVhbGl0eSBvZiBJbW11dGFibGUuU2V0IHdpbGwgZGlmZmVyIGZyb20gRVM2IE1hcCBhbmQgU2V0LlxuICAgKlxuICAgKiAjIyMgRGVmaW5pbmcgY3VzdG9tIHZhbHVlc1xuICAgKlxuICAgKiBUaGUgZWFzaWVzdCB3YXkgdG8gZGVzY3JpYmUgdGhlIHZhbHVlIGFuIG9iamVjdCByZXByZXNlbnRzIGlzIGJ5IGltcGxlbWVudGluZ1xuICAgKiBgdmFsdWVPZmAuIEZvciBleGFtcGxlLCBgRGF0ZWAgcmVwcmVzZW50cyBhIHZhbHVlIGJ5IHJldHVybmluZyBhIHVuaXhcbiAgICogdGltZXN0YW1wIGZvciBgdmFsdWVPZmA6XG4gICAqXG4gICAqICAgICB2YXIgZGF0ZTEgPSBuZXcgRGF0ZSgxMjM0NTY3ODkwMDAwKTsgLy8gRnJpIEZlYiAxMyAyMDA5IC4uLlxuICAgKiAgICAgdmFyIGRhdGUyID0gbmV3IERhdGUoMTIzNDU2Nzg5MDAwMCk7XG4gICAqICAgICBkYXRlMS52YWx1ZU9mKCk7IC8vIDEyMzQ1Njc4OTAwMDBcbiAgICogICAgIGFzc2VydCggZGF0ZTEgIT09IGRhdGUyICk7XG4gICAqICAgICBhc3NlcnQoIEltbXV0YWJsZS5pcyggZGF0ZTEsIGRhdGUyICkgKTtcbiAgICpcbiAgICogTm90ZTogb3ZlcnJpZGluZyBgdmFsdWVPZmAgbWF5IGhhdmUgb3RoZXIgaW1wbGljYXRpb25zIGlmIHlvdSB1c2UgdGhpcyBvYmplY3RcbiAgICogd2hlcmUgSmF2YVNjcmlwdCBleHBlY3RzIGEgcHJpbWl0aXZlLCBzdWNoIGFzIGltcGxpY2l0IHN0cmluZyBjb2VyY2lvbi5cbiAgICpcbiAgICogRm9yIG1vcmUgY29tcGxleCB0eXBlcywgZXNwZWNpYWxseSBjb2xsZWN0aW9ucywgaW1wbGVtZW50aW5nIGB2YWx1ZU9mYCBtYXlcbiAgICogbm90IGJlIHBlcmZvcm1hbnQuIEFuIGFsdGVybmF0aXZlIGlzIHRvIGltcGxlbWVudCBgZXF1YWxzYCBhbmQgYGhhc2hDb2RlYC5cbiAgICpcbiAgICogYGVxdWFsc2AgdGFrZXMgYW5vdGhlciBvYmplY3QsIHByZXN1bWFibHkgb2Ygc2ltaWxhciB0eXBlLCBhbmQgcmV0dXJucyB0cnVlXG4gICAqIGlmIHRoZSBpdCBpcyBlcXVhbC4gRXF1YWxpdHkgaXMgc3ltbWV0cmljYWwsIHNvIHRoZSBzYW1lIHJlc3VsdCBzaG91bGQgYmVcbiAgICogcmV0dXJuZWQgaWYgdGhpcyBhbmQgdGhlIGFyZ3VtZW50IGFyZSBmbGlwcGVkLlxuICAgKlxuICAgKiAgICAgYXNzZXJ0KCBhLmVxdWFscyhiKSA9PT0gYi5lcXVhbHMoYSkgKTtcbiAgICpcbiAgICogYGhhc2hDb2RlYCByZXR1cm5zIGEgMzJiaXQgaW50ZWdlciBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBvYmplY3Qgd2hpY2ggd2lsbFxuICAgKiBiZSB1c2VkIHRvIGRldGVybWluZSBob3cgdG8gc3RvcmUgdGhlIHZhbHVlIG9iamVjdCBpbiBhIE1hcCBvciBTZXQuIFlvdSBtdXN0XG4gICAqIHByb3ZpZGUgYm90aCBvciBuZWl0aGVyIG1ldGhvZHMsIG9uZSBtdXN0IG5vdCBleGlzdCB3aXRob3V0IHRoZSBvdGhlci5cbiAgICpcbiAgICogQWxzbywgYW4gaW1wb3J0YW50IHJlbGF0aW9uc2hpcCBiZXR3ZWVuIHRoZXNlIG1ldGhvZHMgbXVzdCBiZSB1cGhlbGQ6IGlmIHR3b1xuICAgKiB2YWx1ZXMgYXJlIGVxdWFsLCB0aGV5ICptdXN0KiByZXR1cm4gdGhlIHNhbWUgaGFzaENvZGUuIElmIHRoZSB2YWx1ZXMgYXJlIG5vdFxuICAgKiBlcXVhbCwgdGhleSBtaWdodCBoYXZlIHRoZSBzYW1lIGhhc2hDb2RlOyB0aGlzIGlzIGNhbGxlZCBhIGhhc2ggY29sbGlzaW9uLFxuICAgKiBhbmQgd2hpbGUgdW5kZXNpcmFibGUgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIGl0IGlzIGFjY2VwdGFibGUuXG4gICAqXG4gICAqICAgICBpZiAoYS5lcXVhbHMoYikpIHtcbiAgICogICAgICAgYXNzZXJ0KCBhLmhhc2hDb2RlKCkgPT09IGIuaGFzaENvZGUoKSApO1xuICAgKiAgICAgfVxuICAgKlxuICAgKiBBbGwgSW1tdXRhYmxlIGNvbGxlY3Rpb25zIGltcGxlbWVudCBgZXF1YWxzYCBhbmQgYGhhc2hDb2RlYC5cbiAgICpcbiAgICovXG4gIGZ1bmN0aW9uIGlzKHZhbHVlQSwgdmFsdWVCKSB7XG4gICAgaWYgKHZhbHVlQSA9PT0gdmFsdWVCIHx8ICh2YWx1ZUEgIT09IHZhbHVlQSAmJiB2YWx1ZUIgIT09IHZhbHVlQikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXZhbHVlQSB8fCAhdmFsdWVCKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWVBLnZhbHVlT2YgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgdHlwZW9mIHZhbHVlQi52YWx1ZU9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YWx1ZUEgPSB2YWx1ZUEudmFsdWVPZigpO1xuICAgICAgdmFsdWVCID0gdmFsdWVCLnZhbHVlT2YoKTtcbiAgICAgIGlmICh2YWx1ZUEgPT09IHZhbHVlQiB8fCAodmFsdWVBICE9PSB2YWx1ZUEgJiYgdmFsdWVCICE9PSB2YWx1ZUIpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKCF2YWx1ZUEgfHwgIXZhbHVlQikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWVBLmVxdWFscyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICB0eXBlb2YgdmFsdWVCLmVxdWFscyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICB2YWx1ZUEuZXF1YWxzKHZhbHVlQikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBkZWVwRXF1YWwoYSwgYikge1xuICAgIGlmIChhID09PSBiKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAhaXNJdGVyYWJsZShiKSB8fFxuICAgICAgYS5zaXplICE9PSB1bmRlZmluZWQgJiYgYi5zaXplICE9PSB1bmRlZmluZWQgJiYgYS5zaXplICE9PSBiLnNpemUgfHxcbiAgICAgIGEuX19oYXNoICE9PSB1bmRlZmluZWQgJiYgYi5fX2hhc2ggIT09IHVuZGVmaW5lZCAmJiBhLl9faGFzaCAhPT0gYi5fX2hhc2ggfHxcbiAgICAgIGlzS2V5ZWQoYSkgIT09IGlzS2V5ZWQoYikgfHxcbiAgICAgIGlzSW5kZXhlZChhKSAhPT0gaXNJbmRleGVkKGIpIHx8XG4gICAgICBpc09yZGVyZWQoYSkgIT09IGlzT3JkZXJlZChiKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChhLnNpemUgPT09IDAgJiYgYi5zaXplID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgbm90QXNzb2NpYXRpdmUgPSAhaXNBc3NvY2lhdGl2ZShhKTtcblxuICAgIGlmIChpc09yZGVyZWQoYSkpIHtcbiAgICAgIHZhciBlbnRyaWVzID0gYS5lbnRyaWVzKCk7XG4gICAgICByZXR1cm4gYi5ldmVyeShmdW5jdGlvbih2LCBrKSAge1xuICAgICAgICB2YXIgZW50cnkgPSBlbnRyaWVzLm5leHQoKS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIGVudHJ5ICYmIGlzKGVudHJ5WzFdLCB2KSAmJiAobm90QXNzb2NpYXRpdmUgfHwgaXMoZW50cnlbMF0sIGspKTtcbiAgICAgIH0pICYmIGVudHJpZXMubmV4dCgpLmRvbmU7XG4gICAgfVxuXG4gICAgdmFyIGZsaXBwZWQgPSBmYWxzZTtcblxuICAgIGlmIChhLnNpemUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGIuc2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYS5jYWNoZVJlc3VsdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGEuY2FjaGVSZXN1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmxpcHBlZCA9IHRydWU7XG4gICAgICAgIHZhciBfID0gYTtcbiAgICAgICAgYSA9IGI7XG4gICAgICAgIGIgPSBfO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBhbGxFcXVhbCA9IHRydWU7XG4gICAgdmFyIGJTaXplID0gYi5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaykgIHtcbiAgICAgIGlmIChub3RBc3NvY2lhdGl2ZSA/ICFhLmhhcyh2KSA6XG4gICAgICAgICAgZmxpcHBlZCA/ICFpcyh2LCBhLmdldChrLCBOT1RfU0VUKSkgOiAhaXMoYS5nZXQoaywgTk9UX1NFVCksIHYpKSB7XG4gICAgICAgIGFsbEVxdWFsID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBhbGxFcXVhbCAmJiBhLnNpemUgPT09IGJTaXplO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoUmVwZWF0LCBJbmRleGVkU2VxKTtcblxuICAgIGZ1bmN0aW9uIFJlcGVhdCh2YWx1ZSwgdGltZXMpIHtcbiAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZXBlYXQpKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVwZWF0KHZhbHVlLCB0aW1lcyk7XG4gICAgICB9XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5zaXplID0gdGltZXMgPT09IHVuZGVmaW5lZCA/IEluZmluaXR5IDogTWF0aC5tYXgoMCwgdGltZXMpO1xuICAgICAgaWYgKHRoaXMuc2l6ZSA9PT0gMCkge1xuICAgICAgICBpZiAoRU1QVFlfUkVQRUFUKSB7XG4gICAgICAgICAgcmV0dXJuIEVNUFRZX1JFUEVBVDtcbiAgICAgICAgfVxuICAgICAgICBFTVBUWV9SRVBFQVQgPSB0aGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIFJlcGVhdC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuICdSZXBlYXQgW10nO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdSZXBlYXQgWyAnICsgdGhpcy5fdmFsdWUgKyAnICcgKyB0aGlzLnNpemUgKyAnIHRpbWVzIF0nO1xuICAgIH07XG5cbiAgICBSZXBlYXQucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGluZGV4LCBub3RTZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzKGluZGV4KSA/IHRoaXMuX3ZhbHVlIDogbm90U2V0VmFsdWU7XG4gICAgfTtcblxuICAgIFJlcGVhdC5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbihzZWFyY2hWYWx1ZSkge1xuICAgICAgcmV0dXJuIGlzKHRoaXMuX3ZhbHVlLCBzZWFyY2hWYWx1ZSk7XG4gICAgfTtcblxuICAgIFJlcGVhdC5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbihiZWdpbiwgZW5kKSB7XG4gICAgICB2YXIgc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICAgIHJldHVybiB3aG9sZVNsaWNlKGJlZ2luLCBlbmQsIHNpemUpID8gdGhpcyA6XG4gICAgICAgIG5ldyBSZXBlYXQodGhpcy5fdmFsdWUsIHJlc29sdmVFbmQoZW5kLCBzaXplKSAtIHJlc29sdmVCZWdpbihiZWdpbiwgc2l6ZSkpO1xuICAgIH07XG5cbiAgICBSZXBlYXQucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBSZXBlYXQucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbihzZWFyY2hWYWx1ZSkge1xuICAgICAgaWYgKGlzKHRoaXMuX3ZhbHVlLCBzZWFyY2hWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfTtcblxuICAgIFJlcGVhdC5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbihzZWFyY2hWYWx1ZSkge1xuICAgICAgaWYgKGlzKHRoaXMuX3ZhbHVlLCBzZWFyY2hWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuXG4gICAgUmVwZWF0LnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge1xuICAgICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IHRoaXMuc2l6ZTsgaWkrKykge1xuICAgICAgICBpZiAoZm4odGhpcy5fdmFsdWUsIGlpLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gaWkgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaWk7XG4gICAgfTtcblxuICAgIFJlcGVhdC5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHZhciBpaSA9IDA7XG4gICAgICByZXR1cm4gbmV3IEl0ZXJhdG9yKGZ1bmN0aW9uKCkgXG4gICAgICAgIHtyZXR1cm4gaWkgPCB0aGlzJDAuc2l6ZSA/IGl0ZXJhdG9yVmFsdWUodHlwZSwgaWkrKywgdGhpcyQwLl92YWx1ZSkgOiBpdGVyYXRvckRvbmUoKX1cbiAgICAgICk7XG4gICAgfTtcblxuICAgIFJlcGVhdC5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgICAgIHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFJlcGVhdCA/XG4gICAgICAgIGlzKHRoaXMuX3ZhbHVlLCBvdGhlci5fdmFsdWUpIDpcbiAgICAgICAgZGVlcEVxdWFsKG90aGVyKTtcbiAgICB9O1xuXG5cbiAgdmFyIEVNUFRZX1JFUEVBVDtcblxuICBmdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBlcnJvcikge1xuICAgIGlmICghY29uZGl0aW9uKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoUmFuZ2UsIEluZGV4ZWRTZXEpO1xuXG4gICAgZnVuY3Rpb24gUmFuZ2Uoc3RhcnQsIGVuZCwgc3RlcCkge1xuICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJhbmdlKSkge1xuICAgICAgICByZXR1cm4gbmV3IFJhbmdlKHN0YXJ0LCBlbmQsIHN0ZXApO1xuICAgICAgfVxuICAgICAgaW52YXJpYW50KHN0ZXAgIT09IDAsICdDYW5ub3Qgc3RlcCBhIFJhbmdlIGJ5IDAnKTtcbiAgICAgIHN0YXJ0ID0gc3RhcnQgfHwgMDtcbiAgICAgIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlbmQgPSBJbmZpbml0eTtcbiAgICAgIH1cbiAgICAgIHN0ZXAgPSBzdGVwID09PSB1bmRlZmluZWQgPyAxIDogTWF0aC5hYnMoc3RlcCk7XG4gICAgICBpZiAoZW5kIDwgc3RhcnQpIHtcbiAgICAgICAgc3RlcCA9IC1zdGVwO1xuICAgICAgfVxuICAgICAgdGhpcy5fc3RhcnQgPSBzdGFydDtcbiAgICAgIHRoaXMuX2VuZCA9IGVuZDtcbiAgICAgIHRoaXMuX3N0ZXAgPSBzdGVwO1xuICAgICAgdGhpcy5zaXplID0gTWF0aC5tYXgoMCwgTWF0aC5jZWlsKChlbmQgLSBzdGFydCkgLyBzdGVwIC0gMSkgKyAxKTtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IDApIHtcbiAgICAgICAgaWYgKEVNUFRZX1JBTkdFKSB7XG4gICAgICAgICAgcmV0dXJuIEVNUFRZX1JBTkdFO1xuICAgICAgICB9XG4gICAgICAgIEVNUFRZX1JBTkdFID0gdGhpcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSYW5nZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuICdSYW5nZSBbXSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ1JhbmdlIFsgJyArXG4gICAgICAgIHRoaXMuX3N0YXJ0ICsgJy4uLicgKyB0aGlzLl9lbmQgK1xuICAgICAgICAodGhpcy5fc3RlcCAhPT0gMSA/ICcgYnkgJyArIHRoaXMuX3N0ZXAgOiAnJykgK1xuICAgICAgJyBdJztcbiAgICB9O1xuXG4gICAgUmFuZ2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGluZGV4LCBub3RTZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzKGluZGV4KSA/XG4gICAgICAgIHRoaXMuX3N0YXJ0ICsgd3JhcEluZGV4KHRoaXMsIGluZGV4KSAqIHRoaXMuX3N0ZXAgOlxuICAgICAgICBub3RTZXRWYWx1ZTtcbiAgICB9O1xuXG4gICAgUmFuZ2UucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24oc2VhcmNoVmFsdWUpIHtcbiAgICAgIHZhciBwb3NzaWJsZUluZGV4ID0gKHNlYXJjaFZhbHVlIC0gdGhpcy5fc3RhcnQpIC8gdGhpcy5fc3RlcDtcbiAgICAgIHJldHVybiBwb3NzaWJsZUluZGV4ID49IDAgJiZcbiAgICAgICAgcG9zc2libGVJbmRleCA8IHRoaXMuc2l6ZSAmJlxuICAgICAgICBwb3NzaWJsZUluZGV4ID09PSBNYXRoLmZsb29yKHBvc3NpYmxlSW5kZXgpO1xuICAgIH07XG5cbiAgICBSYW5nZS5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbihiZWdpbiwgZW5kKSB7XG4gICAgICBpZiAod2hvbGVTbGljZShiZWdpbiwgZW5kLCB0aGlzLnNpemUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgYmVnaW4gPSByZXNvbHZlQmVnaW4oYmVnaW4sIHRoaXMuc2l6ZSk7XG4gICAgICBlbmQgPSByZXNvbHZlRW5kKGVuZCwgdGhpcy5zaXplKTtcbiAgICAgIGlmIChlbmQgPD0gYmVnaW4pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSYW5nZSgwLCAwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUmFuZ2UodGhpcy5nZXQoYmVnaW4sIHRoaXMuX2VuZCksIHRoaXMuZ2V0KGVuZCwgdGhpcy5fZW5kKSwgdGhpcy5fc3RlcCk7XG4gICAgfTtcblxuICAgIFJhbmdlLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24oc2VhcmNoVmFsdWUpIHtcbiAgICAgIHZhciBvZmZzZXRWYWx1ZSA9IHNlYXJjaFZhbHVlIC0gdGhpcy5fc3RhcnQ7XG4gICAgICBpZiAob2Zmc2V0VmFsdWUgJSB0aGlzLl9zdGVwID09PSAwKSB7XG4gICAgICAgIHZhciBpbmRleCA9IG9mZnNldFZhbHVlIC8gdGhpcy5fc3RlcDtcbiAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLnNpemUpIHtcbiAgICAgICAgICByZXR1cm4gaW5kZXhcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG5cbiAgICBSYW5nZS5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbihzZWFyY2hWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5kZXhPZihzZWFyY2hWYWx1ZSk7XG4gICAgfTtcblxuICAgIFJhbmdlLnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge1xuICAgICAgdmFyIG1heEluZGV4ID0gdGhpcy5zaXplIC0gMTtcbiAgICAgIHZhciBzdGVwID0gdGhpcy5fc3RlcDtcbiAgICAgIHZhciB2YWx1ZSA9IHJldmVyc2UgPyB0aGlzLl9zdGFydCArIG1heEluZGV4ICogc3RlcCA6IHRoaXMuX3N0YXJ0O1xuICAgICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8PSBtYXhJbmRleDsgaWkrKykge1xuICAgICAgICBpZiAoZm4odmFsdWUsIGlpLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gaWkgKyAxO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlICs9IHJldmVyc2UgPyAtc3RlcCA6IHN0ZXA7XG4gICAgICB9XG4gICAgICByZXR1cm4gaWk7XG4gICAgfTtcblxuICAgIFJhbmdlLnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgdmFyIG1heEluZGV4ID0gdGhpcy5zaXplIC0gMTtcbiAgICAgIHZhciBzdGVwID0gdGhpcy5fc3RlcDtcbiAgICAgIHZhciB2YWx1ZSA9IHJldmVyc2UgPyB0aGlzLl9zdGFydCArIG1heEluZGV4ICogc3RlcCA6IHRoaXMuX3N0YXJ0O1xuICAgICAgdmFyIGlpID0gMDtcbiAgICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB2YXIgdiA9IHZhbHVlO1xuICAgICAgICB2YWx1ZSArPSByZXZlcnNlID8gLXN0ZXAgOiBzdGVwO1xuICAgICAgICByZXR1cm4gaWkgPiBtYXhJbmRleCA/IGl0ZXJhdG9yRG9uZSgpIDogaXRlcmF0b3JWYWx1ZSh0eXBlLCBpaSsrLCB2KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBSYW5nZS5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgICAgIHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFJhbmdlID9cbiAgICAgICAgdGhpcy5fc3RhcnQgPT09IG90aGVyLl9zdGFydCAmJlxuICAgICAgICB0aGlzLl9lbmQgPT09IG90aGVyLl9lbmQgJiZcbiAgICAgICAgdGhpcy5fc3RlcCA9PT0gb3RoZXIuX3N0ZXAgOlxuICAgICAgICBkZWVwRXF1YWwodGhpcywgb3RoZXIpO1xuICAgIH07XG5cblxuICB2YXIgRU1QVFlfUkFOR0U7XG5cbiAgY3JlYXRlQ2xhc3MoQ29sbGVjdGlvbiwgSXRlcmFibGUpO1xuICAgIGZ1bmN0aW9uIENvbGxlY3Rpb24oKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0Fic3RyYWN0Jyk7XG4gICAgfVxuXG5cbiAgY3JlYXRlQ2xhc3MoS2V5ZWRDb2xsZWN0aW9uLCBDb2xsZWN0aW9uKTtmdW5jdGlvbiBLZXllZENvbGxlY3Rpb24oKSB7fVxuXG4gIGNyZWF0ZUNsYXNzKEluZGV4ZWRDb2xsZWN0aW9uLCBDb2xsZWN0aW9uKTtmdW5jdGlvbiBJbmRleGVkQ29sbGVjdGlvbigpIHt9XG5cbiAgY3JlYXRlQ2xhc3MoU2V0Q29sbGVjdGlvbiwgQ29sbGVjdGlvbik7ZnVuY3Rpb24gU2V0Q29sbGVjdGlvbigpIHt9XG5cblxuICBDb2xsZWN0aW9uLktleWVkID0gS2V5ZWRDb2xsZWN0aW9uO1xuICBDb2xsZWN0aW9uLkluZGV4ZWQgPSBJbmRleGVkQ29sbGVjdGlvbjtcbiAgQ29sbGVjdGlvbi5TZXQgPSBTZXRDb2xsZWN0aW9uO1xuXG4gIHZhciBpbXVsID1cbiAgICB0eXBlb2YgTWF0aC5pbXVsID09PSAnZnVuY3Rpb24nICYmIE1hdGguaW11bCgweGZmZmZmZmZmLCAyKSA9PT0gLTIgP1xuICAgIE1hdGguaW11bCA6XG4gICAgZnVuY3Rpb24gaW11bChhLCBiKSB7XG4gICAgICBhID0gYSB8IDA7IC8vIGludFxuICAgICAgYiA9IGIgfCAwOyAvLyBpbnRcbiAgICAgIHZhciBjID0gYSAmIDB4ZmZmZjtcbiAgICAgIHZhciBkID0gYiAmIDB4ZmZmZjtcbiAgICAgIC8vIFNoaWZ0IGJ5IDAgZml4ZXMgdGhlIHNpZ24gb24gdGhlIGhpZ2ggcGFydC5cbiAgICAgIHJldHVybiAoYyAqIGQpICsgKCgoKGEgPj4+IDE2KSAqIGQgKyBjICogKGIgPj4+IDE2KSkgPDwgMTYpID4+PiAwKSB8IDA7IC8vIGludFxuICAgIH07XG5cbiAgLy8gdjggaGFzIGFuIG9wdGltaXphdGlvbiBmb3Igc3RvcmluZyAzMS1iaXQgc2lnbmVkIG51bWJlcnMuXG4gIC8vIFZhbHVlcyB3aGljaCBoYXZlIGVpdGhlciAwMCBvciAxMSBhcyB0aGUgaGlnaCBvcmRlciBiaXRzIHF1YWxpZnkuXG4gIC8vIFRoaXMgZnVuY3Rpb24gZHJvcHMgdGhlIGhpZ2hlc3Qgb3JkZXIgYml0IGluIGEgc2lnbmVkIG51bWJlciwgbWFpbnRhaW5pbmdcbiAgLy8gdGhlIHNpZ24gYml0LlxuICBmdW5jdGlvbiBzbWkoaTMyKSB7XG4gICAgcmV0dXJuICgoaTMyID4+PiAxKSAmIDB4NDAwMDAwMDApIHwgKGkzMiAmIDB4QkZGRkZGRkYpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzaChvKSB7XG4gICAgaWYgKG8gPT09IGZhbHNlIHx8IG8gPT09IG51bGwgfHwgbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvLnZhbHVlT2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG8gPSBvLnZhbHVlT2YoKTtcbiAgICAgIGlmIChvID09PSBmYWxzZSB8fCBvID09PSBudWxsIHx8IG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG8gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBvO1xuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKG8gIT09IG8gfHwgbyA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICB2YXIgaCA9IG8gfCAwO1xuICAgICAgaWYgKGggIT09IG8pIHtcbiAgICAgICAgaCBePSBvICogMHhGRkZGRkZGRjtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChvID4gMHhGRkZGRkZGRikge1xuICAgICAgICBvIC89IDB4RkZGRkZGRkY7XG4gICAgICAgIGggXj0gbztcbiAgICAgIH1cbiAgICAgIHJldHVybiBzbWkoaCk7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG8ubGVuZ3RoID4gU1RSSU5HX0hBU0hfQ0FDSEVfTUlOX1NUUkxFTiA/IGNhY2hlZEhhc2hTdHJpbmcobykgOiBoYXNoU3RyaW5nKG8pO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG8uaGFzaENvZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBvLmhhc2hDb2RlKCk7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGhhc2hKU09iaihvKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvLnRvU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaGFzaFN0cmluZyhvLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZhbHVlIHR5cGUgJyArIHR5cGUgKyAnIGNhbm5vdCBiZSBoYXNoZWQuJyk7XG4gIH1cblxuICBmdW5jdGlvbiBjYWNoZWRIYXNoU3RyaW5nKHN0cmluZykge1xuICAgIHZhciBoYXNoID0gc3RyaW5nSGFzaENhY2hlW3N0cmluZ107XG4gICAgaWYgKGhhc2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzaCA9IGhhc2hTdHJpbmcoc3RyaW5nKTtcbiAgICAgIGlmIChTVFJJTkdfSEFTSF9DQUNIRV9TSVpFID09PSBTVFJJTkdfSEFTSF9DQUNIRV9NQVhfU0laRSkge1xuICAgICAgICBTVFJJTkdfSEFTSF9DQUNIRV9TSVpFID0gMDtcbiAgICAgICAgc3RyaW5nSGFzaENhY2hlID0ge307XG4gICAgICB9XG4gICAgICBTVFJJTkdfSEFTSF9DQUNIRV9TSVpFKys7XG4gICAgICBzdHJpbmdIYXNoQ2FjaGVbc3RyaW5nXSA9IGhhc2g7XG4gICAgfVxuICAgIHJldHVybiBoYXNoO1xuICB9XG5cbiAgLy8gaHR0cDovL2pzcGVyZi5jb20vaGFzaGluZy1zdHJpbmdzXG4gIGZ1bmN0aW9uIGhhc2hTdHJpbmcoc3RyaW5nKSB7XG4gICAgLy8gVGhpcyBpcyB0aGUgaGFzaCBmcm9tIEpWTVxuICAgIC8vIFRoZSBoYXNoIGNvZGUgZm9yIGEgc3RyaW5nIGlzIGNvbXB1dGVkIGFzXG4gICAgLy8gc1swXSAqIDMxIF4gKG4gLSAxKSArIHNbMV0gKiAzMSBeIChuIC0gMikgKyAuLi4gKyBzW24gLSAxXSxcbiAgICAvLyB3aGVyZSBzW2ldIGlzIHRoZSBpdGggY2hhcmFjdGVyIG9mIHRoZSBzdHJpbmcgYW5kIG4gaXMgdGhlIGxlbmd0aCBvZlxuICAgIC8vIHRoZSBzdHJpbmcuIFdlIFwibW9kXCIgdGhlIHJlc3VsdCB0byBtYWtlIGl0IGJldHdlZW4gMCAoaW5jbHVzaXZlKSBhbmQgMl4zMVxuICAgIC8vIChleGNsdXNpdmUpIGJ5IGRyb3BwaW5nIGhpZ2ggYml0cy5cbiAgICB2YXIgaGFzaCA9IDA7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IHN0cmluZy5sZW5ndGg7IGlpKyspIHtcbiAgICAgIGhhc2ggPSAzMSAqIGhhc2ggKyBzdHJpbmcuY2hhckNvZGVBdChpaSkgfCAwO1xuICAgIH1cbiAgICByZXR1cm4gc21pKGhhc2gpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzaEpTT2JqKG9iaikge1xuICAgIHZhciBoYXNoO1xuICAgIGlmICh1c2luZ1dlYWtNYXApIHtcbiAgICAgIGhhc2ggPSB3ZWFrTWFwLmdldChvYmopO1xuICAgICAgaWYgKGhhc2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gaGFzaDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNoID0gb2JqW1VJRF9IQVNIX0tFWV07XG4gICAgaWYgKGhhc2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGhhc2g7XG4gICAgfVxuXG4gICAgaWYgKCFjYW5EZWZpbmVQcm9wZXJ0eSkge1xuICAgICAgaGFzaCA9IG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZSAmJiBvYmoucHJvcGVydHlJc0VudW1lcmFibGVbVUlEX0hBU0hfS0VZXTtcbiAgICAgIGlmIChoYXNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGhhc2g7XG4gICAgICB9XG5cbiAgICAgIGhhc2ggPSBnZXRJRU5vZGVIYXNoKG9iaik7XG4gICAgICBpZiAoaGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBoYXNoO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhhc2ggPSArK29iakhhc2hVSUQ7XG4gICAgaWYgKG9iakhhc2hVSUQgJiAweDQwMDAwMDAwKSB7XG4gICAgICBvYmpIYXNoVUlEID0gMDtcbiAgICB9XG5cbiAgICBpZiAodXNpbmdXZWFrTWFwKSB7XG4gICAgICB3ZWFrTWFwLnNldChvYmosIGhhc2gpO1xuICAgIH0gZWxzZSBpZiAoaXNFeHRlbnNpYmxlICE9PSB1bmRlZmluZWQgJiYgaXNFeHRlbnNpYmxlKG9iaikgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vbi1leHRlbnNpYmxlIG9iamVjdHMgYXJlIG5vdCBhbGxvd2VkIGFzIGtleXMuJyk7XG4gICAgfSBlbHNlIGlmIChjYW5EZWZpbmVQcm9wZXJ0eSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgVUlEX0hBU0hfS0VZLCB7XG4gICAgICAgICdlbnVtZXJhYmxlJzogZmFsc2UsXG4gICAgICAgICdjb25maWd1cmFibGUnOiBmYWxzZSxcbiAgICAgICAgJ3dyaXRhYmxlJzogZmFsc2UsXG4gICAgICAgICd2YWx1ZSc6IGhhc2hcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAob2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgIG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZSA9PT0gb2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZSkge1xuICAgICAgLy8gU2luY2Ugd2UgY2FuJ3QgZGVmaW5lIGEgbm9uLWVudW1lcmFibGUgcHJvcGVydHkgb24gdGhlIG9iamVjdFxuICAgICAgLy8gd2UnbGwgaGlqYWNrIG9uZSBvZiB0aGUgbGVzcy11c2VkIG5vbi1lbnVtZXJhYmxlIHByb3BlcnRpZXMgdG9cbiAgICAgIC8vIHNhdmUgb3VyIGhhc2ggb24gaXQuIFNpbmNlIHRoaXMgaXMgYSBmdW5jdGlvbiBpdCB3aWxsIG5vdCBzaG93IHVwIGluXG4gICAgICAvLyBgSlNPTi5zdHJpbmdpZnlgIHdoaWNoIGlzIHdoYXQgd2Ugd2FudC5cbiAgICAgIG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBvYmoucHJvcGVydHlJc0VudW1lcmFibGVbVUlEX0hBU0hfS0VZXSA9IGhhc2g7XG4gICAgfSBlbHNlIGlmIChvYmoubm9kZVR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQXQgdGhpcyBwb2ludCB3ZSBjb3VsZG4ndCBnZXQgdGhlIElFIGB1bmlxdWVJRGAgdG8gdXNlIGFzIGEgaGFzaFxuICAgICAgLy8gYW5kIHdlIGNvdWxkbid0IHVzZSBhIG5vbi1lbnVtZXJhYmxlIHByb3BlcnR5IHRvIGV4cGxvaXQgdGhlXG4gICAgICAvLyBkb250RW51bSBidWcgc28gd2Ugc2ltcGx5IGFkZCB0aGUgYFVJRF9IQVNIX0tFWWAgb24gdGhlIG5vZGVcbiAgICAgIC8vIGl0c2VsZi5cbiAgICAgIG9ialtVSURfSEFTSF9LRVldID0gaGFzaDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gc2V0IGEgbm9uLWVudW1lcmFibGUgcHJvcGVydHkgb24gb2JqZWN0LicpO1xuICAgIH1cblxuICAgIHJldHVybiBoYXNoO1xuICB9XG5cbiAgLy8gR2V0IHJlZmVyZW5jZXMgdG8gRVM1IG9iamVjdCBtZXRob2RzLlxuICB2YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZTtcblxuICAvLyBUcnVlIGlmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB3b3JrcyBhcyBleHBlY3RlZC4gSUU4IGZhaWxzIHRoaXMgdGVzdC5cbiAgdmFyIGNhbkRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdAJywge30pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSgpKTtcblxuICAvLyBJRSBoYXMgYSBgdW5pcXVlSURgIHByb3BlcnR5IG9uIERPTSBub2Rlcy4gV2UgY2FuIGNvbnN0cnVjdCB0aGUgaGFzaCBmcm9tIGl0XG4gIC8vIGFuZCBhdm9pZCBtZW1vcnkgbGVha3MgZnJvbSB0aGUgSUUgY2xvbmVOb2RlIGJ1Zy5cbiAgZnVuY3Rpb24gZ2V0SUVOb2RlSGFzaChub2RlKSB7XG4gICAgaWYgKG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA+IDApIHtcbiAgICAgIHN3aXRjaCAobm9kZS5ub2RlVHlwZSkge1xuICAgICAgICBjYXNlIDE6IC8vIEVsZW1lbnRcbiAgICAgICAgICByZXR1cm4gbm9kZS51bmlxdWVJRDtcbiAgICAgICAgY2FzZSA5OiAvLyBEb2N1bWVudFxuICAgICAgICAgIHJldHVybiBub2RlLmRvY3VtZW50RWxlbWVudCAmJiBub2RlLmRvY3VtZW50RWxlbWVudC51bmlxdWVJRDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBJZiBwb3NzaWJsZSwgdXNlIGEgV2Vha01hcC5cbiAgdmFyIHVzaW5nV2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nO1xuICB2YXIgd2Vha01hcDtcbiAgaWYgKHVzaW5nV2Vha01hcCkge1xuICAgIHdlYWtNYXAgPSBuZXcgV2Vha01hcCgpO1xuICB9XG5cbiAgdmFyIG9iakhhc2hVSUQgPSAwO1xuXG4gIHZhciBVSURfSEFTSF9LRVkgPSAnX19pbW11dGFibGVoYXNoX18nO1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFVJRF9IQVNIX0tFWSA9IFN5bWJvbChVSURfSEFTSF9LRVkpO1xuICB9XG5cbiAgdmFyIFNUUklOR19IQVNIX0NBQ0hFX01JTl9TVFJMRU4gPSAxNjtcbiAgdmFyIFNUUklOR19IQVNIX0NBQ0hFX01BWF9TSVpFID0gMjU1O1xuICB2YXIgU1RSSU5HX0hBU0hfQ0FDSEVfU0laRSA9IDA7XG4gIHZhciBzdHJpbmdIYXNoQ2FjaGUgPSB7fTtcblxuICBmdW5jdGlvbiBhc3NlcnROb3RJbmZpbml0ZShzaXplKSB7XG4gICAgaW52YXJpYW50KFxuICAgICAgc2l6ZSAhPT0gSW5maW5pdHksXG4gICAgICAnQ2Fubm90IHBlcmZvcm0gdGhpcyBhY3Rpb24gd2l0aCBhbiBpbmZpbml0ZSBzaXplLidcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoTWFwLCBLZXllZENvbGxlY3Rpb24pO1xuXG4gICAgLy8gQHByYWdtYSBDb25zdHJ1Y3Rpb25cblxuICAgIGZ1bmN0aW9uIE1hcCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgPyBlbXB0eU1hcCgpIDpcbiAgICAgICAgaXNNYXAodmFsdWUpICYmICFpc09yZGVyZWQodmFsdWUpID8gdmFsdWUgOlxuICAgICAgICBlbXB0eU1hcCgpLndpdGhNdXRhdGlvbnMoZnVuY3Rpb24obWFwICkge1xuICAgICAgICAgIHZhciBpdGVyID0gS2V5ZWRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgICAgICAgYXNzZXJ0Tm90SW5maW5pdGUoaXRlci5zaXplKTtcbiAgICAgICAgICBpdGVyLmZvckVhY2goZnVuY3Rpb24odiwgaykgIHtyZXR1cm4gbWFwLnNldChrLCB2KX0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBNYXAub2YgPSBmdW5jdGlvbigpIHt2YXIga2V5VmFsdWVzID0gU0xJQ0UkMC5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICByZXR1cm4gZW1wdHlNYXAoKS53aXRoTXV0YXRpb25zKGZ1bmN0aW9uKG1hcCApIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlWYWx1ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICBpZiAoaSArIDEgPj0ga2V5VmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHZhbHVlIGZvciBrZXk6ICcgKyBrZXlWYWx1ZXNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtYXAuc2V0KGtleVZhbHVlc1tpXSwga2V5VmFsdWVzW2kgKyAxXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBNYXAucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX3RvU3RyaW5nKCdNYXAgeycsICd9Jyk7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgQWNjZXNzXG5cbiAgICBNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGssIG5vdFNldFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcm9vdCA/XG4gICAgICAgIHRoaXMuX3Jvb3QuZ2V0KDAsIHVuZGVmaW5lZCwgaywgbm90U2V0VmFsdWUpIDpcbiAgICAgICAgbm90U2V0VmFsdWU7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgTW9kaWZpY2F0aW9uXG5cbiAgICBNYXAucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKGssIHYpIHtcbiAgICAgIHJldHVybiB1cGRhdGVNYXAodGhpcywgaywgdik7XG4gICAgfTtcblxuICAgIE1hcC5wcm90b3R5cGUuc2V0SW4gPSBmdW5jdGlvbihrZXlQYXRoLCB2KSB7XG4gICAgICByZXR1cm4gdGhpcy51cGRhdGVJbihrZXlQYXRoLCBOT1RfU0VULCBmdW5jdGlvbigpICB7cmV0dXJuIHZ9KTtcbiAgICB9O1xuXG4gICAgTWFwLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihrKSB7XG4gICAgICByZXR1cm4gdXBkYXRlTWFwKHRoaXMsIGssIE5PVF9TRVQpO1xuICAgIH07XG5cbiAgICBNYXAucHJvdG90eXBlLmRlbGV0ZUluID0gZnVuY3Rpb24oa2V5UGF0aCkge1xuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlSW4oa2V5UGF0aCwgZnVuY3Rpb24oKSAge3JldHVybiBOT1RfU0VUfSk7XG4gICAgfTtcblxuICAgIE1hcC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oaywgbm90U2V0VmFsdWUsIHVwZGF0ZXIpIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID9cbiAgICAgICAgayh0aGlzKSA6XG4gICAgICAgIHRoaXMudXBkYXRlSW4oW2tdLCBub3RTZXRWYWx1ZSwgdXBkYXRlcik7XG4gICAgfTtcblxuICAgIE1hcC5wcm90b3R5cGUudXBkYXRlSW4gPSBmdW5jdGlvbihrZXlQYXRoLCBub3RTZXRWYWx1ZSwgdXBkYXRlcikge1xuICAgICAgaWYgKCF1cGRhdGVyKSB7XG4gICAgICAgIHVwZGF0ZXIgPSBub3RTZXRWYWx1ZTtcbiAgICAgICAgbm90U2V0VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB2YXIgdXBkYXRlZFZhbHVlID0gdXBkYXRlSW5EZWVwTWFwKFxuICAgICAgICB0aGlzLFxuICAgICAgICBmb3JjZUl0ZXJhdG9yKGtleVBhdGgpLFxuICAgICAgICBub3RTZXRWYWx1ZSxcbiAgICAgICAgdXBkYXRlclxuICAgICAgKTtcbiAgICAgIHJldHVybiB1cGRhdGVkVmFsdWUgPT09IE5PVF9TRVQgPyB1bmRlZmluZWQgOiB1cGRhdGVkVmFsdWU7XG4gICAgfTtcblxuICAgIE1hcC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX293bmVySUQpIHtcbiAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICAgICAgdGhpcy5fcm9vdCA9IG51bGw7XG4gICAgICAgIHRoaXMuX19oYXNoID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9fYWx0ZXJlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5TWFwKCk7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgQ29tcG9zaXRpb25cblxuICAgIE1hcC5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbigvKi4uLml0ZXJzKi8pIHtcbiAgICAgIHJldHVybiBtZXJnZUludG9NYXBXaXRoKHRoaXMsIHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgTWFwLnByb3RvdHlwZS5tZXJnZVdpdGggPSBmdW5jdGlvbihtZXJnZXIpIHt2YXIgaXRlcnMgPSBTTElDRSQwLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIHJldHVybiBtZXJnZUludG9NYXBXaXRoKHRoaXMsIG1lcmdlciwgaXRlcnMpO1xuICAgIH07XG5cbiAgICBNYXAucHJvdG90eXBlLm1lcmdlSW4gPSBmdW5jdGlvbihrZXlQYXRoKSB7dmFyIGl0ZXJzID0gU0xJQ0UkMC5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICByZXR1cm4gdGhpcy51cGRhdGVJbihcbiAgICAgICAga2V5UGF0aCxcbiAgICAgICAgZW1wdHlNYXAoKSxcbiAgICAgICAgZnVuY3Rpb24obSApIHtyZXR1cm4gdHlwZW9mIG0ubWVyZ2UgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICAgIG0ubWVyZ2UuYXBwbHkobSwgaXRlcnMpIDpcbiAgICAgICAgICBpdGVyc1tpdGVycy5sZW5ndGggLSAxXX1cbiAgICAgICk7XG4gICAgfTtcblxuICAgIE1hcC5wcm90b3R5cGUubWVyZ2VEZWVwID0gZnVuY3Rpb24oLyouLi5pdGVycyovKSB7XG4gICAgICByZXR1cm4gbWVyZ2VJbnRvTWFwV2l0aCh0aGlzLCBkZWVwTWVyZ2VyLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBNYXAucHJvdG90eXBlLm1lcmdlRGVlcFdpdGggPSBmdW5jdGlvbihtZXJnZXIpIHt2YXIgaXRlcnMgPSBTTElDRSQwLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIHJldHVybiBtZXJnZUludG9NYXBXaXRoKHRoaXMsIGRlZXBNZXJnZXJXaXRoKG1lcmdlciksIGl0ZXJzKTtcbiAgICB9O1xuXG4gICAgTWFwLnByb3RvdHlwZS5tZXJnZURlZXBJbiA9IGZ1bmN0aW9uKGtleVBhdGgpIHt2YXIgaXRlcnMgPSBTTElDRSQwLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUluKFxuICAgICAgICBrZXlQYXRoLFxuICAgICAgICBlbXB0eU1hcCgpLFxuICAgICAgICBmdW5jdGlvbihtICkge3JldHVybiB0eXBlb2YgbS5tZXJnZURlZXAgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICAgIG0ubWVyZ2VEZWVwLmFwcGx5KG0sIGl0ZXJzKSA6XG4gICAgICAgICAgaXRlcnNbaXRlcnMubGVuZ3RoIC0gMV19XG4gICAgICApO1xuICAgIH07XG5cbiAgICBNYXAucHJvdG90eXBlLnNvcnQgPSBmdW5jdGlvbihjb21wYXJhdG9yKSB7XG4gICAgICAvLyBMYXRlIGJpbmRpbmdcbiAgICAgIHJldHVybiBPcmRlcmVkTWFwKHNvcnRGYWN0b3J5KHRoaXMsIGNvbXBhcmF0b3IpKTtcbiAgICB9O1xuXG4gICAgTWFwLnByb3RvdHlwZS5zb3J0QnkgPSBmdW5jdGlvbihtYXBwZXIsIGNvbXBhcmF0b3IpIHtcbiAgICAgIC8vIExhdGUgYmluZGluZ1xuICAgICAgcmV0dXJuIE9yZGVyZWRNYXAoc29ydEZhY3RvcnkodGhpcywgY29tcGFyYXRvciwgbWFwcGVyKSk7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgTXV0YWJpbGl0eVxuXG4gICAgTWFwLnByb3RvdHlwZS53aXRoTXV0YXRpb25zID0gZnVuY3Rpb24oZm4pIHtcbiAgICAgIHZhciBtdXRhYmxlID0gdGhpcy5hc011dGFibGUoKTtcbiAgICAgIGZuKG11dGFibGUpO1xuICAgICAgcmV0dXJuIG11dGFibGUud2FzQWx0ZXJlZCgpID8gbXV0YWJsZS5fX2Vuc3VyZU93bmVyKHRoaXMuX19vd25lcklEKSA6IHRoaXM7XG4gICAgfTtcblxuICAgIE1hcC5wcm90b3R5cGUuYXNNdXRhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX293bmVySUQgPyB0aGlzIDogdGhpcy5fX2Vuc3VyZU93bmVyKG5ldyBPd25lcklEKCkpO1xuICAgIH07XG5cbiAgICBNYXAucHJvdG90eXBlLmFzSW1tdXRhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX2Vuc3VyZU93bmVyKCk7XG4gICAgfTtcblxuICAgIE1hcC5wcm90b3R5cGUud2FzQWx0ZXJlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX19hbHRlcmVkO1xuICAgIH07XG5cbiAgICBNYXAucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICByZXR1cm4gbmV3IE1hcEl0ZXJhdG9yKHRoaXMsIHR5cGUsIHJldmVyc2UpO1xuICAgIH07XG5cbiAgICBNYXAucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICB0aGlzLl9yb290ICYmIHRoaXMuX3Jvb3QuaXRlcmF0ZShmdW5jdGlvbihlbnRyeSApIHtcbiAgICAgICAgaXRlcmF0aW9ucysrO1xuICAgICAgICByZXR1cm4gZm4oZW50cnlbMV0sIGVudHJ5WzBdLCB0aGlzJDApO1xuICAgICAgfSwgcmV2ZXJzZSk7XG4gICAgICByZXR1cm4gaXRlcmF0aW9ucztcbiAgICB9O1xuXG4gICAgTWFwLnByb3RvdHlwZS5fX2Vuc3VyZU93bmVyID0gZnVuY3Rpb24ob3duZXJJRCkge1xuICAgICAgaWYgKG93bmVySUQgPT09IHRoaXMuX19vd25lcklEKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgaWYgKCFvd25lcklEKSB7XG4gICAgICAgIHRoaXMuX19vd25lcklEID0gb3duZXJJRDtcbiAgICAgICAgdGhpcy5fX2FsdGVyZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFrZU1hcCh0aGlzLnNpemUsIHRoaXMuX3Jvb3QsIG93bmVySUQsIHRoaXMuX19oYXNoKTtcbiAgICB9O1xuXG5cbiAgZnVuY3Rpb24gaXNNYXAobWF5YmVNYXApIHtcbiAgICByZXR1cm4gISEobWF5YmVNYXAgJiYgbWF5YmVNYXBbSVNfTUFQX1NFTlRJTkVMXSk7XG4gIH1cblxuICBNYXAuaXNNYXAgPSBpc01hcDtcblxuICB2YXIgSVNfTUFQX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfTUFQX19AQCc7XG5cbiAgdmFyIE1hcFByb3RvdHlwZSA9IE1hcC5wcm90b3R5cGU7XG4gIE1hcFByb3RvdHlwZVtJU19NQVBfU0VOVElORUxdID0gdHJ1ZTtcbiAgTWFwUHJvdG90eXBlW0RFTEVURV0gPSBNYXBQcm90b3R5cGUucmVtb3ZlO1xuICBNYXBQcm90b3R5cGUucmVtb3ZlSW4gPSBNYXBQcm90b3R5cGUuZGVsZXRlSW47XG5cblxuICAvLyAjcHJhZ21hIFRyaWUgTm9kZXNcblxuXG5cbiAgICBmdW5jdGlvbiBBcnJheU1hcE5vZGUob3duZXJJRCwgZW50cmllcykge1xuICAgICAgdGhpcy5vd25lcklEID0gb3duZXJJRDtcbiAgICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgfVxuXG4gICAgQXJyYXlNYXBOb2RlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihzaGlmdCwga2V5SGFzaCwga2V5LCBub3RTZXRWYWx1ZSkge1xuICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XG4gICAgICBmb3IgKHZhciBpaSA9IDAsIGxlbiA9IGVudHJpZXMubGVuZ3RoOyBpaSA8IGxlbjsgaWkrKykge1xuICAgICAgICBpZiAoaXMoa2V5LCBlbnRyaWVzW2lpXVswXSkpIHtcbiAgICAgICAgICByZXR1cm4gZW50cmllc1tpaV1bMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBub3RTZXRWYWx1ZTtcbiAgICB9O1xuXG4gICAgQXJyYXlNYXBOb2RlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihvd25lcklELCBzaGlmdCwga2V5SGFzaCwga2V5LCB2YWx1ZSwgZGlkQ2hhbmdlU2l6ZSwgZGlkQWx0ZXIpIHtcbiAgICAgIHZhciByZW1vdmVkID0gdmFsdWUgPT09IE5PVF9TRVQ7XG5cbiAgICAgIHZhciBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xuICAgICAgdmFyIGlkeCA9IDA7XG4gICAgICBmb3IgKHZhciBsZW4gPSBlbnRyaWVzLmxlbmd0aDsgaWR4IDwgbGVuOyBpZHgrKykge1xuICAgICAgICBpZiAoaXMoa2V5LCBlbnRyaWVzW2lkeF1bMF0pKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBleGlzdHMgPSBpZHggPCBsZW47XG5cbiAgICAgIGlmIChleGlzdHMgPyBlbnRyaWVzW2lkeF1bMV0gPT09IHZhbHVlIDogcmVtb3ZlZCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgU2V0UmVmKGRpZEFsdGVyKTtcbiAgICAgIChyZW1vdmVkIHx8ICFleGlzdHMpICYmIFNldFJlZihkaWRDaGFuZ2VTaXplKTtcblxuICAgICAgaWYgKHJlbW92ZWQgJiYgZW50cmllcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuOyAvLyB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKCFleGlzdHMgJiYgIXJlbW92ZWQgJiYgZW50cmllcy5sZW5ndGggPj0gTUFYX0FSUkFZX01BUF9TSVpFKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVOb2Rlcyhvd25lcklELCBlbnRyaWVzLCBrZXksIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGlzRWRpdGFibGUgPSBvd25lcklEICYmIG93bmVySUQgPT09IHRoaXMub3duZXJJRDtcbiAgICAgIHZhciBuZXdFbnRyaWVzID0gaXNFZGl0YWJsZSA/IGVudHJpZXMgOiBhcnJDb3B5KGVudHJpZXMpO1xuXG4gICAgICBpZiAoZXhpc3RzKSB7XG4gICAgICAgIGlmIChyZW1vdmVkKSB7XG4gICAgICAgICAgaWR4ID09PSBsZW4gLSAxID8gbmV3RW50cmllcy5wb3AoKSA6IChuZXdFbnRyaWVzW2lkeF0gPSBuZXdFbnRyaWVzLnBvcCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdFbnRyaWVzW2lkeF0gPSBba2V5LCB2YWx1ZV07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0VudHJpZXMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNFZGl0YWJsZSkge1xuICAgICAgICB0aGlzLmVudHJpZXMgPSBuZXdFbnRyaWVzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBBcnJheU1hcE5vZGUob3duZXJJRCwgbmV3RW50cmllcyk7XG4gICAgfTtcblxuXG5cblxuICAgIGZ1bmN0aW9uIEJpdG1hcEluZGV4ZWROb2RlKG93bmVySUQsIGJpdG1hcCwgbm9kZXMpIHtcbiAgICAgIHRoaXMub3duZXJJRCA9IG93bmVySUQ7XG4gICAgICB0aGlzLmJpdG1hcCA9IGJpdG1hcDtcbiAgICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgICB9XG5cbiAgICBCaXRtYXBJbmRleGVkTm9kZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oc2hpZnQsIGtleUhhc2gsIGtleSwgbm90U2V0VmFsdWUpIHtcbiAgICAgIGlmIChrZXlIYXNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAga2V5SGFzaCA9IGhhc2goa2V5KTtcbiAgICAgIH1cbiAgICAgIHZhciBiaXQgPSAoMSA8PCAoKHNoaWZ0ID09PSAwID8ga2V5SGFzaCA6IGtleUhhc2ggPj4+IHNoaWZ0KSAmIE1BU0spKTtcbiAgICAgIHZhciBiaXRtYXAgPSB0aGlzLmJpdG1hcDtcbiAgICAgIHJldHVybiAoYml0bWFwICYgYml0KSA9PT0gMCA/IG5vdFNldFZhbHVlIDpcbiAgICAgICAgdGhpcy5ub2Rlc1twb3BDb3VudChiaXRtYXAgJiAoYml0IC0gMSkpXS5nZXQoc2hpZnQgKyBTSElGVCwga2V5SGFzaCwga2V5LCBub3RTZXRWYWx1ZSk7XG4gICAgfTtcblxuICAgIEJpdG1hcEluZGV4ZWROb2RlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihvd25lcklELCBzaGlmdCwga2V5SGFzaCwga2V5LCB2YWx1ZSwgZGlkQ2hhbmdlU2l6ZSwgZGlkQWx0ZXIpIHtcbiAgICAgIGlmIChrZXlIYXNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAga2V5SGFzaCA9IGhhc2goa2V5KTtcbiAgICAgIH1cbiAgICAgIHZhciBrZXlIYXNoRnJhZyA9IChzaGlmdCA9PT0gMCA/IGtleUhhc2ggOiBrZXlIYXNoID4+PiBzaGlmdCkgJiBNQVNLO1xuICAgICAgdmFyIGJpdCA9IDEgPDwga2V5SGFzaEZyYWc7XG4gICAgICB2YXIgYml0bWFwID0gdGhpcy5iaXRtYXA7XG4gICAgICB2YXIgZXhpc3RzID0gKGJpdG1hcCAmIGJpdCkgIT09IDA7XG5cbiAgICAgIGlmICghZXhpc3RzICYmIHZhbHVlID09PSBOT1RfU0VUKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgaWR4ID0gcG9wQ291bnQoYml0bWFwICYgKGJpdCAtIDEpKTtcbiAgICAgIHZhciBub2RlcyA9IHRoaXMubm9kZXM7XG4gICAgICB2YXIgbm9kZSA9IGV4aXN0cyA/IG5vZGVzW2lkeF0gOiB1bmRlZmluZWQ7XG4gICAgICB2YXIgbmV3Tm9kZSA9IHVwZGF0ZU5vZGUobm9kZSwgb3duZXJJRCwgc2hpZnQgKyBTSElGVCwga2V5SGFzaCwga2V5LCB2YWx1ZSwgZGlkQ2hhbmdlU2l6ZSwgZGlkQWx0ZXIpO1xuXG4gICAgICBpZiAobmV3Tm9kZSA9PT0gbm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgaWYgKCFleGlzdHMgJiYgbmV3Tm9kZSAmJiBub2Rlcy5sZW5ndGggPj0gTUFYX0JJVE1BUF9JTkRFWEVEX1NJWkUpIHtcbiAgICAgICAgcmV0dXJuIGV4cGFuZE5vZGVzKG93bmVySUQsIG5vZGVzLCBiaXRtYXAsIGtleUhhc2hGcmFnLCBuZXdOb2RlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV4aXN0cyAmJiAhbmV3Tm9kZSAmJiBub2Rlcy5sZW5ndGggPT09IDIgJiYgaXNMZWFmTm9kZShub2Rlc1tpZHggXiAxXSkpIHtcbiAgICAgICAgcmV0dXJuIG5vZGVzW2lkeCBeIDFdO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXhpc3RzICYmIG5ld05vZGUgJiYgbm9kZXMubGVuZ3RoID09PSAxICYmIGlzTGVhZk5vZGUobmV3Tm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIG5ld05vZGU7XG4gICAgICB9XG5cbiAgICAgIHZhciBpc0VkaXRhYmxlID0gb3duZXJJRCAmJiBvd25lcklEID09PSB0aGlzLm93bmVySUQ7XG4gICAgICB2YXIgbmV3Qml0bWFwID0gZXhpc3RzID8gbmV3Tm9kZSA/IGJpdG1hcCA6IGJpdG1hcCBeIGJpdCA6IGJpdG1hcCB8IGJpdDtcbiAgICAgIHZhciBuZXdOb2RlcyA9IGV4aXN0cyA/IG5ld05vZGUgP1xuICAgICAgICBzZXRJbihub2RlcywgaWR4LCBuZXdOb2RlLCBpc0VkaXRhYmxlKSA6XG4gICAgICAgIHNwbGljZU91dChub2RlcywgaWR4LCBpc0VkaXRhYmxlKSA6XG4gICAgICAgIHNwbGljZUluKG5vZGVzLCBpZHgsIG5ld05vZGUsIGlzRWRpdGFibGUpO1xuXG4gICAgICBpZiAoaXNFZGl0YWJsZSkge1xuICAgICAgICB0aGlzLmJpdG1hcCA9IG5ld0JpdG1hcDtcbiAgICAgICAgdGhpcy5ub2RlcyA9IG5ld05vZGVzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBCaXRtYXBJbmRleGVkTm9kZShvd25lcklELCBuZXdCaXRtYXAsIG5ld05vZGVzKTtcbiAgICB9O1xuXG5cblxuXG4gICAgZnVuY3Rpb24gSGFzaEFycmF5TWFwTm9kZShvd25lcklELCBjb3VudCwgbm9kZXMpIHtcbiAgICAgIHRoaXMub3duZXJJRCA9IG93bmVySUQ7XG4gICAgICB0aGlzLmNvdW50ID0gY291bnQ7XG4gICAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gICAgfVxuXG4gICAgSGFzaEFycmF5TWFwTm9kZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oc2hpZnQsIGtleUhhc2gsIGtleSwgbm90U2V0VmFsdWUpIHtcbiAgICAgIGlmIChrZXlIYXNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAga2V5SGFzaCA9IGhhc2goa2V5KTtcbiAgICAgIH1cbiAgICAgIHZhciBpZHggPSAoc2hpZnQgPT09IDAgPyBrZXlIYXNoIDoga2V5SGFzaCA+Pj4gc2hpZnQpICYgTUFTSztcbiAgICAgIHZhciBub2RlID0gdGhpcy5ub2Rlc1tpZHhdO1xuICAgICAgcmV0dXJuIG5vZGUgPyBub2RlLmdldChzaGlmdCArIFNISUZULCBrZXlIYXNoLCBrZXksIG5vdFNldFZhbHVlKSA6IG5vdFNldFZhbHVlO1xuICAgIH07XG5cbiAgICBIYXNoQXJyYXlNYXBOb2RlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihvd25lcklELCBzaGlmdCwga2V5SGFzaCwga2V5LCB2YWx1ZSwgZGlkQ2hhbmdlU2l6ZSwgZGlkQWx0ZXIpIHtcbiAgICAgIGlmIChrZXlIYXNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAga2V5SGFzaCA9IGhhc2goa2V5KTtcbiAgICAgIH1cbiAgICAgIHZhciBpZHggPSAoc2hpZnQgPT09IDAgPyBrZXlIYXNoIDoga2V5SGFzaCA+Pj4gc2hpZnQpICYgTUFTSztcbiAgICAgIHZhciByZW1vdmVkID0gdmFsdWUgPT09IE5PVF9TRVQ7XG4gICAgICB2YXIgbm9kZXMgPSB0aGlzLm5vZGVzO1xuICAgICAgdmFyIG5vZGUgPSBub2Rlc1tpZHhdO1xuXG4gICAgICBpZiAocmVtb3ZlZCAmJiAhbm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld05vZGUgPSB1cGRhdGVOb2RlKG5vZGUsIG93bmVySUQsIHNoaWZ0ICsgU0hJRlQsIGtleUhhc2gsIGtleSwgdmFsdWUsIGRpZENoYW5nZVNpemUsIGRpZEFsdGVyKTtcbiAgICAgIGlmIChuZXdOb2RlID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3Q291bnQgPSB0aGlzLmNvdW50O1xuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIG5ld0NvdW50Kys7XG4gICAgICB9IGVsc2UgaWYgKCFuZXdOb2RlKSB7XG4gICAgICAgIG5ld0NvdW50LS07XG4gICAgICAgIGlmIChuZXdDb3VudCA8IE1JTl9IQVNIX0FSUkFZX01BUF9TSVpFKSB7XG4gICAgICAgICAgcmV0dXJuIHBhY2tOb2Rlcyhvd25lcklELCBub2RlcywgbmV3Q291bnQsIGlkeCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGlzRWRpdGFibGUgPSBvd25lcklEICYmIG93bmVySUQgPT09IHRoaXMub3duZXJJRDtcbiAgICAgIHZhciBuZXdOb2RlcyA9IHNldEluKG5vZGVzLCBpZHgsIG5ld05vZGUsIGlzRWRpdGFibGUpO1xuXG4gICAgICBpZiAoaXNFZGl0YWJsZSkge1xuICAgICAgICB0aGlzLmNvdW50ID0gbmV3Q291bnQ7XG4gICAgICAgIHRoaXMubm9kZXMgPSBuZXdOb2RlcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgSGFzaEFycmF5TWFwTm9kZShvd25lcklELCBuZXdDb3VudCwgbmV3Tm9kZXMpO1xuICAgIH07XG5cblxuXG5cbiAgICBmdW5jdGlvbiBIYXNoQ29sbGlzaW9uTm9kZShvd25lcklELCBrZXlIYXNoLCBlbnRyaWVzKSB7XG4gICAgICB0aGlzLm93bmVySUQgPSBvd25lcklEO1xuICAgICAgdGhpcy5rZXlIYXNoID0ga2V5SGFzaDtcbiAgICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgfVxuXG4gICAgSGFzaENvbGxpc2lvbk5vZGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKHNoaWZ0LCBrZXlIYXNoLCBrZXksIG5vdFNldFZhbHVlKSB7XG4gICAgICB2YXIgZW50cmllcyA9IHRoaXMuZW50cmllcztcbiAgICAgIGZvciAodmFyIGlpID0gMCwgbGVuID0gZW50cmllcy5sZW5ndGg7IGlpIDwgbGVuOyBpaSsrKSB7XG4gICAgICAgIGlmIChpcyhrZXksIGVudHJpZXNbaWldWzBdKSkge1xuICAgICAgICAgIHJldHVybiBlbnRyaWVzW2lpXVsxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5vdFNldFZhbHVlO1xuICAgIH07XG5cbiAgICBIYXNoQ29sbGlzaW9uTm9kZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24ob3duZXJJRCwgc2hpZnQsIGtleUhhc2gsIGtleSwgdmFsdWUsIGRpZENoYW5nZVNpemUsIGRpZEFsdGVyKSB7XG4gICAgICBpZiAoa2V5SGFzaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGtleUhhc2ggPSBoYXNoKGtleSk7XG4gICAgICB9XG5cbiAgICAgIHZhciByZW1vdmVkID0gdmFsdWUgPT09IE5PVF9TRVQ7XG5cbiAgICAgIGlmIChrZXlIYXNoICE9PSB0aGlzLmtleUhhc2gpIHtcbiAgICAgICAgaWYgKHJlbW92ZWQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBTZXRSZWYoZGlkQWx0ZXIpO1xuICAgICAgICBTZXRSZWYoZGlkQ2hhbmdlU2l6ZSk7XG4gICAgICAgIHJldHVybiBtZXJnZUludG9Ob2RlKHRoaXMsIG93bmVySUQsIHNoaWZ0LCBrZXlIYXNoLCBba2V5LCB2YWx1ZV0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgZW50cmllcyA9IHRoaXMuZW50cmllcztcbiAgICAgIHZhciBpZHggPSAwO1xuICAgICAgZm9yICh2YXIgbGVuID0gZW50cmllcy5sZW5ndGg7IGlkeCA8IGxlbjsgaWR4KyspIHtcbiAgICAgICAgaWYgKGlzKGtleSwgZW50cmllc1tpZHhdWzBdKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgZXhpc3RzID0gaWR4IDwgbGVuO1xuXG4gICAgICBpZiAoZXhpc3RzID8gZW50cmllc1tpZHhdWzFdID09PSB2YWx1ZSA6IHJlbW92ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIFNldFJlZihkaWRBbHRlcik7XG4gICAgICAocmVtb3ZlZCB8fCAhZXhpc3RzKSAmJiBTZXRSZWYoZGlkQ2hhbmdlU2l6ZSk7XG5cbiAgICAgIGlmIChyZW1vdmVkICYmIGxlbiA9PT0gMikge1xuICAgICAgICByZXR1cm4gbmV3IFZhbHVlTm9kZShvd25lcklELCB0aGlzLmtleUhhc2gsIGVudHJpZXNbaWR4IF4gMV0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXNFZGl0YWJsZSA9IG93bmVySUQgJiYgb3duZXJJRCA9PT0gdGhpcy5vd25lcklEO1xuICAgICAgdmFyIG5ld0VudHJpZXMgPSBpc0VkaXRhYmxlID8gZW50cmllcyA6IGFyckNvcHkoZW50cmllcyk7XG5cbiAgICAgIGlmIChleGlzdHMpIHtcbiAgICAgICAgaWYgKHJlbW92ZWQpIHtcbiAgICAgICAgICBpZHggPT09IGxlbiAtIDEgPyBuZXdFbnRyaWVzLnBvcCgpIDogKG5ld0VudHJpZXNbaWR4XSA9IG5ld0VudHJpZXMucG9wKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0VudHJpZXNbaWR4XSA9IFtrZXksIHZhbHVlXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RW50cmllcy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0VkaXRhYmxlKSB7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IG5ld0VudHJpZXM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IEhhc2hDb2xsaXNpb25Ob2RlKG93bmVySUQsIHRoaXMua2V5SGFzaCwgbmV3RW50cmllcyk7XG4gICAgfTtcblxuXG5cblxuICAgIGZ1bmN0aW9uIFZhbHVlTm9kZShvd25lcklELCBrZXlIYXNoLCBlbnRyeSkge1xuICAgICAgdGhpcy5vd25lcklEID0gb3duZXJJRDtcbiAgICAgIHRoaXMua2V5SGFzaCA9IGtleUhhc2g7XG4gICAgICB0aGlzLmVudHJ5ID0gZW50cnk7XG4gICAgfVxuXG4gICAgVmFsdWVOb2RlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihzaGlmdCwga2V5SGFzaCwga2V5LCBub3RTZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIGlzKGtleSwgdGhpcy5lbnRyeVswXSkgPyB0aGlzLmVudHJ5WzFdIDogbm90U2V0VmFsdWU7XG4gICAgfTtcblxuICAgIFZhbHVlTm9kZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24ob3duZXJJRCwgc2hpZnQsIGtleUhhc2gsIGtleSwgdmFsdWUsIGRpZENoYW5nZVNpemUsIGRpZEFsdGVyKSB7XG4gICAgICB2YXIgcmVtb3ZlZCA9IHZhbHVlID09PSBOT1RfU0VUO1xuICAgICAgdmFyIGtleU1hdGNoID0gaXMoa2V5LCB0aGlzLmVudHJ5WzBdKTtcbiAgICAgIGlmIChrZXlNYXRjaCA/IHZhbHVlID09PSB0aGlzLmVudHJ5WzFdIDogcmVtb3ZlZCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgU2V0UmVmKGRpZEFsdGVyKTtcblxuICAgICAgaWYgKHJlbW92ZWQpIHtcbiAgICAgICAgU2V0UmVmKGRpZENoYW5nZVNpemUpO1xuICAgICAgICByZXR1cm47IC8vIHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoa2V5TWF0Y2gpIHtcbiAgICAgICAgaWYgKG93bmVySUQgJiYgb3duZXJJRCA9PT0gdGhpcy5vd25lcklEKSB7XG4gICAgICAgICAgdGhpcy5lbnRyeVsxXSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVmFsdWVOb2RlKG93bmVySUQsIHRoaXMua2V5SGFzaCwgW2tleSwgdmFsdWVdKTtcbiAgICAgIH1cblxuICAgICAgU2V0UmVmKGRpZENoYW5nZVNpemUpO1xuICAgICAgcmV0dXJuIG1lcmdlSW50b05vZGUodGhpcywgb3duZXJJRCwgc2hpZnQsIGhhc2goa2V5KSwgW2tleSwgdmFsdWVdKTtcbiAgICB9O1xuXG5cblxuICAvLyAjcHJhZ21hIEl0ZXJhdG9yc1xuXG4gIEFycmF5TWFwTm9kZS5wcm90b3R5cGUuaXRlcmF0ZSA9XG4gIEhhc2hDb2xsaXNpb25Ob2RlLnByb3RvdHlwZS5pdGVyYXRlID0gZnVuY3Rpb24gKGZuLCByZXZlcnNlKSB7XG4gICAgdmFyIGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XG4gICAgZm9yICh2YXIgaWkgPSAwLCBtYXhJbmRleCA9IGVudHJpZXMubGVuZ3RoIC0gMTsgaWkgPD0gbWF4SW5kZXg7IGlpKyspIHtcbiAgICAgIGlmIChmbihlbnRyaWVzW3JldmVyc2UgPyBtYXhJbmRleCAtIGlpIDogaWldKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEJpdG1hcEluZGV4ZWROb2RlLnByb3RvdHlwZS5pdGVyYXRlID1cbiAgSGFzaEFycmF5TWFwTm9kZS5wcm90b3R5cGUuaXRlcmF0ZSA9IGZ1bmN0aW9uIChmbiwgcmV2ZXJzZSkge1xuICAgIHZhciBub2RlcyA9IHRoaXMubm9kZXM7XG4gICAgZm9yICh2YXIgaWkgPSAwLCBtYXhJbmRleCA9IG5vZGVzLmxlbmd0aCAtIDE7IGlpIDw9IG1heEluZGV4OyBpaSsrKSB7XG4gICAgICB2YXIgbm9kZSA9IG5vZGVzW3JldmVyc2UgPyBtYXhJbmRleCAtIGlpIDogaWldO1xuICAgICAgaWYgKG5vZGUgJiYgbm9kZS5pdGVyYXRlKGZuLCByZXZlcnNlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFZhbHVlTm9kZS5wcm90b3R5cGUuaXRlcmF0ZSA9IGZ1bmN0aW9uIChmbiwgcmV2ZXJzZSkge1xuICAgIHJldHVybiBmbih0aGlzLmVudHJ5KTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKE1hcEl0ZXJhdG9yLCBJdGVyYXRvcik7XG5cbiAgICBmdW5jdGlvbiBNYXBJdGVyYXRvcihtYXAsIHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgICAgdGhpcy5fcmV2ZXJzZSA9IHJldmVyc2U7XG4gICAgICB0aGlzLl9zdGFjayA9IG1hcC5fcm9vdCAmJiBtYXBJdGVyYXRvckZyYW1lKG1hcC5fcm9vdCk7XG4gICAgfVxuXG4gICAgTWFwSXRlcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB0eXBlID0gdGhpcy5fdHlwZTtcbiAgICAgIHZhciBzdGFjayA9IHRoaXMuX3N0YWNrO1xuICAgICAgd2hpbGUgKHN0YWNrKSB7XG4gICAgICAgIHZhciBub2RlID0gc3RhY2subm9kZTtcbiAgICAgICAgdmFyIGluZGV4ID0gc3RhY2suaW5kZXgrKztcbiAgICAgICAgdmFyIG1heEluZGV4O1xuICAgICAgICBpZiAobm9kZS5lbnRyeSkge1xuICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG1hcEl0ZXJhdG9yVmFsdWUodHlwZSwgbm9kZS5lbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG5vZGUuZW50cmllcykge1xuICAgICAgICAgIG1heEluZGV4ID0gbm9kZS5lbnRyaWVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgaWYgKGluZGV4IDw9IG1heEluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gbWFwSXRlcmF0b3JWYWx1ZSh0eXBlLCBub2RlLmVudHJpZXNbdGhpcy5fcmV2ZXJzZSA/IG1heEluZGV4IC0gaW5kZXggOiBpbmRleF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXhJbmRleCA9IG5vZGUubm9kZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICBpZiAoaW5kZXggPD0gbWF4SW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBzdWJOb2RlID0gbm9kZS5ub2Rlc1t0aGlzLl9yZXZlcnNlID8gbWF4SW5kZXggLSBpbmRleCA6IGluZGV4XTtcbiAgICAgICAgICAgIGlmIChzdWJOb2RlKSB7XG4gICAgICAgICAgICAgIGlmIChzdWJOb2RlLmVudHJ5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcEl0ZXJhdG9yVmFsdWUodHlwZSwgc3ViTm9kZS5lbnRyeSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc3RhY2sgPSB0aGlzLl9zdGFjayA9IG1hcEl0ZXJhdG9yRnJhbWUoc3ViTm9kZSwgc3RhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0YWNrID0gdGhpcy5fc3RhY2sgPSB0aGlzLl9zdGFjay5fX3ByZXY7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlcmF0b3JEb25lKCk7XG4gICAgfTtcblxuXG4gIGZ1bmN0aW9uIG1hcEl0ZXJhdG9yVmFsdWUodHlwZSwgZW50cnkpIHtcbiAgICByZXR1cm4gaXRlcmF0b3JWYWx1ZSh0eXBlLCBlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFwSXRlcmF0b3JGcmFtZShub2RlLCBwcmV2KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGU6IG5vZGUsXG4gICAgICBpbmRleDogMCxcbiAgICAgIF9fcHJldjogcHJldlxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlTWFwKHNpemUsIHJvb3QsIG93bmVySUQsIGhhc2gpIHtcbiAgICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShNYXBQcm90b3R5cGUpO1xuICAgIG1hcC5zaXplID0gc2l6ZTtcbiAgICBtYXAuX3Jvb3QgPSByb290O1xuICAgIG1hcC5fX293bmVySUQgPSBvd25lcklEO1xuICAgIG1hcC5fX2hhc2ggPSBoYXNoO1xuICAgIG1hcC5fX2FsdGVyZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gbWFwO1xuICB9XG5cbiAgdmFyIEVNUFRZX01BUDtcbiAgZnVuY3Rpb24gZW1wdHlNYXAoKSB7XG4gICAgcmV0dXJuIEVNUFRZX01BUCB8fCAoRU1QVFlfTUFQID0gbWFrZU1hcCgwKSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVNYXAobWFwLCBrLCB2KSB7XG4gICAgdmFyIG5ld1Jvb3Q7XG4gICAgdmFyIG5ld1NpemU7XG4gICAgaWYgKCFtYXAuX3Jvb3QpIHtcbiAgICAgIGlmICh2ID09PSBOT1RfU0VUKSB7XG4gICAgICAgIHJldHVybiBtYXA7XG4gICAgICB9XG4gICAgICBuZXdTaXplID0gMTtcbiAgICAgIG5ld1Jvb3QgPSBuZXcgQXJyYXlNYXBOb2RlKG1hcC5fX293bmVySUQsIFtbaywgdl1dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGRpZENoYW5nZVNpemUgPSBNYWtlUmVmKENIQU5HRV9MRU5HVEgpO1xuICAgICAgdmFyIGRpZEFsdGVyID0gTWFrZVJlZihESURfQUxURVIpO1xuICAgICAgbmV3Um9vdCA9IHVwZGF0ZU5vZGUobWFwLl9yb290LCBtYXAuX19vd25lcklELCAwLCB1bmRlZmluZWQsIGssIHYsIGRpZENoYW5nZVNpemUsIGRpZEFsdGVyKTtcbiAgICAgIGlmICghZGlkQWx0ZXIudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgIH1cbiAgICAgIG5ld1NpemUgPSBtYXAuc2l6ZSArIChkaWRDaGFuZ2VTaXplLnZhbHVlID8gdiA9PT0gTk9UX1NFVCA/IC0xIDogMSA6IDApO1xuICAgIH1cbiAgICBpZiAobWFwLl9fb3duZXJJRCkge1xuICAgICAgbWFwLnNpemUgPSBuZXdTaXplO1xuICAgICAgbWFwLl9yb290ID0gbmV3Um9vdDtcbiAgICAgIG1hcC5fX2hhc2ggPSB1bmRlZmluZWQ7XG4gICAgICBtYXAuX19hbHRlcmVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfVxuICAgIHJldHVybiBuZXdSb290ID8gbWFrZU1hcChuZXdTaXplLCBuZXdSb290KSA6IGVtcHR5TWFwKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVOb2RlKG5vZGUsIG93bmVySUQsIHNoaWZ0LCBrZXlIYXNoLCBrZXksIHZhbHVlLCBkaWRDaGFuZ2VTaXplLCBkaWRBbHRlcikge1xuICAgIGlmICghbm9kZSkge1xuICAgICAgaWYgKHZhbHVlID09PSBOT1RfU0VUKSB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfVxuICAgICAgU2V0UmVmKGRpZEFsdGVyKTtcbiAgICAgIFNldFJlZihkaWRDaGFuZ2VTaXplKTtcbiAgICAgIHJldHVybiBuZXcgVmFsdWVOb2RlKG93bmVySUQsIGtleUhhc2gsIFtrZXksIHZhbHVlXSk7XG4gICAgfVxuICAgIHJldHVybiBub2RlLnVwZGF0ZShvd25lcklELCBzaGlmdCwga2V5SGFzaCwga2V5LCB2YWx1ZSwgZGlkQ2hhbmdlU2l6ZSwgZGlkQWx0ZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNMZWFmTm9kZShub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuY29uc3RydWN0b3IgPT09IFZhbHVlTm9kZSB8fCBub2RlLmNvbnN0cnVjdG9yID09PSBIYXNoQ29sbGlzaW9uTm9kZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlSW50b05vZGUobm9kZSwgb3duZXJJRCwgc2hpZnQsIGtleUhhc2gsIGVudHJ5KSB7XG4gICAgaWYgKG5vZGUua2V5SGFzaCA9PT0ga2V5SGFzaCkge1xuICAgICAgcmV0dXJuIG5ldyBIYXNoQ29sbGlzaW9uTm9kZShvd25lcklELCBrZXlIYXNoLCBbbm9kZS5lbnRyeSwgZW50cnldKTtcbiAgICB9XG5cbiAgICB2YXIgaWR4MSA9IChzaGlmdCA9PT0gMCA/IG5vZGUua2V5SGFzaCA6IG5vZGUua2V5SGFzaCA+Pj4gc2hpZnQpICYgTUFTSztcbiAgICB2YXIgaWR4MiA9IChzaGlmdCA9PT0gMCA/IGtleUhhc2ggOiBrZXlIYXNoID4+PiBzaGlmdCkgJiBNQVNLO1xuXG4gICAgdmFyIG5ld05vZGU7XG4gICAgdmFyIG5vZGVzID0gaWR4MSA9PT0gaWR4MiA/XG4gICAgICBbbWVyZ2VJbnRvTm9kZShub2RlLCBvd25lcklELCBzaGlmdCArIFNISUZULCBrZXlIYXNoLCBlbnRyeSldIDpcbiAgICAgICgobmV3Tm9kZSA9IG5ldyBWYWx1ZU5vZGUob3duZXJJRCwga2V5SGFzaCwgZW50cnkpKSwgaWR4MSA8IGlkeDIgPyBbbm9kZSwgbmV3Tm9kZV0gOiBbbmV3Tm9kZSwgbm9kZV0pO1xuXG4gICAgcmV0dXJuIG5ldyBCaXRtYXBJbmRleGVkTm9kZShvd25lcklELCAoMSA8PCBpZHgxKSB8ICgxIDw8IGlkeDIpLCBub2Rlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2Rlcyhvd25lcklELCBlbnRyaWVzLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKCFvd25lcklEKSB7XG4gICAgICBvd25lcklEID0gbmV3IE93bmVySUQoKTtcbiAgICB9XG4gICAgdmFyIG5vZGUgPSBuZXcgVmFsdWVOb2RlKG93bmVySUQsIGhhc2goa2V5KSwgW2tleSwgdmFsdWVdKTtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgZW50cmllcy5sZW5ndGg7IGlpKyspIHtcbiAgICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaWldO1xuICAgICAgbm9kZSA9IG5vZGUudXBkYXRlKG93bmVySUQsIDAsIHVuZGVmaW5lZCwgZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBmdW5jdGlvbiBwYWNrTm9kZXMob3duZXJJRCwgbm9kZXMsIGNvdW50LCBleGNsdWRpbmcpIHtcbiAgICB2YXIgYml0bWFwID0gMDtcbiAgICB2YXIgcGFja2VkSUkgPSAwO1xuICAgIHZhciBwYWNrZWROb2RlcyA9IG5ldyBBcnJheShjb3VudCk7XG4gICAgZm9yICh2YXIgaWkgPSAwLCBiaXQgPSAxLCBsZW4gPSBub2Rlcy5sZW5ndGg7IGlpIDwgbGVuOyBpaSsrLCBiaXQgPDw9IDEpIHtcbiAgICAgIHZhciBub2RlID0gbm9kZXNbaWldO1xuICAgICAgaWYgKG5vZGUgIT09IHVuZGVmaW5lZCAmJiBpaSAhPT0gZXhjbHVkaW5nKSB7XG4gICAgICAgIGJpdG1hcCB8PSBiaXQ7XG4gICAgICAgIHBhY2tlZE5vZGVzW3BhY2tlZElJKytdID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBCaXRtYXBJbmRleGVkTm9kZShvd25lcklELCBiaXRtYXAsIHBhY2tlZE5vZGVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4cGFuZE5vZGVzKG93bmVySUQsIG5vZGVzLCBiaXRtYXAsIGluY2x1ZGluZywgbm9kZSkge1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgdmFyIGV4cGFuZGVkTm9kZXMgPSBuZXcgQXJyYXkoU0laRSk7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBiaXRtYXAgIT09IDA7IGlpKyssIGJpdG1hcCA+Pj49IDEpIHtcbiAgICAgIGV4cGFuZGVkTm9kZXNbaWldID0gYml0bWFwICYgMSA/IG5vZGVzW2NvdW50KytdIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICBleHBhbmRlZE5vZGVzW2luY2x1ZGluZ10gPSBub2RlO1xuICAgIHJldHVybiBuZXcgSGFzaEFycmF5TWFwTm9kZShvd25lcklELCBjb3VudCArIDEsIGV4cGFuZGVkTm9kZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VJbnRvTWFwV2l0aChtYXAsIG1lcmdlciwgaXRlcmFibGVzKSB7XG4gICAgdmFyIGl0ZXJzID0gW107XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGl0ZXJhYmxlcy5sZW5ndGg7IGlpKyspIHtcbiAgICAgIHZhciB2YWx1ZSA9IGl0ZXJhYmxlc1tpaV07XG4gICAgICB2YXIgaXRlciA9IEtleWVkSXRlcmFibGUodmFsdWUpO1xuICAgICAgaWYgKCFpc0l0ZXJhYmxlKHZhbHVlKSkge1xuICAgICAgICBpdGVyID0gaXRlci5tYXAoZnVuY3Rpb24odiApIHtyZXR1cm4gZnJvbUpTKHYpfSk7XG4gICAgICB9XG4gICAgICBpdGVycy5wdXNoKGl0ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VJbnRvQ29sbGVjdGlvbldpdGgobWFwLCBtZXJnZXIsIGl0ZXJzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZXBNZXJnZXIoZXhpc3RpbmcsIHZhbHVlLCBrZXkpIHtcbiAgICByZXR1cm4gZXhpc3RpbmcgJiYgZXhpc3RpbmcubWVyZ2VEZWVwICYmIGlzSXRlcmFibGUodmFsdWUpID9cbiAgICAgIGV4aXN0aW5nLm1lcmdlRGVlcCh2YWx1ZSkgOlxuICAgICAgaXMoZXhpc3RpbmcsIHZhbHVlKSA/IGV4aXN0aW5nIDogdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBkZWVwTWVyZ2VyV2l0aChtZXJnZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZXhpc3RpbmcsIHZhbHVlLCBrZXkpICB7XG4gICAgICBpZiAoZXhpc3RpbmcgJiYgZXhpc3RpbmcubWVyZ2VEZWVwV2l0aCAmJiBpc0l0ZXJhYmxlKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmcubWVyZ2VEZWVwV2l0aChtZXJnZXIsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHZhciBuZXh0VmFsdWUgPSBtZXJnZXIoZXhpc3RpbmcsIHZhbHVlLCBrZXkpO1xuICAgICAgcmV0dXJuIGlzKGV4aXN0aW5nLCBuZXh0VmFsdWUpID8gZXhpc3RpbmcgOiBuZXh0VmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlSW50b0NvbGxlY3Rpb25XaXRoKGNvbGxlY3Rpb24sIG1lcmdlciwgaXRlcnMpIHtcbiAgICBpdGVycyA9IGl0ZXJzLmZpbHRlcihmdW5jdGlvbih4ICkge3JldHVybiB4LnNpemUgIT09IDB9KTtcbiAgICBpZiAoaXRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICB9XG4gICAgaWYgKGNvbGxlY3Rpb24uc2l6ZSA9PT0gMCAmJiAhY29sbGVjdGlvbi5fX293bmVySUQgJiYgaXRlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbi5jb25zdHJ1Y3RvcihpdGVyc1swXSk7XG4gICAgfVxuICAgIHJldHVybiBjb2xsZWN0aW9uLndpdGhNdXRhdGlvbnMoZnVuY3Rpb24oY29sbGVjdGlvbiApIHtcbiAgICAgIHZhciBtZXJnZUludG9NYXAgPSBtZXJnZXIgP1xuICAgICAgICBmdW5jdGlvbih2YWx1ZSwga2V5KSAge1xuICAgICAgICAgIGNvbGxlY3Rpb24udXBkYXRlKGtleSwgTk9UX1NFVCwgZnVuY3Rpb24oZXhpc3RpbmcgKVxuICAgICAgICAgICAge3JldHVybiBleGlzdGluZyA9PT0gTk9UX1NFVCA/IHZhbHVlIDogbWVyZ2VyKGV4aXN0aW5nLCB2YWx1ZSwga2V5KX1cbiAgICAgICAgICApO1xuICAgICAgICB9IDpcbiAgICAgICAgZnVuY3Rpb24odmFsdWUsIGtleSkgIHtcbiAgICAgICAgICBjb2xsZWN0aW9uLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGl0ZXJzLmxlbmd0aDsgaWkrKykge1xuICAgICAgICBpdGVyc1tpaV0uZm9yRWFjaChtZXJnZUludG9NYXApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlSW5EZWVwTWFwKGV4aXN0aW5nLCBrZXlQYXRoSXRlciwgbm90U2V0VmFsdWUsIHVwZGF0ZXIpIHtcbiAgICB2YXIgaXNOb3RTZXQgPSBleGlzdGluZyA9PT0gTk9UX1NFVDtcbiAgICB2YXIgc3RlcCA9IGtleVBhdGhJdGVyLm5leHQoKTtcbiAgICBpZiAoc3RlcC5kb25lKSB7XG4gICAgICB2YXIgZXhpc3RpbmdWYWx1ZSA9IGlzTm90U2V0ID8gbm90U2V0VmFsdWUgOiBleGlzdGluZztcbiAgICAgIHZhciBuZXdWYWx1ZSA9IHVwZGF0ZXIoZXhpc3RpbmdWYWx1ZSk7XG4gICAgICByZXR1cm4gbmV3VmFsdWUgPT09IGV4aXN0aW5nVmFsdWUgPyBleGlzdGluZyA6IG5ld1ZhbHVlO1xuICAgIH1cbiAgICBpbnZhcmlhbnQoXG4gICAgICBpc05vdFNldCB8fCAoZXhpc3RpbmcgJiYgZXhpc3Rpbmcuc2V0KSxcbiAgICAgICdpbnZhbGlkIGtleVBhdGgnXG4gICAgKTtcbiAgICB2YXIga2V5ID0gc3RlcC52YWx1ZTtcbiAgICB2YXIgbmV4dEV4aXN0aW5nID0gaXNOb3RTZXQgPyBOT1RfU0VUIDogZXhpc3RpbmcuZ2V0KGtleSwgTk9UX1NFVCk7XG4gICAgdmFyIG5leHRVcGRhdGVkID0gdXBkYXRlSW5EZWVwTWFwKFxuICAgICAgbmV4dEV4aXN0aW5nLFxuICAgICAga2V5UGF0aEl0ZXIsXG4gICAgICBub3RTZXRWYWx1ZSxcbiAgICAgIHVwZGF0ZXJcbiAgICApO1xuICAgIHJldHVybiBuZXh0VXBkYXRlZCA9PT0gbmV4dEV4aXN0aW5nID8gZXhpc3RpbmcgOlxuICAgICAgbmV4dFVwZGF0ZWQgPT09IE5PVF9TRVQgPyBleGlzdGluZy5yZW1vdmUoa2V5KSA6XG4gICAgICAoaXNOb3RTZXQgPyBlbXB0eU1hcCgpIDogZXhpc3RpbmcpLnNldChrZXksIG5leHRVcGRhdGVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvcENvdW50KHgpIHtcbiAgICB4ID0geCAtICgoeCA+PiAxKSAmIDB4NTU1NTU1NTUpO1xuICAgIHggPSAoeCAmIDB4MzMzMzMzMzMpICsgKCh4ID4+IDIpICYgMHgzMzMzMzMzMyk7XG4gICAgeCA9ICh4ICsgKHggPj4gNCkpICYgMHgwZjBmMGYwZjtcbiAgICB4ID0geCArICh4ID4+IDgpO1xuICAgIHggPSB4ICsgKHggPj4gMTYpO1xuICAgIHJldHVybiB4ICYgMHg3ZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEluKGFycmF5LCBpZHgsIHZhbCwgY2FuRWRpdCkge1xuICAgIHZhciBuZXdBcnJheSA9IGNhbkVkaXQgPyBhcnJheSA6IGFyckNvcHkoYXJyYXkpO1xuICAgIG5ld0FycmF5W2lkeF0gPSB2YWw7XG4gICAgcmV0dXJuIG5ld0FycmF5O1xuICB9XG5cbiAgZnVuY3Rpb24gc3BsaWNlSW4oYXJyYXksIGlkeCwgdmFsLCBjYW5FZGl0KSB7XG4gICAgdmFyIG5ld0xlbiA9IGFycmF5Lmxlbmd0aCArIDE7XG4gICAgaWYgKGNhbkVkaXQgJiYgaWR4ICsgMSA9PT0gbmV3TGVuKSB7XG4gICAgICBhcnJheVtpZHhdID0gdmFsO1xuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICB2YXIgbmV3QXJyYXkgPSBuZXcgQXJyYXkobmV3TGVuKTtcbiAgICB2YXIgYWZ0ZXIgPSAwO1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBuZXdMZW47IGlpKyspIHtcbiAgICAgIGlmIChpaSA9PT0gaWR4KSB7XG4gICAgICAgIG5ld0FycmF5W2lpXSA9IHZhbDtcbiAgICAgICAgYWZ0ZXIgPSAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0FycmF5W2lpXSA9IGFycmF5W2lpICsgYWZ0ZXJdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3QXJyYXk7XG4gIH1cblxuICBmdW5jdGlvbiBzcGxpY2VPdXQoYXJyYXksIGlkeCwgY2FuRWRpdCkge1xuICAgIHZhciBuZXdMZW4gPSBhcnJheS5sZW5ndGggLSAxO1xuICAgIGlmIChjYW5FZGl0ICYmIGlkeCA9PT0gbmV3TGVuKSB7XG4gICAgICBhcnJheS5wb3AoKTtcbiAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG4gICAgdmFyIG5ld0FycmF5ID0gbmV3IEFycmF5KG5ld0xlbik7XG4gICAgdmFyIGFmdGVyID0gMDtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgbmV3TGVuOyBpaSsrKSB7XG4gICAgICBpZiAoaWkgPT09IGlkeCkge1xuICAgICAgICBhZnRlciA9IDE7XG4gICAgICB9XG4gICAgICBuZXdBcnJheVtpaV0gPSBhcnJheVtpaSArIGFmdGVyXTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0FycmF5O1xuICB9XG5cbiAgdmFyIE1BWF9BUlJBWV9NQVBfU0laRSA9IFNJWkUgLyA0O1xuICB2YXIgTUFYX0JJVE1BUF9JTkRFWEVEX1NJWkUgPSBTSVpFIC8gMjtcbiAgdmFyIE1JTl9IQVNIX0FSUkFZX01BUF9TSVpFID0gU0laRSAvIDQ7XG5cbiAgY3JlYXRlQ2xhc3MoTGlzdCwgSW5kZXhlZENvbGxlY3Rpb24pO1xuXG4gICAgLy8gQHByYWdtYSBDb25zdHJ1Y3Rpb25cblxuICAgIGZ1bmN0aW9uIExpc3QodmFsdWUpIHtcbiAgICAgIHZhciBlbXB0eSA9IGVtcHR5TGlzdCgpO1xuICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGVtcHR5O1xuICAgICAgfVxuICAgICAgaWYgKGlzTGlzdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZXIgPSBJbmRleGVkSXRlcmFibGUodmFsdWUpO1xuICAgICAgdmFyIHNpemUgPSBpdGVyLnNpemU7XG4gICAgICBpZiAoc2l6ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZW1wdHk7XG4gICAgICB9XG4gICAgICBhc3NlcnROb3RJbmZpbml0ZShzaXplKTtcbiAgICAgIGlmIChzaXplID4gMCAmJiBzaXplIDwgU0laRSkge1xuICAgICAgICByZXR1cm4gbWFrZUxpc3QoMCwgc2l6ZSwgU0hJRlQsIG51bGwsIG5ldyBWTm9kZShpdGVyLnRvQXJyYXkoKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5LndpdGhNdXRhdGlvbnMoZnVuY3Rpb24obGlzdCApIHtcbiAgICAgICAgbGlzdC5zZXRTaXplKHNpemUpO1xuICAgICAgICBpdGVyLmZvckVhY2goZnVuY3Rpb24odiwgaSkgIHtyZXR1cm4gbGlzdC5zZXQoaSwgdil9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIExpc3Qub2YgPSBmdW5jdGlvbigvKi4uLnZhbHVlcyovKSB7XG4gICAgICByZXR1cm4gdGhpcyhhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBMaXN0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX190b1N0cmluZygnTGlzdCBbJywgJ10nKTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBBY2Nlc3NcblxuICAgIExpc3QucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGluZGV4LCBub3RTZXRWYWx1ZSkge1xuICAgICAgaW5kZXggPSB3cmFwSW5kZXgodGhpcywgaW5kZXgpO1xuICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLnNpemUpIHtcbiAgICAgICAgaW5kZXggKz0gdGhpcy5fb3JpZ2luO1xuICAgICAgICB2YXIgbm9kZSA9IGxpc3ROb2RlRm9yKHRoaXMsIGluZGV4KTtcbiAgICAgICAgcmV0dXJuIG5vZGUgJiYgbm9kZS5hcnJheVtpbmRleCAmIE1BU0tdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5vdFNldFZhbHVlO1xuICAgIH07XG5cbiAgICAvLyBAcHJhZ21hIE1vZGlmaWNhdGlvblxuXG4gICAgTGlzdC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oaW5kZXgsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdXBkYXRlTGlzdCh0aGlzLCBpbmRleCwgdmFsdWUpO1xuICAgIH07XG5cbiAgICBMaXN0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgcmV0dXJuICF0aGlzLmhhcyhpbmRleCkgPyB0aGlzIDpcbiAgICAgICAgaW5kZXggPT09IDAgPyB0aGlzLnNoaWZ0KCkgOlxuICAgICAgICBpbmRleCA9PT0gdGhpcy5zaXplIC0gMSA/IHRoaXMucG9wKCkgOlxuICAgICAgICB0aGlzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcblxuICAgIExpc3QucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc3BsaWNlKGluZGV4LCAwLCB2YWx1ZSk7XG4gICAgfTtcblxuICAgIExpc3QucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5zaXplID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vd25lcklEKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuX29yaWdpbiA9IHRoaXMuX2NhcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5fbGV2ZWwgPSBTSElGVDtcbiAgICAgICAgdGhpcy5fcm9vdCA9IHRoaXMuX3RhaWwgPSBudWxsO1xuICAgICAgICB0aGlzLl9faGFzaCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fX2FsdGVyZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUxpc3QoKTtcbiAgICB9O1xuXG4gICAgTGlzdC5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uKC8qLi4udmFsdWVzKi8pIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBhcmd1bWVudHM7XG4gICAgICB2YXIgb2xkU2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzLndpdGhNdXRhdGlvbnMoZnVuY3Rpb24obGlzdCApIHtcbiAgICAgICAgc2V0TGlzdEJvdW5kcyhsaXN0LCAwLCBvbGRTaXplICsgdmFsdWVzLmxlbmd0aCk7XG4gICAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCB2YWx1ZXMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgICAgbGlzdC5zZXQob2xkU2l6ZSArIGlpLCB2YWx1ZXNbaWldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIExpc3QucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHNldExpc3RCb3VuZHModGhpcywgMCwgLTEpO1xuICAgIH07XG5cbiAgICBMaXN0LnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24oLyouLi52YWx1ZXMqLykge1xuICAgICAgdmFyIHZhbHVlcyA9IGFyZ3VtZW50cztcbiAgICAgIHJldHVybiB0aGlzLndpdGhNdXRhdGlvbnMoZnVuY3Rpb24obGlzdCApIHtcbiAgICAgICAgc2V0TGlzdEJvdW5kcyhsaXN0LCAtdmFsdWVzLmxlbmd0aCk7XG4gICAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCB2YWx1ZXMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgICAgbGlzdC5zZXQoaWksIHZhbHVlc1tpaV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgTGlzdC5wcm90b3R5cGUuc2hpZnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzZXRMaXN0Qm91bmRzKHRoaXMsIDEpO1xuICAgIH07XG5cbiAgICAvLyBAcHJhZ21hIENvbXBvc2l0aW9uXG5cbiAgICBMaXN0LnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uKC8qLi4uaXRlcnMqLykge1xuICAgICAgcmV0dXJuIG1lcmdlSW50b0xpc3RXaXRoKHRoaXMsIHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgTGlzdC5wcm90b3R5cGUubWVyZ2VXaXRoID0gZnVuY3Rpb24obWVyZ2VyKSB7dmFyIGl0ZXJzID0gU0xJQ0UkMC5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICByZXR1cm4gbWVyZ2VJbnRvTGlzdFdpdGgodGhpcywgbWVyZ2VyLCBpdGVycyk7XG4gICAgfTtcblxuICAgIExpc3QucHJvdG90eXBlLm1lcmdlRGVlcCA9IGZ1bmN0aW9uKC8qLi4uaXRlcnMqLykge1xuICAgICAgcmV0dXJuIG1lcmdlSW50b0xpc3RXaXRoKHRoaXMsIGRlZXBNZXJnZXIsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIExpc3QucHJvdG90eXBlLm1lcmdlRGVlcFdpdGggPSBmdW5jdGlvbihtZXJnZXIpIHt2YXIgaXRlcnMgPSBTTElDRSQwLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIHJldHVybiBtZXJnZUludG9MaXN0V2l0aCh0aGlzLCBkZWVwTWVyZ2VyV2l0aChtZXJnZXIpLCBpdGVycyk7XG4gICAgfTtcblxuICAgIExpc3QucHJvdG90eXBlLnNldFNpemUgPSBmdW5jdGlvbihzaXplKSB7XG4gICAgICByZXR1cm4gc2V0TGlzdEJvdW5kcyh0aGlzLCAwLCBzaXplKTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBJdGVyYXRpb25cblxuICAgIExpc3QucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24oYmVnaW4sIGVuZCkge1xuICAgICAgdmFyIHNpemUgPSB0aGlzLnNpemU7XG4gICAgICBpZiAod2hvbGVTbGljZShiZWdpbiwgZW5kLCBzaXplKSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXRMaXN0Qm91bmRzKFxuICAgICAgICB0aGlzLFxuICAgICAgICByZXNvbHZlQmVnaW4oYmVnaW4sIHNpemUpLFxuICAgICAgICByZXNvbHZlRW5kKGVuZCwgc2l6ZSlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIExpc3QucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHZhbHVlcyA9IGl0ZXJhdGVMaXN0KHRoaXMsIHJldmVyc2UpO1xuICAgICAgcmV0dXJuIG5ldyBJdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlcygpO1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IERPTkUgP1xuICAgICAgICAgIGl0ZXJhdG9yRG9uZSgpIDpcbiAgICAgICAgICBpdGVyYXRvclZhbHVlKHR5cGUsIGluZGV4KyssIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBMaXN0LnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciB2YWx1ZXMgPSBpdGVyYXRlTGlzdCh0aGlzLCByZXZlcnNlKTtcbiAgICAgIHZhciB2YWx1ZTtcbiAgICAgIHdoaWxlICgodmFsdWUgPSB2YWx1ZXMoKSkgIT09IERPTkUpIHtcbiAgICAgICAgaWYgKGZuKHZhbHVlLCBpbmRleCsrLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH07XG5cbiAgICBMaXN0LnByb3RvdHlwZS5fX2Vuc3VyZU93bmVyID0gZnVuY3Rpb24ob3duZXJJRCkge1xuICAgICAgaWYgKG93bmVySUQgPT09IHRoaXMuX19vd25lcklEKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgaWYgKCFvd25lcklEKSB7XG4gICAgICAgIHRoaXMuX19vd25lcklEID0gb3duZXJJRDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFrZUxpc3QodGhpcy5fb3JpZ2luLCB0aGlzLl9jYXBhY2l0eSwgdGhpcy5fbGV2ZWwsIHRoaXMuX3Jvb3QsIHRoaXMuX3RhaWwsIG93bmVySUQsIHRoaXMuX19oYXNoKTtcbiAgICB9O1xuXG5cbiAgZnVuY3Rpb24gaXNMaXN0KG1heWJlTGlzdCkge1xuICAgIHJldHVybiAhIShtYXliZUxpc3QgJiYgbWF5YmVMaXN0W0lTX0xJU1RfU0VOVElORUxdKTtcbiAgfVxuXG4gIExpc3QuaXNMaXN0ID0gaXNMaXN0O1xuXG4gIHZhciBJU19MSVNUX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfTElTVF9fQEAnO1xuXG4gIHZhciBMaXN0UHJvdG90eXBlID0gTGlzdC5wcm90b3R5cGU7XG4gIExpc3RQcm90b3R5cGVbSVNfTElTVF9TRU5USU5FTF0gPSB0cnVlO1xuICBMaXN0UHJvdG90eXBlW0RFTEVURV0gPSBMaXN0UHJvdG90eXBlLnJlbW92ZTtcbiAgTGlzdFByb3RvdHlwZS5zZXRJbiA9IE1hcFByb3RvdHlwZS5zZXRJbjtcbiAgTGlzdFByb3RvdHlwZS5kZWxldGVJbiA9XG4gIExpc3RQcm90b3R5cGUucmVtb3ZlSW4gPSBNYXBQcm90b3R5cGUucmVtb3ZlSW47XG4gIExpc3RQcm90b3R5cGUudXBkYXRlID0gTWFwUHJvdG90eXBlLnVwZGF0ZTtcbiAgTGlzdFByb3RvdHlwZS51cGRhdGVJbiA9IE1hcFByb3RvdHlwZS51cGRhdGVJbjtcbiAgTGlzdFByb3RvdHlwZS5tZXJnZUluID0gTWFwUHJvdG90eXBlLm1lcmdlSW47XG4gIExpc3RQcm90b3R5cGUubWVyZ2VEZWVwSW4gPSBNYXBQcm90b3R5cGUubWVyZ2VEZWVwSW47XG4gIExpc3RQcm90b3R5cGUud2l0aE11dGF0aW9ucyA9IE1hcFByb3RvdHlwZS53aXRoTXV0YXRpb25zO1xuICBMaXN0UHJvdG90eXBlLmFzTXV0YWJsZSA9IE1hcFByb3RvdHlwZS5hc011dGFibGU7XG4gIExpc3RQcm90b3R5cGUuYXNJbW11dGFibGUgPSBNYXBQcm90b3R5cGUuYXNJbW11dGFibGU7XG4gIExpc3RQcm90b3R5cGUud2FzQWx0ZXJlZCA9IE1hcFByb3RvdHlwZS53YXNBbHRlcmVkO1xuXG5cblxuICAgIGZ1bmN0aW9uIFZOb2RlKGFycmF5LCBvd25lcklEKSB7XG4gICAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgICB0aGlzLm93bmVySUQgPSBvd25lcklEO1xuICAgIH1cblxuICAgIC8vIFRPRE86IHNlZW1zIGxpa2UgdGhlc2UgbWV0aG9kcyBhcmUgdmVyeSBzaW1pbGFyXG5cbiAgICBWTm9kZS5wcm90b3R5cGUucmVtb3ZlQmVmb3JlID0gZnVuY3Rpb24ob3duZXJJRCwgbGV2ZWwsIGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPT09IGxldmVsID8gMSA8PCBsZXZlbCA6IDAgfHwgdGhpcy5hcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB2YXIgb3JpZ2luSW5kZXggPSAoaW5kZXggPj4+IGxldmVsKSAmIE1BU0s7XG4gICAgICBpZiAob3JpZ2luSW5kZXggPj0gdGhpcy5hcnJheS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWTm9kZShbXSwgb3duZXJJRCk7XG4gICAgICB9XG4gICAgICB2YXIgcmVtb3ZpbmdGaXJzdCA9IG9yaWdpbkluZGV4ID09PSAwO1xuICAgICAgdmFyIG5ld0NoaWxkO1xuICAgICAgaWYgKGxldmVsID4gMCkge1xuICAgICAgICB2YXIgb2xkQ2hpbGQgPSB0aGlzLmFycmF5W29yaWdpbkluZGV4XTtcbiAgICAgICAgbmV3Q2hpbGQgPSBvbGRDaGlsZCAmJiBvbGRDaGlsZC5yZW1vdmVCZWZvcmUob3duZXJJRCwgbGV2ZWwgLSBTSElGVCwgaW5kZXgpO1xuICAgICAgICBpZiAobmV3Q2hpbGQgPT09IG9sZENoaWxkICYmIHJlbW92aW5nRmlyc3QpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJlbW92aW5nRmlyc3QgJiYgIW5ld0NoaWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIGVkaXRhYmxlID0gZWRpdGFibGVWTm9kZSh0aGlzLCBvd25lcklEKTtcbiAgICAgIGlmICghcmVtb3ZpbmdGaXJzdCkge1xuICAgICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgb3JpZ2luSW5kZXg7IGlpKyspIHtcbiAgICAgICAgICBlZGl0YWJsZS5hcnJheVtpaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChuZXdDaGlsZCkge1xuICAgICAgICBlZGl0YWJsZS5hcnJheVtvcmlnaW5JbmRleF0gPSBuZXdDaGlsZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlZGl0YWJsZTtcbiAgICB9O1xuXG4gICAgVk5vZGUucHJvdG90eXBlLnJlbW92ZUFmdGVyID0gZnVuY3Rpb24ob3duZXJJRCwgbGV2ZWwsIGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPT09IChsZXZlbCA/IDEgPDwgbGV2ZWwgOiAwKSB8fCB0aGlzLmFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBzaXplSW5kZXggPSAoKGluZGV4IC0gMSkgPj4+IGxldmVsKSAmIE1BU0s7XG4gICAgICBpZiAoc2l6ZUluZGV4ID49IHRoaXMuYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3Q2hpbGQ7XG4gICAgICBpZiAobGV2ZWwgPiAwKSB7XG4gICAgICAgIHZhciBvbGRDaGlsZCA9IHRoaXMuYXJyYXlbc2l6ZUluZGV4XTtcbiAgICAgICAgbmV3Q2hpbGQgPSBvbGRDaGlsZCAmJiBvbGRDaGlsZC5yZW1vdmVBZnRlcihvd25lcklELCBsZXZlbCAtIFNISUZULCBpbmRleCk7XG4gICAgICAgIGlmIChuZXdDaGlsZCA9PT0gb2xkQ2hpbGQgJiYgc2l6ZUluZGV4ID09PSB0aGlzLmFycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgZWRpdGFibGUgPSBlZGl0YWJsZVZOb2RlKHRoaXMsIG93bmVySUQpO1xuICAgICAgZWRpdGFibGUuYXJyYXkuc3BsaWNlKHNpemVJbmRleCArIDEpO1xuICAgICAgaWYgKG5ld0NoaWxkKSB7XG4gICAgICAgIGVkaXRhYmxlLmFycmF5W3NpemVJbmRleF0gPSBuZXdDaGlsZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlZGl0YWJsZTtcbiAgICB9O1xuXG5cblxuICB2YXIgRE9ORSA9IHt9O1xuXG4gIGZ1bmN0aW9uIGl0ZXJhdGVMaXN0KGxpc3QsIHJldmVyc2UpIHtcbiAgICB2YXIgbGVmdCA9IGxpc3QuX29yaWdpbjtcbiAgICB2YXIgcmlnaHQgPSBsaXN0Ll9jYXBhY2l0eTtcbiAgICB2YXIgdGFpbFBvcyA9IGdldFRhaWxPZmZzZXQocmlnaHQpO1xuICAgIHZhciB0YWlsID0gbGlzdC5fdGFpbDtcblxuICAgIHJldHVybiBpdGVyYXRlTm9kZU9yTGVhZihsaXN0Ll9yb290LCBsaXN0Ll9sZXZlbCwgMCk7XG5cbiAgICBmdW5jdGlvbiBpdGVyYXRlTm9kZU9yTGVhZihub2RlLCBsZXZlbCwgb2Zmc2V0KSB7XG4gICAgICByZXR1cm4gbGV2ZWwgPT09IDAgP1xuICAgICAgICBpdGVyYXRlTGVhZihub2RlLCBvZmZzZXQpIDpcbiAgICAgICAgaXRlcmF0ZU5vZGUobm9kZSwgbGV2ZWwsIG9mZnNldCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXRlcmF0ZUxlYWYobm9kZSwgb2Zmc2V0KSB7XG4gICAgICB2YXIgYXJyYXkgPSBvZmZzZXQgPT09IHRhaWxQb3MgPyB0YWlsICYmIHRhaWwuYXJyYXkgOiBub2RlICYmIG5vZGUuYXJyYXk7XG4gICAgICB2YXIgZnJvbSA9IG9mZnNldCA+IGxlZnQgPyAwIDogbGVmdCAtIG9mZnNldDtcbiAgICAgIHZhciB0byA9IHJpZ2h0IC0gb2Zmc2V0O1xuICAgICAgaWYgKHRvID4gU0laRSkge1xuICAgICAgICB0byA9IFNJWkU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSAge1xuICAgICAgICBpZiAoZnJvbSA9PT0gdG8pIHtcbiAgICAgICAgICByZXR1cm4gRE9ORTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaWR4ID0gcmV2ZXJzZSA/IC0tdG8gOiBmcm9tKys7XG4gICAgICAgIHJldHVybiBhcnJheSAmJiBhcnJheVtpZHhdO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpdGVyYXRlTm9kZShub2RlLCBsZXZlbCwgb2Zmc2V0KSB7XG4gICAgICB2YXIgdmFsdWVzO1xuICAgICAgdmFyIGFycmF5ID0gbm9kZSAmJiBub2RlLmFycmF5O1xuICAgICAgdmFyIGZyb20gPSBvZmZzZXQgPiBsZWZ0ID8gMCA6IChsZWZ0IC0gb2Zmc2V0KSA+PiBsZXZlbDtcbiAgICAgIHZhciB0byA9ICgocmlnaHQgLSBvZmZzZXQpID4+IGxldmVsKSArIDE7XG4gICAgICBpZiAodG8gPiBTSVpFKSB7XG4gICAgICAgIHRvID0gU0laRTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmdW5jdGlvbigpICB7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXMoKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gRE9ORSkge1xuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZXMgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZnJvbSA9PT0gdG8pIHtcbiAgICAgICAgICAgIHJldHVybiBET05FO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgaWR4ID0gcmV2ZXJzZSA/IC0tdG8gOiBmcm9tKys7XG4gICAgICAgICAgdmFsdWVzID0gaXRlcmF0ZU5vZGVPckxlYWYoXG4gICAgICAgICAgICBhcnJheSAmJiBhcnJheVtpZHhdLCBsZXZlbCAtIFNISUZULCBvZmZzZXQgKyAoaWR4IDw8IGxldmVsKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gd2hpbGUgKHRydWUpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlTGlzdChvcmlnaW4sIGNhcGFjaXR5LCBsZXZlbCwgcm9vdCwgdGFpbCwgb3duZXJJRCwgaGFzaCkge1xuICAgIHZhciBsaXN0ID0gT2JqZWN0LmNyZWF0ZShMaXN0UHJvdG90eXBlKTtcbiAgICBsaXN0LnNpemUgPSBjYXBhY2l0eSAtIG9yaWdpbjtcbiAgICBsaXN0Ll9vcmlnaW4gPSBvcmlnaW47XG4gICAgbGlzdC5fY2FwYWNpdHkgPSBjYXBhY2l0eTtcbiAgICBsaXN0Ll9sZXZlbCA9IGxldmVsO1xuICAgIGxpc3QuX3Jvb3QgPSByb290O1xuICAgIGxpc3QuX3RhaWwgPSB0YWlsO1xuICAgIGxpc3QuX19vd25lcklEID0gb3duZXJJRDtcbiAgICBsaXN0Ll9faGFzaCA9IGhhc2g7XG4gICAgbGlzdC5fX2FsdGVyZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuXG4gIHZhciBFTVBUWV9MSVNUO1xuICBmdW5jdGlvbiBlbXB0eUxpc3QoKSB7XG4gICAgcmV0dXJuIEVNUFRZX0xJU1QgfHwgKEVNUFRZX0xJU1QgPSBtYWtlTGlzdCgwLCAwLCBTSElGVCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlTGlzdChsaXN0LCBpbmRleCwgdmFsdWUpIHtcbiAgICBpbmRleCA9IHdyYXBJbmRleChsaXN0LCBpbmRleCk7XG5cbiAgICBpZiAoaW5kZXggIT09IGluZGV4KSB7XG4gICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPj0gbGlzdC5zaXplIHx8IGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuIGxpc3Qud2l0aE11dGF0aW9ucyhmdW5jdGlvbihsaXN0ICkge1xuICAgICAgICBpbmRleCA8IDAgP1xuICAgICAgICAgIHNldExpc3RCb3VuZHMobGlzdCwgaW5kZXgpLnNldCgwLCB2YWx1ZSkgOlxuICAgICAgICAgIHNldExpc3RCb3VuZHMobGlzdCwgMCwgaW5kZXggKyAxKS5zZXQoaW5kZXgsIHZhbHVlKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5kZXggKz0gbGlzdC5fb3JpZ2luO1xuXG4gICAgdmFyIG5ld1RhaWwgPSBsaXN0Ll90YWlsO1xuICAgIHZhciBuZXdSb290ID0gbGlzdC5fcm9vdDtcbiAgICB2YXIgZGlkQWx0ZXIgPSBNYWtlUmVmKERJRF9BTFRFUik7XG4gICAgaWYgKGluZGV4ID49IGdldFRhaWxPZmZzZXQobGlzdC5fY2FwYWNpdHkpKSB7XG4gICAgICBuZXdUYWlsID0gdXBkYXRlVk5vZGUobmV3VGFpbCwgbGlzdC5fX293bmVySUQsIDAsIGluZGV4LCB2YWx1ZSwgZGlkQWx0ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdSb290ID0gdXBkYXRlVk5vZGUobmV3Um9vdCwgbGlzdC5fX293bmVySUQsIGxpc3QuX2xldmVsLCBpbmRleCwgdmFsdWUsIGRpZEFsdGVyKTtcbiAgICB9XG5cbiAgICBpZiAoIWRpZEFsdGVyLnZhbHVlKSB7XG4gICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG5cbiAgICBpZiAobGlzdC5fX293bmVySUQpIHtcbiAgICAgIGxpc3QuX3Jvb3QgPSBuZXdSb290O1xuICAgICAgbGlzdC5fdGFpbCA9IG5ld1RhaWw7XG4gICAgICBsaXN0Ll9faGFzaCA9IHVuZGVmaW5lZDtcbiAgICAgIGxpc3QuX19hbHRlcmVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cbiAgICByZXR1cm4gbWFrZUxpc3QobGlzdC5fb3JpZ2luLCBsaXN0Ll9jYXBhY2l0eSwgbGlzdC5fbGV2ZWwsIG5ld1Jvb3QsIG5ld1RhaWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVk5vZGUobm9kZSwgb3duZXJJRCwgbGV2ZWwsIGluZGV4LCB2YWx1ZSwgZGlkQWx0ZXIpIHtcbiAgICB2YXIgaWR4ID0gKGluZGV4ID4+PiBsZXZlbCkgJiBNQVNLO1xuICAgIHZhciBub2RlSGFzID0gbm9kZSAmJiBpZHggPCBub2RlLmFycmF5Lmxlbmd0aDtcbiAgICBpZiAoIW5vZGVIYXMgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgdmFyIG5ld05vZGU7XG5cbiAgICBpZiAobGV2ZWwgPiAwKSB7XG4gICAgICB2YXIgbG93ZXJOb2RlID0gbm9kZSAmJiBub2RlLmFycmF5W2lkeF07XG4gICAgICB2YXIgbmV3TG93ZXJOb2RlID0gdXBkYXRlVk5vZGUobG93ZXJOb2RlLCBvd25lcklELCBsZXZlbCAtIFNISUZULCBpbmRleCwgdmFsdWUsIGRpZEFsdGVyKTtcbiAgICAgIGlmIChuZXdMb3dlck5vZGUgPT09IGxvd2VyTm9kZSkge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH1cbiAgICAgIG5ld05vZGUgPSBlZGl0YWJsZVZOb2RlKG5vZGUsIG93bmVySUQpO1xuICAgICAgbmV3Tm9kZS5hcnJheVtpZHhdID0gbmV3TG93ZXJOb2RlO1xuICAgICAgcmV0dXJuIG5ld05vZGU7XG4gICAgfVxuXG4gICAgaWYgKG5vZGVIYXMgJiYgbm9kZS5hcnJheVtpZHhdID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgU2V0UmVmKGRpZEFsdGVyKTtcblxuICAgIG5ld05vZGUgPSBlZGl0YWJsZVZOb2RlKG5vZGUsIG93bmVySUQpO1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIGlkeCA9PT0gbmV3Tm9kZS5hcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICBuZXdOb2RlLmFycmF5LnBvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdOb2RlLmFycmF5W2lkeF0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld05vZGU7XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0YWJsZVZOb2RlKG5vZGUsIG93bmVySUQpIHtcbiAgICBpZiAob3duZXJJRCAmJiBub2RlICYmIG93bmVySUQgPT09IG5vZGUub3duZXJJRCkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHJldHVybiBuZXcgVk5vZGUobm9kZSA/IG5vZGUuYXJyYXkuc2xpY2UoKSA6IFtdLCBvd25lcklEKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3ROb2RlRm9yKGxpc3QsIHJhd0luZGV4KSB7XG4gICAgaWYgKHJhd0luZGV4ID49IGdldFRhaWxPZmZzZXQobGlzdC5fY2FwYWNpdHkpKSB7XG4gICAgICByZXR1cm4gbGlzdC5fdGFpbDtcbiAgICB9XG4gICAgaWYgKHJhd0luZGV4IDwgMSA8PCAobGlzdC5fbGV2ZWwgKyBTSElGVCkpIHtcbiAgICAgIHZhciBub2RlID0gbGlzdC5fcm9vdDtcbiAgICAgIHZhciBsZXZlbCA9IGxpc3QuX2xldmVsO1xuICAgICAgd2hpbGUgKG5vZGUgJiYgbGV2ZWwgPiAwKSB7XG4gICAgICAgIG5vZGUgPSBub2RlLmFycmF5WyhyYXdJbmRleCA+Pj4gbGV2ZWwpICYgTUFTS107XG4gICAgICAgIGxldmVsIC09IFNISUZUO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0TGlzdEJvdW5kcyhsaXN0LCBiZWdpbiwgZW5kKSB7XG4gICAgLy8gU2FuaXRpemUgYmVnaW4gJiBlbmQgdXNpbmcgdGhpcyBzaG9ydGhhbmQgZm9yIFRvSW50MzIoYXJndW1lbnQpXG4gICAgLy8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvaW50MzJcbiAgICBpZiAoYmVnaW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgYmVnaW4gPSBiZWdpbiB8IDA7XG4gICAgfVxuICAgIGlmIChlbmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZW5kID0gZW5kIHwgMDtcbiAgICB9XG4gICAgdmFyIG93bmVyID0gbGlzdC5fX293bmVySUQgfHwgbmV3IE93bmVySUQoKTtcbiAgICB2YXIgb2xkT3JpZ2luID0gbGlzdC5fb3JpZ2luO1xuICAgIHZhciBvbGRDYXBhY2l0eSA9IGxpc3QuX2NhcGFjaXR5O1xuICAgIHZhciBuZXdPcmlnaW4gPSBvbGRPcmlnaW4gKyBiZWdpbjtcbiAgICB2YXIgbmV3Q2FwYWNpdHkgPSBlbmQgPT09IHVuZGVmaW5lZCA/IG9sZENhcGFjaXR5IDogZW5kIDwgMCA/IG9sZENhcGFjaXR5ICsgZW5kIDogb2xkT3JpZ2luICsgZW5kO1xuICAgIGlmIChuZXdPcmlnaW4gPT09IG9sZE9yaWdpbiAmJiBuZXdDYXBhY2l0eSA9PT0gb2xkQ2FwYWNpdHkpIHtcbiAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cblxuICAgIC8vIElmIGl0J3MgZ29pbmcgdG8gZW5kIGFmdGVyIGl0IHN0YXJ0cywgaXQncyBlbXB0eS5cbiAgICBpZiAobmV3T3JpZ2luID49IG5ld0NhcGFjaXR5KSB7XG4gICAgICByZXR1cm4gbGlzdC5jbGVhcigpO1xuICAgIH1cblxuICAgIHZhciBuZXdMZXZlbCA9IGxpc3QuX2xldmVsO1xuICAgIHZhciBuZXdSb290ID0gbGlzdC5fcm9vdDtcblxuICAgIC8vIE5ldyBvcmlnaW4gbWlnaHQgbmVlZCBjcmVhdGluZyBhIGhpZ2hlciByb290LlxuICAgIHZhciBvZmZzZXRTaGlmdCA9IDA7XG4gICAgd2hpbGUgKG5ld09yaWdpbiArIG9mZnNldFNoaWZ0IDwgMCkge1xuICAgICAgbmV3Um9vdCA9IG5ldyBWTm9kZShuZXdSb290ICYmIG5ld1Jvb3QuYXJyYXkubGVuZ3RoID8gW3VuZGVmaW5lZCwgbmV3Um9vdF0gOiBbXSwgb3duZXIpO1xuICAgICAgbmV3TGV2ZWwgKz0gU0hJRlQ7XG4gICAgICBvZmZzZXRTaGlmdCArPSAxIDw8IG5ld0xldmVsO1xuICAgIH1cbiAgICBpZiAob2Zmc2V0U2hpZnQpIHtcbiAgICAgIG5ld09yaWdpbiArPSBvZmZzZXRTaGlmdDtcbiAgICAgIG9sZE9yaWdpbiArPSBvZmZzZXRTaGlmdDtcbiAgICAgIG5ld0NhcGFjaXR5ICs9IG9mZnNldFNoaWZ0O1xuICAgICAgb2xkQ2FwYWNpdHkgKz0gb2Zmc2V0U2hpZnQ7XG4gICAgfVxuXG4gICAgdmFyIG9sZFRhaWxPZmZzZXQgPSBnZXRUYWlsT2Zmc2V0KG9sZENhcGFjaXR5KTtcbiAgICB2YXIgbmV3VGFpbE9mZnNldCA9IGdldFRhaWxPZmZzZXQobmV3Q2FwYWNpdHkpO1xuXG4gICAgLy8gTmV3IHNpemUgbWlnaHQgbmVlZCBjcmVhdGluZyBhIGhpZ2hlciByb290LlxuICAgIHdoaWxlIChuZXdUYWlsT2Zmc2V0ID49IDEgPDwgKG5ld0xldmVsICsgU0hJRlQpKSB7XG4gICAgICBuZXdSb290ID0gbmV3IFZOb2RlKG5ld1Jvb3QgJiYgbmV3Um9vdC5hcnJheS5sZW5ndGggPyBbbmV3Um9vdF0gOiBbXSwgb3duZXIpO1xuICAgICAgbmV3TGV2ZWwgKz0gU0hJRlQ7XG4gICAgfVxuXG4gICAgLy8gTG9jYXRlIG9yIGNyZWF0ZSB0aGUgbmV3IHRhaWwuXG4gICAgdmFyIG9sZFRhaWwgPSBsaXN0Ll90YWlsO1xuICAgIHZhciBuZXdUYWlsID0gbmV3VGFpbE9mZnNldCA8IG9sZFRhaWxPZmZzZXQgP1xuICAgICAgbGlzdE5vZGVGb3IobGlzdCwgbmV3Q2FwYWNpdHkgLSAxKSA6XG4gICAgICBuZXdUYWlsT2Zmc2V0ID4gb2xkVGFpbE9mZnNldCA/IG5ldyBWTm9kZShbXSwgb3duZXIpIDogb2xkVGFpbDtcblxuICAgIC8vIE1lcmdlIFRhaWwgaW50byB0cmVlLlxuICAgIGlmIChvbGRUYWlsICYmIG5ld1RhaWxPZmZzZXQgPiBvbGRUYWlsT2Zmc2V0ICYmIG5ld09yaWdpbiA8IG9sZENhcGFjaXR5ICYmIG9sZFRhaWwuYXJyYXkubGVuZ3RoKSB7XG4gICAgICBuZXdSb290ID0gZWRpdGFibGVWTm9kZShuZXdSb290LCBvd25lcik7XG4gICAgICB2YXIgbm9kZSA9IG5ld1Jvb3Q7XG4gICAgICBmb3IgKHZhciBsZXZlbCA9IG5ld0xldmVsOyBsZXZlbCA+IFNISUZUOyBsZXZlbCAtPSBTSElGVCkge1xuICAgICAgICB2YXIgaWR4ID0gKG9sZFRhaWxPZmZzZXQgPj4+IGxldmVsKSAmIE1BU0s7XG4gICAgICAgIG5vZGUgPSBub2RlLmFycmF5W2lkeF0gPSBlZGl0YWJsZVZOb2RlKG5vZGUuYXJyYXlbaWR4XSwgb3duZXIpO1xuICAgICAgfVxuICAgICAgbm9kZS5hcnJheVsob2xkVGFpbE9mZnNldCA+Pj4gU0hJRlQpICYgTUFTS10gPSBvbGRUYWlsO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBzaXplIGhhcyBiZWVuIHJlZHVjZWQsIHRoZXJlJ3MgYSBjaGFuY2UgdGhlIHRhaWwgbmVlZHMgdG8gYmUgdHJpbW1lZC5cbiAgICBpZiAobmV3Q2FwYWNpdHkgPCBvbGRDYXBhY2l0eSkge1xuICAgICAgbmV3VGFpbCA9IG5ld1RhaWwgJiYgbmV3VGFpbC5yZW1vdmVBZnRlcihvd25lciwgMCwgbmV3Q2FwYWNpdHkpO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBuZXcgb3JpZ2luIGlzIHdpdGhpbiB0aGUgdGFpbCwgdGhlbiB3ZSBkbyBub3QgbmVlZCBhIHJvb3QuXG4gICAgaWYgKG5ld09yaWdpbiA+PSBuZXdUYWlsT2Zmc2V0KSB7XG4gICAgICBuZXdPcmlnaW4gLT0gbmV3VGFpbE9mZnNldDtcbiAgICAgIG5ld0NhcGFjaXR5IC09IG5ld1RhaWxPZmZzZXQ7XG4gICAgICBuZXdMZXZlbCA9IFNISUZUO1xuICAgICAgbmV3Um9vdCA9IG51bGw7XG4gICAgICBuZXdUYWlsID0gbmV3VGFpbCAmJiBuZXdUYWlsLnJlbW92ZUJlZm9yZShvd25lciwgMCwgbmV3T3JpZ2luKTtcblxuICAgIC8vIE90aGVyd2lzZSwgaWYgdGhlIHJvb3QgaGFzIGJlZW4gdHJpbW1lZCwgZ2FyYmFnZSBjb2xsZWN0LlxuICAgIH0gZWxzZSBpZiAobmV3T3JpZ2luID4gb2xkT3JpZ2luIHx8IG5ld1RhaWxPZmZzZXQgPCBvbGRUYWlsT2Zmc2V0KSB7XG4gICAgICBvZmZzZXRTaGlmdCA9IDA7XG5cbiAgICAgIC8vIElkZW50aWZ5IHRoZSBuZXcgdG9wIHJvb3Qgbm9kZSBvZiB0aGUgc3VidHJlZSBvZiB0aGUgb2xkIHJvb3QuXG4gICAgICB3aGlsZSAobmV3Um9vdCkge1xuICAgICAgICB2YXIgYmVnaW5JbmRleCA9IChuZXdPcmlnaW4gPj4+IG5ld0xldmVsKSAmIE1BU0s7XG4gICAgICAgIGlmIChiZWdpbkluZGV4ICE9PSAobmV3VGFpbE9mZnNldCA+Pj4gbmV3TGV2ZWwpICYgTUFTSykge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiZWdpbkluZGV4KSB7XG4gICAgICAgICAgb2Zmc2V0U2hpZnQgKz0gKDEgPDwgbmV3TGV2ZWwpICogYmVnaW5JbmRleDtcbiAgICAgICAgfVxuICAgICAgICBuZXdMZXZlbCAtPSBTSElGVDtcbiAgICAgICAgbmV3Um9vdCA9IG5ld1Jvb3QuYXJyYXlbYmVnaW5JbmRleF07XG4gICAgICB9XG5cbiAgICAgIC8vIFRyaW0gdGhlIG5ldyBzaWRlcyBvZiB0aGUgbmV3IHJvb3QuXG4gICAgICBpZiAobmV3Um9vdCAmJiBuZXdPcmlnaW4gPiBvbGRPcmlnaW4pIHtcbiAgICAgICAgbmV3Um9vdCA9IG5ld1Jvb3QucmVtb3ZlQmVmb3JlKG93bmVyLCBuZXdMZXZlbCwgbmV3T3JpZ2luIC0gb2Zmc2V0U2hpZnQpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld1Jvb3QgJiYgbmV3VGFpbE9mZnNldCA8IG9sZFRhaWxPZmZzZXQpIHtcbiAgICAgICAgbmV3Um9vdCA9IG5ld1Jvb3QucmVtb3ZlQWZ0ZXIob3duZXIsIG5ld0xldmVsLCBuZXdUYWlsT2Zmc2V0IC0gb2Zmc2V0U2hpZnQpO1xuICAgICAgfVxuICAgICAgaWYgKG9mZnNldFNoaWZ0KSB7XG4gICAgICAgIG5ld09yaWdpbiAtPSBvZmZzZXRTaGlmdDtcbiAgICAgICAgbmV3Q2FwYWNpdHkgLT0gb2Zmc2V0U2hpZnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxpc3QuX19vd25lcklEKSB7XG4gICAgICBsaXN0LnNpemUgPSBuZXdDYXBhY2l0eSAtIG5ld09yaWdpbjtcbiAgICAgIGxpc3QuX29yaWdpbiA9IG5ld09yaWdpbjtcbiAgICAgIGxpc3QuX2NhcGFjaXR5ID0gbmV3Q2FwYWNpdHk7XG4gICAgICBsaXN0Ll9sZXZlbCA9IG5ld0xldmVsO1xuICAgICAgbGlzdC5fcm9vdCA9IG5ld1Jvb3Q7XG4gICAgICBsaXN0Ll90YWlsID0gbmV3VGFpbDtcbiAgICAgIGxpc3QuX19oYXNoID0gdW5kZWZpbmVkO1xuICAgICAgbGlzdC5fX2FsdGVyZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICAgIHJldHVybiBtYWtlTGlzdChuZXdPcmlnaW4sIG5ld0NhcGFjaXR5LCBuZXdMZXZlbCwgbmV3Um9vdCwgbmV3VGFpbCk7XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZUludG9MaXN0V2l0aChsaXN0LCBtZXJnZXIsIGl0ZXJhYmxlcykge1xuICAgIHZhciBpdGVycyA9IFtdO1xuICAgIHZhciBtYXhTaXplID0gMDtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgaXRlcmFibGVzLmxlbmd0aDsgaWkrKykge1xuICAgICAgdmFyIHZhbHVlID0gaXRlcmFibGVzW2lpXTtcbiAgICAgIHZhciBpdGVyID0gSW5kZXhlZEl0ZXJhYmxlKHZhbHVlKTtcbiAgICAgIGlmIChpdGVyLnNpemUgPiBtYXhTaXplKSB7XG4gICAgICAgIG1heFNpemUgPSBpdGVyLnNpemU7XG4gICAgICB9XG4gICAgICBpZiAoIWlzSXRlcmFibGUodmFsdWUpKSB7XG4gICAgICAgIGl0ZXIgPSBpdGVyLm1hcChmdW5jdGlvbih2ICkge3JldHVybiBmcm9tSlModil9KTtcbiAgICAgIH1cbiAgICAgIGl0ZXJzLnB1c2goaXRlcik7XG4gICAgfVxuICAgIGlmIChtYXhTaXplID4gbGlzdC5zaXplKSB7XG4gICAgICBsaXN0ID0gbGlzdC5zZXRTaXplKG1heFNpemUpO1xuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VJbnRvQ29sbGVjdGlvbldpdGgobGlzdCwgbWVyZ2VyLCBpdGVycyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUYWlsT2Zmc2V0KHNpemUpIHtcbiAgICByZXR1cm4gc2l6ZSA8IFNJWkUgPyAwIDogKCgoc2l6ZSAtIDEpID4+PiBTSElGVCkgPDwgU0hJRlQpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoT3JkZXJlZE1hcCwgTWFwKTtcblxuICAgIC8vIEBwcmFnbWEgQ29uc3RydWN0aW9uXG5cbiAgICBmdW5jdGlvbiBPcmRlcmVkTWFwKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/IGVtcHR5T3JkZXJlZE1hcCgpIDpcbiAgICAgICAgaXNPcmRlcmVkTWFwKHZhbHVlKSA/IHZhbHVlIDpcbiAgICAgICAgZW1wdHlPcmRlcmVkTWFwKCkud2l0aE11dGF0aW9ucyhmdW5jdGlvbihtYXAgKSB7XG4gICAgICAgICAgdmFyIGl0ZXIgPSBLZXllZEl0ZXJhYmxlKHZhbHVlKTtcbiAgICAgICAgICBhc3NlcnROb3RJbmZpbml0ZShpdGVyLnNpemUpO1xuICAgICAgICAgIGl0ZXIuZm9yRWFjaChmdW5jdGlvbih2LCBrKSAge3JldHVybiBtYXAuc2V0KGssIHYpfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIE9yZGVyZWRNYXAub2YgPSBmdW5jdGlvbigvKi4uLnZhbHVlcyovKSB7XG4gICAgICByZXR1cm4gdGhpcyhhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBPcmRlcmVkTWFwLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX190b1N0cmluZygnT3JkZXJlZE1hcCB7JywgJ30nKTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBBY2Nlc3NcblxuICAgIE9yZGVyZWRNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGssIG5vdFNldFZhbHVlKSB7XG4gICAgICB2YXIgaW5kZXggPSB0aGlzLl9tYXAuZ2V0KGspO1xuICAgICAgcmV0dXJuIGluZGV4ICE9PSB1bmRlZmluZWQgPyB0aGlzLl9saXN0LmdldChpbmRleClbMV0gOiBub3RTZXRWYWx1ZTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBNb2RpZmljYXRpb25cblxuICAgIE9yZGVyZWRNYXAucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5zaXplID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vd25lcklEKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgICAgIHRoaXMuX21hcC5jbGVhcigpO1xuICAgICAgICB0aGlzLl9saXN0LmNsZWFyKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5T3JkZXJlZE1hcCgpO1xuICAgIH07XG5cbiAgICBPcmRlcmVkTWFwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihrLCB2KSB7XG4gICAgICByZXR1cm4gdXBkYXRlT3JkZXJlZE1hcCh0aGlzLCBrLCB2KTtcbiAgICB9O1xuXG4gICAgT3JkZXJlZE1hcC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oaykge1xuICAgICAgcmV0dXJuIHVwZGF0ZU9yZGVyZWRNYXAodGhpcywgaywgTk9UX1NFVCk7XG4gICAgfTtcblxuICAgIE9yZGVyZWRNYXAucHJvdG90eXBlLndhc0FsdGVyZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAud2FzQWx0ZXJlZCgpIHx8IHRoaXMuX2xpc3Qud2FzQWx0ZXJlZCgpO1xuICAgIH07XG5cbiAgICBPcmRlcmVkTWFwLnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgcmV0dXJuIHRoaXMuX2xpc3QuX19pdGVyYXRlKFxuICAgICAgICBmdW5jdGlvbihlbnRyeSApIHtyZXR1cm4gZW50cnkgJiYgZm4oZW50cnlbMV0sIGVudHJ5WzBdLCB0aGlzJDApfSxcbiAgICAgICAgcmV2ZXJzZVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgT3JkZXJlZE1hcC5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIHJldHVybiB0aGlzLl9saXN0LmZyb21FbnRyeVNlcSgpLl9faXRlcmF0b3IodHlwZSwgcmV2ZXJzZSk7XG4gICAgfTtcblxuICAgIE9yZGVyZWRNYXAucHJvdG90eXBlLl9fZW5zdXJlT3duZXIgPSBmdW5jdGlvbihvd25lcklEKSB7XG4gICAgICBpZiAob3duZXJJRCA9PT0gdGhpcy5fX293bmVySUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB2YXIgbmV3TWFwID0gdGhpcy5fbWFwLl9fZW5zdXJlT3duZXIob3duZXJJRCk7XG4gICAgICB2YXIgbmV3TGlzdCA9IHRoaXMuX2xpc3QuX19lbnN1cmVPd25lcihvd25lcklEKTtcbiAgICAgIGlmICghb3duZXJJRCkge1xuICAgICAgICB0aGlzLl9fb3duZXJJRCA9IG93bmVySUQ7XG4gICAgICAgIHRoaXMuX21hcCA9IG5ld01hcDtcbiAgICAgICAgdGhpcy5fbGlzdCA9IG5ld0xpc3Q7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1ha2VPcmRlcmVkTWFwKG5ld01hcCwgbmV3TGlzdCwgb3duZXJJRCwgdGhpcy5fX2hhc2gpO1xuICAgIH07XG5cblxuICBmdW5jdGlvbiBpc09yZGVyZWRNYXAobWF5YmVPcmRlcmVkTWFwKSB7XG4gICAgcmV0dXJuIGlzTWFwKG1heWJlT3JkZXJlZE1hcCkgJiYgaXNPcmRlcmVkKG1heWJlT3JkZXJlZE1hcCk7XG4gIH1cblxuICBPcmRlcmVkTWFwLmlzT3JkZXJlZE1hcCA9IGlzT3JkZXJlZE1hcDtcblxuICBPcmRlcmVkTWFwLnByb3RvdHlwZVtJU19PUkRFUkVEX1NFTlRJTkVMXSA9IHRydWU7XG4gIE9yZGVyZWRNYXAucHJvdG90eXBlW0RFTEVURV0gPSBPcmRlcmVkTWFwLnByb3RvdHlwZS5yZW1vdmU7XG5cblxuXG4gIGZ1bmN0aW9uIG1ha2VPcmRlcmVkTWFwKG1hcCwgbGlzdCwgb3duZXJJRCwgaGFzaCkge1xuICAgIHZhciBvbWFwID0gT2JqZWN0LmNyZWF0ZShPcmRlcmVkTWFwLnByb3RvdHlwZSk7XG4gICAgb21hcC5zaXplID0gbWFwID8gbWFwLnNpemUgOiAwO1xuICAgIG9tYXAuX21hcCA9IG1hcDtcbiAgICBvbWFwLl9saXN0ID0gbGlzdDtcbiAgICBvbWFwLl9fb3duZXJJRCA9IG93bmVySUQ7XG4gICAgb21hcC5fX2hhc2ggPSBoYXNoO1xuICAgIHJldHVybiBvbWFwO1xuICB9XG5cbiAgdmFyIEVNUFRZX09SREVSRURfTUFQO1xuICBmdW5jdGlvbiBlbXB0eU9yZGVyZWRNYXAoKSB7XG4gICAgcmV0dXJuIEVNUFRZX09SREVSRURfTUFQIHx8IChFTVBUWV9PUkRFUkVEX01BUCA9IG1ha2VPcmRlcmVkTWFwKGVtcHR5TWFwKCksIGVtcHR5TGlzdCgpKSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVPcmRlcmVkTWFwKG9tYXAsIGssIHYpIHtcbiAgICB2YXIgbWFwID0gb21hcC5fbWFwO1xuICAgIHZhciBsaXN0ID0gb21hcC5fbGlzdDtcbiAgICB2YXIgaSA9IG1hcC5nZXQoayk7XG4gICAgdmFyIGhhcyA9IGkgIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgbmV3TWFwO1xuICAgIHZhciBuZXdMaXN0O1xuICAgIGlmICh2ID09PSBOT1RfU0VUKSB7IC8vIHJlbW92ZWRcbiAgICAgIGlmICghaGFzKSB7XG4gICAgICAgIHJldHVybiBvbWFwO1xuICAgICAgfVxuICAgICAgaWYgKGxpc3Quc2l6ZSA+PSBTSVpFICYmIGxpc3Quc2l6ZSA+PSBtYXAuc2l6ZSAqIDIpIHtcbiAgICAgICAgbmV3TGlzdCA9IGxpc3QuZmlsdGVyKGZ1bmN0aW9uKGVudHJ5LCBpZHgpICB7cmV0dXJuIGVudHJ5ICE9PSB1bmRlZmluZWQgJiYgaSAhPT0gaWR4fSk7XG4gICAgICAgIG5ld01hcCA9IG5ld0xpc3QudG9LZXllZFNlcSgpLm1hcChmdW5jdGlvbihlbnRyeSApIHtyZXR1cm4gZW50cnlbMF19KS5mbGlwKCkudG9NYXAoKTtcbiAgICAgICAgaWYgKG9tYXAuX19vd25lcklEKSB7XG4gICAgICAgICAgbmV3TWFwLl9fb3duZXJJRCA9IG5ld0xpc3QuX19vd25lcklEID0gb21hcC5fX293bmVySUQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld01hcCA9IG1hcC5yZW1vdmUoayk7XG4gICAgICAgIG5ld0xpc3QgPSBpID09PSBsaXN0LnNpemUgLSAxID8gbGlzdC5wb3AoKSA6IGxpc3Quc2V0KGksIHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMpIHtcbiAgICAgICAgaWYgKHYgPT09IGxpc3QuZ2V0KGkpWzFdKSB7XG4gICAgICAgICAgcmV0dXJuIG9tYXA7XG4gICAgICAgIH1cbiAgICAgICAgbmV3TWFwID0gbWFwO1xuICAgICAgICBuZXdMaXN0ID0gbGlzdC5zZXQoaSwgW2ssIHZdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld01hcCA9IG1hcC5zZXQoaywgbGlzdC5zaXplKTtcbiAgICAgICAgbmV3TGlzdCA9IGxpc3Quc2V0KGxpc3Quc2l6ZSwgW2ssIHZdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9tYXAuX19vd25lcklEKSB7XG4gICAgICBvbWFwLnNpemUgPSBuZXdNYXAuc2l6ZTtcbiAgICAgIG9tYXAuX21hcCA9IG5ld01hcDtcbiAgICAgIG9tYXAuX2xpc3QgPSBuZXdMaXN0O1xuICAgICAgb21hcC5fX2hhc2ggPSB1bmRlZmluZWQ7XG4gICAgICByZXR1cm4gb21hcDtcbiAgICB9XG4gICAgcmV0dXJuIG1ha2VPcmRlcmVkTWFwKG5ld01hcCwgbmV3TGlzdCk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhUb0tleWVkU2VxdWVuY2UsIEtleWVkU2VxKTtcbiAgICBmdW5jdGlvbiBUb0tleWVkU2VxdWVuY2UoaW5kZXhlZCwgdXNlS2V5cykge1xuICAgICAgdGhpcy5faXRlciA9IGluZGV4ZWQ7XG4gICAgICB0aGlzLl91c2VLZXlzID0gdXNlS2V5cztcbiAgICAgIHRoaXMuc2l6ZSA9IGluZGV4ZWQuc2l6ZTtcbiAgICB9XG5cbiAgICBUb0tleWVkU2VxdWVuY2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGtleSwgbm90U2V0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVyLmdldChrZXksIG5vdFNldFZhbHVlKTtcbiAgICB9O1xuXG4gICAgVG9LZXllZFNlcXVlbmNlLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVyLmhhcyhrZXkpO1xuICAgIH07XG5cbiAgICBUb0tleWVkU2VxdWVuY2UucHJvdG90eXBlLnZhbHVlU2VxID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXRlci52YWx1ZVNlcSgpO1xuICAgIH07XG5cbiAgICBUb0tleWVkU2VxdWVuY2UucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbigpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHZhciByZXZlcnNlZFNlcXVlbmNlID0gcmV2ZXJzZUZhY3RvcnkodGhpcywgdHJ1ZSk7XG4gICAgICBpZiAoIXRoaXMuX3VzZUtleXMpIHtcbiAgICAgICAgcmV2ZXJzZWRTZXF1ZW5jZS52YWx1ZVNlcSA9IGZ1bmN0aW9uKCkgIHtyZXR1cm4gdGhpcyQwLl9pdGVyLnRvU2VxKCkucmV2ZXJzZSgpfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXZlcnNlZFNlcXVlbmNlO1xuICAgIH07XG5cbiAgICBUb0tleWVkU2VxdWVuY2UucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uKG1hcHBlciwgY29udGV4dCkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgdmFyIG1hcHBlZFNlcXVlbmNlID0gbWFwRmFjdG9yeSh0aGlzLCBtYXBwZXIsIGNvbnRleHQpO1xuICAgICAgaWYgKCF0aGlzLl91c2VLZXlzKSB7XG4gICAgICAgIG1hcHBlZFNlcXVlbmNlLnZhbHVlU2VxID0gZnVuY3Rpb24oKSAge3JldHVybiB0aGlzJDAuX2l0ZXIudG9TZXEoKS5tYXAobWFwcGVyLCBjb250ZXh0KX07XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFwcGVkU2VxdWVuY2U7XG4gICAgfTtcblxuICAgIFRvS2V5ZWRTZXF1ZW5jZS5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHZhciBpaTtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVyLl9faXRlcmF0ZShcbiAgICAgICAgdGhpcy5fdXNlS2V5cyA/XG4gICAgICAgICAgZnVuY3Rpb24odiwgaykgIHtyZXR1cm4gZm4odiwgaywgdGhpcyQwKX0gOlxuICAgICAgICAgICgoaWkgPSByZXZlcnNlID8gcmVzb2x2ZVNpemUodGhpcykgOiAwKSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHYgKSB7cmV0dXJuIGZuKHYsIHJldmVyc2UgPyAtLWlpIDogaWkrKywgdGhpcyQwKX0pLFxuICAgICAgICByZXZlcnNlXG4gICAgICApO1xuICAgIH07XG5cbiAgICBUb0tleWVkU2VxdWVuY2UucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICBpZiAodGhpcy5fdXNlS2V5cykge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlci5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZXJhdG9yID0gdGhpcy5faXRlci5fX2l0ZXJhdG9yKElURVJBVEVfVkFMVUVTLCByZXZlcnNlKTtcbiAgICAgIHZhciBpaSA9IHJldmVyc2UgPyByZXNvbHZlU2l6ZSh0aGlzKSA6IDA7XG4gICAgICByZXR1cm4gbmV3IEl0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgdmFyIHN0ZXAgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIHJldHVybiBzdGVwLmRvbmUgPyBzdGVwIDpcbiAgICAgICAgICBpdGVyYXRvclZhbHVlKHR5cGUsIHJldmVyc2UgPyAtLWlpIDogaWkrKywgc3RlcC52YWx1ZSwgc3RlcCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gIFRvS2V5ZWRTZXF1ZW5jZS5wcm90b3R5cGVbSVNfT1JERVJFRF9TRU5USU5FTF0gPSB0cnVlO1xuXG5cbiAgY3JlYXRlQ2xhc3MoVG9JbmRleGVkU2VxdWVuY2UsIEluZGV4ZWRTZXEpO1xuICAgIGZ1bmN0aW9uIFRvSW5kZXhlZFNlcXVlbmNlKGl0ZXIpIHtcbiAgICAgIHRoaXMuX2l0ZXIgPSBpdGVyO1xuICAgICAgdGhpcy5zaXplID0gaXRlci5zaXplO1xuICAgIH1cblxuICAgIFRvSW5kZXhlZFNlcXVlbmNlLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXRlci5pbmNsdWRlcyh2YWx1ZSk7XG4gICAgfTtcblxuICAgIFRvSW5kZXhlZFNlcXVlbmNlLnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZXIuX19pdGVyYXRlKGZ1bmN0aW9uKHYgKSB7cmV0dXJuIGZuKHYsIGl0ZXJhdGlvbnMrKywgdGhpcyQwKX0sIHJldmVyc2UpO1xuICAgIH07XG5cbiAgICBUb0luZGV4ZWRTZXF1ZW5jZS5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIHZhciBpdGVyYXRvciA9IHRoaXMuX2l0ZXIuX19pdGVyYXRvcihJVEVSQVRFX1ZBTFVFUywgcmV2ZXJzZSk7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICByZXR1cm4gbmV3IEl0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgdmFyIHN0ZXAgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIHJldHVybiBzdGVwLmRvbmUgPyBzdGVwIDpcbiAgICAgICAgICBpdGVyYXRvclZhbHVlKHR5cGUsIGl0ZXJhdGlvbnMrKywgc3RlcC52YWx1ZSwgc3RlcClcbiAgICAgIH0pO1xuICAgIH07XG5cblxuXG4gIGNyZWF0ZUNsYXNzKFRvU2V0U2VxdWVuY2UsIFNldFNlcSk7XG4gICAgZnVuY3Rpb24gVG9TZXRTZXF1ZW5jZShpdGVyKSB7XG4gICAgICB0aGlzLl9pdGVyID0gaXRlcjtcbiAgICAgIHRoaXMuc2l6ZSA9IGl0ZXIuc2l6ZTtcbiAgICB9XG5cbiAgICBUb1NldFNlcXVlbmNlLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVyLmluY2x1ZGVzKGtleSk7XG4gICAgfTtcblxuICAgIFRvU2V0U2VxdWVuY2UucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICByZXR1cm4gdGhpcy5faXRlci5fX2l0ZXJhdGUoZnVuY3Rpb24odiApIHtyZXR1cm4gZm4odiwgdiwgdGhpcyQwKX0sIHJldmVyc2UpO1xuICAgIH07XG5cbiAgICBUb1NldFNlcXVlbmNlLnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yID0gdGhpcy5faXRlci5fX2l0ZXJhdG9yKElURVJBVEVfVkFMVUVTLCByZXZlcnNlKTtcbiAgICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIHN0ZXAuZG9uZSA/IHN0ZXAgOlxuICAgICAgICAgIGl0ZXJhdG9yVmFsdWUodHlwZSwgc3RlcC52YWx1ZSwgc3RlcC52YWx1ZSwgc3RlcCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG5cblxuICBjcmVhdGVDbGFzcyhGcm9tRW50cmllc1NlcXVlbmNlLCBLZXllZFNlcSk7XG4gICAgZnVuY3Rpb24gRnJvbUVudHJpZXNTZXF1ZW5jZShlbnRyaWVzKSB7XG4gICAgICB0aGlzLl9pdGVyID0gZW50cmllcztcbiAgICAgIHRoaXMuc2l6ZSA9IGVudHJpZXMuc2l6ZTtcbiAgICB9XG5cbiAgICBGcm9tRW50cmllc1NlcXVlbmNlLnByb3RvdHlwZS5lbnRyeVNlcSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZXIudG9TZXEoKTtcbiAgICB9O1xuXG4gICAgRnJvbUVudHJpZXNTZXF1ZW5jZS5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHJldHVybiB0aGlzLl9pdGVyLl9faXRlcmF0ZShmdW5jdGlvbihlbnRyeSApIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgZW50cnkgZXhpc3RzIGZpcnN0IHNvIGFycmF5IGFjY2VzcyBkb2Vzbid0IHRocm93IGZvciBob2xlc1xuICAgICAgICAvLyBpbiB0aGUgcGFyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgdmFsaWRhdGVFbnRyeShlbnRyeSk7XG4gICAgICAgICAgdmFyIGluZGV4ZWRJdGVyYWJsZSA9IGlzSXRlcmFibGUoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBmbihcbiAgICAgICAgICAgIGluZGV4ZWRJdGVyYWJsZSA/IGVudHJ5LmdldCgxKSA6IGVudHJ5WzFdLFxuICAgICAgICAgICAgaW5kZXhlZEl0ZXJhYmxlID8gZW50cnkuZ2V0KDApIDogZW50cnlbMF0sXG4gICAgICAgICAgICB0aGlzJDBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LCByZXZlcnNlKTtcbiAgICB9O1xuXG4gICAgRnJvbUVudHJpZXNTZXF1ZW5jZS5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIHZhciBpdGVyYXRvciA9IHRoaXMuX2l0ZXIuX19pdGVyYXRvcihJVEVSQVRFX1ZBTFVFUywgcmV2ZXJzZSk7XG4gICAgICByZXR1cm4gbmV3IEl0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICBpZiAoc3RlcC5kb25lKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAvLyBDaGVjayBpZiBlbnRyeSBleGlzdHMgZmlyc3Qgc28gYXJyYXkgYWNjZXNzIGRvZXNuJ3QgdGhyb3cgZm9yIGhvbGVzXG4gICAgICAgICAgLy8gaW4gdGhlIHBhcmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICAgIHZhciBpbmRleGVkSXRlcmFibGUgPSBpc0l0ZXJhYmxlKGVudHJ5KTtcbiAgICAgICAgICAgIHJldHVybiBpdGVyYXRvclZhbHVlKFxuICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICBpbmRleGVkSXRlcmFibGUgPyBlbnRyeS5nZXQoMCkgOiBlbnRyeVswXSxcbiAgICAgICAgICAgICAgaW5kZXhlZEl0ZXJhYmxlID8gZW50cnkuZ2V0KDEpIDogZW50cnlbMV0sXG4gICAgICAgICAgICAgIHN0ZXBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG5cbiAgVG9JbmRleGVkU2VxdWVuY2UucHJvdG90eXBlLmNhY2hlUmVzdWx0ID1cbiAgVG9LZXllZFNlcXVlbmNlLnByb3RvdHlwZS5jYWNoZVJlc3VsdCA9XG4gIFRvU2V0U2VxdWVuY2UucHJvdG90eXBlLmNhY2hlUmVzdWx0ID1cbiAgRnJvbUVudHJpZXNTZXF1ZW5jZS5wcm90b3R5cGUuY2FjaGVSZXN1bHQgPVxuICAgIGNhY2hlUmVzdWx0VGhyb3VnaDtcblxuXG4gIGZ1bmN0aW9uIGZsaXBGYWN0b3J5KGl0ZXJhYmxlKSB7XG4gICAgdmFyIGZsaXBTZXF1ZW5jZSA9IG1ha2VTZXF1ZW5jZShpdGVyYWJsZSk7XG4gICAgZmxpcFNlcXVlbmNlLl9pdGVyID0gaXRlcmFibGU7XG4gICAgZmxpcFNlcXVlbmNlLnNpemUgPSBpdGVyYWJsZS5zaXplO1xuICAgIGZsaXBTZXF1ZW5jZS5mbGlwID0gZnVuY3Rpb24oKSAge3JldHVybiBpdGVyYWJsZX07XG4gICAgZmxpcFNlcXVlbmNlLnJldmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmV2ZXJzZWRTZXF1ZW5jZSA9IGl0ZXJhYmxlLnJldmVyc2UuYXBwbHkodGhpcyk7IC8vIHN1cGVyLnJldmVyc2UoKVxuICAgICAgcmV2ZXJzZWRTZXF1ZW5jZS5mbGlwID0gZnVuY3Rpb24oKSAge3JldHVybiBpdGVyYWJsZS5yZXZlcnNlKCl9O1xuICAgICAgcmV0dXJuIHJldmVyc2VkU2VxdWVuY2U7XG4gICAgfTtcbiAgICBmbGlwU2VxdWVuY2UuaGFzID0gZnVuY3Rpb24oa2V5ICkge3JldHVybiBpdGVyYWJsZS5pbmNsdWRlcyhrZXkpfTtcbiAgICBmbGlwU2VxdWVuY2UuaW5jbHVkZXMgPSBmdW5jdGlvbihrZXkgKSB7cmV0dXJuIGl0ZXJhYmxlLmhhcyhrZXkpfTtcbiAgICBmbGlwU2VxdWVuY2UuY2FjaGVSZXN1bHQgPSBjYWNoZVJlc3VsdFRocm91Z2g7XG4gICAgZmxpcFNlcXVlbmNlLl9faXRlcmF0ZVVuY2FjaGVkID0gZnVuY3Rpb24gKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICByZXR1cm4gaXRlcmFibGUuX19pdGVyYXRlKGZ1bmN0aW9uKHYsIGspICB7cmV0dXJuIGZuKGssIHYsIHRoaXMkMCkgIT09IGZhbHNlfSwgcmV2ZXJzZSk7XG4gICAgfVxuICAgIGZsaXBTZXF1ZW5jZS5fX2l0ZXJhdG9yVW5jYWNoZWQgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICBpZiAodHlwZSA9PT0gSVRFUkFURV9FTlRSSUVTKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhYmxlLl9faXRlcmF0b3IodHlwZSwgcmV2ZXJzZSk7XG4gICAgICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICAgIHZhciBzdGVwID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgIGlmICghc3RlcC5kb25lKSB7XG4gICAgICAgICAgICB2YXIgayA9IHN0ZXAudmFsdWVbMF07XG4gICAgICAgICAgICBzdGVwLnZhbHVlWzBdID0gc3RlcC52YWx1ZVsxXTtcbiAgICAgICAgICAgIHN0ZXAudmFsdWVbMV0gPSBrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlcmFibGUuX19pdGVyYXRvcihcbiAgICAgICAgdHlwZSA9PT0gSVRFUkFURV9WQUxVRVMgPyBJVEVSQVRFX0tFWVMgOiBJVEVSQVRFX1ZBTFVFUyxcbiAgICAgICAgcmV2ZXJzZVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGZsaXBTZXF1ZW5jZTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gbWFwRmFjdG9yeShpdGVyYWJsZSwgbWFwcGVyLCBjb250ZXh0KSB7XG4gICAgdmFyIG1hcHBlZFNlcXVlbmNlID0gbWFrZVNlcXVlbmNlKGl0ZXJhYmxlKTtcbiAgICBtYXBwZWRTZXF1ZW5jZS5zaXplID0gaXRlcmFibGUuc2l6ZTtcbiAgICBtYXBwZWRTZXF1ZW5jZS5oYXMgPSBmdW5jdGlvbihrZXkgKSB7cmV0dXJuIGl0ZXJhYmxlLmhhcyhrZXkpfTtcbiAgICBtYXBwZWRTZXF1ZW5jZS5nZXQgPSBmdW5jdGlvbihrZXksIG5vdFNldFZhbHVlKSAge1xuICAgICAgdmFyIHYgPSBpdGVyYWJsZS5nZXQoa2V5LCBOT1RfU0VUKTtcbiAgICAgIHJldHVybiB2ID09PSBOT1RfU0VUID9cbiAgICAgICAgbm90U2V0VmFsdWUgOlxuICAgICAgICBtYXBwZXIuY2FsbChjb250ZXh0LCB2LCBrZXksIGl0ZXJhYmxlKTtcbiAgICB9O1xuICAgIG1hcHBlZFNlcXVlbmNlLl9faXRlcmF0ZVVuY2FjaGVkID0gZnVuY3Rpb24gKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICByZXR1cm4gaXRlcmFibGUuX19pdGVyYXRlKFxuICAgICAgICBmdW5jdGlvbih2LCBrLCBjKSAge3JldHVybiBmbihtYXBwZXIuY2FsbChjb250ZXh0LCB2LCBrLCBjKSwgaywgdGhpcyQwKSAhPT0gZmFsc2V9LFxuICAgICAgICByZXZlcnNlXG4gICAgICApO1xuICAgIH1cbiAgICBtYXBwZWRTZXF1ZW5jZS5fX2l0ZXJhdG9yVW5jYWNoZWQgPSBmdW5jdGlvbiAodHlwZSwgcmV2ZXJzZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmFibGUuX19pdGVyYXRvcihJVEVSQVRFX0VOVFJJRVMsIHJldmVyc2UpO1xuICAgICAgcmV0dXJuIG5ldyBJdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgIHZhciBzdGVwID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICBpZiAoc3RlcC5kb25lKSB7XG4gICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgdmFyIGtleSA9IGVudHJ5WzBdO1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JWYWx1ZShcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIGtleSxcbiAgICAgICAgICBtYXBwZXIuY2FsbChjb250ZXh0LCBlbnRyeVsxXSwga2V5LCBpdGVyYWJsZSksXG4gICAgICAgICAgc3RlcFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtYXBwZWRTZXF1ZW5jZTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gcmV2ZXJzZUZhY3RvcnkoaXRlcmFibGUsIHVzZUtleXMpIHtcbiAgICB2YXIgcmV2ZXJzZWRTZXF1ZW5jZSA9IG1ha2VTZXF1ZW5jZShpdGVyYWJsZSk7XG4gICAgcmV2ZXJzZWRTZXF1ZW5jZS5faXRlciA9IGl0ZXJhYmxlO1xuICAgIHJldmVyc2VkU2VxdWVuY2Uuc2l6ZSA9IGl0ZXJhYmxlLnNpemU7XG4gICAgcmV2ZXJzZWRTZXF1ZW5jZS5yZXZlcnNlID0gZnVuY3Rpb24oKSAge3JldHVybiBpdGVyYWJsZX07XG4gICAgaWYgKGl0ZXJhYmxlLmZsaXApIHtcbiAgICAgIHJldmVyc2VkU2VxdWVuY2UuZmxpcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZsaXBTZXF1ZW5jZSA9IGZsaXBGYWN0b3J5KGl0ZXJhYmxlKTtcbiAgICAgICAgZmxpcFNlcXVlbmNlLnJldmVyc2UgPSBmdW5jdGlvbigpICB7cmV0dXJuIGl0ZXJhYmxlLmZsaXAoKX07XG4gICAgICAgIHJldHVybiBmbGlwU2VxdWVuY2U7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXZlcnNlZFNlcXVlbmNlLmdldCA9IGZ1bmN0aW9uKGtleSwgbm90U2V0VmFsdWUpIFxuICAgICAge3JldHVybiBpdGVyYWJsZS5nZXQodXNlS2V5cyA/IGtleSA6IC0xIC0ga2V5LCBub3RTZXRWYWx1ZSl9O1xuICAgIHJldmVyc2VkU2VxdWVuY2UuaGFzID0gZnVuY3Rpb24oa2V5IClcbiAgICAgIHtyZXR1cm4gaXRlcmFibGUuaGFzKHVzZUtleXMgPyBrZXkgOiAtMSAtIGtleSl9O1xuICAgIHJldmVyc2VkU2VxdWVuY2UuaW5jbHVkZXMgPSBmdW5jdGlvbih2YWx1ZSApIHtyZXR1cm4gaXRlcmFibGUuaW5jbHVkZXModmFsdWUpfTtcbiAgICByZXZlcnNlZFNlcXVlbmNlLmNhY2hlUmVzdWx0ID0gY2FjaGVSZXN1bHRUaHJvdWdoO1xuICAgIHJldmVyc2VkU2VxdWVuY2UuX19pdGVyYXRlID0gZnVuY3Rpb24gKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICByZXR1cm4gaXRlcmFibGUuX19pdGVyYXRlKGZ1bmN0aW9uKHYsIGspICB7cmV0dXJuIGZuKHYsIGssIHRoaXMkMCl9LCAhcmV2ZXJzZSk7XG4gICAgfTtcbiAgICByZXZlcnNlZFNlcXVlbmNlLl9faXRlcmF0b3IgPVxuICAgICAgZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkgIHtyZXR1cm4gaXRlcmFibGUuX19pdGVyYXRvcih0eXBlLCAhcmV2ZXJzZSl9O1xuICAgIHJldHVybiByZXZlcnNlZFNlcXVlbmNlO1xuICB9XG5cblxuICBmdW5jdGlvbiBmaWx0ZXJGYWN0b3J5KGl0ZXJhYmxlLCBwcmVkaWNhdGUsIGNvbnRleHQsIHVzZUtleXMpIHtcbiAgICB2YXIgZmlsdGVyU2VxdWVuY2UgPSBtYWtlU2VxdWVuY2UoaXRlcmFibGUpO1xuICAgIGlmICh1c2VLZXlzKSB7XG4gICAgICBmaWx0ZXJTZXF1ZW5jZS5oYXMgPSBmdW5jdGlvbihrZXkgKSB7XG4gICAgICAgIHZhciB2ID0gaXRlcmFibGUuZ2V0KGtleSwgTk9UX1NFVCk7XG4gICAgICAgIHJldHVybiB2ICE9PSBOT1RfU0VUICYmICEhcHJlZGljYXRlLmNhbGwoY29udGV4dCwgdiwga2V5LCBpdGVyYWJsZSk7XG4gICAgICB9O1xuICAgICAgZmlsdGVyU2VxdWVuY2UuZ2V0ID0gZnVuY3Rpb24oa2V5LCBub3RTZXRWYWx1ZSkgIHtcbiAgICAgICAgdmFyIHYgPSBpdGVyYWJsZS5nZXQoa2V5LCBOT1RfU0VUKTtcbiAgICAgICAgcmV0dXJuIHYgIT09IE5PVF9TRVQgJiYgcHJlZGljYXRlLmNhbGwoY29udGV4dCwgdiwga2V5LCBpdGVyYWJsZSkgP1xuICAgICAgICAgIHYgOiBub3RTZXRWYWx1ZTtcbiAgICAgIH07XG4gICAgfVxuICAgIGZpbHRlclNlcXVlbmNlLl9faXRlcmF0ZVVuY2FjaGVkID0gZnVuY3Rpb24gKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICBpdGVyYWJsZS5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaywgYykgIHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHYsIGssIGMpKSB7XG4gICAgICAgICAgaXRlcmF0aW9ucysrO1xuICAgICAgICAgIHJldHVybiBmbih2LCB1c2VLZXlzID8gayA6IGl0ZXJhdGlvbnMgLSAxLCB0aGlzJDApO1xuICAgICAgICB9XG4gICAgICB9LCByZXZlcnNlKTtcbiAgICAgIHJldHVybiBpdGVyYXRpb25zO1xuICAgIH07XG4gICAgZmlsdGVyU2VxdWVuY2UuX19pdGVyYXRvclVuY2FjaGVkID0gZnVuY3Rpb24gKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhYmxlLl9faXRlcmF0b3IoSVRFUkFURV9FTlRSSUVTLCByZXZlcnNlKTtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIHZhciBzdGVwID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgIGlmIChzdGVwLmRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgIHZhciBrZXkgPSBlbnRyeVswXTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBlbnRyeVsxXTtcbiAgICAgICAgICBpZiAocHJlZGljYXRlLmNhbGwoY29udGV4dCwgdmFsdWUsIGtleSwgaXRlcmFibGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlcmF0b3JWYWx1ZSh0eXBlLCB1c2VLZXlzID8ga2V5IDogaXRlcmF0aW9ucysrLCB2YWx1ZSwgc3RlcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlclNlcXVlbmNlO1xuICB9XG5cblxuICBmdW5jdGlvbiBjb3VudEJ5RmFjdG9yeShpdGVyYWJsZSwgZ3JvdXBlciwgY29udGV4dCkge1xuICAgIHZhciBncm91cHMgPSBNYXAoKS5hc011dGFibGUoKTtcbiAgICBpdGVyYWJsZS5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaykgIHtcbiAgICAgIGdyb3Vwcy51cGRhdGUoXG4gICAgICAgIGdyb3VwZXIuY2FsbChjb250ZXh0LCB2LCBrLCBpdGVyYWJsZSksXG4gICAgICAgIDAsXG4gICAgICAgIGZ1bmN0aW9uKGEgKSB7cmV0dXJuIGEgKyAxfVxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZ3JvdXBzLmFzSW1tdXRhYmxlKCk7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIGdyb3VwQnlGYWN0b3J5KGl0ZXJhYmxlLCBncm91cGVyLCBjb250ZXh0KSB7XG4gICAgdmFyIGlzS2V5ZWRJdGVyID0gaXNLZXllZChpdGVyYWJsZSk7XG4gICAgdmFyIGdyb3VwcyA9IChpc09yZGVyZWQoaXRlcmFibGUpID8gT3JkZXJlZE1hcCgpIDogTWFwKCkpLmFzTXV0YWJsZSgpO1xuICAgIGl0ZXJhYmxlLl9faXRlcmF0ZShmdW5jdGlvbih2LCBrKSAge1xuICAgICAgZ3JvdXBzLnVwZGF0ZShcbiAgICAgICAgZ3JvdXBlci5jYWxsKGNvbnRleHQsIHYsIGssIGl0ZXJhYmxlKSxcbiAgICAgICAgZnVuY3Rpb24oYSApIHtyZXR1cm4gKGEgPSBhIHx8IFtdLCBhLnB1c2goaXNLZXllZEl0ZXIgPyBbaywgdl0gOiB2KSwgYSl9XG4gICAgICApO1xuICAgIH0pO1xuICAgIHZhciBjb2VyY2UgPSBpdGVyYWJsZUNsYXNzKGl0ZXJhYmxlKTtcbiAgICByZXR1cm4gZ3JvdXBzLm1hcChmdW5jdGlvbihhcnIgKSB7cmV0dXJuIHJlaWZ5KGl0ZXJhYmxlLCBjb2VyY2UoYXJyKSl9KTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gc2xpY2VGYWN0b3J5KGl0ZXJhYmxlLCBiZWdpbiwgZW5kLCB1c2VLZXlzKSB7XG4gICAgdmFyIG9yaWdpbmFsU2l6ZSA9IGl0ZXJhYmxlLnNpemU7XG5cbiAgICAvLyBTYW5pdGl6ZSBiZWdpbiAmIGVuZCB1c2luZyB0aGlzIHNob3J0aGFuZCBmb3IgVG9JbnQzMihhcmd1bWVudClcbiAgICAvLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9pbnQzMlxuICAgIGlmIChiZWdpbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBiZWdpbiA9IGJlZ2luIHwgMDtcbiAgICB9XG4gICAgaWYgKGVuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoZW5kID09PSBJbmZpbml0eSkge1xuICAgICAgICBlbmQgPSBvcmlnaW5hbFNpemU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmQgPSBlbmQgfCAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh3aG9sZVNsaWNlKGJlZ2luLCBlbmQsIG9yaWdpbmFsU2l6ZSkpIHtcbiAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICB9XG5cbiAgICB2YXIgcmVzb2x2ZWRCZWdpbiA9IHJlc29sdmVCZWdpbihiZWdpbiwgb3JpZ2luYWxTaXplKTtcbiAgICB2YXIgcmVzb2x2ZWRFbmQgPSByZXNvbHZlRW5kKGVuZCwgb3JpZ2luYWxTaXplKTtcblxuICAgIC8vIGJlZ2luIG9yIGVuZCB3aWxsIGJlIE5hTiBpZiB0aGV5IHdlcmUgcHJvdmlkZWQgYXMgbmVnYXRpdmUgbnVtYmVycyBhbmRcbiAgICAvLyB0aGlzIGl0ZXJhYmxlJ3Mgc2l6ZSBpcyB1bmtub3duLiBJbiB0aGF0IGNhc2UsIGNhY2hlIGZpcnN0IHNvIHRoZXJlIGlzXG4gICAgLy8gYSBrbm93biBzaXplIGFuZCB0aGVzZSBkbyBub3QgcmVzb2x2ZSB0byBOYU4uXG4gICAgaWYgKHJlc29sdmVkQmVnaW4gIT09IHJlc29sdmVkQmVnaW4gfHwgcmVzb2x2ZWRFbmQgIT09IHJlc29sdmVkRW5kKSB7XG4gICAgICByZXR1cm4gc2xpY2VGYWN0b3J5KGl0ZXJhYmxlLnRvU2VxKCkuY2FjaGVSZXN1bHQoKSwgYmVnaW4sIGVuZCwgdXNlS2V5cyk7XG4gICAgfVxuXG4gICAgLy8gTm90ZTogcmVzb2x2ZWRFbmQgaXMgdW5kZWZpbmVkIHdoZW4gdGhlIG9yaWdpbmFsIHNlcXVlbmNlJ3MgbGVuZ3RoIGlzXG4gICAgLy8gdW5rbm93biBhbmQgdGhpcyBzbGljZSBkaWQgbm90IHN1cHBseSBhbiBlbmQgYW5kIHNob3VsZCBjb250YWluIGFsbFxuICAgIC8vIGVsZW1lbnRzIGFmdGVyIHJlc29sdmVkQmVnaW4uXG4gICAgLy8gSW4gdGhhdCBjYXNlLCByZXNvbHZlZFNpemUgd2lsbCBiZSBOYU4gYW5kIHNsaWNlU2l6ZSB3aWxsIHJlbWFpbiB1bmRlZmluZWQuXG4gICAgdmFyIHJlc29sdmVkU2l6ZSA9IHJlc29sdmVkRW5kIC0gcmVzb2x2ZWRCZWdpbjtcbiAgICB2YXIgc2xpY2VTaXplO1xuICAgIGlmIChyZXNvbHZlZFNpemUgPT09IHJlc29sdmVkU2l6ZSkge1xuICAgICAgc2xpY2VTaXplID0gcmVzb2x2ZWRTaXplIDwgMCA/IDAgOiByZXNvbHZlZFNpemU7XG4gICAgfVxuXG4gICAgdmFyIHNsaWNlU2VxID0gbWFrZVNlcXVlbmNlKGl0ZXJhYmxlKTtcblxuICAgIC8vIElmIGl0ZXJhYmxlLnNpemUgaXMgdW5kZWZpbmVkLCB0aGUgc2l6ZSBvZiB0aGUgcmVhbGl6ZWQgc2xpY2VTZXEgaXNcbiAgICAvLyB1bmtub3duIGF0IHRoaXMgcG9pbnQgdW5sZXNzIHRoZSBudW1iZXIgb2YgaXRlbXMgdG8gc2xpY2UgaXMgMFxuICAgIHNsaWNlU2VxLnNpemUgPSBzbGljZVNpemUgPT09IDAgPyBzbGljZVNpemUgOiBpdGVyYWJsZS5zaXplICYmIHNsaWNlU2l6ZSB8fCB1bmRlZmluZWQ7XG5cbiAgICBpZiAoIXVzZUtleXMgJiYgaXNTZXEoaXRlcmFibGUpICYmIHNsaWNlU2l6ZSA+PSAwKSB7XG4gICAgICBzbGljZVNlcS5nZXQgPSBmdW5jdGlvbiAoaW5kZXgsIG5vdFNldFZhbHVlKSB7XG4gICAgICAgIGluZGV4ID0gd3JhcEluZGV4KHRoaXMsIGluZGV4KTtcbiAgICAgICAgcmV0dXJuIGluZGV4ID49IDAgJiYgaW5kZXggPCBzbGljZVNpemUgP1xuICAgICAgICAgIGl0ZXJhYmxlLmdldChpbmRleCArIHJlc29sdmVkQmVnaW4sIG5vdFNldFZhbHVlKSA6XG4gICAgICAgICAgbm90U2V0VmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2xpY2VTZXEuX19pdGVyYXRlVW5jYWNoZWQgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgaWYgKHNsaWNlU2l6ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlUmVzdWx0KCkuX19pdGVyYXRlKGZuLCByZXZlcnNlKTtcbiAgICAgIH1cbiAgICAgIHZhciBza2lwcGVkID0gMDtcbiAgICAgIHZhciBpc1NraXBwaW5nID0gdHJ1ZTtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIGl0ZXJhYmxlLl9faXRlcmF0ZShmdW5jdGlvbih2LCBrKSAge1xuICAgICAgICBpZiAoIShpc1NraXBwaW5nICYmIChpc1NraXBwaW5nID0gc2tpcHBlZCsrIDwgcmVzb2x2ZWRCZWdpbikpKSB7XG4gICAgICAgICAgaXRlcmF0aW9ucysrO1xuICAgICAgICAgIHJldHVybiBmbih2LCB1c2VLZXlzID8gayA6IGl0ZXJhdGlvbnMgLSAxLCB0aGlzJDApICE9PSBmYWxzZSAmJlxuICAgICAgICAgICAgICAgICBpdGVyYXRpb25zICE9PSBzbGljZVNpemU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gICAgfTtcblxuICAgIHNsaWNlU2VxLl9faXRlcmF0b3JVbmNhY2hlZCA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIGlmIChzbGljZVNpemUgIT09IDAgJiYgcmV2ZXJzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVJlc3VsdCgpLl9faXRlcmF0b3IodHlwZSwgcmV2ZXJzZSk7XG4gICAgICB9XG4gICAgICAvLyBEb24ndCBib3RoZXIgaW5zdGFudGlhdGluZyBwYXJlbnQgaXRlcmF0b3IgaWYgdGFraW5nIDAuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBzbGljZVNpemUgIT09IDAgJiYgaXRlcmFibGUuX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbiAgICAgIHZhciBza2lwcGVkID0gMDtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB3aGlsZSAoc2tpcHBlZCsrIDwgcmVzb2x2ZWRCZWdpbikge1xuICAgICAgICAgIGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKytpdGVyYXRpb25zID4gc2xpY2VTaXplKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yRG9uZSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGVwID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICBpZiAodXNlS2V5cyB8fCB0eXBlID09PSBJVEVSQVRFX1ZBTFVFUykge1xuICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IElURVJBVEVfS0VZUykge1xuICAgICAgICAgIHJldHVybiBpdGVyYXRvclZhbHVlKHR5cGUsIGl0ZXJhdGlvbnMgLSAxLCB1bmRlZmluZWQsIHN0ZXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBpdGVyYXRvclZhbHVlKHR5cGUsIGl0ZXJhdGlvbnMgLSAxLCBzdGVwLnZhbHVlWzFdLCBzdGVwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNsaWNlU2VxO1xuICB9XG5cblxuICBmdW5jdGlvbiB0YWtlV2hpbGVGYWN0b3J5KGl0ZXJhYmxlLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgdGFrZVNlcXVlbmNlID0gbWFrZVNlcXVlbmNlKGl0ZXJhYmxlKTtcbiAgICB0YWtlU2VxdWVuY2UuX19pdGVyYXRlVW5jYWNoZWQgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgaWYgKHJldmVyc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVSZXN1bHQoKS5fX2l0ZXJhdGUoZm4sIHJldmVyc2UpO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgaXRlcmFibGUuX19pdGVyYXRlKGZ1bmN0aW9uKHYsIGssIGMpIFxuICAgICAgICB7cmV0dXJuIHByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHYsIGssIGMpICYmICsraXRlcmF0aW9ucyAmJiBmbih2LCBrLCB0aGlzJDApfVxuICAgICAgKTtcbiAgICAgIHJldHVybiBpdGVyYXRpb25zO1xuICAgIH07XG4gICAgdGFrZVNlcXVlbmNlLl9faXRlcmF0b3JVbmNhY2hlZCA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlUmVzdWx0KCkuX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhYmxlLl9faXRlcmF0b3IoSVRFUkFURV9FTlRSSUVTLCByZXZlcnNlKTtcbiAgICAgIHZhciBpdGVyYXRpbmcgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5ldyBJdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgIGlmICghaXRlcmF0aW5nKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yRG9uZSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGVwID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICBpZiAoc3RlcC5kb25lKSB7XG4gICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgdmFyIGsgPSBlbnRyeVswXTtcbiAgICAgICAgdmFyIHYgPSBlbnRyeVsxXTtcbiAgICAgICAgaWYgKCFwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2LCBrLCB0aGlzJDApKSB7XG4gICAgICAgICAgaXRlcmF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yRG9uZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0eXBlID09PSBJVEVSQVRFX0VOVFJJRVMgPyBzdGVwIDpcbiAgICAgICAgICBpdGVyYXRvclZhbHVlKHR5cGUsIGssIHYsIHN0ZXApO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gdGFrZVNlcXVlbmNlO1xuICB9XG5cblxuICBmdW5jdGlvbiBza2lwV2hpbGVGYWN0b3J5KGl0ZXJhYmxlLCBwcmVkaWNhdGUsIGNvbnRleHQsIHVzZUtleXMpIHtcbiAgICB2YXIgc2tpcFNlcXVlbmNlID0gbWFrZVNlcXVlbmNlKGl0ZXJhYmxlKTtcbiAgICBza2lwU2VxdWVuY2UuX19pdGVyYXRlVW5jYWNoZWQgPSBmdW5jdGlvbiAoZm4sIHJldmVyc2UpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlUmVzdWx0KCkuX19pdGVyYXRlKGZuLCByZXZlcnNlKTtcbiAgICAgIH1cbiAgICAgIHZhciBpc1NraXBwaW5nID0gdHJ1ZTtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIGl0ZXJhYmxlLl9faXRlcmF0ZShmdW5jdGlvbih2LCBrLCBjKSAge1xuICAgICAgICBpZiAoIShpc1NraXBwaW5nICYmIChpc1NraXBwaW5nID0gcHJlZGljYXRlLmNhbGwoY29udGV4dCwgdiwgaywgYykpKSkge1xuICAgICAgICAgIGl0ZXJhdGlvbnMrKztcbiAgICAgICAgICByZXR1cm4gZm4odiwgdXNlS2V5cyA/IGsgOiBpdGVyYXRpb25zIC0gMSwgdGhpcyQwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaXRlcmF0aW9ucztcbiAgICB9O1xuICAgIHNraXBTZXF1ZW5jZS5fX2l0ZXJhdG9yVW5jYWNoZWQgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVJlc3VsdCgpLl9faXRlcmF0b3IodHlwZSwgcmV2ZXJzZSk7XG4gICAgICB9XG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYWJsZS5fX2l0ZXJhdG9yKElURVJBVEVfRU5UUklFUywgcmV2ZXJzZSk7XG4gICAgICB2YXIgc2tpcHBpbmcgPSB0cnVlO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgcmV0dXJuIG5ldyBJdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgIHZhciBzdGVwLCBrLCB2O1xuICAgICAgICBkbyB7XG4gICAgICAgICAgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICBpZiAoc3RlcC5kb25lKSB7XG4gICAgICAgICAgICBpZiAodXNlS2V5cyB8fCB0eXBlID09PSBJVEVSQVRFX1ZBTFVFUykge1xuICAgICAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gSVRFUkFURV9LRVlTKSB7XG4gICAgICAgICAgICAgIHJldHVybiBpdGVyYXRvclZhbHVlKHR5cGUsIGl0ZXJhdGlvbnMrKywgdW5kZWZpbmVkLCBzdGVwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBpdGVyYXRvclZhbHVlKHR5cGUsIGl0ZXJhdGlvbnMrKywgc3RlcC52YWx1ZVsxXSwgc3RlcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgayA9IGVudHJ5WzBdO1xuICAgICAgICAgIHYgPSBlbnRyeVsxXTtcbiAgICAgICAgICBza2lwcGluZyAmJiAoc2tpcHBpbmcgPSBwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2LCBrLCB0aGlzJDApKTtcbiAgICAgICAgfSB3aGlsZSAoc2tpcHBpbmcpO1xuICAgICAgICByZXR1cm4gdHlwZSA9PT0gSVRFUkFURV9FTlRSSUVTID8gc3RlcCA6XG4gICAgICAgICAgaXRlcmF0b3JWYWx1ZSh0eXBlLCBrLCB2LCBzdGVwKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIHNraXBTZXF1ZW5jZTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gY29uY2F0RmFjdG9yeShpdGVyYWJsZSwgdmFsdWVzKSB7XG4gICAgdmFyIGlzS2V5ZWRJdGVyYWJsZSA9IGlzS2V5ZWQoaXRlcmFibGUpO1xuICAgIHZhciBpdGVycyA9IFtpdGVyYWJsZV0uY29uY2F0KHZhbHVlcykubWFwKGZ1bmN0aW9uKHYgKSB7XG4gICAgICBpZiAoIWlzSXRlcmFibGUodikpIHtcbiAgICAgICAgdiA9IGlzS2V5ZWRJdGVyYWJsZSA/XG4gICAgICAgICAga2V5ZWRTZXFGcm9tVmFsdWUodikgOlxuICAgICAgICAgIGluZGV4ZWRTZXFGcm9tVmFsdWUoQXJyYXkuaXNBcnJheSh2KSA/IHYgOiBbdl0pO1xuICAgICAgfSBlbHNlIGlmIChpc0tleWVkSXRlcmFibGUpIHtcbiAgICAgICAgdiA9IEtleWVkSXRlcmFibGUodik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdjtcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24odiApIHtyZXR1cm4gdi5zaXplICE9PSAwfSk7XG5cbiAgICBpZiAoaXRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgfVxuXG4gICAgaWYgKGl0ZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIHNpbmdsZXRvbiA9IGl0ZXJzWzBdO1xuICAgICAgaWYgKHNpbmdsZXRvbiA9PT0gaXRlcmFibGUgfHxcbiAgICAgICAgICBpc0tleWVkSXRlcmFibGUgJiYgaXNLZXllZChzaW5nbGV0b24pIHx8XG4gICAgICAgICAgaXNJbmRleGVkKGl0ZXJhYmxlKSAmJiBpc0luZGV4ZWQoc2luZ2xldG9uKSkge1xuICAgICAgICByZXR1cm4gc2luZ2xldG9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjb25jYXRTZXEgPSBuZXcgQXJyYXlTZXEoaXRlcnMpO1xuICAgIGlmIChpc0tleWVkSXRlcmFibGUpIHtcbiAgICAgIGNvbmNhdFNlcSA9IGNvbmNhdFNlcS50b0tleWVkU2VxKCk7XG4gICAgfSBlbHNlIGlmICghaXNJbmRleGVkKGl0ZXJhYmxlKSkge1xuICAgICAgY29uY2F0U2VxID0gY29uY2F0U2VxLnRvU2V0U2VxKCk7XG4gICAgfVxuICAgIGNvbmNhdFNlcSA9IGNvbmNhdFNlcS5mbGF0dGVuKHRydWUpO1xuICAgIGNvbmNhdFNlcS5zaXplID0gaXRlcnMucmVkdWNlKFxuICAgICAgZnVuY3Rpb24oc3VtLCBzZXEpICB7XG4gICAgICAgIGlmIChzdW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBzaXplID0gc2VxLnNpemU7XG4gICAgICAgICAgaWYgKHNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHN1bSArIHNpemU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgMFxuICAgICk7XG4gICAgcmV0dXJuIGNvbmNhdFNlcTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gZmxhdHRlbkZhY3RvcnkoaXRlcmFibGUsIGRlcHRoLCB1c2VLZXlzKSB7XG4gICAgdmFyIGZsYXRTZXF1ZW5jZSA9IG1ha2VTZXF1ZW5jZShpdGVyYWJsZSk7XG4gICAgZmxhdFNlcXVlbmNlLl9faXRlcmF0ZVVuY2FjaGVkID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHZhciBzdG9wcGVkID0gZmFsc2U7XG4gICAgICBmdW5jdGlvbiBmbGF0RGVlcChpdGVyLCBjdXJyZW50RGVwdGgpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgICAgaXRlci5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaykgIHtcbiAgICAgICAgICBpZiAoKCFkZXB0aCB8fCBjdXJyZW50RGVwdGggPCBkZXB0aCkgJiYgaXNJdGVyYWJsZSh2KSkge1xuICAgICAgICAgICAgZmxhdERlZXAodiwgY3VycmVudERlcHRoICsgMSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChmbih2LCB1c2VLZXlzID8gayA6IGl0ZXJhdGlvbnMrKywgdGhpcyQwKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHN0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gIXN0b3BwZWQ7XG4gICAgICAgIH0sIHJldmVyc2UpO1xuICAgICAgfVxuICAgICAgZmxhdERlZXAoaXRlcmFibGUsIDApO1xuICAgICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gICAgfVxuICAgIGZsYXRTZXF1ZW5jZS5fX2l0ZXJhdG9yVW5jYWNoZWQgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYWJsZS5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgICAgdmFyIHN0YWNrID0gW107XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICByZXR1cm4gbmV3IEl0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgd2hpbGUgKGl0ZXJhdG9yKSB7XG4gICAgICAgICAgdmFyIHN0ZXAgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKHN0ZXAuZG9uZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yID0gc3RhY2sucG9wKCk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHYgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgIGlmICh0eXBlID09PSBJVEVSQVRFX0VOVFJJRVMpIHtcbiAgICAgICAgICAgIHYgPSB2WzFdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoKCFkZXB0aCB8fCBzdGFjay5sZW5ndGggPCBkZXB0aCkgJiYgaXNJdGVyYWJsZSh2KSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChpdGVyYXRvcik7XG4gICAgICAgICAgICBpdGVyYXRvciA9IHYuX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVzZUtleXMgPyBzdGVwIDogaXRlcmF0b3JWYWx1ZSh0eXBlLCBpdGVyYXRpb25zKyssIHYsIHN0ZXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlcmF0b3JEb25lKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZsYXRTZXF1ZW5jZTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gZmxhdE1hcEZhY3RvcnkoaXRlcmFibGUsIG1hcHBlciwgY29udGV4dCkge1xuICAgIHZhciBjb2VyY2UgPSBpdGVyYWJsZUNsYXNzKGl0ZXJhYmxlKTtcbiAgICByZXR1cm4gaXRlcmFibGUudG9TZXEoKS5tYXAoXG4gICAgICBmdW5jdGlvbih2LCBrKSAge3JldHVybiBjb2VyY2UobWFwcGVyLmNhbGwoY29udGV4dCwgdiwgaywgaXRlcmFibGUpKX1cbiAgICApLmZsYXR0ZW4odHJ1ZSk7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIGludGVycG9zZUZhY3RvcnkoaXRlcmFibGUsIHNlcGFyYXRvcikge1xuICAgIHZhciBpbnRlcnBvc2VkU2VxdWVuY2UgPSBtYWtlU2VxdWVuY2UoaXRlcmFibGUpO1xuICAgIGludGVycG9zZWRTZXF1ZW5jZS5zaXplID0gaXRlcmFibGUuc2l6ZSAmJiBpdGVyYWJsZS5zaXplICogMiAtMTtcbiAgICBpbnRlcnBvc2VkU2VxdWVuY2UuX19pdGVyYXRlVW5jYWNoZWQgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgaXRlcmFibGUuX19pdGVyYXRlKGZ1bmN0aW9uKHYsIGspIFxuICAgICAgICB7cmV0dXJuICghaXRlcmF0aW9ucyB8fCBmbihzZXBhcmF0b3IsIGl0ZXJhdGlvbnMrKywgdGhpcyQwKSAhPT0gZmFsc2UpICYmXG4gICAgICAgIGZuKHYsIGl0ZXJhdGlvbnMrKywgdGhpcyQwKSAhPT0gZmFsc2V9LFxuICAgICAgICByZXZlcnNlXG4gICAgICApO1xuICAgICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gICAgfTtcbiAgICBpbnRlcnBvc2VkU2VxdWVuY2UuX19pdGVyYXRvclVuY2FjaGVkID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmFibGUuX19pdGVyYXRvcihJVEVSQVRFX1ZBTFVFUywgcmV2ZXJzZSk7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICBpZiAoIXN0ZXAgfHwgaXRlcmF0aW9ucyAlIDIpIHtcbiAgICAgICAgICBzdGVwID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgIGlmIChzdGVwLmRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlcmF0aW9ucyAlIDIgP1xuICAgICAgICAgIGl0ZXJhdG9yVmFsdWUodHlwZSwgaXRlcmF0aW9ucysrLCBzZXBhcmF0b3IpIDpcbiAgICAgICAgICBpdGVyYXRvclZhbHVlKHR5cGUsIGl0ZXJhdGlvbnMrKywgc3RlcC52YWx1ZSwgc3RlcCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBpbnRlcnBvc2VkU2VxdWVuY2U7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIHNvcnRGYWN0b3J5KGl0ZXJhYmxlLCBjb21wYXJhdG9yLCBtYXBwZXIpIHtcbiAgICBpZiAoIWNvbXBhcmF0b3IpIHtcbiAgICAgIGNvbXBhcmF0b3IgPSBkZWZhdWx0Q29tcGFyYXRvcjtcbiAgICB9XG4gICAgdmFyIGlzS2V5ZWRJdGVyYWJsZSA9IGlzS2V5ZWQoaXRlcmFibGUpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGVudHJpZXMgPSBpdGVyYWJsZS50b1NlcSgpLm1hcChcbiAgICAgIGZ1bmN0aW9uKHYsIGspICB7cmV0dXJuIFtrLCB2LCBpbmRleCsrLCBtYXBwZXIgPyBtYXBwZXIodiwgaywgaXRlcmFibGUpIDogdl19XG4gICAgKS50b0FycmF5KCk7XG4gICAgZW50cmllcy5zb3J0KGZ1bmN0aW9uKGEsIGIpICB7cmV0dXJuIGNvbXBhcmF0b3IoYVszXSwgYlszXSkgfHwgYVsyXSAtIGJbMl19KS5mb3JFYWNoKFxuICAgICAgaXNLZXllZEl0ZXJhYmxlID9cbiAgICAgIGZ1bmN0aW9uKHYsIGkpICB7IGVudHJpZXNbaV0ubGVuZ3RoID0gMjsgfSA6XG4gICAgICBmdW5jdGlvbih2LCBpKSAgeyBlbnRyaWVzW2ldID0gdlsxXTsgfVxuICAgICk7XG4gICAgcmV0dXJuIGlzS2V5ZWRJdGVyYWJsZSA/IEtleWVkU2VxKGVudHJpZXMpIDpcbiAgICAgIGlzSW5kZXhlZChpdGVyYWJsZSkgPyBJbmRleGVkU2VxKGVudHJpZXMpIDpcbiAgICAgIFNldFNlcShlbnRyaWVzKTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gbWF4RmFjdG9yeShpdGVyYWJsZSwgY29tcGFyYXRvciwgbWFwcGVyKSB7XG4gICAgaWYgKCFjb21wYXJhdG9yKSB7XG4gICAgICBjb21wYXJhdG9yID0gZGVmYXVsdENvbXBhcmF0b3I7XG4gICAgfVxuICAgIGlmIChtYXBwZXIpIHtcbiAgICAgIHZhciBlbnRyeSA9IGl0ZXJhYmxlLnRvU2VxKClcbiAgICAgICAgLm1hcChmdW5jdGlvbih2LCBrKSAge3JldHVybiBbdiwgbWFwcGVyKHYsIGssIGl0ZXJhYmxlKV19KVxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKGEsIGIpICB7cmV0dXJuIG1heENvbXBhcmUoY29tcGFyYXRvciwgYVsxXSwgYlsxXSkgPyBiIDogYX0pO1xuICAgICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5WzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXRlcmFibGUucmVkdWNlKGZ1bmN0aW9uKGEsIGIpICB7cmV0dXJuIG1heENvbXBhcmUoY29tcGFyYXRvciwgYSwgYikgPyBiIDogYX0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1heENvbXBhcmUoY29tcGFyYXRvciwgYSwgYikge1xuICAgIHZhciBjb21wID0gY29tcGFyYXRvcihiLCBhKTtcbiAgICAvLyBiIGlzIGNvbnNpZGVyZWQgdGhlIG5ldyBtYXggaWYgdGhlIGNvbXBhcmF0b3IgZGVjbGFyZXMgdGhlbSBlcXVhbCwgYnV0XG4gICAgLy8gdGhleSBhcmUgbm90IGVxdWFsIGFuZCBiIGlzIGluIGZhY3QgYSBudWxsaXNoIHZhbHVlLlxuICAgIHJldHVybiAoY29tcCA9PT0gMCAmJiBiICE9PSBhICYmIChiID09PSB1bmRlZmluZWQgfHwgYiA9PT0gbnVsbCB8fCBiICE9PSBiKSkgfHwgY29tcCA+IDA7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIHppcFdpdGhGYWN0b3J5KGtleUl0ZXIsIHppcHBlciwgaXRlcnMpIHtcbiAgICB2YXIgemlwU2VxdWVuY2UgPSBtYWtlU2VxdWVuY2Uoa2V5SXRlcik7XG4gICAgemlwU2VxdWVuY2Uuc2l6ZSA9IG5ldyBBcnJheVNlcShpdGVycykubWFwKGZ1bmN0aW9uKGkgKSB7cmV0dXJuIGkuc2l6ZX0pLm1pbigpO1xuICAgIC8vIE5vdGU6IHRoaXMgYSBnZW5lcmljIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgX19pdGVyYXRlIGluIHRlcm1zIG9mXG4gICAgLy8gX19pdGVyYXRvciB3aGljaCBtYXkgYmUgbW9yZSBnZW5lcmljYWxseSB1c2VmdWwgaW4gdGhlIGZ1dHVyZS5cbiAgICB6aXBTZXF1ZW5jZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge1xuICAgICAgLyogZ2VuZXJpYzpcbiAgICAgIHZhciBpdGVyYXRvciA9IHRoaXMuX19pdGVyYXRvcihJVEVSQVRFX0VOVFJJRVMsIHJldmVyc2UpO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGl0ZXJhdGlvbnMrKztcbiAgICAgICAgaWYgKGZuKHN0ZXAudmFsdWVbMV0sIHN0ZXAudmFsdWVbMF0sIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlcmF0aW9ucztcbiAgICAgICovXG4gICAgICAvLyBpbmRleGVkOlxuICAgICAgdmFyIGl0ZXJhdG9yID0gdGhpcy5fX2l0ZXJhdG9yKElURVJBVEVfVkFMVUVTLCByZXZlcnNlKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBpZiAoZm4oc3RlcC52YWx1ZSwgaXRlcmF0aW9ucysrLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gICAgfTtcbiAgICB6aXBTZXF1ZW5jZS5fX2l0ZXJhdG9yVW5jYWNoZWQgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JzID0gaXRlcnMubWFwKGZ1bmN0aW9uKGkgKVxuICAgICAgICB7cmV0dXJuIChpID0gSXRlcmFibGUoaSksIGdldEl0ZXJhdG9yKHJldmVyc2UgPyBpLnJldmVyc2UoKSA6IGkpKX1cbiAgICAgICk7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICB2YXIgaXNEb25lID0gZmFsc2U7XG4gICAgICByZXR1cm4gbmV3IEl0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgdmFyIHN0ZXBzO1xuICAgICAgICBpZiAoIWlzRG9uZSkge1xuICAgICAgICAgIHN0ZXBzID0gaXRlcmF0b3JzLm1hcChmdW5jdGlvbihpICkge3JldHVybiBpLm5leHQoKX0pO1xuICAgICAgICAgIGlzRG9uZSA9IHN0ZXBzLnNvbWUoZnVuY3Rpb24ocyApIHtyZXR1cm4gcy5kb25lfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRG9uZSkge1xuICAgICAgICAgIHJldHVybiBpdGVyYXRvckRvbmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlcmF0b3JWYWx1ZShcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIGl0ZXJhdGlvbnMrKyxcbiAgICAgICAgICB6aXBwZXIuYXBwbHkobnVsbCwgc3RlcHMubWFwKGZ1bmN0aW9uKHMgKSB7cmV0dXJuIHMudmFsdWV9KSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIHppcFNlcXVlbmNlXG4gIH1cblxuXG4gIC8vICNwcmFnbWEgSGVscGVyIEZ1bmN0aW9uc1xuXG4gIGZ1bmN0aW9uIHJlaWZ5KGl0ZXIsIHNlcSkge1xuICAgIHJldHVybiBpc1NlcShpdGVyKSA/IHNlcSA6IGl0ZXIuY29uc3RydWN0b3Ioc2VxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRW50cnkoZW50cnkpIHtcbiAgICBpZiAoZW50cnkgIT09IE9iamVjdChlbnRyeSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFtLLCBWXSB0dXBsZTogJyArIGVudHJ5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlU2l6ZShpdGVyKSB7XG4gICAgYXNzZXJ0Tm90SW5maW5pdGUoaXRlci5zaXplKTtcbiAgICByZXR1cm4gZW5zdXJlU2l6ZShpdGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGl0ZXJhYmxlQ2xhc3MoaXRlcmFibGUpIHtcbiAgICByZXR1cm4gaXNLZXllZChpdGVyYWJsZSkgPyBLZXllZEl0ZXJhYmxlIDpcbiAgICAgIGlzSW5kZXhlZChpdGVyYWJsZSkgPyBJbmRleGVkSXRlcmFibGUgOlxuICAgICAgU2V0SXRlcmFibGU7XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlU2VxdWVuY2UoaXRlcmFibGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShcbiAgICAgIChcbiAgICAgICAgaXNLZXllZChpdGVyYWJsZSkgPyBLZXllZFNlcSA6XG4gICAgICAgIGlzSW5kZXhlZChpdGVyYWJsZSkgPyBJbmRleGVkU2VxIDpcbiAgICAgICAgU2V0U2VxXG4gICAgICApLnByb3RvdHlwZVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBjYWNoZVJlc3VsdFRocm91Z2goKSB7XG4gICAgaWYgKHRoaXMuX2l0ZXIuY2FjaGVSZXN1bHQpIHtcbiAgICAgIHRoaXMuX2l0ZXIuY2FjaGVSZXN1bHQoKTtcbiAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuX2l0ZXIuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gU2VxLnByb3RvdHlwZS5jYWNoZVJlc3VsdC5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZmF1bHRDb21wYXJhdG9yKGEsIGIpIHtcbiAgICByZXR1cm4gYSA+IGIgPyAxIDogYSA8IGIgPyAtMSA6IDA7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JjZUl0ZXJhdG9yKGtleVBhdGgpIHtcbiAgICB2YXIgaXRlciA9IGdldEl0ZXJhdG9yKGtleVBhdGgpO1xuICAgIGlmICghaXRlcikge1xuICAgICAgLy8gQXJyYXkgbWlnaHQgbm90IGJlIGl0ZXJhYmxlIGluIHRoaXMgZW52aXJvbm1lbnQsIHNvIHdlIG5lZWQgYSBmYWxsYmFja1xuICAgICAgLy8gdG8gb3VyIHdyYXBwZWQgdHlwZS5cbiAgICAgIGlmICghaXNBcnJheUxpa2Uoa2V5UGF0aCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgaXRlcmFibGUgb3IgYXJyYXktbGlrZTogJyArIGtleVBhdGgpO1xuICAgICAgfVxuICAgICAgaXRlciA9IGdldEl0ZXJhdG9yKEl0ZXJhYmxlKGtleVBhdGgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZXI7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhSZWNvcmQsIEtleWVkQ29sbGVjdGlvbik7XG5cbiAgICBmdW5jdGlvbiBSZWNvcmQoZGVmYXVsdFZhbHVlcywgbmFtZSkge1xuICAgICAgdmFyIGhhc0luaXRpYWxpemVkO1xuXG4gICAgICB2YXIgUmVjb3JkVHlwZSA9IGZ1bmN0aW9uIFJlY29yZCh2YWx1ZXMpIHtcbiAgICAgICAgaWYgKHZhbHVlcyBpbnN0YW5jZW9mIFJlY29yZFR5cGUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZWNvcmRUeXBlKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgUmVjb3JkVHlwZSh2YWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaGFzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICBoYXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhkZWZhdWx0VmFsdWVzKTtcbiAgICAgICAgICBzZXRQcm9wcyhSZWNvcmRUeXBlUHJvdG90eXBlLCBrZXlzKTtcbiAgICAgICAgICBSZWNvcmRUeXBlUHJvdG90eXBlLnNpemUgPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICBSZWNvcmRUeXBlUHJvdG90eXBlLl9uYW1lID0gbmFtZTtcbiAgICAgICAgICBSZWNvcmRUeXBlUHJvdG90eXBlLl9rZXlzID0ga2V5cztcbiAgICAgICAgICBSZWNvcmRUeXBlUHJvdG90eXBlLl9kZWZhdWx0VmFsdWVzID0gZGVmYXVsdFZhbHVlcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tYXAgPSBNYXAodmFsdWVzKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBSZWNvcmRUeXBlUHJvdG90eXBlID0gUmVjb3JkVHlwZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFJlY29yZFByb3RvdHlwZSk7XG4gICAgICBSZWNvcmRUeXBlUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmVjb3JkVHlwZTtcblxuICAgICAgcmV0dXJuIFJlY29yZFR5cGU7XG4gICAgfVxuXG4gICAgUmVjb3JkLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX190b1N0cmluZyhyZWNvcmROYW1lKHRoaXMpICsgJyB7JywgJ30nKTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBBY2Nlc3NcblxuICAgIFJlY29yZC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24oaykge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRWYWx1ZXMuaGFzT3duUHJvcGVydHkoayk7XG4gICAgfTtcblxuICAgIFJlY29yZC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oaywgbm90U2V0VmFsdWUpIHtcbiAgICAgIGlmICghdGhpcy5oYXMoaykpIHtcbiAgICAgICAgcmV0dXJuIG5vdFNldFZhbHVlO1xuICAgICAgfVxuICAgICAgdmFyIGRlZmF1bHRWYWwgPSB0aGlzLl9kZWZhdWx0VmFsdWVzW2tdO1xuICAgICAgcmV0dXJuIHRoaXMuX21hcCA/IHRoaXMuX21hcC5nZXQoaywgZGVmYXVsdFZhbCkgOiBkZWZhdWx0VmFsO1xuICAgIH07XG5cbiAgICAvLyBAcHJhZ21hIE1vZGlmaWNhdGlvblxuXG4gICAgUmVjb3JkLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuX19vd25lcklEKSB7XG4gICAgICAgIHRoaXMuX21hcCAmJiB0aGlzLl9tYXAuY2xlYXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB2YXIgUmVjb3JkVHlwZSA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICByZXR1cm4gUmVjb3JkVHlwZS5fZW1wdHkgfHwgKFJlY29yZFR5cGUuX2VtcHR5ID0gbWFrZVJlY29yZCh0aGlzLCBlbXB0eU1hcCgpKSk7XG4gICAgfTtcblxuICAgIFJlY29yZC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oaywgdikge1xuICAgICAgaWYgKCF0aGlzLmhhcyhrKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBzZXQgdW5rbm93biBrZXkgXCInICsgayArICdcIiBvbiAnICsgcmVjb3JkTmFtZSh0aGlzKSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fbWFwICYmICF0aGlzLl9tYXAuaGFzKGspKSB7XG4gICAgICAgIHZhciBkZWZhdWx0VmFsID0gdGhpcy5fZGVmYXVsdFZhbHVlc1trXTtcbiAgICAgICAgaWYgKHYgPT09IGRlZmF1bHRWYWwpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIG5ld01hcCA9IHRoaXMuX21hcCAmJiB0aGlzLl9tYXAuc2V0KGssIHYpO1xuICAgICAgaWYgKHRoaXMuX19vd25lcklEIHx8IG5ld01hcCA9PT0gdGhpcy5fbWFwKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1ha2VSZWNvcmQodGhpcywgbmV3TWFwKTtcbiAgICB9O1xuXG4gICAgUmVjb3JkLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihrKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzKGspKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIG5ld01hcCA9IHRoaXMuX21hcCAmJiB0aGlzLl9tYXAucmVtb3ZlKGspO1xuICAgICAgaWYgKHRoaXMuX19vd25lcklEIHx8IG5ld01hcCA9PT0gdGhpcy5fbWFwKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1ha2VSZWNvcmQodGhpcywgbmV3TWFwKTtcbiAgICB9O1xuXG4gICAgUmVjb3JkLnByb3RvdHlwZS53YXNBbHRlcmVkID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLndhc0FsdGVyZWQoKTtcbiAgICB9O1xuXG4gICAgUmVjb3JkLnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgcmV0dXJuIEtleWVkSXRlcmFibGUodGhpcy5fZGVmYXVsdFZhbHVlcykubWFwKGZ1bmN0aW9uKF8sIGspICB7cmV0dXJuIHRoaXMkMC5nZXQoayl9KS5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgIH07XG5cbiAgICBSZWNvcmQucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICByZXR1cm4gS2V5ZWRJdGVyYWJsZSh0aGlzLl9kZWZhdWx0VmFsdWVzKS5tYXAoZnVuY3Rpb24oXywgaykgIHtyZXR1cm4gdGhpcyQwLmdldChrKX0pLl9faXRlcmF0ZShmbiwgcmV2ZXJzZSk7XG4gICAgfTtcblxuICAgIFJlY29yZC5wcm90b3R5cGUuX19lbnN1cmVPd25lciA9IGZ1bmN0aW9uKG93bmVySUQpIHtcbiAgICAgIGlmIChvd25lcklEID09PSB0aGlzLl9fb3duZXJJRCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBuZXdNYXAgPSB0aGlzLl9tYXAgJiYgdGhpcy5fbWFwLl9fZW5zdXJlT3duZXIob3duZXJJRCk7XG4gICAgICBpZiAoIW93bmVySUQpIHtcbiAgICAgICAgdGhpcy5fX293bmVySUQgPSBvd25lcklEO1xuICAgICAgICB0aGlzLl9tYXAgPSBuZXdNYXA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1ha2VSZWNvcmQodGhpcywgbmV3TWFwLCBvd25lcklEKTtcbiAgICB9O1xuXG5cbiAgdmFyIFJlY29yZFByb3RvdHlwZSA9IFJlY29yZC5wcm90b3R5cGU7XG4gIFJlY29yZFByb3RvdHlwZVtERUxFVEVdID0gUmVjb3JkUHJvdG90eXBlLnJlbW92ZTtcbiAgUmVjb3JkUHJvdG90eXBlLmRlbGV0ZUluID1cbiAgUmVjb3JkUHJvdG90eXBlLnJlbW92ZUluID0gTWFwUHJvdG90eXBlLnJlbW92ZUluO1xuICBSZWNvcmRQcm90b3R5cGUubWVyZ2UgPSBNYXBQcm90b3R5cGUubWVyZ2U7XG4gIFJlY29yZFByb3RvdHlwZS5tZXJnZVdpdGggPSBNYXBQcm90b3R5cGUubWVyZ2VXaXRoO1xuICBSZWNvcmRQcm90b3R5cGUubWVyZ2VJbiA9IE1hcFByb3RvdHlwZS5tZXJnZUluO1xuICBSZWNvcmRQcm90b3R5cGUubWVyZ2VEZWVwID0gTWFwUHJvdG90eXBlLm1lcmdlRGVlcDtcbiAgUmVjb3JkUHJvdG90eXBlLm1lcmdlRGVlcFdpdGggPSBNYXBQcm90b3R5cGUubWVyZ2VEZWVwV2l0aDtcbiAgUmVjb3JkUHJvdG90eXBlLm1lcmdlRGVlcEluID0gTWFwUHJvdG90eXBlLm1lcmdlRGVlcEluO1xuICBSZWNvcmRQcm90b3R5cGUuc2V0SW4gPSBNYXBQcm90b3R5cGUuc2V0SW47XG4gIFJlY29yZFByb3RvdHlwZS51cGRhdGUgPSBNYXBQcm90b3R5cGUudXBkYXRlO1xuICBSZWNvcmRQcm90b3R5cGUudXBkYXRlSW4gPSBNYXBQcm90b3R5cGUudXBkYXRlSW47XG4gIFJlY29yZFByb3RvdHlwZS53aXRoTXV0YXRpb25zID0gTWFwUHJvdG90eXBlLndpdGhNdXRhdGlvbnM7XG4gIFJlY29yZFByb3RvdHlwZS5hc011dGFibGUgPSBNYXBQcm90b3R5cGUuYXNNdXRhYmxlO1xuICBSZWNvcmRQcm90b3R5cGUuYXNJbW11dGFibGUgPSBNYXBQcm90b3R5cGUuYXNJbW11dGFibGU7XG5cblxuICBmdW5jdGlvbiBtYWtlUmVjb3JkKGxpa2VSZWNvcmQsIG1hcCwgb3duZXJJRCkge1xuICAgIHZhciByZWNvcmQgPSBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihsaWtlUmVjb3JkKSk7XG4gICAgcmVjb3JkLl9tYXAgPSBtYXA7XG4gICAgcmVjb3JkLl9fb3duZXJJRCA9IG93bmVySUQ7XG4gICAgcmV0dXJuIHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY29yZE5hbWUocmVjb3JkKSB7XG4gICAgcmV0dXJuIHJlY29yZC5fbmFtZSB8fCByZWNvcmQuY29uc3RydWN0b3IubmFtZSB8fCAnUmVjb3JkJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFByb3BzKHByb3RvdHlwZSwgbmFtZXMpIHtcbiAgICB0cnkge1xuICAgICAgbmFtZXMuZm9yRWFjaChzZXRQcm9wLmJpbmQodW5kZWZpbmVkLCBwcm90b3R5cGUpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gT2JqZWN0LmRlZmluZVByb3BlcnR5IGZhaWxlZC4gUHJvYmFibHkgSUU4LlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFByb3AocHJvdG90eXBlLCBuYW1lKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvdHlwZSwgbmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG5hbWUpO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgaW52YXJpYW50KHRoaXMuX19vd25lcklELCAnQ2Fubm90IHNldCBvbiBhbiBpbW11dGFibGUgcmVjb3JkLicpO1xuICAgICAgICB0aGlzLnNldChuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhTZXQsIFNldENvbGxlY3Rpb24pO1xuXG4gICAgLy8gQHByYWdtYSBDb25zdHJ1Y3Rpb25cblxuICAgIGZ1bmN0aW9uIFNldCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgPyBlbXB0eVNldCgpIDpcbiAgICAgICAgaXNTZXQodmFsdWUpICYmICFpc09yZGVyZWQodmFsdWUpID8gdmFsdWUgOlxuICAgICAgICBlbXB0eVNldCgpLndpdGhNdXRhdGlvbnMoZnVuY3Rpb24oc2V0ICkge1xuICAgICAgICAgIHZhciBpdGVyID0gU2V0SXRlcmFibGUodmFsdWUpO1xuICAgICAgICAgIGFzc2VydE5vdEluZmluaXRlKGl0ZXIuc2l6ZSk7XG4gICAgICAgICAgaXRlci5mb3JFYWNoKGZ1bmN0aW9uKHYgKSB7cmV0dXJuIHNldC5hZGQodil9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgU2V0Lm9mID0gZnVuY3Rpb24oLyouLi52YWx1ZXMqLykge1xuICAgICAgcmV0dXJuIHRoaXMoYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgU2V0LmZyb21LZXlzID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzKEtleWVkSXRlcmFibGUodmFsdWUpLmtleVNlcSgpKTtcbiAgICB9O1xuXG4gICAgU2V0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX190b1N0cmluZygnU2V0IHsnLCAnfScpO1xuICAgIH07XG5cbiAgICAvLyBAcHJhZ21hIEFjY2Vzc1xuXG4gICAgU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX21hcC5oYXModmFsdWUpO1xuICAgIH07XG5cbiAgICAvLyBAcHJhZ21hIE1vZGlmaWNhdGlvblxuXG4gICAgU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHVwZGF0ZVNldCh0aGlzLCB0aGlzLl9tYXAuc2V0KHZhbHVlLCB0cnVlKSk7XG4gICAgfTtcblxuICAgIFNldC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB1cGRhdGVTZXQodGhpcywgdGhpcy5fbWFwLnJlbW92ZSh2YWx1ZSkpO1xuICAgIH07XG5cbiAgICBTZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdXBkYXRlU2V0KHRoaXMsIHRoaXMuX21hcC5jbGVhcigpKTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBDb21wb3NpdGlvblxuXG4gICAgU2V0LnByb3RvdHlwZS51bmlvbiA9IGZ1bmN0aW9uKCkge3ZhciBpdGVycyA9IFNMSUNFJDAuY2FsbChhcmd1bWVudHMsIDApO1xuICAgICAgaXRlcnMgPSBpdGVycy5maWx0ZXIoZnVuY3Rpb24oeCApIHtyZXR1cm4geC5zaXplICE9PSAwfSk7XG4gICAgICBpZiAoaXRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2l6ZSA9PT0gMCAmJiAhdGhpcy5fX293bmVySUQgJiYgaXRlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKGl0ZXJzWzBdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLndpdGhNdXRhdGlvbnMoZnVuY3Rpb24oc2V0ICkge1xuICAgICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgaXRlcnMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgICAgU2V0SXRlcmFibGUoaXRlcnNbaWldKS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlICkge3JldHVybiBzZXQuYWRkKHZhbHVlKX0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgU2V0LnByb3RvdHlwZS5pbnRlcnNlY3QgPSBmdW5jdGlvbigpIHt2YXIgaXRlcnMgPSBTTElDRSQwLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgIGlmIChpdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBpdGVycyA9IGl0ZXJzLm1hcChmdW5jdGlvbihpdGVyICkge3JldHVybiBTZXRJdGVyYWJsZShpdGVyKX0pO1xuICAgICAgdmFyIG9yaWdpbmFsU2V0ID0gdGhpcztcbiAgICAgIHJldHVybiB0aGlzLndpdGhNdXRhdGlvbnMoZnVuY3Rpb24oc2V0ICkge1xuICAgICAgICBvcmlnaW5hbFNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlICkge1xuICAgICAgICAgIGlmICghaXRlcnMuZXZlcnkoZnVuY3Rpb24oaXRlciApIHtyZXR1cm4gaXRlci5pbmNsdWRlcyh2YWx1ZSl9KSkge1xuICAgICAgICAgICAgc2V0LnJlbW92ZSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBTZXQucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24oKSB7dmFyIGl0ZXJzID0gU0xJQ0UkMC5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICBpZiAoaXRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgaXRlcnMgPSBpdGVycy5tYXAoZnVuY3Rpb24oaXRlciApIHtyZXR1cm4gU2V0SXRlcmFibGUoaXRlcil9KTtcbiAgICAgIHZhciBvcmlnaW5hbFNldCA9IHRoaXM7XG4gICAgICByZXR1cm4gdGhpcy53aXRoTXV0YXRpb25zKGZ1bmN0aW9uKHNldCApIHtcbiAgICAgICAgb3JpZ2luYWxTZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSApIHtcbiAgICAgICAgICBpZiAoaXRlcnMuc29tZShmdW5jdGlvbihpdGVyICkge3JldHVybiBpdGVyLmluY2x1ZGVzKHZhbHVlKX0pKSB7XG4gICAgICAgICAgICBzZXQucmVtb3ZlKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIFNldC5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnVuaW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIFNldC5wcm90b3R5cGUubWVyZ2VXaXRoID0gZnVuY3Rpb24obWVyZ2VyKSB7dmFyIGl0ZXJzID0gU0xJQ0UkMC5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICByZXR1cm4gdGhpcy51bmlvbi5hcHBseSh0aGlzLCBpdGVycyk7XG4gICAgfTtcblxuICAgIFNldC5wcm90b3R5cGUuc29ydCA9IGZ1bmN0aW9uKGNvbXBhcmF0b3IpIHtcbiAgICAgIC8vIExhdGUgYmluZGluZ1xuICAgICAgcmV0dXJuIE9yZGVyZWRTZXQoc29ydEZhY3RvcnkodGhpcywgY29tcGFyYXRvcikpO1xuICAgIH07XG5cbiAgICBTZXQucHJvdG90eXBlLnNvcnRCeSA9IGZ1bmN0aW9uKG1hcHBlciwgY29tcGFyYXRvcikge1xuICAgICAgLy8gTGF0ZSBiaW5kaW5nXG4gICAgICByZXR1cm4gT3JkZXJlZFNldChzb3J0RmFjdG9yeSh0aGlzLCBjb21wYXJhdG9yLCBtYXBwZXIpKTtcbiAgICB9O1xuXG4gICAgU2V0LnByb3RvdHlwZS53YXNBbHRlcmVkID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLndhc0FsdGVyZWQoKTtcbiAgICB9O1xuXG4gICAgU2V0LnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgcmV0dXJuIHRoaXMuX21hcC5fX2l0ZXJhdGUoZnVuY3Rpb24oXywgaykgIHtyZXR1cm4gZm4oaywgaywgdGhpcyQwKX0sIHJldmVyc2UpO1xuICAgIH07XG5cbiAgICBTZXQucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLm1hcChmdW5jdGlvbihfLCBrKSAge3JldHVybiBrfSkuX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbiAgICB9O1xuXG4gICAgU2V0LnByb3RvdHlwZS5fX2Vuc3VyZU93bmVyID0gZnVuY3Rpb24ob3duZXJJRCkge1xuICAgICAgaWYgKG93bmVySUQgPT09IHRoaXMuX19vd25lcklEKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIG5ld01hcCA9IHRoaXMuX21hcC5fX2Vuc3VyZU93bmVyKG93bmVySUQpO1xuICAgICAgaWYgKCFvd25lcklEKSB7XG4gICAgICAgIHRoaXMuX19vd25lcklEID0gb3duZXJJRDtcbiAgICAgICAgdGhpcy5fbWFwID0gbmV3TWFwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9fbWFrZShuZXdNYXAsIG93bmVySUQpO1xuICAgIH07XG5cblxuICBmdW5jdGlvbiBpc1NldChtYXliZVNldCkge1xuICAgIHJldHVybiAhIShtYXliZVNldCAmJiBtYXliZVNldFtJU19TRVRfU0VOVElORUxdKTtcbiAgfVxuXG4gIFNldC5pc1NldCA9IGlzU2V0O1xuXG4gIHZhciBJU19TRVRfU0VOVElORUwgPSAnQEBfX0lNTVVUQUJMRV9TRVRfX0BAJztcblxuICB2YXIgU2V0UHJvdG90eXBlID0gU2V0LnByb3RvdHlwZTtcbiAgU2V0UHJvdG90eXBlW0lTX1NFVF9TRU5USU5FTF0gPSB0cnVlO1xuICBTZXRQcm90b3R5cGVbREVMRVRFXSA9IFNldFByb3RvdHlwZS5yZW1vdmU7XG4gIFNldFByb3RvdHlwZS5tZXJnZURlZXAgPSBTZXRQcm90b3R5cGUubWVyZ2U7XG4gIFNldFByb3RvdHlwZS5tZXJnZURlZXBXaXRoID0gU2V0UHJvdG90eXBlLm1lcmdlV2l0aDtcbiAgU2V0UHJvdG90eXBlLndpdGhNdXRhdGlvbnMgPSBNYXBQcm90b3R5cGUud2l0aE11dGF0aW9ucztcbiAgU2V0UHJvdG90eXBlLmFzTXV0YWJsZSA9IE1hcFByb3RvdHlwZS5hc011dGFibGU7XG4gIFNldFByb3RvdHlwZS5hc0ltbXV0YWJsZSA9IE1hcFByb3RvdHlwZS5hc0ltbXV0YWJsZTtcblxuICBTZXRQcm90b3R5cGUuX19lbXB0eSA9IGVtcHR5U2V0O1xuICBTZXRQcm90b3R5cGUuX19tYWtlID0gbWFrZVNldDtcblxuICBmdW5jdGlvbiB1cGRhdGVTZXQoc2V0LCBuZXdNYXApIHtcbiAgICBpZiAoc2V0Ll9fb3duZXJJRCkge1xuICAgICAgc2V0LnNpemUgPSBuZXdNYXAuc2l6ZTtcbiAgICAgIHNldC5fbWFwID0gbmV3TWFwO1xuICAgICAgcmV0dXJuIHNldDtcbiAgICB9XG4gICAgcmV0dXJuIG5ld01hcCA9PT0gc2V0Ll9tYXAgPyBzZXQgOlxuICAgICAgbmV3TWFwLnNpemUgPT09IDAgPyBzZXQuX19lbXB0eSgpIDpcbiAgICAgIHNldC5fX21ha2UobmV3TWFwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VTZXQobWFwLCBvd25lcklEKSB7XG4gICAgdmFyIHNldCA9IE9iamVjdC5jcmVhdGUoU2V0UHJvdG90eXBlKTtcbiAgICBzZXQuc2l6ZSA9IG1hcCA/IG1hcC5zaXplIDogMDtcbiAgICBzZXQuX21hcCA9IG1hcDtcbiAgICBzZXQuX19vd25lcklEID0gb3duZXJJRDtcbiAgICByZXR1cm4gc2V0O1xuICB9XG5cbiAgdmFyIEVNUFRZX1NFVDtcbiAgZnVuY3Rpb24gZW1wdHlTZXQoKSB7XG4gICAgcmV0dXJuIEVNUFRZX1NFVCB8fCAoRU1QVFlfU0VUID0gbWFrZVNldChlbXB0eU1hcCgpKSk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhPcmRlcmVkU2V0LCBTZXQpO1xuXG4gICAgLy8gQHByYWdtYSBDb25zdHJ1Y3Rpb25cblxuICAgIGZ1bmN0aW9uIE9yZGVyZWRTZXQodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gZW1wdHlPcmRlcmVkU2V0KCkgOlxuICAgICAgICBpc09yZGVyZWRTZXQodmFsdWUpID8gdmFsdWUgOlxuICAgICAgICBlbXB0eU9yZGVyZWRTZXQoKS53aXRoTXV0YXRpb25zKGZ1bmN0aW9uKHNldCApIHtcbiAgICAgICAgICB2YXIgaXRlciA9IFNldEl0ZXJhYmxlKHZhbHVlKTtcbiAgICAgICAgICBhc3NlcnROb3RJbmZpbml0ZShpdGVyLnNpemUpO1xuICAgICAgICAgIGl0ZXIuZm9yRWFjaChmdW5jdGlvbih2ICkge3JldHVybiBzZXQuYWRkKHYpfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIE9yZGVyZWRTZXQub2YgPSBmdW5jdGlvbigvKi4uLnZhbHVlcyovKSB7XG4gICAgICByZXR1cm4gdGhpcyhhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBPcmRlcmVkU2V0LmZyb21LZXlzID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzKEtleWVkSXRlcmFibGUodmFsdWUpLmtleVNlcSgpKTtcbiAgICB9O1xuXG4gICAgT3JkZXJlZFNldC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9fdG9TdHJpbmcoJ09yZGVyZWRTZXQgeycsICd9Jyk7XG4gICAgfTtcblxuXG4gIGZ1bmN0aW9uIGlzT3JkZXJlZFNldChtYXliZU9yZGVyZWRTZXQpIHtcbiAgICByZXR1cm4gaXNTZXQobWF5YmVPcmRlcmVkU2V0KSAmJiBpc09yZGVyZWQobWF5YmVPcmRlcmVkU2V0KTtcbiAgfVxuXG4gIE9yZGVyZWRTZXQuaXNPcmRlcmVkU2V0ID0gaXNPcmRlcmVkU2V0O1xuXG4gIHZhciBPcmRlcmVkU2V0UHJvdG90eXBlID0gT3JkZXJlZFNldC5wcm90b3R5cGU7XG4gIE9yZGVyZWRTZXRQcm90b3R5cGVbSVNfT1JERVJFRF9TRU5USU5FTF0gPSB0cnVlO1xuXG4gIE9yZGVyZWRTZXRQcm90b3R5cGUuX19lbXB0eSA9IGVtcHR5T3JkZXJlZFNldDtcbiAgT3JkZXJlZFNldFByb3RvdHlwZS5fX21ha2UgPSBtYWtlT3JkZXJlZFNldDtcblxuICBmdW5jdGlvbiBtYWtlT3JkZXJlZFNldChtYXAsIG93bmVySUQpIHtcbiAgICB2YXIgc2V0ID0gT2JqZWN0LmNyZWF0ZShPcmRlcmVkU2V0UHJvdG90eXBlKTtcbiAgICBzZXQuc2l6ZSA9IG1hcCA/IG1hcC5zaXplIDogMDtcbiAgICBzZXQuX21hcCA9IG1hcDtcbiAgICBzZXQuX19vd25lcklEID0gb3duZXJJRDtcbiAgICByZXR1cm4gc2V0O1xuICB9XG5cbiAgdmFyIEVNUFRZX09SREVSRURfU0VUO1xuICBmdW5jdGlvbiBlbXB0eU9yZGVyZWRTZXQoKSB7XG4gICAgcmV0dXJuIEVNUFRZX09SREVSRURfU0VUIHx8IChFTVBUWV9PUkRFUkVEX1NFVCA9IG1ha2VPcmRlcmVkU2V0KGVtcHR5T3JkZXJlZE1hcCgpKSk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhTdGFjaywgSW5kZXhlZENvbGxlY3Rpb24pO1xuXG4gICAgLy8gQHByYWdtYSBDb25zdHJ1Y3Rpb25cblxuICAgIGZ1bmN0aW9uIFN0YWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/IGVtcHR5U3RhY2soKSA6XG4gICAgICAgIGlzU3RhY2sodmFsdWUpID8gdmFsdWUgOlxuICAgICAgICBlbXB0eVN0YWNrKCkudW5zaGlmdEFsbCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgU3RhY2sub2YgPSBmdW5jdGlvbigvKi4uLnZhbHVlcyovKSB7XG4gICAgICByZXR1cm4gdGhpcyhhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBTdGFjay5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9fdG9TdHJpbmcoJ1N0YWNrIFsnLCAnXScpO1xuICAgIH07XG5cbiAgICAvLyBAcHJhZ21hIEFjY2Vzc1xuXG4gICAgU3RhY2sucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGluZGV4LCBub3RTZXRWYWx1ZSkge1xuICAgICAgdmFyIGhlYWQgPSB0aGlzLl9oZWFkO1xuICAgICAgaW5kZXggPSB3cmFwSW5kZXgodGhpcywgaW5kZXgpO1xuICAgICAgd2hpbGUgKGhlYWQgJiYgaW5kZXgtLSkge1xuICAgICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhlYWQgPyBoZWFkLnZhbHVlIDogbm90U2V0VmFsdWU7XG4gICAgfTtcblxuICAgIFN0YWNrLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5faGVhZCAmJiB0aGlzLl9oZWFkLnZhbHVlO1xuICAgIH07XG5cbiAgICAvLyBAcHJhZ21hIE1vZGlmaWNhdGlvblxuXG4gICAgU3RhY2sucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbigvKi4uLnZhbHVlcyovKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBuZXdTaXplID0gdGhpcy5zaXplICsgYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHZhciBoZWFkID0gdGhpcy5faGVhZDtcbiAgICAgIGZvciAodmFyIGlpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGlpID49IDA7IGlpLS0pIHtcbiAgICAgICAgaGVhZCA9IHtcbiAgICAgICAgICB2YWx1ZTogYXJndW1lbnRzW2lpXSxcbiAgICAgICAgICBuZXh0OiBoZWFkXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX293bmVySUQpIHtcbiAgICAgICAgdGhpcy5zaXplID0gbmV3U2l6ZTtcbiAgICAgICAgdGhpcy5faGVhZCA9IGhlYWQ7XG4gICAgICAgIHRoaXMuX19oYXNoID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9fYWx0ZXJlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1ha2VTdGFjayhuZXdTaXplLCBoZWFkKTtcbiAgICB9O1xuXG4gICAgU3RhY2sucHJvdG90eXBlLnB1c2hBbGwgPSBmdW5jdGlvbihpdGVyKSB7XG4gICAgICBpdGVyID0gSW5kZXhlZEl0ZXJhYmxlKGl0ZXIpO1xuICAgICAgaWYgKGl0ZXIuc2l6ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGFzc2VydE5vdEluZmluaXRlKGl0ZXIuc2l6ZSk7XG4gICAgICB2YXIgbmV3U2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICAgIHZhciBoZWFkID0gdGhpcy5faGVhZDtcbiAgICAgIGl0ZXIucmV2ZXJzZSgpLmZvckVhY2goZnVuY3Rpb24odmFsdWUgKSB7XG4gICAgICAgIG5ld1NpemUrKztcbiAgICAgICAgaGVhZCA9IHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgbmV4dDogaGVhZFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5fX293bmVySUQpIHtcbiAgICAgICAgdGhpcy5zaXplID0gbmV3U2l6ZTtcbiAgICAgICAgdGhpcy5faGVhZCA9IGhlYWQ7XG4gICAgICAgIHRoaXMuX19oYXNoID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9fYWx0ZXJlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1ha2VTdGFjayhuZXdTaXplLCBoZWFkKTtcbiAgICB9O1xuXG4gICAgU3RhY2sucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2xpY2UoMSk7XG4gICAgfTtcblxuICAgIFN0YWNrLnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24oLyouLi52YWx1ZXMqLykge1xuICAgICAgcmV0dXJuIHRoaXMucHVzaC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBTdGFjay5wcm90b3R5cGUudW5zaGlmdEFsbCA9IGZ1bmN0aW9uKGl0ZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnB1c2hBbGwoaXRlcik7XG4gICAgfTtcblxuICAgIFN0YWNrLnByb3RvdHlwZS5zaGlmdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMucG9wLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIFN0YWNrLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuc2l6ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3duZXJJRCkge1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgICAgICB0aGlzLl9oZWFkID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9faGFzaCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fX2FsdGVyZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eVN0YWNrKCk7XG4gICAgfTtcblxuICAgIFN0YWNrLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uKGJlZ2luLCBlbmQpIHtcbiAgICAgIGlmICh3aG9sZVNsaWNlKGJlZ2luLCBlbmQsIHRoaXMuc2l6ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB2YXIgcmVzb2x2ZWRCZWdpbiA9IHJlc29sdmVCZWdpbihiZWdpbiwgdGhpcy5zaXplKTtcbiAgICAgIHZhciByZXNvbHZlZEVuZCA9IHJlc29sdmVFbmQoZW5kLCB0aGlzLnNpemUpO1xuICAgICAgaWYgKHJlc29sdmVkRW5kICE9PSB0aGlzLnNpemUpIHtcbiAgICAgICAgLy8gc3VwZXIuc2xpY2UoYmVnaW4sIGVuZCk7XG4gICAgICAgIHJldHVybiBJbmRleGVkQ29sbGVjdGlvbi5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLCBiZWdpbiwgZW5kKTtcbiAgICAgIH1cbiAgICAgIHZhciBuZXdTaXplID0gdGhpcy5zaXplIC0gcmVzb2x2ZWRCZWdpbjtcbiAgICAgIHZhciBoZWFkID0gdGhpcy5faGVhZDtcbiAgICAgIHdoaWxlIChyZXNvbHZlZEJlZ2luLS0pIHtcbiAgICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3duZXJJRCkge1xuICAgICAgICB0aGlzLnNpemUgPSBuZXdTaXplO1xuICAgICAgICB0aGlzLl9oZWFkID0gaGVhZDtcbiAgICAgICAgdGhpcy5fX2hhc2ggPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX19hbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFrZVN0YWNrKG5ld1NpemUsIGhlYWQpO1xuICAgIH07XG5cbiAgICAvLyBAcHJhZ21hIE11dGFiaWxpdHlcblxuICAgIFN0YWNrLnByb3RvdHlwZS5fX2Vuc3VyZU93bmVyID0gZnVuY3Rpb24ob3duZXJJRCkge1xuICAgICAgaWYgKG93bmVySUQgPT09IHRoaXMuX19vd25lcklEKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgaWYgKCFvd25lcklEKSB7XG4gICAgICAgIHRoaXMuX19vd25lcklEID0gb3duZXJJRDtcbiAgICAgICAgdGhpcy5fX2FsdGVyZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFrZVN0YWNrKHRoaXMuc2l6ZSwgdGhpcy5faGVhZCwgb3duZXJJRCwgdGhpcy5fX2hhc2gpO1xuICAgIH07XG5cbiAgICAvLyBAcHJhZ21hIEl0ZXJhdGlvblxuXG4gICAgU3RhY2sucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7XG4gICAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXZlcnNlKCkuX19pdGVyYXRlKGZuKTtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHZhciBub2RlID0gdGhpcy5faGVhZDtcbiAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgIGlmIChmbihub2RlLnZhbHVlLCBpdGVyYXRpb25zKyssIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlcmF0aW9ucztcbiAgICB9O1xuXG4gICAgU3RhY2sucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXZlcnNlKCkuX19pdGVyYXRvcih0eXBlKTtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHZhciBub2RlID0gdGhpcy5faGVhZDtcbiAgICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG5vZGUudmFsdWU7XG4gICAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICAgICAgICByZXR1cm4gaXRlcmF0b3JWYWx1ZSh0eXBlLCBpdGVyYXRpb25zKyssIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlcmF0b3JEb25lKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG5cbiAgZnVuY3Rpb24gaXNTdGFjayhtYXliZVN0YWNrKSB7XG4gICAgcmV0dXJuICEhKG1heWJlU3RhY2sgJiYgbWF5YmVTdGFja1tJU19TVEFDS19TRU5USU5FTF0pO1xuICB9XG5cbiAgU3RhY2suaXNTdGFjayA9IGlzU3RhY2s7XG5cbiAgdmFyIElTX1NUQUNLX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfU1RBQ0tfX0BAJztcblxuICB2YXIgU3RhY2tQcm90b3R5cGUgPSBTdGFjay5wcm90b3R5cGU7XG4gIFN0YWNrUHJvdG90eXBlW0lTX1NUQUNLX1NFTlRJTkVMXSA9IHRydWU7XG4gIFN0YWNrUHJvdG90eXBlLndpdGhNdXRhdGlvbnMgPSBNYXBQcm90b3R5cGUud2l0aE11dGF0aW9ucztcbiAgU3RhY2tQcm90b3R5cGUuYXNNdXRhYmxlID0gTWFwUHJvdG90eXBlLmFzTXV0YWJsZTtcbiAgU3RhY2tQcm90b3R5cGUuYXNJbW11dGFibGUgPSBNYXBQcm90b3R5cGUuYXNJbW11dGFibGU7XG4gIFN0YWNrUHJvdG90eXBlLndhc0FsdGVyZWQgPSBNYXBQcm90b3R5cGUud2FzQWx0ZXJlZDtcblxuXG4gIGZ1bmN0aW9uIG1ha2VTdGFjayhzaXplLCBoZWFkLCBvd25lcklELCBoYXNoKSB7XG4gICAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUoU3RhY2tQcm90b3R5cGUpO1xuICAgIG1hcC5zaXplID0gc2l6ZTtcbiAgICBtYXAuX2hlYWQgPSBoZWFkO1xuICAgIG1hcC5fX293bmVySUQgPSBvd25lcklEO1xuICAgIG1hcC5fX2hhc2ggPSBoYXNoO1xuICAgIG1hcC5fX2FsdGVyZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gbWFwO1xuICB9XG5cbiAgdmFyIEVNUFRZX1NUQUNLO1xuICBmdW5jdGlvbiBlbXB0eVN0YWNrKCkge1xuICAgIHJldHVybiBFTVBUWV9TVEFDSyB8fCAoRU1QVFlfU1RBQ0sgPSBtYWtlU3RhY2soMCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnRyaWJ1dGVzIGFkZGl0aW9uYWwgbWV0aG9kcyB0byBhIGNvbnN0cnVjdG9yXG4gICAqL1xuICBmdW5jdGlvbiBtaXhpbihjdG9yLCBtZXRob2RzKSB7XG4gICAgdmFyIGtleUNvcGllciA9IGZ1bmN0aW9uKGtleSApIHsgY3Rvci5wcm90b3R5cGVba2V5XSA9IG1ldGhvZHNba2V5XTsgfTtcbiAgICBPYmplY3Qua2V5cyhtZXRob2RzKS5mb3JFYWNoKGtleUNvcGllcik7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJlxuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhtZXRob2RzKS5mb3JFYWNoKGtleUNvcGllcik7XG4gICAgcmV0dXJuIGN0b3I7XG4gIH1cblxuICBJdGVyYWJsZS5JdGVyYXRvciA9IEl0ZXJhdG9yO1xuXG4gIG1peGluKEl0ZXJhYmxlLCB7XG5cbiAgICAvLyAjIyMgQ29udmVyc2lvbiB0byBvdGhlciB0eXBlc1xuXG4gICAgdG9BcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICBhc3NlcnROb3RJbmZpbml0ZSh0aGlzLnNpemUpO1xuICAgICAgdmFyIGFycmF5ID0gbmV3IEFycmF5KHRoaXMuc2l6ZSB8fCAwKTtcbiAgICAgIHRoaXMudmFsdWVTZXEoKS5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaSkgIHsgYXJyYXlbaV0gPSB2OyB9KTtcbiAgICAgIHJldHVybiBhcnJheTtcbiAgICB9LFxuXG4gICAgdG9JbmRleGVkU2VxOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgVG9JbmRleGVkU2VxdWVuY2UodGhpcyk7XG4gICAgfSxcblxuICAgIHRvSlM6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9TZXEoKS5tYXAoXG4gICAgICAgIGZ1bmN0aW9uKHZhbHVlICkge3JldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudG9KUyA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnRvSlMoKSA6IHZhbHVlfVxuICAgICAgKS5fX3RvSlMoKTtcbiAgICB9LFxuXG4gICAgdG9KU09OOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvU2VxKCkubWFwKFxuICAgICAgICBmdW5jdGlvbih2YWx1ZSApIHtyZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnRvSlNPTigpIDogdmFsdWV9XG4gICAgICApLl9fdG9KUygpO1xuICAgIH0sXG5cbiAgICB0b0tleWVkU2VxOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgVG9LZXllZFNlcXVlbmNlKHRoaXMsIHRydWUpO1xuICAgIH0sXG5cbiAgICB0b01hcDogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBVc2UgTGF0ZSBCaW5kaW5nIGhlcmUgdG8gc29sdmUgdGhlIGNpcmN1bGFyIGRlcGVuZGVuY3kuXG4gICAgICByZXR1cm4gTWFwKHRoaXMudG9LZXllZFNlcSgpKTtcbiAgICB9LFxuXG4gICAgdG9PYmplY3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgYXNzZXJ0Tm90SW5maW5pdGUodGhpcy5zaXplKTtcbiAgICAgIHZhciBvYmplY3QgPSB7fTtcbiAgICAgIHRoaXMuX19pdGVyYXRlKGZ1bmN0aW9uKHYsIGspICB7IG9iamVjdFtrXSA9IHY7IH0pO1xuICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9LFxuXG4gICAgdG9PcmRlcmVkTWFwOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFVzZSBMYXRlIEJpbmRpbmcgaGVyZSB0byBzb2x2ZSB0aGUgY2lyY3VsYXIgZGVwZW5kZW5jeS5cbiAgICAgIHJldHVybiBPcmRlcmVkTWFwKHRoaXMudG9LZXllZFNlcSgpKTtcbiAgICB9LFxuXG4gICAgdG9PcmRlcmVkU2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFVzZSBMYXRlIEJpbmRpbmcgaGVyZSB0byBzb2x2ZSB0aGUgY2lyY3VsYXIgZGVwZW5kZW5jeS5cbiAgICAgIHJldHVybiBPcmRlcmVkU2V0KGlzS2V5ZWQodGhpcykgPyB0aGlzLnZhbHVlU2VxKCkgOiB0aGlzKTtcbiAgICB9LFxuXG4gICAgdG9TZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gVXNlIExhdGUgQmluZGluZyBoZXJlIHRvIHNvbHZlIHRoZSBjaXJjdWxhciBkZXBlbmRlbmN5LlxuICAgICAgcmV0dXJuIFNldChpc0tleWVkKHRoaXMpID8gdGhpcy52YWx1ZVNlcSgpIDogdGhpcyk7XG4gICAgfSxcblxuICAgIHRvU2V0U2VxOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgVG9TZXRTZXF1ZW5jZSh0aGlzKTtcbiAgICB9LFxuXG4gICAgdG9TZXE6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGlzSW5kZXhlZCh0aGlzKSA/IHRoaXMudG9JbmRleGVkU2VxKCkgOlxuICAgICAgICBpc0tleWVkKHRoaXMpID8gdGhpcy50b0tleWVkU2VxKCkgOlxuICAgICAgICB0aGlzLnRvU2V0U2VxKCk7XG4gICAgfSxcblxuICAgIHRvU3RhY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gVXNlIExhdGUgQmluZGluZyBoZXJlIHRvIHNvbHZlIHRoZSBjaXJjdWxhciBkZXBlbmRlbmN5LlxuICAgICAgcmV0dXJuIFN0YWNrKGlzS2V5ZWQodGhpcykgPyB0aGlzLnZhbHVlU2VxKCkgOiB0aGlzKTtcbiAgICB9LFxuXG4gICAgdG9MaXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFVzZSBMYXRlIEJpbmRpbmcgaGVyZSB0byBzb2x2ZSB0aGUgY2lyY3VsYXIgZGVwZW5kZW5jeS5cbiAgICAgIHJldHVybiBMaXN0KGlzS2V5ZWQodGhpcykgPyB0aGlzLnZhbHVlU2VxKCkgOiB0aGlzKTtcbiAgICB9LFxuXG5cbiAgICAvLyAjIyMgQ29tbW9uIEphdmFTY3JpcHQgbWV0aG9kcyBhbmQgcHJvcGVydGllc1xuXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICdbSXRlcmFibGVdJztcbiAgICB9LFxuXG4gICAgX190b1N0cmluZzogZnVuY3Rpb24oaGVhZCwgdGFpbCkge1xuICAgICAgaWYgKHRoaXMuc2l6ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gaGVhZCArIHRhaWw7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGVhZCArICcgJyArIHRoaXMudG9TZXEoKS5tYXAodGhpcy5fX3RvU3RyaW5nTWFwcGVyKS5qb2luKCcsICcpICsgJyAnICsgdGFpbDtcbiAgICB9LFxuXG5cbiAgICAvLyAjIyMgRVM2IENvbGxlY3Rpb24gbWV0aG9kcyAoRVM2IEFycmF5IGFuZCBNYXApXG5cbiAgICBjb25jYXQ6IGZ1bmN0aW9uKCkge3ZhciB2YWx1ZXMgPSBTTElDRSQwLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCBjb25jYXRGYWN0b3J5KHRoaXMsIHZhbHVlcykpO1xuICAgIH0sXG5cbiAgICBpbmNsdWRlczogZnVuY3Rpb24oc2VhcmNoVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNvbWUoZnVuY3Rpb24odmFsdWUgKSB7cmV0dXJuIGlzKHZhbHVlLCBzZWFyY2hWYWx1ZSl9KTtcbiAgICB9LFxuXG4gICAgZW50cmllczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX2l0ZXJhdG9yKElURVJBVEVfRU5UUklFUyk7XG4gICAgfSxcblxuICAgIGV2ZXJ5OiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIGFzc2VydE5vdEluZmluaXRlKHRoaXMuc2l6ZSk7XG4gICAgICB2YXIgcmV0dXJuVmFsdWUgPSB0cnVlO1xuICAgICAgdGhpcy5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaywgYykgIHtcbiAgICAgICAgaWYgKCFwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2LCBrLCBjKSkge1xuICAgICAgICAgIHJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9LFxuXG4gICAgZmlsdGVyOiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCBmaWx0ZXJGYWN0b3J5KHRoaXMsIHByZWRpY2F0ZSwgY29udGV4dCwgdHJ1ZSkpO1xuICAgIH0sXG5cbiAgICBmaW5kOiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQsIG5vdFNldFZhbHVlKSB7XG4gICAgICB2YXIgZW50cnkgPSB0aGlzLmZpbmRFbnRyeShwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIGVudHJ5ID8gZW50cnlbMV0gOiBub3RTZXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgZm9yRWFjaDogZnVuY3Rpb24oc2lkZUVmZmVjdCwgY29udGV4dCkge1xuICAgICAgYXNzZXJ0Tm90SW5maW5pdGUodGhpcy5zaXplKTtcbiAgICAgIHJldHVybiB0aGlzLl9faXRlcmF0ZShjb250ZXh0ID8gc2lkZUVmZmVjdC5iaW5kKGNvbnRleHQpIDogc2lkZUVmZmVjdCk7XG4gICAgfSxcblxuICAgIGpvaW46IGZ1bmN0aW9uKHNlcGFyYXRvcikge1xuICAgICAgYXNzZXJ0Tm90SW5maW5pdGUodGhpcy5zaXplKTtcbiAgICAgIHNlcGFyYXRvciA9IHNlcGFyYXRvciAhPT0gdW5kZWZpbmVkID8gJycgKyBzZXBhcmF0b3IgOiAnLCc7XG4gICAgICB2YXIgam9pbmVkID0gJyc7XG4gICAgICB2YXIgaXNGaXJzdCA9IHRydWU7XG4gICAgICB0aGlzLl9faXRlcmF0ZShmdW5jdGlvbih2ICkge1xuICAgICAgICBpc0ZpcnN0ID8gKGlzRmlyc3QgPSBmYWxzZSkgOiAoam9pbmVkICs9IHNlcGFyYXRvcik7XG4gICAgICAgIGpvaW5lZCArPSB2ICE9PSBudWxsICYmIHYgIT09IHVuZGVmaW5lZCA/IHYudG9TdHJpbmcoKSA6ICcnO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gam9pbmVkO1xuICAgIH0sXG5cbiAgICBrZXlzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9faXRlcmF0b3IoSVRFUkFURV9LRVlTKTtcbiAgICB9LFxuXG4gICAgbWFwOiBmdW5jdGlvbihtYXBwZXIsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCBtYXBGYWN0b3J5KHRoaXMsIG1hcHBlciwgY29udGV4dCkpO1xuICAgIH0sXG5cbiAgICByZWR1Y2U6IGZ1bmN0aW9uKHJlZHVjZXIsIGluaXRpYWxSZWR1Y3Rpb24sIGNvbnRleHQpIHtcbiAgICAgIGFzc2VydE5vdEluZmluaXRlKHRoaXMuc2l6ZSk7XG4gICAgICB2YXIgcmVkdWN0aW9uO1xuICAgICAgdmFyIHVzZUZpcnN0O1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHVzZUZpcnN0ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlZHVjdGlvbiA9IGluaXRpYWxSZWR1Y3Rpb247XG4gICAgICB9XG4gICAgICB0aGlzLl9faXRlcmF0ZShmdW5jdGlvbih2LCBrLCBjKSAge1xuICAgICAgICBpZiAodXNlRmlyc3QpIHtcbiAgICAgICAgICB1c2VGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgIHJlZHVjdGlvbiA9IHY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVkdWN0aW9uID0gcmVkdWNlci5jYWxsKGNvbnRleHQsIHJlZHVjdGlvbiwgdiwgaywgYyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlZHVjdGlvbjtcbiAgICB9LFxuXG4gICAgcmVkdWNlUmlnaHQ6IGZ1bmN0aW9uKHJlZHVjZXIsIGluaXRpYWxSZWR1Y3Rpb24sIGNvbnRleHQpIHtcbiAgICAgIHZhciByZXZlcnNlZCA9IHRoaXMudG9LZXllZFNlcSgpLnJldmVyc2UoKTtcbiAgICAgIHJldHVybiByZXZlcnNlZC5yZWR1Y2UuYXBwbHkocmV2ZXJzZWQsIGFyZ3VtZW50cyk7XG4gICAgfSxcblxuICAgIHJldmVyc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIHJldmVyc2VGYWN0b3J5KHRoaXMsIHRydWUpKTtcbiAgICB9LFxuXG4gICAgc2xpY2U6IGZ1bmN0aW9uKGJlZ2luLCBlbmQpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCBzbGljZUZhY3RvcnkodGhpcywgYmVnaW4sIGVuZCwgdHJ1ZSkpO1xuICAgIH0sXG5cbiAgICBzb21lOiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiAhdGhpcy5ldmVyeShub3QocHJlZGljYXRlKSwgY29udGV4dCk7XG4gICAgfSxcblxuICAgIHNvcnQ6IGZ1bmN0aW9uKGNvbXBhcmF0b3IpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCBzb3J0RmFjdG9yeSh0aGlzLCBjb21wYXJhdG9yKSk7XG4gICAgfSxcblxuICAgIHZhbHVlczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX2l0ZXJhdG9yKElURVJBVEVfVkFMVUVTKTtcbiAgICB9LFxuXG5cbiAgICAvLyAjIyMgTW9yZSBzZXF1ZW50aWFsIG1ldGhvZHNcblxuICAgIGJ1dExhc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2xpY2UoMCwgLTEpO1xuICAgIH0sXG5cbiAgICBpc0VtcHR5OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnNpemUgIT09IHVuZGVmaW5lZCA/IHRoaXMuc2l6ZSA9PT0gMCA6ICF0aGlzLnNvbWUoZnVuY3Rpb24oKSAge3JldHVybiB0cnVlfSk7XG4gICAgfSxcblxuICAgIGNvdW50OiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiBlbnN1cmVTaXplKFxuICAgICAgICBwcmVkaWNhdGUgPyB0aGlzLnRvU2VxKCkuZmlsdGVyKHByZWRpY2F0ZSwgY29udGV4dCkgOiB0aGlzXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBjb3VudEJ5OiBmdW5jdGlvbihncm91cGVyLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gY291bnRCeUZhY3RvcnkodGhpcywgZ3JvdXBlciwgY29udGV4dCk7XG4gICAgfSxcblxuICAgIGVxdWFsczogZnVuY3Rpb24ob3RoZXIpIHtcbiAgICAgIHJldHVybiBkZWVwRXF1YWwodGhpcywgb3RoZXIpO1xuICAgIH0sXG5cbiAgICBlbnRyeVNlcTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaXRlcmFibGUgPSB0aGlzO1xuICAgICAgaWYgKGl0ZXJhYmxlLl9jYWNoZSkge1xuICAgICAgICAvLyBXZSBjYWNoZSBhcyBhbiBlbnRyaWVzIGFycmF5LCBzbyB3ZSBjYW4ganVzdCByZXR1cm4gdGhlIGNhY2hlIVxuICAgICAgICByZXR1cm4gbmV3IEFycmF5U2VxKGl0ZXJhYmxlLl9jYWNoZSk7XG4gICAgICB9XG4gICAgICB2YXIgZW50cmllc1NlcXVlbmNlID0gaXRlcmFibGUudG9TZXEoKS5tYXAoZW50cnlNYXBwZXIpLnRvSW5kZXhlZFNlcSgpO1xuICAgICAgZW50cmllc1NlcXVlbmNlLmZyb21FbnRyeVNlcSA9IGZ1bmN0aW9uKCkgIHtyZXR1cm4gaXRlcmFibGUudG9TZXEoKX07XG4gICAgICByZXR1cm4gZW50cmllc1NlcXVlbmNlO1xuICAgIH0sXG5cbiAgICBmaWx0ZXJOb3Q6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKG5vdChwcmVkaWNhdGUpLCBjb250ZXh0KTtcbiAgICB9LFxuXG4gICAgZmluZEVudHJ5OiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQsIG5vdFNldFZhbHVlKSB7XG4gICAgICB2YXIgZm91bmQgPSBub3RTZXRWYWx1ZTtcbiAgICAgIHRoaXMuX19pdGVyYXRlKGZ1bmN0aW9uKHYsIGssIGMpICB7XG4gICAgICAgIGlmIChwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2LCBrLCBjKSkge1xuICAgICAgICAgIGZvdW5kID0gW2ssIHZdO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZm91bmQ7XG4gICAgfSxcblxuICAgIGZpbmRLZXk6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgdmFyIGVudHJ5ID0gdGhpcy5maW5kRW50cnkocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeVswXTtcbiAgICB9LFxuXG4gICAgZmluZExhc3Q6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCwgbm90U2V0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvS2V5ZWRTZXEoKS5yZXZlcnNlKCkuZmluZChwcmVkaWNhdGUsIGNvbnRleHQsIG5vdFNldFZhbHVlKTtcbiAgICB9LFxuXG4gICAgZmluZExhc3RFbnRyeTogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0LCBub3RTZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMudG9LZXllZFNlcSgpLnJldmVyc2UoKS5maW5kRW50cnkocHJlZGljYXRlLCBjb250ZXh0LCBub3RTZXRWYWx1ZSk7XG4gICAgfSxcblxuICAgIGZpbmRMYXN0S2V5OiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvS2V5ZWRTZXEoKS5yZXZlcnNlKCkuZmluZEtleShwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIH0sXG5cbiAgICBmaXJzdDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kKHJldHVyblRydWUpO1xuICAgIH0sXG5cbiAgICBmbGF0TWFwOiBmdW5jdGlvbihtYXBwZXIsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCBmbGF0TWFwRmFjdG9yeSh0aGlzLCBtYXBwZXIsIGNvbnRleHQpKTtcbiAgICB9LFxuXG4gICAgZmxhdHRlbjogZnVuY3Rpb24oZGVwdGgpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCBmbGF0dGVuRmFjdG9yeSh0aGlzLCBkZXB0aCwgdHJ1ZSkpO1xuICAgIH0sXG5cbiAgICBmcm9tRW50cnlTZXE6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBGcm9tRW50cmllc1NlcXVlbmNlKHRoaXMpO1xuICAgIH0sXG5cbiAgICBnZXQ6IGZ1bmN0aW9uKHNlYXJjaEtleSwgbm90U2V0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbmQoZnVuY3Rpb24oXywga2V5KSAge3JldHVybiBpcyhrZXksIHNlYXJjaEtleSl9LCB1bmRlZmluZWQsIG5vdFNldFZhbHVlKTtcbiAgICB9LFxuXG4gICAgZ2V0SW46IGZ1bmN0aW9uKHNlYXJjaEtleVBhdGgsIG5vdFNldFZhbHVlKSB7XG4gICAgICB2YXIgbmVzdGVkID0gdGhpcztcbiAgICAgIC8vIE5vdGU6IGluIGFuIEVTNiBlbnZpcm9ubWVudCwgd2Ugd291bGQgcHJlZmVyOlxuICAgICAgLy8gZm9yICh2YXIga2V5IG9mIHNlYXJjaEtleVBhdGgpIHtcbiAgICAgIHZhciBpdGVyID0gZm9yY2VJdGVyYXRvcihzZWFyY2hLZXlQYXRoKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXIubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIHZhciBrZXkgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXN0ZWQgPSBuZXN0ZWQgJiYgbmVzdGVkLmdldCA/IG5lc3RlZC5nZXQoa2V5LCBOT1RfU0VUKSA6IE5PVF9TRVQ7XG4gICAgICAgIGlmIChuZXN0ZWQgPT09IE5PVF9TRVQpIHtcbiAgICAgICAgICByZXR1cm4gbm90U2V0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXN0ZWQ7XG4gICAgfSxcblxuICAgIGdyb3VwQnk6IGZ1bmN0aW9uKGdyb3VwZXIsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiBncm91cEJ5RmFjdG9yeSh0aGlzLCBncm91cGVyLCBjb250ZXh0KTtcbiAgICB9LFxuXG4gICAgaGFzOiBmdW5jdGlvbihzZWFyY2hLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldChzZWFyY2hLZXksIE5PVF9TRVQpICE9PSBOT1RfU0VUO1xuICAgIH0sXG5cbiAgICBoYXNJbjogZnVuY3Rpb24oc2VhcmNoS2V5UGF0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW4oc2VhcmNoS2V5UGF0aCwgTk9UX1NFVCkgIT09IE5PVF9TRVQ7XG4gICAgfSxcblxuICAgIGlzU3Vic2V0OiBmdW5jdGlvbihpdGVyKSB7XG4gICAgICBpdGVyID0gdHlwZW9mIGl0ZXIuaW5jbHVkZXMgPT09ICdmdW5jdGlvbicgPyBpdGVyIDogSXRlcmFibGUoaXRlcik7XG4gICAgICByZXR1cm4gdGhpcy5ldmVyeShmdW5jdGlvbih2YWx1ZSApIHtyZXR1cm4gaXRlci5pbmNsdWRlcyh2YWx1ZSl9KTtcbiAgICB9LFxuXG4gICAgaXNTdXBlcnNldDogZnVuY3Rpb24oaXRlcikge1xuICAgICAgaXRlciA9IHR5cGVvZiBpdGVyLmlzU3Vic2V0ID09PSAnZnVuY3Rpb24nID8gaXRlciA6IEl0ZXJhYmxlKGl0ZXIpO1xuICAgICAgcmV0dXJuIGl0ZXIuaXNTdWJzZXQodGhpcyk7XG4gICAgfSxcblxuICAgIGtleU9mOiBmdW5jdGlvbihzZWFyY2hWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZmluZEtleShmdW5jdGlvbih2YWx1ZSApIHtyZXR1cm4gaXModmFsdWUsIHNlYXJjaFZhbHVlKX0pO1xuICAgIH0sXG5cbiAgICBrZXlTZXE6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9TZXEoKS5tYXAoa2V5TWFwcGVyKS50b0luZGV4ZWRTZXEoKTtcbiAgICB9LFxuXG4gICAgbGFzdDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b1NlcSgpLnJldmVyc2UoKS5maXJzdCgpO1xuICAgIH0sXG5cbiAgICBsYXN0S2V5T2Y6IGZ1bmN0aW9uKHNlYXJjaFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy50b0tleWVkU2VxKCkucmV2ZXJzZSgpLmtleU9mKHNlYXJjaFZhbHVlKTtcbiAgICB9LFxuXG4gICAgbWF4OiBmdW5jdGlvbihjb21wYXJhdG9yKSB7XG4gICAgICByZXR1cm4gbWF4RmFjdG9yeSh0aGlzLCBjb21wYXJhdG9yKTtcbiAgICB9LFxuXG4gICAgbWF4Qnk6IGZ1bmN0aW9uKG1hcHBlciwgY29tcGFyYXRvcikge1xuICAgICAgcmV0dXJuIG1heEZhY3RvcnkodGhpcywgY29tcGFyYXRvciwgbWFwcGVyKTtcbiAgICB9LFxuXG4gICAgbWluOiBmdW5jdGlvbihjb21wYXJhdG9yKSB7XG4gICAgICByZXR1cm4gbWF4RmFjdG9yeSh0aGlzLCBjb21wYXJhdG9yID8gbmVnKGNvbXBhcmF0b3IpIDogZGVmYXVsdE5lZ0NvbXBhcmF0b3IpO1xuICAgIH0sXG5cbiAgICBtaW5CeTogZnVuY3Rpb24obWFwcGVyLCBjb21wYXJhdG9yKSB7XG4gICAgICByZXR1cm4gbWF4RmFjdG9yeSh0aGlzLCBjb21wYXJhdG9yID8gbmVnKGNvbXBhcmF0b3IpIDogZGVmYXVsdE5lZ0NvbXBhcmF0b3IsIG1hcHBlcik7XG4gICAgfSxcblxuICAgIHJlc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2xpY2UoMSk7XG4gICAgfSxcblxuICAgIHNraXA6IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2xpY2UoTWF0aC5tYXgoMCwgYW1vdW50KSk7XG4gICAgfSxcblxuICAgIHNraXBMYXN0OiBmdW5jdGlvbihhbW91bnQpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCB0aGlzLnRvU2VxKCkucmV2ZXJzZSgpLnNraXAoYW1vdW50KS5yZXZlcnNlKCkpO1xuICAgIH0sXG5cbiAgICBza2lwV2hpbGU6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIHNraXBXaGlsZUZhY3RvcnkodGhpcywgcHJlZGljYXRlLCBjb250ZXh0LCB0cnVlKSk7XG4gICAgfSxcblxuICAgIHNraXBVbnRpbDogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5za2lwV2hpbGUobm90KHByZWRpY2F0ZSksIGNvbnRleHQpO1xuICAgIH0sXG5cbiAgICBzb3J0Qnk6IGZ1bmN0aW9uKG1hcHBlciwgY29tcGFyYXRvcikge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIHNvcnRGYWN0b3J5KHRoaXMsIGNvbXBhcmF0b3IsIG1hcHBlcikpO1xuICAgIH0sXG5cbiAgICB0YWtlOiBmdW5jdGlvbihhbW91bnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnNsaWNlKDAsIE1hdGgubWF4KDAsIGFtb3VudCkpO1xuICAgIH0sXG5cbiAgICB0YWtlTGFzdDogZnVuY3Rpb24oYW1vdW50KSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgdGhpcy50b1NlcSgpLnJldmVyc2UoKS50YWtlKGFtb3VudCkucmV2ZXJzZSgpKTtcbiAgICB9LFxuXG4gICAgdGFrZVdoaWxlOiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCB0YWtlV2hpbGVGYWN0b3J5KHRoaXMsIHByZWRpY2F0ZSwgY29udGV4dCkpO1xuICAgIH0sXG5cbiAgICB0YWtlVW50aWw6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMudGFrZVdoaWxlKG5vdChwcmVkaWNhdGUpLCBjb250ZXh0KTtcbiAgICB9LFxuXG4gICAgdmFsdWVTZXE6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9JbmRleGVkU2VxKCk7XG4gICAgfSxcblxuXG4gICAgLy8gIyMjIEhhc2hhYmxlIE9iamVjdFxuXG4gICAgaGFzaENvZGU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX19oYXNoIHx8ICh0aGlzLl9faGFzaCA9IGhhc2hJdGVyYWJsZSh0aGlzKSk7XG4gICAgfVxuXG5cbiAgICAvLyAjIyMgSW50ZXJuYWxcblxuICAgIC8vIGFic3RyYWN0IF9faXRlcmF0ZShmbiwgcmV2ZXJzZSlcblxuICAgIC8vIGFic3RyYWN0IF9faXRlcmF0b3IodHlwZSwgcmV2ZXJzZSlcbiAgfSk7XG5cbiAgLy8gdmFyIElTX0lURVJBQkxFX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfSVRFUkFCTEVfX0BAJztcbiAgLy8gdmFyIElTX0tFWUVEX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfS0VZRURfX0BAJztcbiAgLy8gdmFyIElTX0lOREVYRURfU0VOVElORUwgPSAnQEBfX0lNTVVUQUJMRV9JTkRFWEVEX19AQCc7XG4gIC8vIHZhciBJU19PUkRFUkVEX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfT1JERVJFRF9fQEAnO1xuXG4gIHZhciBJdGVyYWJsZVByb3RvdHlwZSA9IEl0ZXJhYmxlLnByb3RvdHlwZTtcbiAgSXRlcmFibGVQcm90b3R5cGVbSVNfSVRFUkFCTEVfU0VOVElORUxdID0gdHJ1ZTtcbiAgSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1JfU1lNQk9MXSA9IEl0ZXJhYmxlUHJvdG90eXBlLnZhbHVlcztcbiAgSXRlcmFibGVQcm90b3R5cGUuX190b0pTID0gSXRlcmFibGVQcm90b3R5cGUudG9BcnJheTtcbiAgSXRlcmFibGVQcm90b3R5cGUuX190b1N0cmluZ01hcHBlciA9IHF1b3RlU3RyaW5nO1xuICBJdGVyYWJsZVByb3RvdHlwZS5pbnNwZWN0ID1cbiAgSXRlcmFibGVQcm90b3R5cGUudG9Tb3VyY2UgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTsgfTtcbiAgSXRlcmFibGVQcm90b3R5cGUuY2hhaW4gPSBJdGVyYWJsZVByb3RvdHlwZS5mbGF0TWFwO1xuICBJdGVyYWJsZVByb3RvdHlwZS5jb250YWlucyA9IEl0ZXJhYmxlUHJvdG90eXBlLmluY2x1ZGVzO1xuXG4gIG1peGluKEtleWVkSXRlcmFibGUsIHtcblxuICAgIC8vICMjIyBNb3JlIHNlcXVlbnRpYWwgbWV0aG9kc1xuXG4gICAgZmxpcDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgZmxpcEZhY3RvcnkodGhpcykpO1xuICAgIH0sXG5cbiAgICBtYXBFbnRyaWVzOiBmdW5jdGlvbihtYXBwZXIsIGNvbnRleHQpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLFxuICAgICAgICB0aGlzLnRvU2VxKCkubWFwKFxuICAgICAgICAgIGZ1bmN0aW9uKHYsIGspICB7cmV0dXJuIG1hcHBlci5jYWxsKGNvbnRleHQsIFtrLCB2XSwgaXRlcmF0aW9ucysrLCB0aGlzJDApfVxuICAgICAgICApLmZyb21FbnRyeVNlcSgpXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBtYXBLZXlzOiBmdW5jdGlvbihtYXBwZXIsIGNvbnRleHQpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLFxuICAgICAgICB0aGlzLnRvU2VxKCkuZmxpcCgpLm1hcChcbiAgICAgICAgICBmdW5jdGlvbihrLCB2KSAge3JldHVybiBtYXBwZXIuY2FsbChjb250ZXh0LCBrLCB2LCB0aGlzJDApfVxuICAgICAgICApLmZsaXAoKVxuICAgICAgKTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgdmFyIEtleWVkSXRlcmFibGVQcm90b3R5cGUgPSBLZXllZEl0ZXJhYmxlLnByb3RvdHlwZTtcbiAgS2V5ZWRJdGVyYWJsZVByb3RvdHlwZVtJU19LRVlFRF9TRU5USU5FTF0gPSB0cnVlO1xuICBLZXllZEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SX1NZTUJPTF0gPSBJdGVyYWJsZVByb3RvdHlwZS5lbnRyaWVzO1xuICBLZXllZEl0ZXJhYmxlUHJvdG90eXBlLl9fdG9KUyA9IEl0ZXJhYmxlUHJvdG90eXBlLnRvT2JqZWN0O1xuICBLZXllZEl0ZXJhYmxlUHJvdG90eXBlLl9fdG9TdHJpbmdNYXBwZXIgPSBmdW5jdGlvbih2LCBrKSAge3JldHVybiBKU09OLnN0cmluZ2lmeShrKSArICc6ICcgKyBxdW90ZVN0cmluZyh2KX07XG5cblxuXG4gIG1peGluKEluZGV4ZWRJdGVyYWJsZSwge1xuXG4gICAgLy8gIyMjIENvbnZlcnNpb24gdG8gb3RoZXIgdHlwZXNcblxuICAgIHRvS2V5ZWRTZXE6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBUb0tleWVkU2VxdWVuY2UodGhpcywgZmFsc2UpO1xuICAgIH0sXG5cblxuICAgIC8vICMjIyBFUzYgQ29sbGVjdGlvbiBtZXRob2RzIChFUzYgQXJyYXkgYW5kIE1hcClcblxuICAgIGZpbHRlcjogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgZmlsdGVyRmFjdG9yeSh0aGlzLCBwcmVkaWNhdGUsIGNvbnRleHQsIGZhbHNlKSk7XG4gICAgfSxcblxuICAgIGZpbmRJbmRleDogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICB2YXIgZW50cnkgPSB0aGlzLmZpbmRFbnRyeShwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIGVudHJ5ID8gZW50cnlbMF0gOiAtMTtcbiAgICB9LFxuXG4gICAgaW5kZXhPZjogZnVuY3Rpb24oc2VhcmNoVmFsdWUpIHtcbiAgICAgIHZhciBrZXkgPSB0aGlzLmtleU9mKHNlYXJjaFZhbHVlKTtcbiAgICAgIHJldHVybiBrZXkgPT09IHVuZGVmaW5lZCA/IC0xIDoga2V5O1xuICAgIH0sXG5cbiAgICBsYXN0SW5kZXhPZjogZnVuY3Rpb24oc2VhcmNoVmFsdWUpIHtcbiAgICAgIHZhciBrZXkgPSB0aGlzLmxhc3RLZXlPZihzZWFyY2hWYWx1ZSk7XG4gICAgICByZXR1cm4ga2V5ID09PSB1bmRlZmluZWQgPyAtMSA6IGtleTtcbiAgICB9LFxuXG4gICAgcmV2ZXJzZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgcmV2ZXJzZUZhY3RvcnkodGhpcywgZmFsc2UpKTtcbiAgICB9LFxuXG4gICAgc2xpY2U6IGZ1bmN0aW9uKGJlZ2luLCBlbmQpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCBzbGljZUZhY3RvcnkodGhpcywgYmVnaW4sIGVuZCwgZmFsc2UpKTtcbiAgICB9LFxuXG4gICAgc3BsaWNlOiBmdW5jdGlvbihpbmRleCwgcmVtb3ZlTnVtIC8qLCAuLi52YWx1ZXMqLykge1xuICAgICAgdmFyIG51bUFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgcmVtb3ZlTnVtID0gTWF0aC5tYXgocmVtb3ZlTnVtIHwgMCwgMCk7XG4gICAgICBpZiAobnVtQXJncyA9PT0gMCB8fCAobnVtQXJncyA9PT0gMiAmJiAhcmVtb3ZlTnVtKSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIC8vIElmIGluZGV4IGlzIG5lZ2F0aXZlLCBpdCBzaG91bGQgcmVzb2x2ZSByZWxhdGl2ZSB0byB0aGUgc2l6ZSBvZiB0aGVcbiAgICAgIC8vIGNvbGxlY3Rpb24uIEhvd2V2ZXIgc2l6ZSBtYXkgYmUgZXhwZW5zaXZlIHRvIGNvbXB1dGUgaWYgbm90IGNhY2hlZCwgc29cbiAgICAgIC8vIG9ubHkgY2FsbCBjb3VudCgpIGlmIHRoZSBudW1iZXIgaXMgaW4gZmFjdCBuZWdhdGl2ZS5cbiAgICAgIGluZGV4ID0gcmVzb2x2ZUJlZ2luKGluZGV4LCBpbmRleCA8IDAgPyB0aGlzLmNvdW50KCkgOiB0aGlzLnNpemUpO1xuICAgICAgdmFyIHNwbGljZWQgPSB0aGlzLnNsaWNlKDAsIGluZGV4KTtcbiAgICAgIHJldHVybiByZWlmeShcbiAgICAgICAgdGhpcyxcbiAgICAgICAgbnVtQXJncyA9PT0gMSA/XG4gICAgICAgICAgc3BsaWNlZCA6XG4gICAgICAgICAgc3BsaWNlZC5jb25jYXQoYXJyQ29weShhcmd1bWVudHMsIDIpLCB0aGlzLnNsaWNlKGluZGV4ICsgcmVtb3ZlTnVtKSlcbiAgICAgICk7XG4gICAgfSxcblxuXG4gICAgLy8gIyMjIE1vcmUgY29sbGVjdGlvbiBtZXRob2RzXG5cbiAgICBmaW5kTGFzdEluZGV4OiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIHZhciBlbnRyeSA9IHRoaXMuZmluZExhc3RFbnRyeShwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIGVudHJ5ID8gZW50cnlbMF0gOiAtMTtcbiAgICB9LFxuXG4gICAgZmlyc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0KDApO1xuICAgIH0sXG5cbiAgICBmbGF0dGVuOiBmdW5jdGlvbihkZXB0aCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIGZsYXR0ZW5GYWN0b3J5KHRoaXMsIGRlcHRoLCBmYWxzZSkpO1xuICAgIH0sXG5cbiAgICBnZXQ6IGZ1bmN0aW9uKGluZGV4LCBub3RTZXRWYWx1ZSkge1xuICAgICAgaW5kZXggPSB3cmFwSW5kZXgodGhpcywgaW5kZXgpO1xuICAgICAgcmV0dXJuIChpbmRleCA8IDAgfHwgKHRoaXMuc2l6ZSA9PT0gSW5maW5pdHkgfHxcbiAgICAgICAgICAodGhpcy5zaXplICE9PSB1bmRlZmluZWQgJiYgaW5kZXggPiB0aGlzLnNpemUpKSkgP1xuICAgICAgICBub3RTZXRWYWx1ZSA6XG4gICAgICAgIHRoaXMuZmluZChmdW5jdGlvbihfLCBrZXkpICB7cmV0dXJuIGtleSA9PT0gaW5kZXh9LCB1bmRlZmluZWQsIG5vdFNldFZhbHVlKTtcbiAgICB9LFxuXG4gICAgaGFzOiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgaW5kZXggPSB3cmFwSW5kZXgodGhpcywgaW5kZXgpO1xuICAgICAgcmV0dXJuIGluZGV4ID49IDAgJiYgKHRoaXMuc2l6ZSAhPT0gdW5kZWZpbmVkID9cbiAgICAgICAgdGhpcy5zaXplID09PSBJbmZpbml0eSB8fCBpbmRleCA8IHRoaXMuc2l6ZSA6XG4gICAgICAgIHRoaXMuaW5kZXhPZihpbmRleCkgIT09IC0xXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBpbnRlcnBvc2U6IGZ1bmN0aW9uKHNlcGFyYXRvcikge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIGludGVycG9zZUZhY3RvcnkodGhpcywgc2VwYXJhdG9yKSk7XG4gICAgfSxcblxuICAgIGludGVybGVhdmU6IGZ1bmN0aW9uKC8qLi4uaXRlcmFibGVzKi8pIHtcbiAgICAgIHZhciBpdGVyYWJsZXMgPSBbdGhpc10uY29uY2F0KGFyckNvcHkoYXJndW1lbnRzKSk7XG4gICAgICB2YXIgemlwcGVkID0gemlwV2l0aEZhY3RvcnkodGhpcy50b1NlcSgpLCBJbmRleGVkU2VxLm9mLCBpdGVyYWJsZXMpO1xuICAgICAgdmFyIGludGVybGVhdmVkID0gemlwcGVkLmZsYXR0ZW4odHJ1ZSk7XG4gICAgICBpZiAoemlwcGVkLnNpemUpIHtcbiAgICAgICAgaW50ZXJsZWF2ZWQuc2l6ZSA9IHppcHBlZC5zaXplICogaXRlcmFibGVzLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCBpbnRlcmxlYXZlZCk7XG4gICAgfSxcblxuICAgIGtleVNlcTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gUmFuZ2UoMCwgdGhpcy5zaXplKTtcbiAgICB9LFxuXG4gICAgbGFzdDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoLTEpO1xuICAgIH0sXG5cbiAgICBza2lwV2hpbGU6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIHNraXBXaGlsZUZhY3RvcnkodGhpcywgcHJlZGljYXRlLCBjb250ZXh0LCBmYWxzZSkpO1xuICAgIH0sXG5cbiAgICB6aXA6IGZ1bmN0aW9uKC8qLCAuLi5pdGVyYWJsZXMgKi8pIHtcbiAgICAgIHZhciBpdGVyYWJsZXMgPSBbdGhpc10uY29uY2F0KGFyckNvcHkoYXJndW1lbnRzKSk7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgemlwV2l0aEZhY3RvcnkodGhpcywgZGVmYXVsdFppcHBlciwgaXRlcmFibGVzKSk7XG4gICAgfSxcblxuICAgIHppcFdpdGg6IGZ1bmN0aW9uKHppcHBlci8qLCAuLi5pdGVyYWJsZXMgKi8pIHtcbiAgICAgIHZhciBpdGVyYWJsZXMgPSBhcnJDb3B5KGFyZ3VtZW50cyk7XG4gICAgICBpdGVyYWJsZXNbMF0gPSB0aGlzO1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIHppcFdpdGhGYWN0b3J5KHRoaXMsIHppcHBlciwgaXRlcmFibGVzKSk7XG4gICAgfVxuXG4gIH0pO1xuXG4gIEluZGV4ZWRJdGVyYWJsZS5wcm90b3R5cGVbSVNfSU5ERVhFRF9TRU5USU5FTF0gPSB0cnVlO1xuICBJbmRleGVkSXRlcmFibGUucHJvdG90eXBlW0lTX09SREVSRURfU0VOVElORUxdID0gdHJ1ZTtcblxuXG5cbiAgbWl4aW4oU2V0SXRlcmFibGUsIHtcblxuICAgIC8vICMjIyBFUzYgQ29sbGVjdGlvbiBtZXRob2RzIChFUzYgQXJyYXkgYW5kIE1hcClcblxuICAgIGdldDogZnVuY3Rpb24odmFsdWUsIG5vdFNldFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYXModmFsdWUpID8gdmFsdWUgOiBub3RTZXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgaW5jbHVkZXM6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYXModmFsdWUpO1xuICAgIH0sXG5cblxuICAgIC8vICMjIyBNb3JlIHNlcXVlbnRpYWwgbWV0aG9kc1xuXG4gICAga2V5U2VxOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlU2VxKCk7XG4gICAgfVxuXG4gIH0pO1xuXG4gIFNldEl0ZXJhYmxlLnByb3RvdHlwZS5oYXMgPSBJdGVyYWJsZVByb3RvdHlwZS5pbmNsdWRlcztcbiAgU2V0SXRlcmFibGUucHJvdG90eXBlLmNvbnRhaW5zID0gU2V0SXRlcmFibGUucHJvdG90eXBlLmluY2x1ZGVzO1xuXG5cbiAgLy8gTWl4aW4gc3ViY2xhc3Nlc1xuXG4gIG1peGluKEtleWVkU2VxLCBLZXllZEl0ZXJhYmxlLnByb3RvdHlwZSk7XG4gIG1peGluKEluZGV4ZWRTZXEsIEluZGV4ZWRJdGVyYWJsZS5wcm90b3R5cGUpO1xuICBtaXhpbihTZXRTZXEsIFNldEl0ZXJhYmxlLnByb3RvdHlwZSk7XG5cbiAgbWl4aW4oS2V5ZWRDb2xsZWN0aW9uLCBLZXllZEl0ZXJhYmxlLnByb3RvdHlwZSk7XG4gIG1peGluKEluZGV4ZWRDb2xsZWN0aW9uLCBJbmRleGVkSXRlcmFibGUucHJvdG90eXBlKTtcbiAgbWl4aW4oU2V0Q29sbGVjdGlvbiwgU2V0SXRlcmFibGUucHJvdG90eXBlKTtcblxuXG4gIC8vICNwcmFnbWEgSGVscGVyIGZ1bmN0aW9uc1xuXG4gIGZ1bmN0aW9uIGtleU1hcHBlcih2LCBrKSB7XG4gICAgcmV0dXJuIGs7XG4gIH1cblxuICBmdW5jdGlvbiBlbnRyeU1hcHBlcih2LCBrKSB7XG4gICAgcmV0dXJuIFtrLCB2XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdChwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gIXByZWRpY2F0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5lZyhwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gLXByZWRpY2F0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHF1b3RlU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiBTdHJpbmcodmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVmYXVsdFppcHBlcigpIHtcbiAgICByZXR1cm4gYXJyQ29weShhcmd1bWVudHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVmYXVsdE5lZ0NvbXBhcmF0b3IoYSwgYikge1xuICAgIHJldHVybiBhIDwgYiA/IDEgOiBhID4gYiA/IC0xIDogMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc2hJdGVyYWJsZShpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZS5zaXplID09PSBJbmZpbml0eSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHZhciBvcmRlcmVkID0gaXNPcmRlcmVkKGl0ZXJhYmxlKTtcbiAgICB2YXIga2V5ZWQgPSBpc0tleWVkKGl0ZXJhYmxlKTtcbiAgICB2YXIgaCA9IG9yZGVyZWQgPyAxIDogMDtcbiAgICB2YXIgc2l6ZSA9IGl0ZXJhYmxlLl9faXRlcmF0ZShcbiAgICAgIGtleWVkID9cbiAgICAgICAgb3JkZXJlZCA/XG4gICAgICAgICAgZnVuY3Rpb24odiwgaykgIHsgaCA9IDMxICogaCArIGhhc2hNZXJnZShoYXNoKHYpLCBoYXNoKGspKSB8IDA7IH0gOlxuICAgICAgICAgIGZ1bmN0aW9uKHYsIGspICB7IGggPSBoICsgaGFzaE1lcmdlKGhhc2godiksIGhhc2goaykpIHwgMDsgfSA6XG4gICAgICAgIG9yZGVyZWQgP1xuICAgICAgICAgIGZ1bmN0aW9uKHYgKSB7IGggPSAzMSAqIGggKyBoYXNoKHYpIHwgMDsgfSA6XG4gICAgICAgICAgZnVuY3Rpb24odiApIHsgaCA9IGggKyBoYXNoKHYpIHwgMDsgfVxuICAgICk7XG4gICAgcmV0dXJuIG11cm11ckhhc2hPZlNpemUoc2l6ZSwgaCk7XG4gIH1cblxuICBmdW5jdGlvbiBtdXJtdXJIYXNoT2ZTaXplKHNpemUsIGgpIHtcbiAgICBoID0gaW11bChoLCAweENDOUUyRDUxKTtcbiAgICBoID0gaW11bChoIDw8IDE1IHwgaCA+Pj4gLTE1LCAweDFCODczNTkzKTtcbiAgICBoID0gaW11bChoIDw8IDEzIHwgaCA+Pj4gLTEzLCA1KTtcbiAgICBoID0gKGggKyAweEU2NTQ2QjY0IHwgMCkgXiBzaXplO1xuICAgIGggPSBpbXVsKGggXiBoID4+PiAxNiwgMHg4NUVCQ0E2Qik7XG4gICAgaCA9IGltdWwoaCBeIGggPj4+IDEzLCAweEMyQjJBRTM1KTtcbiAgICBoID0gc21pKGggXiBoID4+PiAxNik7XG4gICAgcmV0dXJuIGg7XG4gIH1cblxuICBmdW5jdGlvbiBoYXNoTWVyZ2UoYSwgYikge1xuICAgIHJldHVybiBhIF4gYiArIDB4OUUzNzc5QjkgKyAoYSA8PCA2KSArIChhID4+IDIpIHwgMDsgLy8gaW50XG4gIH1cblxuICB2YXIgSW1tdXRhYmxlID0ge1xuXG4gICAgSXRlcmFibGU6IEl0ZXJhYmxlLFxuXG4gICAgU2VxOiBTZXEsXG4gICAgQ29sbGVjdGlvbjogQ29sbGVjdGlvbixcbiAgICBNYXA6IE1hcCxcbiAgICBPcmRlcmVkTWFwOiBPcmRlcmVkTWFwLFxuICAgIExpc3Q6IExpc3QsXG4gICAgU3RhY2s6IFN0YWNrLFxuICAgIFNldDogU2V0LFxuICAgIE9yZGVyZWRTZXQ6IE9yZGVyZWRTZXQsXG5cbiAgICBSZWNvcmQ6IFJlY29yZCxcbiAgICBSYW5nZTogUmFuZ2UsXG4gICAgUmVwZWF0OiBSZXBlYXQsXG5cbiAgICBpczogaXMsXG4gICAgZnJvbUpTOiBmcm9tSlNcblxuICB9O1xuXG4gIHJldHVybiBJbW11dGFibGU7XG5cbn0pKTsiLCJpbXBvcnQgeyBMaXN0LCBNYXAgfSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCB7XHJcbiAgVFpBQVIsXHJcbiAgVE9UVCxcclxuICBUWkFSUkEsXHJcbiAgUExBWUVSX09ORSxcclxuICBQTEFZRVJfVFdPLFxyXG4gIENPUk5FUl9DT09SRElOQVRFUyxcclxuICBFREdFX0NPT1JESU5BVEVTXHJcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG5pbXBvcnQgeyBjdXJyZW50VHVybiwgbnVtYmVyT2ZUdXJuc0ludG9HYW1lIH0gZnJvbSBcIi4vZ2FtZVN0YXRlXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0VmFsaWRDYXB0dXJlcyxcclxuICBnZXRWYWxpZFN0YWNrcyxcclxuICBnZXRJbnZlcnRlZFZhbGlkQ2FwdHVyZXNcclxufSBmcm9tIFwiLi9nYW1lQm9hcmRIZWxwZXJzXCI7XHJcblxyXG5jb25zdCBzY29yaW5nTWFwUmVjb3JkID0gTWFwKHtcclxuICBbUExBWUVSX09ORV06IE1hcCh7XHJcbiAgICBbVE9UVF06IE1hcCh7XHJcbiAgICAgIGNvdW50OiAwLFxyXG4gICAgICBzdGFja3NHcmVhdGVyVGhhbk9uZTogMCxcclxuICAgICAgbGFyZ2VzdFN0YWNrU2l6ZTogMCxcclxuICAgICAgc3RhY2tzT25FZGdlOiAwLFxyXG4gICAgICBzdGFja3NPbkNvcm5lcjogMCxcclxuICAgICAgY29vcmRpbmF0ZTogbnVsbFxyXG4gICAgfSksXHJcbiAgICBbVFpBUlJBXTogTWFwKHtcclxuICAgICAgY291bnQ6IDAsXHJcbiAgICAgIHN0YWNrc0dyZWF0ZXJUaGFuT25lOiAwLFxyXG4gICAgICBsYXJnZXN0U3RhY2tTaXplOiAwLFxyXG4gICAgICBzdGFja3NPbkVkZ2U6IDAsXHJcbiAgICAgIHN0YWNrc09uQ29ybmVyOiAwLFxyXG4gICAgICBjb29yZGluYXRlOiBudWxsXHJcbiAgICB9KSxcclxuICAgIFtUWkFBUl06IE1hcCh7XHJcbiAgICAgIGNvdW50OiAwLFxyXG4gICAgICBzdGFja3NHcmVhdGVyVGhhbk9uZTogMCxcclxuICAgICAgbGFyZ2VzdFN0YWNrU2l6ZTogMCxcclxuICAgICAgc3RhY2tzT25FZGdlOiAwLFxyXG4gICAgICBzdGFja3NPbkNvcm5lcjogMCxcclxuICAgICAgY29vcmRpbmF0ZTogbnVsbFxyXG4gICAgfSlcclxuICB9KSxcclxuICBbUExBWUVSX1RXT106IE1hcCh7XHJcbiAgICBbVE9UVF06IE1hcCh7XHJcbiAgICAgIGNvdW50OiAwLFxyXG4gICAgICBzdGFja3NHcmVhdGVyVGhhbk9uZTogMCxcclxuICAgICAgbGFyZ2VzdFN0YWNrU2l6ZTogMCxcclxuICAgICAgc3RhY2tzT25FZGdlOiAwLFxyXG4gICAgICBzdGFja3NPbkNvcm5lcjogMCxcclxuICAgICAgY29vcmRpbmF0ZTogbnVsbFxyXG4gICAgfSksXHJcbiAgICBbVFpBUlJBXTogTWFwKHtcclxuICAgICAgY291bnQ6IDAsXHJcbiAgICAgIHN0YWNrc0dyZWF0ZXJUaGFuT25lOiAwLFxyXG4gICAgICBsYXJnZXN0U3RhY2tTaXplOiAwLFxyXG4gICAgICBzdGFja3NPbkVkZ2U6IDAsXHJcbiAgICAgIHN0YWNrc09uQ29ybmVyOiAwLFxyXG4gICAgICBjb29yZGluYXRlOiBudWxsXHJcbiAgICB9KSxcclxuICAgIFtUWkFBUl06IE1hcCh7XHJcbiAgICAgIGNvdW50OiAwLFxyXG4gICAgICBzdGFja3NHcmVhdGVyVGhhbk9uZTogMCxcclxuICAgICAgbGFyZ2VzdFN0YWNrU2l6ZTogMCxcclxuICAgICAgc3RhY2tzT25FZGdlOiAwLFxyXG4gICAgICBzdGFja3NPbkNvcm5lcjogMCxcclxuICAgICAgY29vcmRpbmF0ZTogbnVsbFxyXG4gICAgfSlcclxuICB9KVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGdldFNjb3JlRm9ySGlnaGVzdFN0YWNrKGN1cnJlbnRTdGFjaywgc3RhY2tUb0JlYXQpIHtcclxuICBpZiAoY3VycmVudFN0YWNrID4gc3RhY2tUb0JlYXQpIHtcclxuICAgIHJldHVybiAyMDtcclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50U3RhY2sgPCBzdGFja1RvQmVhdCkge1xyXG4gICAgcmV0dXJuIC0yMDtcclxuICB9XHJcblxyXG4gIHJldHVybiAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTY29yZUZvckVkZ2VzQW5kQ29ybmVycyhlZGdlcywgY29ybmVycykge1xyXG4gIHJldHVybiBlZGdlcyAqIDUgKyBjb3JuZXJzICogMTA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRHYW1lU3RhdGVTY29yZShnYW1lU3RhdGUpIHtcclxuICBjb25zdCBzY29yaW5nTWFwID0gZ2FtZVN0YXRlLnJlZHVjZSgocGllY2VzQnlQbGF5ZXIsIHBpZWNlLCBjb29yZGluYXRlKSA9PiB7XHJcbiAgICBpZiAoIXBpZWNlKSB7XHJcbiAgICAgIHJldHVybiBwaWVjZXNCeVBsYXllcjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IG93bmVkQnksIHR5cGUsIHN0YWNrU2l6ZSB9ID0gcGllY2U7XHJcbiAgICByZXR1cm4gcGllY2VzQnlQbGF5ZXJcclxuICAgICAgLnVwZGF0ZUluKFtvd25lZEJ5LCB0eXBlLCBcImNvdW50XCJdLCBjb3VudCA9PiBjb3VudCArIDEpXHJcbiAgICAgIC51cGRhdGVJbihcclxuICAgICAgICBbb3duZWRCeSwgdHlwZSwgXCJzdGFja3NHcmVhdGVyVGhhbk9uZVwiXSxcclxuICAgICAgICBzdGFja3MgPT4gc3RhY2tzICsgTnVtYmVyKHN0YWNrU2l6ZSlcclxuICAgICAgKVxyXG4gICAgICAudXBkYXRlSW4oW293bmVkQnksIHR5cGUsIFwibGFyZ2VzdFN0YWNrU2l6ZVwiXSwgbGFyZ2VzdFN0YWNrU2l6ZSA9PlxyXG4gICAgICAgIE1hdGgubWF4KGxhcmdlc3RTdGFja1NpemUsIE51bWJlcihzdGFja1NpemUpKVxyXG4gICAgICApXHJcbiAgICAgIC51cGRhdGVJbihbb3duZWRCeSwgdHlwZSwgXCJzdGFja3NPbkVkZ2VcIl0sIHN0YWNrc09uRWRnZSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YWNrU2l6ZSA+IDEgJiYgRURHRV9DT09SRElOQVRFUy5pbmNsdWRlcyhjb29yZGluYXRlKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHN0YWNrc09uRWRnZSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGFja3NPbkVkZ2U7XHJcbiAgICAgIH0pXHJcbiAgICAgIC51cGRhdGVJbihbb3duZWRCeSwgdHlwZSwgXCJzdGFja3NPbkNvcm5lclwiXSwgc3RhY2tzT25Db3JuZXIgPT4ge1xyXG4gICAgICAgIGlmIChzdGFja1NpemUgPiAxICYmIENPUk5FUl9DT09SRElOQVRFUy5pbmNsdWRlcyhjb29yZGluYXRlKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHN0YWNrc09uQ29ybmVyICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YWNrc09uQ29ybmVyO1xyXG4gICAgICB9KVxyXG4gICAgICAuc2V0SW4oW293bmVkQnksIHR5cGUsIFwiY29vcmRpbmF0ZVwiXSwgY29vcmRpbmF0ZSk7XHJcbiAgfSwgc2NvcmluZ01hcFJlY29yZCk7XHJcblxyXG4gIGxldCBzY29yZSA9IDA7XHJcblxyXG4gIHNjb3JpbmdNYXAuZ2V0KFBMQVlFUl9PTkUpLmZvckVhY2goKGRhdGEsIHBpZWNlVHlwZSkgPT4ge1xyXG4gICAgc2NvcmUgPVxyXG4gICAgICBzY29yZSAtXHJcbiAgICAgIGdldFNjb3JlRm9yU3RhY2tzKGRhdGEuZ2V0KFwiY291bnRcIiksIGRhdGEuZ2V0KFwic3RhY2tzR3JlYXRlclRoYW5PbmVcIikpIC1cclxuICAgICAgZ2V0U2NvcmVGb3JIaWdoZXN0U3RhY2soXHJcbiAgICAgICAgZGF0YS5nZXQoXCJsYXJnZXN0U3RhY2tTaXplXCIpLFxyXG4gICAgICAgIHNjb3JpbmdNYXAuZ2V0SW4oW1BMQVlFUl9UV08sIHBpZWNlVHlwZSwgXCJsYXJnZXN0U3RhY2tTaXplXCJdKVxyXG4gICAgICApICtcclxuICAgICAgZ2V0U2NvcmVGb3JFZGdlc0FuZENvcm5lcnMoXHJcbiAgICAgICAgZGF0YS5nZXQoXCJzdGFja3NPbkVkZ2VcIiksXHJcbiAgICAgICAgZGF0YS5nZXQoXCJzdGFja3NPbkNvcm5lclwiKVxyXG4gICAgICApO1xyXG4gIH0pO1xyXG5cclxuICBzY29yaW5nTWFwLmdldChQTEFZRVJfVFdPKS5mb3JFYWNoKChkYXRhLCBwaWVjZVR5cGUpID0+IHtcclxuICAgIHNjb3JlID1cclxuICAgICAgc2NvcmUgK1xyXG4gICAgICBnZXRTY29yZUZvclN0YWNrcyhkYXRhLmdldChcImNvdW50XCIpLCBkYXRhLmdldChcInN0YWNrc0dyZWF0ZXJUaGFuT25lXCIpKSArXHJcbiAgICAgIGdldFNjb3JlRm9ySGlnaGVzdFN0YWNrKFxyXG4gICAgICAgIGRhdGEuZ2V0KFwibGFyZ2VzdFN0YWNrU2l6ZVwiKSxcclxuICAgICAgICBzY29yaW5nTWFwLmdldEluKFtQTEFZRVJfT05FLCBwaWVjZVR5cGUsIFwibGFyZ2VzdFN0YWNrU2l6ZVwiXSlcclxuICAgICAgKSAtXHJcbiAgICAgIGdldFNjb3JlRm9yRWRnZXNBbmRDb3JuZXJzKFxyXG4gICAgICAgIGRhdGEuZ2V0KFwic3RhY2tzT25FZGdlXCIpLFxyXG4gICAgICAgIGRhdGEuZ2V0KFwic3RhY2tzT25Db3JuZXJcIilcclxuICAgICAgKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHNjb3JlO1xyXG59XHJcblxyXG4vLyB3ZSB2YWx1ZSBzdGFja3MgZGVwZW5kaW5nIG9uIGhvdyBtYW55IG9mIHRoYXQgdHlwZSBhcmUgb24gdGhlIGJvYXJkXHJcbmZ1bmN0aW9uIGdldFNjb3JlRm9yU3RhY2tzKG51bWJlck9mUGllY2VzLCBzdGFja1NpemUpIHtcclxuICBjb25zdCBNVUxUSVBMSUVSID0gMTU7XHJcblxyXG4gIHJldHVybiAoTVVMVElQTElFUiAtIG51bWJlck9mUGllY2VzKSAqIHN0YWNrU2l6ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1pbmltYXgoXHJcbiAgZ2FtZVN0YXRlLFxyXG4gIHR1cm4sXHJcbiAgZGVwdGgsXHJcbiAgYWxwaGEgPSAtSW5maW5pdHksXHJcbiAgYmV0YSA9IEluZmluaXR5XHJcbikge1xyXG4gIGNvbnN0IHdpbm5lciA9IGdldFdpbm5lcihnYW1lU3RhdGUpO1xyXG4gIGlmICh3aW5uZXIgPT09IFBMQVlFUl9PTkUpIHtcclxuICAgIHJldHVybiBbLUluZmluaXR5XTtcclxuICB9XHJcbiAgaWYgKHdpbm5lciA9PT0gUExBWUVSX1RXTykge1xyXG4gICAgcmV0dXJuIFtJbmZpbml0eV07XHJcbiAgfVxyXG5cclxuICBpZiAoZGVwdGggPT09IDApIHtcclxuICAgIHJldHVybiBbZ2V0R2FtZVN0YXRlU2NvcmUoZ2FtZVN0YXRlKV07XHJcbiAgfVxyXG5cclxuICAvLyBtYXhpbWl6aW5nIHBsYXllclxyXG4gIGlmICh0dXJuID09PSBQTEFZRVJfVFdPKSB7XHJcbiAgICBsZXQgYmVzdFZhbHVlID0gLUluZmluaXR5O1xyXG4gICAgbGV0IG1vdmVTZXEgPSBudWxsO1xyXG5cclxuICAgIC8vIGNob29zZSBtYXggc2NvcmUgYWZ0ZXIgcGxheWVyIG9uZSBtYWtlcyBoaXMgbW92ZVxyXG4gICAgY29uc3QgZ2FtZVN0YXRlc1RvQW5hbHl6ZSA9IGdldEdhbWVTdGF0ZXNUb0FuYWx5emUoZ2FtZVN0YXRlLCBQTEFZRVJfVFdPKTtcclxuICAgIGdhbWVTdGF0ZXNUb0FuYWx5emUuZm9yRWFjaCgobmV4dEdhbWVTdGF0ZSwgbmV4dE1vdmVTZXEpID0+IHtcclxuICAgICAgY29uc3QgW21heWJlQmV0dGVyVmFsdWVdID0gbWluaW1heChcclxuICAgICAgICBuZXh0R2FtZVN0YXRlLFxyXG4gICAgICAgIFBMQVlFUl9PTkUsXHJcbiAgICAgICAgZGVwdGggLSAxLFxyXG4gICAgICAgIGFscGhhLFxyXG4gICAgICAgIGJldGFcclxuICAgICAgKTtcclxuICAgICAgaWYgKG1heWJlQmV0dGVyVmFsdWUgPj0gYmVzdFZhbHVlKSB7XHJcbiAgICAgICAgYmVzdFZhbHVlID0gbWF5YmVCZXR0ZXJWYWx1ZTtcclxuICAgICAgICBtb3ZlU2VxID0gbmV4dE1vdmVTZXE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFscGhhID0gTWF0aC5tYXgoYmVzdFZhbHVlLCBhbHBoYSk7XHJcblxyXG4gICAgICBpZiAoYWxwaGEgPj0gYmV0YSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIFtiZXN0VmFsdWUsIG1vdmVTZXFdO1xyXG4gIH1cclxuXHJcbiAgLy8gbWluaW1pemluZyBwbGF5ZXJcclxuICBpZiAodHVybiA9PT0gUExBWUVSX09ORSkge1xyXG4gICAgbGV0IGJlc3RWYWx1ZSA9IEluZmluaXR5O1xyXG4gICAgbGV0IG1vdmVTZXEgPSBudWxsO1xyXG4gICAgLy8gY2hvb3NlIGxvd2VzdCBzY29yZSBhZnRlciBwbGF5ZXIgdHdvIG1ha2VzIG1vdmVcclxuICAgIGNvbnN0IGdhbWVTdGF0ZXNUb0FuYWx5emUgPSBnZXRHYW1lU3RhdGVzVG9BbmFseXplKGdhbWVTdGF0ZSwgUExBWUVSX09ORSk7XHJcblxyXG4gICAgZ2FtZVN0YXRlc1RvQW5hbHl6ZS5mb3JFYWNoKChuZXh0R2FtZVN0YXRlLCBuZXh0TW92ZVNlcSkgPT4ge1xyXG4gICAgICBjb25zdCBbbWF5YmVXb3JzZVZhbHVlXSA9IG1pbmltYXgoXHJcbiAgICAgICAgbmV4dEdhbWVTdGF0ZSxcclxuICAgICAgICBQTEFZRVJfVFdPLFxyXG4gICAgICAgIGRlcHRoIC0gMSxcclxuICAgICAgICBhbHBoYSxcclxuICAgICAgICBiZXRhXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAobWF5YmVXb3JzZVZhbHVlIDw9IGJlc3RWYWx1ZSkge1xyXG4gICAgICAgIGJlc3RWYWx1ZSA9IG1heWJlV29yc2VWYWx1ZTtcclxuICAgICAgICBtb3ZlU2VxID0gbmV4dE1vdmVTZXE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJldGEgPSBNYXRoLm1pbihiZXRhLCBiZXN0VmFsdWUpO1xyXG5cclxuICAgICAgaWYgKGFscGhhID49IGJldGEpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBbYmVzdFZhbHVlLCBtb3ZlU2VxXTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBpZWNlcyhnYW1lU3RhdGUpIHtcclxuICByZXR1cm4gZ2FtZVN0YXRlLnJlZHVjZShcclxuICAgIChwaWVjZXNCeVBsYXllciwgcGllY2UpID0+IHtcclxuICAgICAgaWYgKCFwaWVjZSkge1xyXG4gICAgICAgIHJldHVybiBwaWVjZXNCeVBsYXllcjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB7IG93bmVkQnksIHR5cGUgfSA9IHBpZWNlO1xyXG4gICAgICByZXR1cm4gcGllY2VzQnlQbGF5ZXIudXBkYXRlSW4oW293bmVkQnksIHR5cGVdLCBwaWVjZXMgPT5cclxuICAgICAgICBwaWVjZXMucHVzaChwaWVjZSlcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBNYXAoe1xyXG4gICAgICBbUExBWUVSX09ORV06IE1hcCh7XHJcbiAgICAgICAgW1RPVFRdOiBMaXN0KCksXHJcbiAgICAgICAgW1RaQVJSQV06IExpc3QoKSxcclxuICAgICAgICBbVFpBQVJdOiBMaXN0KClcclxuICAgICAgfSksXHJcbiAgICAgIFtQTEFZRVJfVFdPXTogTWFwKHtcclxuICAgICAgICBbVE9UVF06IExpc3QoKSxcclxuICAgICAgICBbVFpBUlJBXTogTGlzdCgpLFxyXG4gICAgICAgIFtUWkFBUl06IExpc3QoKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2lubmVyKGdhbWVTdGF0ZSkge1xyXG4gIGNvbnN0IHBpZWNlQ291bnRzQnlQbGF5ZXIgPSBnZXRQaWVjZXMoZ2FtZVN0YXRlKTtcclxuXHJcbiAgY29uc3QgcGxheWVyT25lTG9zdCA9XHJcbiAgICAhcGllY2VDb3VudHNCeVBsYXllci5nZXRJbihbUExBWUVSX09ORSwgVE9UVF0pLnNpemUgfHxcclxuICAgICFwaWVjZUNvdW50c0J5UGxheWVyLmdldEluKFtQTEFZRVJfT05FLCBUWkFSUkFdKS5zaXplIHx8XHJcbiAgICAhcGllY2VDb3VudHNCeVBsYXllci5nZXRJbihbUExBWUVSX09ORSwgVFpBQVJdKS5zaXplO1xyXG5cclxuICBjb25zdCBwbGF5ZXJUd29Mb3N0ID1cclxuICAgICFwaWVjZUNvdW50c0J5UGxheWVyLmdldEluKFtQTEFZRVJfVFdPLCBUT1RUXSkuc2l6ZSB8fFxyXG4gICAgIXBpZWNlQ291bnRzQnlQbGF5ZXIuZ2V0SW4oW1BMQVlFUl9UV08sIFRaQVJSQV0pLnNpemUgfHxcclxuICAgICFwaWVjZUNvdW50c0J5UGxheWVyLmdldEluKFtQTEFZRVJfVFdPLCBUWkFBUl0pLnNpemU7XHJcblxyXG4gIGlmIChwbGF5ZXJPbmVMb3N0KSB7XHJcbiAgICByZXR1cm4gUExBWUVSX1RXTztcclxuICB9XHJcbiAgaWYgKHBsYXllclR3b0xvc3QpIHtcclxuICAgIHJldHVybiBQTEFZRVJfT05FO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcG9zc2libGVDYXB0dXJlcyA9IGdldEFsbFBsYXllclBpZWNlQ29vcmRpbmF0ZXMoXHJcbiAgICBnYW1lU3RhdGUsXHJcbiAgICBjdXJyZW50VHVyblxyXG4gICkubWFwKGZyb21Db29yZGluYXRlID0+IHtcclxuICAgIHJldHVybiBnZXRWYWxpZENhcHR1cmVzKGZyb21Db29yZGluYXRlLCBnYW1lU3RhdGUpO1xyXG4gIH0pO1xyXG5cclxuICBpZiAoIXBvc3NpYmxlQ2FwdHVyZXMuZmluZChwb3NzaWJsZUNhcHR1cmUgPT4gcG9zc2libGVDYXB0dXJlLnNpemUpKSB7XHJcbiAgICByZXR1cm4gY3VycmVudFR1cm4gPT09IFBMQVlFUl9PTkUgPyBQTEFZRVJfVFdPIDogUExBWUVSX09ORTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRHYW1lU3RhdGVzVG9BbmFseXplKGdhbWVTdGF0ZSwgdHVybikge1xyXG4gIGNvbnN0IEVBUkxZX0dBTUUgPSBudW1iZXJPZlR1cm5zSW50b0dhbWUgPCAxMDtcclxuICBsZXQgYWxsUG9zc2libGVTdGF0ZXNBZnRlclR1cm4gPSBMaXN0KCk7XHJcblxyXG4gIGlmICghRUFSTFlfR0FNRSkge1xyXG4gICAgYWxsUG9zc2libGVTdGF0ZXNBZnRlclR1cm4gPSBnZXRQb3NzaWJsZU1vdmVTZXF1ZW5jZXMoZ2FtZVN0YXRlLCB0dXJuKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYWxsUG9zc2libGVTdGF0ZXNBZnRlclR1cm4gPSBnZXRFYXJseUdhbWVQb3NzaWJsZU1vdmVTZXF1ZW5jZXMoXHJcbiAgICAgIGdhbWVTdGF0ZSxcclxuICAgICAgVFpBQVIsXHJcbiAgICAgIHR1cm5cclxuICAgIClcclxuICAgICAgLmNvbmNhdChnZXRFYXJseUdhbWVQb3NzaWJsZU1vdmVTZXF1ZW5jZXMoZ2FtZVN0YXRlLCBUWkFSUkEsIHR1cm4pKVxyXG4gICAgICAuY29uY2F0KGdldEVhcmx5R2FtZVBvc3NpYmxlTW92ZVNlcXVlbmNlcyhnYW1lU3RhdGUsIFRPVFQsIHR1cm4pKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhbGxQb3NzaWJsZVN0YXRlc0FmdGVyVHVybjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFBsYXllclBpZWNlQ29vcmRpbmF0ZXMoZ2FtZVN0YXRlLCBwbGF5ZXIpIHtcclxuICByZXR1cm4gZ2FtZVN0YXRlLmZpbHRlcihwaWVjZSA9PiBwaWVjZSAmJiBwaWVjZS5vd25lZEJ5ID09PSBwbGF5ZXIpLmtleVNlcSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUGxheWVyUGllY2VDb29yZGluYXRlc0J5VHlwZShnYW1lU3RhdGUsIHBsYXllciwgdHlwZSkge1xyXG4gIHJldHVybiBnYW1lU3RhdGVcclxuICAgIC5maWx0ZXIocGllY2UgPT4gcGllY2UgJiYgcGllY2Uub3duZWRCeSA9PT0gcGxheWVyICYmIHBpZWNlLnR5cGUgPT09IHR5cGUpXHJcbiAgICAua2V5U2VxKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVhcmx5R2FtZVBvc3NpYmxlTW92ZVNlcXVlbmNlcyhnYW1lU3RhdGUsIFBJRUNFX1RZUEUsIHR1cm4pIHtcclxuICBjb25zdCBwbGF5ZXJQaWVjZXNUb0NhcHR1cmUgPSB0dXJuID09PSBQTEFZRVJfT05FID8gUExBWUVSX1RXTyA6IFBMQVlFUl9PTkU7XHJcbiAgbGV0IHRyeVNlY29uZENhcHR1cmUgPSBmYWxzZTtcclxuXHJcbiAgLy8gZ2V0IG9wcG9uZW50cyBtb3N0IHZhbHVhYmxlIHBpZWNlcyB0byBjYXB0dXJlLlxyXG4gIGNvbnN0IGFsbE9wcG9uZW50UGxheWVyUGllY2VzID0gZ2V0QWxsUGxheWVyUGllY2VDb29yZGluYXRlc0J5VHlwZShcclxuICAgIGdhbWVTdGF0ZSxcclxuICAgIHBsYXllclBpZWNlc1RvQ2FwdHVyZSxcclxuICAgIFBJRUNFX1RZUEVcclxuICApO1xyXG5cclxuICBpZiAoYWxsT3Bwb25lbnRQbGF5ZXJQaWVjZXMuc2l6ZSA8PSAyKSB7XHJcbiAgICB0cnlTZWNvbmRDYXB0dXJlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhbGxPcHBvbmVudFBsYXllclBpZWNlcy5yZWR1Y2UoXHJcbiAgICAoYWxsR2FtZVN0YXRlc0FmdGVyTW92ZVNlcSwgdG9Db29yZGluYXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbGlkQ2FwdHVyZXMgPSBnZXRJbnZlcnRlZFZhbGlkQ2FwdHVyZXModG9Db29yZGluYXRlLCBnYW1lU3RhdGUpO1xyXG5cclxuICAgICAgLy8gRm9yIGV2ZXJ5IHBpZWNlLCBnZXQgYWxsIHBvc3NpYmxlIGNhcHR1cmVzXHJcbiAgICAgIC8vIGZvciBlYWNoIGFuZCBwdXQgdGhlIHJlc3VsdGluZyBnYW1lIHN0YXRlIGludG8gYSBsaXN0LlxyXG4gICAgICBjb25zdCBhbGxDYXB0dXJlU3RhdGVzID0gdmFsaWRDYXB0dXJlcy5yZWR1Y2UoXHJcbiAgICAgICAgKHN0YXRlc0FmdGVyQ2FwdHVyZSwgZnJvbUNvb3JkaW5hdGUpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGZyb21QaWVjZSA9IGdhbWVTdGF0ZS5nZXQoZnJvbUNvb3JkaW5hdGUpO1xyXG4gICAgICAgICAgY29uc3QgbmV4dEdhbWVTdGF0ZSA9IGdhbWVTdGF0ZVxyXG4gICAgICAgICAgICAuc2V0KGZyb21Db29yZGluYXRlLCBudWxsKVxyXG4gICAgICAgICAgICAuc2V0KHRvQ29vcmRpbmF0ZSwgZnJvbVBpZWNlKTtcclxuICAgICAgICAgIHJldHVybiBzdGF0ZXNBZnRlckNhcHR1cmUuc2V0KFxyXG4gICAgICAgICAgICBgJHtmcm9tQ29vcmRpbmF0ZX0tPiR7dG9Db29yZGluYXRlfWAsXHJcbiAgICAgICAgICAgIG5leHRHYW1lU3RhdGVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBNYXAoKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gRm9yIGV2ZXJ5IGdhbWUgc3RhdGUgcmVzdWx0aW5nIGZyb20gdGhlIGFib3ZlIHByb2Nlc3MsXHJcbiAgICAgIC8vIGdldCBhbGwgcGxheWVyIHBpZWNlcyBhbmQgcmV0dXJuIGFsbCBnYW1lIHN0YXRlc1xyXG4gICAgICAvLyBmb3IgZXZlcnkgdmFsaWQgc3RhY2sgeW91IGNhbiBtYWtlXHJcbiAgICAgIGFsbENhcHR1cmVTdGF0ZXMuZm9yRWFjaCgoc3RhdGVBZnRlckNhcHR1cmUsIGZyb21Ub0tleSkgPT4ge1xyXG4gICAgICAgIGlmICh0cnlTZWNvbmRDYXB0dXJlKSB7XHJcbiAgICAgICAgICBjb25zdCBhbGxPcHBvbmVudFBsYXllclBpZWNlcyA9IGdldEFsbFBsYXllclBpZWNlQ29vcmRpbmF0ZXNCeVR5cGUoXHJcbiAgICAgICAgICAgIHN0YXRlQWZ0ZXJDYXB0dXJlLFxyXG4gICAgICAgICAgICBwbGF5ZXJQaWVjZXNUb0NhcHR1cmUsXHJcbiAgICAgICAgICAgIFBJRUNFX1RZUEVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBhbGxPcHBvbmVudFBsYXllclBpZWNlcy5mb3JFYWNoKHRvQ29vcmRpbmF0ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkQ2FwdHVyZXMgPSBnZXRJbnZlcnRlZFZhbGlkQ2FwdHVyZXMoXHJcbiAgICAgICAgICAgICAgdG9Db29yZGluYXRlLFxyXG4gICAgICAgICAgICAgIHN0YXRlQWZ0ZXJDYXB0dXJlXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB2YWxpZENhcHR1cmVzLmZvckVhY2goZnJvbUNvb3JkaW5hdGUgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZyb21QaWVjZSA9IHN0YXRlQWZ0ZXJDYXB0dXJlLmdldChmcm9tQ29vcmRpbmF0ZSk7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2VxdWVuY2VLZXkgPSBgJHtmcm9tVG9LZXl9PT4ke2Zyb21Db29yZGluYXRlfS0+JHt0b0Nvb3JkaW5hdGV9YDtcclxuICAgICAgICAgICAgICBjb25zdCBnYW1lU3RhdGVBZnRlclNlY29uZENhcHR1cmUgPSBzdGF0ZUFmdGVyQ2FwdHVyZVxyXG4gICAgICAgICAgICAgICAgLnNldChmcm9tQ29vcmRpbmF0ZSwgbnVsbClcclxuICAgICAgICAgICAgICAgIC5zZXQodG9Db29yZGluYXRlLCBmcm9tUGllY2UpO1xyXG4gICAgICAgICAgICAgIGFsbEdhbWVTdGF0ZXNBZnRlck1vdmVTZXEgPSBhbGxHYW1lU3RhdGVzQWZ0ZXJNb3ZlU2VxLnNldChcclxuICAgICAgICAgICAgICAgIHNlcXVlbmNlS2V5LFxyXG4gICAgICAgICAgICAgICAgZ2FtZVN0YXRlQWZ0ZXJTZWNvbmRDYXB0dXJlXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhbGxQbGF5ZXJQaWVjZXNBZnRlckNhcHR1cmUgPSBnZXRBbGxQbGF5ZXJQaWVjZUNvb3JkaW5hdGVzQnlUeXBlKFxyXG4gICAgICAgICAgc3RhdGVBZnRlckNhcHR1cmUsXHJcbiAgICAgICAgICB0dXJuLFxyXG4gICAgICAgICAgVFpBQVJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoIWFsbFBsYXllclBpZWNlc0FmdGVyQ2FwdHVyZS5zaXplKSB7XHJcbiAgICAgICAgICBhbGxQbGF5ZXJQaWVjZXNBZnRlckNhcHR1cmUgPSBnZXRBbGxQbGF5ZXJQaWVjZUNvb3JkaW5hdGVzQnlUeXBlKFxyXG4gICAgICAgICAgICBzdGF0ZUFmdGVyQ2FwdHVyZSxcclxuICAgICAgICAgICAgdHVybixcclxuICAgICAgICAgICAgVFpBUlJBXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFsbFBsYXllclBpZWNlc0FmdGVyQ2FwdHVyZS5zaXplKSB7XHJcbiAgICAgICAgICBhbGxQbGF5ZXJQaWVjZXNBZnRlckNhcHR1cmUgPSBnZXRBbGxQbGF5ZXJQaWVjZUNvb3JkaW5hdGVzQnlUeXBlKFxyXG4gICAgICAgICAgICBzdGF0ZUFmdGVyQ2FwdHVyZSxcclxuICAgICAgICAgICAgdHVybixcclxuICAgICAgICAgICAgVE9UVFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhbGxQbGF5ZXJQaWVjZXNBZnRlckNhcHR1cmUuc2l6ZSkge1xyXG4gICAgICAgICAgYWxlcnQoXCJUaGlzIHNob3VsZG50IGJlIHBvc3NpYmxlLCBsZXQgbWUga25vdyBpZiB5b3Ugc2VlIHRoaXMuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWxsUGxheWVyUGllY2VzQWZ0ZXJDYXB0dXJlLmZvckVhY2goXHJcbiAgICAgICAgICBwbGF5ZXJQaWVjZUNvb3JkaW5hdGVBZnRlckNhcHR1cmUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWxpZFN0YWNrcyA9IGdldFZhbGlkU3RhY2tzKFxyXG4gICAgICAgICAgICAgIHBsYXllclBpZWNlQ29vcmRpbmF0ZUFmdGVyQ2FwdHVyZSxcclxuICAgICAgICAgICAgICBzdGF0ZUFmdGVyQ2FwdHVyZVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZnJvbVBpZWNlID0gc3RhdGVBZnRlckNhcHR1cmUuZ2V0KFxyXG4gICAgICAgICAgICAgIHBsYXllclBpZWNlQ29vcmRpbmF0ZUFmdGVyQ2FwdHVyZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YWxpZFN0YWNrcy5mb3JFYWNoKHRvQ29vcmRpbmF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgdG9QaWVjZSA9IHN0YXRlQWZ0ZXJDYXB0dXJlLmdldCh0b0Nvb3JkaW5hdGUpO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBnYW1lU3RhdGVBZnRlck1vdmVTZXEgPSBzdGF0ZUFmdGVyQ2FwdHVyZVxyXG4gICAgICAgICAgICAgICAgLnNldChwbGF5ZXJQaWVjZUNvb3JkaW5hdGVBZnRlckNhcHR1cmUsIG51bGwpXHJcbiAgICAgICAgICAgICAgICAuc2V0KHRvQ29vcmRpbmF0ZSwgZnJvbVBpZWNlKVxyXG4gICAgICAgICAgICAgICAgLnNldEluKFxyXG4gICAgICAgICAgICAgICAgICBbdG9Db29yZGluYXRlLCBcInN0YWNrU2l6ZVwiXSxcclxuICAgICAgICAgICAgICAgICAgZnJvbVBpZWNlLnN0YWNrU2l6ZSArIHRvUGllY2Uuc3RhY2tTaXplXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBzZXF1ZW5jZUtleSA9IGAke2Zyb21Ub0tleX09PiR7cGxheWVyUGllY2VDb29yZGluYXRlQWZ0ZXJDYXB0dXJlfS0+JHt0b0Nvb3JkaW5hdGV9YDtcclxuXHJcbiAgICAgICAgICAgICAgYWxsR2FtZVN0YXRlc0FmdGVyTW92ZVNlcSA9IGFsbEdhbWVTdGF0ZXNBZnRlck1vdmVTZXEuc2V0KFxyXG4gICAgICAgICAgICAgICAgc2VxdWVuY2VLZXksXHJcbiAgICAgICAgICAgICAgICBnYW1lU3RhdGVBZnRlck1vdmVTZXFcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBhbGxHYW1lU3RhdGVzQWZ0ZXJNb3ZlU2VxO1xyXG4gICAgfSxcclxuICAgIE1hcCgpXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3NpYmxlTW92ZVNlcXVlbmNlcyhnYW1lU3RhdGUsIHR1cm4pIHtcclxuICBjb25zdCBhbGxQbGF5ZXJQaWVjZXMgPSBnZXRBbGxQbGF5ZXJQaWVjZUNvb3JkaW5hdGVzKGdhbWVTdGF0ZSwgdHVybik7XHJcblxyXG4gIHJldHVybiBhbGxQbGF5ZXJQaWVjZXMucmVkdWNlKChhbGxHYW1lU3RhdGVzQWZ0ZXJNb3ZlU2VxLCBmcm9tQ29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsaWRDYXB0dXJlcyA9IGdldFZhbGlkQ2FwdHVyZXMoZnJvbUNvb3JkaW5hdGUsIGdhbWVTdGF0ZSk7XHJcblxyXG4gICAgLy8gRm9yIGV2ZXJ5IHBpZWNlLCBnZXQgYWxsIHBvc3NpYmxlIGNhcHR1cmVzXHJcbiAgICAvLyBmb3IgZWFjaCBhbmQgcHV0IHRoZSByZXN1bHRpbmcgZ2FtZSBzdGF0ZSBpbnRvIGEgbGlzdC5cclxuICAgIGNvbnN0IGFsbENhcHR1cmVTdGF0ZXMgPSB2YWxpZENhcHR1cmVzLnJlZHVjZShcclxuICAgICAgKHN0YXRlc0FmdGVyQ2FwdHVyZSwgdG9Db29yZGluYXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZnJvbVBpZWNlID0gZ2FtZVN0YXRlLmdldChmcm9tQ29vcmRpbmF0ZSk7XHJcbiAgICAgICAgY29uc3QgbmV4dEdhbWVTdGF0ZSA9IGdhbWVTdGF0ZVxyXG4gICAgICAgICAgLnNldChmcm9tQ29vcmRpbmF0ZSwgbnVsbClcclxuICAgICAgICAgIC5zZXQodG9Db29yZGluYXRlLCBmcm9tUGllY2UpO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZXNBZnRlckNhcHR1cmUuc2V0KFxyXG4gICAgICAgICAgYCR7ZnJvbUNvb3JkaW5hdGV9LT4ke3RvQ29vcmRpbmF0ZX1gLFxyXG4gICAgICAgICAgbmV4dEdhbWVTdGF0ZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICAgIE1hcCgpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIEZvciBldmVyeSBnYW1lIHN0YXRlIHJlc3VsdGluZyBmcm9tIHRoZSBhYm92ZSBwcm9jZXNzLFxyXG4gICAgLy8gZ2V0IGFsbCBwbGF5ZXIgcGllY2VzIGFuZCByZXR1cm4gYWxsIGdhbWUgc3RhdGVzXHJcbiAgICAvLyBmb3IgZXZlcnkgdmFsaWQgc3RhY2sgeW91IGNhbiBtYWtlXHJcbiAgICBhbGxDYXB0dXJlU3RhdGVzLmZvckVhY2goKHN0YXRlQWZ0ZXJDYXB0dXJlLCBmcm9tVG9LZXkpID0+IHtcclxuICAgICAgY29uc3QgYWxsUGxheWVyUGllY2VzQWZ0ZXJDYXB0dXJlID0gZ2V0QWxsUGxheWVyUGllY2VDb29yZGluYXRlcyhcclxuICAgICAgICBzdGF0ZUFmdGVyQ2FwdHVyZSxcclxuICAgICAgICB0dXJuXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBhbGxQbGF5ZXJQaWVjZXNBZnRlckNhcHR1cmUuZm9yRWFjaChwbGF5ZXJQaWVjZUNvb3JkaW5hdGVBZnRlckNhcHR1cmUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkU3RhY2tzID0gZ2V0VmFsaWRTdGFja3MoXHJcbiAgICAgICAgICBwbGF5ZXJQaWVjZUNvb3JkaW5hdGVBZnRlckNhcHR1cmUsXHJcbiAgICAgICAgICBzdGF0ZUFmdGVyQ2FwdHVyZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZyb21QaWVjZSA9IHN0YXRlQWZ0ZXJDYXB0dXJlLmdldChcclxuICAgICAgICAgIHBsYXllclBpZWNlQ29vcmRpbmF0ZUFmdGVyQ2FwdHVyZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICh2YWxpZFN0YWNrcyAmJiB2YWxpZFN0YWNrcy5zaXplKSB7XHJcbiAgICAgICAgICB2YWxpZFN0YWNrcy5mb3JFYWNoKHRvQ29vcmRpbmF0ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvUGllY2UgPSBzdGF0ZUFmdGVyQ2FwdHVyZS5nZXQodG9Db29yZGluYXRlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGdhbWVTdGF0ZUFmdGVyTW92ZVNlcSA9IHN0YXRlQWZ0ZXJDYXB0dXJlXHJcbiAgICAgICAgICAgICAgLnNldChwbGF5ZXJQaWVjZUNvb3JkaW5hdGVBZnRlckNhcHR1cmUsIG51bGwpXHJcbiAgICAgICAgICAgICAgLnNldCh0b0Nvb3JkaW5hdGUsIGZyb21QaWVjZSlcclxuICAgICAgICAgICAgICAuc2V0SW4oXHJcbiAgICAgICAgICAgICAgICBbdG9Db29yZGluYXRlLCBcInN0YWNrU2l6ZVwiXSxcclxuICAgICAgICAgICAgICAgIGZyb21QaWVjZS5zdGFja1NpemUgKyB0b1BpZWNlLnN0YWNrU2l6ZVxyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZXF1ZW5jZUtleSA9IGAke2Zyb21Ub0tleX09PiR7cGxheWVyUGllY2VDb29yZGluYXRlQWZ0ZXJDYXB0dXJlfS0+JHt0b0Nvb3JkaW5hdGV9YDtcclxuXHJcbiAgICAgICAgICAgIGFsbEdhbWVTdGF0ZXNBZnRlck1vdmVTZXEgPSBhbGxHYW1lU3RhdGVzQWZ0ZXJNb3ZlU2VxLnNldChcclxuICAgICAgICAgICAgICBzZXF1ZW5jZUtleSxcclxuICAgICAgICAgICAgICBnYW1lU3RhdGVBZnRlck1vdmVTZXFcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2YWxpZFNlY29uZFR1cm5DYXB0dXJlcyA9IGdldFZhbGlkQ2FwdHVyZXMoXHJcbiAgICAgICAgICBwbGF5ZXJQaWVjZUNvb3JkaW5hdGVBZnRlckNhcHR1cmUsXHJcbiAgICAgICAgICBzdGF0ZUFmdGVyQ2FwdHVyZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHZhbGlkU2Vjb25kVHVybkNhcHR1cmVzICYmIHZhbGlkU2Vjb25kVHVybkNhcHR1cmVzLnNpemUpIHtcclxuICAgICAgICAgIHZhbGlkU2Vjb25kVHVybkNhcHR1cmVzLmZvckVhY2godG9Db29yZGluYXRlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV4dEdhbWVTdGF0ZSA9IHN0YXRlQWZ0ZXJDYXB0dXJlXHJcbiAgICAgICAgICAgICAgLnNldChwbGF5ZXJQaWVjZUNvb3JkaW5hdGVBZnRlckNhcHR1cmUsIG51bGwpXHJcbiAgICAgICAgICAgICAgLnNldCh0b0Nvb3JkaW5hdGUsIGZyb21QaWVjZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlcXVlbmNlS2V5ID0gYCR7ZnJvbVRvS2V5fT0+JHtwbGF5ZXJQaWVjZUNvb3JkaW5hdGVBZnRlckNhcHR1cmV9LT4ke3RvQ29vcmRpbmF0ZX1gO1xyXG5cclxuICAgICAgICAgICAgYWxsR2FtZVN0YXRlc0FmdGVyTW92ZVNlcSA9IGFsbEdhbWVTdGF0ZXNBZnRlck1vdmVTZXEuc2V0KFxyXG4gICAgICAgICAgICAgIHNlcXVlbmNlS2V5LFxyXG4gICAgICAgICAgICAgIG5leHRHYW1lU3RhdGVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBXZSBjYW4ganVzdCBjYXB0dXJlLCB0aGVuIHBhc3NcclxuICAgICAgICBhbGxHYW1lU3RhdGVzQWZ0ZXJNb3ZlU2VxID0gYWxsR2FtZVN0YXRlc0FmdGVyTW92ZVNlcS5zZXQoXHJcbiAgICAgICAgICBmcm9tVG9LZXksXHJcbiAgICAgICAgICBzdGF0ZUFmdGVyQ2FwdHVyZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGFsbEdhbWVTdGF0ZXNBZnRlck1vdmVTZXE7XHJcbiAgfSwgTWFwKCkpO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgTlVNQkVSX09GX0NPTFMsXHJcbiAgTlVNQkVSX09GX1JPV1MsXHJcbiAgVFJJQU5HTEVfU0lERV9MRU5HVEgsXHJcbiAgVFJJQU5HTEVfSEVJR0hULFxyXG4gIENBQ0hFRF9DQU5WQVMsXHJcbiAgR0FNRV9TVEFURV9CT0FSRF9DQU5WQVMsXHJcbiAgUElYRUxfUkFUSU9cclxufSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IENPT1JEU19UT19OT1RfUkVOREVSID0gW1xyXG4gIFwiMCwwXCIsXHJcbiAgXCIwLDFcIixcclxuICBcIjEsMFwiLFxyXG4gIFwiMiwwXCIsXHJcbiAgXCIzLDBcIixcclxuICBcIjEsMVwiLFxyXG4gIFwiMiwxXCIsXHJcbiAgXCIwLDJcIixcclxuICBcIjEsMlwiLFxyXG4gIFwiMCwzXCIsXHJcbiAgXCI3LDVcIixcclxuICBcIjcsNlwiLFxyXG4gIFwiNiw3XCIsXHJcbiAgXCI2LDZcIixcclxuICBcIjUsN1wiLFxyXG4gIFwiNiw3XCIsXHJcbiAgXCI0LDNcIixcclxuICBcIjMsNFwiLFxyXG4gIFwiNCw0XCIsXHJcbiAgXCI3LDdcIlxyXG5dO1xyXG5cclxuY29uc3QgT0ZGU0VUX1ggPSAwO1xyXG5cclxuY29uc3QgZ3JpZCA9IGdldEluaXRpYWxHcmlkU3RhdGUoKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRDYW52YXMoKSB7XHJcbiAgQ0FDSEVEX0NBTlZBUy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogUElYRUxfUkFUSU87XHJcbiAgQ0FDSEVEX0NBTlZBUy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiBQSVhFTF9SQVRJTztcclxuICBDQUNIRURfQ0FOVkFTLnN0eWxlLndpZHRoID0gYCR7d2luZG93LmlubmVyV2lkdGh9cHhgO1xyXG4gIENBQ0hFRF9DQU5WQVMuc3R5bGUuaGVpZ2h0ID0gYCR7d2luZG93LmlubmVySGVpZ2h0fXB4YDtcclxuXHJcbiAgR0FNRV9TVEFURV9CT0FSRF9DQU5WQVMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIFBJWEVMX1JBVElPO1xyXG4gIEdBTUVfU1RBVEVfQk9BUkRfQ0FOVkFTLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIFBJWEVMX1JBVElPO1xyXG4gIEdBTUVfU1RBVEVfQk9BUkRfQ0FOVkFTLnN0eWxlLndpZHRoID0gYCR7d2luZG93LmlubmVyV2lkdGh9cHhgO1xyXG4gIEdBTUVfU1RBVEVfQk9BUkRfQ0FOVkFTLnN0eWxlLmhlaWdodCA9IGAke3dpbmRvdy5pbm5lckhlaWdodH1weGA7XHJcblxyXG4gIENBQ0hFRF9DQU5WQVMuZ2V0Q29udGV4dChcIjJkXCIpLnNldFRyYW5zZm9ybShcclxuICAgIFBJWEVMX1JBVElPLFxyXG4gICAgMCxcclxuICAgIDAsXHJcbiAgICBQSVhFTF9SQVRJTyxcclxuICAgIDAsXHJcbiAgICAwXHJcbiAgKTtcclxuICBHQU1FX1NUQVRFX0JPQVJEX0NBTlZBUy5nZXRDb250ZXh0KFwiMmRcIikuc2V0VHJhbnNmb3JtKFxyXG4gICAgUElYRUxfUkFUSU8sXHJcbiAgICAwLFxyXG4gICAgMCxcclxuICAgIFBJWEVMX1JBVElPLFxyXG4gICAgMCxcclxuICAgIDBcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb250ZXh0KCkge1xyXG4gIHJldHVybiBDQUNIRURfQ0FOVkFTLmdldENvbnRleHQoXCIyZFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SW5pdGlhbEdyaWRTdGF0ZSgpIHtcclxuICBjb25zdCB2ZXJ0aWNlcyA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgTlVNQkVSX09GX0NPTFM7IGNvbEluZGV4KyspIHtcclxuICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBOVU1CRVJfT0ZfUk9XUzsgcm93SW5kZXgrKykge1xyXG4gICAgICB2ZXJ0aWNlcy5wdXNoKGAke2NvbEluZGV4fSwke3Jvd0luZGV4fWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHZlcnRpY2VzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJbWFnZURhdGEoKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IGdldENvbnRleHQoKTtcclxuICByZXR1cm4gY29udGV4dC5nZXRJbWFnZURhdGEoXHJcbiAgICBPRkZTRVRfWCAqIFBJWEVMX1JBVElPLFxyXG4gICAgMCxcclxuICAgIFBJWEVMX1JBVElPICogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICBQSVhFTF9SQVRJTyAqIHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3Q2FjaGVkQm9hcmQoKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IEdBTUVfU1RBVEVfQk9BUkRfQ0FOVkFTLmdldENvbnRleHQoXCIyZFwiKTtcclxuICBjb25zdCBpbWFnZURhdGEgPSBnZXRJbWFnZURhdGEoKTtcclxuXHJcbiAgY29udGV4dC5wdXRJbWFnZURhdGEoXHJcbiAgICBpbWFnZURhdGEsXHJcbiAgICAod2luZG93LmlubmVyV2lkdGggLyAyIC0gNCAqIFRSSUFOR0xFX1NJREVfTEVOR1RIKSAqIFBJWEVMX1JBVElPLFxyXG4gICAgKHdpbmRvdy5pbm5lckhlaWdodCAvIDIgLSA0ICogVFJJQU5HTEVfSEVJR0hUKSAqIFBJWEVMX1JBVElPXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdJbml0aWFsR3JpZCgpIHtcclxuICBpbml0Q2FudmFzKCk7XHJcbiAgZ3JpZC5tYXAocmVuZGVyVHJpYW5nbGVGcm9tVmVydGV4KTtcclxuICByZW5kZXJIZXhhZ29uQm9yZGVyKCk7XHJcbiAgcmVuZGVySW5uZXJIZXhhZ29uQm9yZGVyKCk7XHJcbiAgZHJhd0NhY2hlZEJvYXJkKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRyaWFuZ2xlRnJvbVZlcnRleChjb29yZGluYXRlKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IGdldENvbnRleHQoKTtcclxuXHJcbiAgaWYgKENPT1JEU19UT19OT1RfUkVOREVSLmluY2x1ZGVzKGNvb3JkaW5hdGUpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGNvbnN0IFt4LCB5XSA9IGNvb3JkaW5hdGUuc3BsaXQoXCIsXCIpO1xyXG5cclxuICBjb25zdCBvZmZzZXRYID0gKHkgKiBUUklBTkdMRV9TSURFX0xFTkdUSCkgLyAyIC0gVFJJQU5HTEVfU0lERV9MRU5HVEggKiAyO1xyXG4gIGNvbnN0IHN0YXJ0WCA9IHggKiBUUklBTkdMRV9TSURFX0xFTkdUSCArIG9mZnNldFg7XHJcbiAgY29uc3Qgc3RhcnRZID0geSAqIFRSSUFOR0xFX0hFSUdIVDtcclxuXHJcbiAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICBjb250ZXh0Lm1vdmVUbyhzdGFydFgsIHN0YXJ0WSk7XHJcbiAgY29udGV4dC5saW5lVG8oc3RhcnRYICsgVFJJQU5HTEVfU0lERV9MRU5HVEgsIHN0YXJ0WSk7XHJcbiAgY29udGV4dC5saW5lVG8oc3RhcnRYICsgVFJJQU5HTEVfU0lERV9MRU5HVEggLyAyLCBzdGFydFkgKyBUUklBTkdMRV9IRUlHSFQpO1xyXG4gIGNvbnRleHQubGluZVRvKHN0YXJ0WCwgc3RhcnRZKTtcclxuICBjb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gIGNvbnRleHQubGluZVdpZHRoID0gMTtcclxuICBjb250ZXh0LnN0cm9rZVN0eWxlID0gXCIjNjY2NjY2XCI7XHJcbiAgY29udGV4dC5zdHJva2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVySGV4YWdvbkJvcmRlcigpIHtcclxuICBjb25zdCBjb250ZXh0ID0gZ2V0Q29udGV4dCgpO1xyXG5cclxuICBjb25zdCB4MSA9IDIgKiBUUklBTkdMRV9TSURFX0xFTkdUSCArIE9GRlNFVF9YO1xyXG4gIGNvbnN0IHkxID0gMDtcclxuXHJcbiAgY29uc3QgeDIgPSAwICogVFJJQU5HTEVfU0lERV9MRU5HVEggKyBPRkZTRVRfWDtcclxuICBjb25zdCB5MiA9IDQgKiBUUklBTkdMRV9IRUlHSFQ7XHJcblxyXG4gIGNvbnN0IHgzID0gMiAqIFRSSUFOR0xFX1NJREVfTEVOR1RIICsgT0ZGU0VUX1g7XHJcbiAgY29uc3QgeTMgPSA4ICogVFJJQU5HTEVfSEVJR0hUO1xyXG5cclxuICBjb25zdCB4NCA9IDYgKiBUUklBTkdMRV9TSURFX0xFTkdUSCArIE9GRlNFVF9YO1xyXG4gIGNvbnN0IHk0ID0gOCAqIFRSSUFOR0xFX0hFSUdIVDtcclxuXHJcbiAgY29uc3QgeDUgPSA4ICogVFJJQU5HTEVfU0lERV9MRU5HVEggKyBPRkZTRVRfWDtcclxuICBjb25zdCB5NSA9IDQgKiBUUklBTkdMRV9IRUlHSFQ7XHJcblxyXG4gIGNvbnN0IHg2ID0gNiAqIFRSSUFOR0xFX1NJREVfTEVOR1RIICsgT0ZGU0VUX1g7XHJcbiAgY29uc3QgeTYgPSAwO1xyXG5cclxuICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gIGNvbnRleHQubW92ZVRvKHgxLCB5MSk7XHJcbiAgY29udGV4dC5saW5lVG8oeDIsIHkyKTtcclxuICBjb250ZXh0LmxpbmVUbyh4MywgeTMpO1xyXG4gIGNvbnRleHQubGluZVRvKHg0LCB5NCk7XHJcbiAgY29udGV4dC5saW5lVG8oeDUsIHk1KTtcclxuICBjb250ZXh0LmxpbmVUbyh4NiwgeTYpO1xyXG5cclxuICBjb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gIGNvbnRleHQubGluZVdpZHRoID0gMjtcclxuICBjb250ZXh0LnN0cm9rZVN0eWxlID0gXCIjNjY2NjY2XCI7XHJcbiAgY29udGV4dC5zdHJva2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVySW5uZXJIZXhhZ29uQm9yZGVyKCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBnZXRDb250ZXh0KCk7XHJcblxyXG4gIGNvbnN0IHgxID0gNCAqIFRSSUFOR0xFX1NJREVfTEVOR1RIIC0gVFJJQU5HTEVfU0lERV9MRU5HVEggLyAyICsgT0ZGU0VUX1g7XHJcbiAgY29uc3QgeTEgPSAzICogVFJJQU5HTEVfSEVJR0hUO1xyXG5cclxuICBjb25zdCB4MiA9IDMgKiBUUklBTkdMRV9TSURFX0xFTkdUSCArIE9GRlNFVF9YO1xyXG4gIGNvbnN0IHkyID0gNCAqIFRSSUFOR0xFX0hFSUdIVDtcclxuXHJcbiAgY29uc3QgeDMgPSAzICogVFJJQU5HTEVfU0lERV9MRU5HVEggKyBUUklBTkdMRV9TSURFX0xFTkdUSCAvIDIgKyBPRkZTRVRfWDtcclxuICBjb25zdCB5MyA9IDUgKiBUUklBTkdMRV9IRUlHSFQ7XHJcblxyXG4gIGNvbnN0IHg0ID0gNSAqIFRSSUFOR0xFX1NJREVfTEVOR1RIIC0gVFJJQU5HTEVfU0lERV9MRU5HVEggLyAyICsgT0ZGU0VUX1g7XHJcbiAgY29uc3QgeTQgPSA1ICogVFJJQU5HTEVfSEVJR0hUO1xyXG5cclxuICBjb25zdCB4NSA9IDUgKiBUUklBTkdMRV9TSURFX0xFTkdUSCArIE9GRlNFVF9YO1xyXG4gIGNvbnN0IHk1ID0gNCAqIFRSSUFOR0xFX0hFSUdIVDtcclxuXHJcbiAgY29uc3QgeDYgPSA1ICogVFJJQU5HTEVfU0lERV9MRU5HVEggLSBUUklBTkdMRV9TSURFX0xFTkdUSCAvIDIgKyBPRkZTRVRfWDtcclxuICBjb25zdCB5NiA9IDMgKiBUUklBTkdMRV9IRUlHSFQ7XHJcblxyXG4gIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgY29udGV4dC5tb3ZlVG8oeDEsIHkxKTtcclxuICBjb250ZXh0LmxpbmVUbyh4MiwgeTIpO1xyXG4gIGNvbnRleHQubGluZVRvKHgzLCB5Myk7XHJcbiAgY29udGV4dC5saW5lVG8oeDQsIHk0KTtcclxuICBjb250ZXh0LmxpbmVUbyh4NSwgeTUpO1xyXG4gIGNvbnRleHQubGluZVRvKHg2LCB5Nik7XHJcblxyXG4gIGNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgY29udGV4dC5saW5lV2lkdGggPSAyO1xyXG4gIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcIiM2NjY2NjZcIjtcclxuICBjb250ZXh0LnN0cm9rZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJTcXVhcmVCb3JkZXIoKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IGdldENvbnRleHQoKTtcclxuICBjb250ZXh0LnN0cm9rZVJlY3QoXHJcbiAgICBPRkZTRVRfWCxcclxuICAgIDAsXHJcbiAgICA4ICogVFJJQU5HTEVfU0lERV9MRU5HVEgsXHJcbiAgICA4ICogVFJJQU5HTEVfSEVJR0hUXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBSZWNvcmQgfSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcblxyXG5jb25zdCB1c2VXaW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IHdpbmRvdy5pbm5lckhlaWdodDtcclxuY29uc3QgZXh0cmFTcGFjZSA9IDE7XHJcblxyXG5leHBvcnQgY29uc3QgQ0FDSEVEX0NBTlZBUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbmV4cG9ydCBjb25zdCBHQU1FX1NUQVRFX0JPQVJEX0NBTlZBUyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIFwiZ2FtZVN0YXRlQm9hcmREaXZcIlxyXG4pO1xyXG5leHBvcnQgY29uc3QgUElYRUxfUkFUSU8gPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGN0eCA9IENBQ0hFRF9DQU5WQVMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIGNvbnN0IGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XHJcbiAgY29uc3QgYnNyID1cclxuICAgIGN0eC53ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XHJcbiAgICBjdHgubW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxyXG4gICAgY3R4Lm1zQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxyXG4gICAgY3R4Lm9CYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XHJcbiAgICBjdHguYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxyXG4gICAgMTtcclxuXHJcbiAgcmV0dXJuIGRwciAvIGJzcjtcclxufSkoKTtcclxuXHJcbmNvbnN0IHdpbmRvd0lubmVySGVpZ2h0RGV2aWNlUmF0aW8gPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbmNvbnN0IHdpbmRvd0lubmVyV2lkdGhEZXZpY2VSYXRpbyA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFQlVHID0gZmFsc2U7XHJcbmV4cG9ydCBjb25zdCBOVU1CRVJfT0ZfUk9XUyA9IDg7XHJcbmV4cG9ydCBjb25zdCBOVU1CRVJfT0ZfQ09MUyA9IDg7XHJcbmV4cG9ydCBjb25zdCBUUklBTkdMRV9TSURFX0xFTkdUSCA9XHJcbiAgKHVzZVdpbmRvd0hlaWdodFxyXG4gICAgPyB3aW5kb3dJbm5lckhlaWdodERldmljZVJhdGlvXHJcbiAgICA6IHdpbmRvd0lubmVyV2lkdGhEZXZpY2VSYXRpbykgL1xyXG4gIChOVU1CRVJfT0ZfQ09MUyArIGV4dHJhU3BhY2UpO1xyXG5leHBvcnQgY29uc3QgVFJJQU5HTEVfSEVJR0hUID0gVFJJQU5HTEVfU0lERV9MRU5HVEggKiAoTWF0aC5zcXJ0KDMpIC8gMik7XHJcblxyXG5leHBvcnQgY29uc3QgTlVNQkVSX09GX1RPVFRTID0gMTU7XHJcbmV4cG9ydCBjb25zdCBOVU1CRVJfT0ZfVFpBUlJBUyA9IDk7XHJcbmV4cG9ydCBjb25zdCBOVU1CRVJfT0ZfVFpBQVJTID0gNjtcclxuZXhwb3J0IGNvbnN0IFBMQVlBQkxFX1ZFUlRJQ0VTID0gW1xyXG4gIFwiNCwwXCIsXHJcbiAgXCI1LDBcIixcclxuICBcIjYsMFwiLFxyXG4gIFwiNywwXCIsXHJcbiAgXCI4LDBcIixcclxuICBcIjMsMVwiLFxyXG4gIFwiNCwxXCIsXHJcbiAgXCI1LDFcIixcclxuICBcIjYsMVwiLFxyXG4gIFwiNywxXCIsXHJcbiAgXCI4LDFcIixcclxuICBcIjIsMlwiLFxyXG4gIFwiMywyXCIsXHJcbiAgXCI0LDJcIixcclxuICBcIjUsMlwiLFxyXG4gIFwiNiwyXCIsXHJcbiAgXCI3LDJcIixcclxuICBcIjgsMlwiLFxyXG4gIFwiMSwzXCIsXHJcbiAgXCIyLDNcIixcclxuICBcIjMsM1wiLFxyXG4gIFwiNCwzXCIsXHJcbiAgXCI1LDNcIixcclxuICBcIjYsM1wiLFxyXG4gIFwiNywzXCIsXHJcbiAgXCI4LDNcIixcclxuICBcIjAsNFwiLFxyXG4gIFwiMSw0XCIsXHJcbiAgXCIyLDRcIixcclxuICBcIjMsNFwiLFxyXG4gIFwiNSw0XCIsXHJcbiAgXCI2LDRcIixcclxuICBcIjcsNFwiLFxyXG4gIFwiOCw0XCIsXHJcbiAgXCIwLDVcIixcclxuICBcIjEsNVwiLFxyXG4gIFwiMiw1XCIsXHJcbiAgXCIzLDVcIixcclxuICBcIjQsNVwiLFxyXG4gIFwiNSw1XCIsXHJcbiAgXCI2LDVcIixcclxuICBcIjcsNVwiLFxyXG4gIFwiMCw2XCIsXHJcbiAgXCIxLDZcIixcclxuICBcIjIsNlwiLFxyXG4gIFwiMyw2XCIsXHJcbiAgXCI0LDZcIixcclxuICBcIjUsNlwiLFxyXG4gIFwiNiw2XCIsXHJcbiAgXCIwLDdcIixcclxuICBcIjEsN1wiLFxyXG4gIFwiMiw3XCIsXHJcbiAgXCIzLDdcIixcclxuICBcIjQsN1wiLFxyXG4gIFwiNSw3XCIsXHJcbiAgXCIwLDhcIixcclxuICBcIjEsOFwiLFxyXG4gIFwiMiw4XCIsXHJcbiAgXCIzLDhcIixcclxuICBcIjQsOFwiXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQ09STkVSX0NPT1JESU5BVEVTID0gW1wiNCwwXCIsIFwiOCwwXCIsIFwiOCw0XCIsIFwiNCw4XCIsIFwiMCw4XCIsIFwiMCw0XCJdO1xyXG5leHBvcnQgY29uc3QgRURHRV9DT09SRElOQVRFUyA9IFtcclxuICBcIjUsMFwiLFxyXG4gIFwiNiwwXCIsXHJcbiAgXCI3LDBcIixcclxuICBcIjgsMVwiLFxyXG4gIFwiOCwyXCIsXHJcbiAgXCI4LDNcIixcclxuICBcIjcsNVwiLFxyXG4gIFwiNiw2XCIsXHJcbiAgXCI1LDdcIixcclxuICBcIjMsOFwiLFxyXG4gIFwiMiw4XCIsXHJcbiAgXCIxLDhcIixcclxuICBcIjAsN1wiLFxyXG4gIFwiMCw2XCIsXHJcbiAgXCIwLDVcIixcclxuICBcIjEsM1wiLFxyXG4gIFwiMiwyXCIsXHJcbiAgXCIzLDFcIlxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRaQUFSID0gXCJUWkFBUlwiO1xyXG5leHBvcnQgY29uc3QgVE9UVCA9IFwiVE9UVFwiO1xyXG5leHBvcnQgY29uc3QgVFpBUlJBID0gXCJUWkFSUkFcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHYW1lUGllY2VSZWNvcmQgPSBSZWNvcmQoe1xyXG4gIG93bmVkQnk6IFwiXCIsXHJcbiAgdHlwZTogXCJcIixcclxuICBzdGFja1NpemU6IDEsXHJcbiAgaXNEcmFnZ2luZzogZmFsc2VcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgUExBWUVSX09ORSA9IFwiUExBWUVSX09ORVwiO1xyXG5leHBvcnQgY29uc3QgUExBWUVSX1RXTyA9IFwiUExBWUVSX1RXT1wiO1xyXG5leHBvcnQgY29uc3QgVFVSTl9QSEFTRVMgPSB7XHJcbiAgQ0FQVFVSRTogXCJDQVBUVVJFXCIsXHJcbiAgU1RBQ0tfT1JfQ0FQVFVSRTogXCJTVEFDS19PUl9DQVBUVVJFXCJcclxufTtcclxuIiwiaW1wb3J0IHtcclxuICBUUklBTkdMRV9TSURFX0xFTkdUSCxcclxuICBUUklBTkdMRV9IRUlHSFQsXHJcbiAgUExBWUFCTEVfVkVSVElDRVMsXHJcbiAgR2FtZVBpZWNlUmVjb3JkLFxyXG4gIFRaQUFSLFxyXG4gIFRPVFQsXHJcbiAgVFpBUlJBLFxyXG4gIE5VTUJFUl9PRl9UT1RUUyxcclxuICBOVU1CRVJfT0ZfVFpBUlJBUyxcclxuICBOVU1CRVJfT0ZfVFpBQVJTLFxyXG4gIFBMQVlFUl9UV08sXHJcbiAgUExBWUVSX09ORVxyXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBMaXN0LCBNYXAgfSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGl4ZWxDb29yZGluYXRlc0Zyb21Cb2FyZENvb3JkaW5hdGVzKGNvb3JkaW5hdGUpIHtcclxuICBjb25zdCBbeCwgeV0gPSBjb29yZGluYXRlLnNwbGl0KFwiLFwiKTtcclxuXHJcbiAgY29uc3Qgb2Zmc2V0WFRvQ2VudGVyID0gd2luZG93LmlubmVyV2lkdGggLyAyIC0gNCAqIFRSSUFOR0xFX1NJREVfTEVOR1RIO1xyXG4gIGNvbnN0IG9mZnNldFlUb0NlbnRlciA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDIgLSA0ICogVFJJQU5HTEVfSEVJR0hUO1xyXG5cclxuICBjb25zdCBvZmZzZXRYID1cclxuICAgIHggKiBUUklBTkdMRV9TSURFX0xFTkdUSCAtIE1hdGgubWF4KDQgLSB5LCAwKSAqIFRSSUFOR0xFX1NJREVfTEVOR1RIO1xyXG5cclxuICBjb25zdCB4UG9zID1cclxuICAgIChNYXRoLmFicyg0IC0geSkgKiBUUklBTkdMRV9TSURFX0xFTkdUSCkgLyAyICsgb2Zmc2V0WCArIG9mZnNldFhUb0NlbnRlcjtcclxuXHJcbiAgY29uc3QgeVBvcyA9IHkgKiBUUklBTkdMRV9IRUlHSFQgKyBvZmZzZXRZVG9DZW50ZXI7XHJcbiAgcmV0dXJuIGAke3hQb3N9LCR7eVBvc31gO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm9hcmRDb29yZGluYXRlc0Zyb21QaXhlbENvb3JkaW5hdGVzKHgsIHkpIHtcclxuICBjb25zdCBvZmZzZXRYVG9DZW50ZXIgPVxyXG4gICAgKHdpbmRvdy5pbm5lcldpZHRoIC8gMiAtIDQgKiBUUklBTkdMRV9TSURFX0xFTkdUSCkgLyBUUklBTkdMRV9TSURFX0xFTkdUSDtcclxuICBjb25zdCBvZmZzZXRZVG9DZW50ZXIgPVxyXG4gICAgKHdpbmRvdy5pbm5lckhlaWdodCAvIDIgLSA0ICogVFJJQU5HTEVfSEVJR0hUKSAvIFRSSUFOR0xFX0hFSUdIVDtcclxuXHJcbiAgY29uc3QgeVBvcyA9IHkgLyBUUklBTkdMRV9IRUlHSFQgLSBvZmZzZXRZVG9DZW50ZXI7XHJcblxyXG4gIGNvbnN0IGludGVyaW1YID0geCAvIFRSSUFOR0xFX1NJREVfTEVOR1RIIC0gb2Zmc2V0WFRvQ2VudGVyO1xyXG5cclxuICBjb25zdCBvZmZzZXRYQmVjYXVzZVkgPVxyXG4gICAgKE1hdGguYWJzKDQgLSB5UG9zKSAqIFRSSUFOR0xFX1NJREVfTEVOR1RIKSAvIDIgLyBUUklBTkdMRV9TSURFX0xFTkdUSDtcclxuXHJcbiAgY29uc3Qgb2Zmc2V0WEJlY2F1c2VBbm90aGVyWSA9IE1hdGgubWF4KDQgLSB5UG9zLCAwKTtcclxuXHJcbiAgY29uc3QgeFBvcyA9IGludGVyaW1YIC0gb2Zmc2V0WEJlY2F1c2VZICsgb2Zmc2V0WEJlY2F1c2VBbm90aGVyWTtcclxuXHJcbiAgY29uc3QgeENvb3JkID0gTWF0aC5yb3VuZCh4UG9zKTtcclxuICBjb25zdCB5Q29vcmQgPSBNYXRoLnJvdW5kKHlQb3MpO1xyXG4gIHJldHVybiBgJHt4Q29vcmR9LCR7eUNvb3JkfWA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnb1dlc3QoY29vcmRpbmF0ZSkge1xyXG4gIGxldCBbeCwgeV0gPSBjb29yZGluYXRlLnNwbGl0KFwiLFwiKTtcclxuICB4ID0gTnVtYmVyKHgpO1xyXG4gIHkgPSBOdW1iZXIoeSk7XHJcblxyXG4gIHJldHVybiBgJHt4IC0gMX0sJHt5fWA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnb0Vhc3QoY29vcmRpbmF0ZSkge1xyXG4gIGxldCBbeCwgeV0gPSBjb29yZGluYXRlLnNwbGl0KFwiLFwiKTtcclxuXHJcbiAgeCA9IE51bWJlcih4KTtcclxuICB5ID0gTnVtYmVyKHkpO1xyXG5cclxuICByZXR1cm4gYCR7eCArIDF9LCR7eX1gO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ29Ob3J0aFdlc3QoY29vcmRpbmF0ZSkge1xyXG4gIGxldCBbeCwgeV0gPSBjb29yZGluYXRlLnNwbGl0KFwiLFwiKTtcclxuXHJcbiAgeCA9IE51bWJlcih4KTtcclxuICB5ID0gTnVtYmVyKHkpO1xyXG5cclxuICByZXR1cm4gYCR7eH0sJHt5IC0gMX1gO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ29Ob3J0aEVhc3QoY29vcmRpbmF0ZSkge1xyXG4gIGxldCBbeCwgeV0gPSBjb29yZGluYXRlLnNwbGl0KFwiLFwiKTtcclxuICB4ID0gTnVtYmVyKHgpO1xyXG4gIHkgPSBOdW1iZXIoeSk7XHJcblxyXG4gIHJldHVybiBgJHt4ICsgMX0sJHt5IC0gMX1gO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ29Tb3V0aFdlc3QoY29vcmRpbmF0ZSkge1xyXG4gIGxldCBbeCwgeV0gPSBjb29yZGluYXRlLnNwbGl0KFwiLFwiKTtcclxuXHJcbiAgeCA9IE51bWJlcih4KTtcclxuICB5ID0gTnVtYmVyKHkpO1xyXG5cclxuICByZXR1cm4gYCR7eCAtIDF9LCR7eSArIDF9YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdvU291dGhFYXN0KGNvb3JkaW5hdGUpIHtcclxuICBsZXQgW3gsIHldID0gY29vcmRpbmF0ZS5zcGxpdChcIixcIik7XHJcbiAgeCA9IE51bWJlcih4KTtcclxuICB5ID0gTnVtYmVyKHkpO1xyXG5cclxuICByZXR1cm4gYCR7eH0sJHt5ICsgMX1gO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNQbGF5YWJsZVNwYWNlKGNvb3JkaW5hdGUpIHtcclxuICByZXR1cm4gUExBWUFCTEVfVkVSVElDRVMuaW5jbHVkZXMoY29vcmRpbmF0ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEJvYXJkV2l0aFBpZWNlc05vdFJhbmRvbSgpIHtcclxuICBsZXQgcGllY2VzVG9EcmF3ID0gTWFwKHtcclxuICAgIFwiNCwwXCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUT1RULCBvd25lZEJ5OiBQTEFZRVJfT05FIH0pLFxyXG4gICAgXCI1LDBcIjogbmV3IEdhbWVQaWVjZVJlY29yZCh7IHR5cGU6IFRPVFQsIG93bmVkQnk6IFBMQVlFUl9PTkUgfSksXHJcbiAgICBcIjYsMFwiOiBuZXcgR2FtZVBpZWNlUmVjb3JkKHsgdHlwZTogVE9UVCwgb3duZWRCeTogUExBWUVSX09ORSB9KSxcclxuICAgIFwiNywwXCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUT1RULCBvd25lZEJ5OiBQTEFZRVJfT05FIH0pLFxyXG4gICAgXCI4LDBcIjogbmV3IEdhbWVQaWVjZVJlY29yZCh7IHR5cGU6IFRPVFQsIG93bmVkQnk6IFBMQVlFUl9UV08gfSksXHJcbiAgICBcIjgsMVwiOiBuZXcgR2FtZVBpZWNlUmVjb3JkKHsgdHlwZTogVE9UVCwgb3duZWRCeTogUExBWUVSX1RXTyB9KSxcclxuICAgIFwiOCwyXCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUT1RULCBvd25lZEJ5OiBQTEFZRVJfVFdPIH0pLFxyXG4gICAgXCI4LDNcIjogbmV3IEdhbWVQaWVjZVJlY29yZCh7IHR5cGU6IFRPVFQsIG93bmVkQnk6IFBMQVlFUl9UV08gfSksXHJcbiAgICBcIjgsNFwiOiBuZXcgR2FtZVBpZWNlUmVjb3JkKHsgdHlwZTogVE9UVCwgb3duZWRCeTogUExBWUVSX09ORSB9KSxcclxuICAgIFwiNyw1XCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUT1RULCBvd25lZEJ5OiBQTEFZRVJfT05FIH0pLFxyXG4gICAgXCI2LDZcIjogbmV3IEdhbWVQaWVjZVJlY29yZCh7IHR5cGU6IFRPVFQsIG93bmVkQnk6IFBMQVlFUl9PTkUgfSksXHJcbiAgICBcIjUsN1wiOiBuZXcgR2FtZVBpZWNlUmVjb3JkKHsgdHlwZTogVE9UVCwgb3duZWRCeTogUExBWUVSX09ORSB9KSxcclxuICAgIFwiNCw4XCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUT1RULCBvd25lZEJ5OiBQTEFZRVJfVFdPIH0pLFxyXG4gICAgXCIzLDhcIjogbmV3IEdhbWVQaWVjZVJlY29yZCh7IHR5cGU6IFRPVFQsIG93bmVkQnk6IFBMQVlFUl9UV08gfSksXHJcbiAgICBcIjIsOFwiOiBuZXcgR2FtZVBpZWNlUmVjb3JkKHsgdHlwZTogVE9UVCwgb3duZWRCeTogUExBWUVSX1RXTyB9KSxcclxuICAgIFwiMSw4XCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUT1RULCBvd25lZEJ5OiBQTEFZRVJfVFdPIH0pLFxyXG4gICAgXCIwLDhcIjogbmV3IEdhbWVQaWVjZVJlY29yZCh7IHR5cGU6IFRPVFQsIG93bmVkQnk6IFBMQVlFUl9PTkUgfSksXHJcbiAgICBcIjAsN1wiOiBuZXcgR2FtZVBpZWNlUmVjb3JkKHsgdHlwZTogVE9UVCwgb3duZWRCeTogUExBWUVSX09ORSB9KSxcclxuICAgIFwiMCw2XCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUT1RULCBvd25lZEJ5OiBQTEFZRVJfT05FIH0pLFxyXG4gICAgXCIwLDVcIjogbmV3IEdhbWVQaWVjZVJlY29yZCh7IHR5cGU6IFRPVFQsIG93bmVkQnk6IFBMQVlFUl9PTkUgfSksXHJcbiAgICBcIjAsNFwiOiBuZXcgR2FtZVBpZWNlUmVjb3JkKHsgdHlwZTogVE9UVCwgb3duZWRCeTogUExBWUVSX1RXTyB9KSxcclxuICAgIFwiMSwzXCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUT1RULCBvd25lZEJ5OiBQTEFZRVJfVFdPIH0pLFxyXG4gICAgXCIyLDJcIjogbmV3IEdhbWVQaWVjZVJlY29yZCh7IHR5cGU6IFRPVFQsIG93bmVkQnk6IFBMQVlFUl9UV08gfSksXHJcbiAgICBcIjMsMVwiOiBuZXcgR2FtZVBpZWNlUmVjb3JkKHsgdHlwZTogVE9UVCwgb3duZWRCeTogUExBWUVSX1RXTyB9KSxcclxuICAgIFwiNCwxXCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUWkFSUkEsIG93bmVkQnk6IFBMQVlFUl9PTkUgfSksXHJcbiAgICBcIjUsMVwiOiBuZXcgR2FtZVBpZWNlUmVjb3JkKHsgdHlwZTogVFpBUlJBLCBvd25lZEJ5OiBQTEFZRVJfT05FIH0pLFxyXG4gICAgXCI2LDFcIjogbmV3IEdhbWVQaWVjZVJlY29yZCh7IHR5cGU6IFRaQVJSQSwgb3duZWRCeTogUExBWUVSX09ORSB9KSxcclxuICAgIFwiNywxXCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUWkFSUkEsIG93bmVkQnk6IFBMQVlFUl9UV08gfSksXHJcbiAgICBcIjcsMlwiOiBuZXcgR2FtZVBpZWNlUmVjb3JkKHsgdHlwZTogVFpBUlJBLCBvd25lZEJ5OiBQTEFZRVJfVFdPIH0pLFxyXG4gICAgXCI3LDNcIjogbmV3IEdhbWVQaWVjZVJlY29yZCh7IHR5cGU6IFRaQVJSQSwgb3duZWRCeTogUExBWUVSX1RXTyB9KSxcclxuICAgIFwiNyw0XCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUWkFSUkEsIG93bmVkQnk6IFBMQVlFUl9PTkUgfSksXHJcbiAgICBcIjYsNVwiOiBuZXcgR2FtZVBpZWNlUmVjb3JkKHsgdHlwZTogVFpBUlJBLCBvd25lZEJ5OiBQTEFZRVJfT05FIH0pLFxyXG4gICAgXCI1LDZcIjogbmV3IEdhbWVQaWVjZVJlY29yZCh7IHR5cGU6IFRaQVJSQSwgb3duZWRCeTogUExBWUVSX09ORSB9KSxcclxuICAgIFwiNCw3XCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUWkFSUkEsIG93bmVkQnk6IFBMQVlFUl9UV08gfSksXHJcbiAgICBcIjMsN1wiOiBuZXcgR2FtZVBpZWNlUmVjb3JkKHsgdHlwZTogVFpBUlJBLCBvd25lZEJ5OiBQTEFZRVJfVFdPIH0pLFxyXG4gICAgXCIyLDdcIjogbmV3IEdhbWVQaWVjZVJlY29yZCh7IHR5cGU6IFRaQVJSQSwgb3duZWRCeTogUExBWUVSX1RXTyB9KSxcclxuICAgIFwiMSw3XCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUWkFSUkEsIG93bmVkQnk6IFBMQVlFUl9PTkUgfSksXHJcbiAgICBcIjEsNlwiOiBuZXcgR2FtZVBpZWNlUmVjb3JkKHsgdHlwZTogVFpBUlJBLCBvd25lZEJ5OiBQTEFZRVJfT05FIH0pLFxyXG4gICAgXCIxLDVcIjogbmV3IEdhbWVQaWVjZVJlY29yZCh7IHR5cGU6IFRaQVJSQSwgb3duZWRCeTogUExBWUVSX09ORSB9KSxcclxuICAgIFwiMSw0XCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUWkFSUkEsIG93bmVkQnk6IFBMQVlFUl9UV08gfSksXHJcbiAgICBcIjIsM1wiOiBuZXcgR2FtZVBpZWNlUmVjb3JkKHsgdHlwZTogVFpBUlJBLCBvd25lZEJ5OiBQTEFZRVJfVFdPIH0pLFxyXG4gICAgXCIzLDJcIjogbmV3IEdhbWVQaWVjZVJlY29yZCh7IHR5cGU6IFRaQVJSQSwgb3duZWRCeTogUExBWUVSX1RXTyB9KSxcclxuICAgIFwiNCwyXCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUWkFBUiwgb3duZWRCeTogUExBWUVSX09ORSB9KSxcclxuICAgIFwiNSwyXCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUWkFBUiwgb3duZWRCeTogUExBWUVSX09ORSB9KSxcclxuICAgIFwiNiwyXCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUWkFBUiwgb3duZWRCeTogUExBWUVSX1RXTyB9KSxcclxuICAgIFwiNiwzXCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUWkFBUiwgb3duZWRCeTogUExBWUVSX1RXTyB9KSxcclxuICAgIFwiNiw0XCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUWkFBUiwgb3duZWRCeTogUExBWUVSX09ORSB9KSxcclxuICAgIFwiNSw1XCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUWkFBUiwgb3duZWRCeTogUExBWUVSX09ORSB9KSxcclxuICAgIFwiNCw2XCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUWkFBUiwgb3duZWRCeTogUExBWUVSX1RXTyB9KSxcclxuICAgIFwiMyw2XCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUWkFBUiwgb3duZWRCeTogUExBWUVSX1RXTyB9KSxcclxuICAgIFwiMiw2XCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUWkFBUiwgb3duZWRCeTogUExBWUVSX09ORSB9KSxcclxuICAgIFwiMiw1XCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUWkFBUiwgb3duZWRCeTogUExBWUVSX09ORSB9KSxcclxuICAgIFwiMiw0XCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUWkFBUiwgb3duZWRCeTogUExBWUVSX1RXTyB9KSxcclxuICAgIFwiMywzXCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUWkFBUiwgb3duZWRCeTogUExBWUVSX1RXTyB9KSxcclxuICAgIFwiNCwzXCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUT1RULCBvd25lZEJ5OiBQTEFZRVJfT05FIH0pLFxyXG4gICAgXCI1LDNcIjogbmV3IEdhbWVQaWVjZVJlY29yZCh7IHR5cGU6IFRPVFQsIG93bmVkQnk6IFBMQVlFUl9UV08gfSksXHJcbiAgICBcIjUsNFwiOiBuZXcgR2FtZVBpZWNlUmVjb3JkKHsgdHlwZTogVE9UVCwgb3duZWRCeTogUExBWUVSX09ORSB9KSxcclxuICAgIFwiNCw1XCI6IG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUT1RULCBvd25lZEJ5OiBQTEFZRVJfVFdPIH0pLFxyXG4gICAgXCIzLDVcIjogbmV3IEdhbWVQaWVjZVJlY29yZCh7IHR5cGU6IFRPVFQsIG93bmVkQnk6IFBMQVlFUl9PTkUgfSksXHJcbiAgICBcIjMsNFwiOiBuZXcgR2FtZVBpZWNlUmVjb3JkKHsgdHlwZTogVE9UVCwgb3duZWRCeTogUExBWUVSX1RXTyB9KVxyXG4gIH0pLnNvcnRCeShNYXRoLnJhbmRvbSk7XHJcblxyXG4gIHJldHVybiBwaWVjZXNUb0RyYXc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEJvYXJkV2l0aFBpZWNlcygpIHtcclxuICBsZXQgcGllY2VzVG9EcmF3ID0gTWFwKCk7XHJcbiAgbGV0IFBMQVlFUl9PTkVfUElFQ0VTID0gTGlzdCgpO1xyXG4gIGxldCBQTEFZRVJfVFdPX1BJRUNFUyA9IExpc3QoKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1CRVJfT0ZfVE9UVFM7IGkrKykge1xyXG4gICAgUExBWUVSX09ORV9QSUVDRVMgPSBQTEFZRVJfT05FX1BJRUNFUy5wdXNoKFxyXG4gICAgICBuZXcgR2FtZVBpZWNlUmVjb3JkKHsgdHlwZTogVE9UVCwgb3duZWRCeTogXCJQTEFZRVJfT05FXCIgfSlcclxuICAgICk7XHJcbiAgICBQTEFZRVJfVFdPX1BJRUNFUyA9IFBMQVlFUl9UV09fUElFQ0VTLnB1c2goXHJcbiAgICAgIG5ldyBHYW1lUGllY2VSZWNvcmQoeyB0eXBlOiBUT1RULCBvd25lZEJ5OiBcIlBMQVlFUl9UV09cIiB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNQkVSX09GX1RaQVJSQVM7IGkrKykge1xyXG4gICAgUExBWUVSX09ORV9QSUVDRVMgPSBQTEFZRVJfT05FX1BJRUNFUy5wdXNoKFxyXG4gICAgICBuZXcgR2FtZVBpZWNlUmVjb3JkKHsgdHlwZTogVFpBUlJBLCBvd25lZEJ5OiBcIlBMQVlFUl9PTkVcIiB9KVxyXG4gICAgKTtcclxuICAgIFBMQVlFUl9UV09fUElFQ0VTID0gUExBWUVSX1RXT19QSUVDRVMucHVzaChcclxuICAgICAgbmV3IEdhbWVQaWVjZVJlY29yZCh7IHR5cGU6IFRaQVJSQSwgb3duZWRCeTogXCJQTEFZRVJfVFdPXCIgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTUJFUl9PRl9UWkFBUlM7IGkrKykge1xyXG4gICAgUExBWUVSX09ORV9QSUVDRVMgPSBQTEFZRVJfT05FX1BJRUNFUy5wdXNoKFxyXG4gICAgICBuZXcgR2FtZVBpZWNlUmVjb3JkKHsgdHlwZTogVFpBQVIsIG93bmVkQnk6IFwiUExBWUVSX09ORVwiIH0pXHJcbiAgICApO1xyXG4gICAgUExBWUVSX1RXT19QSUVDRVMgPSBQTEFZRVJfVFdPX1BJRUNFUy5wdXNoKFxyXG4gICAgICBuZXcgR2FtZVBpZWNlUmVjb3JkKHsgdHlwZTogVFpBQVIsIG93bmVkQnk6IFwiUExBWUVSX1RXT1wiIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWxsR2FtZVBpZWNlcyA9IFBMQVlFUl9PTkVfUElFQ0VTLmNvbmNhdChQTEFZRVJfVFdPX1BJRUNFUyk7XHJcbiAgY29uc3Qgc2h1ZmZsZWRQaWVjZXMgPSBhbGxHYW1lUGllY2VzLnNvcnRCeShNYXRoLnJhbmRvbSk7XHJcblxyXG4gIHNodWZmbGVkUGllY2VzLmZvckVhY2goKHBpZWNlLCBpbmRleCkgPT4ge1xyXG4gICAgcGllY2VzVG9EcmF3ID0gcGllY2VzVG9EcmF3LnNldChQTEFZQUJMRV9WRVJUSUNFU1tpbmRleF0sIHBpZWNlKTtcclxuICAgIC8vIHNldE5ld2dhbWVCb2FyZFN0YXRlKGdhbWVCb2FyZFN0YXRlLnNldChQTEFZQUJMRV9WRVJUSUNFU1tpbmRleF0sIHBpZWNlKSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHBpZWNlc1RvRHJhdy5zb3J0QnkoTWF0aC5yYW5kb20pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FuQ2FwdHVyZShmcm9tQ29vcmRpbmF0ZSwgdG9Db29yZGluYXRlLCBnYW1lU3RhdGUpIHtcclxuICBjb25zdCBmcm9tUGllY2UgPSBnYW1lU3RhdGUuZ2V0KGZyb21Db29yZGluYXRlKTtcclxuICBjb25zdCB0b1BpZWNlID0gZ2FtZVN0YXRlLmdldCh0b0Nvb3JkaW5hdGUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgZnJvbVBpZWNlLm93bmVkQnkgIT09IHRvUGllY2Uub3duZWRCeSAmJlxyXG4gICAgZnJvbVBpZWNlLnN0YWNrU2l6ZSA+PSB0b1BpZWNlLnN0YWNrU2l6ZVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW5TdGFjayhmcm9tQ29vcmRpbmF0ZSwgdG9Db29yZGluYXRlLCBnYW1lU3RhdGUpIHtcclxuICBjb25zdCBmcm9tUGllY2UgPSBnYW1lU3RhdGUuZ2V0KGZyb21Db29yZGluYXRlKTtcclxuICBjb25zdCB0b1BpZWNlID0gZ2FtZVN0YXRlLmdldCh0b0Nvb3JkaW5hdGUpO1xyXG5cclxuICByZXR1cm4gZnJvbVBpZWNlLm93bmVkQnkgPT09IHRvUGllY2Uub3duZWRCeTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRFbXB0eUNvb3JkaW5hdGUoY29vcmRpbmF0ZSwgZ2FtZVN0YXRlKSB7XHJcbiAgcmV0dXJuIEJvb2xlYW4oXHJcbiAgICBQTEFZQUJMRV9WRVJUSUNFUy5pbmNsdWRlcyhjb29yZGluYXRlKSAmJiAhZ2FtZVN0YXRlLmdldChjb29yZGluYXRlKVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE5leHRWYWxpZENhcHR1cmUoZnJvbUNvb3JkaW5hdGUsIGRpcmVjdGlvbiwgZ2FtZVN0YXRlKSB7XHJcbiAgbGV0IG5leHRNb3ZlO1xyXG4gIGxldCBjb29yZGluYXRlVG9DaGVjayA9IGZyb21Db29yZGluYXRlO1xyXG4gIHdoaWxlIChuZXh0TW92ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb29yZGluYXRlVG9DaGVjayA9IG5leHRQaWVjZVtkaXJlY3Rpb25dKGNvb3JkaW5hdGVUb0NoZWNrKTtcclxuXHJcbiAgICAvLyBOb3QgYSBzcGFjZSB0aGF0IHdlIGNhbiBwbGF5IG9uXHJcbiAgICBpZiAoIWlzUGxheWFibGVTcGFjZShjb29yZGluYXRlVG9DaGVjaykpIHtcclxuICAgICAgbmV4dE1vdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGlzIHNwYWNlIGlzIGVtcHR5IHNvIHdlIGNhbiBjb250aW51ZVxyXG4gICAgZWxzZSBpZiAoaXNWYWxpZEVtcHR5Q29vcmRpbmF0ZShjb29yZGluYXRlVG9DaGVjaywgZ2FtZVN0YXRlKSkge1xyXG4gICAgICBuZXh0TW92ZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaXJzdCBwaWVjZSB3ZSBlbmNvdW50ZXIgY2FuJ3QgYmUgY2FwdHVyZWRcclxuICAgIGVsc2UgaWYgKCFjYW5DYXB0dXJlKGZyb21Db29yZGluYXRlLCBjb29yZGluYXRlVG9DaGVjaywgZ2FtZVN0YXRlKSkge1xyXG4gICAgICBuZXh0TW92ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gRmluYWxseSBhIHBpZWNlIHdlIGNhbiBjYXB0dXJlXHJcbiAgICBlbHNlIHtcclxuICAgICAgbmV4dE1vdmUgPSBjb29yZGluYXRlVG9DaGVjaztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG5leHRNb3ZlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROZXh0VmFsaWRTdGFjayhmcm9tQ29vcmRpbmF0ZSwgZGlyZWN0aW9uLCBnYW1lU3RhdGUpIHtcclxuICBsZXQgbmV4dE1vdmU7XHJcbiAgbGV0IGNvb3JkaW5hdGVUb0NoZWNrID0gZnJvbUNvb3JkaW5hdGU7XHJcbiAgd2hpbGUgKG5leHRNb3ZlID09PSB1bmRlZmluZWQpIHtcclxuICAgIGNvb3JkaW5hdGVUb0NoZWNrID0gbmV4dFBpZWNlW2RpcmVjdGlvbl0oY29vcmRpbmF0ZVRvQ2hlY2spO1xyXG5cclxuICAgIC8vIE5vdCBhIHNwYWNlIHRoYXQgd2UgY2FuIHBsYXkgb25cclxuICAgIGlmICghaXNQbGF5YWJsZVNwYWNlKGNvb3JkaW5hdGVUb0NoZWNrKSkge1xyXG4gICAgICBuZXh0TW92ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoaXMgc3BhY2UgaXMgZW1wdHkgc28gd2UgY2FuIGNvbnRpbnVlXHJcbiAgICBlbHNlIGlmIChpc1ZhbGlkRW1wdHlDb29yZGluYXRlKGNvb3JkaW5hdGVUb0NoZWNrLCBnYW1lU3RhdGUpKSB7XHJcbiAgICAgIG5leHRNb3ZlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpcnN0IHBpZWNlIHdlIGVuY291bnRlciBjYW4ndCBiZSBjYXB0dXJlZFxyXG4gICAgZWxzZSBpZiAoIWNhblN0YWNrKGZyb21Db29yZGluYXRlLCBjb29yZGluYXRlVG9DaGVjaywgZ2FtZVN0YXRlKSkge1xyXG4gICAgICBuZXh0TW92ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gRmluYWxseSBhIHBpZWNlIHdlIGNhbiBjYXB0dXJlXHJcbiAgICBlbHNlIHtcclxuICAgICAgbmV4dE1vdmUgPSBjb29yZGluYXRlVG9DaGVjaztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG5leHRNb3ZlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsaWRDYXB0dXJlcyhmcm9tQ29vcmRpbmF0ZSwgZ2FtZVN0YXRlKSB7XHJcbiAgcmV0dXJuIExpc3QoW1xyXG4gICAgZ2V0TmV4dFZhbGlkQ2FwdHVyZShmcm9tQ29vcmRpbmF0ZSwgXCJ3XCIsIGdhbWVTdGF0ZSksXHJcbiAgICBnZXROZXh0VmFsaWRDYXB0dXJlKGZyb21Db29yZGluYXRlLCBcImVcIiwgZ2FtZVN0YXRlKSxcclxuICAgIGdldE5leHRWYWxpZENhcHR1cmUoZnJvbUNvb3JkaW5hdGUsIFwibndcIiwgZ2FtZVN0YXRlKSxcclxuICAgIGdldE5leHRWYWxpZENhcHR1cmUoZnJvbUNvb3JkaW5hdGUsIFwibmVcIiwgZ2FtZVN0YXRlKSxcclxuICAgIGdldE5leHRWYWxpZENhcHR1cmUoZnJvbUNvb3JkaW5hdGUsIFwic3dcIiwgZ2FtZVN0YXRlKSxcclxuICAgIGdldE5leHRWYWxpZENhcHR1cmUoZnJvbUNvb3JkaW5hdGUsIFwic2VcIiwgZ2FtZVN0YXRlKVxyXG4gIF0pLmZpbHRlcihpc1ZhbGlkTW92ZSA9PiBpc1ZhbGlkTW92ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWxpZFN0YWNrcyhmcm9tQ29vcmRpbmF0ZSwgZ2FtZVN0YXRlKSB7XHJcbiAgcmV0dXJuIExpc3QoW1xyXG4gICAgZ2V0TmV4dFZhbGlkU3RhY2soZnJvbUNvb3JkaW5hdGUsIFwid1wiLCBnYW1lU3RhdGUpLFxyXG4gICAgZ2V0TmV4dFZhbGlkU3RhY2soZnJvbUNvb3JkaW5hdGUsIFwiZVwiLCBnYW1lU3RhdGUpLFxyXG4gICAgZ2V0TmV4dFZhbGlkU3RhY2soZnJvbUNvb3JkaW5hdGUsIFwibndcIiwgZ2FtZVN0YXRlKSxcclxuICAgIGdldE5leHRWYWxpZFN0YWNrKGZyb21Db29yZGluYXRlLCBcIm5lXCIsIGdhbWVTdGF0ZSksXHJcbiAgICBnZXROZXh0VmFsaWRTdGFjayhmcm9tQ29vcmRpbmF0ZSwgXCJzd1wiLCBnYW1lU3RhdGUpLFxyXG4gICAgZ2V0TmV4dFZhbGlkU3RhY2soZnJvbUNvb3JkaW5hdGUsIFwic2VcIiwgZ2FtZVN0YXRlKVxyXG4gIF0pLmZpbHRlcihpc1ZhbGlkTW92ZSA9PiBpc1ZhbGlkTW92ZSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEludmVydGVkVmFsaWRDYXB0dXJlcyh0b0Nvb3JkaW5hdGUsIGdhbWVTdGF0ZSkge1xyXG4gIHJldHVybiBMaXN0KFtcclxuICAgIGdldE5leHRJbnZlcnRlZFZhbGlkQ2FwdHVyZSh0b0Nvb3JkaW5hdGUsIFwid1wiLCBnYW1lU3RhdGUpLFxyXG4gICAgZ2V0TmV4dEludmVydGVkVmFsaWRDYXB0dXJlKHRvQ29vcmRpbmF0ZSwgXCJlXCIsIGdhbWVTdGF0ZSksXHJcbiAgICBnZXROZXh0SW52ZXJ0ZWRWYWxpZENhcHR1cmUodG9Db29yZGluYXRlLCBcIm53XCIsIGdhbWVTdGF0ZSksXHJcbiAgICBnZXROZXh0SW52ZXJ0ZWRWYWxpZENhcHR1cmUodG9Db29yZGluYXRlLCBcIm5lXCIsIGdhbWVTdGF0ZSksXHJcbiAgICBnZXROZXh0SW52ZXJ0ZWRWYWxpZENhcHR1cmUodG9Db29yZGluYXRlLCBcInN3XCIsIGdhbWVTdGF0ZSksXHJcbiAgICBnZXROZXh0SW52ZXJ0ZWRWYWxpZENhcHR1cmUodG9Db29yZGluYXRlLCBcInNlXCIsIGdhbWVTdGF0ZSlcclxuICBdKS5maWx0ZXIoaXNWYWxpZE1vdmUgPT4gaXNWYWxpZE1vdmUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROZXh0SW52ZXJ0ZWRWYWxpZENhcHR1cmUodG9Db29yZGluYXRlLCBkaXJlY3Rpb24sIGdhbWVTdGF0ZSkge1xyXG4gIGxldCBuZXh0TW92ZTtcclxuICBsZXQgY29vcmRpbmF0ZVRvQ2hlY2sgPSB0b0Nvb3JkaW5hdGU7XHJcbiAgd2hpbGUgKG5leHRNb3ZlID09PSB1bmRlZmluZWQpIHtcclxuICAgIGNvb3JkaW5hdGVUb0NoZWNrID0gbmV4dFBpZWNlW2RpcmVjdGlvbl0oY29vcmRpbmF0ZVRvQ2hlY2spO1xyXG5cclxuICAgIC8vIE5vdCBhIHNwYWNlIHRoYXQgd2UgY2FuIHBsYXkgb25cclxuICAgIGlmICghaXNQbGF5YWJsZVNwYWNlKGNvb3JkaW5hdGVUb0NoZWNrKSkge1xyXG4gICAgICBuZXh0TW92ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoaXMgc3BhY2UgaXMgZW1wdHkgc28gd2UgY2FuIGNvbnRpbnVlXHJcbiAgICBlbHNlIGlmIChpc1ZhbGlkRW1wdHlDb29yZGluYXRlKGNvb3JkaW5hdGVUb0NoZWNrLCBnYW1lU3RhdGUpKSB7XHJcbiAgICAgIG5leHRNb3ZlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpcnN0IHBpZWNlIHdlIGVuY291bnRlciBjYW4ndCBiZSBjYXB0dXJlZFxyXG4gICAgZWxzZSBpZiAoIWNhbkNhcHR1cmUoY29vcmRpbmF0ZVRvQ2hlY2ssIHRvQ29vcmRpbmF0ZSwgZ2FtZVN0YXRlKSkge1xyXG4gICAgICBuZXh0TW92ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gRmluYWxseSBhIHBpZWNlIHdlIGNhbiBjYXB0dXJlXHJcbiAgICBlbHNlIHtcclxuICAgICAgbmV4dE1vdmUgPSBjb29yZGluYXRlVG9DaGVjaztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG5leHRNb3ZlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmV4dFBpZWNlID0ge1xyXG4gIHc6IGdvV2VzdCxcclxuICBlOiBnb0Vhc3QsXHJcbiAgbnc6IGdvTm9ydGhXZXN0LFxyXG4gIG5lOiBnb05vcnRoRWFzdCxcclxuICBzdzogZ29Tb3V0aFdlc3QsXHJcbiAgc2U6IGdvU291dGhFYXN0XHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgREVCVUcsXHJcbiAgR0FNRV9TVEFURV9CT0FSRF9DQU5WQVMsXHJcbiAgUExBWUVSX1RXTyxcclxuICBUVVJOX1BIQVNFU1xyXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBkcmF3SW5pdGlhbEdyaWQgfSBmcm9tIFwiLi9jYWNoZWRCb2FyZFwiO1xyXG5pbXBvcnQge1xyXG4gIGRyYXdDb29yZGluYXRlcyxcclxuICBkcmF3R2FtZUJvYXJkU3RhdGUsXHJcbiAgZHJhd0dhbWVQaWVjZSxcclxuICByZW5kZXJNb3ZpbmdQaWVjZSxcclxuICByZW5kZXJJbml0aWFsaXppbmdCb2FyZFxyXG59IGZyb20gXCIuL3JlbmRlckhlbHBlcnNcIjtcclxuaW1wb3J0IHtcclxuICBnZXRCb2FyZENvb3JkaW5hdGVzRnJvbVBpeGVsQ29vcmRpbmF0ZXMsXHJcbiAgZ2V0UGl4ZWxDb29yZGluYXRlc0Zyb21Cb2FyZENvb3JkaW5hdGVzLFxyXG4gIHNldHVwQm9hcmRXaXRoUGllY2VzLFxyXG4gIHNldHVwQm9hcmRXaXRoUGllY2VzTm90UmFuZG9tLFxyXG4gIGdldFZhbGlkQ2FwdHVyZXMsXHJcbiAgZ2V0VmFsaWRTdGFja3NcclxufSBmcm9tIFwiLi9nYW1lQm9hcmRIZWxwZXJzXCI7XHJcbmltcG9ydCB7XHJcbiAgbW92aW5nUGllY2UsXHJcbiAgZ2FtZUJvYXJkU3RhdGUsXHJcbiAgc2V0TmV3Z2FtZUJvYXJkU3RhdGUsXHJcbiAgc2V0TW92aW5nUGllY2UsXHJcbiAgbmV4dFBoYXNlLFxyXG4gIGN1cnJlbnRUdXJuLFxyXG4gIHR1cm5QaGFzZVxyXG59IGZyb20gXCIuL2dhbWVTdGF0ZVwiO1xyXG5pbXBvcnQgeyBnZXRHYW1lU3RhdGVzVG9BbmFseXplLCBtaW5pbWF4LCBnZXRXaW5uZXIgfSBmcm9tIFwiLi9haVwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0UGl4ZWxDb29yZGluYXRlc0Zyb21Vc2VySW50ZXJhY3Rpb24oZXZlbnQpIHtcclxuICBjb25zdCB4ID0gZXZlbnQueCB8fCBldmVudC5vZmZzZXRYIHx8IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgY29uc3QgeSA9IGV2ZW50LnkgfHwgZXZlbnQub2Zmc2V0WSB8fCBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xyXG4gIHJldHVybiBbeCwgeV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQ3VycmVudFBsYXllclBpZWNlKGJvYXJkQ29vcmRpbmF0ZSkge1xyXG4gIHJldHVybiBnYW1lQm9hcmRTdGF0ZS5nZXRJbihbYm9hcmRDb29yZGluYXRlLCBcIm93bmVkQnlcIl0pID09PSBjdXJyZW50VHVybjtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2xpY2tQaWVjZShldmVudCkge1xyXG4gIGNvbnN0IFt4LCB5XSA9IGdldFBpeGVsQ29vcmRpbmF0ZXNGcm9tVXNlckludGVyYWN0aW9uKGV2ZW50KTtcclxuICBjb25zdCBib2FyZENvb3JkaW5hdGUgPSBnZXRCb2FyZENvb3JkaW5hdGVzRnJvbVBpeGVsQ29vcmRpbmF0ZXMoeCwgeSk7XHJcblxyXG4gIGlmICghaXNDdXJyZW50UGxheWVyUGllY2UoYm9hcmRDb29yZGluYXRlKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKGN1cnJlbnRUdXJuID09PSBQTEFZRVJfVFdPKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBzZXROZXdnYW1lQm9hcmRTdGF0ZShcclxuICAgIGdhbWVCb2FyZFN0YXRlLnNldEluKFtib2FyZENvb3JkaW5hdGUsIFwiaXNEcmFnZ2luZ1wiXSwgdHJ1ZSlcclxuICApO1xyXG4gIHNldE1vdmluZ1BpZWNlKGJvYXJkQ29vcmRpbmF0ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU1vdmVQaWVjZShldmVudCkge1xyXG4gIGlmICghbW92aW5nUGllY2UpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IFt4LCB5XSA9IGdldFBpeGVsQ29vcmRpbmF0ZXNGcm9tVXNlckludGVyYWN0aW9uKGV2ZW50KTtcclxuICBkcmF3R2FtZUJvYXJkU3RhdGUoKTtcclxuICBkcmF3R2FtZVBpZWNlKGdhbWVCb2FyZFN0YXRlLmdldChtb3ZpbmdQaWVjZSksIHgsIHkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVEcm9wUGllY2UoZXZlbnQpIHtcclxuICBpZiAoIW1vdmluZ1BpZWNlKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBbeCwgeV0gPSBnZXRQaXhlbENvb3JkaW5hdGVzRnJvbVVzZXJJbnRlcmFjdGlvbihldmVudCk7XHJcbiAgY29uc3QgdG9Db29yZGluYXRlcyA9IGdldEJvYXJkQ29vcmRpbmF0ZXNGcm9tUGl4ZWxDb29yZGluYXRlcyh4LCB5KTtcclxuXHJcbiAgc2V0TmV3Z2FtZUJvYXJkU3RhdGUoXHJcbiAgICBnYW1lQm9hcmRTdGF0ZS5zZXRJbihbbW92aW5nUGllY2UsIFwiaXNEcmFnZ2luZ1wiXSwgZmFsc2UpXHJcbiAgKTtcclxuXHJcbiAgaWYgKCFnYW1lQm9hcmRTdGF0ZS5nZXQodG9Db29yZGluYXRlcykpIHtcclxuICAgIHNldE1vdmluZ1BpZWNlKG51bGwpO1xyXG4gICAgZHJhd0dhbWVCb2FyZFN0YXRlKCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCB2YWxpZENhcHR1cmVzID0gZ2V0VmFsaWRDYXB0dXJlcyhtb3ZpbmdQaWVjZSwgZ2FtZUJvYXJkU3RhdGUpO1xyXG4gIGNvbnN0IHZhbGlkU3RhY2tzID0gZ2V0VmFsaWRTdGFja3MobW92aW5nUGllY2UsIGdhbWVCb2FyZFN0YXRlKTtcclxuICBjb25zdCBpc1ZhbGlkQ2FwdHVyZSA9IHZhbGlkQ2FwdHVyZXMuaW5jbHVkZXModG9Db29yZGluYXRlcyk7XHJcbiAgY29uc3QgaXNWYWxpZFN0YWNrID0gdmFsaWRTdGFja3MuaW5jbHVkZXModG9Db29yZGluYXRlcyk7XHJcblxyXG4gIGlmICh0dXJuUGhhc2UgPT09IFRVUk5fUEhBU0VTLkNBUFRVUkUgJiYgaXNWYWxpZENhcHR1cmUpIHtcclxuICAgIGNhcHR1cmVQaWVjZShtb3ZpbmdQaWVjZSwgdG9Db29yZGluYXRlcyk7XHJcbiAgfSBlbHNlIGlmICh0dXJuUGhhc2UgPT09IFRVUk5fUEhBU0VTLlNUQUNLX09SX0NBUFRVUkUpIHtcclxuICAgIGlmIChpc1ZhbGlkQ2FwdHVyZSkge1xyXG4gICAgICBjYXB0dXJlUGllY2UobW92aW5nUGllY2UsIHRvQ29vcmRpbmF0ZXMpO1xyXG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkU3RhY2spIHtcclxuICAgICAgc3RhY2tQaWVjZShtb3ZpbmdQaWVjZSwgdG9Db29yZGluYXRlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRNb3ZpbmdQaWVjZShudWxsKTtcclxuICBkcmF3R2FtZUJvYXJkU3RhdGUoKTtcclxuXHJcbiAgaWYgKHR1cm5QaGFzZSA9PT0gVFVSTl9QSEFTRVMuQ0FQVFVSRSAmJiBjdXJyZW50VHVybiA9PT0gUExBWUVSX1RXTykge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nU3Bpbm5lclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBtb3ZlQUkoKSwgNTApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FwdHVyZVBpZWNlKGZyb21Db29yZGluYXRlcywgdG9Db29yZGluYXRlcykge1xyXG4gIGNvbnN0IGZyb21QaWVjZSA9IGdhbWVCb2FyZFN0YXRlLmdldChmcm9tQ29vcmRpbmF0ZXMpO1xyXG4gIHNldE5ld2dhbWVCb2FyZFN0YXRlKFxyXG4gICAgZ2FtZUJvYXJkU3RhdGUuc2V0KGZyb21Db29yZGluYXRlcywgZmFsc2UpLnNldCh0b0Nvb3JkaW5hdGVzLCBmcm9tUGllY2UpXHJcbiAgKTtcclxuICBjaGVja0dhbWVTdGF0ZUFuZFN0YXJ0TmV4dFR1cm4oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhY2tQaWVjZShmcm9tQ29vcmRpbmF0ZXMsIHRvQ29vcmRpbmF0ZXMpIHtcclxuICBjb25zdCBmcm9tUGllY2UgPSBnYW1lQm9hcmRTdGF0ZS5nZXQoZnJvbUNvb3JkaW5hdGVzKTtcclxuICBjb25zdCB0b1BpZWNlID0gZ2FtZUJvYXJkU3RhdGUuZ2V0KHRvQ29vcmRpbmF0ZXMpO1xyXG5cclxuICBzZXROZXdnYW1lQm9hcmRTdGF0ZShcclxuICAgIGdhbWVCb2FyZFN0YXRlXHJcbiAgICAgIC5zZXQoZnJvbUNvb3JkaW5hdGVzLCBmYWxzZSlcclxuICAgICAgLnNldCh0b0Nvb3JkaW5hdGVzLCBmcm9tUGllY2UpXHJcbiAgICAgIC5zZXRJbihcclxuICAgICAgICBbdG9Db29yZGluYXRlcywgXCJzdGFja1NpemVcIl0sXHJcbiAgICAgICAgZnJvbVBpZWNlLnN0YWNrU2l6ZSArIHRvUGllY2Uuc3RhY2tTaXplXHJcbiAgICAgIClcclxuICApO1xyXG4gIGNoZWNrR2FtZVN0YXRlQW5kU3RhcnROZXh0VHVybigpO1xyXG59XHJcblxyXG53aW5kb3cuZ2V0V2lubmVyID0gZ2V0V2lubmVyO1xyXG53aW5kb3cuZ2FtZUJvYXJkU3RhdGUgPSBnYW1lQm9hcmRTdGF0ZTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrR2FtZVN0YXRlQW5kU3RhcnROZXh0VHVybigpIHtcclxuICBuZXh0UGhhc2UoKTtcclxuXHJcbiAgY29uc3Qgd2lubmVyID0gZ2V0V2lubmVyKGdhbWVCb2FyZFN0YXRlKTtcclxuICBsZXQgbWVzc2FnZSA9IHdpbm5lciA9PT0gUExBWUVSX1RXTyA/IFwiWW91IGxvc3QuXCIgOiBcIllvdSB3b24hXCI7XHJcbiAgaWYgKHdpbm5lcikge1xyXG4gICAgYWxlcnQoYCR7bWVzc2FnZX1gKTtcclxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW92ZUFJKCkge1xyXG4gIGlmIChjdXJyZW50VHVybiAhPT0gUExBWUVSX1RXTykge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYmVzdE1vdmUgPSBnZXRCZXN0TW92ZShnYW1lQm9hcmRTdGF0ZSwgUExBWUVSX1RXTyk7XHJcblxyXG4gIC8vIFNpbmdsZSBtb3ZlIG9ubHlcclxuICBpZiAoYmVzdE1vdmUuaW5kZXhPZihcIj0+XCIpID09PSAtMSkge1xyXG4gICAgY29uc3QgW2ZpcnN0RnJvbUNvb3JkaW5hdGUsIGZpcnN0VG9Db29yZGluYXRlXSA9IGJlc3RNb3ZlLnNwbGl0KFwiLT5cIik7XHJcbiAgICBjb25zdCBmcm9tUGllY2UgPSBnYW1lQm9hcmRTdGF0ZS5nZXQoZmlyc3RGcm9tQ29vcmRpbmF0ZSk7XHJcbiAgICBzZXROZXdnYW1lQm9hcmRTdGF0ZShnYW1lQm9hcmRTdGF0ZS5zZXQoZmlyc3RGcm9tQ29vcmRpbmF0ZSwgZmFsc2UpKTtcclxuICAgIGNvbnN0IGZyb21GaXJzdFBpeGVsQ29vZGluYXRlID0gZ2V0UGl4ZWxDb29yZGluYXRlc0Zyb21Cb2FyZENvb3JkaW5hdGVzKFxyXG4gICAgICBmaXJzdEZyb21Db29yZGluYXRlXHJcbiAgICApO1xyXG4gICAgY29uc3QgdG9GaXJzdFBpeGVsQ29vcmRpbmF0ZSA9IGdldFBpeGVsQ29vcmRpbmF0ZXNGcm9tQm9hcmRDb29yZGluYXRlcyhcclxuICAgICAgZmlyc3RUb0Nvb3JkaW5hdGVcclxuICAgICk7XHJcblxyXG4gICAgREVCVUcgJiZcclxuICAgICAgY29uc29sZS5sb2coYE1PVklORyBGUk9NICR7Zmlyc3RGcm9tQ29vcmRpbmF0ZX0gVE8gJHtmaXJzdFRvQ29vcmRpbmF0ZX1gKTtcclxuICAgIHJlbmRlck1vdmluZ1BpZWNlKFxyXG4gICAgICBmcm9tUGllY2UsXHJcbiAgICAgIGZyb21GaXJzdFBpeGVsQ29vZGluYXRlLFxyXG4gICAgICB0b0ZpcnN0UGl4ZWxDb29yZGluYXRlLFxyXG4gICAgICAyMDAwLFxyXG4gICAgICBEYXRlLm5vdygpLFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgc2V0TmV3Z2FtZUJvYXJkU3RhdGUoZ2FtZUJvYXJkU3RhdGUuc2V0KGZpcnN0VG9Db29yZGluYXRlLCBmcm9tUGllY2UpKTtcclxuXHJcbiAgICAgICAgY2hlY2tHYW1lU3RhdGVBbmRTdGFydE5leHRUdXJuKCk7XHJcbiAgICAgICAgY2hlY2tHYW1lU3RhdGVBbmRTdGFydE5leHRUdXJuKCk7XHJcbiAgICAgICAgZHJhd0dhbWVCb2FyZFN0YXRlKCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBbZmlyc3RNb3ZlLCBzZWNvbmRNb3ZlXSA9IGJlc3RNb3ZlLnNwbGl0KFwiPT5cIik7XHJcbiAgY29uc3QgW2ZpcnN0RnJvbUNvb3JkaW5hdGUsIGZpcnN0VG9Db29yZGluYXRlXSA9IGZpcnN0TW92ZS5zcGxpdChcIi0+XCIpO1xyXG4gIGNvbnN0IFtzZWNvbmRGcm9tQ29vcmRpbmF0ZSwgc2Vjb25kVG9Db29yZGluYXRlXSA9IHNlY29uZE1vdmUuc3BsaXQoXCItPlwiKTtcclxuICBjb25zdCBmcm9tUGllY2UgPSBnYW1lQm9hcmRTdGF0ZS5nZXQoZmlyc3RGcm9tQ29vcmRpbmF0ZSk7XHJcblxyXG4gIC8vIGRvbnQgcmVuZGVyIG1vdmluZyBwaWVjZSBpbiB0aGUgc2FtZSBzcG90Li4uXHJcbiAgc2V0TmV3Z2FtZUJvYXJkU3RhdGUoZ2FtZUJvYXJkU3RhdGUuc2V0KGZpcnN0RnJvbUNvb3JkaW5hdGUsIGZhbHNlKSk7XHJcbiAgY29uc3QgZnJvbUZpcnN0UGl4ZWxDb29kaW5hdGUgPSBnZXRQaXhlbENvb3JkaW5hdGVzRnJvbUJvYXJkQ29vcmRpbmF0ZXMoXHJcbiAgICBmaXJzdEZyb21Db29yZGluYXRlXHJcbiAgKTtcclxuICBjb25zdCB0b0ZpcnN0UGl4ZWxDb29yZGluYXRlID0gZ2V0UGl4ZWxDb29yZGluYXRlc0Zyb21Cb2FyZENvb3JkaW5hdGVzKFxyXG4gICAgZmlyc3RUb0Nvb3JkaW5hdGVcclxuICApO1xyXG5cclxuICBjb25zdCBmcm9tU2Vjb25kUGl4ZWxDb29kaW5hdGUgPSBnZXRQaXhlbENvb3JkaW5hdGVzRnJvbUJvYXJkQ29vcmRpbmF0ZXMoXHJcbiAgICBzZWNvbmRGcm9tQ29vcmRpbmF0ZVxyXG4gICk7XHJcbiAgY29uc3QgdG9TZWNvbmRQaXhlbENvb3JkaW5hdGUgPSBnZXRQaXhlbENvb3JkaW5hdGVzRnJvbUJvYXJkQ29vcmRpbmF0ZXMoXHJcbiAgICBzZWNvbmRUb0Nvb3JkaW5hdGVcclxuICApO1xyXG5cclxuICBERUJVRyAmJlxyXG4gICAgY29uc29sZS5sb2coYE1PVklORyBGUk9NICR7Zmlyc3RGcm9tQ29vcmRpbmF0ZX0gVE8gJHtmaXJzdFRvQ29vcmRpbmF0ZX1gKTtcclxuXHJcbiAgcmVuZGVyTW92aW5nUGllY2UoXHJcbiAgICBmcm9tUGllY2UsXHJcbiAgICBmcm9tRmlyc3RQaXhlbENvb2RpbmF0ZSxcclxuICAgIHRvRmlyc3RQaXhlbENvb3JkaW5hdGUsXHJcbiAgICAyMDAwLFxyXG4gICAgRGF0ZS5ub3coKSxcclxuICAgICgpID0+IHtcclxuICAgICAgc2V0TmV3Z2FtZUJvYXJkU3RhdGUoZ2FtZUJvYXJkU3RhdGUuc2V0KGZpcnN0VG9Db29yZGluYXRlLCBmcm9tUGllY2UpKTtcclxuXHJcbiAgICAgIG5leHRQaGFzZSgpO1xyXG5cclxuICAgICAgY29uc3Qgc2Vjb25kRnJvbVBpZWNlID0gZ2FtZUJvYXJkU3RhdGUuZ2V0KHNlY29uZEZyb21Db29yZGluYXRlKTtcclxuICAgICAgc2V0TmV3Z2FtZUJvYXJkU3RhdGUoZ2FtZUJvYXJkU3RhdGUuc2V0KHNlY29uZEZyb21Db29yZGluYXRlLCBmYWxzZSkpO1xyXG5cclxuICAgICAgREVCVUcgJiZcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgIGBNT1ZJTkcgRlJPTSAke3NlY29uZEZyb21Db29yZGluYXRlfSBUTyAke3NlY29uZFRvQ29vcmRpbmF0ZX1gXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgIHJlbmRlck1vdmluZ1BpZWNlKFxyXG4gICAgICAgIHNlY29uZEZyb21QaWVjZSxcclxuICAgICAgICBmcm9tU2Vjb25kUGl4ZWxDb29kaW5hdGUsXHJcbiAgICAgICAgdG9TZWNvbmRQaXhlbENvb3JkaW5hdGUsXHJcbiAgICAgICAgMjAwMCxcclxuICAgICAgICBEYXRlLm5vdygpLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRvUGllY2UgPSBnYW1lQm9hcmRTdGF0ZS5nZXQoc2Vjb25kVG9Db29yZGluYXRlKTtcclxuXHJcbiAgICAgICAgICBpZiAoc2Vjb25kRnJvbVBpZWNlLm93bmVkQnkgPT09IHRvUGllY2Uub3duZWRCeSkge1xyXG4gICAgICAgICAgICBzZXROZXdnYW1lQm9hcmRTdGF0ZShcclxuICAgICAgICAgICAgICBnYW1lQm9hcmRTdGF0ZVxyXG4gICAgICAgICAgICAgICAgLnNldChzZWNvbmRUb0Nvb3JkaW5hdGUsIHNlY29uZEZyb21QaWVjZSlcclxuICAgICAgICAgICAgICAgIC5zZXRJbihcclxuICAgICAgICAgICAgICAgICAgW3NlY29uZFRvQ29vcmRpbmF0ZSwgXCJzdGFja1NpemVcIl0sXHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZEZyb21QaWVjZS5zdGFja1NpemUgKyB0b1BpZWNlLnN0YWNrU2l6ZVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0TmV3Z2FtZUJvYXJkU3RhdGUoXHJcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3RhdGUuc2V0KHNlY29uZFRvQ29vcmRpbmF0ZSwgc2Vjb25kRnJvbVBpZWNlKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNoZWNrR2FtZVN0YXRlQW5kU3RhcnROZXh0VHVybigpO1xyXG4gICAgICAgICAgZHJhd0dhbWVCb2FyZFN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJlc3RNb3ZlKGdhbWVTdGF0ZSwgdHVybikge1xyXG4gIERFQlVHICYmIGNvbnNvbGUudGltZShcImFsbCBnYW1lIHN0YXRlc1wiKTtcclxuXHJcbiAgY29uc3QgYWxsUG9zc2libGVTdGF0ZXNBZnRlclR1cm4gPSBnZXRHYW1lU3RhdGVzVG9BbmFseXplKGdhbWVTdGF0ZSwgdHVybik7XHJcblxyXG4gIGxldCBkZXB0aCA9IDE7XHJcblxyXG4gIGlmIChhbGxQb3NzaWJsZVN0YXRlc0FmdGVyVHVybi5zaXplIDwgNTAwKSB7XHJcbiAgICBkZXB0aCA9IDI7XHJcbiAgfVxyXG5cclxuICBpZiAoYWxsUG9zc2libGVTdGF0ZXNBZnRlclR1cm4uc2l6ZSA8IDE1MCkge1xyXG4gICAgZGVwdGggPSAzO1xyXG4gIH1cclxuXHJcbiAgaWYgKGFsbFBvc3NpYmxlU3RhdGVzQWZ0ZXJUdXJuLnNpemUgPCAyMCkge1xyXG4gICAgZGVwdGggPSA0O1xyXG4gIH1cclxuXHJcbiAgREVCVUcgJiYgY29uc29sZS50aW1lRW5kKFwiYWxsIGdhbWUgc3RhdGVzXCIpO1xyXG4gIERFQlVHICYmXHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgYEFMTCBQT1NTSUJMRSBHQU1FIFNUQVRFUyBBVCBERVBUSCAke2RlcHRofTogJHtcclxuICAgICAgICBhbGxQb3NzaWJsZVN0YXRlc0FmdGVyVHVybi5zaXplXHJcbiAgICAgIH1gXHJcbiAgICApO1xyXG5cclxuICBERUJVRyAmJiBjb25zb2xlLnRpbWUoXCJnZXQgc2NvcmVzXCIpO1xyXG5cclxuICBjb25zdCBtaW5pbWF4UmVzdWx0ID0gbWluaW1heChnYW1lU3RhdGUsIFBMQVlFUl9UV08sIGRlcHRoKTtcclxuXHJcbiAgY29uc3QgYmVzdE1vdmUgPSBtaW5pbWF4UmVzdWx0WzFdO1xyXG4gIERFQlVHICYmIGNvbnNvbGUudGltZUVuZChcImdldCBzY29yZXNcIik7XHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ1NwaW5uZXJcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICByZXR1cm4gYmVzdE1vdmU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0R2FtZShTRVRVUF9TVFlMRSkge1xyXG4gIGNvbnN0IHBpZWNlc1RvU2V0dXAgPVxyXG4gICAgU0VUVVBfU1RZTEUgIT09IFwiUkFORE9NXCJcclxuICAgICAgPyBzZXR1cEJvYXJkV2l0aFBpZWNlc05vdFJhbmRvbSgpXHJcbiAgICAgIDogc2V0dXBCb2FyZFdpdGhQaWVjZXMoKTtcclxuICBkcmF3SW5pdGlhbEdyaWQoKTtcclxuICByZW5kZXJJbml0aWFsaXppbmdCb2FyZChwaWVjZXNUb1NldHVwLCAoKSA9PiB7XHJcbiAgICBkcmF3R2FtZUJvYXJkU3RhdGUoKTtcclxuICAgIGRyYXdDb29yZGluYXRlcygpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBpc01vYmlsZSA9IFwib250b3VjaHN0YXJ0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5jb25zdCBtb3VzZVVwRXZlbnQgPSBpc01vYmlsZSA/IFwidG91Y2hlbmRcIiA6IFwibW91c2V1cFwiO1xyXG5jb25zdCBtb3VzZURvd25FdmVudCA9IGlzTW9iaWxlID8gXCJ0b3VjaHN0YXJ0XCIgOiBcIm1vdXNlZG93blwiO1xyXG5jb25zdCBtb3VzZU1vdmVFdmVudCA9IGlzTW9iaWxlID8gXCJ0b3VjaG1vdmVcIiA6IFwibW91c2Vtb3ZlXCI7XHJcblxyXG5HQU1FX1NUQVRFX0JPQVJEX0NBTlZBUy5hZGRFdmVudExpc3RlbmVyKG1vdXNlRG93bkV2ZW50LCBoYW5kbGVDbGlja1BpZWNlKTtcclxuR0FNRV9TVEFURV9CT0FSRF9DQU5WQVMuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZU1vdmVFdmVudCwgaGFuZGxlTW92ZVBpZWNlKTtcclxuR0FNRV9TVEFURV9CT0FSRF9DQU5WQVMuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZVVwRXZlbnQsIGhhbmRsZURyb3BQaWVjZSk7XHJcbiIsImltcG9ydCB7XHJcbiAgVFJJQU5HTEVfSEVJR0hULFxyXG4gIFRPVFQsXHJcbiAgUExBWUVSX09ORSxcclxuICBQTEFZRVJfVFdPLFxyXG4gIFRaQUFSLFxyXG4gIFRaQVJSQSxcclxuICBQSVhFTF9SQVRJTyxcclxuICBHYW1lUGllY2VSZWNvcmRcclxufSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IGlzTW9iaWxlID0gXCJvbnRvdWNoc3RhcnRcIiBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG5leHBvcnQgY29uc3QgUExBWUVSX09ORV9UT1RUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuZXhwb3J0IGNvbnN0IFBMQVlFUl9PTkVfVFpBUlJBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuZXhwb3J0IGNvbnN0IFBMQVlFUl9PTkVfVFpBQVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG5leHBvcnQgY29uc3QgUExBWUVSX1RXT19UT1RUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuZXhwb3J0IGNvbnN0IFBMQVlFUl9UV09fVFpBUlJBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuZXhwb3J0IGNvbnN0IFBMQVlFUl9UV09fVFpBQVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdBTUVfUElFQ0VfUkFESVVTID0gaXNNb2JpbGUgPyBUUklBTkdMRV9IRUlHSFQgLyAxLjc1IDogVFJJQU5HTEVfSEVJR0hUIC8gMi41O1xyXG5leHBvcnQgY29uc3QgQ0FOVkFTX1NJREVfTEVOR1RIID0gR0FNRV9QSUVDRV9SQURJVVMgKiBQSVhFTF9SQVRJTyAqIDI7XHJcbmNvbnN0IENBTlZBU19TVFlMRV9MRU5HVEggPSBgJHtHQU1FX1BJRUNFX1JBRElVUyAqIDJ9cHhgO1xyXG5cclxuUExBWUVSX09ORV9UT1RULndpZHRoID0gQ0FOVkFTX1NJREVfTEVOR1RIO1xyXG5QTEFZRVJfT05FX1RPVFQuaGVpZ2h0ID0gQ0FOVkFTX1NJREVfTEVOR1RIO1xyXG5QTEFZRVJfT05FX1RPVFQuc3R5bGUud2lkdGggPSBDQU5WQVNfU1RZTEVfTEVOR1RIO1xyXG5QTEFZRVJfT05FX1RPVFQuc3R5bGUuaGVpZ2h0ID0gQ0FOVkFTX1NUWUxFX0xFTkdUSDtcclxuXHJcblBMQVlFUl9PTkVfVFpBUlJBLndpZHRoID0gQ0FOVkFTX1NJREVfTEVOR1RIO1xyXG5QTEFZRVJfT05FX1RaQVJSQS5oZWlnaHQgPSBDQU5WQVNfU0lERV9MRU5HVEg7XHJcblBMQVlFUl9PTkVfVFpBUlJBLnN0eWxlLndpZHRoID0gQ0FOVkFTX1NUWUxFX0xFTkdUSDtcclxuUExBWUVSX09ORV9UWkFSUkEuc3R5bGUuaGVpZ2h0ID0gQ0FOVkFTX1NUWUxFX0xFTkdUSDtcclxuXHJcblBMQVlFUl9PTkVfVFpBQVIud2lkdGggPSBDQU5WQVNfU0lERV9MRU5HVEg7XHJcblBMQVlFUl9PTkVfVFpBQVIuaGVpZ2h0ID0gQ0FOVkFTX1NJREVfTEVOR1RIO1xyXG5QTEFZRVJfT05FX1RaQUFSLnN0eWxlLndpZHRoID0gQ0FOVkFTX1NUWUxFX0xFTkdUSDtcclxuUExBWUVSX09ORV9UWkFBUi5zdHlsZS5oZWlnaHQgPSBDQU5WQVNfU1RZTEVfTEVOR1RIO1xyXG5cclxuUExBWUVSX1RXT19UWkFSUkEud2lkdGggPSBDQU5WQVNfU0lERV9MRU5HVEg7XHJcblBMQVlFUl9UV09fVFpBUlJBLmhlaWdodCA9IENBTlZBU19TSURFX0xFTkdUSDtcclxuUExBWUVSX1RXT19UWkFSUkEuc3R5bGUud2lkdGggPSBDQU5WQVNfU1RZTEVfTEVOR1RIO1xyXG5QTEFZRVJfVFdPX1RaQVJSQS5zdHlsZS5oZWlnaHQgPSBDQU5WQVNfU1RZTEVfTEVOR1RIO1xyXG5cclxuUExBWUVSX1RXT19UT1RULndpZHRoID0gQ0FOVkFTX1NJREVfTEVOR1RIO1xyXG5QTEFZRVJfVFdPX1RPVFQuaGVpZ2h0ID0gQ0FOVkFTX1NJREVfTEVOR1RIO1xyXG5QTEFZRVJfVFdPX1RPVFQuc3R5bGUud2lkdGggPSBDQU5WQVNfU1RZTEVfTEVOR1RIO1xyXG5QTEFZRVJfVFdPX1RPVFQuc3R5bGUuaGVpZ2h0ID0gQ0FOVkFTX1NUWUxFX0xFTkdUSDtcclxuXHJcblBMQVlFUl9UV09fVFpBQVIud2lkdGggPSBDQU5WQVNfU0lERV9MRU5HVEg7XHJcblBMQVlFUl9UV09fVFpBQVIuaGVpZ2h0ID0gQ0FOVkFTX1NJREVfTEVOR1RIO1xyXG5QTEFZRVJfVFdPX1RaQUFSLnN0eWxlLndpZHRoID0gQ0FOVkFTX1NUWUxFX0xFTkdUSDtcclxuUExBWUVSX1RXT19UWkFBUi5zdHlsZS5oZWlnaHQgPSBDQU5WQVNfU1RZTEVfTEVOR1RIO1xyXG5cclxuUExBWUVSX09ORV9UT1RULmdldENvbnRleHQoXCIyZFwiKS5zZXRUcmFuc2Zvcm0oXHJcbiAgUElYRUxfUkFUSU8sXHJcbiAgMCxcclxuICAwLFxyXG4gIFBJWEVMX1JBVElPLFxyXG4gIDAsXHJcbiAgMFxyXG4pO1xyXG5QTEFZRVJfT05FX1RaQVJSQS5nZXRDb250ZXh0KFwiMmRcIikuc2V0VHJhbnNmb3JtKFxyXG4gIFBJWEVMX1JBVElPLFxyXG4gIDAsXHJcbiAgMCxcclxuICBQSVhFTF9SQVRJTyxcclxuICAwLFxyXG4gIDBcclxuKTtcclxuUExBWUVSX09ORV9UWkFBUi5nZXRDb250ZXh0KFwiMmRcIikuc2V0VHJhbnNmb3JtKFxyXG4gIFBJWEVMX1JBVElPLFxyXG4gIDAsXHJcbiAgMCxcclxuICBQSVhFTF9SQVRJTyxcclxuICAwLFxyXG4gIDBcclxuKTtcclxuXHJcblBMQVlFUl9UV09fVE9UVC5nZXRDb250ZXh0KFwiMmRcIikuc2V0VHJhbnNmb3JtKFxyXG4gIFBJWEVMX1JBVElPLFxyXG4gIDAsXHJcbiAgMCxcclxuICBQSVhFTF9SQVRJTyxcclxuICAwLFxyXG4gIDBcclxuKTtcclxuUExBWUVSX1RXT19UWkFSUkEuZ2V0Q29udGV4dChcIjJkXCIpLnNldFRyYW5zZm9ybShcclxuICBQSVhFTF9SQVRJTyxcclxuICAwLFxyXG4gIDAsXHJcbiAgUElYRUxfUkFUSU8sXHJcbiAgMCxcclxuICAwXHJcbik7XHJcblBMQVlFUl9UV09fVFpBQVIuZ2V0Q29udGV4dChcIjJkXCIpLnNldFRyYW5zZm9ybShcclxuICBQSVhFTF9SQVRJTyxcclxuICAwLFxyXG4gIDAsXHJcbiAgUElYRUxfUkFUSU8sXHJcbiAgMCxcclxuICAwXHJcbik7XHJcblxyXG5jb25zdCBwbGF5ZXJPbmVUb3R0ID0gbmV3IEdhbWVQaWVjZVJlY29yZCh7XHJcbiAgdHlwZTogVE9UVCxcclxuICBvd25lZEJ5OiBQTEFZRVJfT05FXHJcbn0pO1xyXG5jb25zdCBwbGF5ZXJPbmVUemFycmEgPSBuZXcgR2FtZVBpZWNlUmVjb3JkKHtcclxuICB0eXBlOiBUWkFSUkEsXHJcbiAgb3duZWRCeTogUExBWUVSX09ORVxyXG59KTtcclxuY29uc3QgcGxheWVyT25lVHphYXIgPSBuZXcgR2FtZVBpZWNlUmVjb3JkKHtcclxuICB0eXBlOiBUWkFBUixcclxuICBvd25lZEJ5OiBQTEFZRVJfT05FXHJcbn0pO1xyXG5cclxuY29uc3QgcGxheWVyVHdvVG90dCA9IG5ldyBHYW1lUGllY2VSZWNvcmQoe1xyXG4gIHR5cGU6IFRPVFQsXHJcbiAgb3duZWRCeTogUExBWUVSX1RXT1xyXG59KTtcclxuY29uc3QgcGxheWVyVHdvVHphcnJhID0gbmV3IEdhbWVQaWVjZVJlY29yZCh7XHJcbiAgdHlwZTogVFpBUlJBLFxyXG4gIG93bmVkQnk6IFBMQVlFUl9UV09cclxufSk7XHJcbmNvbnN0IHBsYXllclR3b1R6YWFyID0gbmV3IEdhbWVQaWVjZVJlY29yZCh7XHJcbiAgdHlwZTogVFpBQVIsXHJcbiAgb3duZWRCeTogUExBWUVSX1RXT1xyXG59KTtcclxuXHJcbmNvbnN0IGNpcmNsZVJhZGl1cyA9IEdBTUVfUElFQ0VfUkFESVVTO1xyXG5jb25zdCBzbWFsbGVyQ2lyY2xlUmFkaXVzID0gR0FNRV9QSUVDRV9SQURJVVMgLyAyO1xyXG5cclxuY29uc3QgQ0VOVEVSX0NPTE9SID0gXCIjRkREODM1XCI7XHJcbmNvbnN0IFBMQVlFUl9PTkVfQ09MT1JfQkcgPSBcIiMxRTg4RTVcIjtcclxuY29uc3QgUExBWUVSX1RXT19DT0xPUl9CRyA9IFwiIzIxMjEyMVwiO1xyXG5cclxuZnVuY3Rpb24gZHJhd1N0YXIoY3gsIGN5LCBzcGlrZXMsIG91dGVyUmFkaXVzLCBpbm5lclJhZGl1cywgY3R4LCBjZW50ZXJDb2xvcikge1xyXG4gIHZhciByb3QgPSBNYXRoLlBJIC8gMiAqIDM7XHJcbiAgdmFyIHggPSBjeDtcclxuICB2YXIgeSA9IGN5O1xyXG4gIHZhciBzdGVwID0gTWF0aC5QSSAvIHNwaWtlcztcclxuXHJcbiAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gIGN0eC5tb3ZlVG8oY3gsIGN5IC0gb3V0ZXJSYWRpdXMpXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGlrZXM7IGkrKykge1xyXG4gICAgeCA9IGN4ICsgTWF0aC5jb3Mocm90KSAqIG91dGVyUmFkaXVzO1xyXG4gICAgeSA9IGN5ICsgTWF0aC5zaW4ocm90KSAqIG91dGVyUmFkaXVzO1xyXG4gICAgY3R4LmxpbmVUbyh4LCB5KVxyXG4gICAgcm90ICs9IHN0ZXBcclxuXHJcbiAgICB4ID0gY3ggKyBNYXRoLmNvcyhyb3QpICogaW5uZXJSYWRpdXM7XHJcbiAgICB5ID0gY3kgKyBNYXRoLnNpbihyb3QpICogaW5uZXJSYWRpdXM7XHJcbiAgICBjdHgubGluZVRvKHgsIHkpXHJcbiAgICByb3QgKz0gc3RlcFxyXG4gIH1cclxuICBjdHgubGluZVRvKGN4LCBjeSAtIG91dGVyUmFkaXVzKTtcclxuICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IDM7XHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gJyNmZmYnO1xyXG4gIGN0eC5zdHJva2UoKTtcclxuICBjdHguZmlsbFN0eWxlID0gY2VudGVyQ29sb3I7XHJcbiAgY3R4LmZpbGwoKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRyYXdHYW1lUGllY2UoZ2FtZVBpZWNlLCBjYW52YXMpIHtcclxuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICBpZiAoZ2FtZVBpZWNlLm93bmVkQnkgPT09IFBMQVlFUl9PTkUpIHtcclxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gUExBWUVSX09ORV9DT0xPUl9CRztcclxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICBjb250ZXh0LmFyYyhjaXJjbGVSYWRpdXMsIGNpcmNsZVJhZGl1cywgY2lyY2xlUmFkaXVzIC0gMiwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgY29udGV4dC5maWxsKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gUExBWUVSX1RXT19DT0xPUl9CRztcclxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICBjb250ZXh0LmFyYyhjaXJjbGVSYWRpdXMsIGNpcmNsZVJhZGl1cywgY2lyY2xlUmFkaXVzIC0gMiwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgY29udGV4dC5maWxsKCk7XHJcbiAgfVxyXG5cclxuICBpZiAoZ2FtZVBpZWNlLnR5cGUgPT09IFRaQUFSKSB7XHJcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IENFTlRFUl9DT0xPUjtcclxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICBkcmF3U3RhcihjaXJjbGVSYWRpdXMsIGNpcmNsZVJhZGl1cywgNCwgY2lyY2xlUmFkaXVzIC8gMiwgY2lyY2xlUmFkaXVzIC8gNCwgY29udGV4dCwgQ0VOVEVSX0NPTE9SKTtcclxuXHJcbiAgICBjb250ZXh0LmZpbGwoKTtcclxuICB9IGVsc2UgaWYgKGdhbWVQaWVjZS50eXBlID09PSBUWkFSUkEpIHtcclxuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBDRU5URVJfQ09MT1I7XHJcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDM7XHJcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgY29udGV4dC5hcmMoXHJcbiAgICAgIGNpcmNsZVJhZGl1cyxcclxuICAgICAgY2lyY2xlUmFkaXVzLFxyXG4gICAgICBzbWFsbGVyQ2lyY2xlUmFkaXVzLFxyXG4gICAgICAwLFxyXG4gICAgICAyICogTWF0aC5QSVxyXG4gICAgKTtcclxuICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5kcmF3R2FtZVBpZWNlKHBsYXllck9uZVRvdHQsIFBMQVlFUl9PTkVfVE9UVCk7XHJcbmRyYXdHYW1lUGllY2UocGxheWVyT25lVHphcnJhLCBQTEFZRVJfT05FX1RaQVJSQSk7XHJcbmRyYXdHYW1lUGllY2UocGxheWVyT25lVHphYXIsIFBMQVlFUl9PTkVfVFpBQVIpO1xyXG5kcmF3R2FtZVBpZWNlKHBsYXllclR3b1RvdHQsIFBMQVlFUl9UV09fVE9UVCk7XHJcbmRyYXdHYW1lUGllY2UocGxheWVyVHdvVHphcnJhLCBQTEFZRVJfVFdPX1RaQVJSQSk7XHJcbmRyYXdHYW1lUGllY2UocGxheWVyVHdvVHphYXIsIFBMQVlFUl9UV09fVFpBQVIpO1xyXG4iLCJpbXBvcnQgeyBMaXN0LCBNYXAgfSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCB7IFBMQVlFUl9PTkUsIFBMQVlFUl9UV08sIFRVUk5fUEhBU0VTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgbGV0IG1vdmluZ1BpZWNlID0gbnVsbDtcclxuZXhwb3J0IGxldCBnYW1lQm9hcmRTdGF0ZSA9IE1hcCgpO1xyXG5leHBvcnQgbGV0IGlzVmVyeUZpcnN0VHVybiA9IHRydWU7XHJcbmV4cG9ydCBsZXQgY3VycmVudFR1cm4gPSBQTEFZRVJfT05FO1xyXG5leHBvcnQgbGV0IHR1cm5QaGFzZSA9IFRVUk5fUEhBU0VTLkNBUFRVUkU7XHJcbmV4cG9ydCBsZXQgbnVtYmVyT2ZUdXJuc0ludG9HYW1lID0gMDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROZXdnYW1lQm9hcmRTdGF0ZShuZXdTdGF0ZSkge1xyXG4gIGdhbWVCb2FyZFN0YXRlID0gbmV3U3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRNb3ZpbmdQaWVjZShjb29yZGluYXRlKSB7XHJcbiAgbW92aW5nUGllY2UgPSBjb29yZGluYXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmV4dFBoYXNlKCkge1xyXG4gIC8vIGZpcnN0IHR1cm4gb2YgdGhlIGdhbWUgaXMgc3BlY2lhbFxyXG4gIGlmIChpc1ZlcnlGaXJzdFR1cm4pIHtcclxuICAgIGlzVmVyeUZpcnN0VHVybiA9IGZhbHNlO1xyXG4gICAgdHVyblBoYXNlID0gVFVSTl9QSEFTRVMuQ0FQVFVSRTtcclxuICAgIGN1cnJlbnRUdXJuID0gUExBWUVSX1RXTztcclxuICAgIG51bWJlck9mVHVybnNJbnRvR2FtZSA9IG51bWJlck9mVHVybnNJbnRvR2FtZSArIDE7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBoYXNlRGl2XCIpLmlubmVySFRNTCA9IFwiQ0FQVFVSRVwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0dXJuRGl2XCIpLmlubmVySFRNTCA9IFwiQUlcIjtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBwbGF5ZXJzIHR1cm5zIGFyZW4ndCBvdmVyIHlldFxyXG4gIGlmIChjdXJyZW50VHVybiA9PT0gUExBWUVSX09ORSAmJiB0dXJuUGhhc2UgPT09IFRVUk5fUEhBU0VTLkNBUFRVUkUpIHtcclxuICAgIHR1cm5QaGFzZSA9IFRVUk5fUEhBU0VTLlNUQUNLX09SX0NBUFRVUkU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBoYXNlRGl2XCIpLmlubmVySFRNTCA9IFwiU1RBQ0sgT1IgQ0FQVFVSRVwiO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAoY3VycmVudFR1cm4gPT09IFBMQVlFUl9UV08gJiYgdHVyblBoYXNlID09PSBUVVJOX1BIQVNFUy5DQVBUVVJFKSB7XHJcbiAgICB0dXJuUGhhc2UgPSBUVVJOX1BIQVNFUy5TVEFDS19PUl9DQVBUVVJFO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaGFzZURpdlwiKS5pbm5lckhUTUwgPSBcIlNUQUNLIE9SIENBUFRVUkVcIjtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIG5leHQgcGxheWVycyB0dXJuIGJlZ2luc1xyXG4gIGlmIChcclxuICAgIGN1cnJlbnRUdXJuID09PSBQTEFZRVJfT05FICYmXHJcbiAgICB0dXJuUGhhc2UgPT09IFRVUk5fUEhBU0VTLlNUQUNLX09SX0NBUFRVUkVcclxuICApIHtcclxuICAgIHR1cm5QaGFzZSA9IFRVUk5fUEhBU0VTLkNBUFRVUkU7XHJcbiAgICBjdXJyZW50VHVybiA9IFBMQVlFUl9UV087XHJcbiAgICBudW1iZXJPZlR1cm5zSW50b0dhbWUgPSBudW1iZXJPZlR1cm5zSW50b0dhbWUgKyAxO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaGFzZURpdlwiKS5pbm5lckhUTUwgPSBcIkNBUFRVUkVcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHVybkRpdlwiKS5pbm5lckhUTUwgPSBcIkFJXCI7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChcclxuICAgIGN1cnJlbnRUdXJuID09PSBQTEFZRVJfVFdPICYmXHJcbiAgICB0dXJuUGhhc2UgPT09IFRVUk5fUEhBU0VTLlNUQUNLX09SX0NBUFRVUkVcclxuICApIHtcclxuICAgIHR1cm5QaGFzZSA9IFRVUk5fUEhBU0VTLkNBUFRVUkU7XHJcbiAgICBjdXJyZW50VHVybiA9IFBMQVlFUl9PTkU7XHJcbiAgICBudW1iZXJPZlR1cm5zSW50b0dhbWUgPSBudW1iZXJPZlR1cm5zSW50b0dhbWUgKyAxO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaGFzZURpdlwiKS5pbm5lckhUTUwgPSBcIkNBUFRVUkVcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHVybkRpdlwiKS5pbm5lckhUTUwgPSBcIlBMQVlFUlwiO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBpbml0R2FtZSB9IGZyb20gXCIuL2dhbWVMb2dpY1wiO1xyXG5cclxuZnVuY3Rpb24gc3RhcnROZXdHYW1lKCkge1xyXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZU92ZXJmbG93XCIpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZU1lbnVEaXZcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNob29zZVNldHVwXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0R2FtZVdpdGhSYW5kb21TZXR1cCgpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNob29zZVNldHVwXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lU3RhdGVCb2FyZERpdlwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVN0YXRlRGl2XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgaW5pdEdhbWUoXCJSQU5ET01cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0R2FtZVdpdGhTeW1tZXRyaWNTZXR1cCgpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNob29zZVNldHVwXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lU3RhdGVCb2FyZERpdlwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVN0YXRlRGl2XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgaW5pdEdhbWUoXCJTWU1NRVRSSUNcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJhY2tUb0dhbWVNZW51KCkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZU1lbnVEaXZcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJ1bGVzRGl2XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dSdWxlcygpIHtcclxuICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBsaW5rLmhyZWYgPSAndHphYXJfcnVsZWJvb2sucGRmJztcclxuICBsaW5rLmRvd25sb2FkID0gJ3R6YWFyX3J1bGVib29rLnBkZic7XHJcbiAgbGluay5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KCdjbGljaycpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRBcHAoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdHYW1lRGl2XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydE5ld0dhbWUpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvd1J1bGVzRGl2XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93UnVsZXMpO1xyXG4gIGRvY3VtZW50XHJcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJyYW5kb21TZXR1cFwiKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEdhbWVXaXRoUmFuZG9tU2V0dXApO1xyXG4gIGRvY3VtZW50XHJcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJzeW1tZXRyaWNhbFNldHVwXCIpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0R2FtZVdpdGhTeW1tZXRyaWNTZXR1cCk7XHJcbiAgZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZChcImJhY2tUb0dhbWVNZW51RGl2XCIpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJhY2tUb0dhbWVNZW51KTtcclxufVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgc3RhcnRBcHAsIGZhbHNlKTtcclxuIiwiaW1wb3J0IHsgZ2V0UGl4ZWxDb29yZGluYXRlc0Zyb21Cb2FyZENvb3JkaW5hdGVzIH0gZnJvbSBcIi4vZ2FtZUJvYXJkSGVscGVyc1wiO1xyXG5pbXBvcnQge1xyXG4gIERFQlVHLFxyXG4gIFRSSUFOR0xFX1NJREVfTEVOR1RILFxyXG4gIFRSSUFOR0xFX0hFSUdIVCxcclxuICBQTEFZQUJMRV9WRVJUSUNFUyxcclxuICBHQU1FX1NUQVRFX0JPQVJEX0NBTlZBUyxcclxuICBUT1RULFxyXG4gIFRaQUFSLFxyXG4gIFRaQVJSQSxcclxuICBQTEFZRVJfT05FLFxyXG4gIFBMQVlFUl9UV08sXHJcbiAgUElYRUxfUkFUSU9cclxufSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZHJhd0NhY2hlZEJvYXJkIH0gZnJvbSBcIi4vY2FjaGVkQm9hcmRcIjtcclxuaW1wb3J0IHsgZ2FtZUJvYXJkU3RhdGUsIHNldE5ld2dhbWVCb2FyZFN0YXRlIH0gZnJvbSBcIi4vZ2FtZVN0YXRlXCI7XHJcbmltcG9ydCB7IExpc3QgfSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCB7XHJcbiAgUExBWUVSX09ORV9UT1RULFxyXG4gIFBMQVlFUl9PTkVfVFpBQVIsXHJcbiAgUExBWUVSX09ORV9UWkFSUkEsXHJcbiAgUExBWUVSX1RXT19UT1RULFxyXG4gIFBMQVlFUl9UV09fVFpBQVIsXHJcbiAgUExBWUVSX1RXT19UWkFSUkEsXHJcbiAgR0FNRV9QSUVDRV9SQURJVVMsXHJcbiAgQ0FOVkFTX1NJREVfTEVOR1RIXHJcbn0gZnJvbSBcIi4vZ2FtZVBpZWNlUmVuZGVyZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGdldENvbnRleHQoKSB7XHJcbiAgcmV0dXJuIEdBTUVfU1RBVEVfQk9BUkRfQ0FOVkFTLmdldENvbnRleHQoXCIyZFwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdDb29yZGluYXRlcygpIHtcclxuICBpZiAoIURFQlVHKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIFBMQVlBQkxFX1ZFUlRJQ0VTLm1hcChkcmF3Q29vcmRpbmF0ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3Q29vcmRpbmF0ZShjb29yZGluYXRlKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IGdldENvbnRleHQoKTtcclxuICBjb25zdCBbeCwgeV0gPSBjb29yZGluYXRlLnNwbGl0KFwiLFwiKTtcclxuXHJcbiAgY29uc3Qgb2Zmc2V0WFRvQ2VudGVyID0gd2luZG93LmlubmVyV2lkdGggLyAyIC0gNCAqIFRSSUFOR0xFX1NJREVfTEVOR1RIO1xyXG4gIGNvbnN0IG9mZnNldFlUb0NlbnRlciA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDIgLSA0ICogVFJJQU5HTEVfSEVJR0hUO1xyXG5cclxuICBjb25zdCBvZmZzZXRYID1cclxuICAgIHggKiBUUklBTkdMRV9TSURFX0xFTkdUSCAtIE1hdGgubWF4KDQgLSB5LCAwKSAqIFRSSUFOR0xFX1NJREVfTEVOR1RIO1xyXG5cclxuICBjb25zdCB4UG9zID1cclxuICAgIChNYXRoLmFicyg0IC0geSkgKiBUUklBTkdMRV9TSURFX0xFTkdUSCkgLyAyICsgb2Zmc2V0WCArIG9mZnNldFhUb0NlbnRlcjtcclxuXHJcbiAgY29uc3QgeVBvcyA9IHkgKiBUUklBTkdMRV9IRUlHSFQgKyBvZmZzZXRZVG9DZW50ZXI7XHJcbiAgY29udGV4dC5mb250ID0gXCIuNXJlbSBIZWx2ZXRpY2FcIjtcclxuICBjb250ZXh0LmZpbGxTdHlsZSA9IFwiIzM5ZmYxNFwiO1xyXG4gIGNvbnRleHQuZmlsbFRleHQoY29vcmRpbmF0ZSwgeFBvcyArIDEwLCB5UG9zICsgMTApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd0dhbWVCb2FyZFN0YXRlKCkge1xyXG4gIGNsZWFyQ2FudmFzKCk7XHJcbiAgZHJhd0NhY2hlZEJvYXJkKCk7XHJcbiAgZHJhd0dhbWVQaWVjZXMoKTtcclxuICBkcmF3Q29vcmRpbmF0ZXMoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdTdGF0aWNHYW1lUGllY2UoZ2FtZVBpZWNlLCBjb29yZGluYXRlKSB7XHJcbiAgY29uc3QgW3hQb3MsIHlQb3NdID0gZ2V0UGl4ZWxDb29yZGluYXRlc0Zyb21Cb2FyZENvb3JkaW5hdGVzKFxyXG4gICAgY29vcmRpbmF0ZVxyXG4gICkuc3BsaXQoXCIsXCIpO1xyXG5cclxuICBpZiAoZ2FtZVBpZWNlLmlzRHJhZ2dpbmcgfHwgIWdhbWVQaWVjZSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgZHJhd0dhbWVQaWVjZShnYW1lUGllY2UsIHhQb3MsIHlQb3MpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd0dhbWVQaWVjZShnYW1lUGllY2UsIHhQb3MsIHlQb3MpIHtcclxuICBjb25zdCBjb250ZXh0ID0gZ2V0Q29udGV4dCgpO1xyXG4gIGlmIChnYW1lUGllY2Uub3duZWRCeSA9PT0gUExBWUVSX09ORSAmJiBnYW1lUGllY2UudHlwZSA9PT0gVE9UVCkge1xyXG4gICAgY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgIFBMQVlFUl9PTkVfVE9UVCxcclxuICAgICAgeFBvcyAtIEdBTUVfUElFQ0VfUkFESVVTLFxyXG4gICAgICB5UG9zIC0gR0FNRV9QSUVDRV9SQURJVVMsXHJcbiAgICAgIENBTlZBU19TSURFX0xFTkdUSCAvIFBJWEVMX1JBVElPLFxyXG4gICAgICBDQU5WQVNfU0lERV9MRU5HVEggLyBQSVhFTF9SQVRJT1xyXG4gICAgKTtcclxuICB9XHJcbiAgaWYgKGdhbWVQaWVjZS5vd25lZEJ5ID09PSBQTEFZRVJfT05FICYmIGdhbWVQaWVjZS50eXBlID09PSBUWkFSUkEpIHtcclxuICAgIGNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICBQTEFZRVJfT05FX1RaQVJSQSxcclxuICAgICAgeFBvcyAtIEdBTUVfUElFQ0VfUkFESVVTLFxyXG4gICAgICB5UG9zIC0gR0FNRV9QSUVDRV9SQURJVVMsXHJcbiAgICAgIENBTlZBU19TSURFX0xFTkdUSCAvIFBJWEVMX1JBVElPLFxyXG4gICAgICBDQU5WQVNfU0lERV9MRU5HVEggLyBQSVhFTF9SQVRJT1xyXG4gICAgKTtcclxuICB9XHJcbiAgaWYgKGdhbWVQaWVjZS5vd25lZEJ5ID09PSBQTEFZRVJfT05FICYmIGdhbWVQaWVjZS50eXBlID09PSBUWkFBUikge1xyXG4gICAgY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgIFBMQVlFUl9PTkVfVFpBQVIsXHJcbiAgICAgIHhQb3MgLSBHQU1FX1BJRUNFX1JBRElVUyxcclxuICAgICAgeVBvcyAtIEdBTUVfUElFQ0VfUkFESVVTLFxyXG4gICAgICBDQU5WQVNfU0lERV9MRU5HVEggLyBQSVhFTF9SQVRJTyxcclxuICAgICAgQ0FOVkFTX1NJREVfTEVOR1RIIC8gUElYRUxfUkFUSU9cclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChnYW1lUGllY2Uub3duZWRCeSA9PT0gUExBWUVSX1RXTyAmJiBnYW1lUGllY2UudHlwZSA9PT0gVE9UVCkge1xyXG4gICAgY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgIFBMQVlFUl9UV09fVE9UVCxcclxuICAgICAgeFBvcyAtIEdBTUVfUElFQ0VfUkFESVVTLFxyXG4gICAgICB5UG9zIC0gR0FNRV9QSUVDRV9SQURJVVMsXHJcbiAgICAgIENBTlZBU19TSURFX0xFTkdUSCAvIFBJWEVMX1JBVElPLFxyXG4gICAgICBDQU5WQVNfU0lERV9MRU5HVEggLyBQSVhFTF9SQVRJT1xyXG4gICAgKTtcclxuICB9XHJcbiAgaWYgKGdhbWVQaWVjZS5vd25lZEJ5ID09PSBQTEFZRVJfVFdPICYmIGdhbWVQaWVjZS50eXBlID09PSBUWkFSUkEpIHtcclxuICAgIGNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICBQTEFZRVJfVFdPX1RaQVJSQSxcclxuICAgICAgeFBvcyAtIEdBTUVfUElFQ0VfUkFESVVTLFxyXG4gICAgICB5UG9zIC0gR0FNRV9QSUVDRV9SQURJVVMsXHJcbiAgICAgIENBTlZBU19TSURFX0xFTkdUSCAvIFBJWEVMX1JBVElPLFxyXG4gICAgICBDQU5WQVNfU0lERV9MRU5HVEggLyBQSVhFTF9SQVRJT1xyXG4gICAgKTtcclxuICB9XHJcbiAgaWYgKGdhbWVQaWVjZS5vd25lZEJ5ID09PSBQTEFZRVJfVFdPICYmIGdhbWVQaWVjZS50eXBlID09PSBUWkFBUikge1xyXG4gICAgY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgIFBMQVlFUl9UV09fVFpBQVIsXHJcbiAgICAgIHhQb3MgLSBHQU1FX1BJRUNFX1JBRElVUyxcclxuICAgICAgeVBvcyAtIEdBTUVfUElFQ0VfUkFESVVTLFxyXG4gICAgICBDQU5WQVNfU0lERV9MRU5HVEggLyBQSVhFTF9SQVRJTyxcclxuICAgICAgQ0FOVkFTX1NJREVfTEVOR1RIIC8gUElYRUxfUkFUSU9cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb250ZXh0LmZvbnQgPSBcIjEuMTVyZW0gSGVsdmV0aWNhXCI7XHJcbiAgY29udGV4dC5maWxsU3R5bGUgPSBnYW1lUGllY2UudHlwZSA9PT0gVFpBQVIgPyBcIiMwMDBcIiA6IFwiI2ZmZlwiO1xyXG4gIGNvbnRleHQuZmlsbFRleHQoZ2FtZVBpZWNlLnN0YWNrU2l6ZSwgK3hQb3MgLSA2LCAreVBvcyArIDYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd0dhbWVQaWVjZXMoKSB7XHJcbiAgZ2FtZUJvYXJkU3RhdGUuZm9yRWFjaChkcmF3U3RhdGljR2FtZVBpZWNlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ2FudmFzKCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBnZXRDb250ZXh0KCk7XHJcbiAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRpbWVGdW5jdGlvbih0KSB7XHJcbiAgcmV0dXJuIC0tdCAqIHQgKiB0ICsgMTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckluaXRpYWxpemluZ0JvYXJkKHBpZWNlc1RvRHJhdywgY2FsbGJhY2spIHtcclxuICBsZXQgaW5kZXggPSAwO1xyXG4gIGxldCBwaWVjZXNUb1JlbmRlckxpc3QgPSBMaXN0KCk7XHJcbiAgcGllY2VzVG9EcmF3LmZvckVhY2goKHBpZWNlLCBjb29yZGluYXRlKSA9PiB7XHJcbiAgICBjb25zdCB0byA9IGdldFBpeGVsQ29vcmRpbmF0ZXNGcm9tQm9hcmRDb29yZGluYXRlcyhjb29yZGluYXRlKTtcclxuICAgIGNvbnN0IGZyb20gPSBgJHt3aW5kb3cuaW5uZXJXaWR0aCAvIDJ9LCR7d2luZG93LmlubmVySGVpZ2h0IC8gMn1gO1xyXG5cclxuICAgIHBpZWNlc1RvUmVuZGVyTGlzdCA9IHBpZWNlc1RvUmVuZGVyTGlzdC5wdXNoKHtcclxuICAgICAgcGllY2UsXHJcbiAgICAgIGZyb20sXHJcbiAgICAgIHRvLFxyXG4gICAgICBkZWxheTogaW5kZXggKiAyNVxyXG4gICAgfSk7XHJcblxyXG4gICAgaW5kZXggPSBpbmRleCArIDE7XHJcbiAgfSk7XHJcblxyXG4gIHJlbmRlck1vdmluZ1BpZWNlcyhwaWVjZXNUb1JlbmRlckxpc3QsIDUwMCwgRGF0ZS5ub3coKSwgKCkgPT4ge1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIHBpZWNlc1RvRHJhdy5mb3JFYWNoKChwaWVjZSwgY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgICBzZXROZXdnYW1lQm9hcmRTdGF0ZShnYW1lQm9hcmRTdGF0ZS5zZXQoY29vcmRpbmF0ZSwgcGllY2UpKTtcclxuICAgICAgaW5kZXggPSBpbmRleCArIDE7XHJcbiAgICB9KTtcclxuICAgIGNhbGxiYWNrKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlck1vdmluZ1BpZWNlcyhwaWVjZXNUb1JlbmRlckxpc3QsIGR1cmF0aW9uLCBzdGFydFRpbWUsIGNhbGxiYWNrKSB7XHJcbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgY29uc3QgdGltZVBhc3NlZEluTWlsbGlTZWMgPSBub3cgLSBzdGFydFRpbWU7XHJcblxyXG4gIGlmICh0aW1lUGFzc2VkSW5NaWxsaVNlYyA+IGR1cmF0aW9uICsgcGllY2VzVG9SZW5kZXJMaXN0Lmxhc3QoKS5kZWxheSkge1xyXG4gICAgY2FsbGJhY2soKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNsZWFyQ2FudmFzKCk7XHJcbiAgZHJhd0NhY2hlZEJvYXJkKCk7XHJcblxyXG4gIHBpZWNlc1RvUmVuZGVyTGlzdC5mb3JFYWNoKCh7IHBpZWNlLCBmcm9tLCB0bywgZGVsYXkgfSkgPT4ge1xyXG4gICAgY29uc3QgdGltZVBhc3NlZCA9IE1hdGgubWluKFxyXG4gICAgICBNYXRoLm1heCgobm93IC0gc3RhcnRUaW1lIC0gZGVsYXkpIC8gZHVyYXRpb24sIDApLFxyXG4gICAgICAxXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IFtmcm9tWCwgZnJvbVldID0gZnJvbS5zcGxpdChcIixcIik7XHJcbiAgICBjb25zdCBbdG9YLCB0b1ldID0gdG8uc3BsaXQoXCIsXCIpO1xyXG5cclxuICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KFxyXG4gICAgICBNYXRoLnBvdyhmcm9tWCAtIHRvWCwgMikgKyBNYXRoLnBvdyhmcm9tWSAtIHRvWSwgMilcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudERpc3RhbmNlID0gKHRpbWVGdW5jdGlvbih0aW1lUGFzc2VkKSAqIGRpc3RhbmNlKSAvIGRpc3RhbmNlO1xyXG5cclxuICAgIGNvbnN0IHJlbmRlclggPSAoMSAtIGN1cnJlbnREaXN0YW5jZSkgKiBmcm9tWCArIGN1cnJlbnREaXN0YW5jZSAqIHRvWDtcclxuICAgIGNvbnN0IHJlbmRlclkgPSAoMSAtIGN1cnJlbnREaXN0YW5jZSkgKiBmcm9tWSArIGN1cnJlbnREaXN0YW5jZSAqIHRvWTtcclxuXHJcbiAgICBkcmF3R2FtZVBpZWNlKHBpZWNlLCByZW5kZXJYLCByZW5kZXJZKTtcclxuICB9KTtcclxuXHJcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICByZW5kZXJNb3ZpbmdQaWVjZXMocGllY2VzVG9SZW5kZXJMaXN0LCBkdXJhdGlvbiwgc3RhcnRUaW1lLCBjYWxsYmFjayk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJNb3ZpbmdQaWVjZShcclxuICBwaWVjZSxcclxuICBmcm9tLFxyXG4gIHRvLFxyXG4gIGR1cmF0aW9uLFxyXG4gIHN0YXJ0VGltZSxcclxuICBjYWxsYmFja1xyXG4pIHtcclxuICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG5cclxuICBjb25zdCB0aW1lUGFzc2VkSW5NaWxsaVNlYyA9IG5vdyAtIHN0YXJ0VGltZTtcclxuXHJcbiAgaWYgKHRpbWVQYXNzZWRJbk1pbGxpU2VjID4gZHVyYXRpb24pIHtcclxuICAgIGNhbGxiYWNrKCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCB0aW1lUGFzc2VkID0gTWF0aC5taW4oTWF0aC5tYXgoKG5vdyAtIHN0YXJ0VGltZSkgLyBkdXJhdGlvbiwgMCksIDEpO1xyXG5cclxuICBjb25zdCBbZnJvbVgsIGZyb21ZXSA9IGZyb20uc3BsaXQoXCIsXCIpO1xyXG4gIGNvbnN0IFt0b1gsIHRvWV0gPSB0by5zcGxpdChcIixcIik7XHJcblxyXG4gIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KFxyXG4gICAgTWF0aC5wb3coZnJvbVggLSB0b1gsIDIpICsgTWF0aC5wb3coZnJvbVkgLSB0b1ksIDIpXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgY3VycmVudERpc3RhbmNlID0gKHRpbWVGdW5jdGlvbih0aW1lUGFzc2VkKSAqIGRpc3RhbmNlKSAvIGRpc3RhbmNlO1xyXG5cclxuICBjb25zdCByZW5kZXJYID0gKDEgLSBjdXJyZW50RGlzdGFuY2UpICogZnJvbVggKyBjdXJyZW50RGlzdGFuY2UgKiB0b1g7XHJcbiAgY29uc3QgcmVuZGVyWSA9ICgxIC0gY3VycmVudERpc3RhbmNlKSAqIGZyb21ZICsgY3VycmVudERpc3RhbmNlICogdG9ZO1xyXG5cclxuICBjbGVhckNhbnZhcygpO1xyXG4gIGRyYXdDYWNoZWRCb2FyZCgpO1xyXG4gIGRyYXdHYW1lUGllY2VzKCk7XHJcbiAgZHJhd0dhbWVQaWVjZShwaWVjZSwgcmVuZGVyWCwgcmVuZGVyWSk7XHJcblxyXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgcmVuZGVyTW92aW5nUGllY2UocGllY2UsIGZyb20sIHRvLCBkdXJhdGlvbiwgc3RhcnRUaW1lLCBjYWxsYmFjayk7XHJcbiAgfSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
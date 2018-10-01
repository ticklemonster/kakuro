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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/kakuro-store.js":
/*!*********************************!*\
  !*** ./scripts/kakuro-store.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

////////////////////////////////////////////////////////////////////////////////
// 
// Kakuro model
//
// state is stored in this model and all modifications should be via the accesses
// 

var CLUE_COMBINATIONS = new Map([['2.3', ['12']], ['2.4', ['13']], ['2.5', ['14', '23']], ['2.6', ['15', '24']], ['2.7', ['16', '25', '34']], ['2.8', ['17', '26', '35']], ['2.9', ['18', '27', '36', '45']], ['2.10', ['19', '28', '37', '46']], ['2.11', ['29', '38', '47', '56']], ['2.12', ['39', '48', '57']], ['2.13', ['49', '58', '67']], ['2.14', ['59', '68']], ['2.15', ['69', '78']], ['2.16', ['79']], ['2.17', ['89']], ['3.6', ['123']], ['3.7', ['124']], ['3.8', ['125', '134']], ['3.9', ['126', '135', '234']], ['3.10', ['127', '136', '145', '235']], ['3.11', ['128', '137', '146', '236', '245']], ['3.12', ['129', '138', '147', '156', '237', '246', '345']], ['3.13', ['139', '148', '157', '238', '247', '256', '346']], ['3.14', ['149', '158', '167', '239', '248', '257', '347', '356']], ['3.15', ['159', '168', '249', '258', '267', '348', '357', '456']], ['3.16', ['169', '178', '259', '268', '349', '358', '367', '457']], ['3.17', ['179', '269', '278', '359', '368', '458', '467']], ['3.18', ['189', '279', '369', '378', '459', '468', '567']], ['3.19', ['289', '379', '469', '478', '568']], ['3.20', ['389', '479', '569', '578']], ['3.21', ['489', '579', '678']], ['3.22', ['589', '679']], ['3.23', ['689']], ['3.24', ['789']], ['4.10', ['1234']], ['4.11', ['1235']], ['4.12', ['1236', '1245']], ['4.13', ['1237', '1246', '1345']], ['4.14', ['1238', '1247', '1256', '1346', '2345']], ['4.15', ['1239', '1248', '1257', '1347', '1356', '2346']], ['4.16', ['1249', '1258', '1267', '1348', '1357', '1456', '2347', '2356']], ['4.17', ['1259', '1268', '1349', '1358', '1367', '1457', '2348', '2357', '2456']], ['4.18', ['1269', '1278', '1359', '1368', '1458', '1467', '2349', '2358', '2367', '2457', '3456']], ['4.19', ['1279', '1369', '1378', '1459', '1468', '1567', '2359', '2368', '2458', '2467', '3457']], ['4.20', ['1289', '1379', '1469', '1478', '1568', '2369', '2378', '2459', '2468', '2567', '3458', '3467']], ['4.21', ['1389', '1479', '1569', '1578', '2379', '2469', '2478', '2568', '3459', '3468', '3567']], ['4.22', ['1489', '1579', '1678', '2389', '2479', '2569', '2578', '3469', '3478', '3568', '4567']], ['4.23', ['1589', '1679', '2489', '2579', '2678', '3479', '3569', '3578', '4568']], ['4.24', ['1689', '2589', '2679', '3489', '3579', '3678', '4569', '4578']], ['4.25', ['1789', '2689', '3589', '3679', '4579', '4678']], ['4.26', ['2789', '3689', '4589', '4679', '5678']], ['4.27', ['3789', '4689', '5679']], ['4.28', ['4789', '5689']], ['4.29', ['5789']], ['4.30', ['6789']], ['5.15', ['12345']], ['5.16', ['12346']], ['5.17', ['12347', '12356']], ['5.18', ['12348', '12357', '12456']], ['5.19', ['12349', '12358', '12367', '12457', '13456']], ['5.20', ['12359', '12368', '12458', '12467', '13457', '23456']], ['5.21', ['12369', '12378', '12459', '12468', '12567', '13458', '13467', '23457']], ['5.22', ['12379', '12469', '12478', '12568', '13459', '13468', '13567', '23458', '23467']], ['5.23', ['12389', '12479', '12569', '12578', '13469', '13478', '13568', '14567', '23459', '23468', '23567']], ['5.24', ['12489', '12579', '12678', '13479', '13569', '13578', '14568', '23469', '23478', '23568', '24567']], ['5.25', ['12589', '12679', '13489', '13579', '13678', '14569', '14578', '23479', '23569', '23578', '24568', '34567']], ['5.26', ['12689', '13589', '13679', '14579', '14678', '23489', '23579', '23678', '24569', '24578', '34568']], ['5.27', ['12789', '13689', '14589', '14679', '15678', '23589', '23679', '24579', '24678', '34569', '34578']], ['5.28', ['13789', '14689', '15679', '23689', '24589', '24679', '25678', '34579', '34678']], ['5.29', ['14789', '15689', '23789', '24689', '25679', '34589', '34679', '35678']], ['5.30', ['15789', '24789', '25689', '34689', '35679', '45678']], ['5.31', ['16789', '25789', '34789', '35689', '45679']], ['5.32', ['26789', '35789', '45689']], ['5.33', ['36789', '45789']], ['5.34', ['46789']], ['5.35', ['56789']], ['6.21', ['123456']], ['6.22', ['123457']], ['6.23', ['123458', '123467']], ['6.24', ['123459', '123468', '123567']], ['6.25', ['123469', '123478', '123568', '124567']], ['6.26', ['123479', '123569', '123578', '124568', '134567']], ['6.27', ['123489', '123579', '123678', '124569', '124578', '134568', '234567']], ['6.28', ['123589', '123679', '124579', '124678', '134569', '134578', '234568']], ['6.29', ['123689', '124589', '124679', '125678', '134579', '134678', '234569', '234578']], ['6.30', ['123789', '124689', '125679', '134589', '134679', '135678', '234579', '234678']], ['6.31', ['124789', '125689', '134689', '135679', '145678', '234589', '234679', '235678']], ['6.32', ['125789', '134789', '135689', '145679', '234689', '235679', '245678']], ['6.33', ['126789', '135789', '145689', '234789', '235689', '245679', '345678']], ['6.34', ['136789', '145789', '235789', '245689', '345679']], ['6.35', ['146789', '236789', '245789', '345689']], ['6.36', ['156789', '246789', '345789']], ['6.37', ['256789', '346789']], ['6.38', ['356789']], ['6.39', ['456789']], ['7.28', ['1234567']], ['7.29', ['1234568']], ['7.30', ['1234569', '1234578']], ['7.31', ['1234579', '1234678']], ['7.32', ['1234589', '1234679', '1235678']], ['7.33', ['1234689', '1235679', '1245678']], ['7.34', ['1234789', '1235689', '1245679', '1345678']], ['7.35', ['1235789', '1245689', '1345679', '2345678']], ['7.36', ['1236789', '1245789', '1345689', '2345679']], ['7.37', ['1246789', '1345789', '2345689']], ['7.38', ['1256789', '1346789', '2345789']], ['7.39', ['1356789', '2346789']], ['7.40', ['1456789', '2356789']], ['7.41', ['2456789']], ['7.42', ['3456789']], ['8.36', ['12345678']], ['8.37', ['12345679']], ['8.38', ['12345689']], ['8.39', ['12345789']], ['8.40', ['12346789']], ['8.41', ['12356789']], ['8.42', ['12456789']], ['8.43', ['13456789']], ['8.44', ['23456789']], ['9.45', ['123456789']]]);
var CLUE_RE = /([A-Z]+)([1-9][0-9]*):([A-Z]+)([1-9][0-9]*)=([0-9]+)/;
var REF_RE = /([A-Z])(\d+)/;

var KakuroStore = function () {
    function KakuroStore(puzzlestring) {
        _classCallCheck(this, KakuroStore);

        this.clues = [];
        this.grid = [];
        this.rows = 0;
        this.cols = 0;

        var rawclues = puzzlestring.split(/[,;]/);
        console.debug('DEBUG: KakuroStore constructing from ' + rawclues.length + ' clues');

        // determine the grid dimensions
        this.rows = rawclues.reduce(function (maxrow, clue) {
            var _clue$match = clue.match(CLUE_RE),
                _clue$match2 = _slicedToArray(_clue$match, 5),
                R1 = _clue$match2[2],
                R2 = _clue$match2[4];

            return Math.max(maxrow, Math.max(R1, R2));
        }, 0);
        this.cols = rawclues.reduce(function (maxcol, clue) {
            var _clue$match3 = clue.match(CLUE_RE),
                _clue$match4 = _slicedToArray(_clue$match3, 5),
                C1 = _clue$match4[1],
                C2 = _clue$match4[3];

            return Math.max(maxcol, Math.max(C1.charCodeAt(0), C2.charCodeAt(0)));
        }, 65) - 64;
        console.debug('DEBUG: KakuroStore size = ' + this.cols + 'x' + this.rows);

        // build the base grid array
        for (var r = 0; r <= this.rows; r++) {
            var gridrow = [];
            for (var c = 0; c <= this.cols; c++) {
                gridrow.push({ isSpace: false, labelRight: null, labelDown: null, clues: [] });
            }
            this.grid.push(gridrow);
        }

        // parse the clue strings into something easier to use
        // and fill the grid with content...
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = rawclues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var cluestr = _step.value;

                var _KakuroStore$clue2rc = KakuroStore.clue2rc(cluestr),
                    _KakuroStore$clue2rc2 = _slicedToArray(_KakuroStore$clue2rc, 5),
                    r1 = _KakuroStore$clue2rc2[0],
                    c1 = _KakuroStore$clue2rc2[1],
                    r2 = _KakuroStore$clue2rc2[2],
                    c2 = _KakuroStore$clue2rc2[3],
                    val = _KakuroStore$clue2rc2[4];

                var thisclue = {
                    name: cluestr,
                    value: val,
                    cells: []
                };

                // get the clue combinations - key is [length].[value] 
                var cluelength = Math.abs(r2 - r1) + Math.abs(c2 - c1) + 1;
                thisclue.combinations = CLUE_COMBINATIONS.get(cluelength + '.' + val).slice(0);

                // add the clue labels
                if (r1 == r2) {
                    // Horizontal clue
                    var labelCell = this.grid[r1][c1 - 1];
                    if (labelCell.labelRight !== null) throw new Error('Inavlid puzzle string - multiple labels in one cell at ' + KakuroStore.rc2ref(r1, c1 - 1));

                    labelCell.labelRight = cluestr;
                } else {
                    // Vertical clue
                    var _labelCell = this.grid[r1 - 1][c1];
                    if (_labelCell.labelDown !== null) throw new Error('Inavlid puzzle string - multiple labels in one cell at ' + KakuroStore.rc2ref(r1 - 1, c1));

                    _labelCell.labelDown = cluestr;
                }

                // add all of the cells to the clue
                for (var row = r1; row <= r2; row++) {
                    for (var col = c1; col <= c2; col++) {
                        var cell = this.grid[row][col];
                        if (cell.labelDown !== null || cell.labelRight !== null) throw new Error('Invalid puzzle string - clue labels would overlap spaces.');

                        cell.isSpace = true;
                        cell.clues.push(thisclue);
                        thisclue.cells.push(cell);
                    }
                }
                this.clues.push(thisclue);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }

    //
    // Utility functions to convert row/col numbers to A1 refs...
    //


    _createClass(KakuroStore, [{
        key: 'getUnfinishedCount',


        ////////////////////////////////////////////////////////////////////////////////
        //
        // Puzzle 
        //
        value: function getUnfinishedCount() {
            // count the unfinished puzzle cells in the current grid
            return this.grid.reduce(function (prev, curr) {
                return prev + (curr.value ? 1 : 0);
            }, 0);
        }

        ////////////////////////////////////////////////////////////////////////////////
        //
        // Puzzle updating functions
        // - manage changing the state of the puzzle after changing a digit
        //

    }, {
        key: 'getValueAtRC',
        value: function getValueAtRC(row, col) {
            return this.grid[row][col].value;
        }
    }, {
        key: 'getValueAtRef',
        value: function getValueAtRef(refstr) {
            var _KakuroStore$ref2rc = KakuroStore.ref2rc(refstr),
                _KakuroStore$ref2rc2 = _slicedToArray(_KakuroStore$ref2rc, 2),
                row = _KakuroStore$ref2rc2[0],
                col = _KakuroStore$ref2rc2[1];

            return this.getValueAtRC(row, col);
        }
    }, {
        key: 'toString',
        value: function toString() {
            var str = this.rows + ' x ' + this.cols + ' puzzle:\n';
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.grid[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var r = _step2.value;
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = r[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var c = _step3.value;

                            str += c.isSpace ? c.value || '.' : '#';
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }

                    str += '\n';
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return str;
        }
    }], [{
        key: 'rc2ref',
        value: function rc2ref(row, col) {
            // return a string version of this ref - UP TO 64 COLS MAX!
            var rowval = parseInt(row);
            var colval = parseInt(col);

            if (isNaN(rowval) || isNaN(colval) || rowval < 0 || colval < 0 || colval > 64) return undefined;

            var ref = (colval === 0 ? '_' : String.fromCharCode(64 + colval)) + rowval.toString();
            return ref;
        }
    }, {
        key: 'ref2rc',
        value: function ref2rc(ref) {
            // convert from A1 to a [row,col] array format - ONE LETTER ROW NAMES ONLY
            try {
                var result = REF_RE.exec(ref);
                var rowval = parseInt(result[2]);
                if (isNaN(rowval)) throw new Error('row number is not valid ' + ref);
                if (result[1].charCodeAt(0) < 64 || result[1].charCodeAt(0) > 90) throw new Error('col letter is not valid ' + ref);

                var colval = result[1].charCodeAt(0) - 64;

                return [rowval, colval];
            } catch (err) {
                console.error('ref2rc error: ', err);
            }
            return [undefined, undefined];
        }
    }, {
        key: 'refrange2rc',
        value: function refrange2rc(refrange) {
            try {
                var _refrange$split = refrange.split(':'),
                    _refrange$split2 = _slicedToArray(_refrange$split, 2),
                    ref1 = _refrange$split2[0],
                    ref2 = _refrange$split2[1];

                if (ref1 === undefined || ref2 === undefined) {
                    throw new Error('invalid range', refrange);
                }

                var _KakuroStore$ref2rc3 = KakuroStore.ref2rc(ref1),
                    _KakuroStore$ref2rc4 = _slicedToArray(_KakuroStore$ref2rc3, 2),
                    r1 = _KakuroStore$ref2rc4[0],
                    c1 = _KakuroStore$ref2rc4[1];

                var _KakuroStore$ref2rc5 = KakuroStore.ref2rc(ref2),
                    _KakuroStore$ref2rc6 = _slicedToArray(_KakuroStore$ref2rc5, 2),
                    r2 = _KakuroStore$ref2rc6[0],
                    c2 = _KakuroStore$ref2rc6[1];

                return [r1, c1, r2, c2];
            } catch (err) {
                console.error('refrange2rc error: ', err);
            }

            return [undefined, undefined, undefined, undefined];
        }
    }, {
        key: 'clue2rc',
        value: function clue2rc(cluestring) {
            try {
                var _cluestring$split = cluestring.split('='),
                    _cluestring$split2 = _slicedToArray(_cluestring$split, 2),
                    refrange = _cluestring$split2[0],
                    clueval = _cluestring$split2[1];

                if (refrange === undefined || clueval === undefined) throw new Error('invalid clue format ' + cluestring);

                var _KakuroStore$refrange = KakuroStore.refrange2rc(refrange),
                    _KakuroStore$refrange2 = _slicedToArray(_KakuroStore$refrange, 4),
                    r1 = _KakuroStore$refrange2[0],
                    c1 = _KakuroStore$refrange2[1],
                    r2 = _KakuroStore$refrange2[2],
                    c2 = _KakuroStore$refrange2[3];

                var val = parseInt(clueval);

                return [r1, c1, r2, c2, val];
            } catch (err) {
                console.error('refrange2rc error: ', err);
            }

            return [undefined, undefined, undefined, undefined];
        }
    }]);

    return KakuroStore;
}();

////////////////////////////////////////////////////////////////////////////////
//
// Puzzle updating functions
// - manage changing the state of the puzzle after changing a digit
//
// function findDataValueEl (element) {
//     // find the element with the data value (upstream if necessary)
//     var el = element;
//     while (el && !el.hasAttribute('data-value')) {
//         el = el.parentNode;
//     }
//     if (!el) {
//         console.debug('findDataValueEl for', element, 'found no data-value');
//         return null;
//     }    

//     return el;
// }
// function setDataValue (element, value) {
//     //console.debug('setCellValue: ', element, value);
//     if (!element.hasAttribute('data-value')) {
//         console.warn('setDataValue for non data-value element ', element);
//         return;
//     }

//     // upate only if there was a change
//     const oldval = parseInt(element.getAttribute('data-value')) || '';
//     let newval = parseInt(value);
//     if (isNaN(newval) || newval < 1 || newval > 9) newval = '';
//     if (oldval != newval) {
//         element.setAttribute('data-value', newval);
//         if (newval == '') {
//             // this cell has been cleared, reset its mask
//             resetCellMask(element);
//         } else {
//             // this cell is now solved. clear its mask
//             element.setAttribute('data-valuemask', '');
//         }

//         const to_update = findRelatedCells(element).filter (cell => !isCellSolved(cell));
//         //console.debug(`setDataValue changed ${element.id} from [${oldval}] to [${newval}] - rebuild value masks`, to_update);
//         if (oldval > '') {
//             // and old value was removed - add it back to the masks...
//             to_update.forEach (cell => addToCellMask(cell, oldval));
//         }

//         if (newval > '') {
//             // a new value has been set. remove it from the masks...
//             to_update.forEach (cell => delFromCellMask(cell, newval));
//         }
//     }
//     showHintDigits(element);

// }
// function getDataValue (element) {
//     return element.getAttribute('data-value');
// }
// function isCellSolved (element) {
//     return (getDataValue(element) > 0);
// }

// function getCluesForCell (cell) {
//     if (!cell.hasAttribute('data-clues')) {
//         console.warn('getCluesForCell called with invalid cell ', cell);
//         return [];
//     }

//     // get the clues linked to this element...
//     const clueids = cell.getAttribute('data-clues');
//     const rval = clues.filter(clue => clueids.indexOf(clue.name) >= 0);

//     return rval;
// }

// function findRelatedCells (element) {
//     if (element === null || element === undefined || !element.hasAttribute('data-clues')) {
//         console.debug('findRelatedCells... element is not valid ', element);
//         return [];
//     }

//     // run through all cells in related clues (except myself)
//     let relatedcells = [];
//     for (const clue of getCluesForCell(element)) {
//         for (const cell of clue.cells) {
//             if (cell !== element)   relatedcells.push(cell);
//         }
//     }

//     return relatedcells;
// }

// // resetCellMask
// // - reset the mask to the combination of clue masks and related solved cells
// function resetCellMask (cell) {
//     if (!cell.hasAttribute('data-valuemask') || !cell.hasAttribute('data-clues')) {
//         console.warn('resetCellMask with invalid cell ref: ', cell);
//         return;
//     }

//     let new_valuemask = ALL_VALUES_MASK;
//     getCluesForCell(cell).forEach (clue => {
//         let cluemask = 0;

//         // build a mask for all currently solved cells in this clue
//         let solvedmask = 0;
//         clue.cells.forEach (cell => {
//             let soln = parseInt(cell.getAttribute('data-value'));
//             if (!isNaN(soln) && soln > 0 && soln < 10) {
//                 solvedmask |= (1 << (soln - 1));
//             }
//         });
//         //console.debug('resetCellMask ' + cell.id + ': clue=' + clue.name + ' solved=' + maskToString(solvedmask));

//         // reduce the mask by the clue masks
//         const combos = CLUE_COMBINATIONS.get(`${clue.cells.length}.${clue.value}`);
//         for (const combo of combos) {
//             // if this combo contains all of the solved cells ...
//             const combomask = combosToMask([combo]);
//             if ((combomask & solvedmask) == solvedmask) {
//                 //console.debug('resetCellMask ' + cell.id + ': clue=' + clue.name + ' combo=' + maskToString(combomask) + ' is valid');
//                 cluemask |= (combomask & ~solvedmask);
//             } else {
//                 //console.debug('resetCellMask ' + cell.id + ': clue=' + clue.name + ' combo=' + maskToString(combomask) + ' not valid');
//             }
//         }

//         //console.debug('\t: clue=' + clue.name + ' results in:' + maskToString(cluemask));
//         new_valuemask &= cluemask;
//     });

//     cell.setAttribute('data-valuemask', new_valuemask);
//     showHintDigits(cell);
// }

// function addToCellMask (cell, value) {
//     if (!cell.hasAttribute('data-valuemask') || !cell.hasAttribute('data-clues')) {
//         console.warn('resetCellMask with invalid cell ref: ', cell);
//         return;
//     }
//     resetCellMask(cell);

//     // for now - save the old mask, then see if the value would be allowed.
//     // if it is, then merge the old mask with the new value (not the recalc'd)
//     // let savedmask = cell.getAttribute('data-valuemask');
//     // resetCellMask(cell);
//     // let newmask = cell.getAttribute('data-valuemask');
//     // let valuemask = (1 << (value - 1));
//     // if ((newmask & valuemask) == valuemask) {
//     //     // the value can be added.
//     //     savedmask |= valuemask;
//     //     cell.setAttribute('data-valuemask', savedmask);
//     //     showHintDigits(cell);
//     // }

// }
// function delFromCellMask (cell, value) {
//     if (!cell.hasAttribute('data-valuemask') || isNaN(parseInt(value))) {
//         console.warn('delFromCellMask with invalid cell ref or value: ', cell, value);
//         return;
//     }
//     resetCellMask(cell);

//     // let cellmask = cell.getAttribute ('data-valuemask');
//     // let valuemask = (1 << (parseInt(value) - 1));
//     // cellmask &= ~valuemask;
//     // cell.setAttribute ('data-valuemask', cellmask);
//     // showHintDigits(cell);
// }


exports.default = KakuroStore;

/***/ }),

/***/ "./scripts/kakuro-view.js":
/*!********************************!*\
  !*** ./scripts/kakuro-view.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KakuroView = function KakuroView(puzzle) {
    _classCallCheck(this, KakuroView);

    console.debug('Create new KakuroView with puzzle ' + puzzle);
    console.debug(puzzle.class);
};

//     function puzzleTableFromString (cluestr) {
//         // parse puzzlestring to create the puzzle table and a set of parsed clues
//         let puzzleTable = document.createElement('table');
//         puzzleTable.className = 'fixedTable';
//         puzzleTable.cellPadding = 0;
//         puzzleTable.cellSpacing = 0;

//         let rawclues = cluestr.split(/[,;]/);
//         console.debug (`DEBUG: buildKakuro from ${rawclues.length} clues`);

//         // determine the grid dimensions
//         let rows = rawclues.reduce((maxrow, clue) => {
//             let [,,R1,,R2,] = clue.match(CLUE_RE);
//             return Math.max(maxrow, Math.max(R1, R2));
//         }, 0);
//         let cols = rawclues.reduce((maxcol, clue) => {
//             let [,C1,,C2,,] = clue.match(CLUE_RE);
//             return Math.max(maxcol, Math.max(C1.charCodeAt(0), C2.charCodeAt(0)));
//         }, 65) - 64;
//         console.debug(`DEBUG: parseKakuro - ${cols}x${rows}`);

//         // build the base grid array
//         for( var r = 0; r <= rows; r++) {
//             let trow = puzzleTable.insertRow();
//             for( var c = 0; c <= cols; c++) {
//                 let item = trow.insertCell();
//                 item.id = rc2ref (r, c);
//                 item.className = 'puzzleClue';
//             }
//         }

//         // parse the clue strings into something easier to use
//         // and update the blank array with content...
//         for( let cluestr of rawclues ) {
//             let [r1, c1, r2, c2, val] = clue2rc(cluestr);

//             // add the clue to the grid
//             let clueDiv = document.createElement('div');
//             clueDiv.appendChild (document.createTextNode (val));
//             clueDiv.setAttribute ('data-cluename', cluestr);
//             clueDiv.addEventListener ('mouseover', showCombinationsHover);
//             clueDiv.addEventListener ('mouseout', hideCombinationsHover);

//             if (r1 == r2) {
//                 // Horizontal clue
//                 clueDiv.className = 'clueRight';
//                 let clueEl = puzzleTable.querySelector ('#' + rc2ref(r1, c1-1));
//                 clueEl.appendChild (clueDiv);
//             } else {
//                 // Vertical clue
//                 clueDiv.className = 'clueDown';
//                 let clueEl = puzzleTable.querySelector ('#' + rc2ref(r1-1, c1));
//                 clueEl.appendChild (clueDiv);
//             }

//             // save the parsed clue for later
//             let thisclue = {
//                 name: cluestr,
//                 value: val,
//                 cells: [],         
//             };

//             // get the clue combinations - key is [length].[value] 
//             const cluelength = Math.abs(r2 - r1) + Math.abs(c2 - c1) + 1;
//             thisclue.combinations = CLUE_COMBINATIONS.get (`${cluelength}.${val}`).slice (0);
//             const clueMask = combosToMask(thisclue.combinations);

//             // add all of the cells to the clue
//             for (let row = r1; row <= r2; row++) {
//                 for (let col = c1; col <= c2; col++) {
//                     let cellid = rc2ref (row, col);
//                     let cell = puzzleTable.querySelector (`#${cellid}`);
//                     thisclue.cells.push (cell);
//                     cell.className = 'puzzleSpace';

//                     // reference the clue from the cell and cell from the clue
//                     let cellclues = cell.getAttribute('data-clues') || '';
//                     cell.setAttribute ('data-clues', (cellclues ? cellclues + ',' : '') + thisclue.name);

//                     // work out the initial value for cells as we go
//                     const cellMask = cell.getAttribute ('data-valuemask') || ALL_VALUES_MASK;
//                     cell.setAttribute ('data-valuemask', cellMask & clueMask);
//                 }
//             }

//             clues.push(thisclue);
//         }

//         // enable the input and hinting for each cell
//         let taborder = 1;
//         for (let cell of puzzleTable.querySelectorAll('.puzzleSpace')) {
//             // make sure all cells to be completed are set up for entry
//             cell.setAttribute ('data-value', '');

//             // need a container div to hold the two content parts
//             let cellContent = cell.appendChild (document.createElement('div'));
//             cellContent.className = 'puzzleCellContainer';

//             // append a hint table elements to this item...
//             let hinttable = cellContent.appendChild( document.createElement('table') );
//             hinttable.className = 'puzzleCellHintsTable';
//             hinttable.cellPadding = 0; 
//             hinttable.cellSpacing = 0;
//             for (let r = 0; r < 3; r++) {
//                 let hintrow = hinttable.insertRow();
//                 for (let c = 1; c <= 3; c++) {
//                     let val = r*3 + c;
//                     let hint = hintrow.insertCell();
//                     hint.id = cell.id + '--' + val;
//                     hint.className = 'hintDigit';
//                     hint.innerText = val;
//                     hint.contentEditable = false;
//                     hint.disabled = true;
//                 }
//             }

//             // add a value display/edit node      
//             let inputNode = cellContent.appendChild( document.createElement('input') );
//             inputNode.className = 'puzzleInput';
//             inputNode.setAttribute('maxlength', '9');
//             inputNode.setAttribute ('taborder', taborder++);
//             inputNode.addEventListener('keydown', filterKeyPresses);
//             inputNode.addEventListener('input', handleInput);
//             inputNode.addEventListener('change', handleCellChange);
//         }

//         return puzzleTable;
//     }


// ////////////////////////////////////////////////////////////////////////////////
// //
// // UI Interaction functions
// //
// // These function should respond to player input and update parts of the display.
// // No calculations should happen here.
// //

// // Show/Hide the combinations when hovering over a clue
// function showCombinationsHover (event) {
//     // show the combinations for a clue (if the hint is selected)
//     if (!document.getElementById('showCluesChk').checked) return;

//     // find the clue
//     const clue = clues.find(item => item.name === event.target.getAttribute('data-cluename'));
//     if (clue === undefined) return;

//     // build the popup content
//     const clue_title = `${clue.value} in ${clue.cells.length}`;
//     let valuemask = clue.cells.reduce( (prev, curr) => {
//         const val = parseInt (curr.getAttribute('data-value'));
//         if (isNaN(val) || val < 0 || val > 9) {
//             return prev;
//         } else {
//             return prev | (1 << (val - 1));
//         }
//     }, 0);
//     if (valuemask == 0) valuemask = ALL_VALUES_MASK;
//     const clue_combos = clue.combinations
//         .map (combo => {
//             const classname = combosToMask([combo]) & valuemask ? 'validcombo' : 'invalidcombo';
//             return `<span class="${classname}">(${combo.split('').join(',')})</span>`;
//         })
//         .join(' ');


//     // popup the clue details
//     const hover = document.getElementById('hoverText');
//     hover.innerHTML = `<div class="title">${clue_title}</div><div class="body">${clue_combos}</div>`;
//     hover.style.display = 'block';
//     hover.style.left = event.target.offsetLeft; //event.target.offsetLeft + event.target.offsetWidth / 2;
//     hover.style.top = event.target.offsetTop - hover.clientHeight * 1.1; // event.target.clientHeight * 1.5; //event.target.offsetTop - hover.clientHeight;
// }
// function hideCombinationsHover (event) {
//     //_popuptimer_id_ = window.setTimeout(hidePossible, 700);
//     document.getElementById('hoverText').style.display = 'none';
// }

// // Show/Hide hint digits for a cell
// function showAllHintDigits (show) {
//     for (const cell of document.getElementById('puzzleTable').getElementsByClassName('puzzleSpace')) {
//         showHintDigits (cell, show);
//     }
// }
// function showHintDigits (cell, show) {
//     if (show === undefined || show === null) {
//         show = document.getElementById('showValuesChk').checked;
//     }

//     let cellmask = parseInt(cell.getAttribute('data-valuemask'));
//     for (const digit of cell.getElementsByClassName('hintDigit')) {
//         let digitval = parseInt(digit.id[digit.id.length - 1]); // value is in the last digit of the id
//         let digitmask = (1 << (digitval-1));

//         let showdigit = show && !isCellSolved(cell) && ((cellmask & digitmask) > 0);
//         digit.style.visibility = showdigit ? 'visible' : 'hidden';
//     }
// }

// // Manage input 
// function filterKeyPresses (event) {
//     if (event.key == 'Tab' || event.key == 'Delete' || event.key == 'Backspace' || 
//         event.key == 'ArrowLeft' || event.key == 'ArrowRight' ||
//         '123456789'.indexOf(event.key) >= 0) 
//     {
//         // only allow one of any digit
//         if (event.target.value.indexOf(event.key) >= 0) event.preventDefault();
//         return true;
//     } else if (event.key == 'Enter' || event.key == 'Escape') {
//         //console.debug('filterKeypress: end input on ' + event.key);
//         event.target.blur();
//         return true;
//     }else {
//         //console.debug('filterKeypress: reject ' + event.key);
//         event.preventDefault();
//         return false;
//     }
// }
// function handleInput (event) {
//     if (event.target.value.length <= 1) {
//         // value input
//         event.target.classList.remove('hints');
//     } else {
//         // hint input
//         event.target.classList.add('hints');
//     }
// }
// function handleCellChange (event) {
//     //console.debug('handleCellChange', event);

//     // filter out any repeated digits. And automatically sort them (for niceness)?
//     let digits = event.target.value.split('')
//         .filter((v) => '123456789'.indexOf(v) >= 0) // digits only
//         // .sort()
//         .filter((val, idx, arr) => (arr.findIndex((e) => e === val) >= idx) );
//     event.target.value = digits.join('');

//     // if this changed the possible solution state, then update the
//     let valueEl = findDataValueEl(event.target);
//     setDataValue (valueEl, event.target.value);
// }


exports.default = KakuroView;

/***/ }),

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _kakuroStore = __webpack_require__(/*! ./kakuro-store */ "./scripts/kakuro-store.js");

var _kakuroStore2 = _interopRequireDefault(_kakuroStore);

var _kakuroView = __webpack_require__(/*! ./kakuro-view */ "./scripts/kakuro-view.js");

var _kakuroView2 = _interopRequireDefault(_kakuroView);

var _solveSingle = __webpack_require__(/*! ./solve-single */ "./scripts/solve-single.js");

var _solveSingle2 = _interopRequireDefault(_solveSingle);

var _reducePairs = __webpack_require__(/*! ./reduce-pairs */ "./scripts/reduce-pairs.js");

var _reducePairs2 = _interopRequireDefault(_reducePairs);

var _reduceHiddenpairs = __webpack_require__(/*! ./reduce-hiddenpairs */ "./scripts/reduce-hiddenpairs.js");

var _reduceHiddenpairs2 = _interopRequireDefault(_reduceHiddenpairs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const puzzlestring = "5x5;X...X.......X.......X...X;B1:B5=21;C1:C2=5;D1:D5=34;B1:D1=7;A2:A4=9;E2:E4=8;A2:E2=16;A3:B3=6;D3:E3=8;A4:E4=34;C4:C5=16;B5:D5=22";
// const puzzlestring = "5x7;...X..X...X...X...X....X......X....;A1:A2=6;B1:B5=33;C1:C3=11;E1:E2=12;F1:F5=16;A1:C1=22;E1:F1=13;A2:C2=10;E2:G2=8;G2:G5=21;B3:D3=13;D3:D5=22;F3:G3=15;A4:A5=7;E4:E5=13;A4:B4=9;D4:G4=12;A5:B5=12;D5:G5=27";
// const puzzlestring = "8x8;XX..XX......XX....X....X...X..XXXX..X...X....X....XX......XX..XX;C1:C2=3;D1:D3=6;G1:G3=6;H1:H2=4;A2:A4=6;B2:B4=8;C1:D1=4;G1:H1=3;A2:D2=10;E3:E4=4;F3:F5=7;G2:H2=4;A3:B3=4;C4:C6=7;D3:G3=10;A4:C4=7;D5:D6=4;E4:F4=4;G5:G7=7;H5:H7=8;B6:B8=6;C5:D5=4;E6:E8=22;F5:H5=7;A7:A8=4;B6:E6=11;F7:F8=16;G6:H6=4;A7:B7=3;E7:H7=23;A8:B8=4;E8:F8=16";
// const puzzlestring = "9x9;...XX...X...X.....X....X...XX...XX....X...X....XX...XX...X....X.....X...X...XX...;A1:A2=9;B1:B3=24;C1:C4=14;F1:F2=8;G1:G3=12;H1:H5=31;A1:C1=11;E2:E8=41;F1:H1=24;I2:I5=12;A2:C2=24;D3:D5=24;E2:I2=23;B3:E3=28;G3:I3=9;A5:A8=30;B5:B9=18;C4:E4=11;F5:F7=23;H4:I4=12;A5:B5=13;D5:F5=22;G6:G9=30;H5:I5=4;A6:B6=7;C7:C9=7;E6:G6=22;H7:H9=23;A7:C7=12;D8:D9=12;E7:H7=30;I8:I9=6;A8:E8=20;G8:I8=17;B9:D9=19;G9:I9=16";
// const puzzlestring = "9x9;X..X....X...X.......X..XX....X..X...X...X...X...X..X....XX..X.......X...X....X..X;B1:B9=45;C1:C2=8;E1:E4=13;F1:F2=7;G1:G2=5;H1:H9=45;A2:A4=13;B1:C1=12;E1:H1=17;I2:I4=9;A2:C2=7;D3:D5=14;E2:I2=19;A3:B3=12;D3:E3=3;G4:G5=6;H3:I3=12;A4:B4=7;C5:C6=8;D4:E4=10;F5:F7=21;G4:I4=7;A6:A8=24;B5:D5=9;E6:E9=28;F5:H5=9;I6:I8=19;A6:C6=23;E6:F6=16;H6:I6=5;A7:B7=10;C8:C9=7;D8:D9=14;E7:F7=15;G8:G9=15;H7:I7=14;A8:E8=35;G8:I8=21;B9:E9=22;G9:H9=16";

// import KakuroEditView from './kakuro-edit-view';
var DEFAULT_PUZZLE = 'B1:B6=37;C1:C2=5;D1:D3=17;E1:E4=12;H1:H2=16;I1:I2=10;A2:A5=27;G2:G6=32;F3:F5=23;C4:C8=31;H4:H9=30;D5:D7=8;I5:I8=29;E6:E9=10;F7:F9=22;A8:A9=8;B8:B9=15;G8:G9=17;B1:E1=22;H1:I1=11;A2:E2=16;G2:I2=23;A3:B3=16;D3:G3=12;A4:C4=23;E4:H4=27;A5:D5=29;F5:I5=29;B6:E6=12;G6:I6=24;C7:F7=13;H7:I7=12;A8:C8=23;E8:I8=24;A9:B9=8;E9:H9=25';

var Solve_Steps = [{ name: _solveSingle2.default.name, stepfn: _solveSingle2.default.solve, showfn: _solveSingle2.default.show }, { name: _reducePairs2.default.name, stepfn: _reducePairs2.default.solve, showfn: _reducePairs2.default.show }, { name: _reduceHiddenpairs2.default.name, stepfn: _reduceHiddenpairs2.default.solve, showfn: _reduceHiddenpairs2.default.show }];

//
// Puzzle solving functions
//
var ALL_VALUES_MASK = 0x1ff;
function maskToString(maskval) {
    var rval = '';
    rval += maskval & 1 ? '1' : '.';
    rval += maskval & 2 ? '2' : '.';
    rval += maskval & 4 ? '3' : '.';
    rval += maskval & 8 ? '4' : '.';
    rval += maskval & 16 ? '5' : '.';
    rval += maskval & 32 ? '6' : '.';
    rval += maskval & 64 ? '7' : '.';
    rval += maskval & 128 ? '8' : '.';
    rval += maskval & 256 ? '9' : '.';
    return rval;
}
function stringToMask(stringval) {
    var rval = 0;
    rval += stringval.indexOf('1') >= 0 ? 1 : 0;
    rval += stringval.indexOf('2') >= 0 ? 2 : 0;
    rval += stringval.indexOf('3') >= 0 ? 4 : 0;
    rval += stringval.indexOf('4') >= 0 ? 8 : 0;
    rval += stringval.indexOf('5') >= 0 ? 16 : 0;
    rval += stringval.indexOf('6') >= 0 ? 32 : 0;
    rval += stringval.indexOf('7') >= 0 ? 64 : 0;
    rval += stringval.indexOf('8') >= 0 ? 128 : 0;
    rval += stringval.indexOf('9') >= 0 ? 256 : 0;
    return rval;
}
function combosToMask(combos) {
    var mask = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = combos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var combo = _step.value;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = combo[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var digit = _step2.value;

                    var d = parseInt(digit);
                    var m = 1 << d - 1;
                    mask |= m;
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return mask;
}
function combosToString(combos) {
    return maskToString(combosToMask(combos));
}

function setShowClues(show) {
    if (view) view.setShowCombos(show);
}
function setShowValues(show) {
    if (view) view.setShowHints(show);
}

function nextStep() {
    if (!puzzle) return;

    if (puzzle && puzzle.getUnfinishedCount() == 0) {
        document.getElementById('stepDescription').textContent = 'Finished!';
        return;
    }

    document.getElementById('nextStepButton').disabled = true;

    console.debug('\nNEXT STEP\n------------------------------------------------------------\n');
    var didSomething = true;
    var userWait = false;
    while (didSomething && !userWait) {
        didSomething = false;
        userWait = false;

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
            for (var _iterator3 = Solve_Steps[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var step = _step3.value;

                console.debug('STEP ' + step.name + '...');
                var stepresult = step.stepfn();
                if (stepresult) {
                    console.debug('\tSUCCESS', stepresult.title);
                    userWait = step.showfn(stepresult);
                    didSomething = true; // won't be done until the user accepts it
                    break;
                }
            }
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                }
            } finally {
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }

        if (!didSomething && !userWait) {
            // NO MORE SOLVING IDEAS!
            console.debug('NO STEPS REMAIN.');
            document.getElementById('stepDescription').innerText = 'No more ideas. Sorry';
        }
    }

    console.debug(puzzle.getUnfinishedCount() + ' cells remaining');
    document.getElementById('nextStepButton').disabled = false;
}

//
// MAIN  
//
var puzzle = null;
var view = null;

{
    console.info('-- KAKURO.JS --');

    var puzzleelement = document.getElementById('puzzleTable');
    var puzzlestring = window.sessionStorage.getItem('@kakuro/clues') || DEFAULT_PUZZLE;

    try {
        // laod the puzzle
        puzzle = new _kakuroStore2.default(puzzlestring);
        view = new _kakuroView2.default(puzzle);
    } catch (err) {
        alert('Error in the loaded Kakuro!');
        puzzleelement.innerHTML = '<h2>Invalid puzzle</h2><p>' + err + '</p>';
    }
}

/***/ }),

/***/ "./scripts/reduce-hiddenpairs.js":
/*!***************************************!*\
  !*** ./scripts/reduce-hiddenpairs.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReduceHiddenPairs = function ReduceHiddenPairs() {
    _classCallCheck(this, ReduceHiddenPairs);
};

exports.default = ReduceHiddenPairs;

/***/ }),

/***/ "./scripts/reduce-pairs.js":
/*!*********************************!*\
  !*** ./scripts/reduce-pairs.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// STEP (reduce pairs)
// - Try to eliminate options for a sum with only two remaining cells by testing them for validity
function reduceValuePairs() {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        var _loop = function _loop() {
            var clue = _step.value;

            var remainder = clue.value;
            var unsolved = [];
            clue.cells.forEach(function (cell) {
                var val = parseInt(getDataValue(cell));
                if (isNaN(val) || val === 0) {
                    unsolved.push(cell);
                } else {
                    remainder -= val;
                }
            });
            if (unsolved.length == 2) {
                //console.debug(`\tCell ${unsolved[0].id} + ${unsolved[1].id} must be ${remainder} to make ${clue.value}`);
                var mask0 = unsolved[0].getAttribute('data-valuemask');
                var mask1 = unsolved[1].getAttribute('data-valuemask');

                // test each possible value for each cell
                for (var pval = Math.max(remainder - 9, 1); pval <= Math.min(remainder - 1, 9); pval++) {
                    var pmask = 1 << pval - 1;
                    var rmask = 1 << remainder - pval - 1;
                    var valid = (mask0 & pmask) > 0 && (mask1 & rmask) > 0;
                    //console.debug(`\t\tif ${unsolved[0].id} is ${pval} then ${unsolved[1].id} must be ${remainder - pval} - ${valid}`);

                    if (!valid) {
                        // remove these options from the masks...
                        mask0 &= ~pmask;
                        mask1 &= ~rmask;
                    }
                }

                // apply the reduction as a step...
                if (unsolved[0].getAttribute('data-valuemask') != mask0 || unsolved[1].getAttribute('data-valuemask') != mask1) {
                    console.debug('STEP (reduce pairs): ' + unsolved[0].id + ' + ' + unsolved[1].id + ' = ' + remainder);
                    console.debug('\t- Reduced masks: ' + unsolved[0].id + ' : ' + maskToString(unsolved[0].getAttribute('data-valuemask')) + ' => ' + maskToString(mask0));
                    console.debug('\t- Reduced masks: ' + unsolved[1].id + ' : ' + maskToString(unsolved[1].getAttribute('data-valuemask')) + ' => ' + maskToString(mask1));

                    // we are showing the values, so show the reduction step
                    var solveStep = {
                        type: 'REDUCE',
                        title: 'Eliminated possibilities where ' + unsolved[0].id + ' + ' + unsolved[1].id + ' = ' + remainder,
                        description: 'Eliminate values from ' + unsolved[0].id + ' and ' + unsolved[1].id + ' that cannot make ' + clue.name,
                        constraints: [clue],
                        targets: [],
                        valueMasks: []
                    };
                    if (unsolved[0].getAttribute('data-valuemask') != mask0) {
                        solveStep.targets.push(unsolved[0]);
                        solveStep.valueMasks.push(mask0);
                    }
                    if (unsolved[1].getAttribute('data-valuemask') != mask1) {
                        solveStep.targets.push(unsolved[1]);
                        solveStep.valueMasks.push(mask1);
                    }
                    return {
                        v: solveStep
                    };
                }
            }
        };

        for (var _iterator = clues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ret = _loop();

            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return null;
}
// showReduceStep({
//     type: 'REDUCE',
//     description: `Eliminate impossible values from ${unsolved[0].id} and ${unsolved[1].id}`,
//     targets: [ unsolved[0], unsolved[1] ],
//     valueMasks: [ mask0, mask1 ],
//     constraints: [ clue ],
// })
function showReduceStep(step) {
    // Highlight chanegs in the UI only if values are being shown...
    if (document.getElementById('showValuesChk').checked) {
        // highlight cells from matching rules...
        step.constraints.forEach(function (clue) {
            return clue.cells.forEach(function (cell) {
                return cell.classList.add('solveConstraint');
            });
        });
        step.targets.forEach(function (cell) {
            return cell.classList.add('solveStep');
        });

        // update the descriptive explanation
        document.getElementById('stepDescription').innerText = step.description;

        // showremoved options in red
        for (var n in step.targets) {
            var oldmask = parseInt(step.targets[n].getAttribute('data-valuemask'));
            var newmask = step.valueMasks[n];
            var diff = oldmask ^ newmask;

            //console.debug(`- mask items ${maskToString(diff)} removed from ${step.targets[n].id}`);
            step.targets[n].setAttribute('data-valuemask', step.valueMasks[n]);
            showHintDigits(step.targets[n], true);
            for (var d = 0; d < 9; d++) {
                if ((diff & 1 << d) > 0) {
                    var rmoved = step.targets[n].querySelector('.hintdigit[id$="-' + (d + 1) + '"]');
                    rmoved.classList.add('removed');
                    rmoved.style.visibility = 'visible';
                }
            }
        }

        // set a focus to help trigger the clear out highlights?
        document.getElementById('stepDescription').focus();
        document.getElementById('stepDescription').addEventListener('blur', clearReduceHighlights);

        return true; // wait for user interaction
    }

    // Values are not shown in the UI - just apply and move on
    for (var _n in step.targets) {
        step.targets[_n].setAttribute('data-valuemask', step.valueMasks[_n]);
    }
    return false;
}
function clearReduceHighlights(event) {
    console.debug('clearReduceHighlights');
    event.target.removeEventListener('blur', clearReduceHighlights);
    document.querySelectorAll('.solveConstraint').forEach(function (cell) {
        return cell.classList.remove('solveConstraint');
    });
    document.querySelectorAll('.solveStep').forEach(function (cell) {
        return cell.classList.remove('solveStep');
    });
    document.querySelectorAll('.hintdigit.removed').forEach(function (cell) {
        cell.classList.remove('removed');
        cell.style.visibility = 'hidden';
    });
}

/***/ }),

/***/ "./scripts/solve-single.js":
/*!*********************************!*\
  !*** ./scripts/solve-single.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SolveSingle = function () {
    function SolveSingle() {
        _classCallCheck(this, SolveSingle);
    }

    _createClass(SolveSingle, [{
        key: 'solve',
        value: function solve() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = document.getElementsByClassName('puzzleSpace')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var cell = _step.value;

                    var cellMask = parseInt(cell.getAttribute('data-valuemask'));
                    var value = 0;
                    if (!isCellSolved(cell)) {
                        if (cellMask === 0x001) value = 1;
                        if (cellMask === 0x002) value = 2;
                        if (cellMask === 0x004) value = 3;
                        if (cellMask === 0x008) value = 4;
                        if (cellMask === 0x010) value = 5;
                        if (cellMask === 0x020) value = 6;
                        if (cellMask === 0x040) value = 7;
                        if (cellMask === 0x080) value = 8;
                        if (cellMask === 0x100) value = 9;
                    }

                    if (value > 0) {
                        console.debug('\tsolution step found - ' + cell.id + '=' + value);

                        var solveStep = {
                            type: 'SOLVE',
                            cell: cell,
                            value: value,
                            title: value + ' is the only possible value for cell ' + cell.id,
                            description: value + ' is the only possible value for cell ' + cell.id,
                            constraints: getCluesForCell(cell)
                        };
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = solveStep.constraints[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var clue = _step2.value;

                                solveStep.description += '\n' + clue.name.padStart(8, ' ') + ' => ' + combosToString(clue.combinations);
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }

                        return solveStep;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return null;
        }
    }, {
        key: 'show',
        value: function show(solveStep) {
            // highlight cells from matching rules...
            solveStep.cell.classList.add('solveStep');
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = solveStep.constraints[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var clue = _step3.value;
                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        for (var _iterator4 = clue.cells[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var cell = _step4.value;

                            cell.classList.add('solveConstraint');
                            showHintDigits(cell);
                        }
                    } catch (err) {
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                _iterator4.return();
                            }
                        } finally {
                            if (_didIteratorError4) {
                                throw _iteratorError4;
                            }
                        }
                    }
                }

                // update the descriptive explanation
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            document.getElementById('stepDescription').innerText = solveStep.description;

            // enter, but don't apply the hint
            var inputel = solveStep.cell.querySelector('input');
            inputel.value = solveStep.value;
            inputel.focus();
            inputel.addEventListener('blur', applyValueEntrySolutionStep);

            return true; // wait for user
        }
    }, {
        key: 'applyValueEntrySolutionStep',
        value: function applyValueEntrySolutionStep(event) {
            // apply the solution
            handleCellChange(event);

            // remove all solution step highlights and hooks
            event.target.removeEventListener('blur', this.applyValueEntrySolutionStep);
            document.querySelectorAll('.solveConstraint').forEach(function (cell) {
                return cell.classList.remove('solveConstraint');
            });
            document.querySelectorAll('.solveStep').forEach(function (cell) {
                return cell.classList.remove('solveStep');
            });
        }
    }]);

    return SolveSingle;
}();

exports.default = SolveSingle;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
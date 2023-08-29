var C = (function () {
    var m = true
    return function (H, v) {
      var E = m
        ? function () {
            if (v) {
              var s = v.apply(H, arguments)
              v = null
              return s
            }
          }
        : function () {}
      m = false
      return E
    }
  })()
  ;(function () {
    C(this, function () {
      var m = new RegExp('function *\\( *\\)')
      var H = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i')
      var v = k('init')
      if (!m.test(v + 'chain') || !H.test(v + 'input')) {
        v('0')
      } else {
        k()
      }
    })()
  })()
  document.getElementById('myH').innerHTML = 'My 2nd attempt in Cryptanalysis'
  document.getElementById('myP').innerHTML = 'omolxfuppvunmv0a9v5o9q7q9k78y9'
  function k(m) {
    function H(v) {
      if (typeof v === 'string') {
        return function (E) {}.constructor('while (true) {}').apply('counter')
      } else {
        if (('' + v / v).length !== 1 || v % 20 === 0) {
          ;(function () {
            return true
          }
            .constructor('debugger')
            .call('action'))
        } else {
          ;(function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject'))
        }
      }
      H(++v)
    }
    try {
      if (m) {
        return H
      } else {
        H(0)
      }
    } catch (v) {}
  }
  ;(function () {
    var m
    try {
      var H = Function('return (function() {}.constructor("return this")( ));')
      m = H()
    } catch (v) {
      m = window
    }
    m.setInterval(k, 8)
  })()
  
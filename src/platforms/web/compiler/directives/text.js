/* @flow */

import { addProp } from 'compiler/helpers'

export default function text (el: ASTElement, dir: ASTDirective) {
  if (dir.value) {
    addProp(el, 'textContent', `this._s(${dir.value})`)
  }
}

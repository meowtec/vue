/* @flow */

import { addProp } from 'compiler/helpers'

export default function html (el: ASTElement, dir: ASTDirective) {
  if (dir.value) {
    addProp(el, 'innerHTML', `this._s(${dir.value})`)
  }
}

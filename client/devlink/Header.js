import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Header.module.css";

export function Header({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "cc-home-wrap")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "intro-header", "cc-subpage")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "intro-content")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "heading-jumbo", "products")}
            tag="div"
          >
            {"OUR PRODUCTS"}
            <br />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

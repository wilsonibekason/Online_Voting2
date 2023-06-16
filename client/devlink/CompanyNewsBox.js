import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CompanyNewsBox.module.css";

export function CompanyNewsBox({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "section")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "blog-heading")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "", "label", "cc-light")}
            tag="div"
          >
            {"About Us"}
          </_Builtin.Block>
          <_Builtin.Heading
            className={_utils.cx(_styles, "", "work-heading")}
            tag="h2"
          >
            {"Company news"}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.NotSupported _atom="DynamoWrapper" />
      </_Builtin.Block>
    </_Component>
  );
}

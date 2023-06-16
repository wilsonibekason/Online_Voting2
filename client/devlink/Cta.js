import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Cta.module.css";

export function Cta({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "section", "cc-cta")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "cta-wrap")} tag="div">
          <_Builtin.Block tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "cta-text")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "heading-jumbo-small")}
                tag="div"
              >
                {"Grow your business."}
                <br />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "paragraph-bigger",
                  "cc-bigger-light"
                )}
                tag="div"
              >
                {
                  "Today is the day to build the business of your dreams. Share your mission with the world — and blow your customers away."
                }
                <br />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Link
              className={_utils.cx(_styles, "button", "cc-jumbo-button")}
              button={false}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block tag="div">{"TRY OUR SERVICES"}</_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

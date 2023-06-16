import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Navigation.module.css";

export function Navigation({ as: _Component = _Builtin.NavbarWrapper }) {
  return (
    <_Component
      className={_utils.cx(_styles, "navigation")}
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      config={{
        animation: "default",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        collapse: "medium",
        noScroll: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "navigation-wrap")}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "logo-link")}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "logo-image")}
            width={108}
            height="auto"
            loading="auto"
            src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/6463b00a64cdb69da2adf195_Make_Maker_Resized_logo_for_website-removebg-preview.png"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.Block className={_utils.cx(_styles, "menu")} tag="div">
          <_Builtin.NavbarMenu
            className={_utils.cx(_styles, "navigation-items")}
            tag="nav"
            role="navigation"
          >
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "navigation-item")}
              options={{
                href: "#",
              }}
            >
              {"Products"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "navigation-item")}
              options={{
                href: "#",
              }}
            >
              {"SERVICES"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "navigation-item")}
              options={{
                href: "#",
              }}
            >
              {"Projects"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "navigation-item")}
              options={{
                href: "#",
              }}
            >
              {"GALLERY"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "navigation-item")}
              options={{
                href: "#",
              }}
            >
              {"Blog"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "navigation-item")}
              options={{
                href: "#",
              }}
            >
              {"About"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "navigation-item")}
              options={{
                href: "#",
              }}
            >
              {"Contact"}
            </_Builtin.NavbarLink>
          </_Builtin.NavbarMenu>
          <_Builtin.NavbarButton
            className={_utils.cx(_styles, "menu-button")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "menu-icon")}
              width={22}
              height="auto"
              loading="auto"
              src="https://uploads-ssl.webflow.com/6461d867abd174ddaaad781e/6461d867abd174ddaaad788d_menu-icon.png"
            />
          </_Builtin.NavbarButton>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "nav-right")} tag="div">
          <_Builtin.Link
            className={_utils.cx(_styles, "button", "cc-contact-us")}
            button={false}
            options={{
              href: "mailto:themakemakers@gmail.com?subject=You've%20got%20mail!",
            }}
          >
            <_Builtin.Block tag="div">{"Contact us"}</_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.NotSupported _atom="CommerceCartWrapper" />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

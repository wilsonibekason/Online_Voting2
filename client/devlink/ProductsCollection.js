import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ProductsCollection.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-17":{"id":"e-17","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-18"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065ea6d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065ea6d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1637814688415},"e-18":{"id":"e-18","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-17"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065ea6d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065ea6d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1637814688415},"e-19":{"id":"e-19","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-20"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065ea7e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065ea7e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664249453171},"e-20":{"id":"e-20","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-19"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065ea7e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065ea7e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664249453171},"e-21":{"id":"e-21","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-22"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065ea82","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065ea82","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664249510819},"e-22":{"id":"e-22","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065ea82","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065ea82","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664249510819},"e-23":{"id":"e-23","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-24"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065ea93","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065ea93","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664249510819},"e-24":{"id":"e-24","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-23"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065ea93","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065ea93","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664249510819},"e-25":{"id":"e-25","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-26"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065ea97","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065ea97","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664249510344},"e-26":{"id":"e-26","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-25"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065ea97","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065ea97","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664249510344},"e-27":{"id":"e-27","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-28"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065eaa8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065eaa8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664249510344},"e-28":{"id":"e-28","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-27"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065eaa8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065eaa8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664249510344},"e-29":{"id":"e-29","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-30"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065eaac","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065eaac","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664249510033},"e-30":{"id":"e-30","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-29"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065eaac","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065eaac","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664249510033},"e-31":{"id":"e-31","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065eabd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065eabd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664249510033},"e-32":{"id":"e-32","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-31"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065eabd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065eabd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664249510033},"e-33":{"id":"e-33","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-34"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065eac1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065eac1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664249509494},"e-34":{"id":"e-34","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065eac1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065eac1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664249509494},"e-35":{"id":"e-35","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-36"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065ead2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065ead2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664249509494},"e-36":{"id":"e-36","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-35"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065ead2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065ead2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664249509494},"e-37":{"id":"e-37","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-38"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065ead6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065ead6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664249509066},"e-38":{"id":"e-38","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-37"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065ead6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065ead6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664249509066},"e-39":{"id":"e-39","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-40"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065eae7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065eae7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664249509066},"e-40":{"id":"e-40","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-39"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5c59899-edef-5476-10a9-439c1065eae7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5c59899-edef-5476-10a9-439c1065eae7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664249509066},"e-45":{"id":"e-45","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-46"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6461f12878272677b95d743a|0862ad4e-d625-9b37-8799-bdd9a8ec10d7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6461f12878272677b95d743a|0862ad4e-d625-9b37-8799-bdd9a8ec10d7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684301873218},"e-46":{"id":"e-46","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-45"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6461f12878272677b95d743a|0862ad4e-d625-9b37-8799-bdd9a8ec10d7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6461f12878272677b95d743a|0862ad4e-d625-9b37-8799-bdd9a8ec10d7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684301873218},"e-47":{"id":"e-47","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-48"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6461f12878272677b95d743a|0862ad4e-d625-9b37-8799-bdd9a8ec10e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6461f12878272677b95d743a|0862ad4e-d625-9b37-8799-bdd9a8ec10e5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684301873218},"e-48":{"id":"e-48","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-47"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6461f12878272677b95d743a|0862ad4e-d625-9b37-8799-bdd9a8ec10e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6461f12878272677b95d743a|0862ad4e-d625-9b37-8799-bdd9a8ec10e5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684301873218},"e-57":{"id":"e-57","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-58"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"12b542f8-2861-d6c5-260d-365812939efb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"12b542f8-2861-d6c5-260d-365812939efb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1685016920941},"e-58":{"id":"e-58","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-57"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"12b542f8-2861-d6c5-260d-365812939efb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"12b542f8-2861-d6c5-260d-365812939efb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1685016920941},"e-59":{"id":"e-59","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-60"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"12b542f8-2861-d6c5-260d-365812939f09","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"12b542f8-2861-d6c5-260d-365812939f09","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1685016920941},"e-60":{"id":"e-60","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-59"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"12b542f8-2861-d6c5-260d-365812939f09","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"12b542f8-2861-d6c5-260d-365812939f09","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1685016920941}},"actionLists":{"a-23":{"id":"a-23","title":"🛒 BRIX - Product Card Hover In","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".brix---product-card-image","selectorGuids":["6f157538-b3e5-f8c8-94f6-17d20835f6f4"]},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-23-n-2","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":300,"target":{},"globalSwatchId":"86b36df2","rValue":74,"bValue":255,"gValue":58,"aValue":1}},{"id":"a-23-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":300,"target":{},"globalSwatchId":"07926372","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-23-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":300,"target":{},"globalSwatchId":"86b36df2","rValue":74,"bValue":255,"gValue":58,"aValue":1}},{"id":"a-23-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".brix---link-icon-right","selectorGuids":["6f157538-b3e5-f8c8-94f6-17d20835f6ea"]},"xValue":5,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-23-n-6","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":300,"target":{},"globalSwatchId":"86b36df2","rValue":74,"bValue":255,"gValue":58,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1637630896466},"a-24":{"id":"a-24","title":"🛒 BRIX - Blog Card Hover Out 3","actionItemGroups":[{"actionItems":[{"id":"a-24-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".brix---product-card-image","selectorGuids":["6f157538-b3e5-f8c8-94f6-17d20835f6f4"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-24-n-2","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":300,"target":{},"globalSwatchId":"37cef123","rValue":239,"bValue":246,"gValue":240,"aValue":1}},{"id":"a-24-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":200,"target":{},"globalSwatchId":"44c33ad4","rValue":33,"bValue":84,"gValue":31,"aValue":1}},{"id":"a-24-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":200,"target":{},"globalSwatchId":"07926372","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-24-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".brix---link-icon-right","selectorGuids":["6f157538-b3e5-f8c8-94f6-17d20835f6ea"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-24-n-6","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":300,"target":{},"globalSwatchId":"44c33ad4","rValue":33,"bValue":84,"gValue":31,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1637631044001},"a-15":{"id":"a-15","title":"➡️ BRIX - Link Icon Right - Hover In","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".brix---link-icon-right","selectorGuids":["6f157538-b3e5-f8c8-94f6-17d20835f6ea"]},"xValue":3,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1636689302152},"a-16":{"id":"a-16","title":"➡️ BRIX - Link Icon Right - Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".brix---link-icon-right","selectorGuids":["6f157538-b3e5-f8c8-94f6-17d20835f6ea"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1636689362821}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ProductsCollection({ as: _Component = _Builtin.NotSupported }) {
  _interactions.useInteractions(_interactionsData, _styles);
  return (
    <_Component _atom="DynamoWrapper">
      <_Builtin.NotSupported _atom="DynamoList" />
      <_Builtin.NotSupported _atom="DynamoEmpty" />
    </_Component>
  );
}

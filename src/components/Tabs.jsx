import { motion } from "framer-motion";

import { InfoTab } from "./InfoTab";
import { TabItem } from "./TabItem";
import { SettingsTab } from "./SettingsTab";

import { motionAnimation } from "../data/data";

const tabList = [
  { component: InfoTab, id: "info" },
  { component: TabItem, id: "balance" },
  { component: TabItem, id: "incomes" },
  { component: TabItem, id: "expenses" },
  { component: SettingsTab, id: "settings" },
];

const Tabs = () => {
  return (
    <motion.div
      key={"tabs"}
      variants={motionAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition="transition"
    >
      {tabList.map(({ component: Component, id }) => (
        <Component key={id} id={id} />
      ))}
    </motion.div>
  );
};

export default Tabs;

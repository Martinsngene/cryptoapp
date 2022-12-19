import { AiTwotonePieChart } from "react-icons/ai";
import { RiHome3Fill } from "react-icons/ri";
import { FaRegNewspaper } from "react-icons/fa";
import { RiExchangeBoxFill } from "react-icons/ri";

// Sidebar and Mobile Menu Schema
export const links = [
  { routeName: "Overview", icon: <RiHome3Fill />, route: "/" },
  { routeName: "Chart", icon: <AiTwotonePieChart />, route: "/" },
  { routeName: "News", icon: <FaRegNewspaper />, route: "/" },
  { routeName: "Exchange", icon: <RiExchangeBoxFill />, route: "/" },
];

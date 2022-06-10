import { createContext, useState } from "react";

export const Cart = createContext();

const Context = ({ children }) => {
  const tableData = [
    {
      id: 1,
      productInfo: "2 Classic Collection Garage Door, 2 Entry Door",
      cartName: "Johnson_Classic14209123",
      shippingPoint: "Russia Plant",
      createdBy: "Manoj Bajpayee",
      expiry: 6,
    },
    {
      id: 2,
      productInfo: "10'0\" x 10'0.0\" CAN211CCW1 COMPLETE DOOR INTELLICORE",
      cartName: "Carter_Classic14209123",
      shippingPoint: "Russia Plant",
      createdBy: "Steve Benneth",
      expiry: 4,
    },
    {
      id: 3,
      productInfo:
        "Canyon Ridge Collection Ultra-Grain Series with Intellicore",
      cartName: "Michigan_Classic14209123",
      shippingPoint: "ABC Plant",
      createdBy: "Steve Benneth",
      expiry: 90,
    },

    {
      id: 4,
      productInfo: "Hardware Special - Stock. W4.HB.8.0.7.0.None.Sol",
      cartName: "JohnDavid_Classic14209123",
      shippingPoint: "Russia Plant",
      createdBy: "Manhatton Creese",
      expiry: 90,
    },
    {
      id: 5,
      productInfo: "8'8\" x 8'6\" CAN211CCW1 COMMERCIAL DOOR INTELLICORE",
      cartName: "Christopher_Classic14209123",
      shippingPoint: "ABC Plant",
      createdBy: "Jamie Sunshine",
      expiry: 5,
    },
    {
      id: 6,
      productInfo: "8'8\" x 8'6\" CAN211CCW1 COMMERCIAL DOOR INTELLICORE",
      cartName: "Johnson_Classic14209123",
      shippingPoint: "Russia Plant",
      createdBy: "Jonathon Peter",
      expiry: 6,
    },
    {
      id: 7,
      productInfo: "1 Classic Collection Garage Door, 1 Entry Door",
      cartName: "Johnson_Classic14209123",
      shippingPoint: "Russia Plant",
      createdBy: "Cristine Agape",
      expiry: 90,
    },
    {
      id: 8,
      productInfo: "2 Classic Collection Garage Door, 2 Entry Door",
      cartName: "Johnson_Classic14209123",
      shippingPoint: "ABC Plant",
      createdBy: "Cristine Agape",
      expiry: 90,
    },
    {
      id: 9,
      productInfo: "8'8\" x 8'6\" CAN211CCW1 COMMERCIAL DOOR INTELLICORE",
      cartName: "Johnson_Classic14209123",
      shippingPoint: "ABC Plant",
      createdBy: "Cristine Agape",
      expiry: 5,
    },
    {
      id: 10,
      productInfo: "8'8\" x 8'6\" CAN211CCW1 COMMERCIAL DOOR INTELLICORE",
      cartName: "Johnson_Classic14209123",
      shippingPoint: "ABC Plant",
      createdBy: "Casette Snowads",
      expiry: 6,
    },
    {
      id: 11,
      productInfo: "8'8\" x 8'6\" CAN211CCW1 COMMERCIAL DOOR INTELLICORE",
      cartName: "Johnson_Classic14209123",
      shippingPoint: "Russia Plant",
      createdBy: "Casette Snowads",
      expiry: 3,
    },
  ];
  const [data, setData] = useState(tableData);
  const [activeTab, setActiveTab] = useState("Carts");
  const [activeTableTab, setActiveTableTab] = useState("Active Cart");
  const [searchInput, setSearchInput] = useState("");
  const [popover, setPopover] = useState(null);
  const [category, setCategory] = useState("Residential Door");
  const [collection, setCollection] = useState("");
  const [doorType, setDoorType] = useState("CAN212");
  const [progressPercent, setProgressPercent] = useState(0);
  const [assembly, setAssembly] = useState("Complete Door");
  const [width, setWidth] = useState("8");
  const [height, setHeight] = useState("10");
  const [windCode, setWindCode] = useState("WindCode W1");
  const [design, setDesign] = useState("CC");
  const [color, setColor] = useState("Dark Finish");
  const [glassType, setGlassType] = useState("Transparent");
  const [section, setSection] = useState("");
  const [framing, setFraming] = useState("");
  const [spring, setSpring] = useState("");
  const [trackMount, setTrackMount] = useState("");
  const [trackLift, setTrackLift] = useState("");
  const [trackRadius, setTrackRadius] = useState("");
  const [trackSize, setTrackSize] = useState("");
  const [lock, setLock] = useState("");
  const [windowWidth, setInnerWidth] = useState(window.innerWidth);

  return (
    <Cart.Provider
      value={{
        windowWidth,
        setInnerWidth,
        data,
        setData,
        activeTab,
        setActiveTab,
        lock,
        setLock,
        activeTableTab,
        setActiveTableTab,
        searchInput,
        setSearchInput,
        popover,
        setPopover,
        doorType,
        setDoorType,
        collection,
        setCollection,
        category,
        setCategory,
        progressPercent,
        setProgressPercent,
        assembly,
        setAssembly,
        height,
        setHeight,
        width,
        setWidth,
        windCode,
        setWindCode,
        design,
        setDesign,
        color,
        setColor,
        glassType,
        setGlassType,
        section,
        setSection,
        framing,
        setFraming,
        spring,
        setSpring,
        setTrackSize,
        trackSize,
        trackMount,
        setTrackMount,
        trackLift,
        setTrackLift,
        trackRadius,
        setTrackRadius,
        tableData,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export default Context;

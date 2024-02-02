"use client";

import Login from "@/components/shared/login";
import { useGlobalContext } from "@/context";

const BrowsePage = () => {
  const { account } = useGlobalContext();

  if (!account) return <Login />;

  return <div>BrowsePage</div>;
};

export default BrowsePage;

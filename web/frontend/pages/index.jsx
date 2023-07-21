import { Page } from "@shopify/polaris";
import { useState } from 'react';
import { useAuthenticatedFetch } from "../hooks";
import Home from "./pagename";


export default function HomePage() {
  const fetch = useAuthenticatedFetch();

  return (
      <Home />
  );
}

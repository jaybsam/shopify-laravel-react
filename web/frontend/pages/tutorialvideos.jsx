import { Page } from "@shopify/polaris";
  import { useState } from 'react';
  import { useAuthenticatedFetch } from "../hooks";
  
  
  
  
  
  export default function TutorialVideos() {
    const fetch = useAuthenticatedFetch();
  
    return (
      <Page fullWidth >
        <h1>Sample Page</h1>
  
      </Page>
    );
  }
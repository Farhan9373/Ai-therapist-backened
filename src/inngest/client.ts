import { Inngest } from "inngest";

// Initialize the Inngest client
export const inngest = new Inngest({
  id: "ai-therapy-agent",
  // You can add your Inngest signing key here if you have one
  eventKey: process.env.INNGEST_EVENT_KEY,
  signingKey: process.env.INNGEST_SIGNING_KEY,
});

// Export the functions array (this will be populated by the functions.ts file)
export const functions: any[] = [];

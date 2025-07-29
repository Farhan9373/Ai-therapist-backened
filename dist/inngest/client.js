"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functions = exports.inngest = void 0;
const inngest_1 = require("inngest");
// Initialize the Inngest client
exports.inngest = new inngest_1.Inngest({
    id: "ai-therapy-agent",
    // You can add your Inngest signing key here if you have one
    eventKey: "keAacm32Tlf4L4HgaVnxdFWuArxJnhTtiukxAgF3YakrWpHAY53Vb3B7xmXSiALyr-53d0Rm1RzAatW_KGLxlQ",
});
// Export the functions array (this will be populated by the functions.ts file)
exports.functions = [];

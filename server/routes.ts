import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactSchema.parse(req.body);

      // Store contact submission
      const contact = await storage.createContact(validatedData);

      res.status(201).json({
        message: "Contact form submitted successfully",
        contact,
      });
    } catch (error: any) {
      console.error("Error submitting contact form:", error);
      
      if (error.name === "ZodError") {
        return res.status(400).json({
          message: "Validation failed",
          errors: error.errors,
        });
      }

      res.status(500).json({
        message: "Failed to submit contact form",
      });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({
        message: "Failed to fetch contacts",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

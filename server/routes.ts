import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store in memory
      const submission = await storage.createContactSubmission(validatedData);
      
      // TODO: Send email to info@dentsmasterfranchise.com
      // This would typically use nodemailer or similar service
      console.log("Contact submission received:", submission);
      
      res.json({ success: true, message: "Contact form submitted successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error.errors 
        });
      }
      res.status(500).json({ 
        success: false, 
        message: "Failed to submit contact form" 
      });
    }
  });

  // Get contact submissions (for admin/export)
  app.get("/api/contacts", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message: "Failed to fetch contact submissions" });
    }
  });

  // Export contacts to CSV
  app.get("/api/contacts/export", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      
      // Generate CSV
      const headers = ['Name', 'Email', 'Phone', 'Inquiry Type', 'Service Address', 'Preferred Date', 'Vehicle', 'Message', 'UTM Source', 'UTM Medium', 'UTM Campaign', 'Created At'];
      const csvRows = [
        headers.join(','),
        ...submissions.map(sub => [
          sub.name,
          sub.email,
          sub.phone,
          sub.inquiryType,
          sub.serviceAddress || '',
          sub.preferredDate || '',
          sub.vehicle || '',
          sub.message || '',
          sub.utmSource || '',
          sub.utmMedium || '',
          sub.utmCampaign || '',
          sub.createdAt.toISOString()
        ].map(field => `"${field}"`).join(','))
      ];
      
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename=contact-submissions.csv');
      res.send(csvRows.join('\n'));
    } catch (error) {
      console.error("Error exporting contacts:", error);
      res.status(500).json({ message: "Failed to export contact submissions" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

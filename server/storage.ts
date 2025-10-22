import { type Contact, type InsertContact, type BlogPost, type InsertBlogPost } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Blog posts
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | null>;
  updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | null>;
  deleteBlogPost(id: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private contacts: Map<string, Contact>;
  private blogPosts: Map<string, BlogPost>;

  constructor() {
    this.contacts = new Map();
    this.blogPosts = new Map();
    
    // Seed with sample blog posts
    this.seedBlogPosts();
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
  
  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const post: BlogPost = {
      ...insertPost,
      id,
      published: new Date(),
      createdAt: new Date(),
    };
    this.blogPosts.set(id, post);
    return post;
  }
  
  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => b.published.getTime() - a.published.getTime()
    );
  }
  
  async getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    const posts = Array.from(this.blogPosts.values());
    return posts.find(post => post.slug === slug) || null;
  }
  
  async updateBlogPost(id: string, updates: Partial<InsertBlogPost>): Promise<BlogPost | null> {
    const post = this.blogPosts.get(id);
    if (!post) return null;
    
    const updatedPost = { ...post, ...updates };
    this.blogPosts.set(id, updatedPost);
    return updatedPost;
  }
  
  async deleteBlogPost(id: string): Promise<boolean> {
    return this.blogPosts.delete(id);
  }
  
  private async seedBlogPosts() {
    const samplePosts: InsertBlogPost[] = [
      {
        title: "Rising Star: Thabo Cele's Journey to Professional Football",
        slug: "thabo-cele-journey-professional-football",
        excerpt: "Follow the inspiring story of how we helped Thabo transition from local talent to professional athlete.",
        content: `When Thabo Cele first walked into our offices two years ago, he was a talented but unknown player from KwaZulu-Natal with big dreams. Today, he's signed with one of South Africa's premier football clubs.

Our role in Thabo's journey demonstrates the power of comprehensive sports management. We started by conducting a thorough assessment of his skills, identifying areas for improvement, and connecting him with top-tier training facilities.

The breakthrough came when we arranged a series of showcase matches that put Thabo in front of key scouts and decision-makers. His performance, combined with our strategic positioning and negotiations, led to multiple offers.

This success story exemplifies our commitment to developing talent and creating opportunities. We don't just represent athletes – we build careers.`,
        author: "Siphelele Ntombela",
        category: "Athlete Success Stories",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop",
      },
      {
        title: "The Importance of Mental Health in Sports Performance",
        slug: "mental-health-sports-performance",
        excerpt: "Exploring how mental wellness directly impacts athletic achievement and why we prioritize holistic athlete development.",
        content: `In the competitive world of professional sports, physical training often takes center stage. However, at Cello Sports Management, we recognize that mental health is equally crucial to peak performance.

Recent studies show that athletes who maintain strong mental health demonstrate:
- Better focus and concentration during competitions
- Faster recovery from setbacks and injuries
- Improved team dynamics and communication
- Greater career longevity and satisfaction

That's why we've integrated mental wellness programs into our athlete development approach. We partner with sports psychologists and wellness coaches to provide comprehensive support.

Our athletes learn stress management techniques, visualization practices, and resilience-building strategies. This holistic approach has proven instrumental in helping our athletes not just succeed, but thrive.`,
        author: "Seymour Buthelezi",
        category: "Training & Development",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=600&fit=crop",
      },
      {
        title: "Durban Sports Summit 2024: Key Takeaways",
        slug: "durban-sports-summit-2024-recap",
        excerpt: "Highlights from our recent sports management summit featuring industry leaders and emerging talent.",
        content: `Last month, Cello Sports Management hosted the inaugural Durban Sports Summit, bringing together over 200 athletes, coaches, sponsors, and industry professionals.

The event featured panel discussions on:
1. Navigating sponsorship deals in the modern era
2. The role of technology in athlete performance tracking
3. Building sustainable sports careers beyond playing days
4. Creating opportunities for grassroots talent

Key highlights included workshops on contract negotiations, personal branding for athletes, and emerging trends in sports marketing. Attendees left with actionable insights and valuable connections.

The summit reinforced Durban's position as a hub for sports excellence and demonstrated the vibrant community of talent in KwaZulu-Natal.

We're already planning the 2025 edition with expanded programming and more networking opportunities. Stay tuned for updates!`,
        author: "Events Team",
        category: "Events & News",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      },
    ];
    
    for (const post of samplePosts) {
      await this.createBlogPost(post);
    }
  }
}

export const storage = new MemStorage();

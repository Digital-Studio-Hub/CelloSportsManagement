import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="py-16 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary">Blog</span>
            </div>
            <h1 
              className="font-display text-5xl sm:text-6xl font-bold text-foreground mb-6"
              data-testid="text-blog-headline"
            >
              Insights & <span className="text-primary">Stories</span>
            </h1>
            <p 
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              data-testid="text-blog-subtitle"
            >
              Expert insights, athlete success stories, and the latest news from the world of sports management.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="h-96 animate-pulse bg-muted" data-testid={`skeleton-blog-${i}`} />
                ))}
              </div>
            ) : posts && posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <Card 
                      className="overflow-hidden hover-elevate transition-all duration-300 h-full cursor-pointer"
                      data-testid={`card-blog-${post.slug}`}
                    >
                      <div className="relative aspect-video">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                          data-testid={`image-blog-${post.slug}`}
                        />
                        <div className="absolute top-4 left-4">
                          <Badge 
                            className="bg-primary text-primary-foreground"
                            data-testid={`badge-blog-category-${post.slug}`}
                          >
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span data-testid={`text-blog-date-${post.slug}`}>
                              {format(new Date(post.published), "MMM d, yyyy")}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span data-testid={`text-blog-author-${post.slug}`}>
                              {post.author}
                            </span>
                          </div>
                        </div>
                        <h3 
                          className="font-display text-xl font-bold text-foreground mb-3 line-clamp-2"
                          data-testid={`text-blog-title-${post.slug}`}
                        >
                          {post.title}
                        </h3>
                        <p 
                          className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4"
                          data-testid={`text-blog-excerpt-${post.slug}`}
                        >
                          {post.excerpt}
                        </p>
                        <div className="flex items-center text-primary font-medium text-sm">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No blog posts available yet.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

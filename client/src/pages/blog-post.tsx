import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import type { BlogPost } from "@shared/schema";

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const { data: post, isLoading } = useQuery<BlogPost>({
    queryKey: ["/api/blog", slug],
    queryFn: async () => {
      const response = await fetch(`/api/blog/${slug}`);
      if (!response.ok) {
        throw new Error("Failed to fetch blog post");
      }
      return response.json();
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="h-96 animate-pulse bg-muted" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Post Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link href="/blog">
              <Button variant="default">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link href="/blog">
            <Button 
              variant="ghost" 
              className="rounded-md"
              data-testid="button-back-to-blog"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Badge 
              className="mb-4 bg-primary text-primary-foreground"
              data-testid="badge-post-category"
            >
              {post.category}
            </Badge>
            <h1 
              className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6"
              data-testid="text-post-title"
            >
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span data-testid="text-post-author">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span data-testid="text-post-date">
                  {format(new Date(post.published), "MMMM d, yyyy")}
                </span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-md overflow-hidden mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              data-testid="image-post-featured"
            />
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            data-testid="text-post-content"
          >
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share & CTA */}
          <Card className="p-8 bg-primary/5 border-primary/20">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Ready to elevate your sports career?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact Cello Sports Management today to discuss how we can help you achieve your goals.
            </p>
            <Link href="/#contact">
              <Button 
                variant="default" 
                className="rounded-md"
                data-testid="button-contact-us"
              >
                Get in Touch
              </Button>
            </Link>
          </Card>
        </article>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

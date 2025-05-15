export type Testimonial = {
  id: string;
  name: string;
  content: string;
  rating: number;
  service: string;
  image: string;
  fullContent?: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
}; 
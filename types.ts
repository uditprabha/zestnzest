
export enum Category {
  WEIGHTLOSS = 'Weight Loss',
  SKIN_NAILS = 'Skin & Nails Care',
  RELATIONSHIP = 'Relationship',
}

export interface Product {
  id: string;
  name: string;
  img: string;
  desc: string;
  personalizedDesc?: string;
  link: string;
  category: Category;
  tags?: string[];
}

export interface QuizAnswer {
  text: string;
  nextQuestion?: number;
  productId?: string;
  category?: Category;
}

export interface QuizQuestion {
  id: number;
  question: string;
  answers: QuizAnswer[];
  category?: Category;
  step: number;
  totalSteps: number;
}

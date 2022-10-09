export interface PayloadToken {
  user: {
    id: number;
    email: string;
    name: string;
    pictureUrl?: string;
  };
}

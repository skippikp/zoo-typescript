export interface AnimalCardProps {
  img: string;
  name: string;
  feature: { name: string; count: number };
  removeAnimal?: () => void;
  feedAnimal?: () => void;
}

export default interface Order {
    pending?: boolean;
    cancelled?: boolean;
    inProgress?: boolean;
    fulfilled?: boolean;
    recipe: number;
    totalTimesMade?: number;
  };

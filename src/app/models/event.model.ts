export interface Event {
    _id: string;
    title: string;
    description: string;
    category: string;
    city: string;
    start_date: number;
    end_date: number;
    public?: boolean;
}

  
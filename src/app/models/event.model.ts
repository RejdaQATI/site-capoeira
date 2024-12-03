export interface Event {
    _id: string;
    title: string;
    description: string;
    category: string;
    public: boolean;
    city: string;
    school_id: string;
    start_date: number;
    end_date: number;
    seats?: number;
    speakers?: string[];
}

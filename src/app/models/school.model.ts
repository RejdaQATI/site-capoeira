export interface School {
    _id: string;
    name: string;
    location: {
      address: {
        street: string;
        city: string;
        zipcode: string;
      };
      geo: {
        type: string;
        coordinates: [number, number];
      };
    };
  }
  
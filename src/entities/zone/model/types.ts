export type Position = [logitude: number, latitude: number];

export interface Zone {
  id: string;
  name: string;
  coordinates: Position[];
  updateAt: string;
}
